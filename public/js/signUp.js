
const handleSubmit = () => {
    // change password to email
    const userName = document.getElementById("username-input").value
    const email = document.getElementById("email-input").value
    const password = document.getElementById("password-input").value
    const confirmPassword = document.getElementById("confirm-password").value
    const passwordError = document.getElementById("confirm-password-message")

    if(password === confirmPassword){
  fetch('/api/signup', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: email,
            password: password
        }),
        cache: 'default'
     })
     window.location.replace("/api/landingpage");
    }else{
        passwordError.textContent = "* your passwords do not match *"
    }

}