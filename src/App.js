import { useEffect, useState } from 'react';
import './App.css';

function shuffleArray(arrayLength){
  let array = [];
  for(let i = 0; i < arrayLength; i++){array[i] = i;}

  //Durstenfeld shuffle - to randomize array entries
  for(let i = arrayLength-1;i>0;i--){
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  } 
  return array;
}
const initialCardState = {
  cards: [{
    data: 'a',
    isClicked: false
  },
  {
    data: 'b',
    isClicked: false 
  },
  {
    data: 'c',
    isClicked: false 
  },
  {
    data: 'd',
    isClicked: false 
  },
  {
    data: 'e',
    isClicked: false 
  },
  {
    data: 'f',
    isClicked: false 
  },
  {
    data: 'g',
    isClicked: false 
  },
  {
    data: 'h',
    isClicked: false 
  },
  {
    data: 'i',
    isClicked: false 
  },
  {
    data: 'j',
    isClicked: false 
  },
  {
    data: 'k',
    isClicked: false 
  },
  {
    data: 'l',
    isClicked: false 
  },]
};
let count = 0;

function App() {
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  const [{cards}, setCards] = useState(initialCardState);

  
   let array = [];
  if (cards !== undefined && cards !== null){
    array = shuffleArray(cards.length);
    count++;
    console.log("count: " + count);
  }; 

  //todo? need to make an eventlistener for each for the cards
  //todo? --within the eventlistener it changes the clicked isClicked to true and then gets rerendered
  //todo --checks if the card was already clicked if not increase score if so reset game score 
  //todo create a score board

  const handleClick = (e) => {
    const index = e.target.id;
    console.log("Clicked: "+ index);
    console.table(cards[index]);
    let newCards = {...cards};
/*     newCards[index].isClicked = true;
    setCards(newCards); */
    
    if(newCards[index].isClicked){
      alert("Duplicate click! - Resetting score");
      setScore(0);   
      //newCards.isClicked = false;
      newCards = {...initialCardState}
      setCards(newCards); 
    }
    else{
      newCards[index].isClicked = true;
      setCards(newCards)
      setScore(score + 1); 
    }
    //console.log(cards[index].isClicked);
  }
  useEffect(() => {
    setCards(initialCardState);
    
  }, [cards]);

  return ( 
    <div className="container">
      <div className="scoreBoard">
        Score: {score}
    {/*     Hi-Score: {hiScore} */}
      </div>
      <div className="grid">
        {array.map((randIndex) => (
          <div className="element" id={randIndex} onClick={handleClick}>{cards[randIndex].data}</div>
        ))}
      </div>
    </div>
  );
}    

export default App;
