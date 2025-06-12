import React, { useState } from 'react';
import Table from '../Table/Table';
import Cart from '../Cart/Cart';

const Auction = () => {
    const [items, setItems] = useState([]);
    const handleBtn = (row) => {
        setItems([...items, row]);
    };


    const handleX = (id) =>{
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    return (
        <div className='min-h-screen p-20 bg-slate-300'>
            <h1 className='text-4xl'>Active Auctions</h1>
            <p className='text-xl py-8'>Discover and bid on extraordinary items</p>
            <div className='grid grid-cols-3 gap-8'>
                <div className="col-span-2">
                    <Table 
                    handleBtn={handleBtn}
                    />
                </div>
                <div className="col-span-1">
                    <Cart 
                    items={items}
                    handleX={handleX}
                    />
                </div>
            </div>
        </div>
    );
};

export default Auction;