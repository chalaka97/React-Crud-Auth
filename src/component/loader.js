import React from "react";
import loaderImg from '../assets/img/loader.gif';
let Loader = ()=>{
    return(
        <React.Fragment>
            <div>
                <img src={loaderImg} className="d-block m-auto" />
            </div>
        </React.Fragment>
    )
};
export default Loader;