
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';


class UserService {

    fetchUserDetails(){
        return axios.get(API_BASE_URL + 'members');
    }

 
    
}

export default  new UserService();