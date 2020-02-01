$(function (){
  $('.slider__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<img src='images/previous.png' class='prev'>",
    nextArrow: "<img src='images/next.png' class='next'>",
    asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider__main',
    focusOnSelect: true,
    variableWidth: true
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header__inner').addClass("sticky");
    } else {
      $('.header__inner').removeClass("sticky");
    }
  });
  $('.burger').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });
});