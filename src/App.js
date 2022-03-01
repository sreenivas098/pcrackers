import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import Login from './componets/accounts/Login';
import SelctBranch from './componets/branch/SelectBranch';
import HomeBranch from './componets/branch/HomeBranch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" /> } />
          <Route path="/branch" element={<SelctBranch />} />
          <Route path="/branch/:branch" element={<HomeBranch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

