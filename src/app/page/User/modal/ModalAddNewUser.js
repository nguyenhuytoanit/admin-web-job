import { Input } from "app/common/forms/Input";
import { InputPassword } from "app/common/forms/InputPassword";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";

function ModalAddNewUser({ show, onHide, onSaveSuccess }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(""),
  });

  return (
    <Modal size="lg" show={show} onHide={onHide} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Thêm mới tài khoản</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ name: "", account: "", password: "" }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Modal.Body>
              <div className="form-group row">
                <div className="col-lg-12 mt-2">
                  <Field
                    name="name"
                    component={Input}
                    placeholder={"Họ và tên"}
                    label={"Họ và tên"}
                    focus
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <Field
                    name="account"
                    component={Input}
                    placeholder={"Tài khoản"}
                    label={"Tài khoản"}
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <Field
                    name="password"
                    component={InputPassword}
                    placeholder={"Mật khẩu"}
                    label={"Mật khẩu"}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
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
