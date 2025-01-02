const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

// Toggle search functionality
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    searchIcon.classList.replace("uil-search", "uil-times");
  } else {
    searchIcon.classList.replace("uil-times", "uil-search");
  }
});

// Open the sidebar menu
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});

// Close the sidebar menu
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});







// contact section 

  document.addEventListener("scroll", function() {
    const paperPlane = document.querySelector('.fa-paper-plane');
    const rect = paperPlane.getBoundingClientRect();

    // Check if the element is in view
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      // Add the 'scrolled' class when the element is in view
      paperPlane.classList.add('scrolled');
    } else {
      // Remove the 'scrolled' class when the element is out of view
      paperPlane.classList.remove('scrolled');
    }
  });

  document.addEventListener("scroll", function() {
    const phoneIcon = document.querySelector('.fa-phone');
    const rect =  phoneIcon.getBoundingClientRect();

    // Check if the element is in view
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      phoneIcon.classList.add('scrolled');
    } else {
      phoneIcon.classList.remove('scrolled');
    }
  });



 
 let button_submit = document.querySelector(".button_submit");

button_submit.addEventListener("click", () => {
  button_submit.classList.add("active");

  setTimeout(() => {
    button_submit.classList.remove("active");
    button_submit.classList.add("complete");

    // Update the icon and text to "Completed" after 6 seconds
    let icon = button_submit.querySelector("i");
    if (icon) {
      icon.classList.remove("fa-cloud-arrow-up");
      icon.classList.add("fa-regular", "fa-circle-check");
    }
    button_submit.querySelector(".button-text").innerText = "Completed";

    // After 2 more seconds, reset back to the "Submit" state with animation
    setTimeout(() => {
      button_submit.classList.remove("complete");
      button_submit.classList.add("resetting");

      if (icon) {
        icon.classList.remove("fa-regular", "fa-circle-check");
        icon.classList.add("fa-cloud-arrow-up");
      }
      button_submit.querySelector(".button-text").innerText = "Submit";

      // Remove the resetting class after the animation duration (0.4s)
      setTimeout(() => {
        button_submit.classList.remove("resetting");
      }, 400); // Matches the CSS transition duration
    }, 2000); // 2 seconds delay to reset
  }, 6000); // 6 seconds delay to show "Completed"
});



// Function to check if the element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Apply the animation when scrolling
function animateOnScroll() {
  const careImg = document.querySelector('.care-img');
  if (isInViewport(careImg)) {
    careImg.classList.add('scrolled');
  }
}

// Listen to the scroll event
window.addEventListener('scroll', animateOnScroll);




