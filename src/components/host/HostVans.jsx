import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [hostVan, setHostVan] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVan(data.vans));
  }, []);

  return (
    <>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {hostVan.length > 0 ? (
          hostVan.map((van) => (
            <Link
              to={`/host/vans/${van.id}`}
              key={van.id}
              className="host-van-link-wrapper"
            >
              <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt="" />
                <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p>${van.price}/day</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h2>...Loading</h2>
        )}
      </div>
    </>
  );
}

export default HostVans;
