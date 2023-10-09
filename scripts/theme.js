document.addEventListener("DOMContentLoaded", () => {
    
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("color");

    if(savedColor) {
        document.body.classList.remove("yellow-theme-colors", "green-theme-colors", "blue-theme-colors", "red-theme-colors", "purple-theme-colors");
        document.body.classList.add(savedColor);
    }

    if(savedTheme) {
        document.body.classList.remove("dark-theme", "light-theme");
        document.body.classList.add(savedTheme);
    }
});