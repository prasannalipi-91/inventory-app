import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Search from './components/Search.js';
import ImageCard from './components/ImageCard.js';
import Tablecomponent from './components/Table.js';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com//photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
        console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };
  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {images.length > 0 ? (
        images.map((image, index) => <ImageCard key={index} image={image} />)
      ) : (
        <p>Nothing Selected prasanna</p>
      )}
    </div>
  );
}
export default App;
