import React from 'react';
import Tabs from '../../common_components/Tabs';
import Table from './Table';
import Pagination from './Pagination';
import { FaLock } from 'react-icons/fa';

const MainContent = () => {
  return (
    <div className="mt-2 main-content1">
      <Tabs />
      {/* Container for Balance and Table */}
      <div className="ps-lg-4 ps-md-4 pt-2 maincontent-container1 mt-2">
        {/* Balance Box */}
        <div className="d-flex justify-content-end align-items-center">
          <div className="balance-box ms-auto d-flex align-items-center p-3 me-3 p-sm-1 m-sm-1">
            <div>
              <div className='balance-txt'>Balance</div>
              <div className='amount-txt'>SAR 10,000,0</div>
            </div>
          </div>
        </div>

        {/* Container for Table and Pagination */}
        <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
          <Table />

          {/* Export Button and Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-5">
            <button className="btn modal-label-txt modal-btn-bg d-flex align-items-center">
              Export <FaLock className="ms-2" />
            </button>

            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;