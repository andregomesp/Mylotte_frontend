function insertLoginName() {
    let userName = localStorage.getItem("mylotte_username");
    $("usernameDiv").innerHTML = userName;
}