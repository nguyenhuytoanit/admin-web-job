import DropFileInput from "app/common/forms/DropFileInput";
import { Input } from "app/common/forms/Input";
import { Select } from "app/common/forms/Select";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import * as Yup from "yup";
import avatar1 from "assets/media/image/Vector.png";
import avatar2 from "assets/media/image/Vector2.png";
import avatar3 from "assets/media/image/vector3.png";
import avatar4 from "assets/media/image/vertor4.png";
import avatar5 from "assets/media/image/vertor5.png";
import avatar6 from "assets/media/image/vertor6.png";
import avatar7 from "assets/media/image/vertor7.png";
import avatar8 from "assets/media/image/vertor8.png";
import avatar9 from "assets/media/image/vertor9.png";
import avatar10 from "assets/media/image/vertor10.png";
import avatar11 from "assets/media/image/vertor11.png";
import { useDispatch } from "react-redux";
import { createTemplate } from "redux/action/template";
import { getListGroup } from "redux/action/group";
import { useNotify } from "hooks/useNotify";

function ModalAddNewTemplate({ show, onHide, onSaveSuccess }) {
  const dispatch = useDispatch();
  const { successNotify, errorNotify } = useNotify();
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim("Không được để trống").required("Bắt buộc"),
    code: Yup.string().trim("Không được để trống").required("Bắt buộc"),
    construction: Yup.string().required("Băt buộc"),
  });
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [groups, setGroups] = useState([]);
  const [showUpImage, setShowUpImage] = useState(false);

  const onUploadFile = (file) => {
    if (!file) return;
    setAvatar(file);
  };

  useEffect(() => {
    if (avatar) {
      const objectUrl = URL.createObjectURL(avatar);
      setAvatarPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [avatar]);

  useEffect(() => {
    dispatch(getListGroup()).then((res) => {
      setGroups(res);
    });
  }, [dispatch]);

  return (
    <Modal size="lg" show={show} onHide={onHide} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Thêm mới template</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ name: "", code: "", construction: "" }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          const params = {
            name: values.name.trim(),
            code: values.code.trim(),
            group_id: values.construction || "",
            filedata: avatar,
            image: "image",
          };
          dispatch(createTemplate(params))
            .then((res) => {
              successNotify("Tạo mới thành công");
              onSaveSuccess();
              onHide();
              setSubmitting(false);
            })
            .catch((error) => {
              errorNotify("Có lỗi xảy ra khi tạo mới");
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Modal.Body>
              <div className="form-group row">
                <div className="col-lg-12 mt-2">
                  <Field
                    name="name"
                    component={Input}
                    placeholder={"Tên template"}
                    label={"Tên template"}
                    customFeedbackLabel
                    withFeedbackLabel
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <Field
                    name="code"
                    component={Input}
                    placeholder={"Mã template"}
                    label={"Mã template"}
                    customFeedbackLabel
                    withFeedbackLabel
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <Select
                    name="construction"
                    label={"Thuộc công trình"}
                    customFeedbackLabel
                    withFeedbackLabel
                    disabled={groups.length === 0}
                  >
                    <option value="" hidden>
                      Chọn công trình trực thuộc
                    </option>
                    {groups?.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="col-lg-12 mt-2">
                  <p>Ảnh đại diện</p>
                  {avatar ? (
                    <div className="d-flex align-items-center justify-content-between">
                      <img className="w-200px object-fit-contain" src={avatarPreview} alt="" />
                      <div
                        className="text-hover-danger text-danger cursor-pointer"
                        onClick={() => setAvatar(false)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  ) : (
                    <DropFileInput onChange={onUploadFile} />
                  )}
                </div>
                <div className="col-lg-12 mt-2">
                  <Dropdown
                    drop="up"
                    id="dropdown-button-drop-up"
                    onToggle={() => setShowUpImage(!showUpImage)}
                    show={showUpImage}
                  >
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                      Chọn ảnh từ thư viện
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2">
                      <div className="d-flex w-200px justify-content- flex-wrap">
                        <div className="p-2 cursor-pointer">
                          <img src={avatar1} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar2} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar3} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar4} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar5} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar6} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar7} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar8} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar9} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar10} alt="" />
                        </div>
                        <div className="p-2 cursor-pointer">
                          <img src={avatar11} alt="" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="btn btn-primary w-80px">OK</div>
                        <div
                          className="btn btn-outline-primary w-80px"
                          onClick={() => setShowUpImage(false)}
                        >
                          HỦY
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                TẠO MỚI
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

const CustomToggle = ({ children, onClick }) => {
  return (
    <a
      className="cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  );
};

export default ModalAddNewTemplate;
