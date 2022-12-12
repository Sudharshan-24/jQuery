$(document).ready(function () {
    $("p").css("backgroundColor", "yellow");
    $("p").css("padding", "20px");
    $("p").css("maxWidth", "100px");
    $(".up-btn").click(function () {
        $("p").slideUp();
    });
    $(".down-btn").click(function () {
        $("p").slideDown();
    });
});