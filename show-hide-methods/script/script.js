$(document).ready(function () {
  $("p").css("backgroundColor", "yellow");
  $("p").css("color", "gray");
  $("p").css("padding", "20px");
  $("p").css("margin", "20px");
  $(".hide-btn").css("backgroundColor", "red");
  $(".hide-btn").css("color", "white");
  $(".hide-btn").css("border", "none");
  $(".hide-btn").css("borderRadius", "10px");
  $(".hide-btn").css("padding", "15px");
  $(".hide-btn").css("cursor", "pointer");
  $(".show-btn").css("backgroundColor", "green");
  $(".show-btn").css("color", "white");
  $(".show-btn").css("border", "none");
  $(".show-btn").css("borderRadius", "10px");
  $(".show-btn").css("padding", "15px");
  $(".show-btn").css("cursor", "pointer");
  $("button").css("margin", "0 20px");

  $(".hide-btn").click(function () {
    debugger;
    $("p").hide();
  });

  $(".show-btn").click(function () {
    debugger;
    $("p").show();
  });
});
