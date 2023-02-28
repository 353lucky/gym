import React, { useEffect, useState } from "react";
import './Sidebar.css';


function Sidebar() {

    const [items, setItems] = useState([]);
    // const [city, setCity] = useState();
  
    useEffect(() => {
      const fetchItem = async () => {
        const item = await fetch(
          `https://devapi.wtfup.me/gym/places`
        );
        const data = await item.json();
        // console.log(data.data.city);
        setItems(data.data);
      };
      fetchItem();
    }, []);


  return (
    <div className='field'>
          <h2>Filters</h2>
          <br/>
          <br/>
          <h6>Location</h6>
          <input className='inputbox' placeholder='Enter location' />
          <br/>
          <br/>
          <h6>Price</h6>
          <input className='price inputbox' placeholder='Min' />
          <input className='price inputbox' placeholder='Max' />
          <br/>
          <br/>
          <h6>Cities</h6>
            <select className="selectpicker inputbox">
            {items.map((item) => (
            <option defaultValue={"Chooose city"}>{item.city}</option>
            ))}
            </select>
          </div>
  )
}

export default Sidebar