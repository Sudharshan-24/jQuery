$(function () {
    alert("Hello world");
    $("h1").css("color", "blueviolet");
});

$(document).ready(function () {
    $("h2").css("color", "grey");
    $("h2").css("backgroundColor", "lime");
    $("button").click(function () {
        $("h2").css("color", "steelblue")
        $("#loading").text("Hello, World!");
        $("#loading").css("color", "purple");
        $("#loading").css("backgroundColor", "yellow");
    });
});

$(document).ready(function () {
    $("#blue").css("color", "blue");
    $("#blue").css("background", "yellow");
    $("#blue").css("fontSize", "22px");
    $("#orange").css("backgroundColor", "orange");
    $("#grey").css("color", "grey");
    $(".pink").css("color", "pink");
    $(".green").css("backgroundColor", "green");
    $('input[type="text"]').css("backgroundColor", "wheat");
    $("tr:odd").css("backgroundColor", "yellow");
    $("tr:odd").css("color", "purple");
    $("tr:even").css("backgroundColor", "brown");
    $("tr:even").css("color", "white");
});