import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import CartRow from '../Cart Row/CartRow';

const Cart = ({items, handleX}) => {
    const [total, setTotal] = React.useState(0);
    React.useEffect(() => {
        const newTotal = items.reduce((sum, item) => sum + item.currentBidPrice, 0);
        setTotal(newTotal);
    }, [items]);
    return (
        <div className='bg-white rounded-2xl p-8'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr colSpan={3}>
                            <th className="text-2xl font-semibold flex items-center gap-2">
                                <FaRegHeart />Favorite Items
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 ? (
                            <tr>
                                <td colSpan={3}>
                                    <div className="flex flex-col items-center justify-center text-center py-20">
                                        <h1 className="text-xl pb-5">No favorites yet</h1>
                                        <p>Click the heart icon on any item to add it to your favorites</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            items.map((item, index) => (
                                <CartRow
                                    key={index}
                                    item={item}
                                    handleX={handleX}
                                />
                            ))
                        )}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Total bids Amount</th>
                            <th></th>
                            <th>{total.toFixed(1)}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Cart;