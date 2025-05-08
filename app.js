
  const heroSection = document.querySelector('.main_hero');
  const title = document.querySelector('.main_buy h2');
  const paragraph = document.querySelector('.main_buy p');

  const slides = [
    {
      bg: './images/desktop-image-hero-1.jpg',
      title: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
      bg: './images/desktop-image-hero-2.jpg',
      title: 'We are available all across the globe',
      text: 'With stores all over the world, it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.'
    },
    {
      bg: './images/desktop-image-hero-3.jpg',
      title: 'Manufactured with the best materials',
      text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
  ];

  let currentIndex = 0;

  const updateSlide = () => {
    const current = slides[currentIndex];
    heroSection.style.backgroundImage = `url('${current.bg}')`;
    title.textContent = current.title;
    paragraph.textContent = current.text;
  };

  document.getElementById('nextBtn').addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  });

  document.getElementById('prevBtn').addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // Inicializar con el primer slide
  updateSlide();

