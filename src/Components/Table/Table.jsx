import Row from '../Row/Row';

const Table = ({handleBtn, rows, clr, handleColor}) => {
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
        rows.map((row)=>(
        <Row 
        key={row.id}
        id={row.id}
        clr={clr[row.id]}
        handleColor={handleColor}
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