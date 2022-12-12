$(document).ready(function () {
  $(".check").click(function (e) {
    let checked = $(this).is(":checked");
    if (checked == true) {
      $(this).parents(".card-container").find(".passport-container").show();
      $(this).parents(".card-container").find(".apply-container").hide();
    } else {
      $(this).parents(".card-container").find(".passport-container").hide();
      $(this).parents(".card-container").find(".apply-container").show();
    }
  });
});
