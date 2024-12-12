
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import './App.css'
import Search from './pages/search';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';


function App() {

  return (
    <div className="bg-background text-white min-h-screen px-4 sm:px-5 lg:px-20">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchbook' element={<Search />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default App;
