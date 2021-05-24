console.log("This is all about Drag and drop project");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

// Event listeners for draggable element image box
imgBox.addEventListener("dragstart", (e) => {
  console.log("drag start has been triggered");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += " hide";
  }, 0);
});
imgBox.addEventListener("dragend", (e) => {
  console.log("drag end has been triggered");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover has been triggered");
  });

  whiteBox.addEventListener("dragenter", () => {
    console.log("dragenter has been triggered");
    // e.target.className = ' dashed';
  });

  whiteBox.addEventListener("dragleave", () => {
    console.log("dragleave has been triggered");
    // e.target.className = ' whiteBox';

  });

  whiteBox.addEventListener("drop", (e) => {
    console.log("dragdrop has been triggered");
    e.target.append(imgBox);
  });
}
