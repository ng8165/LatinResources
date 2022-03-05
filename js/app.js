function openSubNav() {
    const dropdown = document.getElementById("dropdown");
    
    if (dropdown.style.display === "none")
        dropdown.style.display = "flex";
    else
        dropdown.style.display = "none";
}