$(document).ready(function() {
  $("form#language-suggest").submit(function(event) {
    event.preventDefault();
    const system = $("select#system").val();
    const application = $("select#application").val();
    const game = $("select#game").val();
    const info = $("select#info").val();
    const garbage = $("select#garbage").val();
    const color = $("select#color").val();
  })
})