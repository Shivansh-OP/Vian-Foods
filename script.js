var seePasswordSignup = false;
function showPasswordSignup() {
    if (seePasswordSignup) {
        document.getElementById("see-signup").setAttribute("type","password")
        seePassword = false;
    }
    else {
        document.getElementById("see-signup").setAttribute("type","text")
        seePasswordSignup = true;
    }
}

var seePasswordLogin = false;
function showPasswordLogin() {
    if (seePasswordLogin) {
        document.getElementById("see-login").setAttribute("type","password")
        seePasswordLogin = false;
    }
    else {
        document.getElementById("see-login").setAttribute("type","text")
        seePasswordLogin = true;
    }
}