function checkIfLoggedIn(failfureCallback) {
    if (localStorage.getItem("mylotte_token") && localStorage.getItem("mylotte_username")) {
      handleLogin();
    } else {
      failfureCallback();
    }
  }

function handleLogin() {
  let loginPlaceholder = document.getElementById('login-button-placeholder')
  loginPlaceholder ? loginPlaceholder.remove() : "";
  let logoDiv = document.getElementById('logo-div')
  let logoDivChildren = logoDiv ? logoDiv.children : [];
  for (let i = 0; i < logoDivChildren.length; i++) {
    logoDivChildren[i].remove();
  }
  invokeHtml("logo-div", "./userArea/userArea.html")
}