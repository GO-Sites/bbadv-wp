$(document).ready(function(){
  //Bootstrap
  $('.carousel').carousel();


  //Slick carousel
  $('.slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/icon/slide-arrow-black.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='assets/icon/slide-arrow-black-r.svg'>",
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.slider-services').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/icon/slide-arrow-black.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='assets/icon/slide-arrow-black-r.svg'>",
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //CountUp Framework
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.',
    delay: 100,
  };
  var value1 = new CountUp('value1', 0, 200, 0, 7, options);
  if (!value1.error) {
    value1.start();
  } else {
    console.error(value1.error);
  }
  var value2 = new CountUp('value2', 0, 15, 0, 7, options);
  if (!value2.error) {
    value2.start();
  } else {
    console.error(value2.error);
  }
  var value3 = new CountUp('value3', 0, 300, 0, 7, options);
  if (!value3.error) {
    value3.start();
  } else {
    console.error(value3.error);
  }
  var value4 = new CountUp('value4', 0, 2, 0, 7, options);
  if (!value4.error) {
    value4.start();
  } else {
    console.error(value4.error);
  }

  //Own functions:
  //1. float button
  $('.float').hover(
    function(){
      $(this).addClass('animated bounce infinite')
    },

    function(){
      $(this).removeClass('animated bounce infinite')
    }

  );

  //2. responsive
  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize <= 600) {
      $('.desktop-social').removeClass('show').addClass('hide'),
      $('.mobile-social').removeClass('hide').addClass('show'),
      ScrollReveal().destroy('.nav-link'),
      $('.logo').attr("src","assets/img/logo-footer.png"),
      $('.cartilha').html("BAIXE A CARTILHA<br>“A GENTE COBRA MAS É POR UMA BOA CAUSA!”")
    }
    else {
      $('.mobile-social').removeClass('show').addClass('hide'),
      $('.desktop-social').removeClass('hide').addClass('show'),
      $('.logo').attr("src","assets/img/logo-navbar.png"),
      $('.cartilha').text("BAIXE A CARTILHA “A GENTE COBRA MAS É POR UMA BOA CAUSA!”")
      ScrollReveal().reveal('.nav-link', {
        delay: 500,
        interval: 500,
        origin: 'bottom',
        distance: '20%',
        duration: 1000
      });
    }
  }
  // Execute on load
  checkWidth();
  $(window).resize(checkWidth);


  //Scroll reveal

  //header
  ScrollReveal().reveal('.navbar-brand', {
    origin: 'left',
    distance: '10%',
    duration: 1000
  });

  // ScrollReveal().reveal('.nav-link', {
  //   delay: 500,
  //   interval: 500,
  //   origin: 'bottom',
  //   distance: '20%',
  //   duration: 1000
  // });

  ScrollReveal().reveal('.top-contact-list', {
    delay: 1500,
    interval: 500,
    origin: 'top',
    distance: '20%',
    duration: 1000,
    reset: true
  });

  //slider
  ScrollReveal().reveal('.arrow-down', {
    delay: 1000,
    origin: 'bottom',
    distance: '20%',
    duration: 1000
  });

  //video
  ScrollReveal().reveal('.video-frame', {
    reset: true,
    origin: 'top',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.video-content', {
    reset: true,
    delay: 500,
    interval: 500,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  //client
  ScrollReveal().reveal('.client-title', {
    reset: true,
    origin: 'top',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.client-content', {
    reset: true,
    delay: 500,
    interval: 500,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  //number
  ScrollReveal().reveal('.title-number', {
    reset: true,
    origin: 'top',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.number-box', {
    reset: true,
    delay: 500,
    interval: 500,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.number-btn-content', {
    reset: true,
    delay: 1000,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  //services
  ScrollReveal().reveal('.video-services', {
    delay: 300,
    reset: true,
    origin: 'top',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.services-content', {
    reset: true,
    delay: 800,
    interval: 500,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  //book
  ScrollReveal().reveal('.book-img', {
    reset: true,
    origin: 'left',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.book-details', {
    reset: true,
    delay: 500,
    interval: 500,
    origin: 'right',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  //form
  ScrollReveal().reveal('.form-content', {
    reset: true,
    origin: 'top',
    interval: 500,
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.form-group', {
    reset: true,
    delay: 500,
    interval: 200,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.submit', {
    delay:1500,
    reset: true,
    delay: 2500,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    viewFactor: 0.3
  });

  //footer
  ScrollReveal().reveal('.footer-nav-item', {
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    reset: true,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.address-item', {
    delay: 500,
    interval: 500,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    reset: true,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.footer-btn', {
    delay: 1000,
    interval: 500,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    reset: true,
    viewFactor: 0.3
  });

  ScrollReveal().reveal('.logo-footer', {
    delay: 2000,
    interval: 500,
    origin: 'bottom',
    distance: '20%',
    duration: 1000,
    reset: true,
    viewFactor: 0.3
  });

});
