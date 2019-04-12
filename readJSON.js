init();

function init() {
    loadJSON(function (response) {

        // Parse JSON string into object
        var actualJSON = JSON.parse(response);
        console.log(actualJSON);

    });
}

// Load a JSON file
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");

    // Open the file
    xobj.open('GET', 'jsonFile.txt', true);

    // When ready read it
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value 
            // but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);

}