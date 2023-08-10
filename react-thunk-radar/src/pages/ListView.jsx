import React from "react";
import { useSelector } from "react-redux";

import ReactPaginate from "react-paginate";

import { useState } from "react";

const ListView = ({ openDetail }) => {
  const store = useSelector((store) => store);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((fly) => (
              <tr>
                <td>{fly.id}</td>
                <td>{fly.code}</td>
                <td>{fly.lat}</td>
                <td>{fly.lan}</td>
                <td>
                  <button onClick={() => openDetail(fly.id)}>Detay</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="geri"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default ListView;
