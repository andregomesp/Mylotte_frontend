function invokeHtml(idParent, file_url) {
    fetch(file_url)
    .then(response => response.text())
    .then(text => {
        let parent = document.getElementById(idParent);
        let template = document.createElement("div");
        template.innerHTML = text.trim();
        parent.append(template);
    })
}