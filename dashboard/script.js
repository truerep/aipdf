function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('toggled');
}

function closeSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('toggled');
}