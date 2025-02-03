import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function InfoModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            {' '}
            <Modal.Header closeButton>
                <Modal.Title>Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Instructions:</p>
                <ul>
                    <li>Add new tasks using the input box and "Add Note" button.</li>
                    <li>Mark tasks as completed by checking the checkbox next to each item.</li>
                    <li>Edit or delete tasks using the "Edit" and "DELETE" buttons.</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InfoModal;
