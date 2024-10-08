// imports
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import HockeyPicks from "./components/HockeyPicks/hockeypicks";

import Reports from "./components/Reports/reports";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/smartscore" element={<HockeyPicks />} />

                <Route path="/wordle" element={<WordleClonePage />} />

                <Route path="/experience" element={<Reports />} />
            </Routes>
            <Navbar />
        </div>
    );
}

function WordleClonePage() {
    // Perform navigation to wordleclone.html
    window.location.href = '/wordleclone.html';

    // Return null since this component doesn't render anything
    return null;
}

export default App;
