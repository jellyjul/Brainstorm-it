import React from 'react';
import Header from "../Header/Header";
import Home from '../Home/Home';
import Footer from "../Footer/Footer"
import Table from '../../pages/Table';
import Game from '../../pages/Game';
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/table' element={<Table/>}></Route>
        <Route path = '/game' element={<Game/>}></Route>
        <Route path = '/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>

  );
}