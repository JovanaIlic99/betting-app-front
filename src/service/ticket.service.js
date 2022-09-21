import axios from 'axios';
import authHeader from './auth.header';

const API_URL = "http://localhost:8080/api/ticket";
const API_URL_BET = "http://localhost:8080/api/bet";

class TicektService {

    postTicket(ticket){
        var auth=authHeader();
        return axios.post(API_URL+"/new/ticket",{ticket}, {headers: auth});
    }

    getTicketsByUsername(username){
        return axios.get(API_URL+"/get/user/tickets/"+username, {headers: authHeader()});
    }

    updateBets(){
        var auth=authHeader();
        console.log(authHeader())
        return axios.patch(API_URL_BET+"/update",{}, {headers: auth});
    }
    updateTickts(){
        console.log(API_URL+"/update")
        return axios.patch(API_URL+"/update",{}, {headers: authHeader()});
    }

}
export default new TicektService();