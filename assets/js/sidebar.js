function responsive() {
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");
    
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
    })
}

var stopChange = false;

window.addEventListener("hashchange", () => {
    responsive();
    stopChange = true;
});

window.addEventListener("load", () => {
    if (!stopChange) {
        responsive();
    }
});

