function openSubNav() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.getAttribute("style") == "display: none;") {
        dropdown.setAttribute("style", "display: block;");
    } else {
        dropdown.setAttribute("style", "display: none;");
    }
}