import React, { useState, useEffect } from 'react';
import { apiWords } from '../Api';
import Header from "../Header/Header";
import Home from '../Home/Home';
import Footer from "../Footer/Footer"
import Table from '../../pages/Table';
import Game from '../../pages/Game';
import NotFound from '../../pages/NotFound';
import {Routes, Route} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom"

export default function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(apiWords)
      .then(response => response.json())
      .then(data => setWords(data));
  }, []);
  if (words.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path = '/table' element={<Table words={words} />}></Route>
            <Route exact path = '/game' element={<Game words = {words}/>}></Route>
            <Route exact path = '/' element={<Home/>}></Route>
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}