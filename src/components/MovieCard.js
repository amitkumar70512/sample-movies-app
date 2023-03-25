import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import '../App.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ADDTOWISHLIST } from '../redux/actions/actions';




function MovieItem(props) {
    let imageUrl = `https://image.tmdb.org/t/p/w500/${props.image}`;


    const dispatch = useDispatch();

    const payload = {
        id: props.id,
        title: props.title,
        imageUrl: imageUrl,
        release_date: props.release_date,
        avg_vote: props.avg_vote
    }

    return (
        <>
            <div className="card" style={{ width: "20rem", marginBottom: "20px" }}>
                {/* <img src={props.image} className="card-img-top" alt="movie " /> */}
                <img src={imageUrl} className="card-img-top" alt="movie " />
                <div className="card-body" >
                    <h4 className="card-title">{props.title}</h4>

                    <div className="card-info">
                        <i>Released Date <span>{props.release_date}</span></i>
                        <i>Average Votes <span>{props.avg_vote}</span></i>
                    </div>

                    <p className="card-text"> 
                    <Link to={`/detail/${props.id} `} style={{ color: 'blue', textDecoration: 'none' }}> Read more</Link>
                    </p>
                    
                    <IconButton aria-label="add to favorites" style={{ color: "red" }} onClick={() => dispatch(ADDTOWISHLIST(payload))}>
                        <FavoriteIcon />
                    </IconButton>

                    <IconButton aria-label="share" style={{ color: "#233f57" }} onClick={() => props.handleShare()}>
                        <ShareIcon />
                    </IconButton>
                </div>
            </div>
        </>
    );
}

export default MovieItem;




