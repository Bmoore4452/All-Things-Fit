
const handleLogin = () => {
    const userName= document.getElementById("user-login").value
    const userPassword = document.getElementById("login-password").value
    const message = document.getElementById("wrong-user")

    fetch('/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            password: userPassword
        }),
        cache: 'default'
     })
     .then((response) => {
        if(response.ok){
            window.location.replace("/api/landingpage");
        }else{
            message.textContent = "User not found.  Please make sure your username and password are correct"
        }
     })
}