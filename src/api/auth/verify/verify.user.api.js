import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const verifyUser = async () => {
    let accessToken = sessionStorage.getItem("token");
    if(!accessToken){
        accessToken = "token"
    }
    const data = {
        token: accessToken
    }
  try {
    const response = await axios.post(`${URL}/auth/verify`,data);
    return response.data;
  } catch (err) {
    return false;
  }
};
