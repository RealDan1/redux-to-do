import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { editToDo } from '../store/toDoListSlice';

function MyModal({ id, handleClose, show }) {
    let toDoListData = useSelector((state) => state.toDoList);

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    // when the modal is opened, set the default text to the current item for editing
    useEffect(() => {
        const currentItem = toDoListData.find((item) => item.id === id);
        if (currentItem) setInputValue(currentItem.text);
    }, [id, toDoListData]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter your changes to the ToDoList item:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/*  */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            dispatch(editToDo({ id, text: inputValue }));
                            handleClose();
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal;
