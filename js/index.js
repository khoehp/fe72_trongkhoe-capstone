// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });
// function search() {
//   var search = document.getElementById("icon-search");
//   search.classList.toggle("search");
//   console.log(search);
// }

// function dark() {
//   var test = document.querySelectorAll("h3");
//   //   test.classList.toggle("dark-mode");
//   console.log(test);
//   for (var i = 0; i < test.length; i++) {
//     test[i].classList.toggle("dark-mode");
//   }
//   var titleH4 = document.querySelectorAll("h4");
//   //   titleH4.classList.toggle("dark-mode");
//   console.log(titleH4);
//   for (var i = 0; i < titleH4.length; i++) {
//     titleH4[i].classList.toggle("dark-mode");
//   }
//   var bg1 = document.querySelectorAll(".bg-1");
//   console.log(bg1);
//   for (var i = 0; i < bg1.length; i++) {
//     bg1[i].classList.toggle("background1");
//   }
//   var bg2 = document.querySelectorAll(".bg-2");
//   console.log(bg2);
//   for (var i = 0; i < bg2.length; i++) {
//     bg2[i].classList.toggle("background2");
//   }
//   var way = document.querySelector(".way");
//   way.classList.toggle("background1");
//   console.log(way);
// }

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
function search() {
  var search = document.getElementById("icon-search");
  search.classList.toggle("search");
}

function dark() {
  var icon = document.getElementById("icon-theme");
  // Change icon moon - sun
  if (icon.className == "fa fa-moon") {
    icon.className = "fa fa-sun";
  } else {
    icon.className = "fa fa-moon";
  }

  // header dom
  var headerSite = document.querySelector(".header");
  headerSite.classList.toggle("d");

  var test = document.querySelectorAll("h3");
  //   test.classList.toggle("dark-mode");
  for (var i = 0; i < test.length; i++) {
    test[i].classList.toggle("dark-mode");
  }
  var titleH4 = document.querySelectorAll("h4");
  //   titleH4.classList.toggle("dark-mode");
  for (var i = 0; i < titleH4.length; i++) {
    titleH4[i].classList.toggle("dark-mode");
  }
  var bg1 = document.querySelectorAll(".bg-1");
  for (var i = 0; i < bg1.length; i++) {
    bg1[i].classList.toggle("background1");
  }
  var bg2 = document.querySelectorAll(".bg-2");
  for (var i = 0; i < bg2.length; i++) {
    bg2[i].classList.toggle("background2");
  }
  var way = document.querySelector(".way");
  way.classList.toggle("background1");
}

// Toggle icon show/hide sidebar
document.getElementById("toggle-right-sidebar").onclick = function () {
  $("#toggle-right-sidebar i").toggleClass(
    "fa-angle-double-left fa-angle-double-right"
  );
  // Show/hide sidebar on click
  $("#right-sidebar").toggleClass("hide-sidebar");
  $("#right-sidebar sidebar__content").toggleClass("animate__animated");
  $("#right-sidebar sidebar__content").toggleClass("animate__fadeInRight");
};

// Add class "search-active" when search btn clicked
document.getElementById("icon-search").onclick = function () {
  $("body").addClass("search-active");
};
// Remove class "search-active" when close btn clicked
document.getElementById("icon-close").onclick = function () {
  $("body").removeClass("search-active");
};

// Dark/light mode
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

// Toggle "display: none" for dark/light mode icon
document.getElementById("mode-switch").onclick = function () {
  $("#mode-switch i").toggleClass("d-none");
};

document.getElementById("btnTogglerIcon").onclick = function () {
  $("#btnTogglerIcon span").toggleClass("d-none");
  $("#site-header").toggleClass("active");
  $("body").toggleClass("noscroll");
};

// Slick carousel
$(".carousel__slider").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: false,
      },
    },
  ],
});

// Header on scroll
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("nav-fixed");
    } else {
      $(".header").removeClass("nav-fixed");
    }
  });
});

// Testimonial slider script using owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  });
});
