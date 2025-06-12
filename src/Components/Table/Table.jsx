import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';

const Table = ({handleBtn}) => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
      fetch("items.json")
        .then(res => res.json()) 
        .then(data=>setRows(data))
    }, []);

    return (
        <div className='bg-white rounded-2xl'>
            <div className="overflow-x-auto p-8">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>
    <tbody>

        {
        rows.map((row,index)=>(
        <Row 
        key={index}
        row={row}
        handleBtn={handleBtn}
        ></Row>))
        }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Table;