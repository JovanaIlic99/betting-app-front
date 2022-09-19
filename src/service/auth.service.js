import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://localhost:8080/api/";
const API_URL_REGISTER = API_URL + "register";
const API_URL_LOGIN = API_URL + "login";

class AuthService {
 async register(name, surname, email, dateOfBirth, username, password) {
    return await axios.post(API_URL_REGISTER, {
      name,
      surname,
      email,
      dateOfBirth,
      username,
      password,
    });
  }

  async login(username, password) {
    const response = await axios
      .post(API_URL_LOGIN, {
        username,
        password,
      });
    if (response.headers.authorization) {
      console.log(response);
      var token = response.headers.authorization;
      token = token.replace("Bearer", "");
      localStorage.setItem("token", JSON.stringify(token));

      var decoded = jwtDecode(token);
      console.log(decoded);
      localStorage.setItem("data", decoded);
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
  }

  getToken() {
    return JSON.parse(localStorage.getItem("data"));
  }
}
export default new AuthService();
