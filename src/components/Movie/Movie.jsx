import React from 'react';

const Movie = ({ movie, handleWatchTime }) => {
    // console.log(movie)
    const { movieName, category, description, poster, watchTime, imdbRating } = movie
    return (
        <>
            <div className="movie-container">
                <div className="card md:card-side bg-neutral shadow-xl p-0">
                    <figure><img className='w-full  h-96' src={poster} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary">{movieName}</h2>
                        <h2 className=" text-primary">{category}</h2>
                        <p className=''>{description} <br /> Lorem, ipsum dolor <br /> sit amet consectetur  adipisicing elit. <br /> Deleniti dolor <br /> voluptates esse quas sequi corporis, <br /> impedit nihil adipisci voluptatum debitis.</p>
                        <div>
                            <h1 className='text-warning'>Rating : {imdbRating}/10 </h1>
                            <h1 className='text-error'>WatchTime : {watchTime} m</h1>
                        </div>
                        <div className="card-actions md:justify-end justify-center">
                            <button className="btn btn-secondary" onClick={() => handleWatchTime(watchTime)}>Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movie;