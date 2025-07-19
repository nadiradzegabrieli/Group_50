const divs = document.querySelectorAll("div");

divs.forEach(div => {
  div.addEventListener("click", function(event) {
    const clickedDiv = event.currentTarget;
    const color = clickedDiv.id;
    clickedDiv.style.backgroundColor = color;
    const paragraph = clickedDiv.querySelector("p");
    paragraph.textContent = `Color is ${color}`;
    paragraph.style.color = "red";
    console.log("Clicked DIV info:", {
      id: clickedDiv.id,
      text: paragraph.textContent,
      colorApplied: color,
      eventObject: event
    });
  });
});