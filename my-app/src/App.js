

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';

import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
           <Route element={<Home/>} path="/Home" exact/>

          </Route>
          
          <Route element={<Login />} path="/Login" />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
