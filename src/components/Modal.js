import '../App.css';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

function Modal(props) {
    const results = props.movies;
    const img_url = "http://image.tmdb.org/t/p/w500"


    return (
        <>
            <div className="modal fade" id="wishlistModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Your Favourites movies</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        {props.movies && props.movies.map((movie, index) => (

                            <div className="modal-body" key={index} style={{ borderLeft: "2px solid red" }}>
                                <span style={{ borderBottom: "1px solid grey", width: "100%", fontFamily: "cursive" }}> {index + 1}.  {movie}</span>
                                {/* <Link to={`/detail/${movie} `} style={{ color: '#323232', textDecoration: 'none' }}  > &#8250;</Link> */}
                            </div>
                        ))
                        }

                        {/* {
                        results?.results?.map((result, index) => (
                            <div key={index}>
                                <ListItem
                                    title={result}

                                    imageUrl={`${img_url}${result.poster_path}`}
                                    caption={result.release_date}
                                    id={result.id}
                                />

                            </div>
                        ))
                    } */}

                        <div className="modal-footer">
                            {/* <Link className='btn btn-secondary' to="/wishlist" >See all </Link> */}
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;






<div className="modal-dialog modal-dialog-centered">

</div>


