import { Input } from "app/common/forms/Input";
import { Field, FieldArray, Form, Formik } from "formik";
import { useNotify } from "hooks/useNotify";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { blockTemplate, getTemplateDetail } from "redux/action/template";
import { QUESTION_TYPE } from "./question/contants";
import Date from "./question/Date";
import MultiPleChoice from "./question/MultiPleChoice";
import Paragraph from "./question/Paragraph";
import SelectUser from "./question/SelectUser";
import TextBox from "./question/TextBox";
import Time from "./question/Time";

function TemplateEditContent(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { successNotify, errorNotify } = useNotify();
  const [templateDetail, setTemplateDetail] = useState({});

  const initialValues = {
    blocks: [
      // {
      //   type: "info",
      //   name: "",
      //   questions: [
      //     // {
      //     //   label: "",
      //     //   type: QUESTION_TYPE.MULTIPLE_CHOICE,
      //     //   answer: [{ questionAnswer: "Nhập nội dung đáp án 1", showNote: "0" }],
      //     //   showAnswer: false,
      //     //   questionAnswerTextBox: "",
      //     //   user: "",
      //     // },
      //   ],
      // },
      // {
      //   type: "check",
      //   name: "",
      //   questions: [],
      // },
    ],
  };
  if (templateDetail.blocks) {
    initialValues["blocks"] = templateDetail.blocks;
  }

  useEffect(() => {
    dispatch(getTemplateDetail(id)).then((res) => {
      setTemplateDetail(res);
    });
  }, [id, dispatch]);

  return (
    <div>
      <div className="p-3 mb-2 bg-secondary text-white ">Thông tin chung</div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          const params = {
            template_id: id,
            ...values,
          };
          dispatch(blockTemplate(params))
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
        {({ values, isSubmitting }) => {
          return (
            <Form>
              <FieldArray name="blocks">
                {({ insert, remove, push }) => (
                  <div>
                    {values.blocks?.length > 0 &&
                      values.blocks.map((block, idxBlock) => {
                        if (block.type === "info") {
                          return (
                            <div className="card p-3 my-3" key={idxBlock}>
                              <div className="form-group row">
                                <div className="col-lg-11 mt-2">
                                  <Field
                                    name={`blocks.${idxBlock}.name`}
                                    component={Input}
                                    placeholder={"Nhập tên block"}
                                    customFeedbackLabel
                                    withFeedbackLabel
                                  />
                                </div>
                                <div className="col-lg-1">
                                  <i
                                    className="fa-solid fa-trash p-3 cursor-pointer"
                                    onClick={() => remove(idxBlock)}
                                  ></i>
                                </div>
                              </div>
                              <FieldArray name={`blocks.${idxBlock}.questions`}>
                                {({ insert, remove, push }) => {
                                  const listQuestion = block.questions;
                                  return (
                                    <div>
                                      {listQuestion.length > 0 &&
                                        listQuestion.map((question, idxQuestion) => {
                                          return (
                                            <div key={idxQuestion}>
                                              {question.type === QUESTION_TYPE.MULTIPLE_CHOICE && (
                                                <MultiPleChoice
                                                  field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                  question={question}
                                                  idxQuestion={idxQuestion}
                                                  remove={remove}
                                                />
                                              )}
                                              {question.type === QUESTION_TYPE.PARAGRAPH && (
                                                <Paragraph
                                                  field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                  question={question}
                                                  idxQuestion={idxQuestion}
                                                  remove={remove}
                                                />
                                              )}
                                              {question.type === QUESTION_TYPE.TIME && (
                                                <Time
                                                  field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                  question={question}
                                                  idxQuestion={idxQuestion}
                                                  remove={remove}
                                                />
                                              )}
                                              {question.type === QUESTION_TYPE.TEXT_BOX && (
                                                <TextBox
                                                  field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                  question={question}
                                                  idxQuestion={idxQuestion}
                                                  remove={remove}
                                                />
                                              )}
                                              {question.type === QUESTION_TYPE.DATE && (
                                                <Date
                                                  field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                  question={question}
                                                  idxQuestion={idxQuestion}
                                                  remove={remove}
                                                />
                                              )}
                                              {question.type === QUESTION_TYPE.SELECT_USER && (
                                                <SelectUser
                                                  field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                  question={question}
                                                  idxQuestion={idxQuestion}
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
                                            label: "",
                                            newQuestion: true,
                                            answer: [{ value: "", note: "0" }],
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
                          );
                        }
                      })}
                    <div
                      className=" d-flex align-items-center justify-content-center mt-3 text-danger cursor-pointer"
                      onClick={() => push({ questions: [], type: "info" })}
                    >
                      <div className="d-inline-block">
                        <i className="fa-solid fa-plus"></i>
                        <span>Thêm mới nội dung</span>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
              <div className="p-3 mb-2 bg-secondary text-white mt-4">Kiểm tra</div>
              <FieldArray name="blocks">
                {({ insert, remove, push }) => (
                  <div>
                    {values.blocks?.length > 0 &&
                      values.blocks.map((block, idxBlock) => {
                        if (block.type === "check") {
                          return (
                            <div className="card p-3 my-3" key={idxBlock}>
                              <div className="form-group row">
                                <div className="col-lg-11 mt-2">
                                  <Field
                                    name={`blocks.${idxBlock}.name`}
                                    component={Input}
                                    placeholder={"Nhập tên block"}
                                    customFeedbackLabel
                                    withFeedbackLabel
                                  />
                                </div>
                                <div className="col-lg-1">
                                  <i
                                    className="fa-solid fa-trash p-3 cursor-pointer"
                                    onClick={() => remove(idxBlock)}
                                  ></i>
                                </div>
                              </div>
                              <FieldArray name={`blocks.${idxBlock}.questions`}>
                                {({ insert, remove, push }) => {
                                  const listQuestion = block.questions;
                                  return (
                                    <div>
                                      {listQuestion.length > 0 &&
                                        listQuestion.map((question, idxQuestion) => {
                                          if (question.type === "check") {
                                            return (
                                              <div key={idxQuestion}>
                                                {question.type ===
                                                  QUESTION_TYPE.MULTIPLE_CHOICE && (
                                                  <MultiPleChoice
                                                    field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                    question={question}
                                                    idxQuestion={idxQuestion}
                                                    remove={remove}
                                                  />
                                                )}
                                                {question.type === QUESTION_TYPE.PARAGRAPH && (
                                                  <Paragraph
                                                    field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                    question={question}
                                                    idxQuestion={idxQuestion}
                                                    remove={remove}
                                                  />
                                                )}
                                                {question.type === QUESTION_TYPE.TIME && (
                                                  <Time
                                                    field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                    question={question}
                                                    idxQuestion={idxQuestion}
                                                    remove={remove}
                                                  />
                                                )}
                                                {question.type === QUESTION_TYPE.TEXT_BOX && (
                                                  <TextBox
                                                    field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                    question={question}
                                                    idxQuestion={idxQuestion}
                                                    remove={remove}
                                                  />
                                                )}
                                                {question.type === QUESTION_TYPE.DATE && (
                                                  <Date
                                                    field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                    question={question}
                                                    idxQuestion={idxQuestion}
                                                    remove={remove}
                                                  />
                                                )}
                                                {question.type === QUESTION_TYPE.SELECT_USER && (
                                                  <SelectUser
                                                    field={`blocks.${idxBlock}.questions.${idxQuestion}`}
                                                    question={question}
                                                    idxQuestion={idxQuestion}
                                                    remove={remove}
                                                  />
                                                )}
                                              </div>
                                            );
                                          }
                                        })}
                                      <div
                                        className=" d-flex align-items-center justify-content-center mt-3 text-primary cursor-pointer"
                                        onClick={() =>
                                          push({
                                            type: QUESTION_TYPE.MULTIPLE_CHOICE,
                                            label: "",
                                            newQuestion: true,
                                            answer: [{ value: "", note: "0" }],
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
                          );
                        }
                      })}
                    <div
                      className=" d-flex align-items-center justify-content-center mt-3 text-danger cursor-pointer"
                      onClick={() => push({ questions: [], type: "check" })}
                    >
                      <div className="d-inline-block">
                        <i className="fa-solid fa-plus"></i>
                        <span>Thêm mới nội dung</span>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
              <div className="d-flex justify-content-end">
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  Lưu
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>

      {/* <div className="p-3 mb-2 bg-secondary text-white mt-4">Kiểm tra</div>
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
                            <FieldArray name={`tests.${idxTest}.questions`}>
                              {({ insert, remove, push }) => {
                                const listContent = test.questions;
                                return (
                                  <div>
                                    {listContent.length > 0 &&
                                      listContent.map((questions, idxQuestion) => {
                                        return (
                                          <div key={idxQuestion}>
                                            {questions.type === QUESTION_TYPE.MULTIPLE_CHOICE && (
                                              <MultiPleChoice
                                                field={`tests.${idxTest}.questions.${idxQuestion}`}
                                                questions={questions}
                                                idxQuestion={idxQuestion}
                                                remove={remove}
                                              />
                                            )}
                                            {questions.type === QUESTION_TYPE.PARAGRAPH && (
                                              <Paragraph
                                                field={`tests.${idxTest}.questions.${idxQuestion}`}
                                                questions={questions}
                                                idxQuestion={idxQuestion}
                                                remove={remove}
                                              />
                                            )}
                                            {questions.type === QUESTION_TYPE.TIME && (
                                              <Time
                                                field={`tests.${idxTest}.questions.${idxQuestion}`}
                                                questions={questions}
                                                idxQuestion={idxQuestion}
                                                remove={remove}
                                              />
                                            )}
                                            {questions.type === QUESTION_TYPE.TEXT_BOX && (
                                              <TextBox
                                                field={`tests.${idxTest}.questions.${idxQuestion}`}
                                                questions={questions}
                                                idxQuestion={idxQuestion}
                                                remove={remove}
                                              />
                                            )}
                                            {questions.type === QUESTION_TYPE.DATE && (
                                              <Date
                                                field={`tests.${idxTest}.questions.${idxQuestion}`}
                                                questions={questions}
                                                idxQuestion={idxQuestion}
                                                remove={remove}
                                              />
                                            )}
                                            {questions.type === QUESTION_TYPE.SELECT_USER && (
                                              <SelectUser
                                                field={`tests.${idxTest}.questions.${idxQuestion}`}
                                                questions={questions}
                                                idxQuestion={idxQuestion}
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
                                          answers: [{ questionsAnswer: "", showNote: "0" }],
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
                        onClick={() => push({ questions: [] })}
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
      </div> */}
    </div>
  );
}

export default TemplateEditContent;
