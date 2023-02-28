import React, { useEffect, useState } from "react";
import './GymName.css';

function GymName() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItem = async () => {
          const item = await fetch(
            `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
          );
          const data = await item.json();
          // console.log(data);
          setItems(data.data);
        };
        fetchItem();
      }, []);

  return (
    <div className="Card1">
    <div className="card scroll" >
        {items && items.map((item) => (
            <>
            <img className="card-img-top" src={item.cover_image} alt={item.cover_image} />
            <div className="card-body">
            <h5 className="card-title">{item.gym_name}</h5>
            <p className="card-text">{item.address2},{item.address1},{item.city}</p>
            <p className="card-text">{item.duration_text} away | {item.distance_text}</p>
            <button className="btn btn-primary" style={{float: 'right'}} >Buy Now</button>
            </div>
            <hr/>
            </>
        ))}
    </div>
    </div>
  )
}

export default GymName