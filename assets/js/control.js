$(function(){

    /*adding opacity 1-st screen title*/
    function add_opacity() {
        $(".banner-art__inner").addClass("op_2");
    }
    setTimeout(add_opacity, 2500);
    /*end*/ 

    /*lazy load image*/ 
    lozad(".lozad", { load: function (el) { el.src = el.dataset.src; el.onload = function () { el.classList.add("image-loaded") } } }).observe();
    /*end lazy load image*/ 

    /*Tabs portfolio*/
    $(".js-tab-trigger").click(function() {
        var id = $(this).attr("data-tab"),
            content = $('.js-tab-content[data-tab="'+ id +'"]');
        
        $(".js-tab-trigger.active").removeClass("active");
        $(this).addClass("active"); 
        
        $(".js-tab-content.active").removeClass("active"); 
        content.addClass("active");
     });
    /*end tabs portfolio*/
    
    /*reviews slider*/
     let $arrow_l = '<a id="rev_prev" class="rev_nav"><svg viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451187 3.84171 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82843L1.70711 4.00001L4.53554 1.17158C4.7308 0.976317 4.7308 0.659734 4.53554 0.464472C4.34027 0.26921 4.02369 0.26921 3.82843 0.464472L0.646446 3.64645ZM71 3.5L1 3.50001L1 4.50001L71 4.5L71 3.5Z"/></svg></a>';
     let $arrow_r = '<a id="rev_next" class="rev_nav"><svg width="71" height="8" viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5L70 4.5V3.5L0 3.5L0 4.5Z"/></svg></a>';
     
     $(".reviews-slider__box").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $arrow_l,
        nextArrow:  $arrow_r,
        asNavFor: '.reviews-nav',
        fade: true,
        touchThreshold: 100,
        speed: 500,
        // verticalSwiping:true,
        // vertical: true,
     });

     $(".reviews-nav").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.reviews-slider__box',
        focusOnSelect: true,
        vertical: true,
        arrows:false,
        verticalSwiping:true,
        speed: 500,
     });

     
    /*end review slider*/

    /*tablet clients slider*/

    let $arr_c_l = '<a id="c_prev" class="c_nav"><svg width="49" height="8" viewBox="0 0 49 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.8016 4.35355C48.9968 4.15829 48.9968 3.84171 48.8016 3.64645L45.6196 0.464466C45.4243 0.269204 45.1077 0.269204 44.9125 0.464466C44.7172 0.659728 44.7172 0.976311 44.9125 1.17157L47.7409 4L44.9125 6.82843C44.7172 7.02369 44.7172 7.34027 44.9125 7.53553C45.1077 7.7308 45.4243 7.7308 45.6196 7.53553L48.8016 4.35355ZM0.996094 4.5H48.448V3.5H0.996094V4.5Z"/></svg>    </a>';
    let $arr_c_r = '<a id="c_next" class="c_nav"><svg width="49" height="8" viewBox="0 0 49 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.628132 3.64653C0.436982 3.84175 0.443649 4.15826 0.643024 4.35348L3.89202 7.53475C4.09139 7.72997 4.40797 7.72997 4.59912 7.53475C4.79027 7.33953 4.78361 7.02302 4.58423 6.8278L1.69624 4L4.4651 1.1722C4.65625 0.976985 4.64958 0.660473 4.45021 0.465254C4.25083 0.270035 3.93425 0.270035 3.7431 0.465254L0.628132 3.64653ZM48.4621 3.50011L0.978602 3.50012L0.999662 4.49989L48.4832 4.49989L48.4621 3.50011Z"/></svg></a>';

    if(innerWidth < 800){
        $(".home-clients__slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 2,
            arrows: true,
            prevArrow: $arr_c_l,
            nextArrow:  $arr_c_r,
        });
    }

     
    /*end tabler clients slider*/ 

    /*slider tab title*/

    if(innerWidth < 600){
        $(".tab-header__slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
        });
    }
    /*end slider tab title*/  

    /*burger menu*/
    $(".burger_box").on("click", function(){
        $(this).toggleClass("open-menu");
        $(".page-main__menu").toggleClass("open");

        if(innerWidth < 600){
            $(".header_main__box").toggleClass("del-index");
        }
        
    });
    /*end burger menu*/  
});