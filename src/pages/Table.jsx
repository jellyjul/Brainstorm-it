import React from "react";
import styles from "../styles/Table.module.scss"
import cards from '../data/table-row.json';
import TableLine from "../components/TableLine/TableLine";

export default function TableRow (){
  return (
    <div className={styles.table__container}>
      <div className={styles.table__tablewrap}>
        <div className={styles.table__header}>
          <div>English</div>
          <div>Transcription</div>
          <div>Russian</div>
          <div>Tag</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>
      </div>
      {cards.map((card,id )=>
      <TableLine id={id} 
      english={card.english} 
      transcription= {card.transcription} 
      russian = {card.russian}
      tags = {card.tags}
      tags_json = {card.tags_json}
      />
      )
      }
      </div>
  )
}
