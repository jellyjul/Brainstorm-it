import React from 'react';
import Header from "../Header/Header";
import Home from '../Home/Home';
import Footer from "../Footer/Footer"
import cards from "../../data/table-row.json"
import Card from '../Card/Card';
import TableRow from '../TableRow/TableRow';
import TableLine from '../TableLine/TableLine';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>

    {cards.map((card,id )=>
      <Card 
      id={id} 
      english={card.english} 
      transcription= {card.transcription} 
      russian = {card.russian}
      tags = {card.tags}
      tags_json = {card.tags_json} />)}
<TableRow/>

    </div>

  );
}

export default App;

{/* <TableRow id={cards.id} 
english={cards.english} 
transcription= {cards.transcription} 
russian = {cards.russian}
tags = {cards.tags}
tags_json = {cards.tags_json} /> */}