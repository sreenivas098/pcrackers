import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

import Home from './componets/accounts/Home';
// import Login from './componets/accounts/Login';
import SelctBranch from './componets/branch/SelectBranch';
import HomeBranch from './componets/branch/HomeBranch';
import Navbar from './componets/branch/Navbar';
import WriteExperience from './componets/home/WriteExperience';
import ReadExperience from './componets/home/ReadExperience';
import Experience from './componets/home/Experience';
import Quiz from './componets/home/Quiz';
import Profile from './componets/home/Profile';
import Main from './componets/home/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<Navigate to="/home" /> } />
          <Route path="/branch" element={<SelctBranch />} />
         { /* <Route path="/branch/:branch" element={<HomeBranch />} /> */}
          <Route path="/branch/:branch/quiz" element={<Quiz />} /> 
          <Route path="/branch/:branch/profile/:id" element={<Profile />} />
          <Route path="/branch/:branch" element={<Main />} />
          <Route path="/branch/:branch/interview/write/experience" element={<WriteExperience />} />
          <Route path="/branch/:branch/interview/read/experience" element={<ReadExperience />} />
          <Route path="/branch/:branch/interview/read/experience/:id" element={<Experience />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

