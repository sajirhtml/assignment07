import React from 'react';

const Footer = () => {
    return (
        <div >
            <footer className="footer footer-horizontal footer-center p-10">
        <aside>

            <p className="font-bold">
                <span className='text-3xl font-semibold'>
                    <span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span>
                </span>
            <br />
            <span className='font-normal flex justify-center gap-8 py-4 text-[22px]'>
                <span>Bid.</span>
                <span>Win.</span>
                <span>Own.</span>
            </span>
            </p>
            <div className="text-center flex items-center justify-center flex-1 gap-24 py-4 text-[18px]">   
                    <button>Home</button>
                    <button>Auctions</button>
                    <button>Categories</button>
                    <button>How to works</button>
                </div>
            <p className='text-[18px] py-4'>© 2025 AuctionHub. All rights reserved.</p>
        </aside>
        </footer>
        </div>
    );
};

export default Footer;