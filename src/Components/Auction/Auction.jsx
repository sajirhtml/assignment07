import React, { useState } from 'react';
import Table from '../Table/Table';
import Cart from '../Cart/Cart';
import { useEffect } from 'react';
import { ToastContainer, Bounce, toast } from 'react-toastify';

const Auction = () => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
      fetch("items.json")
        .then(res => res.json()) 
        .then(data=>setRows(data))
    }, []);

    const [items, setItems] = useState([]);
    const handleBtn = (row) => {
        setItems([...items, row]);
    };

    const [clr, setClr] = useState({});
    const handleColor = (id) => {
        setClr((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
        const item = rows.find(row => row.id === id);
        if (item) {
            toast.success(`${item.title} added to Favorite!`, {
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

    const handleX = (id) =>{
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        setClr((prev) => ({
            ...prev,
            [id]: false,
        }));
    }


    return (
        <div className='min-h-screen p-20 bg-slate-300'>
            <h1 className='text-4xl'>Active Auctions</h1>
            <p className='text-xl py-8'>Discover and bid on extraordinary items</p>
            <div className='grid grid-cols-3 gap-8'>
                <div className="col-span-2">
                    <Table 
                    handleBtn={handleBtn}
                    rows={rows}
                    clr={clr}
                    handleColor={handleColor}
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