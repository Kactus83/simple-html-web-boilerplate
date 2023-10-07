document.addEventListener("DOMContentLoaded", function() {
    var header = document.createElement("header");
    var h1 = document.createElement("h1");
    h1.innerText = "Welcome to My Website";
    
    header.appendChild(h1);

    document.getElementById("header").appendChild(header);
});
