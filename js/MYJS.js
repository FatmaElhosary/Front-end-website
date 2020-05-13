/* window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50)
    {
        document.querySelector("nav").style.backgroundColor="white";
        this.document.querySelector(".navbar-light .navbar-nav .nav-link ").style.color="black  !important";

    }else{

    }
      

}; */

/* $(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
}); */
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
 
});
/////////
//JQuery
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
