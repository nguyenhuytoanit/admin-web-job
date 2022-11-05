import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { Input } from "app/common/forms/Input";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTemplateDetail, updateTemplate } from "redux/action/template";
import { useNotify } from "hooks/useNotify";

function TemplateEditForm() {
  const dispatch = useDispatch();
  const { successNotify, errorNotify } = useNotify();
  const { id } = useParams();
  const [templateDetail, setTemplateDetail] = useState({});
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim("Không được để trống").required("Bắt buộc"),
    code: Yup.string().trim("Không được để trống").required("Bắt buộc"),
  });

  useEffect(() => {
    dispatch(getTemplateDetail(id)).then((res) => {
      setTemplateDetail(res);
    });
  }, [id, dispatch]);

  return (
    <Formik
      initialValues={{
        name: templateDetail.name,
        code: templateDetail.code,
      }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => {
        const params = {
          name: values.name.trim(),
          code: values.code.trim(),
          templateId: templateDetail.id,
        };
        dispatch(updateTemplate(params))
          .then((res) => {
            successNotify("Tạo mới thành công");
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
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Lưu lại
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default TemplateEditForm;
