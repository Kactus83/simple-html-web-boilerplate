document.addEventListener("DOMContentLoaded", () => {
    // Apply saved theme from localStorage
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

function setTheme(theme) {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(theme + "-theme");
    localStorage.setItem("theme", theme + "-theme");
}

function setColor(color) {
    document.body.classList.remove("yellow-theme", "green-theme", "blue-theme", "red-theme", "purple-theme");
    document.body.classList.add(color + "-theme");
    localStorage.setItem("color", color + "-theme");
}
