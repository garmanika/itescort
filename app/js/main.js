$(function () {
  let mobileNavTrigger = $(".menu-btn");
  let mobileNav = $(".header-menu");
  mobileNavTrigger.on("click", function () {
    if (!$(".menu-btn").hasClass("active")) {
      $(".menu-btn").addClass("active");
      mobileNav.addClass("active");
      $("body").addClass("no-scroll-mobile");
      $(".header").addClass("open-menu");
      $(".mobile-navigation-search-inner").addClass("show");
    } else {
      $(".menu-btn").removeClass("active");
      mobileNav.removeClass("active");
      $("body").removeClass("no-scroll-mobile");
      $(".header").removeClass("open-menu");
      $(".mobile-navigation-search-inner").removeClass("show");
      $(".mobile-navigation-sub-position").removeClass("active current");
    }
    svg4everybody({});
  });


  let mobileNavParent = $(".mobile-navigation-menu .is-parent > a");
  let mobileNavBack = $(".mobile-navigation-sub-menu-heading");
  mobileNavParent.on("click", function (e) {
    e.preventDefault();
    let current = $(this).next(".mobile-navigation-sub-position");
    $(".mobile-navigation-sub-position").scrollTop("0").removeClass("current");
    current.addClass("active current");
  });
  mobileNavBack.on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".mobile-navigation-sub-position")
      .removeClass("active current");
    $(this)
      .closest(".mobile-navigation-sub-position.active")
      .addClass("current");
  });
  $(window).on("scroll", function () {
    var height = $(document).scrollTop().valueOf();
    if (height >= 40) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  const swiper = new Swiper(".feedback-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
      el: ".feedback-slider .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if ((index + 1) >= 10) {
          return (
            '<span class="' +
            className +
            '"><span class="number">' +
            (index + 1) +
            "</span></span>"
          );
        }
        else {
          return (
            '<span class="' +
            className +
            '"><span class="number">' +
            0 +
            (index + 1) +
            "</span></span>"
          );
        }

      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
    },
  });
  const swiper2 = new Swiper(".prices-example", {
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".prices-example .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if ((index + 1) >= 10) {
          return (
            '<span class="' +
            className +
            '"><span class="number">' +
            (index + 1) +
            "</span></span>"
          );
        }
        else {
          return (
            '<span class="' +
            className +
            '"><span class="number">' +
            0 +
            (index + 1) +
            "</span></span>"
          );
        }

      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
    },
  });



  let phoneInputs = $('.add-phone-mask');
  phoneInputs.each(function (index, el) {
    $(this).inputmask({
      mask: "+7 (999) 999 99 99",
      onBeforePaste: function (pastedValue, opts) {
        let clearValue = pastedValue.replace(/\D/g, '');
        if (clearValue.indexOf('89') === 0) {
          return clearValue.replace('89', '+79');
        }
      },
      showMaskOnHover: false,
      clearIncomplete: true
    });
  });

  phoneInputs.on("keyup", function (event) {
    let value = $(this).inputmask("unmaskedvalue");
    if (value.length === 2) {
      if (value.indexOf('89') === 0 || value.indexOf('79') === 0) {
        $(this).val('9');
      }
    }
  });
  // ymaps.ready(init);

  // function init() {
  //   let myMap = new ymaps.Map("map", {
  //     center: [54.50337577744105, 36.30289029629514],
  //     zoom: 18
  //   }, {
  //     searchControlProvider: 'yandex#search'
  //   });
  //   // Метка со своей картинкой.

  //   let myPlacemark = new ymaps.Placemark([54.50337577744105, 36.30289029629514], null, {
  //     iconLayout: 'default#image',
  //     iconImageHref: "img/svg-origin/map-icon.svg",
  //     iconImageSize: [32, 32],

  //   });
  //   myMap.geoObjects.add(myPlacemark);
  //   myMap.controls.remove('zoomControl');
  // }
  ymaps.ready(init);
  let myMap;

  function init() {

    let i;
    let place;
    let pointer = [[54.50337577744105, 36.30289029629514], [54.52, 36.25]];

    let myMap = new ymaps.Map("map", {

      center: [54.50337577744105, 36.30289029629514],
      zoom: 13,


    });

    for (i = 0; i < pointer.length; ++i) {

      place = new ymaps.Placemark(pointer[i],{},{
        iconLayout: 'default#image',
        iconImageHref: "img/svg-origin/map-icon.svg",
        iconImageSize: [32, 32],
      }     
      );
      myMap.geoObjects.add(place);

    }

  };
});
