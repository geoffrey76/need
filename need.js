let input = document.getElementsByTagName("input");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      input.style.backgroundColor = "yellow";
    }
  }); 