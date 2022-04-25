import React from "react";

let Edit = ()=>{
    return(
        <React.Fragment>
            <div className="container col-8">
                <div className="card m-3">
                    <h2 className="text-center p-3">Edit User</h2>
                    <form className="row mt-2 p-3 g-3">

                        <div className="col-md-4">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Update User</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Edit;