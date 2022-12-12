$(document).ready(function () {
    $("form").submit(function (event) {
        debugger;
        event.preventDefault();
        var formValues = $("form").serialize();
        $.post(action, formValues, function (data) {
            debugger;
            $("#result").html(data);
        });
    });
});