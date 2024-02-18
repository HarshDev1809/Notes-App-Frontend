const getToken = ()=>{
    const token = document.cookie.split("=");
    return token[1];
}

module.exports= {
    getToken
}