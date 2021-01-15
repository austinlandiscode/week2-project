$(document).ready(function() {
  $("form#language-suggest").submit(function(event) {
    event.preventDefault();
    const name = $("input#user-name").val();
    const system = $("select#system").val();
    const application = $("select#application").val();
    const game = $("select#game").val();
    const info = $("select#info").val();
    const garbage = $("select#garbage").val();
    const color = $("select#color").val();

    $(".name").text(name);

    if (system === "MacOs" && application === "Mobile") {
      $('#swift').show();
    } else if (system === "MacOs" && garbage === "Yes" && color === "Red") {
      $('#ruby').show();
    } else if (system === "MacOS" && garbage === "Yes" && color === "Yellow") {
      $('#javascript').show();
    } else if (system === "Windows" && application === "Web" && info === "Not Sensitive" || info === "Sensitive") {
      $('#csharp').show();
    } else if (info === "Sensitive" || info === "Very Sensitive" && garbage === "Yes" && application === "Web") {
      $('#go').show();
    } else if (info === "Very Sensitive" && game === "No" && system === "MacOS" || system === "Windows") {
      $('#rust').show();
    } else if (game === "Yes") {
      $('#python').show();
    } else {
      $('#javascript').show();
    }
  });
});