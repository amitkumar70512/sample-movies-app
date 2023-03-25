import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADDTOWISHLIST } from "../../redux/actions/actions";

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Navbar from "../Navbar";
import GenreButton from "./style";

const API_KEY = "3e99401540a1842231b61f8caaca2b56";


const Details = () => {
    const dispatch = useDispatch();

    const { movieId } = useParams()
    const [result, setResult] = useState(null);
    const baseUrl= 'https://image.tmdb.org/t/p/w500';
    const img = 'https://image.tmdb.org/t/p/w500' + result.poster_path;
    const payload = {
        id: result.id,
        title: result.title,
        imageUrl: img,
        release_date: result.release_date,
        avg_vote: result.avg_vote
    }
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

            <section class="contact " data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="100">
            <div class="container py-5 h-100">
                <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6">
                <img key={result?.id} style={{ width: '20rem' }} src={`https://image.tmdb.org/t/p/w500` + result?.poster_path} alt="" />
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <h2> {result?.title}</h2>
                    <h5>Overview : </h5>
                    <i className=" justify-content-center m-2">{result?.overview}</i>
                    <h6>Movie Released Date : <span>{result?.release_date}</span></h6>
                    <h6>Popularity: {result?.popularity}</h6>
                    <h6 >Genre:{result?.genres.map(item => <GenreButton key={item?.id} className="inline-block">{item.name} </GenreButton>)}</h6>
                    <IconButton aria-label="add to favorites" style={{ color: "red" }} onClick={() => dispatch(ADDTOWISHLIST(payload))}>
                        <FavoriteIcon />
                    </IconButton>
                </div>
                </div>
            </div>
            </section>

        </>
    )
};


export default Details;