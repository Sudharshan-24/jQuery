$(document).ready(function () {
    $(".animate").click(function () {
        $("img").animate({
            left: 250
        });
        $(".box").animate({
            width: "300px",
            height: "300px",
            marginLeft: "150px",
            borderWidth: "10px",
            opacity: 0.5
        });
        $(".box-two")
            .animate({
                width: "100px"
            })
            .animate({
                height: "100px"
            })
            .animate({
                marginLeft: "250px"
            })
            .animate({
                borderWidth: "10px"
            })
            .animate({
                opacity: 0.5
            });
        $(".box-three").animate({
            top: "+=50px",
            left: "+=50px",
            width: "+=50px",
            height: "+=50px"
        });
    });
});