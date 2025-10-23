var ProductInfoModel = {   
    FacebookAppID: null
}


$(function () {
    $('.js-back-btn').click(function () {
        window.location = document.referrer;
    });

    $('.js-product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
		arrows: false,
        asNavFor: '.js-product-slider-nav'
    });

    $('.js-product-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: $('.js-product-slider .slick-slide').length > 4,
        asNavFor: '.js-product-slider',
        focusOnSelect: true
    });

    $('.js-product-count-minus-button,.js-product-count-plus-button').click(function () {
        var IsMinus = $(this).hasClass('js-product-count-minus-button');
        var ProductCount = parseFloat($('.js-product-count-textbox').val());
        if (IsMinus) {
            ProductCount = ProductCount - 1 > 0 ? ProductCount - 1 : 1;
        }
        else {
            ++ProductCount;
        }
        if (isNaN(ProductCount)) {
            ProductCount = 1;
        }
        $('.js-product-count-textbox').val(ProductCount);
    });

    var allowFloat = $('.js-product-count-textbox').attr('data-allow-float') == 'true';
    $('.js-product-count-textbox').numericInput({ allowFloat: allowFloat });
});