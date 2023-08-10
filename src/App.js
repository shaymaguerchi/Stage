import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AddEmployees from './components/AddEmployees';
import AddDepartements from './components/AddDepartements';
import Addjobtitle from './components/Addjobtitle';
import AddEmpstatus from './components/AddEmpstatus';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar handleNavigation={(selectedItem) => window.location.href = `/${selectedItem.toLowerCase()}`} />
        <Routes>
          <Route path="/" exact  element={<MainContent />} />
          <Route path="/employees" exact  element={<AddEmployees />} />
          <Route path="/departments" exact element={<AddDepartements />} />
          <Route path="/addjobtitle" element={<Addjobtitle />} />
          <Route path="/addempstatus" element={<AddEmpstatus />} />


        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
