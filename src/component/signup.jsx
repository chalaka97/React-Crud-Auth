import React from "react";
import '../App.css';

let Signup = () =>{
    return(
        <React.Fragment>
            <div className="container mt-5 col-4">
                <div className="card p-4">
                    <form className="">
                        <div className="row d-flex justify-content-center">
                            <h2 className="text-center mb-5 mt-2">Login with Social Media</h2>
                            <div className="col-9">
                                <a href="#" className="fb btnn">
                                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                                </a>
                                <a href="#" className="twitter btnn">
                                    <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                                </a>
                                <a href="#" className="google btnn"><i className="fa fa-google fa-fw">
                                </i> Login with Gmail
                                </a>
                            </div>


                        </div>
                        <div className="bottom-container mt-3">
                            <div className="row">
                                <div className="col-12">
                                    <a href="#"  className="btnn text-white text-center">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


            </div>

        </React.Fragment>
    )
}
export default Signup;