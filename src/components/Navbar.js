import logo from '../DishLogo.png';
import '../App.css';

import { Link } from 'react-router-dom'
import Modal from '../Modal';


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
                                <Link className='nav-link' to="/">Home</Link>
                            </li>

                            <li>
                                <Link className='nav-link' to="/about" >About Us </Link>
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

                    </div>
                </div>
            </nav>
            <Modal movies={props.wishlist} />
        </>
    );
}

export default Navbar;



