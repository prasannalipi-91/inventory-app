import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Search from './components/Search.js';
import ImageCard from './components/ImageCard.js';
import Tablecomponent from './components/Table.js';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');
  const [items, setItems] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(word);
    fetch(`http://127.0.0.1:5000/api/data`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data, ...items);
        console.log(items);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };
  return (
    <div className="App">
      <Header title="Inventory Tool" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {items.length > 0 ? (
        <Tablecomponent item={items} />
      ) : (
        <p>Nothing Selected prasanna</p>
      )}
    </div>
  );
}
export default App;
