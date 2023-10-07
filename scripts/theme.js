document.addEventListener("DOMContentLoaded", () => {
    
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("color");

    if(savedColor) {
        document.body.classList.remove("yellow-theme", "green-theme", "blue-theme", "red-theme", "purple-theme");
        document.body.classList.add(savedColor);
    }

    if(savedTheme) {
        document.body.classList.remove("dark-theme", "light-theme");
        document.body.classList.add(savedTheme);
    }
});