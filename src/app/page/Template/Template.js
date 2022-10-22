import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationProvider } from "react-bootstrap-table2-paginator";

function Template(props) {
  const columns = [
    {
      dataField: "name",
      text: "Họ và tên",
    },
    {
      dataField: "price",
      text: "Tài khoản",
    },
    {
      dataField: "",
      text: "Hành động",
      formatter: ActionsColumnFormatter,
      formatExtraData: {},
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
    },
  ];

  const templateList = [
    { _id: 1, name: "name1", price: 1 },
    { _id: 2, name: "name2", price: 2 },
    { _id: 3, name: "name3", price: 3 },
    { _id: 4, name: "name4", price: 4 },
    { _id: 5, name: "name5", price: 5 },
    { _id: 6, name: "name6", price: 6 },
    { _id: 7, name: "name7", price: 7 },
    { _id: 8, name: "name8", price: 8 },
    { _id: 9, name: "name9", price: 9 },
    { _id: 10, name: "name10", price: 10 },
  ];

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary">Thêm mới tài khoản</button>
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
    </div>
  );
}

export default Template;

export const ActionsColumnFormatter = (cell, row, rowIndex) => (
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
      }}
    >
      <span className="svg-icon-md svg-icon-danger">
        <i className="fa-solid fa-pen-to-square"></i>
      </span>
    </div>
  </>
);
