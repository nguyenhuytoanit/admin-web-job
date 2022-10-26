import { Input } from "app/common/forms/Input";
import { Select } from "app/common/forms/Select";
import { Field, FieldArray } from "formik";
import React from "react";

function MultiPleChoice({ field, listAnswer }) {
  return (
    <div>
      <FieldArray name={field}>
        {({ remove, push }) => {
          return (
            <div>
              {listAnswer.length > 0 &&
                listAnswer.map((answer, idxAnswer) => {
                  return (
                    <div className="p-3 row mt-2" key={idxAnswer}>
                      <div className="col-lg-8">
                        <Field
                          name={`${field}.${idxAnswer}.contentAnswer`}
                          component={Input}
                          className="border-top-0 border-right-0 border-left-0 rounded-0"
                          placeholder={"Nhập nội dung đáp án"}
                          customFeedbackLabel
                          withFeedbackLabel
                        />
                        {answer.showNote === "1" && (
                          <div className="pr-5 mt-3">
                            <div className="bg-light border h-50px mr-10">
                              Nhập ghi chú bất thường, bổ sung ảnh
                            </div>
                            <div className="w-30px h-30px d-flex justify-content-center align-items-center bg-light border mt-2 rounded">
                              <i className="fa-solid fa-plus"></i>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="col-lg-3">
                        <Select
                          name={`${field}.${idxAnswer}.showNote`}
                          customFeedbackLabel
                          withFeedbackLabel
                        >
                          <option value={"0"}>Không hiển thị ghi chú</option>
                          <option value={"1"}>Hiển thị ghi chú</option>
                        </Select>
                      </div>
                      <div className="col-lg-1">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(idxAnswer)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  );
                })}
              <div
                className=" d-flex align-items-center justify-content-start mb-2 ml-3 text-info cursor-pointer w-150px"
                onClick={() => push({ contentAnswer: "", showNote: false })}
              >
                <div className="d-inline-block">
                  <i className="fa-solid fa-plus"></i>
                  <span>Thêm mới đáp án</span>
                </div>
              </div>
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
}

export default MultiPleChoice;
