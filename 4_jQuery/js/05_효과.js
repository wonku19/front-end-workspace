// 1. show, hide, toggle
$('#show').click(function() {
    $('#img').show(3000);
});

$('#hide').click(function() {
    $('#img').hide(3000);
});

$('#toggle').click(function() {
    $('#img').toggle(3000, 'swing');
});

// 2. fadeIn, fadeOut, fadeToggle
$('#fadeIn').click(function() {
    $('#img').fadeIn(3000);
});

$('#fadeOut').click(function() {
    $('#img').fadeOut(3000);
});

$('#fadeToggle').click(function() {
    $('#img').fadeToggle(3000);
});

$('#img').hover(
    function() {
        $(this).fadeTo(1000, 0.5);
    },
    function() {
        $(this).fadeTo(1000, 1);
    }
);

$('.menu').click(function(e) {
    const content = $(e.target).next();
    // if(content.css('display') === 'none') {
    //     content.slideDown(500);
    // } else {
    //     content.slideUp(500);
    // }

    // content.slideToggle(500);

    // 컨텐츠 하나만 slidedown 되도록!!
    $('.contents').slideUp();
    content.slideDown(500);
});

