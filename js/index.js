
$(document).ready(function(){
  $(".multiple-items").slick({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.custom-prev'), 
    nextArrow: $('.custom-next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $(".doc-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  

});


const tabBtns = document.querySelectorAll('[data-tab-btn]')
tabBtns.forEach(function(i){
  i.addEventListener('click', function(){
    const activeButton = document.querySelector('.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    this.classList.add('active');
    const tabWindowId = this.dataset.tabBtn;
    const tabWindow = document.querySelector('#' + tabWindowId);
    const hiddenWindow = document.querySelector('.hidden')
    if(hiddenWindow){
      hiddenWindow.classList.remove('hidden')
    }
    tabWindow.classList.add('hidden');
  })
})



document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('[data-scroll]');

  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-scroll');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

const burgerBtn = document.querySelector('.btn-burger')
const burgerContent = document.querySelector('.burger-content')
burgerBtn.addEventListener('click', function(){
  this.classList.toggle('clicked')
  burgerContent.classList.toggle('clicked')
})