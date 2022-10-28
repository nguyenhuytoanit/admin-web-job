import { Checkbox } from "app/common/forms/Checkbox";
import { Input } from "app/common/forms/Input";
import { Field } from "formik";
import SelectQuestion from "./components/SelectQuestion";

function TextBox({ field, idxContent, remove, content }) {
  return (
    <div>
      <div className="card mb-3 col-lg-11">
        <div className="row m-2 align-items-center">
          <div className="col-lg-8">
            <Field
              name={`${field}.question`}
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
              onClick={() => remove(idxContent)}
            ></i>
          </div>
        </div>
        <div className="p-3 col-lg-8">
          <div className="bg-light border h-50px mr-10 p-2">Câu trả lời</div>
          <div className="d-flex mt-3">
            <div className="w-200px">
              <Field
                name={`${field}.showAnswer`}
                component={Checkbox}
                label={"Điền sẵn đáp án"}
                customFeedbackLabel
                withFeedbackLabel
                className="w-20px h-20px mb-0"
              />
            </div>
            {content.showAnswer && (
              <div className="w-100">
                <Field
                  name={`${field}.contentAnswerTextBox`}
                  component={Input}
                  placeholder={"Nhập nội dung đáp án"}
                  customFeedbackLabel
                  withFeedbackLabel
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
