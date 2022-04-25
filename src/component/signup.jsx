import React from "react";
import '../App.css';

let Signup = () =>{
    return(
        <React.Fragment>
            <div className="container mt-5 col-6">
                <div className="card p-4">
                    <form className="">
                        <div className="row">
                            <h2 className="text-center mb-5 mt-2">Login with Social Media or Manually</h2>
                            <div className="col">
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

                            <div className="col">
                                <div className="hide-md-lg">
                                    <p>Or sign in manually:</p>
                                </div>

                                <input type="text" className="border border-primary" name="username" placeholder="Username" required/>
                                <input type="password" className="border border-primary mt-1" name="password" placeholder="Password" required/>
                                        <input  type="submit" className="mt-1" value="Login"/>
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