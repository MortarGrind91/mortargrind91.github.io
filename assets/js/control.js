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
     let $arrow_r = '<a id="rev_next" class="rev_nav"><svg viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451187 3.84171 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82843L1.70711 4.00001L4.53554 1.17158C4.7308 0.976317 4.7308 0.659734 4.53554 0.464472C4.34027 0.26921 4.02369 0.26921 3.82843 0.464472L0.646446 3.64645ZM71 3.5L1 3.50001L1 4.50001L71 4.5L71 3.5Z"/></svg></a>';
     
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

    let $arr_c_l = '<a id="c_prev" class="c_nav"><svg viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451187 3.84171 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82843L1.70711 4.00001L4.53554 1.17158C4.7308 0.976317 4.7308 0.659734 4.53554 0.464472C4.34027 0.26921 4.02369 0.26921 3.82843 0.464472L0.646446 3.64645ZM71 3.5L1 3.50001L1 4.50001L71 4.5L71 3.5Z"/></svg></a>';
    let $arr_c_r = '<a id="c_next" class="c_nav"><svg viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451187 3.84171 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82843L1.70711 4.00001L4.53554 1.17158C4.7308 0.976317 4.7308 0.659734 4.53554 0.464472C4.34027 0.26921 4.02369 0.26921 3.82843 0.464472L0.646446 3.64645ZM71 3.5L1 3.50001L1 4.50001L71 4.5L71 3.5Z"/></svg></a>';

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
});