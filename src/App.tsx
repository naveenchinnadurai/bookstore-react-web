
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import './App.css'
import Search from './pages/search';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="bg-background text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/searchbook' element={<Search/>}/>
      </Routes>
      <Footer/> 
    </div>
  );
};


export default App;
