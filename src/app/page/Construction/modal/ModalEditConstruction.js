import { Input } from "app/common/forms/Input";
import { Field, Form, Formik } from "formik";
import { useNotify } from "hooks/useNotify";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateGroup } from "redux/action/group";
import * as Yup from "yup";

function ModalEditConstruction({ show, onHide, onSaveSuccess, groupInfo }) {
  const dispatch = useDispatch();
  const { successNotify, errorNotify } = useNotify();

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim("Không được để trống").required("Bắt buộc"),
    code: Yup.string().trim("Không được để trống").required("Bắt buộc"),
  });

  return (
    <Modal size="lg" show={show} onHide={onHide} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sửa thông tin "{groupInfo.name}"
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          name: groupInfo.name,
          code: groupInfo.code,
        }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          const params = {
            name: values.name.trim(),
            code: values.code.trim(),
            groupId: groupInfo.id,
          };
          dispatch(updateGroup(params))
            .then(() => {
              successNotify("Cập nhật thành công");
              onSaveSuccess();
              onHide();
              setSubmitting(false);
            })
            .catch((error) => {
              errorNotify("Có lỗi xảy ra khi tạo cập nhật");
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Modal.Body>
              <div className="form-group row">
                <div className="col-lg-12 mt-2">
                  <Field
                    name="name"
                    component={Input}
                    placeholder={"Tên công trình"}
                    label={"Tên công trình"}
                    customFeedbackLabel
                    withFeedbackLabel
                    focus
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <Field
                    name="code"
                    component={Input}
                    placeholder={"Mã công trình"}
                    label={"Mã công trình"}
                    customFeedbackLabel
                    withFeedbackLabel
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Lưu lại
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default ModalEditConstruction;
