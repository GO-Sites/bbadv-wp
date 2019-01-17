$(document).ready(function(){
  //Bootstrap carousel
  $('.carousel').carousel()

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
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
  };
  var value1 = new CountUp('value1', 0, 200, 0, 2.5, options);
  if (!value1.error) {
    value1.start();
  } else {
    console.error(value1.error);
  }
  var value2 = new CountUp('value2', 0, 15, 0, 2.5, options);
  if (!value2.error) {
    value2.start();
  } else {
    console.error(value2.error);
  }
  var value3 = new CountUp('value3', 0, 300, 0, 2.5, options);
  if (!value3.error) {
    value3.start();
  } else {
    console.error(value3.error);
  }
  var value4 = new CountUp('value4', 0, 2, 0, 2.5, options);
  if (!value4.error) {
    value4.start();
  } else {
    console.error(value4.error);
  }
});
