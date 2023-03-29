import React from 'react';

const Home = () => {
    return (
        <div >
            <div className="movie-container ">
                <div className="movie-card space-y-5">
                    <div className="movie-poster">
                        <img src="" alt="" />
                    </div>
                    <h3>Demon Slayer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="timeAndRating flex text-center justify-center gap-40">
                        <p>Watch Time : </p>
                        <p>Rating : </p>
                    </div>
                    <button className='btn btn-secondary w-80'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;