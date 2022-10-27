import { Input } from "app/common/forms/Input";
import { Field, FieldArray, Form, Formik } from "formik";
import { QUESTION_TYPE } from "./question/contants";
import Date from "./question/Date";
import MultiPleChoice from "./question/MultiPleChoice";
import Paragraph from "./question/Paragraph";
import SelectUser from "./question/SelectUser";
import TextBox from "./question/TextBox";
import Time from "./question/Time";

function TemplateEditContent(props) {
  const initialValues = {
    general: [
      {
        content: [
          {
            question: "",
            type: QUESTION_TYPE.MULTIPLE_CHOICE,
            answers: [{ contentAnswer: "Nhập nội dung đáp án 1", showNote: "0" }],
            showAnswer: false,
            contentAnswerTextBox: "",
            user: "",
          },
        ],
      },
    ],
    tests: [
      {
        content: [
          {
            question: "",
            type: QUESTION_TYPE.MULTIPLE_CHOICE,
            answers: [{ contentAnswer: "Nhập nội dung đáp án 1", showNote: "0" }],
            showAnswer: false,
            contentAnswerTextBox: "",
            user: "",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <div className="p-3 mb-2 bg-secondary text-white ">Thông tin chung</div>
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
                            <div className="col-lg-11 mt-2">
                              <Field
                                name="name"
                                component={Input}
                                placeholder={"Nhập tên block"}
                                customFeedbackLabel
                                withFeedbackLabel
                              />
                            </div>
                            <div className="col-lg-1">
                              <i
                                className="fa-solid fa-trash p-3 cursor-pointer"
                                onClick={() => remove(idxGeneral)}
                              ></i>
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
                                          {content.type === QUESTION_TYPE.DATE && (
                                            <Date
                                              field={`general.${idxGeneral}.content.${idxContent}`}
                                              content={content}
                                              idxContent={idxContent}
                                              remove={remove}
                                            />
                                          )}
                                          {content.type === QUESTION_TYPE.SELECT_USER && (
                                            <SelectUser
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

      <div className="p-3 mb-2 bg-secondary text-white mt-4">Kiểm tra</div>
      <div className="card p-3 my-3">
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
                <FieldArray name="tests">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.tests.length > 0 &&
                        values.tests.map((test, idxTest) => (
                          <div className="card p-3 my-3" key={idxTest}>
                            <div className="form-group row">
                              <div className="col-lg-11 mt-2">
                                <Field
                                  name="name"
                                  component={Input}
                                  placeholder={"Nhập tên block"}
                                  customFeedbackLabel
                                  withFeedbackLabel
                                />
                              </div>
                              <div className="col-lg-1">
                                <i
                                  className="fa-solid fa-trash p-3 cursor-pointer"
                                  onClick={() => remove(idxTest)}
                                ></i>
                              </div>
                            </div>
                            <FieldArray name={`tests.${idxTest}.content`}>
                              {({ insert, remove, push }) => {
                                const listContent = test.content;
                                return (
                                  <div>
                                    {listContent.length > 0 &&
                                      listContent.map((content, idxContent) => {
                                        return (
                                          <div key={idxContent}>
                                            {content.type === QUESTION_TYPE.MULTIPLE_CHOICE && (
                                              <MultiPleChoice
                                                field={`tests.${idxTest}.content.${idxContent}`}
                                                content={content}
                                                idxContent={idxContent}
                                                remove={remove}
                                              />
                                            )}
                                            {content.type === QUESTION_TYPE.PARAGRAPH && (
                                              <Paragraph
                                                field={`tests.${idxTest}.content.${idxContent}`}
                                                content={content}
                                                idxContent={idxContent}
                                                remove={remove}
                                              />
                                            )}
                                            {content.type === QUESTION_TYPE.TIME && (
                                              <Time
                                                field={`tests.${idxTest}.content.${idxContent}`}
                                                content={content}
                                                idxContent={idxContent}
                                                remove={remove}
                                              />
                                            )}
                                            {content.type === QUESTION_TYPE.TEXT_BOX && (
                                              <TextBox
                                                field={`tests.${idxTest}.content.${idxContent}`}
                                                content={content}
                                                idxContent={idxContent}
                                                remove={remove}
                                              />
                                            )}
                                            {content.type === QUESTION_TYPE.DATE && (
                                              <Date
                                                field={`tests.${idxTest}.content.${idxContent}`}
                                                content={content}
                                                idxContent={idxContent}
                                                remove={remove}
                                              />
                                            )}
                                            {content.type === QUESTION_TYPE.SELECT_USER && (
                                              <SelectUser
                                                field={`tests.${idxTest}.content.${idxContent}`}
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
      </div>
    </div>
  );
}

export default TemplateEditContent;
