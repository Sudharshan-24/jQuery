$(document).ready(function () {
    $(".fadeto-btn").click(function () {
        $(".none").fadeTo("fast", 0);
        $(".light").fadeTo("slow", 0.2);
        $(".medium").fadeTo(1000, 0.8);
        $("dark").fadeTo(2000, 1);
    });
});