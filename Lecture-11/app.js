let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = ()=>{
    Navbar.classList.toggle("active")
}

const swiper = new Swiper('.home-slide', {
  // Optional parameters
  loop: true,
  slidePreView:1,
  spaceBetween:10,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  brealpoints:{
    "0":{
        slidePreView:1,
        autoplay:{
            delay:700,
            disableInteraction:false
        }
    },
    "768":{
         slidePreView:2,
    },
    "1020":{
         slidePreView:3,
    }
  }
});