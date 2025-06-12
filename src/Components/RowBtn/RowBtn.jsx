import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const RowBtn = ({handleBtn,handleColor,id,row,clr}) => {
    return (
            <button 
                onClick={()=>{
                    handleColor(id);
                    handleBtn(row)}}
                    disabled={clr}
                    style={{
                        cursor: clr ? 'not-allowed' : 'pointer'}}>
                    {
                    clr? <FaHeart style={{ fill: 'red' }}/> : <FaRegHeart />
                    }
            </button>
    );
};

export default RowBtn;