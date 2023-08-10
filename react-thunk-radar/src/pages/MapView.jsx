import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

const MapView = ({ setShowDetail, openDetail }) => {
  const store = useSelector((store) => store);

  return (
    <div>
      <MapContainer
        center={[39.146078, 34.159499]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {store?.flights.map((fly) => (
          <Marker position={[fly.lat, fly.lan]}>
            <Popup>
              <div className="popup">
                <span>Kod {fly.code}</span>
                <button onClick={() => openDetail(fly.id)}>Detay</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
