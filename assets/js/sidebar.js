function responsive() {
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");
    
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
    })
}

window.addEventListener("load", () => {
    setTimeout(function update() {
        const sidebar = document.querySelector(".sidebar");
        if (sidebar.classList.contains("-translate-x-full")) {
            responsive();
            console.log('changed');
        }
    }, 100)
});

window.addEventListener("hashchange", () => {
    responsive();
    console.log('hash');
});
