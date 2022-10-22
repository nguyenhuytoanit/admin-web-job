import React, { useRef, useState } from "react";
import "./DropFileInput.css";
import { Icon } from "@material-ui/core";
import { useIntl } from "react-intl";

function DropFileInput({ onChange }) {
  const intl = useIntl();
  const wrapperRef = useRef();

  const onUploadFile = (e) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];

    onChange(file);
  };

  const onDragEnter = (event) => {
    event.target.value = "";
    wrapperRef.current.classList.add("dragover");
  };

  const onDragLeave = () => {
    wrapperRef.current.classList.remove("dragover");
  };

  const onDrop = () => {
    wrapperRef.current.classList.remove("dragover");
  };

  const onClickInput = (event) => {
    event.target.value = "";
  }

  /*
  Có 2 cách handle việc hiển thị file khi xoá và thêm mới cùng 1 file
  dùng key random hoặc là handle việc click input để value sẽ được làm mới mỗi khi click.
  * */

  return (
    <div
      className="w-100 h-100px"
      ref={wrapperRef}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="drop-file-label bg-light w-100 h-100">
        <input type="file" onChange={onUploadFile} onClick={onClickInput}></input>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <Icon className="fas fa-cloud-upload-alt w-30px text-secondary"></Icon>
          <p className="mb-0 text-secondary">
            {intl.formatMessage({
              id: "common_field_file_upload",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DropFileInput;
