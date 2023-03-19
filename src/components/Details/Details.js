import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import Navbar from "../Navbar";
import GenreButton from "./style";

const API_KEY = "3e99401540a1842231b61f8caaca2b56";


const Details = (props) => {

    const { movieId } = useParams()
    const [result, setResult] = useState(null);

    function query() {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
            .then(
                (data) => (data.json())
            )
            .then(
                movie => {
                    setResult(movie);
                }
            )
    }


    useEffect(() => {
        query();
    })







    return (
        <>
            <Navbar />

            {/* <h1 className="d-flex justify-content-center">Detail Page</h1> */}

            <div className="container -fluid my-5">
                <div className="container d-flex">
                    <div>
                        <img key={result?.id} style={{ width: '20rem' }} src={`https://image.tmdb.org/t/p/w500` + result?.poster_path} alt="" /></div>
                    <div className="offset-1" >
                        <h2> {result?.title}</h2>
                        <h5>Overview : </h5>
                        <i className="col-sm-8 justif-content-center my-2">{result?.overview}</i>
                        <h6>Movie Released Date : <span>{result?.release_date}</span></h6>
                        <h6>Popularity: {result?.popularity}</h6>
                        <h6 >Genre:{result?.genres.map(item => <GenreButton key={item?.id} className="inline-block">{item.name} </GenreButton>)}</h6>
                    </div>
                </div>
            </div>

        </>
    )
};


export default Details;