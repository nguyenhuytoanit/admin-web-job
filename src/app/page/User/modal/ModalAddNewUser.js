import { Input } from "app/common/forms/Input";
import { InputPassword } from "app/common/forms/InputPassword";
import { Select } from "app/common/forms/Select";
import { Field, Form, Formik } from "formik";
import { useNotify } from "hooks/useNotify";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createUser } from "redux/action/user";
import * as Yup from "yup";

function ModalAddNewUser({ show, onHide, onSaveSuccess }) {
  const dispatch = useDispatch();
  const { successNotify, errorNotify } = useNotify();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().trim("Không được để trống").required("Bắt buộc"),
    account: Yup.string().trim("Không được để trống").required("Bắt buộc"),
    role: Yup.string().required("Bắt buộc"),
    password: Yup.string()
      .min(6, "Mật khẩu tối đa 6 ký tự")
      .trim("Không được để trống")
      .required("Bắt buộc"),
  });

  return (
    <Modal size="lg" show={show} onHide={onHide} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Thêm mới tài khoản</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ fullName: "", account: "", role: "", password: "" }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          const params = {
            username: values.account.trim(),
            full_name: values.fullName.trim(),
            role: values.role.trim(),
            password: values.password.trim(),
          };
          dispatch(createUser(params))
            .then((res) => {
              successNotify("Tạo mới thành công");
              onSaveSuccess();
              onHide();
            })
            .catch((error) => {
              errorNotify("Có lỗi xảy ra khi tạo mới");
            });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Modal.Body>
              <div className="form-group row">
                <div className="col-lg-12 mt-2">
                  <Field
                    name="fullName"
                    component={Input}
                    placeholder={"Họ và tên"}
                    label={"Họ và tên"}
                    customFeedbackLabel
                    withFeedbackLabel
                    focus
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <Field
                    name="account"
                    component={Input}
                    placeholder={"Tài khoản"}
                    label={"Tài khoản"}
                    customFeedbackLabel
                    withFeedbackLabel
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <Select name="role" label={"Quyền quản lý"} customFeedbackLabel withFeedbackLabel>
                    <option value="" hidden>
                      Chọn quyền cho người dùng
                    </option>
                    <option value="manage">Quản lý</option>
                    <option value="admin">Quản trị viên</option>
                    <option value="staff">Nhân viên</option>
                  </Select>
                </div>
                <div className="col-lg-12 mt-2">
                  <Field
                    name="password"
                    component={InputPassword}
                    placeholder={"Mật khẩu"}
                    label={"Mật khẩu"}
                    customFeedbackLabel
                    withFeedbackLabel
                  />
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

export default ModalAddNewUser;
