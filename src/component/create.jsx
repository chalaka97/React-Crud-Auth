import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {UserService} from "../services/UserService";

let Create = () => {
    let navigate = useNavigate();
    let [state,setState] =useState({
        loading:false,
        users:{
            name:'',
            email:'',
            city:'',
            addedby:'test'
        },
        errorMsg:''
    });

    let onChangeUpdateInput = (event) =>{
        setState({
            ...state,
            users: {
                ...state.users,
                [event.target.name] : event.target.value


            }
        })
    };

    let addUser = async (event)=>{
        event.preventDefault();
        setState({...state,loading: true})
        try{
            let response = await UserService.createUser(state.users);
            if(response){
                navigate('/view-list',{replace:true});
            }
           /* setState({
                ...state,
                users: response.data,
                loading: false
            })*/

        }
        catch (error){
            setState({
                ...state,
                loading: false,
                errorMsg: error.message,
            });
            navigate('/create',{replace:false});
        }

    };

    let {loading,users,errorMsg} = state;

    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(state.users)}</pre>*/}
            <div className="container col-8">
                <div className="card m-3">
                    <h2 className="text-center p-3">Create</h2>
                    <form className="row mt-2 p-3 g-3" onSubmit={addUser}>

                        <div className="col-md-4">
                            <label htmlFor="inputName"  className="form-label">Name</label>
                            <input type="text" required={true} name="name" value={users.name} onChange={onChangeUpdateInput} className="form-control" id="inputName"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" required={true} name="email" value={users.email} onChange={onChangeUpdateInput} className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" required={true} name="city" value={users.city} onChange={onChangeUpdateInput} className="form-control" id="inputCity"/>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add User</button>
                        </div>
                    </form>
                </div>
            </div>

        </React.Fragment>
    )
};
export default Create;