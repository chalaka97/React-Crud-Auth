import React, {useEffect, useState} from "react";
import {Link, useParams,useNavigate} from "react-router-dom";
import {UserService} from "../services/UserService";
import Loader from "./loader";

let Edit = () => {
    /*api data*/
    let navigate = useNavigate();
    let {uid} = useParams();
    let [state, setState] = useState({
        loading: false,
        user: {
            name : '',
            email: '',
            city : '',
        },
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
    }, []);
    /*this is update function in filling data - start*/
    let updateEditOnChange = (event) =>{
        setState({
           ...state,
           user:{
               ...state.user,
               [event.target.name] : event.target.value,
           }
        });
    }
    /*this is update function in filling data - end*/

    let editedUserData = async (event) =>{
        event.preventDefault();
        try{
            setState({...state,loading: true})
            let response = await UserService.editSingleUser(state.user,uid);
            if (response){
                setState({
                    ...state,
                    loading: false,
                })
                navigate('/view-list',{replace:true});
            }
        }
        catch (error){
            setState({
                ...state,
                errMsg: error.message,
                loading: false
            });
            navigate(`/edit/${uid}`,{replace:false});
        }

    }


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
                                <form className="row mt-2 p-3 g-3" onSubmit={editedUserData}>
                                    <input type="hidden" className="form-control" name="id" value={user.id}
                                           id="inputId"/>
                                    <div className="col-md-4">
                                        <label htmlFor="inputName" className="form-label">Name</label>
                                        <input type="text" className="form-control" name="name" onChange={updateEditOnChange} value={user.name}
                                               id="inputName"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" onChange={updateEditOnChange} value={user.email}
                                               id="inputEmail4"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" name="city" onChange={updateEditOnChange} value={user.city}
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