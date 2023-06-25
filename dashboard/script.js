document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const fileNameSpan = document.getElementById('file-name');

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        if (file) {
            fileNameSpan.textContent = file.name;
        } else {
            fileNameSpan.textContent = 'Browse Pdf';
        }
    });
});

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