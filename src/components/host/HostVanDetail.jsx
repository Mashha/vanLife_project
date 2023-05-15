import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HostVanDetail() {
  const params = useParams();
  const [currentVan, setVanDetail] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default HostVanDetail;
