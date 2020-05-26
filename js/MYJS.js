//loading screen
$(document).ready(function () {
  $("#loading").fadeOut(2000,function(){
    $('body').css("overflow","auto");
  });
 
});

var aboutoffset = $("#about").offset().top;
var navHeight = $("nav").outerHeight(true);
$(window).scroll(function () {
  if ($(window).scrollTop() > navHeight) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
  if ($(window).scrollTop() > aboutoffset) {
    $(".mybtn").fadeIn(1000);
  } else {
    $(".mybtn").fadeOut(1000);
  }
});
//goto top with smooth
$(".mybtn").click(function () {
  $("html , body").animate({ scrollTop: 0 }, 2000);
});
////////////////
//navlink goto section with smooth
$(".nav-link").click(function () {
  //get section id
  let sectionID = $(this).attr("href");
  let sectionPlace = $(sectionID).offset().top;
  $("html , body").animate({ scrollTop: sectionPlace - navHeight }, 1000);
  $(this).parent().addClass("active"); //color nav link text when click it
  $(".nav-item").not($(this).parent()).removeClass("active");
});
/////////
//JQuery Theme color
var boxColorWidth = $(".color-palet").outerWidth(); //width+border+padding of color-palet
$(".color-setting").animate({ left: `-${boxColorWidth}` }, 1000);
$(".home-setting").click(function () {
  //var boxColorWidth = $(".color-palet").outerWidth(); //width+border+padding of color-palet
  var boxLeft = $(".color-setting").css("left"); //settinig left of .color-setting
  //$('.color-palet').toggle();
  if (boxLeft == "0px") {
    $(".color-setting").animate({ left: `-${boxColorWidth}` }, 1000);
  } else {
    $(".color-setting").animate({ left: "0px" }, 1000);
  }
});

$(".color-palet ul li").click(function () {
  var themecolor = $(this).css("backgroundColor");
  $(":root").css("--theme-color", themecolor);
});
