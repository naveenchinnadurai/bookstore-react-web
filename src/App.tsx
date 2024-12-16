import { Route, Routes } from 'react-router-dom';
import './App.css';
import NormalRoutes from './components/routes/normalRoutes';
import About from './pages/about';
import Home from './pages/home';
import Register from './pages/register';
import Search from './pages/search';

function App() {

  return (
    <div className="bg-[#090818] text-white flex flex-col justify-between min-h-screen px-4 sm:px-5 lg:px-20">
      <Routes>
        <Route path='/' element={<NormalRoutes><Home className='  ' /></NormalRoutes>} />
        <Route path='/searchbook' element={<NormalRoutes><Search /></NormalRoutes>} />
        <Route path='/about' element={<NormalRoutes><About /></NormalRoutes>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};


export default App;
