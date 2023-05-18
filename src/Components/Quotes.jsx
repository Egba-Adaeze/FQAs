import React, { useState, useEffect } from 'react';
import Style from "../Components/Style.css"

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    getQuote() 
    const interval = setInterval(() => {
      setCount(count + 1);
  }, 3000);

  //Clearing the interval
  return () => clearInterval(interval);
}, [count]);
  

  const getQuote = () => {
    let url = `https://type.fit/api/quotes`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data;
        console.log(dataQuotes);
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];


        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
      })
  }

   const handleClick = () => {
    getQuote();
   }

  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div>
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
  )
}

export default Quotes;