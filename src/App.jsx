import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Modal from './components/modal/modal';
import HomePage from './components/Home/Home'; // Define these components
import GalleryPage from './components/galary/galary';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
            {/* Modal component would typically be conditionally rendered based on app state */}
        </Router>
    );
}

export default App;
