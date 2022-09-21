import axios from 'axios';
import authHeader from './auth.header';

const API_URL = "http://localhost:8080/api/fixture";
const API_URL_UPDATE = "http://localhost:8080/api/";

class FixtureService {

  getAllFixtures(){
    const response = axios.get(API_URL+"/fixtures", {headers: authHeader()})
    return response;
  }

  getNewFixtures(){
    const response = axios.get(API_URL_UPDATE+"/get/fixtures", {headers: authHeader()})
    return response;
  }
  getNewOdds(){
    const response = axios.get(API_URL_UPDATE+"/get/odds", {headers: authHeader()})
    return response;
  }
  

}
export default new FixtureService();