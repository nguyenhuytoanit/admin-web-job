import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch } from "react-redux";
import { getListUser } from "redux/action/user";
import ModalAddNewUser from "./modal/ModalAddNewUser";
import ModalDeleteUser from "./modal/ModalDeleteUser";
import ModalEditUser from "./modal/ModalEditUser";

const ActionsColumnFormatter = (cell, row, rowIndex, { onClickEditUser, onClickDeleteUser }) => (
  <>
    <div
      className="btn btn-icon btn-light btn-hover-danger btn-sm mx-1 d-inline-block"
      key="edit"
      onClick={(event) => {
        event.stopPropagation();
        onClickDeleteUser(row);
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
        onClickEditUser(row);
      }}
    >
      <span className="svg-icon-md svg-icon-danger">
        <i className="fa-solid fa-pen-to-square"></i>
      </span>
    </div>
  </>
);

function User(props) {
  const dispatch = useDispatch();
  const [isOpenModalAddNew, setIsOpenModalAddNew] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [users, setUsers] = useState([]);

  const columns = [
    {
      dataField: "full_name",
      text: "Họ và tên",
    },
    {
      dataField: "username",
      text: "Tài khoản",
    },
    {
      dataField: "",
      text: "Hành động",
      formatter: ActionsColumnFormatter,
      formatExtraData: {
        onClickEditUser: (user) => {
          setUserDetail(user);
          setIsOpenModalEdit(true);
        },
        onClickDeleteUser: (user) => {
          setUserDetail(user);
          setIsOpenModalDelete(true);
        },
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
    },
  ];

  const getListUserFn = () => {
    dispatch(getListUser()).then((res) => {
      setUsers(res);
    });
  };

  useEffect(() => {
    getListUserFn();
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary text-uppercase"
          onClick={() => setIsOpenModalAddNew(true)}
        >
          Thêm mới tài khoản
        </button>
      </div>
      <div className="card shadow mt-4">
        <div className="card-body">
          {Array.isArray(users) && users.length > 0 ? (
            <BootstrapTable
              wrapperClasses="table-responsive"
              bordered={false}
              classes="table table-head-custom table-vertical-center overflow-hidden"
              bootstrap4
              hover
              remote
              keyField="id"
              data={users === null ? [] : users}
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
        <ModalAddNewUser
          show={isOpenModalAddNew}
          onHide={() => setIsOpenModalAddNew(false)}
          onSaveSuccess={() => {
            getListUserFn();
          }}
        />
      )}
      {isOpenModalEdit && (
        <ModalEditUser
          show={isOpenModalEdit}
          onHide={() => setIsOpenModalEdit(false)}
          onSaveSuccess={() => {
            getListUserFn();
          }}
          userInfo={userDetail}
        />
      )}
      {isOpenModalDelete && (
        <ModalDeleteUser
          show={isOpenModalDelete}
          onHide={() => setIsOpenModalDelete(false)}
          onSaveSuccess={() => {
            getListUserFn();
          }}
          userInfo={userDetail}
        />
      )}
    </div>
  );
}

export default User;
