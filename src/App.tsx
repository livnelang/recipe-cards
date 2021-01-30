import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface QuoteDetails {
  author: string;
  quote: string;
}

const QuoteHeader = (props: QuoteDetails) => {
  return (
    <div>
      <h3>{props.author}</h3>
      <h4>
        {props.quote}
      </h4>
    </div>
  )
}

function App() {
  const [quoteDetails, setQuoteDetails] = useState<QuoteDetails | null>(null);
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);

  const handleButtonClick = () => {
    setIsLoadingQuote(true);
    axios.get("/.netlify/functions/quote").then((res) => {
      const quote: QuoteDetails = {
        author: res.data.author,
        quote: res.data.quote
      }

      setQuoteDetails(quote);
      setIsLoadingQuote(false);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lambda Test With React</h1>

        {
          isLoadingQuote ? <FontAwesomeIcon icon={faSpinner} spin /> 
            : quoteDetails !== null ?
            <QuoteHeader {...quoteDetails}></QuoteHeader> : null
        }

        <div className="lambda-click-container">
          <span onClick={handleButtonClick}>Check The Lambda Function!</span>
        </div>
      </header>
    </div>
  );
}

export default App;
