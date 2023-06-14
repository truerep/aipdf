// Fetch the header content
fetch('/header.html')
  .then(response => response.text())
  .then(data => {
    const headerElement = document.getElementById('header');
    headerElement.innerHTML = data;
  });

// Fetch the footer content
fetch('/footer.html')
  .then(response => response.text())
  .then(data => {
    const footerElement = document.getElementById('footer');
    footerElement.innerHTML = data;
  });