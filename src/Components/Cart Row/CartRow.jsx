import React from 'react';
import { ToastContainer, Bounce, toast } from 'react-toastify';

const CartRow = ({item, handleX}) => {

    return (
        <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.title}</div>
              <div className='flex gap-3'>
                <div className="text-sm opacity-50">${item.currentBidPrice}</div>
              <div className="text-sm opacity-50">Bids: {item.bidsCount}</div>
              </div>
            </div>
          </div>
        </td>
        <th></th>
        <th>
            <button onClick={()=>
            {handleX(item.id);
            toast.error(`${item.title} removed from Favorite!`, {
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
            }}>x</button>
        </th>
      </tr>
    );
};

export default CartRow;