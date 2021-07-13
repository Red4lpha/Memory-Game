import { useEffect, useState } from 'react';
import './App.css';
import DK from './images/Donkey Kong.webp';
import fox from './images/Fox.webp';
import ike from './images/Ike.webp';
import jigglypuff from './images/Jigglypuff.webp';
import kirby from './images/Kirby.webp';
import link from './images/Link.webp';
import mario from './images/Mario.webp';
import marth from './images/Marth.webp';
import ness from './images/Ness.webp';
import peach from './images/Peach.webp';
import pikachu from './images/Pikachu.webp';
import samus from './images/Samus.webp';



function App() {
  const initialCardState = 
  [{ data: DK,isClicked: false, id: 0},
  { data: fox,isClicked: false, id: 1 },
  { data: ike,isClicked: false, id: 2 },
  { data: jigglypuff,isClicked: false, id: 3 },
  { data: kirby,isClicked: false, id: 4 },
  { data: link,isClicked: false, id: 5 },
  { data: mario,isClicked: false, id: 6 },
  { data: marth,isClicked: false, id: 7 },
  { data: ness,isClicked: false, id: 8 },
  { data: peach,isClicked: false, id: 9 },
  { data: pikachu,isClicked: false, id: 10 },
  { data: samus,isClicked: false, id: 11 },];

  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  const [cards, setCards] = useState([...initialCardState]);
  
  const shuffleArray = (array) => {
    for(let i = array.length-1;i>0;i--){
      let j = Math.floor(Math.random() * i );
      [array[j], array[i]] = [array[i], array[j]];
    } 
  };

  const handleClick = (e) => {
    const index = e.target.id;
    console.log("Clicked: "+ index);
    //console.table(cards[index]);
    let newCards = [...cards];

    if(newCards[index].isClicked){
      alert("Duplicate click! - Resetting score");
      //newCards.isClicked = false;
      newCards = [...initialCardState];
      setCards(newCards);
      if(hiScore < score){
        setHiScore(score);
      } 
      setScore(0);   
    }
    else{
      newCards[index].isClicked = true;
      setCards(newCards)
      setScore(score + 1); 
    }
    //console.log(cards[index].isClicked);
  }

  useEffect(() => {
    console.log("inside UseEffect");
    const newCards = [...cards];
    shuffleArray(newCards);
    setCards(newCards);
    console.table(cards);

  },[score]);

  return ( 
    <div className="container">
      <div className="scoreBoard">
        <div className="score">Score: {score}</div>
        <div className="score">Hi-Score: {hiScore}</div>
      </div>
      <div className="grid">
         {cards.map((card, index) => (
          <img src={card.data} className="element" id={index} key={card.id} onClick={handleClick} />
        ))} 
      </div>
    </div>
  );
}    

export default App;
