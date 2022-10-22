import { Input } from "app/common/forms/Input";
import { InputPassword } from "app/common/forms/InputPassword";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./scss/login.scss";

function LoginPage(props) {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Bắt buộc"),
    password: Yup.string().required("Bắt buộc"),
  });

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="title">Hệ thống quản lý công trình</div>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form className="form mt-3">
                <div className="form-group row">
                  <div className="col-lg-12 mt-3">
                    <Field
                      name="email"
                      component={Input}
                      placeholder={"Tài khoản"}
                      label={"Tài khoản"}
                      customFeedbackLabel
                      withFeedbackLabel
                      focus
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12 mt-3">
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
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Đăng nhập
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default LoginPage;
