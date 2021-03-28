document.getElementById("submit").onclick = function() {
    var input = document.getElementById("input");
    
    if (input.value == "") {
        alert("You didn't input a word.");
    } else {
        var url;
        if (document.getElementById("lat-selector").checked) {
            url = "http://archives.nd.edu/cgi-bin/wordz.pl?keyword=" + input.value;
        } else {
            url = "http://archives.nd.edu/cgi-bin/wordz.pl?english=" + input.value;
        }

        var dictresult = document.getElementById("dictresult");
                        
        dictresult.setAttribute("src", url);
        dictresult.setAttribute("style", "visibility: visible");
                        
        input.value = "";
    }
}
                
document.getElementById("input").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        document.getElementById("submit").click();
    }
});

document.addEventListener("change", function() {
    var input = document.getElementById("input");
    
    if (document.getElementById("lat-selector").checked) {
        input.setAttribute("placeholder", "Enter a Latin word...")
    } else {
        input.setAttribute("placeholder", "Enter an English word...")
    }
});