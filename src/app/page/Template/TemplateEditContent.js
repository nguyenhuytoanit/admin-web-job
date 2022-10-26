import { Input } from "app/common/forms/Input";
import { Field, FieldArray, Form, Formik } from "formik";
import { QUESTION_TYPE } from "./question/contants";
import MultiPleChoice from "./question/MultiPleChoice";
import Paragraph from "./question/Paragraph";
import TextBox from "./question/TextBox";
import Time from "./question/Time";

function TemplateEditContent(props) {
  const initialValues = {
    general: [
      {
        content: [
          {
            question: "",
            type: QUESTION_TYPE.TEXT_BOX,
            answers: [{ contentAnswer: "Nhập nội dung đáp án 1", showNote: "0" }],
            showAnswer: false,
            contentAnswerTextBox: "",
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
                              />
                            </div>
                          </div>
                          <FieldArray name={`general.${idxGeneral}.content`}>
                            {({ insert, remove, push }) => {
                              const listContent = general.content;
                              return (
                                <div>
                                  {listContent.length > 0 &&
                                    listContent.map((content, idxContent) => {
                                      return (
                                        <div key={idxContent}>
                                          {content.type === QUESTION_TYPE.MULTIPLE_CHOICE && (
                                            <MultiPleChoice
                                              field={`general.${idxGeneral}.content.${idxContent}`}
                                              content={content}
                                              idxContent={idxContent}
                                              remove={remove}
                                            />
                                          )}
                                          {content.type === QUESTION_TYPE.PARAGRAPH && (
                                            <Paragraph
                                              field={`general.${idxGeneral}.content.${idxContent}`}
                                              content={content}
                                              idxContent={idxContent}
                                              remove={remove}
                                            />
                                          )}
                                          {content.type === QUESTION_TYPE.TIME && (
                                            <Time
                                              field={`general.${idxGeneral}.content.${idxContent}`}
                                              content={content}
                                              idxContent={idxContent}
                                              remove={remove}
                                            />
                                          )}
                                          {content.type === QUESTION_TYPE.TEXT_BOX && (
                                            <TextBox
                                              field={`general.${idxGeneral}.content.${idxContent}`}
                                              content={content}
                                              idxContent={idxContent}
                                              remove={remove}
                                            />
                                          )}
                                        </div>
                                      );
                                    })}
                                  <div
                                    className=" d-flex align-items-center justify-content-center mt-3 text-primary cursor-pointer"
                                    onClick={() =>
                                      push({
                                        type: QUESTION_TYPE.MULTIPLE_CHOICE,
                                        answers: [{ contentAnswer: "", showNote: "0" }],
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
