import React, { useEffect, useState } from "react";

function Vans() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vansData.map((van) => (
          <div key={van.id} className="van-tile">
            <img src={van.imageUrl} alt="" />
            <div className="van-info">
              <h3 className="name">{van.name}</h3>
              <p className="price">
                {van.price}
                <span>/day</span>
              </p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vans;
