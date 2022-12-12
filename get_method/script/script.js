$(document).ready(function () {
    debugger;
    $("button").click(function () {
        debugger;
        var num = $("#num").val();
        $.get("api/app.js", {
            number: num
        }, function (data) {
            debugger;
            $("#result").html(data);
        });
    });
});