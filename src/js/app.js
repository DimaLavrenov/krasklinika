import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();

$(function () {
  var width = window.innerWidth;

  if(width <= 712){
    var serviceItem = $('.serive__item').remove();
    $('.services__option').append(serviceItem);
  }
})

//Menu for adaprive
$(function () {
  var $menu_popup = $(".menu__content");

  $(".menu_burger").click(function () {
    document.querySelector(".page").classList.add("active");
    $menu_popup.show(0);
    $menu_popup.animate(
      {
        right:
          parseInt($menu_popup.css("left"), 10) == 0
            ? -$menu_popup.outerWidth()
            : 0,
      },
      300
    );
    return false;
  });

  $(".social__burger").click(function () {
    document.querySelector(".page").classList.add("active");
    $menu_popup.show(0);
    $menu_popup.animate(
      {
        right:
          parseInt($menu_popup.css("left"), 10) == 0
            ? -$menu_popup.outerWidth()
            : 0,
      },
      300
    );
    return false;
  });

  $(".menu-close").click(function () {
    document.querySelector(".page").classList.remove("active");
    $menu_popup.animate(
      {
        right:
          parseInt($menu_popup.css("right"), 10) == 0
            ? -$menu_popup.outerWidth()
            : 0,
      },
      300,
      function () {
        $menu_popup.hide(0);
      }
    );
    return false;
  });

  $(".menu__button").click(function () {
    document.querySelector(".page").classList.remove("active");
    $menu_popup.animate(
      {
        right:
          parseInt($menu_popup.css("right"), 10) == 0
            ? -$menu_popup.outerWidth()
            : 0,
      },
      0,
      function () {
        $menu_popup.hide(0);
      }
    );
    return false;
  });

  $(document).on("click", function (e) {
    document.querySelector(".page").classList.remove("active");
    if (!$(e.target).closest(".menu__content").length) {
      $menu_popup.animate(
        {
          right:
            parseInt($menu_popup.css("right"), 10) == 0
              ? -$menu_popup.outerWidth()
              : 0,
        },
        300,
        function () {
          $menu_popup.hide(0);
        }
      );
    }
  });
});

//Slider for sertificates
const slides = document.querySelectorAll(".list__item");
const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".list__item.active");
  // Remove current class
  current.classList.remove("active");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("active");
  } else {
    // Add current to start
    slides[0].classList.add("active");
  }
  setTimeout(() => current.classList.remove("active"));
};
$(".nav__right.licenses").click(function () {
  nextSlide();
});

$(".description_button.ultrasound").mouseenter(function () {
  if (localStorage.getItem("question")) {
    document.querySelector(".question").addClass("active");
  }

  document.querySelector(".question").classList.add("active");
  $(".question__secondary").slideDown();
});

//Questions/documentation/prices
$(".question").click(function (e) {
  var elem = e.currentTarget;
  var questions = document.querySelectorAll(".question");
  // var parent = document.querySelector('.test_question');
  // var child = parent.querySelector('.test_menu');
  // console.log(child);
  let flag = false;

  if (elem.classList.contains("active")) {
    function question() {
      for (var i = 0; i < questions.length; i++) {
        questions[i].classList.remove("active");
      }
    }
    $(".question__secondary").slideUp();

    setTimeout(question, 400);
  } else {
    for (var i = 0; i < questions.length; i++) {
      questions[i].classList.remove("active");
    }

    elem.classList.add("active");
    $(".question__secondary").slideDown();
  }

  flag = !flag;
});

//Entry modal
$("[id=entry-trigger]").click(function () {
  document.querySelector(".entry__content").classList.add("active");
  document.querySelector(".page").classList.add("no-scroll");
});

$(document).click(function (e) {
  if ($(e.target).is(".active")) {
    document.querySelector(".entry__content").classList.remove("active");
    document.querySelector(".page").classList.remove("no-scroll");
  }
});

//Licenses
$(function () {
  $(".minimized").click(function (event) {
    var i_path = $(this).attr("src");
    $("body").append(
      '<div id="overlay"></div><div id="magnify"><img src="' +
        i_path +
        '"><div id="close-popup"><i></i></div></div>'
    );
    $("#magnify").css({
      left: ($(document).width() - $("#magnify").outerWidth()) / 2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
      top: ($(window).height() - $("#magnify").outerHeight()) / 2,
    });
    $("#overlay, #magnify").fadeIn("fast");
  });

  $("body").on("click", "#close-popup, #overlay", function (event) {
    event.preventDefault();
    $("#overlay, #magnify").fadeOut("fast", function () {
      $("#close-popup, #magnify, #overlay").remove();
    });
  });
});

//Slider for doctors
$(function () {
  var point = 0;

  var width = window.innerWidth;
  // by click on next
  $(".next_button_for_slider").click(function () {
    if (width >= 1700){
      if (point == 0) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 1) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 2) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 3) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 4) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 5) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 6) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 7) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 8) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 9) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 10) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 11) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 0;
      }
    }
    else if (width >= 1460){
      if (point == 0) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 1) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 2) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 3) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 4) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 5) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 6) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 7) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 8) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 9) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 10) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 11) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 0;
      }
    }
    else if (width >= 1260){
      if (point == 0) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 1) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 2) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 3) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 4) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 5) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 6) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 7) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 8) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 9) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 10) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 11) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 0;
      }
    }
    else if (width >= 1100){
      if (point == 0) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 1) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 2) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 3) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 4) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 5) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 6) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 7) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 8) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 9) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 10) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 11) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 0;
      }
    }
    else if (width >= 986){
      if (point == 0) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 1) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 2) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 3) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 4) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 5) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 6) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 7) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 8) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 9) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 10) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 11) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 0;
      }
    }
    else if (width >= 881){
      if (point == 0) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 1) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 2) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 3) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 4) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 5) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 6) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 7) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 8) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 9) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 10) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point++;
      } else if (point == 11) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 0;
      }
    }
    else if (width >= 320){
      if (point == 0) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 1) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 2) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 3) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 4) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 5) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 6) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 7) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 8) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 9) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 10) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point++;
      } else if (point == 11) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point = 0;
      }
    }
  });
  // by click on prev
  $(".prev_button_for_slider").click(function () {
    if (width >= 1700){
      if (point == 1) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 2) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 3) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 4) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 5) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 6) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 7) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 8) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 9) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 10) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 11) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 0) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 11;
      }
    }
    else if (width >= 1460){
      if (point == 1) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 2) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 3) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 4) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 5) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 6) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 7) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 8) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 9) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 10) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 11) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 0) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 11;
      }
    }
    else if (width >= 1260){
      if (point == 1) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 2) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 3) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 4) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 5) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 6) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 7) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 8) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 9) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 10) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 11) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 0) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 11;
      }
    }
    else if (width >= 1100){
      if (point == 1) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 2) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 3) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 4) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 5) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 6) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 7) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 8) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 9) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 10) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 11) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 0) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 11;
      }
    }
    else if (width >= 986){
      if (point == 1) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 2) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 3) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 4) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 5) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 6) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 7) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 8) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 9) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 10) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 11) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 0) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 11;
      }
    }
    else if (width >= 881){
      if (point == 1) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 2) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 3) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 4) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 5) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 6) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 7) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 8) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 9) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 10) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 11) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point--;
      } else if (point == 0) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        point = 11;
      }
    }
    else if (width >= 320){
      if (point == 1) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 2) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 3) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 4) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 5) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 6) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 7) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 8) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 9) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 10) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 11) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point--;
      } else if (point == 0) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        point = 11;
      }
    }
  });
  // by click on slide
  $(".slide").click(function () {
    if (width >= 1700){
      if (this.classList.contains("c1")) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 0;
      } else if (this.classList.contains("c2")) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 1;
      } else if (this.classList.contains("c3")) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 2;
      } else if (this.classList.contains("c4")) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 3;
      } else if (this.classList.contains("c5")) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 4;
      } else if (this.classList.contains("c6")) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 5;
      } else if (this.classList.contains("c7")) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 6;
      } else if (this.classList.contains("c8")) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 7;
      } else if (this.classList.contains("c9")) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 8;
      } else if (this.classList.contains("c10")) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 9;
      } else if (this.classList.contains("c11")) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 10;
      } else if (this.classList.contains("c12")) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(500px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 11;
      }
    }
    else if (width >= 1460){
      if (this.classList.contains("c1")) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 0;
      } else if (this.classList.contains("c2")) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 1;
      } else if (this.classList.contains("c3")) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 2;
      } else if (this.classList.contains("c4")) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 3;
      } else if (this.classList.contains("c5")) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 4;
      } else if (this.classList.contains("c6")) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 5;
      } else if (this.classList.contains("c7")) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 6;
      } else if (this.classList.contains("c8")) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 7;
      } else if (this.classList.contains("c9")) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 8;
      } else if (this.classList.contains("c10")) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 9;
      } else if (this.classList.contains("c11")) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 10;
      } else if (this.classList.contains("c12")) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(450px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 11;
      }
    }
    else if (width >= 1260){
      if (this.classList.contains("c1")) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 0;
      } else if (this.classList.contains("c2")) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 1;
      } else if (this.classList.contains("c3")) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 2;
      } else if (this.classList.contains("c4")) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 3;
      } else if (this.classList.contains("c5")) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 4;
      } else if (this.classList.contains("c6")) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 5;
      } else if (this.classList.contains("c7")) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 6;
      } else if (this.classList.contains("c8")) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 7;
      } else if (this.classList.contains("c9")) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 8;
      } else if (this.classList.contains("c10")) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 9;
      } else if (this.classList.contains("c11")) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 10;
      } else if (this.classList.contains("c12")) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(390px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 11;
      }
    }
    else if (width >= 1100){
      if (this.classList.contains("c1")) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 0;
      } else if (this.classList.contains("c2")) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 1;
      } else if (this.classList.contains("c3")) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 2;
      } else if (this.classList.contains("c4")) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 3;
      } else if (this.classList.contains("c5")) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 4;
      } else if (this.classList.contains("c6")) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 5;
      } else if (this.classList.contains("c7")) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 6;
      } else if (this.classList.contains("c8")) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 7;
      } else if (this.classList.contains("c9")) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 8;
      } else if (this.classList.contains("c10")) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 9;
      } else if (this.classList.contains("c11")) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 10;
      } else if (this.classList.contains("c12")) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(340px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 11;
      }
    }
    else if (width >= 986){
      if (this.classList.contains("c1")) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 0;
      } else if (this.classList.contains("c2")) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 1;
      } else if (this.classList.contains("c3")) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 2;
      } else if (this.classList.contains("c4")) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 3;
      } else if (this.classList.contains("c5")) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 4;
      } else if (this.classList.contains("c6")) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 5;
      } else if (this.classList.contains("c7")) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 6;
      } else if (this.classList.contains("c8")) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 7;
      } else if (this.classList.contains("c9")) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 8;
      } else if (this.classList.contains("c10")) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 9;
      } else if (this.classList.contains("c11")) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 10;
      } else if (this.classList.contains("c12")) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(300px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 11;
      }
    }
    else if (width >= 881){
      if (this.classList.contains("c1")) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 0;
      } else if (this.classList.contains("c2")) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 1;
      } else if (this.classList.contains("c3")) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 2;
      } else if (this.classList.contains("c4")) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 3;
      } else if (this.classList.contains("c5")) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 4;
      } else if (this.classList.contains("c6")) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 5;
      } else if (this.classList.contains("c7")) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 6;
      } else if (this.classList.contains("c8")) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 7;
      } else if (this.classList.contains("c9")) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 8;
      } else if (this.classList.contains("c10")) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 9;
      } else if (this.classList.contains("c11")) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 10;
      } else if (this.classList.contains("c12")) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "flex",
        });
  
        point = 11;
      }
    }
    else if (width >= 320){
      if (this.classList.contains("c1")) {
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
  
        $(".c12").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c1").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c2").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 0;
      } else if (this.classList.contains("c2")) {
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
  
        $(".c1").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c2").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c3").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 1;
      } else if (this.classList.contains("c3")) {
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
  
        $(".c2").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c3").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c4").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 2;
      } else if (this.classList.contains("c4")) {
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
  
        $(".c3").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c4").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c5").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 3;
      } else if (this.classList.contains("c5")) {
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
  
        $(".c4").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c5").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c6").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 4;
      } else if (this.classList.contains("c6")) {
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
  
        $(".c5").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c6").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c7").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 5;
      } else if (this.classList.contains("c7")) {
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
  
        $(".c6").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c7").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c8").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 6;
      } else if (this.classList.contains("c8")) {
        $(".c10").css({ "z-index": "9", "display": "none" });
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
  
        $(".c7").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c8").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c9").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 7;
      } else if (this.classList.contains("c9")) {
        $(".c11").css({ "z-index": "9", "display": "none" });
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
  
        $(".c8").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c9").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c10").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 8;
      } else if (this.classList.contains("c10")) {
        $(".c12").css({ "z-index": "9", "display": "none" });
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
  
        $(".c9").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c10").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c11").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 9;
      } else if (this.classList.contains("c11")) {
        $(".c1").css({ "z-index": "9", "display": "none" });
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
  
        $(".c10").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c11").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c12").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 10;
      } else if (this.classList.contains("c12")) {
        $(".c2").css({ "z-index": "9", "display": "none" });
        $(".c3").css({ "z-index": "9", "display": "none" });
        $(".c4").css({ "z-index": "9", "display": "none" });
        $(".c5").css({ "z-index": "9", "display": "none" });
        $(".c6").css({ "z-index": "9", "display": "none" });
        $(".c7").css({ "z-index": "9", "display": "none" });
        $(".c8").css({ "z-index": "9", "display": "none" });
        $(".c9").css({ "z-index": "9", "display": "none" });
        $(".c10").css({ "z-index": "9", "display": "none" });
  
        $(".c11").css({
          "transform": "translateX(-270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
        $(".c12").css({
          "transform": "translateX(0) scale(1.2)",
          "z-index": "99",
          "display": "flex",
        });
        $(".c1").css({
          "transform": "translateX(270px) scale(1)",
          "z-index": "10",
          "display": "none",
        });
  
        point = 11;
      }
    }
  });
});

// Mask for input
document.addEventListener('DOMContentLoaded', () => {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
      const pattern = el.getAttribute("placeholder"),
          slots = new Set(el.dataset.slots || "_"),
          prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
          first = [...pattern].findIndex(c => slots.has(c)),
          accept = new RegExp(el.dataset.accept || "\\d", "g"),
          clean = input => {
              input = input.match(accept) || [];
              return Array.from(pattern, c =>
                  input[0] === c || slots.has(c) ? input.shift() || c : c
              );
          },
          format = () => {
              const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                  i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                  return i<0? prev[prev.length-1]: back? prev[i-1] || first: i;
              });
              el.value = clean(el.value).join``;
              el.setSelectionRange(i, j);
              back = false;
          };
      let back = false;
      el.addEventListener("keydown", (e) => back = e.key === "Backspace");
      el.addEventListener("input", format);
      el.addEventListener("focus", format);
      el.addEventListener("blur", () => el.value === pattern && (el.value=""));
  }
});