//import logo from './samplepicture.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Error404 from './components/Error404';
import HomePage from './components/HomePage';
import StudentProfile from './components/StudentProfile';
import AddStudent  from './components/AddStudent';
import DisplayStudents from './components/DisplayStudents';

function App() {
  return (
    <Router>
      <div className="main-layout">
        <Routes>
            <Route exact path="/" element={<HomePage title="Welcome Sir Falo!" />} />
            <Route path="/displaystudents" element={<DisplayStudents title="Student Profiles"/>} />
            <Route path="/addstudent" element={<AddStudent title="Add Student Profile" />} />
            <Route path="/studentprofile/:id" element={<StudentProfile title="Student Profile"/>} />
            <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
