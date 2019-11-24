/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);
//# sourceMappingURL=jquery.viewportchecker.min.js.map

/*-----------------------------------------------------Медиазапрос на Javascript--------------------------------------------------------*/
function media(mediaQueryString, action){
    'use strict';
    var handleMatchMedia = function (mediaQuery) {
        if (mediaQuery.matches) { //Попадает в запроc
                action();
        }
    };
    var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);

}
/* Usage:
     media('all and (max-width: 550px)', function(){
     $('.mobile-search-result__item a').addClass('clearfix');
  });
*/

/*-----------------------------------------------------range--------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    var range = document.getElementById('range');

    noUiSlider.create(range, {
        tooltips: true,
        connect: [true, false],
        range: {
            'min': 1,
            'max': 10
        },
        start: [1],
        step: 1,
        pips: {
            mode: 'count',
            values: 10
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });

    var pips = range.querySelectorAll('.noUi-value');

    function clickOnPip() {
        var value = Number(this.getAttribute('data-value'));
        var roundValue = Math.round(value);
        range.noUiSlider.set(roundValue);
    }

    for (var i = 0; i < pips.length; i++) {

        // For this example. Do this in CSS!
        pips[i].style.cursor = 'pointer';
        pips[i].addEventListener('click', clickOnPip);
    }

    var driver =document.getElementById('driver');

    var valuesRange = [
        2.45,
        2.3,
        1.55,
        1.4,
        1.0,
        0.95,
        0.9,
        0.85,
        0.8,
        0.75,
        0.7,
        0.65,
        0.6,
        0.55,
        0.5
    ];

    noUiSlider.create(driver, {
        tooltips: true,
        start: [0],
        step: 1,
        connect: [true, false],
        pips: {
            mode: 'steps',
            filter: () => 1,
            density: 5,
            format: {
                to: (val) => {
                    return valuesRange[val];
                }
            }
        },
        range: {
            'min': 0,
            'max': 14
        }
    });

    var snapValues = [
        document.querySelector('#driver .noUi-tooltip')
    ];

    driver.noUiSlider.on('update', function(values, handle) {
        snapValues[handle].innerHTML = valuesRange[+values[handle]];
    });

    var stag1 = 0;
    var kbm1 = 0;
    var kbm_u1 = 0;
    var skidka1 = 0;
    var stoimost1 = 0;
    var summa1 = 0;

    range.noUiSlider.on('change', function (values, handle) {
        stag1 = values[0];
        console.log(handle);
    });
    driver.noUiSlider.on('change', function (values, handle) {
        kbm1 = valuesRange[+values[handle]];
        kbm_u1 = 1 - stag1 * 0.05;
        kbm_u1 = +kbm_u1.toFixed(2);
        console.log(kbm_u1);
        if (kbm1 > kbm_u1) {
            if (kbm_u1 < 1) {
                skidka1 = (1 - kbm_u1) * 100;
                skidka1 = +skidka1.toFixed(2);
            } else {
                skidka1 = Math.ceil((1 + kbm_u1) * 100);
                skidka1 = +skidka1.toFixed(2);
            }
            $('.calc-result .skidka').html(parseInt(skidka1));
            stoimost1 = 8200 - (8200 * (skidka1 / 100));
            summa1 = 8200 - stoimost1;
            $('.calc-result .stoimost').html(stoimost1);
            $('.calc-result .summa').html(summa1);
            $('.calc-result').hide();
            $('.result1').slideDown();
            return false;
        }
        if (kbm1 < kbm_u1) {
            $('.calc-result').hide();
            $('.result2').slideDown();
            return false;
        }
        if (kbm1 = kbm_u1) {
            $('.calc-result').hide();
            $('.result3').slideDown();
            return false;
        }
    });

});

$(document).ready(function() {

    /*-----------------------------------------------------фиксация меню--------------------------------------------------------*/
    $(document).on("scroll", function () {

        var documentScroll = $(this).scrollTop(), //сколько проскроллили в пикселях
            headerHeight = $('.header-top').height(), //высота хедера
            navHeight = $('.header-top').innerHeight(); //высота блока меню с границей, паддингами и тд.
        // console.log($('.header'));

        if (documentScroll > headerHeight) {
            $('.header-top').addClass('fixed');
            $('.header').css('padding-top', navHeight); //добавляем паддинг у хедера, чтобы блок под меню не прыгал
        } else {
            $('.header-top').removeClass('fixed');
            $('.header').removeAttr('style');
        }

    });

    /*-----------------------------------------------------активный пункт меню--------------------------------------------------------*/
    $('.header-menu__link').on('click', function(e) {
        $('.header-menu__link').removeClass('active');
        $(this).addClass('active');
    });

    /*-----------------------------------------------------мобильное меню--------------------------------------------------------*/
    $('.btn1').on('click', function(e) {
        e.preventDefault();
        $('.menu-btn-block--js').slideDown();
    });

    $('.header-top-btn1').on('click', function(e) {
        e.preventDefault();
        $('.menu-btn-block--js2').slideDown();
    });

    $('.menu-btn__cross').on('click', function () {
        $('.menu-btn-block--js, .menu-btn-block--js2').slideUp();
    });

    //клик вне окна для закрытия
    jQuery(function(){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".menu-btn-block--js, .menu-btn-block--js2"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.menu-btn-block--js, .menu-btn-block--js2').slideUp();
            }
        });
    });

    $('.btn2').on('click', function(e) {
        e.preventDefault();
        $('.menu-btn-block2').slideDown();
    });

    $('.menu-btn__cross2').on('click', function () {
        $('.menu-btn-block2').slideUp();
    });

    //клик вне окна для закрытия
    jQuery(function(){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".menu-btn-block2"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.menu-btn-block2').slideUp();
            }
        });
    });

    /*-----------------------------------------------------скролл ссылок--------------------------------------------------------*/
    $('.header-menu__link').on("click", function () {

        var currentBlock = $(this).attr('href'); //путь до блока
        var currentBlockOffset = $(currentBlock).offset().top; //расстояние до нужного блока


            $('html, body').animate({
                scrollTop: currentBlockOffset - 50 //с небольшим отступом
            }, 1000);

    });

    $('.form-result__btn, .header-menu__link, .check-kbm__btn, .check-btn, .calc-result-btn, .calc__link, .eosago__btn').on("click", function (e) {

        e.preventDefault();

        var currentBlock = $(this).attr('href'); //путь до блока
        var currentBlockOffset = $(currentBlock).offset().top; //расстояние до нужного блока

        if($(this).hasClass('calc-result-btn') || $(this).hasClass('calc__link')  || $(this).hasClass('form-result-btn--js')) {
            $('#form-order').slideDown();
            $('.form__policy2').show();
            currentBlockOffset = $('#form-order').offset().top;
            $('.form').css('min-height', '1400px');
        }

        $('html, body').animate({
            scrollTop: currentBlockOffset - 50 //с небольшим отступом
        }, 1000);

    });

    /*-----------------------------------------------------Подсказки фио--------------------------------------------------------*/
    // Замените на свой API-ключ
    var token = "35dbc2e812e958872ba59b4ba2fdd95fe2d6cfd4";

// Инициализирует подсказки по ФИО на указанном элементе
    function init($surname, $name, $patronymic) {
        var self = {};
        self.$surname = $surname;
        self.$name = $name;
        self.$patronymic = $patronymic;
        var fioParts = ["SURNAME", "NAME", "PATRONYMIC"];
        $.each([$surname, $name, $patronymic], function(index, $el) {
            var sgt = $el.suggestions({
                token: token,
                type: "NAME",
                triggerSelectOnSpace: false,
                hint: "",
                noCache: true,
                params: {
                    // каждому полю --- соответствующая подсказка
                    parts: [fioParts[index]]
                },
                onSearchStart: function(params) {
                    // если пол известен на основании других полей,
                    // используем его
                    var $el = $(this);
                    params.gender = isGenderKnown.call(self, $el) ? self.gender : "UNKNOWN";
                },
                onSelect: function(suggestion) {
                    // определяем пол по выбранной подсказке
                    self.gender = suggestion.data.gender;
                }
            });
        });
    }

// Проверяет, известен ли пол на данный момент
    function isGenderKnown($el) {
        var self = this;
        var surname = self.$surname.val(),
            name = self.$name.val(),
            patronymic = self.$patronymic.val();
        if (($el.attr('id') == self.$surname.attr('id') && !name && !patronymic) ||
            ($el.attr('id') == self.$name.attr('id') && !surname && !patronymic) ||
            ($el.attr('id') == self.$patronymic.attr('id') && !surname && !name)) {
            return false;
        } else {
            return true;
        }
    }

    init($("#surname"), $("#name"), $("#patron"));


    /*-----------------------------------------------------datepicker--------------------------------------------------------*/
    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
    $( "#datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true
    });

    /*-----------------------------------------------------ссылки в форме--------------------------------------------------------*/
    $('.form-order-item__link').on('click', function(e) {

        e.preventDefault();

        if($(this).hasClass('link-license')) {
            if($(this).hasClass('link-license--yes')) {
                $('.link-license').removeClass('active');
                $(this).addClass('active');
                $('.item-license').slideDown();
                $('.form').css('min-height', '1450px');
            } else {
                $('.link-license').removeClass('active');
                $(this).addClass('active');
                $('.item-license').slideUp();
                $('.form').css('min-height', '1400px');
            }
        }

        if($(this).hasClass('link-surname')) {
            if($(this).hasClass('link-surname--yes')) {
                $('.link-surname').removeClass('active');
                $(this).addClass('active');
                $('.form-order-item--surname').slideDown();
                $('.form').css('min-height', '1450px');
            } else {
                $('.link-surname').removeClass('active');
                $(this).addClass('active');
                $('.form-order-item--surname').slideUp();
                $('.form').css('min-height', '1400px');
            }
        }

        if($(".link-license--yes").hasClass('active') || $(".link-surname--yes").hasClass('active')) {
            $('.form').css('min-height', '1450px');
        }
        if($(".link-license--yes").hasClass('active') && $(".link-surname--yes").hasClass('active')) {
            $('.form').css('min-height', '1550px');
        }

    });

    $('.form-check__btn-reset').on('click', function () {
        $('.form-check input').attr('readonly', false);
    });

    /*-----------------------------------------------------анимация заголовков--------------------------------------------------------*/
    // $('.work-block-item__title, .work-block-item__text').addClass('hidden').viewportChecker({
    //     classToAdd: 'visible animated slideInDown',
    //     offset: 100
    // });

    /*-----------------------------------------------------faq form--------------------------------------------------------*/
    media('all and (min-width: 590px)', function() {
        $('.form-faq__quest').on('click', function (e) {

            e.preventDefault();
            var currentBlock = $(this).attr('href');

            $('.form-faq__quest').removeClass('active');
            $(this).addClass('active');
            $('.form-faq-answers__item').removeAttr('style');
            $(currentBlock).slideDown();

        });
    });

    media('all and (max-width: 589px)', function() {
        $('.form-faq__quest').on('click', function (e) {

            e.preventDefault();
            var $this = $(this);
            var currentLink = $(this).attr('href');

            if(currentLink == '#first') {
                $(".form-faq-answers__item--mob").slideUp(); //скрывам у всех контент
                $('.form-faq__quest').removeClass('active'); //у всех удалем класс актив
                $this.toggleClass("active");
                $('.mob-1').slideToggle();
            }
            if(currentLink == '#second') {
                $(".form-faq-answers__item--mob").slideUp(); //скрывам у всех контент
                $('.form-faq__quest').removeClass('active'); //у всех удалем класс актив
                $this.toggleClass("active");
                $('.mob-2').slideToggle();
            }

        });
    });

    /*-----------------------------------------------------------------------maskeinput--------------------------------------------------------------------------*/
    if($('.form-check__input--tel')) {
        $('.form-check__input--tel').mask('+7 (999) 999-99-99');
    }

    /*--------------------------------------------------------------------validation form---------------------------------------------------------------------*/
    $('.form-check').validate({
        errorPlacement: function(error,element) {
            return true;
        },
        focusCleanup: true, //убирает сообщение об ошибке в активном поле
        focusInvalid: false, //ставит фокус на первое поле ввода
        onkeyup: function (element) {
            if($(element).valid()){
                $(element).css('color', '#199568');
            } else {
                $(element).css('color', '#d43f3a');
            }
        },
        submitHandler: function(form){
            $('.form-check__btn--js, .form-check-item--js, .form__policy').hide();
            $('.form-result--js, .form-check__btn-reset').show();
            $('.form-result__result').addClass('preloader');
            $('.form-check input').attr('readonly', true);
            setTimeout(function () {
                $('.form-result__result').removeClass('preloader').text('1');
                $('.form-result').removeClass('active');

                /*прописать условия для разных результатов*/
                $('.kbm1').addClass('active');
            }, 2000);
        }

    });

    $.validator.addMethod("correctEmail", function (value, element) {
        return this.optional(element) || /[a-z0-9]+@[a-z0-9]+\.[a-z]+/.test(value);
    }, 'Пожалуйста, введите корректный email');

    $('.form-order').validate({
        rules: {
            email: {
                correctEmail: true
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        onclick: function (element) {
            if($(element).hasClass('form-check__checkbox') && $(element).is(":checked")) {
                $('.form-check-item--seria input, .form-check-item--number input').attr('readonly', true);
                $('.cost').text('630');
            } else {
                $('.cost').text('530');
                $('.form-check-item--seria input, .form-check-item--number input').attr('readonly', false);
            }
        },
        focusCleanup: true, //убирает сообщение об ошибке в активном поле
        focusInvalid: false, //ставит фокус на первое поле ввода
        onkeyup: function (element) {
            if($(element).valid()){
                $(element).css('color', '#199568');
            }
        },
        submitHandler: function(form){
            console.log('test');
        }

    });

    /*-----------------------------------------------------accordion--------------------------------------------------------*/

    media('all and (min-width: 720px)', function(){
        $('.faq-block-left .faq-block-item').on('click', function (e) {

            e.preventDefault();

            var $this = $(this).children('.js-faq-title');

            if(!$this.hasClass("title--active")) { //есть ли у ссылки класс актив
                $(".faq-block-left .faq-content").slideUp(); //скрывам у всех контент
                $(".faq-block-left .js-faq-title").removeClass("title--active"); //у всех удалем класс актив
                $(".faq-block-left .faq-block-item").removeClass("faq-block-item--active"); //у всех удалем класс актив
            }

            $this.toggleClass("title--active");
            $this.parent('.faq-block-item').toggleClass("faq-block-item--active");
            $this.siblings().slideToggle();

        });

        $('.faq-block-right .faq-block-item').on('click', function (e) {

            e.preventDefault();

            var $this = $(this).children('.js-faq-title');

            if(!$this.hasClass("title--active")) { //есть ли у ссылки класс актив
                $(".faq-block-right .faq-content").slideUp(); //скрывам у всех контент
                $(".faq-block-right .js-faq-title").removeClass("title--active"); //у всех удалем класс актив
                $(".faq-block-right .faq-block-item").removeClass("faq-block-item--active"); //у всех удалем класс актив
            }

            $this.toggleClass("title--active");
            $this.parent('.faq-block-item').toggleClass("faq-block-item--active");
            $this.siblings().slideToggle();

        });
    });

    media('all and (max-width: 719px)', function() {
        $('.js-faq-title').on('click', function (e) {

            e.preventDefault();

            var $this = $(this);

            if(!$this.hasClass("title--active")) { //есть ли у ссылки класс актив
                $(".faq-content").slideUp(); //скрывам у всех контент
                $(".js-faq-title").removeClass("title--active"); //у всех удалем класс актив
                $(".faq-block-item").removeClass("faq-block-item--active"); //у всех удалем класс актив
            }

            $this.toggleClass("title--active");
            $this.parent('.faq-block-item').toggleClass("faq-block-item--active");
            $this.siblings().slideToggle();

        });
    });

    /*-----------------------------------------------------сладйер партнеры--------------------------------------------------------*/

    media('all and (min-width: 590px)', function() {
        $('.partners-slider__wrap').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            appendArrows: $('.partners-slider__arrows'),
            dots: false,
            responsive: [
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    });

    media('all and (max-width: 589px)', function() {
        $('.partners-slider__wrap').slick('unslick');
    });

    /*-----------------------------------------------------калькулятор mob--------------------------------------------------------*/

        var stag = 1;
        var kbm = 0;
        var kbm_u = 0;
        var skidka = 0;
        var stoimost = 0;
        var summa = 0;
        $('.calc-link1').click(function (e) {
            e.preventDefault();
            stag = jQuery(this).data('val');
            $('.calc-link1').removeClass('active');
            $(this).addClass('active');
        });

        $('.calc-link2').click(function () {
            kbm = $(this).data('val');
            console.log(kbm);
            $('.calc-link2').removeClass('active');
            $(this).addClass('active');
            kbm_u = 1 - stag * 0.05;
            kbm_u = +kbm_u.toFixed(2);
            if (kbm > kbm_u) {
                if (kbm_u < 1) {
                    skidka = (1 - kbm_u) * 100;
                    skidka = +skidka.toFixed(2);
                } else {
                    skidka = Math.ceil((1 + kbm_u) * 100);
                    skidka = +skidka.toFixed(2);
                }
                $('.calc .steps.finish_1 .mid .mid_right .big span').html(parseInt(skidka));
                stoimost = 6200 - (6200 * (skidka / 100));
                summa = 6200 - stoimost;
                $('.calc .steps.finish_1 .mid .mid_right .small .stoimost').html(stoimost);
                $('.calc .steps.finish_1 .mid .mid_right .small .summa').html(summa);
                $('.result1').slideDown();
                // $('.result1').addClass('active');
                return false;
            }
            if (kbm < kbm_u) {
                $('.result2').slideDown();
                return false;
            }
            if (kbm = kbm_u) {
                $('.result3').slideDown();
                return false;
            }
        });

});
