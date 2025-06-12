import React from 'react';

const Banner = () => {
    return (
        <div className='pop'>
            <div
                className="hero min-h-screen flex"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/Mk2kf0mW/Banner-min.jpg)",
                        
                }}>
                    
                <div >
                    <div className="max-w-2xl text-white p-10 ml-20">
                        <h1 className="mb-5 text-5xl font-semibold">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5 font-light text-slate-300">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn  rounded-4xl">Explore Auction</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;