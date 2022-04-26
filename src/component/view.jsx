import React, {useEffect, useState} from "react";
import Button from "bootstrap/js/src/button";
import {UserService} from "../services/UserService";
import Loader from "./loader";
import {Link ,useNavigate} from "react-router-dom";

let View = () => {

    let navigate = useNavigate();
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

    //delete function here
    let clickDeleteUser = async (userID)=>{
        try {
            setState({...state,loading: true})
            let response = await UserService.deleteUser(userID);
            if(response){
                let responseData = await UserService.getAllUsers();
                setState({
                    ...state,
                    loading: false,
                    users: responseData.data
                });
            }
        }
        catch (error){
            console.log(error.message);
        }
    }
    //end delete function

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
                                            <td><button  className="btn btn-danger" onClick={() => clickDeleteUser(users.id)}>Delete</button></td>
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