$(function () {

  var mixer = mixitup('.blog__list');
  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 2,
    isFinite: true,
    draggable: false,
    waitForAnimate: false,
    dots: true,
    appendDots: $('.reviews__dots'),
    responsive:
    [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow:1,
        },
      },
    ]

  })

  $('.reviews__arrows-left').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__arrows-right').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })

  $('.faq__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('faq__acc-link--active')) {
      $(this).removeClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideUp()
    } else {
      $('.faq__acc-link').removeClass('faq__acc-link--active')
      $('.faq__acc-text').slideUp()
      $(this).addClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideDown()
    }
  })  

    $(".header__nav-list a, .footer__botom a").on("click", function (e) {
      e.preventDefault()
      var id = $(this).attr('href'),
        top = $(id).offset().top
      $('body, html').animate({ scrollTop: top }, 500)
    })

    setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
      }else{
        $('.burger').removeClass('burger--follow')
      }
    }, 0);
    $('.burger, .overlay, .header__top a').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
    })
  });
