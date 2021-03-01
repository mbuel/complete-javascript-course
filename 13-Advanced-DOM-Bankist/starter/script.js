'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(el =>  
  el.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
document.getElementsByTagName('header')[0].append(message);

console.log(message.style.color);
message.addEventListener('click', () => {
  message.remove();
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const changeView = function(view) {
  const viewPort = document.querySelector(`${view}`);
  viewPort.scrollIntoView({behavior: 'smooth'});
}

btnScrollTo.addEventListener('click', () => {
  changeView('#section--1')
});

// Focused per event handler
// document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     changeView(id);
//   });
// });

// Delegated handler
document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    changeView(id);
  }
})

const h1 = document.querySelector('h1');

// Going Downwards

console.log(h1.querySelectorAll('.highlight'));

const header = document.querySelector('.header');

console.log(header);



// h1.addEventListener('mouseenter', (e) => console.log(e));

// h1.onmouseenter = function (e) {
//   console.warn('test');
// }

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;

console.log(randomColor());

header.style.background = 'var (--gradient-secondary)';

let activeTab = '1';

document.querySelector('.operations').addEventListener('click', (e)=> {
  const closestTab = e.target.closest('.operations__tab');
  console.log(closestTab);
  if (!closestTab) return;
  if((closestTab.getAttribute('data-tab') !== activeTab)) {
    const setCurrent = function(tab, content) {
      tab.classList.toggle('operations__tab--active');
      content.classList.toggle('operations__content--active')
    }
    
    // deactivate existing view
    const currentContent = document.querySelector(`.operations__content--${activeTab}`);
    const currentTab = document.querySelector(`.operations__tab--${activeTab}`);
    setCurrent(currentTab, currentContent);


    // set active tab
    activeTab = e.target.getAttribute('data-tab');

    // activate new view
    const newContent = document.querySelector(`.operations__content--${activeTab}`);
    const newTab = document.querySelector(`.operations__tab--${activeTab}`);
    setCurrent(newTab, newContent);


  }
});

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// menu fade animation
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5));

const initialCoords = section1.getBoundingClientRect();
const navHeight = nav.getBoundingClientRect();

nav.addEventListener('mouseout', handleHover.bind(1.0));


// Not a good implementation
// window.addEventListener('scroll', (e) => {
//   const currentPos = window.scrollY;
//   console.log(currentPos, initialCoords.top);
//   if (currentPos >= initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }

// });

const stickyNav = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const obsOpts = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight.height}px`
}

const sections = document.querySelectorAll('.section');



const revealSection = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const headerObserver = new IntersectionObserver(stickyNav, obsOpts);
headerObserver.observe(header);

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
  
})

const loadImg = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  console.log(entry.target);
  entry.target.addEventListener('load', (e) => {
    entry.target.classList.remove('lazy-img');
  });
  imgObserver.unobserve(entry.target);
  
}

const imageTargets = document.querySelectorAll('img')

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0
});

imageTargets.forEach(img => imgObserver.observe(img));

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

const slides = document.querySelectorAll('.slide');

const slider = document.querySelectorAll('.slider');

const dotContainer = document.querySelector('.dots');

let curSlide = 0;
let maxSlide = slides.length - 1;

const createDots =function() {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
  })
}

const setActiveDot = function() {
  document.querySelectorAll('.dots__dot').forEach((dot, i) => {
    if (i === curSlide) {
      dot.classList.add('dots__dot--active');
    } else {
      dot.classList.remove('dots__dot--active');
    }
  })
}

const setSlides = function() {
  slides.forEach((s,i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`);
  setActiveDot();
}

createDots();
setSlides();



const nextSlide = function() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  setSlides();
}

const prevSlide = function() {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  setSlides();
}

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
})

dotContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;
    curSlide = Number(slide);
    setSlides();
  }
})
