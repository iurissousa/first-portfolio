
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

function scrollHeader() {
  const nav = document.getElementById('header')
  const btn = document.getElementById('scroll-up')


  if (this.scrollY >= 700) {
    nav.classList.add('bg-about')
    btn.classList.add('bg-about')
  } else {
    nav.classList.remove('bg-about')
    btn.classList.remove('bg-about')
  }

  if (this.scrollY >= 1400) {
    btn.classList.add('bg-skills')
    nav.classList.add('bg-skills')
  } else {
    nav.classList.remove('bg-skills')
    btn.classList.remove('bg-skills')
  }


  if (this.scrollY >= 2000) {
    nav.classList.add('bg-projects')
    btn.classList.add('bg-projects')
  } else {
    btn.classList.remove('bg-projects')
    nav.classList.remove('bg-projects')
  }


}


window.addEventListener('scroll', scrollHeader)

window.sr = ScrollReveal({ reset: true })

sr.reveal('.animation-top', {
  duration: 1500,
  distance: '-100px',
})

sr.reveal('.animation-left-1', {
  duration: 1500,
  distance: '-100px',
  origin: 'right'
})

sr.reveal('.animation-left-2', {
  duration: 1500,
  distance: '-100px',
  origin: 'right'
})

sr.reveal('.animation-left-bottom', {
  duration: 1000,
  distance: '-100px',
  origin: 'right'
})

sr.reveal('.animation-right-1', {
  duration: 1000,
  distance: '-20px',
  origin: 'left'
})


const btnMobile = document.querySelector('#btn-mobile')
function toggleMenu(e) {
  if (e.type === 'touchstart') e.preventDefault


  const btnMobile = document.querySelector('#nav')
  nav.classList.toggle('active')

}
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)



document.getElementById('btn-scroll').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex'
})

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.bg-modal').style.display = 'none'
})

document.getElementById('scroll-up').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex'
})