document.addEventListener("DOMContentLoaded", function() {
    var footer = document.createElement("footer");
    var p = document.createElement("p");
    p.innerText = "© " + new Date().getFullYear() + " My Website. All rights reserved.";

    footer.appendChild(p);

    document.getElementById("footer").appendChild(footer);
});
