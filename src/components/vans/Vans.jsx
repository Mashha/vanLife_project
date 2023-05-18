import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [vansData, setVansData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const filtered = typeFilter
    ? vansData.filter((van) => van.type === typeFilter)
    : vansData;

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {filtered.map((van) => (
          <Link to={`/vans/${van.id}`}>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Vans;
