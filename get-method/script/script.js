$(document).ready(function () {
    $("button").click(function () {
        $.get("api/app.js", function (data) {
            $("#result").html(data);
        });
    });
});