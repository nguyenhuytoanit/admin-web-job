import { Input } from "app/common/forms/Input";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";

function TemplateEditContent(props) {
  const initialValues = {
    friends: [
      {
        name: "",
        email: "",
      },
    ],
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
              <FieldArray name="friends">
                {({ insert, remove, push }) => (
                  <div>
                    {values.friends.length > 0 &&
                      values.friends.map((friend, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            {/* <label htmlFor={`friends.${index}.name`}>Name</label>
                            <Field
                              name={`friends.${index}.name`}
                              placeholder="Jane Doe"
                              type="text"
                            />
                            <ErrorMessage
                              name={`friends.${index}.name`}
                              component="div"
                              className="field-error"
                            /> */}
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
                          {/* <div className="col">
                            <label htmlFor={`friends.${index}.email`}>Email</label>
                            <Field
                              name={`friends.${index}.email`}
                              placeholder="jane@acme.com"
                              type="email"
                            />
                            <ErrorMessage
                              name={`friends.${index}.name`}
                              component="div"
                              className="field-error"
                            />
                          </div> */}
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
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push({ name: "", email: "" })}
                    >
                      Add Friend
                    </button>
                  </div>
                )}
              </FieldArray>
              <button type="submit">Invite</button>
            </Form>
          )}
        </Formik>
      </div>

      <div class="p-3 mb-2 bg-secondary text-white">Kiểm tra</div>
    </div>
  );
}

export default TemplateEditContent;
