import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {UserService} from "../services/UserService";
import Loader from "./loader";

let Edit = () => {
    /*api data*/
    let {uid} = useParams();
    let [state, setState] = useState({
        loading: false,
        user: {},
        errMsg: '',
    });
    useEffect(() => {
        async function getUserData(userID) {

            try {
                setState({...state, loading: true})
                let response = await UserService.getSingleUser(userID);
                /* console.log(response.data);*/
                setState({
                    ...state,
                    user: response.data,
                    loading: false
                });

            } catch (error) {
                setState({
                    ...state,
                    loading: false,
                    errMsg: error.message
                });
            }
        }

        getUserData(uid);
    }, [])


    /*end api data*/
    let {loading, user, errMsg} = state;
    return (
        <React.Fragment>
            <div className="container col-8">
                <Link to={`/view-list`} className="btn btn-success m-3">View List</Link>
                <div className="card m-3">
                    <h2 className="text-center p-3">Edit User</h2>
                    {
                        loading ? <Loader/> : <React.Fragment>
                            {
                                Object.keys(user).length > 0 &&
                                <form className="row mt-2 p-3 g-3">

                                    <div className="col-md-4">
                                        <label htmlFor="inputName" className="form-label">Name</label>
                                        <input type="text" className="form-control" defaultValue={user.name}
                                               id="inputName"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" defaultValue={user.email}
                                               id="inputEmail4"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" defaultValue={user.city}
                                               id="inputCity"/>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Update User</button>
                                    </div>
                                </form>
                            }
                        </React.Fragment>
                    }

                </div>
            </div>
        </React.Fragment>
    )
};
export default Edit;