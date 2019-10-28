function invokeHtml(idParent, file_url) {
    fetch(file_url)
    .then(response => response.text())
    .then(text => {
        let parent = document.getElementById(idParent);
        let template = document.createElement("div");
        template.innerHTML = text.trim();
        let scripts = template.getElementsByTagName("script");
        for (i = 0; i < scripts.length; i++) {
            let script = scripts[i];
            let new_script = document.createElement("script");
            new_script.src = script.src;
            new_script.type = "text/javascript";
            script.remove();
            document.head.appendChild(new_script);
        }
        parent.append(template);
    })
}