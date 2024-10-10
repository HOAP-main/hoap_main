import React from 'react';

const Filterbtn = () => {
  return (
    <div className="ms-4 mb-4 d-flex">
      {/* Date Dropdown */}
      <div className="dropdown me-2">
        <button
          className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle"
          type="button"
          id="dateDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Date
        </button>
        <ul className="dropdown-menu" aria-labelledby="dateDropdown">
          <li><a className="dropdown-item" href="#">01-01-2024</a></li>
        </ul>
      </div>

      {/* Currency Dropdown */}
      <div className="dropdown me-2">
        <button
          className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle"
          type="button"
          id="currencyDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Currency
        </button>
        <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
          <li><a className="dropdown-item" href="#">USD</a></li>
        </ul>
      </div>

      {/* Type Dropdown */}
      <div className="dropdown">
        <button
          className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle"
          type="button"
          id="typeDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Type
        </button>
        <ul className="dropdown-menu" aria-labelledby="typeDropdown">
          <li><a className="dropdown-item" href="#">Payment</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Filterbtn;