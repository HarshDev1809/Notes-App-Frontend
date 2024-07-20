import UnAuthenticatedHome from "../../UnAuthenticatedHome/UnAuthenticatedHome";

function UnAuthenticated(props){

    const token = sessionStorage.getItem("token");
    if(!token){
        console.log("is okay")
        return <UnAuthenticatedHome />
    }else{
        console.log("not okay")
        return props.children;
    }

}

export default UnAuthenticated;