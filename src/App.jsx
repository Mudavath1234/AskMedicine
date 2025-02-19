import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Added Router for navigation
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import About from './components/About/About'; // ✅ Imported About component
import Guidelines from './components/Guidelines/Guidelines'; // ✅ Imported Guidelines component
import DrugInteractions from './components/DrugInteractions/DrugInteractions'; // ✅ Imported Drug Interactions component

const App = () => {
  return (
    <Router> {/* ✅ Wrapped in Router */}
      <Sidebar/>
      <Routes> {/* ✅ Added Routes for navigation */}
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/druginteractions" element={<DrugInteractions />} />
      </Routes>
    </Router>
  );
}

export default App;
