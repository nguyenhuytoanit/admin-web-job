import { Input } from "app/common/forms/Input";
import { Select } from "app/common/forms/Select";
import { Field, FieldArray } from "formik";
import SelectQuestion from "./components/SelectQuestion";

function MultiPleChoice({ field, question, idxQuestion, remove }) {
  return (
    <div>
      <div className="card mb-3 col-lg-11">
        <div className="row m-2 align-items-center">
          <div className="col-lg-8">
            <Field
              name={`${field}.label`}
              component={Input}
              placeholder={"Nhập nội dung đoạn văn"}
              customFeedbackLabel
              withFeedbackLabel
            />
          </div>
          <div className="col-lg-3">
            <SelectQuestion field={field} />
          </div>
          <div className="col-lg-1">
            <i
              className="fa-solid fa-trash p-3 cursor-pointer text-danger"
              onClick={() => remove(idxQuestion)}
            ></i>
          </div>
        </div>
        <FieldArray name={`${field}.answer`}>
          {({ remove, push }) => {
            return (
              <div>
                {question.answer.length > 0 &&
                  question.answer.map((answer, idxAnswer) => {
                    return (
                      <div className="p-3 row mt-2" key={idxAnswer}>
                        <div className="col-lg-8">
                          <div className="d-flex align-items-center">
                            <div className="bg-secondary rounded-circle w-20px h-20px mr-2"></div>
                            <Field
                              name={`${field}.answer.${idxAnswer}.value`}
                              component={Input}
                              className="border-top-0 border-right-0 border-left-0 rounded-0"
                              placeholder={"Nhập nội dung đáp án"}
                              customFeedbackLabel
                              withFeedbackLabel
                            />
                          </div>
                          {answer.note === "1" && (
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
                            name={`${field}.answer.${idxAnswer}.note`}
                            customFeedbackLabel
                            withFeedbackLabel
                          >
                            <option value={"0"}>Không hiển thị ghi chú</option>
                            <option value={"1"}>Hiển thị ghi chú</option>
                          </Select>
                        </div>
                        <div className="col-lg-1">
                          <i
                            className="fa-solid fa-xmark cursor-pointer p-2"
                            onClick={() => remove(idxAnswer)}
                          ></i>
                        </div>
                      </div>
                    );
                  })}
                <div
                  className=" d-flex align-items-center justify-content-start mb-2 ml-3 text-info cursor-pointer w-150px"
                  onClick={() => push({ value: "", note: "0" })}
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
    </div>
  );
}

export default MultiPleChoice;
