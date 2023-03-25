import { Link } from "react-router-dom";

function Empty(){
return(
    <>
        <div className="container-empty">
            <span>Your Wishlist is Empty <i class="fa-solid fa-trash"></i></span>
            <small>Please add some Movies first</small>
            <Link to='/' id="link"><i class="fa-solid fa-arrow-left fa-beat-fade"></i> Home</Link>
        </div>  

    </>
 )
}


export default Empty;