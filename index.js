document.addEventListener('DOMContentLoaded', () => {
  // Select the toggle button
  const toggleButton = document.getElementById('theme-button');
  // Get the list of elements to toggle
  const elementsToToggle = ['body', 'header', 'main', 'footer', 'a', '#canvas-container', '#slider-bar'];

  // Add click event listener to toggle button
  toggleButton.addEventListener('click', () => {
    // Toggle the 'dark' class on all elements in the list
    elementsToToggle.forEach(element => {
      document.querySelector(element).classList.toggle('dark');
    });
    // Save the theme preference in local storage
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  // On page load, check if a theme preference is saved in local storage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    // If the saved theme is 'dark', add the 'dark' class to all elements in the list
    elementsToToggle.forEach(element => {
      document.querySelector(element).classList.add('dark');
    });
  }
});
