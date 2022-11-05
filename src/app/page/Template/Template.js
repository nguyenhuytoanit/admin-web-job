import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getListTemplate } from "redux/action/template";
import ModalAddNewTemplate from "./modal/ModalAddNewTemplate";
import ModalDeleteTemplate from "./modal/ModalDeleteTemplate";

const ActionsColumnFormatter = (
  cell,
  row,
  rowIndex,
  { onClickEditUser, onClickDeleteTemplate }
) => (
  <>
    <div
      className="btn btn-icon btn-light btn-hover-danger btn-sm mx-1 d-inline-block"
      key="edit"
      onClick={(event) => {
        event.stopPropagation();
        onClickDeleteTemplate(row);
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

function Template(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [templates, setTemplates] = useState([]);
  const [templateDetail, setTemplateDetail] = useState({});
  const [isOpenModalAddNew, setIsOpenModalAddNew] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const columns = [
    {
      dataField: "name",
      text: "Tên template",
    },
    {
      dataField: "code",
      text: "Mã template",
    },
    {
      dataField: "",
      text: "Hành động",
      formatter: ActionsColumnFormatter,
      formatExtraData: {
        onClickEditUser: (template) => {
          navigate(`/template/${template.id}/edit`);
        },
        onClickDeleteTemplate: (template) => {
          setTemplateDetail(template);
          setIsOpenModalDelete(true);
        },
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
    },
  ];

  const getListTemplateFn = () => {
    dispatch(getListTemplate()).then((res) => {
      setTemplates(res);
    });
  };

  useEffect(() => {
    getListTemplateFn();
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary text-uppercase"
          onClick={() => setIsOpenModalAddNew(true)}
        >
          Thêm mới mẫu báo cáo
        </button>
      </div>
      <div className="card shadow mt-4">
        <div className="card-body">
          {Array.isArray(templates) && templates.length > 0 ? (
            <BootstrapTable
              wrapperClasses="table-responsive"
              bordered={false}
              classes="table table-head-custom table-vertical-center overflow-hidden"
              bootstrap4
              hover
              remote
              keyField="id"
              data={templates === null ? [] : templates}
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
        <ModalAddNewTemplate
          show={isOpenModalAddNew}
          onHide={() => setIsOpenModalAddNew(false)}
          onSaveSuccess={() => {
            getListTemplateFn();
          }}
        />
      )}
      {isOpenModalDelete && (
        <ModalDeleteTemplate
          show={isOpenModalDelete}
          onHide={() => setIsOpenModalDelete(false)}
          templateInfo={templateDetail}
          onSaveSuccess={() => {
            getListTemplateFn();
          }}
        />
      )}
    </div>
  );
}

export default Template;
