import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import Home from './componets/accounts/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Navigate to="/Home" /> } />
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;

