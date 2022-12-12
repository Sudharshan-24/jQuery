$(document).ready(function () {
    $("p").css("backgroundColor", "green");
    $("p").css("color", "white");
    $(".tog-btn").click(function () {
        $("p").slideToggle();
    });
});