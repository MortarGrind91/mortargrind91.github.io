$(function () {
    /*reviews slider*/

    $(".reviews-slider__box").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".reviews-nav__box",
        fade: true,
        arrows: true,
        prevArrow: '<a id="prev" class="review-prew review-arr"><svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.834778 12.7623C0.248989 12.1765 0.248989 11.2268 0.834778 10.641L10.3807 1.09506C10.9665 0.509272 11.9163 0.509272 12.502 1.09506C13.0878 1.68085 13.0878 2.63059 12.502 3.21638L4.01676 11.7017L12.502 20.1869C13.0878 20.7727 13.0878 21.7225 12.502 22.3083C11.9163 22.894 10.9665 22.894 10.3807 22.3083L0.834778 12.7623ZM32.2802 13.2017H1.89544V10.2017H32.2802V13.2017Z"/></svg></a>',
        nextArrow: '<a id="next" class="review-next review-arr"><svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3408 12.7623C32.9265 12.1765 32.9265 11.2268 32.3408 10.641L22.7948 1.09506C22.209 0.509272 21.2593 0.509272 20.6735 1.09506C20.0877 1.68085 20.0877 2.63059 20.6735 3.21638L29.1588 11.7017L20.6735 20.1869C20.0877 20.7727 20.0877 21.7225 20.6735 22.3083C21.2593 22.894 22.209 22.894 22.7948 22.3083L32.3408 12.7623ZM0.895386 13.2017H31.2801V10.2017H0.895386V13.2017Z"/></svg></a>'
    });

    $(".reviews-nav__box").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".reviews-slider__box",
        focusOnSelect: true,
        arrows: false
    });

    /*end reviews slider*/

    /*add red start & validate input*/
    let $find_input = $(".placeinput input");

    $find_input.on("focus", function () {
        let placeHolder = $(this).parent(".placeinput").find(".place_holder");
        placeHolder.addClass("deletePlaceholder");
    });

    $find_input.on("blur", function () {
        let input_val = $(this).val();
        let placeHolder = $(this).parent(".placeinput").find(".place_holder");
        if (input_val.length == "") {
            placeHolder.removeClass("deletePlaceholder");
        }
    });

    /*end add red start & validate input*/

    /*show more btn*/
    let btn_read_more = $(".r-more");
    let content = $(".r-content");

    btn_read_more.on("click", function (e) {
        e.preventDefault();
        let find_cotent = $(this).parent().siblings(content);
        find_cotent.toggleClass("show-content");

        if (find_cotent.hasClass("show-content")) {
            let reducedHeight = find_cotent.height();
            find_cotent.css('height', 'auto');
            let fullHeight = find_cotent.height();
            find_cotent.height(reducedHeight);
            find_cotent.animate({
                height: fullHeight
            }, 500);
            $(this).text("Свернуть");
        } else {
            find_cotent.animate({
                height: "12.5vmax"
            }, 500);
            $(this).text("Читать еще");
        }
    });

    $(".review-arr, .reviews-slider__control").on("click", function () {
        let find_block = $(".review-content");
        let btn = $(".show-more_reviews");
        if (find_block.hasClass("show-content")) {
            btn.text("Читать еще");
            find_block.removeClass("show-content");
            find_block.animate({
                height: "12.5vmax"
            }, 500);
        }

    });

    /*end show more btn*/

    // content.each(function () {
    //     console.log($(this).height());
    //     if ($(this).height() > 240) {
    //         $(this).parent().find(btn_read_more).show();
    //     } else {
    //         $(this).parent().find(btn_read_more).hide();
    //     }
    // });

    /*ajax send form*/
    $('form').submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        console.log(formID);
        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: formNm.serialize(),
            success: function (data) {
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
        return false;
    });

    /*end ajax send form*/

});