function converPrevie(preview, editor) {
  preview.innerHTML = marked.parse(editor.value);
  hljs.highlightAll();
}

$(document).ready(function () {
  // set default text in textarea

  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");
  converPrevie(preview, editor);

  editor.addEventListener("input", function () {
    let markdownText = this.value;
    converPrevie(preview, editor);
  });
});
