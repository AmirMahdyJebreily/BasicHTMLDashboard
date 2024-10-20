const _side_menu = document.querySelector("aside#side-menu");
const _toggle = document.querySelector("button#menu-toggle");
const _darkToggle = document.querySelector("button#dark-toggle");
_darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
})

_toggle.addEventListener("click", () => {
    _side_menu.classList.toggle("hide");
})