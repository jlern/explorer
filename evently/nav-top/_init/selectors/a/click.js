function() {
    var t = $(this).attr('href').slice(1);
    $(this).trigger('crumb', $(this).attr('href'));
    $(this).trigger(t, t);
//    $.log($(this).attr('href'));
}
