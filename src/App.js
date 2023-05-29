import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-contain">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
