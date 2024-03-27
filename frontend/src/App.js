import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
//import Search from './components/Search.js';
//import ImageCard from './components/ImageCard.js';
//import Tablecomponent from './components/Table.js';
import CustomizedTables from './components/muitable.js';
import CustomizedTables1 from './components/muistable.js';
import Selections from './components/Searchui.js';
import { appBarClasses } from '@mui/material';

function App() {
  const [word, setWord] = useState('');
  const [items, setItems] = useState([]);
  const [hcitems, setHcitems] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:5000/api/data`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data, ...items);
        console.log(items);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('Inventory');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:5000/api/hc_switch_status`)
      .then((res) => res.json())
      .then((data) => {
        setHcitems(data, ...hcitems);
        console.log(hcitems);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('Reachability');
  };

  return (
    <div className="App">
      <Header title="Inventory Tool" />
      <Selections
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
        handleSubmit1={handleSubmit}
      />
      {items.length > 0 && word === 'Inventory' && (
        <CustomizedTables item={items} />
      )}
      {hcitems.length > 0 && word === 'Reachability' && (
        <CustomizedTables1 item={hcitems} />
      )}
    </div>
  );
}
export default App;
