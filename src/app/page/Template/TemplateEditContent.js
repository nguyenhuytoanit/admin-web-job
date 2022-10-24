import { Input } from "app/common/forms/Input";
import { Select } from "app/common/forms/Select";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";

function TemplateEditContent(props) {
  const initialValues = {
    friends: [],
  };

  return (
    <div>
      <div class="p-3 mb-2 bg-secondary text-white">Thông tin chung</div>
      <div className="card p-3 my-3">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <div className="form-group row">
                <div className="col-lg-12 mt-2">
                  <Field
                    name="name"
                    component={Input}
                    placeholder={"Nhập tên block"}
                    customFeedbackLabel
                    withFeedbackLabel
                    focus
                  />
                </div>
              </div>
              <FieldArray name="friends">
                {({ insert, remove, push }) => (
                  <div>
                    {values.friends.length > 0 &&
                      values.friends.map((friend, index) => (
                        <div className="card mb-3" key={index}>
                          <div className="row m-2">
                            <div className="col-lg-8">
                              <Field
                                name={`friends.${index}.name`}
                                component={Input}
                                placeholder={"Nhập nội dung đoạn văn"}
                                customFeedbackLabel
                                withFeedbackLabel
                                focus
                              />
                            </div>
                            <div className="col-lg-4">sdf</div>
                            <Select
                              name="construction"
                              label={"Thuộc công trình"}
                              customFeedbackLabel
                              withFeedbackLabel
                            >
                              <option value="" hidden>
                                Chọn công trình trực thuộc
                              </option>
                              <option value={"1"}>Công trình</option>
                              <option value={"2"}>Công trình 2</option>
                            </Select>
                            {/* <div className="col">
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div> */}
                          </div>
                        </div>
                      ))}
                    <div
                      className=" d-flex align-items-center justify-content-center mt-3 text-primary cursor-pointer"
                      onClick={() => push({ name: "", email: "" })}
                    >
                      <div className="d-inline-block">
                        <i class="fa-solid fa-plus"></i>
                        <span> Thêm mới nội dung</span>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
              {/* <button type="submit">Invite</button> */}
            </Form>
          )}
        </Formik>
      </div>

      <div class="p-3 mb-2 bg-secondary text-white">Kiểm tra</div>
      <div className="card p-3 my-3">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <div className="form-group row">
                <div className="col-lg-12 mt-2">
                  <Field
                    name="name"
                    component={Input}
                    placeholder={"Nhập tên block"}
                    customFeedbackLabel
                    withFeedbackLabel
                    focus
                  />
                </div>
              </div>
              <FieldArray name="friends">
                {({ insert, remove, push }) => (
                  <div>
                    {values.friends.length > 0 &&
                      values.friends.map((friend, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <Field
                              name={`friends.${index}.name`}
                              component={Input}
                              placeholder={"Tên template"}
                              label={"Tên template"}
                              customFeedbackLabel
                              withFeedbackLabel
                              focus
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <div
                      className=" d-flex align-items-center justify-content-center mt-3 text-primary cursor-pointer"
                      onClick={() => push({ name: "", email: "" })}
                    >
                      <div className="d-inline-block">
                        <i class="fa-solid fa-plus"></i>
                        <span> Thêm mới nội dung</span>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
              {/* <button type="submit">Invite</button> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default TemplateEditContent;
