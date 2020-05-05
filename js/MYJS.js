/* window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50)
    {
        document.querySelector("nav").style.backgroundColor="white";
        this.document.querySelector(".navbar-light .navbar-nav .nav-link ").style.color="black  !important";

    }else{

    }
      

}; */

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
//JQuery
$(".home-setting").click(function () {
var boxColorWidth=$(".color-palet").outerWidth();//width+border+padding of color-palet
var boxLeft=$('.color-setting').css("left"); //settinig left of .color-setting 
//$('.color-palet').toggle();
 if(boxLeft=="0px"){
    $('.color-setting').animate({left:`-${boxColorWidth}`},1000);
}else{
    $('.color-setting').animate({left:"0px"},1000);
  
} 
});

$('.color-palet ul li').click(function(){
  var themecolor=$(this).css("backgroundColor");
  $(':root').css('--theme-color',themecolor);
})













