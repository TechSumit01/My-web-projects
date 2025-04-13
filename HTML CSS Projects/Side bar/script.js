const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector('.toggler');

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle("collapsed");
});
