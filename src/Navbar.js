import logo from './DishLogo.png';
import './App.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


import Modal from './Modal';


function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <img id="logo" src={logo} alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://amitkumar70512.github.io/Task-1/">Task 1</a>
                            </li>
                            <li>
                                <button type="button" class="btn btn-light position-relative" data-bs-toggle="modal" data-bs-target="#wishlistModal">
                                    Wishlist <i class="fa-solid fa-bookmark"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {props.count}
                                    </span>
                                </button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <Button variant="contained" type="submit">Contained</Button>
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>

                    </div>
                </div>
            </nav>
            <Modal />
        </>
    );
}

export default Navbar;



