$(document).ready(function () {
  $(".para-one").css("backgroundColor", "green");
  $(".para-one").css("color", "white");
  $(".btn-one").click(function () {
    $(".para-one").slideToggle("slow");
    alert("Paragraph one toggled successfully!");
  });
});

$(document).ready(function () {
  $(".para-two").css("backgroundColor", "aqua");
  $(".para-two").css("color", "grey");
  $(".btn-two").click(function () {
    $(".para-two").slideToggle("slow", function () {
      alert("Paragraph two toggled successfully!");
    });
  });
});

$(document).ready(function () {
  $("h3").css("backgroundColor", "gray");
  $("h3").css("color", "white");
  $("h3").css("display", "none");
  $(".para-three").css("backgroundColor", "orange");
  $(".para-three").css("color", "white");
  $(".btn-three").click(function () {
    $("h3, .para-three").slideToggle("slow", function () {
      alert("Paragraph three toggled successfully!");
    });
  });
});
