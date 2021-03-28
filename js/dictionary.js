document.getElementById("submit").onclick = function() {
    var input = document.getElementById("input");
    
    // check if input is empty
    if (input.value == "") {
        alert("You didn't input a word.");
        return;
    }

    // find url to go in the dictionary iframe
    var url;
    if (document.getElementById("lat-selector").checked) {
        url = "http://archives.nd.edu/cgi-bin/wordz.pl?keyword=" + input.value;
    } else {
        url = "http://archives.nd.edu/cgi-bin/wordz.pl?english=" + input.value;
    }

    var dictresult = document.getElementById("dictresult");
    
    // set the url and make the dictionary iframe visible
    dictresult.setAttribute("src", url);
    dictresult.setAttribute("style", "visibility: visible");
         
    // clear the input
    input.value = "";
}
                
document.getElementById("input").addEventListener("keyup", function(event) {
    // if enter key is pressed simulate a submit button click to initiate dictionary
    if (event.key == "Enter") {
        document.getElementById("submit").click();
    }
});

document.addEventListener("change", function() {
    // if radio button is changed, change the placeholder accordingly
    var input = document.getElementById("input");
    
    if (document.getElementById("lat-selector").checked) {
        input.setAttribute("placeholder", "Enter a Latin word...")
    } else {
        input.setAttribute("placeholder", "Enter an English word...")
    }
});