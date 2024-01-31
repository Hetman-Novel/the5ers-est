jQuery(document).ready(function($) {

    // Custom Select
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut(0);
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut(0);
            $(this).addClass('open');
            $(this).next().fadeIn(0);
        }
    });
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $('.select__item').removeClass('active');
        $(this).addClass('active');
        $(this).parent().fadeOut(0);
        $(this).parent().prev().text($(this).text());
        
        console.log($(this).text());
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut(0);
        }
    });
});