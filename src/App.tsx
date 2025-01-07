import { Route, Routes } from 'react-router-dom';
import './App.css';
import NormalRoutes from './components/routes/normalRoutes';
import About from './pages/about';
import Home from './pages/home';
import Register from './pages/register';
import Search from './pages/search';
import { UserProvider } from './context/userContext';
import Login from './pages/login';
import Profile from './pages/profile';
import NotFoundPage from './pages/notFound';

function App() {

  return (
    <UserProvider>
      <div className="bg-[#090818] text-white px-4 sm:px-5 lg:px-20">
        <Routes>
          <Route path='/' element={<NormalRoutes><Home className='  ' /></NormalRoutes>} />
          <Route path='/searchbook' element={<NormalRoutes><Search /></NormalRoutes>} />
          <Route path='/about' element={<NormalRoutes><About /></NormalRoutes>} />
          <Route path='/profile' element={<NormalRoutes><Profile /></NormalRoutes>} />
          <Route path='/signup' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </UserProvider>
  );
};


export default App;
