import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState({author: '', content: ''})

  const getRandomQuote = async () => {
    let response = await axios.get('https://api.quotable.io/random' , {
      params: {tags: 'technology', maxLength: 150}
    })
    response = response.data
    setQuote({author: response.author, content: response.content})
  }

useEffect(() => {
  async function fetchData() {
    getRandomQuote()
  }
  fetchData()
  }, [])

  return (
    <div className="App">
      <p className="Quote">{quote.content}</p>
      <p className="Author">{quote.author}</p>
      <button className="Get-quote" onClick={() => getRandomQuote()}>Get new quote</button>
    </div>
  );
}

export default App;
