import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";


const Home = ({handleWatchTime}) => {


    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setMovies(data))
    }, [])




    return (
        <div className="flex flex-col gap-10">
            {
                Movies.map(movie =><Movie movie={movie} handleWatchTime={handleWatchTime}></Movie>)
            }
        </div>
    );
};

export default Home;