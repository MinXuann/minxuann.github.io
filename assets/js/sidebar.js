function responsive() {
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");
    
    btn.addEventListener("click", () => {
        console.log('bruh');
        sidebar.classList.toggle("-translate-x-full");
    })
}

responsive();

window.addEventListener("hashchange", () => {
    responsive();
});