import { Input } from "app/common/forms/Input";
import { Select } from "app/common/forms/Select";
import { Field, FieldArray, Form, Formik } from "formik";

function TemplateEditContent(props) {
  const initialValues = {
    general: [
      {
        content: [],
      },
    ],
  };

  return (
    <div>
      <div className="p-3 mb-2 bg-secondary text-white">Thông tin chung</div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => {
          console.log(values);
          return (
            <Form>
              <FieldArray name="general">
                {({ insert, remove, push }) => (
                  <div>
                    {values.general.length > 0 &&
                      values.general.map((general, idxGeneral) => (
                        <div className="card p-3 my-3" key={idxGeneral}>
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
                          <FieldArray name={`general.${idxGeneral}.content`}>
                            {({ insert, remove, push }) => (
                              <div>
                                {values.general[idxGeneral].content.length > 0 &&
                                  values.general[idxGeneral].content.map((friend, index) => (
                                    <div className="card mb-3" key={index}>
                                      <div className="row m-2 align-items-center">
                                        <div className="col-lg-8">
                                          <Field
                                            name={`content.${index}.name`}
                                            component={Input}
                                            placeholder={"Nhập nội dung đoạn văn"}
                                            customFeedbackLabel
                                            withFeedbackLabel
                                          />
                                        </div>
                                        <div className="col-lg-3">
                                          <Select
                                            name="construction"
                                            customFeedbackLabel
                                            withFeedbackLabel
                                          >
                                            <option value="" hidden>
                                              Chọn công trình trực thuộc
                                            </option>
                                            <option value={"1"}>Multiple choice</option>
                                            <option value={"2"}>Textbox</option>
                                            <option value={"2"}>Attachment</option>
                                            <option value={"2"}>Paragraph</option>
                                            <option value={"2"}>Date</option>
                                            <option value={"2"}>Time</option>
                                            <option value={"2"}>Select user</option>
                                          </Select>
                                        </div>
                                        <div className="col-lg-1">
                                          <button
                                            type="button"
                                            className="secondary"
                                            onClick={() => remove(index)}
                                          >
                                            X
                                          </button>
                                        </div>
                                      </div>

                                      {/* <FieldArray name="friends">
                                          {({ insert, remove, push }) => <div></div>}
                                        </FieldArray>
                                        <div className="p-3 row mt-2">
                                          <div className="col-lg-8">
                                            <Field
                                              name={`sdfsdfsdf`}
                                              component={Input}
                                              placeholder={"Nhập nội dung đáp án 1"}
                                              customFeedbackLabel
                                              withFeedbackLabel
                                            />
                                          </div>
                                          <div className="col-lg-3">
                                            <Select
                                              name="sdfsd"
                                              customFeedbackLabel
                                              withFeedbackLabel
                                            >
                                              <option value={"1"}>Không hiển thị ghi chú</option>
                                              <option value={"2"}>Hiển thị ghi chú</option>
                                            </Select>
                                          </div>
                                          <div className="col-lg-1">
                                            <button
                                              type="button"
                                              className="secondary"
                                              onClick={() => remove(index)}
                                            >
                                              X
                                            </button>
                                          </div>
                                        </div> */}
                                    </div>
                                  ))}
                                <div
                                  className=" d-flex align-items-center justify-content-center mt-3 text-primary cursor-pointer"
                                  onClick={() => push({ name: "" })}
                                >
                                  <div className="d-inline-block">
                                    <i className="fa-solid fa-plus"></i>
                                    <span>Thêm mới nội dung</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </FieldArray>
                        </div>
                      ))}
                    <div
                      className=" d-flex align-items-center justify-content-center mt-3 text-primary cursor-pointer"
                      onClick={() => push({ content: [] })}
                    >
                      <div className="d-inline-block">
                        <i className="fa-solid fa-plus"></i>
                        <span>Thêm mới nội dung</span>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
            </Form>
          );
        }}
      </Formik>

      <div className="p-3 mb-2 bg-secondary text-white">Kiểm tra</div>
      {/* <div className="card p-3 my-3">
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
                        <i className="fa-solid fa-plus"></i>
                        <span> Thêm mới nội dung</span>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
              {/* <button type="submit">Invite</button> */}
      {/* </Form>
          )}
        </Formik>
      </div> */}
    </div>
  );
}

export default TemplateEditContent;
