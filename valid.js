function auth()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="test@gmail.com"&&password=="obito@2002"){
        window.location.assign("video.html");
        alert("Login Successful");
    }
    else{
        alert("Invalid Authentication");
    return;    
    }
}