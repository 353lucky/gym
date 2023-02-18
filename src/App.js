import './App.css';
import React, { useEffect, useState } from "react";
import GymName from './GymName';


function App() {
  const [items, setItems] = useState([]);
  const [city, setCity] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await fetch(
        `https://devapi.wtfup.me/gym/places`
      );
      const data = await item.json();
      console.log(data.data.city);
      setItems(data.data);
    };
    fetchItem();
  }, []);
  useEffect(() => {
    console.log(city);
  }, [city]);

  return (
  <>
    <div className='App'>
    <div className='field'>
      <h2>Filters</h2>
      <br/>
      <br/>
      <h6>Location</h6>
      <input className='inputbox' placeholder='Enter location' />
      <br/>
      <br/>
      <h6>Price</h6>
      <input className='price inputbox' placeholder='Min' />     <input className='price inputbox' placeholder='Max' />
      <br/>
      <br/>
      <h6>Cities</h6>
        <select className="selectpicker inputbox" onChange={(e)=>setCity(e.value)}>
        <option selected>Chooose city</option>
        {items.map((item) => (
        <option>{item.city}</option>
        ))}
        </select>
      </div>
    </div>
    <GymName />
    </>
  );
}

export default App;
