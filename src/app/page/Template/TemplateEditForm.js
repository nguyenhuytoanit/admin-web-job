import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { Input } from "app/common/forms/Input";

function TemplateEditForm({ templateInfo }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Bắt buộc"),
    code: Yup.string().required("Bắt buộc"),
  });
  return (
    <Formik
      initialValues={{
        name: templateInfo.name,
        code: templateInfo.code,
      }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div className="form-group row">
            <div className="col-lg-12 mt-2">
              <Field
                name="name"
                component={Input}
                placeholder={"Tên template"}
                label={"Tên template"}
                customFeedbackLabel
                withFeedbackLabel
                focus
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
          </div>
          <Button variant="primary" type="submit">
            Lưu lại
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default TemplateEditForm;
