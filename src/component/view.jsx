import React, {useEffect, useState} from "react";
import Button from "bootstrap/js/src/button";
import {UserService} from "../services/UserService";
import Loader from "./loader";
import {Link} from "react-router-dom";

let View = () => {
    //get api data
    let [state, setState] = useState({
        //dataState
        loading: false,
        users: [],
        errorMsg: '',
    });
    /*
    //one method
       useEffect(async () => {
           try {
               const responseData = await (UserService.getAllUsers());
               setState(responseData.data);
           } catch (e) {
               console.error(e);
           }
       }, [])*/
    //secound method
    useEffect(() => {
        async function myUsersData() {
            try {
                setState({...state,loading: true})
                let responseData = await UserService.getAllUsers();
                setState({
                    ...state,
                    loading: false,
                    users: responseData.data
                }); //end setState
                /*console.log(responseData.data);*/
            }
            catch (error){
                setState({
                    ...state,
                    loading: false,
                    errorMsg: error.message
                }); //end setState
            }
        }
        myUsersData();
    }, []);

    let {loading,users,errorMsg} = state; //data state

    //end api data

    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(users)}</pre>*/} {/*testdata*/}
            <div className="container mt-2">
                <div className="card p-3">
                    <h2>View List</h2>
                    {
                        loading ? <Loader/> : <React.Fragment>
                        {/*table start*/}
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th scope="col">Added By</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.length > 0 && users.map(users=>{
                                    return(
                                        <tr key={users.id}>
                                            <th scope="row">{users.id}</th>
                                            <td>{users.name}</td>
                                            <td>{users.email}</td>
                                            <td>{users.city}</td>
                                            <td>{users.addedby}</td>
                                            <td><Link to={`/edit/${users.id}`} className="btn btn-primary">Edit</Link></td>
                                            <td><Link to={`/edit/${users.id}`} className="btn btn-danger">Delete</Link></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        {/*table end*/}
                    </React.Fragment> }

                </div>

            </div>

        </React.Fragment>
    )
};
export default View;