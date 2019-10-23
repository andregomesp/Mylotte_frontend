function login() {
    let formData = new FormData(document.getElementById("login-form"));
    let entity = {};
    entity["username"] = formData.get("username");
    entity["password"] = formData.get("password");
    fetch("https://mylotte-backend.herokuapp.com/api/login")
    .then(response => response.json)
    .then(response => {
        console.log(response);
        document.getElementById('id01').style.display='none';
    })
}