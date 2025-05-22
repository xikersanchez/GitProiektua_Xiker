function aldatuKolorea() {
  const colors = ["#f5f5dc", "#ffcccc", "#ccffcc", "#ccccff", "#fff0b3"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}
