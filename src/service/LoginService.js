import axios from 'axios';

const USER_LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/login/LoginUser";

class loginService{

    createUserLogin(user){
        return axios.post(USER_LOGIN_API_BASE_URL, user);
    }

}
export default loginService;