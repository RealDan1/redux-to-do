import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, checkToDo, unCheckToDo, deleteToDo } from './store/toDoListSlice';
import { increment, decrement } from './store/counterSlice';
import { useState } from 'react';
import MyModal from './components/Modal.jsx';
import WarningModal from './components/WarningModal.jsx';
import InfoModal from './components/InfoModal.jsx';

function App() {
    let toDoListData = useSelector((state) => state.toDoList);
    let count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const [addNoteInput, setAddNoteInput] = useState('');
    const [editId, setEditId] = useState('');

    function handleSetEditId(id) {
        setEditId(id);
    }

    function handleSetAddNoteInput(e) {
        setAddNoteInput(e.target.value);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showWarning, setShowWarning] = useState(false);
    const handleWarningClose = () => setShowWarning(false);
    const handleWarningShow = () => setShowWarning(true);

    const [showInfo, setShowInfo] = useState(false);
    const handleInfoClose = () => setShowInfo(false);
    const handleInfoShow = () => setShowInfo(true);

    function dispatchAddNote() {
        if (addNoteInput.trim() === '') {
            handleWarningShow();
            return;
        }
        dispatch(increment());
        dispatch(addToDo({ text: addNoteInput, id: Date.now() }));
    }

    return (
        <div className="App">
            <div className="heading">
                <div className="input-section">
                    <h1>To Do's:</h1>
                    <button className="info-icon" onClick={handleInfoShow}>
                        ℹ️
                    </button>{' '}
                    <div className="input-and-button">
                        <input id="addNoteInput" type="text" value={addNoteInput} onChange={handleSetAddNoteInput} />
                        <button className="add-note-container" onClick={dispatchAddNote}>
                            Add Note
                        </button>
                    </div>
                </div>
            </div>
            <div className="toDoList">
                <ul>
                    {toDoListData.map((item, key) => (
                        <li className="noteItem" key={key}>
                            <input
                                type="checkbox"
                                id={key}
                                name={key}
                                checked={item.completed}
                                onChange={(e) => {
                                    e.target.checked
                                        ? dispatch(checkToDo({ id: item.id }))
                                        : dispatch(unCheckToDo({ id: item.id }));
                                }}
                            />
                            <label htmlFor={key} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                                {item.text}
                            </label>
                            {/* Conditionally render edit button based on item completion status */}
                            {!item.completed && ( // Only show the edit button if the item is not completed
                                <button
                                    onClick={() => {
                                        handleSetEditId(item.id);
                                        handleShow();
                                    }}
                                >
                                    Edit
                                </button>
                            )}
                            <MyModal handleShow={handleShow} handleClose={handleClose} show={show} id={editId} />
                            <button
                                onClick={() => {
                                    dispatch(decrement());
                                    dispatch(deleteToDo({ id: item.id }));
                                }}
                            >
                                DELETE
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="totalItems">Total To Do's: {count.value}</p>
            </div>
            <WarningModal show={showWarning} handleClose={handleWarningClose} />
            <InfoModal show={showInfo} handleClose={handleInfoClose} />{' '}
        </div>
    );
}

export default App;
