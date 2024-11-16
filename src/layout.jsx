import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './globals.css'
import Page from './components/page.jsx'
import Loading from './components/loading/page.jsx'
import Lists from "./components/lists/page.jsx";
import EditTasks from "./components/tasks/page.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/lists" element={<Lists />} />
                <Route path="/tasks/:id" element={<EditTasks />} />
                <Route path="/tasks" element={<EditTasks/>} />
            </Routes>
        </Router>
    </StrictMode>,
)
