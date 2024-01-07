import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Watchhistory from './pages/Watchhistory';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={ <Home/>}/>
      <Route path='/watch' element={<Watchhistory/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
