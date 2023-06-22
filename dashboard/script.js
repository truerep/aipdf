function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('toggled');
}

function closeSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('toggled');
}

function toggleThemeOptions() {
    document.querySelector('.theme-options').classList.toggle('toggled');
}
 
function changeTheme(themeName) {
    var themeStyle = document.getElementById('theme-style');
    themeStyle.href = "./themes/"+themeName;
    document.querySelector('.theme-options').classList.remove('toggled');
}