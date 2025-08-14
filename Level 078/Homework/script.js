const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const totalSlides = images.length;
  let index = 0;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlide();
  });

  document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
  });

