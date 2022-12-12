$(document).ready(function () {
    $("input").focus(function () {
        $(this).next("span").show().fadeOut();
    });
});