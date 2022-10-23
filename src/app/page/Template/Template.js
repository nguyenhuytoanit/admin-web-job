import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationProvider } from "react-bootstrap-table2-paginator";
import ModalAddNewTemplate from "./modal/ModalAddNewTemplate";
import { useNavigate } from "react-router-dom";

const ActionsColumnFormatter = (cell, row, rowIndex, { onClickEditUser }) => (
  <>
    <div
      className="btn btn-icon btn-light btn-hover-danger btn-sm mx-1 d-inline-block"
      key="edit"
      onClick={(event) => {
        event.stopPropagation();
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
  let navigate = useNavigate();
  const [isOpenModalAddNew, setIsOpenModalAddNew] = useState(false);
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
          navigate(`/template/${template._id}/edit`);
        },
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
    },
  ];

  const templateList = [
    { _id: 1, name: "name1", code: 1 },
    { _id: 2, name: "name2", code: 2 },
    { _id: 3, name: "name3", code: 3 },
    { _id: 4, name: "name4", code: 4 },
    { _id: 5, name: "name5", code: 5 },
    { _id: 6, name: "name6", code: 6 },
    { _id: 7, name: "name7", code: 7 },
    { _id: 8, name: "name8", code: 8 },
    { _id: 9, name: "name9", code: 9 },
    { _id: 10, name: "name10", code: 10 },
  ];

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary text-uppercase"
          onClick={() => setIsOpenModalAddNew(true)}
        >
          Thêm mới Template
        </button>
      </div>
      <div className="card shadow mt-4">
        <div className="card-body">
          <PaginationProvider
            pagination={paginationFactory({
              hideSizePerPage: true,
              // totalSize: countClass,
              // page: queryParams.pageNumber,
            })}
          >
            {({ paginationTableProps }) => {
              return (
                <BootstrapTable
                  wrapperClasses="table-responsive"
                  bordered={false}
                  classes="table table-head-custom table-vertical-center overflow-hidden"
                  bootstrap4
                  hover
                  remote
                  keyField="_id"
                  data={templateList === null ? [] : templateList}
                  columns={columns}
                  onTableChange={(type, { page, sizePerPage, sortField, sortOrder, data }) => {}}
                  {...paginationTableProps}
                ></BootstrapTable>
              );
            }}
          </PaginationProvider>
        </div>
      </div>
      {isOpenModalAddNew && (
        <ModalAddNewTemplate
          show={isOpenModalAddNew}
          onHide={() => setIsOpenModalAddNew(false)}
          onSaveSuccess={() => {}}
        />
      )}
    </div>
  );
}

export default Template;
