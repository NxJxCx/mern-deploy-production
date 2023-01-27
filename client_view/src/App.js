//import logo from './samplepicture.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import StudentProfile from './components/StudentProfile';
import AddStudent  from './components/AddStudent';
import DisplayStudents from './components/DisplayStudents';

function Error404() {
  var variablepicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBdYQMCec2irxtAh1z-OtkYGboau5GGNvMucTkt4K&s";
  return (
    <div>
      <img src={variablepicture} alt="React Logo"/>
      <h1>ERROR 404 NOT FOUND!</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage title="Welcome Sir Falo!" />} />
          <Route path="/displaystudents" element={<DisplayStudents />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
