$(document).ready(function () {
    $("p").css("color", "blueviolet");
    $("p").css("backgroundColor", "lightpink");
    $("p").css("padding", "40px");
    $("p").css("fontSize", "40px");
    $("p").css("cursor", "pointer");
    $("p").dblclick(function () {
        $(this).slideUp();
        $(this).css("backgroundColor", "yellow");
    });
});