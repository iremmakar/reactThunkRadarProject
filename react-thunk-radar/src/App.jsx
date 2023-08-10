import { useEffect, useState } from "react";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import Header from "./components/Header";

import "./index.css";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import SideDetail from "./components/SideDetail";

function App() {
  const [showMapView, setShowMapView] = useState(true);

  const [showDetail, setShowDetail] = useState(false);

  const dispatch = useDispatch();

  const [detailId, setDetailId] = useState(null);

  const openDetail = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <>
      <Header />

      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}
      <div className="view-buttons">
        <button
          className={showMapView && "active"}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!showMapView && "active"}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {showMapView ? (
        <MapView setShowDetail={setShowDetail} openDetail={openDetail} />
      ) : (
        <ListView setShowDetail={setShowDetail} openDetail={openDetail} />
      )}
    </>
  );
}

export default App;
