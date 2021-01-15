$(document).ready(function() {
  $("form#language-suggest").submit(function(event) {
    event.preventDefault();
    const system = $("select#system").val();
    const application = $("select#application").val();
    const game = $("select#game").val();
    const info = $("select#info").val();
    const garbage = $("select#garbage").val();
    const color = $("select#color").val();

    if (system === "MacOs" && application === "Mobile") {
      $('#swift').show();
    } else if (system === "Linux" || system === "MacOs" && game === "Yes" && color === "Green") {
      $('#python').show();
    } else if (system === "MacOs" && garbage === "Yes" && color === "Red") {
      $('#ruby').show();
    } else if (system === "MacOS" && garbage === "Yes" && color === "Yellow") {
      $('#javascript').show();
    } else if (system === "Windows" && application === "Web") {
      $('#csharp').show();
    } else if (info === "Very Sensitive" && game === "No" && system === "MacOS" || system === "Windows") {
      $('#rust').show();
    } else if (info === "Sensitive" || info === "Very Sensitive" && garbage === "Yes" && application === "Web") {
      $('#go').show();
    } else if (game === "Yes") {
      $('#python').show();
    } else {
      $('#javascript').show();
    }
  });
});