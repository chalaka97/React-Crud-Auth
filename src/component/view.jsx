import React from "react";
import Button from "bootstrap/js/src/button";

let View = ()=>{
    return(
        <React.Fragment>
            <div className="container mt-2">
                <div className="card p-3">
                    <h2>View List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><input type="button" className="btn btn-primary" name="edit" value="Edit"/></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>fat</td>
                            <td><input type="button" className="btn btn-primary" name="edit" value="Edit"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </React.Fragment>
    )
};
export default View;