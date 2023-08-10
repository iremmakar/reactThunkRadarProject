import React from "react";

import store from "../redux/store";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((state) => state);
  return (
    <header>
      <div>
        <i class="fa-solid fa-plane"></i>
        <h2>Uçuş Radarı</h2>
      </div>
      <h4>297 uçuş bulundu</h4>
      {store.isLoading
        ? "Uçuşlar hesaplanıyor"
        : `${store.flights.length} uçuş bulundu`}
    </header>
  );
};

export default Header;
