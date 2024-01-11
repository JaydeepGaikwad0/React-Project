
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';

import Login from './Login';
import './App.css';

function App() {
     
 
        


  return (
    <div className="App">
      <Router>
        
        <Routes>
        <Route
            path="/"
            element={<Navigate to="/Login" replace />}
          />

          <Route element={<ProtectedRoute />}>
           <Route element={<Home/>} path="/Home" exact/>

          </Route>
          
          <Route element={<Login/>} path="/Login" />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
