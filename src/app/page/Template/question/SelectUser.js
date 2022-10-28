import { Input } from "app/common/forms/Input";
import { Select } from "app/common/forms/Select";
import { Field } from "formik";
import SelectQuestion from "./components/SelectQuestion";

function SelectUser({ field, idxContent, remove }) {
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
          <Select name={`${field}.user`} customFeedbackLabel withFeedbackLabel>
            <option value={"1"}>Nguyễn văt a</option>
            <option value={"2"}>Nguyễn văn b</option>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default SelectUser;
