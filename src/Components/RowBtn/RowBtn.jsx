import React from 'react';

const RowBtn = () => {
    return (
        <div>
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
        </div>
    );
};

export default RowBtn;