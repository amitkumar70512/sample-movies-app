import '../App.css';
import { useState, useEffect } from 'react';

import Navbar from './Navbar';
import MovieCard from './MovieCard'
import SearchBox from './SearchBox/Searchbox';

const REACT_APP_API_KEY = "3e99401540a1842231b61f8caaca2b56";




function Home() {

    const [movies, setMovies] = useState(null);
    const [page, setPage] = useState(1); // by default page should be page 1


    // const [wishlist, setWishlist] = useState([]);
    // const [favCount, setfavCount] = useState(0);//  number of movies in wishlist


    // replaced by usercontext 
    // const handleLike = (title) => {
    //     setWishlist(wishlist => [...wishlist, title]);
    //     setfavCount(favCount + 1);
    //     console.log(wishlist);
    // }

    const handleShare = () => {
        window.alert("will be handled to share movie", process.env.API_KEY);
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleNext = () => {
        setPage(page + 1);
    }


    const handleLoad = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${REACT_APP_API_KEY}&page=${page}`)
            .then(
                (data) => (data.json())
            )
            .then(
                data => {
                    setMovies(data.results);
                }
            )
    }



    //  By default, it runs both after the first render and after every update
    useEffect(() => {
        handleLoad();
    })




    return (
        <>
            <Navbar />

            <SearchBox />

            <div className="container my-2">
                <h2>Top Rated Movies <i class="fa-solid fa-video"></i></h2>

                <div className="row mx-2">
                    {movies && movies.map((movie) => (
                        <div className="col-md-4" key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                title={movie.title}
                                image={movie.backdrop_path}
                                release_date={movie.release_date}
                                avg_vote={movie.vote_average}
                                handleShare={handleShare} />
                        </div>
                    ))
                    }
                </div>

                {/* pagination */}
                <div className="container d-flex justify-content-between mt-5" style={{ borderTop: "1px solid #9a9898", padding: "10%" }}>
                    {
                        (page > 1) &&
                        <button type="button" className="btn btn-light" onClick={handlePrev}>&#8592; Previous</button>
                    }

                    {(page === 1) &&
                        <button type="button" className="btn btn-light" onClick={handlePrev} disabled>&#8592; Previous</button>
                    }
                    <button type="button" className="btn btn-dark">{page}</button>
                    <button type="button" className="btn btn-light" onClick={handleNext}>Next &#8594;</button>
                </div>
            </div>
        </>
    );
}

export default Home;



