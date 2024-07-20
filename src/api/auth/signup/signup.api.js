import axios from "axios"
const URL = process.env.REACT_APP_URL;

export const signUpApi = async(userDetails)=>{
    try{
        const response = await axios.post(`${URL}/auth/signup`,userDetails);
        console.log(response);
        return(response);
    }catch(err){

        console.log(err);
        return(err);
    }
}