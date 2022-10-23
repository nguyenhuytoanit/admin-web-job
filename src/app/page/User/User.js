import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationProvider } from "react-bootstrap-table2-paginator";
import ModalAddNewUser from "./modal/ModalAddNewUser";
import ModalEditUser from "./modal/ModalEditUser";

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

function User(props) {
  const [isOpenModalAddNew, setIsOpenModalAddNew] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [userDetail, setUserDetail] = useState(false);

  const columns = [
    {
      dataField: "name",
      text: "Họ và tên",
    },
    {
      dataField: "account",
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
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
    },
  ];

  const templateList = [
    { _id: 1, name: "name1", account: 1, password: "password1" },
    { _id: 2, name: "name2", account: 2, password: "password1" },
    { _id: 3, name: "name3", account: 3, password: "password1" },
    { _id: 4, name: "name4", account: 4, password: "password1" },
    { _id: 5, name: "name5", account: 5, password: "password1" },
    { _id: 6, name: "name6", account: 6, password: "password1" },
    { _id: 7, name: "name7", account: 7, password: "password1" },
    { _id: 8, name: "name8", account: 8, password: "password1" },
    { _id: 9, name: "name9", account: 9, password: "password1" },
    { _id: 10, name: "name10", account: 10, password: "password1" },
  ];

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
        <ModalAddNewUser
          show={isOpenModalAddNew}
          onHide={() => setIsOpenModalAddNew(false)}
          onSaveSuccess={() => {}}
        />
      )}
      {isOpenModalEdit && (
        <ModalEditUser
          show={isOpenModalEdit}
          onHide={() => setIsOpenModalEdit(false)}
          onSaveSuccess={() => {}}
          userInfo={userDetail}
        />
      )}
    </div>
  );
}

export default User;
