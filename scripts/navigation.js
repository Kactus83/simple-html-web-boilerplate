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

    var bodyContent = document.querySelector('.body-content');
    var header = document.getElementById("header");

    window.addEventListener("scroll", function() {
        var headerHeightInPx = header.getBoundingClientRect().height;
        var navHeightInPx = navigation.getBoundingClientRect().height;

        var scrollHeight = window.scrollY || window.scrollTop;

        if (scrollHeight >= headerHeightInPx) {
            navigation.classList.add("fixed");
            bodyContent.style.marginTop = `${navHeightInPx}px`;
        } else {
            navigation.classList.remove("fixed");
            bodyContent.style.marginTop = "0px";
        }
    });
});
