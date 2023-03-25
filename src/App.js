import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState} from 'react';
import Home from './components/Home';
import About from './components/About'
import Details from './components/Details/Details';
import Wishlist from './components/Wishlist';


// const REACT_APP_API_KEY = "3e99401540a1842231b61f8caaca2b56";



function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/detail/:movieId' element={<Details />} />
        </Routes>
    </>
  );
}

export default App;