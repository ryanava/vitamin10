import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://vitamin10-xzdw.onrender.com/quote')
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
      .catch((err) => console.error('Error fetching quote:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{quote ? quote : 'Loading quote...'}</p>
      </header>
    </div>
  );
}

export default App;
