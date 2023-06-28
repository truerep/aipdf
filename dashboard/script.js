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

// Switching Tabs
document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab-item');
    var tabContents = document.querySelectorAll('.tab-content');

    function openTab(tabId) {
        tabContents.forEach(function(content) {
        content.style.display = 'none';
        });

        tabs.forEach(function(tab) {
        tab.classList.remove('active');
        });

        var selectedTabContent = document.getElementById(tabId);
        selectedTabContent.style.display = 'block';

        var selectedTab = document.querySelector('.tab-item[data-tab="' + tabId + '"]');
        selectedTab.classList.add('active');
    }

    document.querySelector('.option-tabs-wrapper').addEventListener('click', function(event) {
        var tabId = event.target.dataset.tab;
        if (tabId) {
            openTab(tabId);
        }
    });

    openTab(tabs[0].dataset.tab);
});

// Modal Popup 
document.addEventListener('DOMContentLoaded', function() {
    var openModalBtns = document.querySelectorAll('.openModalBtn');
    var closeButtons = document.querySelectorAll('.close');
    var modals = document.querySelectorAll('.modal');
  
    function openModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = 'block';
    }
  
    function closeModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = 'none';
    }
  
    openModalBtns.forEach(function(btn) {
      btn.addEventListener('click', function(event) {
        var modalId = event.target.dataset.modal;
        openModal(modalId);
      });
    });
  
    closeButtons.forEach(function(btn) {
      btn.addEventListener('click', function(event) {
        var modalId = event.target.dataset.modal;
        closeModal(modalId);
      });
    });
  
    modals.forEach(function(modal) {
      modal.addEventListener('click', function(event) {
        if (event.target === modal) {
          var modalId = event.target.id;
          closeModal(modalId);
        }
      });
    });
});