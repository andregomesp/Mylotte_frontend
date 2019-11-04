function checkIfLoggedIn(failfureCallback) {
    if (localStorage.getItem("mylotte_token") && localStorage.getItem("mylotte_username")) {
        let loginPlaceholder = document.getElementById('login-button-placeholder')
        loginPlaceholder ? loginPlaceholder.remove() : "";
        let logoDiv = document.getElementById('logo-div')
        let logoDivChildren = logoDiv ? logoDiv.children : [];
        for (let i = 0; i < logoDivChildren.length; i++) {
          console.log(logoDivChildren[i]);
          logoDivChildren[i].remove();
        }
        let username = localStorage.getItem("mylotte_username");
        logoDiv.innerText = username;
        console.log(invokeHtml)
    } else {
      failfureCallback();
    }
  }