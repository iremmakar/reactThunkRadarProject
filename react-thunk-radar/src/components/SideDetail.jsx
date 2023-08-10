import axios from "axios";
import React, { useEffect, useState } from "react";
import { options2 } from "../helpers/constants";

const SideDetail = ({ detailId, setShowDetail }) => {
  const [d, setDetail] = useState();

  /* useEffect(() => {
    //setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        options2
      )
      .then((res) => setDetail(res.data));
    console.log(d);
  }, [detailId]);
*/
  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close" onClick={() => setShowDetail(false)}>
          x
        </p>
        {!d ? (
          <p className="load">Yükleniyor</p>
        ) : (
          <>
            <h2>{d.aircraft.model?.text}</h2>
            <h2>{d.aircraft.model?.code}</h2>
            <p>Kuyruk no: {d.aircraft?.registration}</p>
            <img src={d.aircraft?.images?.large[0].src} alt="" />
            <p>Şirket : {d.airline?.short}</p>
            <p>
              Kalkış:
              <a href="">{d.airport.origin?.name}</a>
            </p>
            <p>
              Hedef:
              <a href="">{d.airport.destination?.name}</a>
            </p>
            <p>
              Durum
              <span style={{ background: d.status.icon }}>{d.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
