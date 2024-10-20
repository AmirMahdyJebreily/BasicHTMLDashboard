const _side_menu = document.querySelector("aside#side-menu");
const _toggle = document.querySelector("button#menu-toggle");
const _darkToggle = document.querySelector("button#dark-toggle");
const _darkToggleLight = document.querySelector("button#dark-toggle > i-light");
const _darkToggleDark = document.querySelector("button#dark-toggle > i-dark");
_darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    _darkToggleLight.classList.toggle("hidden");
    _darkToggleDark.classList.toggle("hidden");
})

_toggle.addEventListener("click", () => {
    _side_menu.classList.toggle("hide");
})