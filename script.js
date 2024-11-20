function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.style.top = "-100px"; // Hides the navbar
    } else {
        // Scroll Up
        navbar.style.top = "0"; // Shows the navbar
    }
    lastScrollTop = scrollTop;
});

/* --------------------GoToTopButtonJsCode------------------------------- */
// Get the button
let scrollBtn = document.getElementById("scrollBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to the top of the document when the user clicks the button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// -----------------main corousal section-------------------- 
// Carousel data dictionary
const carouselData = [
  {
    image: 'https://asiapacific.unwomen.org/sites/default/files/2024-05/in-c869-p01-1280px.jpg',
    heading: 'Living in a Ghost Town',
    description: 'Experience the eerie beauty of deserted streets in this vibrant cityscape.',
    button1: { text: 'Read More', link: 'https://example.com/read-more' },
    button2: { text: 'Watch Video', link: 'https://example.com/watch-video' }
  },
  {
    image: 'https://www.smilefoundationindia.org/wp-content/uploads/2023/07/9-scaled.jpg',
    heading: 'Explore Nature',
    description: 'Discover the untouched beauty of pristine forests and breathtaking landscapes.',
    button1: { text: 'Learn More', link: 'https://example.com/learn-more' },
    button2: { text: 'Start Journey', link: 'https://example.com/start-journey' }
  },
  {
    image: 'https://asiapacific.unwomen.org/sites/default/files/2024-05/in-c869-p03-1280px_0.jpg',
    heading: 'Urban Adventure',
    description: 'Get ready to dive into the hustle and bustle of the world\'s most iconic cities.',
    button1: { text: 'Discover', link: 'https://example.com/discover' },
    button2: { text: 'Book Now', link: 'https://example.com/book-now' }
  }
];

// Generate carousel items
const carouselSlide = document.getElementById('carousel-slide');
const carouselDots = document.getElementById('carousel-dots');

carouselData.forEach((item, index) => {
  // Create carousel item
  const carouselItem = document.createElement('div');
  carouselItem.className = 'carousel-item';
  carouselItem.innerHTML = `
    <img src="${item.image}" alt="Slide ${index + 1}">
    <div class="carousel-overlay">
      <h1>${item.heading}</h1>
      <p>${item.description}</p>
      <div class="carousel-buttons">
        <a href="${item.button1.link}" class="carousel-btn">${item.button1.text}</a>
        <a href="${item.button2.link}" class="carousel-btn">${item.button2.text}</a>
      </div>
    </div>
  `;
  carouselSlide.appendChild(carouselItem);

  // Create dots
  const dot = document.createElement('span');
  dot.className = 'carousel-dot';
  dot.onclick = () => currentSlide(index);
  carouselDots.appendChild(dot);
});

// Carousel functionality
let currentIndex = 0;
const totalSlides = carouselData.length;

function showSlide(index) {
  carouselSlide.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Auto change slides every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the carousel
showSlide(currentIndex);


// -----------------testimonial section-----------------------
// Ensures smooth hover effects reset after mouse leaves
$(".snip1390").mouseleave(function () {
  $(this).removeClass("hover");
});


// -------------------------coounter section----------------------- 
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
      counter.innerText = "0";
      const updateCounter = () => {
          const target = +counter.getAttribute("data-target") || parseInt(counter.innerText);
          const increment = target / 200;

          let count = +counter.innerText;
          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCounter, 20);
          } else {
              counter.innerText = target.toLocaleString();
          }
      };
      updateCounter();
  });
});

