function onHandleClick() {
    var navbar = document.getElementById("myheader");
    if (navbar.className === "Child1") {
        navbar.className += " responsive";
    }
        else {
        navbar.className = "Child1";
    }
}