import React from "react";
import {Link} from "react-router-dom";

let Navbar = ()=>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">App By Supun</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={'/create'} className="nav-link active" aria-current="page">Add</Link>
                            <Link to={'/view-list'} className="nav-link" href="#">List</Link>
                        </div>
                    </div>
                    <Link to={'/sign-up'} className="btn btn-primary">Sign Up</Link>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;