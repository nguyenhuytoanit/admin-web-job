import React, { useState } from "react";
import { Card } from "react-bootstrap";
import TemplateEditForm from "./TemplateEditForm";
import { useNavigate } from "react-router-dom";
import TemplateEditContent from "./TemplateEditContent";

function TemplateEdit({ title }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState("info");
  const [templateInfo, setTemplateInfo] = useState({});
  return (
    <Card>
      <Card.Header title={title} className>
        <div>
          <i
            className="fa fa-arrow-left cursor-pointer"
            onClick={() => {
              navigate("/template");
            }}
          ></i>
          <span className="ml-2">Tên template</span>
        </div>
      </Card.Header>
      <Card.Body>
        <ul className="nav nav-tabs nav-tabs-line " role="tablist">
          <li className="nav-item cursor-pointer" onClick={() => setTab("info")}>
            <div
              className={`nav-link font-weight-bold ${tab === "info" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "info").toString()}
            >
              Thông tin
            </div>
          </li>
          <li className="nav-item cursor-pointer" onClick={() => setTab("content")}>
            <div
              className={`nav-link font-weight-bold ${tab === "content" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "content").toString()}
            >
              Nội dung
            </div>
          </li>
        </ul>
        <div className="mt-5">
          {tab === "info" && <TemplateEditForm templateInfo={templateInfo} />}
          {tab === "content" && <TemplateEditContent templateInfo={templateInfo} />}
        </div>
      </Card.Body>
    </Card>
  );
}

export default TemplateEdit;
