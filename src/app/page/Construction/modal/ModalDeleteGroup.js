import { useNotify } from "hooks/useNotify";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteGroup } from "redux/action/group";

function ModalDeleteGroup({ show, onHide, onSaveSuccess, groupInfo }) {
  const dispatch = useDispatch();
  const { successNotify, errorNotify } = useNotify();

  const handleSummitDeleteGroup = () => {
    const params = {
      groupId: groupInfo.id,
    };
    dispatch(deleteGroup(params))
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
        <Modal.Title id="contained-modal-title-vcenter">Xóa công trình</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn có chắc muốn xóa?</Modal.Body>
      <Modal.Footer className="d-flex">
        <Button variant="danger" onClick={handleSummitDeleteGroup}>
          Xóa
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteGroup;
