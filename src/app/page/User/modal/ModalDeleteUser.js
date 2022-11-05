import { useNotify } from "hooks/useNotify";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "redux/action/user";

function ModalDeleteUser({ show, onHide, onSaveSuccess, userInfo }) {
  const dispatch = useDispatch();
  const { successNotify, errorNotify } = useNotify();

  const handleSummitDeleteUser = () => {
    const params = {
      userId: userInfo.id,
    };
    dispatch(deleteUser(params))
      .then((res) => {
        successNotify("Xóa thành công");
        onSaveSuccess();
        onHide();
      })
      .catch((error) => {
        errorNotify("Có lỗi xảy ra khi xóa");
      });
  };

  return (
    <Modal show={show} onHide={onHide} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Xóa người dùng</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn có chắc muốn xóa?</Modal.Body>
      <Modal.Footer className="d-flex">
        <Button variant="danger" onClick={handleSummitDeleteUser}>
          Xóa
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteUser;
