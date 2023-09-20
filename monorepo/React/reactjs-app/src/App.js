import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import OptionDetail from './Pages/OptionDetail/OptionDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/option/:id" element={<OptionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
