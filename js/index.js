var timer = setTimeout(function () {
    $('.wrapper').removeClass('init');
}, 200);
$('.item').on('click', function() {
    $(this).addClass('active');
    $('.wrapper').addClass('wrapper-active');
})
$('.disc').on('click', function (e) {
    e.stopPropagation();
    $('.active').removeClass('active');
    $('.wrapper-active').removeClass('wrapper-active');
})