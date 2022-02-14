import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Browse from './pages/Browse/Browse';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
