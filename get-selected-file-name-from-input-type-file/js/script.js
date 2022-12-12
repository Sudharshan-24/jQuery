$(document).ready(function () {
  $("#fileupload").change(function (e) {
    // console.log(e.target.files[0].name);
    let fileName = e.target.files[0].name;
    $(".filename").text(fileName);
  });
});
