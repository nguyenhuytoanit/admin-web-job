import { Input } from "app/common/forms/Input";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";

function ModalEditConstruction({ show, onHide, onSaveSuccess, constructionInfo }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Bắt buộc"),
    code: Yup.string().required("Bắt buộc"),
  });

  return (
    <Modal size="lg" show={show} onHide={onHide} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sửa thông tin "{constructionInfo.name}"
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          name: constructionInfo.name,
          code: constructionInfo.code,
        }}
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
                Lưu lại
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default ModalEditConstruction;
