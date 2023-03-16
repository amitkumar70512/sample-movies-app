import './App.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import img from './movie.jpeg';


function MovieItem(props) {
    return (
        <>
            <div className="card" style={{ width: "20rem", marginBottom: "20px" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <IconButton aria-label="add to favorites" style={{ color: "red" }} onClick={props.handleClick}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{ color: "#233f57" }} onClick={props.handleShare}>
                        <ShareIcon />
                    </IconButton>
                </div>
            </div>
        </>
    );
}

export default MovieItem;




