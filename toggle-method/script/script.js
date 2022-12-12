$(document).ready(function () {
    $("button").css("backgroundColor", "green");
    $("button").css("color", "white");
    $("button").css("border", "none");
    $("button").css("borderRadius", "20px");
    $("button").css("padding", "10px");
    $("p").css("width", "150px");
    $("p").css("backgroundColor", "orange");
    $("p").css("color", "brown");
    $("p").css("padding", "15px");
    $(".tog-btn").click(function () {
        $("p").toggle();
    });
});