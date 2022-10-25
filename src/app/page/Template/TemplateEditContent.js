import { Input } from "app/common/forms/Input";
import { Select } from "app/common/forms/Select";
import { Field, FieldArray, Form, Formik } from "formik";
import MultiPleChoice from "./question/MultiPleChoice";

function TemplateEditContent(props) {
  const initialValues = {
    general: [
      {
        content: [
          {
            question: [
              { type: "multiple-choice", answers: [{ contentAnswer: "Nhập nội dung đáp án" }] },
            ],
          },
        ],
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
                            {({ insert, remove, push }) => {
                              const listContent = values.general[idxGeneral].content;
                              return (
                                <div>
                                  {listContent.length > 0 &&
                                    listContent.map((content, idxContent) => (
                                      <div className="card mb-3" key={idxContent}>
                                        <div className="row m-2 align-items-center">
                                          <div className="col-lg-8">
                                            <Field
                                              name={`content.${idxContent}.name`}
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
                                              <option value={"multiple-choice"}>
                                                Multiple choice
                                              </option>
                                              <option value={"textbox"}>Textbox</option>
                                              <option value={"attachment"}>Attachment</option>
                                              <option value={"paragraph"}>Paragraph</option>
                                              <option value={"date"}>Date</option>
                                              <option value={"time"}>Time</option>
                                              <option value={"select-user"}>Select user</option>
                                            </Select>
                                          </div>
                                          <div className="col-lg-1">
                                            <button
                                              type="button"
                                              className="secondary"
                                              onClick={() => remove(idxContent)}
                                            >
                                              X
                                            </button>
                                          </div>
                                        </div>
                                        <FieldArray
                                          name={`general.${idxGeneral}.content.${idxContent}.question`}
                                        >
                                          {({ insert, remove, push }) => {
                                            const listQuestion =
                                              values.general[idxGeneral].content[idxContent]
                                                .question;
                                            return (
                                              <div>
                                                {listQuestion.length > 0 &&
                                                  listQuestion.map((question, idxQuestion) => {
                                                    return (
                                                      <div key={idxQuestion}>
                                                        {question.type === "multiple-choice" && (
                                                          <MultiPleChoice
                                                            field={`general.${idxGeneral}.content.${idxContent}.question.${idxQuestion}.answers`}
                                                            listAnswer={
                                                              listQuestion[idxQuestion].answers
                                                            }
                                                            idxQuestion={idxQuestion}
                                                          />
                                                        )}
                                                      </div>
                                                    );
                                                  })}
                                              </div>
                                            );
                                          }}
                                        </FieldArray>
                                      </div>
                                    ))}
                                  <div
                                    className=" d-flex align-items-center justify-content-center mt-3 text-primary cursor-pointer"
                                    onClick={() =>
                                      push({
                                        question: [
                                          {
                                            type: "multiple-choice",
                                            answers: [{ contentAnswer: "Nhập nội dung đáp án" }],
                                          },
                                        ],
                                      })
                                    }
                                  >
                                    <div className="d-inline-block">
                                      <i className="fa-solid fa-plus"></i>
                                      <span>Thêm mới nội dung</span>
                                    </div>
                                  </div>
                                </div>
                              );
                            }}
                          </FieldArray>
                        </div>
                      ))}
                    <div
                      className=" d-flex align-items-center justify-content-center mt-3 text-danger cursor-pointer"
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
