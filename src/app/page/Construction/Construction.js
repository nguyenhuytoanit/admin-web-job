import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch } from "react-redux";
import { getListGroup } from "redux/action/group";
import ModalAddNewConstruction from "./modal/ModalAddNewConstruction";
import ModalDeleteGroup from "./modal/ModalDeleteGroup";
import ModalEditConstruction from "./modal/ModalEditConstruction";

const ActionsColumnFormatter = (cell, row, rowIndex, { onClickEditGroup, onClickDeleteGroup }) => (
  <>
    <div
      className="btn btn-icon btn-light btn-hover-danger btn-sm mx-1 d-inline-block"
      key="edit"
      onClick={(event) => {
        event.stopPropagation();
        onClickDeleteGroup(row);
      }}
    >
      <span className="svg-icon-md svg-icon-danger">
        <i className="fa-solid fa-trash"></i>
      </span>
    </div>
    <div
      className="btn btn-icon btn-light btn-hover-danger btn-sm mx-1 d-inline-block"
      key="edit"
      onClick={(event) => {
        event.stopPropagation();
        onClickEditGroup(row);
      }}
    >
      <span className="svg-icon-md svg-icon-danger">
        <i className="fa-solid fa-pen-to-square"></i>
      </span>
    </div>
  </>
);

function Construction(props) {
  const dispatch = useDispatch();
  const [isOpenModalAddNew, setIsOpenModalAddNew] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [groupDetail, setGroupDetail] = useState(false);
  const [groups, setGroups] = useState([]);

  const columns = [
    {
      dataField: "name",
      text: "Tên công trình",
    },
    {
      dataField: "code",
      text: "Mã công trình",
    },
    {
      dataField: "",
      text: "Hành động",
      formatter: ActionsColumnFormatter,
      formatExtraData: {
        onClickEditGroup: (group) => {
          setGroupDetail(group);
          setIsOpenModalEdit(true);
        },
        onClickDeleteGroup: (group) => {
          setGroupDetail(group);
          setIsOpenModalDelete(true);
        },
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
    },
  ];

  const getListGroupFn = () => {
    dispatch(getListGroup()).then((res) => {
      setGroups(res);
    });
  };

  useEffect(() => {
    getListGroupFn();
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary text-uppercase"
          onClick={() => setIsOpenModalAddNew(true)}
        >
          Thêm mới công trình
        </button>
      </div>
      <div className="card shadow mt-4">
        <div className="card-body">
          {Array.isArray(groups) && groups.length > 0 ? (
            <BootstrapTable
              wrapperClasses="table-responsive"
              bordered={false}
              classes="table table-head-custom table-vertical-center overflow-hidden"
              bootstrap4
              hover
              remote
              keyField="id"
              data={groups === null ? [] : groups}
              columns={columns}
              onTableChange={(type, { page, sizePerPage, sortField, sortOrder, data }) => {}}
            ></BootstrapTable>
          ) : (
            <div className="d-flex align-items-center flex-column">
              <i
                style={{ fontSize: "100px", color: "#e7e7e7" }}
                className="fa-solid fa-receipt"
              ></i>
              <p className="mt-2">Không có dữ liệu</p>
            </div>
          )}
        </div>
      </div>
      {isOpenModalAddNew && (
        <ModalAddNewConstruction
          show={isOpenModalAddNew}
          onHide={() => setIsOpenModalAddNew(false)}
          onSaveSuccess={() => {
            getListGroupFn();
          }}
        />
      )}
      {isOpenModalEdit && (
        <ModalEditConstruction
          show={isOpenModalEdit}
          onHide={() => setIsOpenModalEdit(false)}
          groupInfo={groupDetail}
          onSaveSuccess={() => {
            getListGroupFn();
          }}
        />
      )}
      {isOpenModalDelete && (
        <ModalDeleteGroup
          show={isOpenModalDelete}
          onHide={() => setIsOpenModalDelete(false)}
          groupInfo={groupDetail}
          onSaveSuccess={() => {
            getListGroupFn();
          }}
        />
      )}
    </div>
  );
}

export default Construction;
