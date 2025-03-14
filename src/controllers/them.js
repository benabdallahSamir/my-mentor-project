function getTheme() {
  let theme = localStorage.theme;
  return theme;
}
function setThemeToLocalStorage(str) {
  localStorage.theme = str;
}
export default function setTheme(toggle = false) {
  let theme = getTheme();
  if (!theme) {
    setThemeToLocalStorage("light");
    theme = "light";
    document.body.classList.toggle(theme);
  } else if (toggle) {
    theme = theme === "dark" ? "light" : "dark";
    setThemeToLocalStorage(theme);
    document.body.classList.toggle("dark");
  } else if (theme === "dark") {
    document.body.classList.add("dark");
  }
}
