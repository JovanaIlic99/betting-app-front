import axios from 'axios';
import authHeader from './auth.header';

const API_URL = "http://localhost:8080/api/user";

class UserService {

    async getAllUsers(){
        const response = await axios.get(API_URL+"/users", {headers: authHeader()});
        return response;
    }
    async getUserInfo(username){
        const response =axios.get(API_URL+"/get/"+username, {headers: authHeader()})
        return response;
    }
    async deleteUser(username){
        return await axios.delete(API_URL+"/delete/"+username, {headers: authHeader()});
    }


}
export default new UserService();