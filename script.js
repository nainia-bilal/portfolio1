/* Typing Animation */
const textElement = document.querySelector(".typing-text");
if (textElement) {
  const texts = ["Web Developer", "Management Student", "Creative Designer"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    textElement.textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 2000);
    } else {
      setTimeout(type, 100);
    }
  })();
}
