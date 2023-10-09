function setTheme(theme) {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(theme + "-theme");
    localStorage.setItem("theme", theme + "-theme");
}

function setColor(color) {
    document.body.classList.remove("yellow-theme-colors", "green-theme-colors", "blue-theme-colors", "red-theme-colors", "purple-theme-colors");
    document.body.classList.add(color + "-theme-colors");
    localStorage.setItem("color", color + "-theme-colors");
}
