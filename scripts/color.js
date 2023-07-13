document.addEventListener("DOMContentLoaded", function() {
    const switchInput = document.querySelector(".switch input");
    const bodyElement = document.body;
  
    // Retrieve the previous state from localStorage
    const isDarkMode = localStorage.getItem("isDarkMode") === "true";
  
    // Set the initial state based on the retrieved value
    switchInput.checked = isDarkMode;
  
    // Apply dark mode if it was enabled
    if (isDarkMode) {
      enableDarkMode();
    } else {
      showPage();
    }
  
    // Handle switch change event
    switchInput.addEventListener("change", function() {
      if (switchInput.checked) {
        enableDarkMode();
        localStorage.setItem("isDarkMode", "true");
      } else {
        disableDarkMode();
        localStorage.setItem("isDarkMode", "false");
      }
    });
  
    // Function to enable dark mode
    function enableDarkMode() {
      bodyElement.classList.add("dark");
      switchInput.checked = true;
    }
  
    // Function to disable dark mode
    function disableDarkMode() {
      bodyElement.classList.remove("dark");
      switchInput.checked = false;
    }
  
    // Function to show the body element
    function showPage() {
      bodyElement.style.visibility = "visible";
    }
  });
  
  // Your existing function
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }
  