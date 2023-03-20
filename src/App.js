import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import Home from './components/Home';
import About from './components/About'
import Details from './components/Details/Details';
import Wishlist from './components/Wishlist';


// const REACT_APP_API_KEY = "3e99401540a1842231b61f8caaca2b56";

const UserContext = createContext()

function App() {
  const [wishlist, setWishlist] = useState([]);

  const handleLike = (title) => {
    setWishlist(wishlist => [...wishlist, title]);
  }


  return (
    <>
      <UserContext.Provider value={{ wishlist, handleLike }}>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/detail/:movieId' element={<Details />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };