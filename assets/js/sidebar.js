function responsive() {
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");
    
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
    })
}

window.addEventListener("load", () => {
    setTimeout(function update() {
        if (sidebar.classList.contains("-translate-x-full")) {
            responsive();
        }
        else {
            break;
        }
    }, 100)
});

window.addEventListener("hashchange", () => {
    responsive();
});
