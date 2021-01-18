import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const initialCardState = 
  [{ data: 'a', isClicked: false, id: 0},
  { data: 'b',isClicked: false, id: 1 },
  { data: 'c',isClicked: false, id: 2 },
  { data: 'd',isClicked: false, id: 3 },
  { data: 'e',isClicked: false, id: 4 },
  { data: 'f',isClicked: false, id: 5 },
  { data: 'g',isClicked: false, id: 6 },
  { data: 'h',isClicked: false, id: 7 },
  { data: 'i',isClicked: false, id: 8 },
  { data: 'j',isClicked: false, id: 9 },
  { data: 'k',isClicked: false, id: 10 },
  { data: 'l',isClicked: false, id: 11 },];

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
    {/*     Hi-Score: {hiScore} */}
      </div>
      <div className="grid">
        {cards.map((card, index) => (
          <div className="element" id={index} key={card.id} onClick={handleClick}>{card.data}</div>
        ))}
      </div>
    </div>
  );
}    

export default App;
