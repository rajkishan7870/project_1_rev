import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';
import Trainer from './pages/Trainer/Trainer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Training from './pages/TrainingProg/TrainingProg';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/trainer" element={<Trainer/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/training" element={<Training Program/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
