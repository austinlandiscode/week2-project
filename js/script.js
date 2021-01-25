$(document).ready(function () {
  $("form#language-suggest").submit(function (event) {
    event.preventDefault();
    $("#swift").hide();
    $("#ruby").hide();
    $("#javascript").hide();
    $("#csharp").hide();
    $("#go").hide();
    $("#rust").hide();
    $("#python").hide();

    const name = $("input#user-name").val();
    const system = $("select#system").val();
    const application = $("select#application").val();
    const game = $("select#game").val();
    const info = $("select#info").val();
    const garbage = $("select#garbage").val();
    const color = $("select#color").val();
    console.log(system);
    $(".name").text(name);
      if (!name) {
      alert("Please enter a name.");
    } else if (
      system === "- select answer below -" ||
      application === "- select answer below -" ||
      game === "- select answer below -" ||
      info === "- select answer below -" ||
      garbage === "- select answer below -" ||
      color === "- select answer below -") {
      alert("Please complete the form!");
    } else if (system === "MacOs" && application === "Mobile") {
      $("#swift").show();
    } else if (system === "MacOs" && garbage === "Yes" && color === "Red") {
      $("#ruby").show();
    } else if (system === "MacOS" && garbage === "Yes" && color === "Yellow") {
      $("#javascript").show();
    } else if (
      (system === "Windows" &&
        application === "Web" &&
        info === "Not Sensitive") ||
      info === "Sensitive"
    ) {
      $("#csharp").show();
    } else if (
      info === "Sensitive" ||
      (info === "Very Sensitive" && garbage === "Yes" && application === "Web")
    ) {
      $("#go").show();
    } else if (
      (info === "Very Sensitive" && game === "No" && system === "MacOS") ||
      system === "Windows"
    ) {
      $("#rust").show();
    } else if (game === "Yes") {
      $("#python").show();
    } else {
      $("#javascript").show();
    }
  });
});
