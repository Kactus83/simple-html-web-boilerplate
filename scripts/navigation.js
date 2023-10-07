document.addEventListener("DOMContentLoaded", function() {
    var navigation = document.createElement("nav");
    
    var btnHome = document.createElement("button");
    btnHome.innerText = "Home";
    btnHome.onclick = function() {
        window.location.href = "../home/home.html";
    };

    var btnSettings = document.createElement("button");
    btnSettings.innerText = "Settings";
    btnSettings.onclick = function() {
        window.location.href = "../settings/settings.html";
    };

    navigation.appendChild(btnHome);
    navigation.appendChild(btnSettings);

    document.getElementById("navigation").appendChild(navigation);
});
