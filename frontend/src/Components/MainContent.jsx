import React from 'react';
import Tabs from './Tabs';
import Filters from './Filterbtn';
import Table from './Table';
import Pagination from './Pagination';

const MainContent = () => {
  return (
    <div className="main-content flex-grow-1 p-4">
      <Tabs />

      {/* Container for Filters and Table*/}
      <div className="p-4 maincontent-container">
      <Filters />
      {/* Container for Table and Pagination */}
      <div className="table-pagination-container shadow p-3 mb-5 bg-white rounded">
        <Table />
        <div className="d-flex justify-content-end mt-3"> 
          <Pagination />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainContent;