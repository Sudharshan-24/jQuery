$("document").ready(function () {
    $("button").click(function () {
        $("h1").load("api/load.html", function (responseTxt, statusTxt, jqXHR) {
            if (statusTxt == "success") {
                alert("Loaded successfully!");
            }
            if (statusTxt == "error") {
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });
});