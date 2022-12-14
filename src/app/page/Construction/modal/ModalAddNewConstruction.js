import { Input } from "app/common/forms/Input";
import { Field, Form, Formik } from "formik";
import { useNotify } from "hooks/useNotify";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createGroup } from "redux/action/group";
import * as Yup from "yup";

function ModalAddNewConstruction({ show, onHide, onSaveSuccess }) {
  const dispatch = useDispatch();
  const { successNotify, errorNotify } = useNotify();

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim("Không được để trống").required("Bắt buộc"),
    code: Yup.string().trim("Không được để trống").required("Bắt buộc"),
  });

  return (
    <Modal size="lg" show={show} onHide={onHide} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Thêm mới công trình</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ name: "", code: "" }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          const params = {
            name: values.name.trim(),
            code: values.code.trim(),
          };
          dispatch(createGroup(params)).then((res) => {
            if (res.error) {
              errorNotify("Có lỗi xảy ra khi tạo mới");
            } else {
              successNotify("Tạo mới thành công");
              onSaveSuccess();
              onHide();
            }
            setSubmitting(false);
          });
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
                    placeholder={"Tên công trình"}
                    label={"Tên công trình"}
                    customFeedbackLabel
                    withFeedbackLabel
                    focus
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <Field
                    name="code"
                    component={Input}
                    placeholder={"Mã công trình"}
                    label={"Mã công trình"}
                    customFeedbackLabel
                    withFeedbackLabel
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

export default ModalAddNewConstruction;
