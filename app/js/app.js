$(function () {

    $('[data-toggle="tooltip"]').tooltip()


    $('.search-btn').on('click', () => {
        $('.search').addClass('open')
    })

    $(document).mouseup(function (e){
        var div = $(".search");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('open');
        }
    });


});