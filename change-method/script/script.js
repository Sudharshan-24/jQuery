$(document).ready(function () {
    $("select").change(function () {
        debugger;
        var selectedOption = $(this).find(":selected").val();
        alert("You have selected - " + selectedOption);
    });
});