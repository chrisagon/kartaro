import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CollectionsPage from './pages/CollectionsPage';
import CollectionDetailPage from './pages/CollectionDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="app-nav">
          <ul className="nav-list">
            <li>
              <Link to="/">Card Generator</Link>
            </li>
            <li>
              <Link to="/collections">My Collections</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:id" element={<CollectionDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;