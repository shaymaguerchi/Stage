import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AddEmployees from './components/AddEmployees';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

function App() {
  return (

      <div className="flex">
        <Sidebar />
<AddEmployees />
          

        <MainContent />
      </div>

  );
}

export default App;
