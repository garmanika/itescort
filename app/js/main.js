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
        if (index + 1 >= 10) {
          return (
            '<span class="' +
            className +
            '"><span class="number">' +
            (index + 1) +
            "</span></span>"
          );
        } else {
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
        if (index + 1 >= 10) {
          return (
            '<span class="' +
            className +
            '"><span class="number">' +
            (index + 1) +
            "</span></span>"
          );
        } else {
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
  $.fancybox.defaults.backFocus = false;

  const swiper3 = new Swiper(".project-preview-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".project-preview-slider .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (index + 1 >= 10) {
          return (
            '<span class="' +
            className +
            '"><span class="number">' +
            (index + 1) +
            "</span></span>"
          );
        } else {
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
    navigation: {
      nextEl: ".project-preview-slider .swiper-button-next",
      prevEl: ".project-preview-slider .swiper-button-prev",
    },
  });
  const swiper4 = new Swiper(".project-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".project-slider .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (index + 1 >= 10) {
          return (
            '<span class="' +
            className +
            '"><span class="number">' +
            (index + 1) +
            "</span></span>"
          );
        } else {
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
    navigation: {
      nextEl: ".project-slider .swiper-button-next",
      prevEl: ".project-slider .swiper-button-prev",
    },
  });

  let phoneInputs = $(".add-phone-mask");
  phoneInputs.each(function (index, el) {
    $(this).inputmask({
      mask: "+7 (999) 999 99 99",
      onBeforePaste: function (pastedValue, opts) {
        let clearValue = pastedValue.replace(/\D/g, "");
        if (clearValue.indexOf("89") === 0) {
          return clearValue.replace("89", "+79");
        }
      },
      showMaskOnHover: false,
      clearIncomplete: true,
    });
  });

  phoneInputs.on("keyup", function (event) {
    let value = $(this).inputmask("unmaskedvalue");
    if (value.length === 2) {
      if (value.indexOf("89") === 0 || value.indexOf("79") === 0) {
        $(this).val("9");
      }
    }
  });

  function createContactsMap(containerId, data = {}) {
    ymaps.ready(function () {
      let map = new ymaps.Map(containerId, {
        center: data.mapCenter,
        zoom: data.mapZoom,
        controls: ["zoomControl"],
      });
      let geoCollection = new ymaps.GeoObjectCollection();
      for (let i = 0; i < data.mapPoints.length; i++) {
        geoCollection.add(
          new ymaps.Placemark(
            data.mapPoints[i],
            {},
            {
              iconLayout: "default#image",
              iconImageHref: "img/svg-origin/map-icon.svg",
              iconImageSize: [32, 32],
            }
          )
        );
      }
			
      map.geoObjects.add(geoCollection);
      map
        .setBounds(map.geoObjects.getBounds(), {
          zoomMargin: [0, 13],
          checkZoomRange: true,
        })
        .then(function () {
          if (map.getZoom() > 13) map.setZoom(13);
        });
    });
  }

  let detailMapData = {
    mapCenter: [54.50337577744105, 36.30289029629514],
    mapZoom: 13,
    mapPoints: [
      [54.50337577744105, 36.30289029629514],
      [54.52, 36.25],
    ],
  };
  createContactsMap("map", detailMapData);
});
