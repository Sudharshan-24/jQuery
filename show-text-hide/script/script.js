$(document).ready(function () {
  $(".btn").click(function (e) {
    let showContent = $(this).text();
    if (showContent == "Read More") {
      $(this).text("Read Less");
      $(this).parent(".container").find(".content").slideDown();
    } else {
      $(this).text("Read More");
      $(this).parent(".container").find(".content").slideUp();
    }
  });
});
