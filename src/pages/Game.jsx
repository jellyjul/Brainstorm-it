import React, { useState } from "react";
import Card from "../components/Card/Card";
import styles from "../styles/game.module.scss"
import data from "../data/table-row.json"

export default function Game(props){

    const {cardIndex} = props;
    const [index, setIndex] = useState (cardIndex ? cardIndex : 0); 
    const [pressed, setPressed] = useState(false);

    const handleNext = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        }
    };
    const handleCheck = () => {  
        setPressed(!pressed);
        setTimeout(() => {
            setPressed(false);
        }, 4000);  
    } 
    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };
    const word = props.words[index];



    return(
        <div className={styles.game}>
        <div className= {styles.game__container}>
            <button className={styles.game__button} onClick={()=>{
            if (pressed){
                handleCheck();
                handlePrev();
            } else {
                handlePrev();
            }  }}> prev </button> 
            <div className={styles.container}>
                    <Card 
                    english={word.english} 
                    transcription= {word.transcription} 
                    russian = {word.russian}
                    showTranslate={handleCheck}
                    isTranslateShow={pressed}
                    />
            </div>
            <button className={styles.game__button} onClick={()=>{
            if (pressed){
                handleCheck();
                handleNext();
            } else {
                handleNext();
            }
            }}>next</button>
            
        </div>
        <div className={styles.game__learnt}>Words learnt: / {data.length } </div>
        <div className={styles.game__swiper}>
        </div>
        </div>
)}
    
// function CardsList(props){
//     

//     return (
//         <div>
//             <Card
//                 english={word.english}
//                 transcription={word.transcription}
//                 russian={word.russian}
//                 handleNext={handleNext}
//                 handlePrev={handlePrev}
//             />
//         </div>
//         );
// }
// export default CardsList;


// function Card(props) {
//     const [pressed, setPressed] = useState(false);
//     const handleCheck = () => {  
//         setPressed(!pressed);
//         setTimeout(() => {
//             setPressed(false);
//         }, 4000);  
//     } 
//     return (
//         <div className='cards'>
//         <div className='btn'><button onClick={()=>{
//             if (pressed){
//                 handleCheck();
//                 props.handlePrev();
//             } else {
//                 props.handlePrev();
//             }
//             }}>prev</button></div>
//                 <div className='card'>
//                     {pressed ? '' : <p className='cardTitle'>{props.english}</p>}
//                     {pressed ? '' : <p className='cardTranscription'>{props.transcription}</p>}
//                     {pressed ? <p className='cardTranslate'>{props.russian}</p> : <button onClick={handleCheck}>Проверить</button>}
//                 </div>
//         <div className='btn'><button onClick={()=>{
//             if (pressed){
//                 handleCheck();
//                 props.handleNext();
//             } else {
//                 props.handleNext();
//             }
//             }}>next</button></div>    
//         </div>
//     );
//     }
// export default Card;