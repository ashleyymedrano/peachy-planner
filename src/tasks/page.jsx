import './edit.css';
import Modal from "../lists/modal/modal.jsx";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

function EditTasks() {
    const { id } = useParams(); // Get the list ID from the URL
    const location = useLocation()
    const listName = location.state?.listName || 'Default List Name'

    const [showModal, setShowModal] = useState(false)
    const [tasks, setTasks] = useState([])
    const [newTaskName, setNewTaskName] = useState('')

    const lists = [
        { id: 1, name: 'list name', items: [{ id: 1, name: 'task 1' }] },
        { id: 2, name: 'another list', items: [{ id: 1, name: 'task 1' }] }
    ]

    useEffect(() => {
        const selectedList = lists.find(list => list.id === parseInt(id))
        if (selectedList) {
            setTasks(selectedList.items)
        }
    }, [id])

    const handleNewTaskClick = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setNewTaskName('')
    }

    const handleCreateTask = () => {
        if (newTaskName.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                name: newTaskName,
            };
            setTasks([...tasks, newTask])
            setShowModal(false)
            setNewTaskName('')
        }
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <>
            <a href="/lists">
            <div className="edit-navigation">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="40"
                     height="40"
                     viewBox="0 0 24 24">
                    <path fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m11 5l-7 7l7 7m-7-7h16"/>
                </svg>
            </div>
            </a>
            <div className="page-container">
                <h1 className="edit-task-title">{listName}</h1>
                <div className="edit-task-container">
                    {tasks.map(task => (
                    <div className="edit-task" key={task.id}>
                        <label className="edit-strikethrough">
                            <input type="checkbox"
                                   className="edit-checkbox"/>
                            <span>{task.name}</span>
                        </label>
                        <button className="edit-delete-button" onClick={() => handleDeleteTask(task.id)}>delete task</button>
                    </div>
                    ))}
                </div>
                <button className="edit-new-task-button" onClick={handleNewTaskClick}>new task+</button>
                <Modal show={showModal} onClose={handleCloseModal}>
                    <div>
                        <h1 className="modal-new-list">New task</h1>
                        <input type="text"
                               placeholder="Task name"
                               className="list-name"
                               value={newTaskName}
                               onChange={(e) => setNewTaskName(e.target.value)}
                        />
                    </div>
                    <button className="modal-create-button" onClick={handleCreateTask}>Create</button>
                </Modal>
            </div>
        </>
    )
}

export default EditTasks;