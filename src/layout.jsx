import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page from './page.jsx'
import Loading from './loading/page.jsx'
import Tasks from './tasks/page.jsx'
import './globals.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </Router>
    </StrictMode>,
)
