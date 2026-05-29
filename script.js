const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
  const track = slider.querySelector('.slider__track');
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.slider__btn--prev');
  const nextBtn = slider.querySelector('.slider__btn--next');

  let currentIndex = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
    nextBtn.style.display =
      currentIndex === slides.length - 1 ? 'none' : 'flex';
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  updateSlider();
});
const typingBlocks = document.querySelectorAll('.typing');

typingBlocks.forEach((typingEl) => {
  const fullText = typingEl.dataset.text;

  let started = false;

  function startTyping() {
    typingEl.textContent = '';
    typingEl.style.opacity = '1';

    let i = 0;

    const timer = setInterval(() => {
      typingEl.textContent = fullText.slice(0, i + 1);

      i++;

      if (i >= fullText.length) {
        clearInterval(timer);
      }
    }, 140);
  }

  window.addEventListener('scroll', () => {
    const blockTop = typingEl.getBoundingClientRect().top;

    if (blockTop < window.innerHeight * 0.8 && !started) {
      started = true;
      startTyping();
    }
  });
});
