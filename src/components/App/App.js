import React from 'react';
import Header from "../Header/Header";
import Home from '../Home/Home';
import Footer from "../Footer/Footer"
import cards from "../../data/table-row.json"
import Card from '../Card/Card';
import Table from '../../pages/Table';
import Game from '../../pages/Game';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
      <Table/>
      <Game/>
    </div>

  );
}