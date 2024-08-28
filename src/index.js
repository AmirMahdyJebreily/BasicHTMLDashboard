const _side_menu = document.querySelector("aside#side-menu");
const _toggle = document.querySelector("button#menu-toggle");
_toggle.addEventListener("click", () => {
    _side_menu.classList.toggle("hide");
})