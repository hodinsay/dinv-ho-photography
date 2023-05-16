import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import City from './components/Portfolio/City/City';
import Wedding from "./components/Portfolio/Wedding/Wedding";
import Landscape from './components/Portfolio/Landscape/Landscape';
import Portrait from "./components/Portfolio/Portrait/Portrait";
import People from './components/Portfolio/People/People';
import Car from './components/Portfolio/Car/Car';
import Animal from './components/Portfolio/Animal/Animal';
import Food from './components/Portfolio/Food/Food';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/city' element={<City />}/>
        <Route path='/wedding' element={<Wedding />}/>
        <Route path='/portrait' element={<Portrait />}/>
        <Route path='/landscape' element={<Landscape />}/>
        <Route path='/car' element={<Car />}/>
        <Route path='/people' element={<People />}/>
        <Route path='/animal' element={<Animal />}/>
        <Route path='/food' element={<Food />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
