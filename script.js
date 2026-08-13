document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll(".panel");
    
    panels.forEach((panel) => {
        panel.addEventListener("mouseover", () => {
            removeActiveClasses();
            panel.classList.add("active");
        });
    });
    
    function removeActiveClasses() {
        panels.forEach((panel) => {
            panel.classList.remove("active");
        });
    }
});




  var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  let currentIndex = 0;
  let totalImages = 18;
  
  function loadMoreImages() {
      currentIndex += 4;
      updateGallery();
  }
  
  function loadLessImages() {
      currentIndex -= 4;
      updateGallery();
  }
  
  function updateGallery() {
      const images = document.querySelectorAll('.gallery-item');
      for (let i = 0; i < images.length; i++) {
          if (i < currentIndex + 4) {
              images[i].style.display = 'block';
          } else {
              images[i].style.display = 'none';
          }
      }
  
      document.getElementById('showMore').style.display = currentIndex + 4 < totalImages ? 'inline-block' : 'none';
      document.getElementById('showLess').style.display = currentIndex > 4 ? 'inline-block' : 'none';
  }
  
  function openFullScreen(element) {
      const modal = document.getElementById('fullScreenModal');
      const modalImage = document.getElementById('modalImage');
      modal.style.display = 'block';
      modalImage.src = element.src;
      currentIndex = Array.from(element.parentNode.children).indexOf(element);
  }
  
  function closeFullScreen() {
      const modal = document.getElementById('fullScreenModal');
      modal.style.display = 'none';
  }
  
  function changeImage(direction) {
      const images = document.querySelectorAll('.gallery-item img');
      currentIndex = (currentIndex + direction + images.length) % images.length;
      document.getElementById('modalImage').src = images[currentIndex].src;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      updateGallery();
  });
  

//   course pdf downloading

const showFormButton = document.getElementById('showForm');
const formModal = new bootstrap.Modal(document.getElementById('formModal'));

// Show the modal when button is clicked
showFormButton.addEventListener('click', () => {
    formModal.show();
});

// Handle form submission
const popupForm = document.getElementById('popupForm');
popupForm.addEventListener('submit', (event) => {
    // Allow the form to submit to Web3Forms
    formModal.hide(); // Hide the modal
    setTimeout(() => {
        // Download the PDF after a short delay to ensure form submission
        const link = document.createElement('a');
        link.href = 'assets/gravityCoursePro.pdf'; // Replace with actual PDF path
        link.download = 'GravityClasses_CourseDetails.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 3000); // 3 seconds delay to allow submission
});


function sendWhatsAppMessage(courseName) {
    const phoneNumber = "917004166363"; // Gravity Classes contact number
    const message = encodeURIComponent(`I am interested in enrolling in the ${courseName} course offered by Gravity Classes. Please provide more details.`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
}