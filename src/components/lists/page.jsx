import Modal from '/src/components/lists/modal/modal.jsx';
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function Lists() {
    const [showModal, setShowModal] = useState(false)
    const [lists, setLists] = useState([
        { id: 1, name: 'list name', items: 0 },
    ])
    const [newListName, setNewListName] = useState('')
    const navigate = useNavigate()

    const handleNewListClick = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setNewListName('')
    }

    const handleCreateList = () => {
        if (newListName.trim() !== '') {
            const newList = {
                id: lists.length + 1,
                name: newListName,
                items: 0
            }
            setLists([...lists, newList])
            setShowModal(false)
            setNewListName('')
        }
    }
    const handleDeleteList = (id) => {
        setLists(lists.filter(list => list.id !== id)) // Filter out the list with the given id
    }

    const handleEditList = (id, name) => {
        navigate(`/tasks/${id}`, { state: { listName: name } })
    }

    return (
        <>
            <div className="navigation">
                <p>Hello Name! </p>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="40"
                     height="40"
                     viewBox="0 0 24 24">
                    <g fill="none"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2">
                        <path
                            d="m20.35 8.923l-.366-.204a2 2 0 0 1-.784-.724c-.017-.027-.033-.056-.065-.112a2.002 2.002 0 0 1-.3-1.157l.006-.425c.012-.68.018-1.022-.078-1.328a1.998 1.998 0 0 0-.417-.736c-.214-.24-.511-.412-1.106-.754l-.494-.285c-.592-.341-.889-.512-1.204-.577a1.999 1.999 0 0 0-.843.007c-.313.07-.606.246-1.191.596l-.003.002l-.354.211c-.056.034-.085.05-.113.066c-.278.155-.588.24-.907.25c-.032.002-.065.002-.13.002l-.13-.001a1.997 1.997 0 0 1-.91-.252c-.028-.015-.055-.032-.111-.066l-.357-.214c-.589-.354-.884-.53-1.199-.601a1.998 1.998 0 0 0-.846-.006c-.316.066-.612.238-1.205.582l-.003.001l-.488.283l-.005.004c-.588.34-.883.512-1.095.751a2 2 0 0 0-.415.734c-.095.307-.09.649-.078 1.333l.007.424c0 .065.003.097.002.128a2.002 2.002 0 0 1-.301 1.027c-.033.056-.048.084-.065.11a2 2 0 0 1-.675.664l-.112.063l-.361.2c-.602.333-.903.5-1.121.738a2 2 0 0 0-.43.73c-.1.307-.1.65-.099 1.338l.002.563c.001.683.003 1.024.104 1.329a2 2 0 0 0 .427.726c.218.236.516.402 1.113.734l.358.199c.061.034.092.05.121.068a2 2 0 0 1 .74.781l.067.12a2 2 0 0 1 .23 1.038l-.007.407c-.012.686-.017 1.03.079 1.337c.085.272.227.523.417.736c.214.24.512.411 1.106.754l.494.285c.593.341.889.512 1.204.577a2 2 0 0 0 .843-.007c.314-.07.607-.246 1.194-.598l.354-.212a1.997 1.997 0 0 1 1.02-.317h.26c.318.01.63.097.91.252l.092.055l.376.226c.59.354.884.53 1.199.6a2 2 0 0 0 .846.008c.315-.066.613-.239 1.206-.583l.495-.287c.588-.342.883-.513 1.095-.752c.19-.213.33-.463.415-.734c.095-.305.09-.644.078-1.318l-.008-.44a2 2 0 0 1 .3-1.155l.065-.11a2 2 0 0 1 .675-.664l.11-.061l.002-.001l.361-.2c.602-.334.903-.5 1.122-.738c.194-.21.34-.46.429-.73c.1-.305.1-.647.098-1.327l-.002-.574c-.001-.683-.002-1.025-.103-1.33a2.002 2.002 0 0 0-.428-.725c-.217-.236-.515-.402-1.111-.733z"/>
                        <path d="M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0"/>
                    </g>
                </svg>
            </div>
            <div className="page-container">
                <div className="list-container">
                    {lists.map(list => (
                        <div className="task" key={list.id}>
                            <p className="list-task-number">{list.name}</p>
                            <p className="item">{list.items.length} Items</p> {/* Display the updated task count */}
                            <button className="list-edit-button" onClick={() => handleEditList(list.id, list.name)}>edit
                                list
                            </button>
                            <button className="list-delete-button" onClick={() => handleDeleteList(list.id)}>delete
                                list
                            </button>
                        </div>
                    ))}
                </div>
                <button className="new-list-button" onClick={handleNewListClick}>new list+</button>
                <Modal show={showModal} onClose={handleCloseModal}>
                    <div>
                        <h1 className="modal-new-list">New List</h1>
                        <input type="text"
                               placeholder="List name"
                               className="list-name"
                               value={newListName}
                               onChange={(e) => setNewListName(e.target.value)}
                        />
                    </div>
                    <button className="modal-create-button" onClick={handleCreateList}>Create</button>
                </Modal>
            </div>
        </>
    )
}

export default Lists;