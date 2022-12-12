$(document).ready(function () {
    $("p").css("backgroundColor", "green");
    $("p").css("color", "white");
    $("p").css("padding", "20px");
    $("p").css("fontFamily", "sans-serif");
    $("p").css("fontSize", "40px");
    $("p").css("cursor", "pointer");
    $("p").click(function () {
        $(this).slideUp();
        $("p").css("backgroundColor", "Yellow");
        $("p").css("color", "purple");
    });
});