import { Input } from "app/common/forms/Input";
import { InputPassword } from "app/common/forms/InputPassword";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/action/auth";
import * as Yup from "yup";
import "./scss/login.scss";

function LoginPage(props) {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Bắt buộc"),
    password: Yup.string().required("Bắt buộc"),
  });

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="title">Hệ thống quản lý công trình</div>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            const params = {
              username: values.username,
              password: values.password,
            };
            dispatch(login(params)).then(() => {
              setSubmitting(false);
            });
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form className="form mt-3">
                <div className="form-group row">
                  <div className="col-lg-12 mt-3">
                    <Field
                      name="username"
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
