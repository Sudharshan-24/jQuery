$(document).ready(function () {
    $("p").mouseenter(function () {
        $(this).addClass("highlight");
    });
    $("p").mouseleave(function () {
        $(this).removeClass("highlight");
    });
});