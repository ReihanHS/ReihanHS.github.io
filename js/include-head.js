// Function to include head content
function includeHead() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  
  // Specify the file to load
  xhr.open('GET', 'includes/head.html', true);
  
  // Set up the callback for when the request completes
  xhr.onload = function() {
    if (this.status === 200) {
      // Get the head element
      const head = document.getElementsByTagName('head')[0];
      
      // Create a temporary div to hold the content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = this.responseText;
      
      // Get all child nodes and add them to the head
      while (tempDiv.firstChild) {
        head.appendChild(tempDiv.firstChild);
      }
    }
  };
  
  // Send the request
  xhr.send();
}

// Call the function when the page loads
window.onload = includeHead;
