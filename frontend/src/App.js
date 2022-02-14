import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Create from './pages/Create/Create';
import Browse from './pages/Browse/Browse';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='create' element={<Create />} />
        <Route path='browse' element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
