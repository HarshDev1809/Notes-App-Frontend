import UnAuthenticatedHome from "../../UnAuthenticatedHome/UnAuthenticatedHome";

function UnAuthenticated(props){

    const token = sessionStorage.getItem("token");
    if(!token){
        return <UnAuthenticatedHome />
    }else{
        return props.children;
    }

}

export default UnAuthenticated;