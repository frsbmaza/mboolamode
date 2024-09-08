$(document).ready(function(){
    $(".hamburger").on('click', function () {
        $('.mobileMenu').addClass('active');
        $(".menuOVF").addClass("active");
    });
    $(".CloseMenuBtn").click(function() {
        $(".mobileMenu").removeClass("active");
        $(".menuOVF").removeClass("active");
     });
    $(".menuOVF").click(function() {
        $(".mobileMenu").removeClass("active");
        $(".menuOVF").removeClass("active");
     });
    $('.it1').click(function() {
        $('.mmus1').addClass('active');
    });
        $('.it11').click(function() {
            $('.mmus11').addClass('active');
        });
        $('.itemBackButton2').click(function() {
            $('.mmus11').removeClass('active');
        });
    $('.it2').click(function() {
        $('.mmus2').addClass('active');
    });


    $('.itemBackButton').click(function() {
        $('.mainMenuUlSub').removeClass('active');
    });

    $('.lmIcon').click(function() {
        $('.desktopMobileMenu').addClass('active');
        $('.menuOVF').addClass('active');
    });


    $('.lmIcon').click(function() {
        $('.leftMegaMenu').addClass('active');
        $('.lmOvf').addClass('active');
    });
    $('.lmClose').click(function() {
        $('.leftMegaMenu').removeClass('active');
        $('.lmOvf').removeClass('active');
    });
    $('.lmOvf').click(function() {
        $('.leftMegaMenu').removeClass('active');
        $('.lmOvf').removeClass('active');
    });
    $('.lmLiA1').click(function() {
        $('.lmLiA1').toggleClass('rotate');
        $('.lmLiUl1').toggleClass('active');
    });
        $('.lmLiA11').click(function() {
            $('.lmLiA11').toggleClass('rotate');
            $('.ssUl1').toggleClass('active');
        });
    $('.lmLiA2').click(function() {
        $('.lmLiA2').toggleClass('rotate');
        $('.lmLiUl2').toggleClass('active');
    });
        $('.lmLiA22').click(function() {
            $('.lmLiA22').toggleClass('rotate');
            $('.ssUl2').toggleClass('active');
        });

    


    $('.itemTigger2').click(function() {
        $('.mfus2').addClass('active');
    });
    $('.itemTigger3').click(function() {
        $('.mfus3').addClass('active');
    });
    





    $('.closeMenuItem').click(function() {
        $('.mobile-sidebar').removeClass('show');
    });
    $('.myCustomSelect').click(function() {
        $('.mcs-inner').toggleClass('active');
        $('.myCustomSelect .title span ').toggleClass('rotate');
    });
    
    
     // WINDOW SCROLL START

        $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 10) {
            $(".videoWrapper").addClass("fullWidth")
        } else {
            $(".videoWrapper").removeClass("fullWidth")
        }
        });

    // WINDOW SCROLL END
  $('.youMaySlider').owlCarousel({
        items:4,
        loop:true,
        mouseDrag:false,
        margin:10,
        dots:false,
        responsive : {
            0 : {
                items:2
            },
            768 : {
                items:4
            }
        }
        
    });
    var owl = $('.youMaySlider');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtnc').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtnc').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });



});
$(document).ready(function(){
    $('.main_slider2').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    const slides = document.querySelectorAll('.slide');
    let active = document.querySelector('.slide.active');

    slides.forEach((slide) => {
      slide.onclick = () => {
        active.classList.remove('active');
        active = slide;
        slide.classList.add('active');
      }
    })
});
$(document).ready(function(){
    

    

    
    $('.lanncerr1').click(function() {
        $('.lcUl1').toggleClass('active');
    });
    $('.lanncerr1').click(function() {
        $('.lanncerr1 a span').toggleClass('rotate');
    });
    $('.lanncerr2').click(function() {
        $('.lcUl2').toggleClass('active');
    });
    $('.lanncerr2').click(function() {
        $('.lanncerr2 a span').toggleClass('rotate');
    });

    $('.colSizeTigger1 .title').click(function() {
        $('.colSizeContent1').toggleClass('active');
    });
    $('.colSizeTigger2 .title').click(function() {
        $('.colSizeContent2').addClass('active');
    });
    $('.colSizColose').click(function() {
        $('.colSizeContent2').removeClass('active');
    });
    $('.colSizColose-size-guide-btn').click(function() {
        $('.colSizeContent2').removeClass('active');
    });





    $(".shipping-method-box-holder .shipping-method-box").click(function(){
       $(this).addClass("active");
       $(this).siblings().removeClass("active");
    });
    $(".sizeChoose a").click(function(){
       $(this).addClass("active");
       $(this).siblings().removeClass("active");
    });
    $(".colors-inner .color-single-item").click(function(){
       $(this).addClass("active");
       $(this).siblings().removeClass("active");
    });
    $(".sizes-inner a").click(function(){
       $(this).addClass("active");
       $(this).siblings().removeClass("active");
    });
	$('.open_nav').click(function() {
        $('.overlay').addClass('overlay-open');
        $('.close_nav').addClass('open');
        $('.open_nav').addClass('hide');
        $('.header_logo').addClass('hide');
    });
    $('.close_nav').click(function() {
        $('.overlay').removeClass('overlay-open');
        $('.close_nav').removeClass('open');
        $('.open_nav').removeClass('hide');
        $('.header_logo').removeClass('hide');
    });

    // shop page 1 style
    $('.productMenu4').click(function() {
        $('.products-wrapper.four').addClass('active');
        $('.products-wrapper.three').removeClass('active');
        $('.products-wrapper.two').removeClass('active');
        $('.products-wrapper.one').removeClass('active');
        
    });
    $('.productMenu3').click(function() {
        $('.products-wrapper.four').removeClass('active');
        $('.products-wrapper.three').addClass('active');
        $('.products-wrapper.two').removeClass('active');
        $('.products-wrapper.one').removeClass('active');
        $('.productMenu2').removeClass('active');
        $('.productMenu3').addClass('active');

        
    });
    $('.productMenu2').click(function() {
        $('.products-wrapper.four').removeClass('active');
        $('.products-wrapper.three').removeClass('active');
        $('.products-wrapper.two').addClass('active');
        $('.products-wrapper.one').removeClass('active');
        $('.productMenu2').addClass('active');
        $('.productMenu3').removeClass('active');
        
    });
    $('.productMenu1').click(function() {
        $('.products-wrapper.four').removeClass('active');
        $('.products-wrapper.three').removeClass('active');
        $('.products-wrapper.two').removeClass('active');
        $('.products-wrapper.one').addClass('active');
        
    });

    $('.filterBtn').click(function() {
        $('.rowFilter').toggleClass('active');
    });

    $('.main-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:10000,
        autoplayHoverPause:true
        
    });


    // MOBILE NAV
    var $menuTrigger = $(".js-menuToggle");
var $topNav = $(".js-topPushNav");
var $openLevel = $(".js-openLevel");
var $closeLevel = $(".js-closeLevel");
var $closeLevelTop = $(".js-closeLevelTop");
var $navLevel = $(".js-pushNavLevel");

function openPushNav() {
  $topNav.addClass("isOpen");
  $("body").addClass("pushNavIsOpen");
}

function closePushNav() {
  $topNav.removeClass("isOpen");
  $openLevel.siblings().removeClass("isOpen");
  $("body").removeClass("pushNavIsOpen");
}

$menuTrigger.on("click touchstart", function (e) {
  e.preventDefault();
  if ($topNav.hasClass("isOpen")) {
    closePushNav();
  } else {
    openPushNav();
  }
});

$openLevel.on("click touchstart", function () {
  $(this).next($navLevel).addClass("isOpen");
});

$closeLevel.on("click touchstart", function () {
  $(this).closest($navLevel).removeClass("isOpen");
});

$closeLevelTop.on("click touchstart", function () {
  closePushNav();
});

$(".screen").click(function () {
  closePushNav();
});

});

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


$(document).ready(function(){

  $('.product-img-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:true,

        
    });

    var owl = $('.product-img-slider');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn1').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn1').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider2').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:true,
        
    });
    var owl = $('.product-img-slider2');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn2').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn2').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider3').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:true,
        
    });
    var owl = $('.product-img-slider3');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn3').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn3').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider4').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:true,
        
    });
    var owl = $('.product-img-slider4');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn4').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn4').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider5').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:true,
        
    });
    var owl = $('.product-img-slider5');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn5').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn5').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider6').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:false,
        
    });
    var owl = $('.product-img-slider6');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn6').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn6').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider7').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:false,
        
    });
    var owl = $('.product-img-slider7');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn7').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn7').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider8').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:false,
        
    });
    var owl = $('.product-img-slider8');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn8').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn8').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider9').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:false,
        
    });
    var owl = $('.product-img-slider9');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn9').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn9').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider10').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:false,
        
    });
    var owl = $('.product-img-slider10');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn10').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn10').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider11').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:false,
        
    });
    var owl = $('.product-img-slider11');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn11').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn11').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});
$(document).ready(function(){

  $('.product-img-slider12').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:false,
        
    });
    var owl = $('.product-img-slider12');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtn12').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtn12').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});



// home page collection slider
$(document).ready(function(){

  $('.cSlider').owlCarousel({
        items:3,
        loop:true,
        margin:10,
        dots:false,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2
            },
            // breakpoint from 480 up
            480 : {
                items:2
            },
            // breakpoint from 768 up
            768 : {
                items:3
            }
        }
        
    });
    var owl = $('.cSlider');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtnc').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtnc').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});




$(document).ready(function(){

  $('.productMainSlider').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        dots:false,
        
    });

    var owl = $('.productMainSlider');
    owl.owlCarousel();
    // Go to the next item
    $('.nbtnc').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.pbtnc').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});


$(document).ready(function(){       
   $('#myModal').modal('show');
}); 


$(document).ready(function(){       
   $('.apply-promo-title').click(function() {
        $('.inputPromo').toggleClass('show');
    });


}); 



function myFunction() {
  var x = document.getElementById("billing-addresse");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


$(document).ready(function(){


    // CUSTOM SELECT START
    $('select').each(function(){
    var $this = $(this), selectOptions = $(this).children('option').length;

    $this.addClass('hide-select'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="custom-select"></div>');

    var $customSelect = $this.next('div.custom-select');
    $customSelect.text($this.children('option').eq(0).text());

    var $optionlist = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($customSelect);

    for (var i = 0; i < selectOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($optionlist);
    }

    var $optionlistItems = $optionlist.children('li');

    $customSelect.click(function(e) {
        e.stopPropagation();
        $('div.custom-select.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').slideToggle();
    });

    $optionlistItems.click(function(e) {
        e.stopPropagation();
        $customSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $optionlist.hide();
    });

    $(document).click(function() {
        $customSelect.removeClass('active');
        $optionlist.hide();
    });

    });
    // CUSTOM SELECT END


    // WINDOW SCROLL START

        $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 10) {
            $(".header").addClass("header-bg")
        } else {
            $(".header").removeClass("header-bg")
        }
        });

    // WINDOW SCROLL END


    $(".mobileFilterBtn").click(function() {
        $(".mobileFilter").addClass("active");
        $(".filterOVF").addClass("active");
     });
    $(".CloseFilterBtn").click(function() {
        $(".mobileFilter").removeClass("active");
        $(".filterOVF").removeClass("active");
     });
    $(".filterOVF").click(function() {
        $(".mobileFilter").removeClass("active");
        $(".filterOVF").removeClass("active");
     });


    $('.itemTigger1').click(function() {
        $('.mfus1').addClass('active');
    });
    $('.itemTigger2').click(function() {
        $('.mfus2').addClass('active');
    });
    $('.itemTigger3').click(function() {
        $('.mfus3').addClass('active');
    });
    $('.ItemBackButton').click(function() {
        $('.mainFilterUlSub').removeClass('active');
    });

    



});



let menuIcon = document.querySelector(".menu-icon");
let lines = Array.from(menuIcon.children);

function toggleMenu(e) {
    lines.forEach(line => {
        menuIcon.classList.toggle("active");
        line.classList.toggle("active");
        line.classList.toggle("no-animation");
    });
}

menuIcon.addEventListener("click", toggleMenu);





