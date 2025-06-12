import RowBtn from '../RowBtn/RowBtn';

const Row = ({row,handleBtn, id, handleColor, clr}) => {
    return (
        
        <tr>
            <td>
                <div className="flex items-center gap-3">

                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={row.image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                    <div>
                        <div className="font-semibold">{row.title}</div>
                    </div>

                </div>
            </td>

            <td>
                ${row.currentBidPrice}
            </td>

            <td>{row.timeLeft} Days left</td>
            <th>

                <RowBtn
                handleBtn={handleBtn}
                handleColor={handleColor}
                clr={clr}
                id={id}
                row={row}/>
            </th>
            
        </tr>
    );
};

export default Row;