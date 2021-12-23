function generateResults() {
    let input = document.getElementById("input").value;
    const query = input.replace(/\s/g, '_');
    
    // check if input is empty
    if (input == "") {
        alert("You didn't input a word.");
        return;
    }

    // find url to go in the dictionary iframe
    const url = "https://archives.nd.edu/cgi-bin/wordz.pl?" +
        (document.getElementById("lat-selector").checked ? "keyword" : "english") + "=" + query;

    const dictresult = document.getElementById("dictresult");
    
    // set the url and make the dictionary iframe visible
    dictresult.setAttribute("src", url);
    dictresult.setAttribute("style", "visibility: visible; padding-bottom: 8px;");
         
    // clear the input
    document.getElementById("input").value = "";
}
                
document.addEventListener("keyup", function(event) {
    // if enter key is pressed simulate a submit button click to initiate dictionary
    if (event.key == "Enter") {
        generateResults();
    }
});

function changePlaceholder() {
    // if radio button is changed, change the placeholder accordingly
    const input = document.getElementById("input");
    
    if (document.getElementById("lat-selector").checked) {
        input.setAttribute("placeholder", "Enter a Latin word...")
    } else {
        input.setAttribute("placeholder", "Enter an English word...")
    }
}