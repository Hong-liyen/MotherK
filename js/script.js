

$(function(){
    var $modal = $('.modal');
    var HIDE_CLASS = 'is-hide';

    $('#js-startbtn').on('click', function(){
        $modal.removeClass(HIDE_CLASS);
    });
    $('#js-startbtn').on('click', function(){
        $modal.addClass(HIDE_CLASS);
    });
});

// wow
new WOW().init();


// sticky-header
$(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
        $("body").addClass("sticky-header");
    } else {
        $("body").removeClass("sticky-header");
    }
});

// count
var countMax = 100,
    countThis = $('.inputCount');

countThis.find('.count').text(countMax);

countThis.find('textarea').on('keydown keyup keypress change', function() {
    var thisValueLength = $(this).val().length,
        countDown = countMax - thisValueLength;
    countThis.find('.count').text(countDown);
    if (countDown < 0) {
        countThis.find('.count').addClass('countBelow');
    } else {
        countThis.find('.count').removeClass('countBelow');
    }
});

// slick輪播

$(".regular").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$(".video").slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});
$(".share").slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});


// niceScroll 滾動
$("html").niceScroll({
    scrollspeed: 51, // 滚动速度
    mousescrollstep: 45, // 鼠标滚轮的滚动速度(像素)
    cursorcolor: "#333", //滚动条的颜色值
    cursoropacitymax: 0.6, //滚动条的透明度值
    cursorwidth: 10, //滚动条的宽度值
    background: "#ccc", //滚动条的背景色，默认是透明的
    autohidemode: true, //滚动条是否是自动隐藏，默认值为 true
});


// back to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.arrow').fadeIn();
    } else {
        $('.arrow').fadeOut();
    }
});

$('.arrow').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});


// rightMenu 未成功
$('.sw_button').on('click', function() {
    $(this).parent().toggleClass('opened').siblings().removeClass('opened');
});


// button Change color
$(".getInfo button").click(function() {
    $(this).css("background-color", "#93D0D1");
});

// date
$.ms_DatePicker({
    YearSelector: ".sel_year",
    MonthSelector: ".sel_month",
    DaySelector: ".sel_day"
});
$.ms_DatePicker();


// address
$('#twzipcode').twzipcode({
    zipcodeSel: 114,
    readonly: false
});

