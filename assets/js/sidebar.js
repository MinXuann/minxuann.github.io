function responsive() {
    if (sidebar.classList.contains("-translate-x-full")) {
        const btn = document.querySelector(".mobile-menu-button");
        const sidebar = document.querySelector(".sidebar");
        
        btn.addEventListener("click", () => {
            sidebar.classList.toggle("-translate-x-full");
    })
}

window.addEventListener("load", () => {
    setTimeout(function update() {
        responsive();
    }, 300)
});

window.addEventListener("hashchange", () => {
    responsive();
    console.log('hash');
});
