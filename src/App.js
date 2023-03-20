import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState,useEffect,createContext } from 'react';
import Home from './components/Home';
import About from './components/About'
import Details from './components/Details/Details';


// const REACT_APP_API_KEY = "3e99401540a1842231b61f8caaca2b56";






function App() {
 
const UserContext = createContext()

const [wishlist,setWishlist] = useState([]);
useEffect(()=>{
setWishlist(wishlist=> [...wishlist,'238'])
},[])

  return (
    <>
      <Routes>
      <UserContext.Provider value={wishlist}>
        <Route path='/' element={<Home />}   exact />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:movieId' element={<Details />} />
        </UserContext.Provider>
      </Routes>
    </>
  );
}

export default App;