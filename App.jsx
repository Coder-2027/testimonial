import reviews from './data.jsx'
import Card from './Card.jsx'
import { useState } from 'react';

function App() {
  
  const [index, setIndex] = useState(0);

  function leftHandler(){
    if(index === 0){
      setIndex(reviews.length-1)
    }
    else{
      setIndex(index-1);
    }
  }
  function rightHandler(){
    if(index === reviews.length-1){
      setIndex(0)
    }
    else{
      setIndex(index+1);
    }
  }
  function surpriseHandler(){
    let i = Math.floor(Math.random()*reviews.length);
    setIndex(i);
  }

  return (
    <div className="App">
      <div className="heading">Our Testimonials</div>

      <div className="underline"></div>

      <Card reviews = {reviews[index]} leftHandler = {leftHandler} rightHandler = {rightHandler} surpriseHandler = {surpriseHandler}></Card>
    </div>
  );
}

export default App;
