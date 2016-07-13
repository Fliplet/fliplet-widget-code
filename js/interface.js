var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/javascript");

$('form').submit(function (event) {
  event.preventDefault();
  var output = editor.getValue();
  	output.replace(/"/g, '\\"');

  Fliplet.Widget.save({
    code: output
  }).then(function () {
    Fliplet.Widget.complete();
  });
});