import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://localhost:8080/api/";
const API_URL_REGISTER = API_URL + "user/register";
const API_URL_LOGIN = API_URL + "login";

class AuthService {
register(name, surname, email, username,password) {
    return  axios.post(API_URL_REGISTER, {
      name: name,
      surname: surname,
      email: email,
      username: username,
      password: password,
    });
  }

  async login(username, password) {
    console.log(username  );
    console.log(password  );
    const response = await axios
      .post(API_URL_LOGIN, {
        username: username,
        password: password,
      });
      console.log(response);
      var token = response.data.access_token;
      token = token.replace("Bearer", "");
      localStorage.setItem("token", JSON.stringify(token));

      var decoded = jwtDecode(token);
      console.log(decoded);
      localStorage.setItem("data", JSON.stringify(decoded));
    
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
