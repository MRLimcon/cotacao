function init() {
    var url = window.location.href;
    let navBarLocation = document.getElementById("navbar aqui");
    let cookies = document.cookie;

    if (cookies != "username=user" && window.location.href != "https://localhost:5001/") {
        window.location.href = "https://localhost:5001/";
    } else if (cookies == "username=user" && window.location.href == "https://localhost:5001/") {
        window.location.href = "https://localhost:5001/Home/Logged/";
    }

    if (url == "https://localhost:5001/Home/Index/" || url == "https://localhost:5001/" ) {
        navBarLocation.innerHTML = "";
    }
}

function removeCookies() {
    var res = document.cookie;
    var multiple = res.split(";");
    for(var i = 0; i < multiple.length; i++) {
       var key = multiple[i].split("=");
       document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC;"+" path=/";
    }
 }

function logout() {
    removeCookies();
    if (window.location.href != "https://localhost:5001/") {
        window.location.href = "https://localhost:5001";
    }
}

document.getElementById("logout").addEventListener('click',logout);
init();