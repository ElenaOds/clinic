$(document).ready(function(){
    $('.carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    });
  });
      