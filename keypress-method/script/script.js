$(document).ready(function () {
    var i = 0;
    $('input[type="text"]').keypress(function () {
        $("span").text(i += 1);
        $("p").show().fadeOut();
    });
});