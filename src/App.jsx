import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import Clubs from './pages/Clubs';

export default function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
          <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/clubs' element={<Clubs />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}