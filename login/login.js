function login() {
    event.preventDefault();
    let headers = new Headers();
    let formData = new FormData(document.getElementById("login-form"));
    let entity = {};
    entity["username"] = formData.get("username");
    entity["password"] = formData.get("password");
    fetch("https://mylotte-backend.herokuapp.com/api/login", 
        {
            headers: headers,
            body: JSON.stringify(entity),
            mode: "cors", 
            method: "POST"
        }
    )
    .then(response => {
        if (response.ok) {
            response.json()
            .then(json => {
                localStorage.setItem("mylotte_token", json.access_token);
                localStorage.setItem("mylotte_username", json.username);
                document.getElementById('id01').style.display='none';
                document.getElementById('login-button-placeholder').remove();
            })
        }
    })
    .then(json => {
        console.log(json);
    })
    .catch(err => {
        console.log(err);
    })
}