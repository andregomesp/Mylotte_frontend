export function isLoggedIn() {
    return localStorage.getItem("mylotte_token") && localStorage.getItem("mylotte_username");
}