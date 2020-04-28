/* window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50)
    {
        document.querySelector("nav").style.backgroundColor="white";
        this.document.querySelector(".navbar-light .navbar-nav .nav-link ").style.color="black  !important";

    }else{

    }
      

}; */

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }else{
        $('nav').removeClass('black');
    }
})