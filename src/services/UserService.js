import axios from "axios";

export class UserService{
    static serverURL = 'http://localhost:5000';

    static getAllUsers(){
        let dataURL = `${this.serverURL}/users`;
        return axios.get(dataURL);
    }
    static getSingleUser(userID){
        let dataURL = `${this.serverURL}/users/${userID}`;
        return axios.get(dataURL);
    }
    static createUser(users){
        let dataURL = `${this.serverURL}/users`;
        return axios.post(dataURL,users);
    }
}