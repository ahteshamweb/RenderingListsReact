import { useState } from 'react';
import './App.css'
const App=() =>{
  const [items, setItems] = useState([
    'Ahtesham',
    'Awais',
    'Ijaz',
    'Shazad',
    'Umjad',
    'star'
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const listItems = filteredItems.map((item, index) =>
    <li key={index}>{item}</li>
  );

  return (
    <div className='box-container'>
      <input type="text" placeholder="Search Students..." onChange={handleSearchChange} />
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;
