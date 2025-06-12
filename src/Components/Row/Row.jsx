import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, Bounce, toast } from 'react-toastify';
import { useState } from 'react';
import RowBtn from '../RowBtn/RowBtn';

const Row = ({row,handleBtn}) => {
    const [clicked, setClicked] = useState(false);
    const handleBtnColor = () => {
        if (!clicked) {
            setClicked(true);

            toast.success(`${row.title} added to Favorite!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
    };

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
                <button
                    onClick={()=>{
                        handleBtnColor();
                        handleBtn(row)}}
                    disabled={clicked}
                    style={{
                        cursor: clicked ? 'not-allowed' : 'pointer'
                    }}
                >
                    {
                        clicked? <FaHeart style={{ fill: 'red' }}/> : <FaRegHeart />
                    }
                    
                </button>
                {/* <RowBtn/> */}
            </th>
        </tr>
    );
};

export default Row;