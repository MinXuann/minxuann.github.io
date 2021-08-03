function responsive() {
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");
    
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
    })
}

window.addEventListener("load", () => {
    responsive();
});

window.addEventListener("hashchange", () => {
    responsive();
});
