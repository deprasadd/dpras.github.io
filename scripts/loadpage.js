// Function to handle the navigation based on URL fragments
function handleNavigation() {
  // Get the current URL fragment
  var fragment = window.location.hash;

  // Set the default fragment to #home if no fragment is provided
  if (fragment === '') {
      window.location.hash = '#home'; // Redirect to index.html#home
      return;
  }

  // Load the appropriate content based on the fragment
  if (fragment === '#home') {
      // Load home.html content
      loadContent('home-template');
  } else if (fragment === '#about') {
      // Load about.html content
      loadContent('about-template');
  } else if (fragment === '#cv') {
      // Load cv.html content
      loadContent('cv-template');
  } else {
      // Handle invalid fragment, show an error message or redirect to a default page
      document.getElementById('content').innerHTML = '<h2>Invalid Page</h2>';
  }
}

// Function to load the content from the specified template
function loadContent(templateId) {
  var template = document.getElementById(templateId);
  if (template) {
      document.getElementById('content').innerHTML = template.innerHTML;
  }
}

// Call the handleNavigation function when the page loads or when the URL fragment changes
window.addEventListener('DOMContentLoaded', handleNavigation);
window.addEventListener('hashchange', handleNavigation);
