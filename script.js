//your JS code here. If required.
// Function to change the color of a grid element
function changeColor() {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("color_id").value;

  const gridItem = document.getElementById(blockId);

  if (gridItem) {
    gridItem.style.backgroundColor = color;
  } else {
    alert("Invalid grid item ID");
  }
}

// Function to reset all grid elements to transparent background
function resetColors() {
  const gridItems = document.getElementsByClassName("grid-item");

  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = "transparent";
  }
}

// Add event listeners for the Change Color and Reset buttons
document.getElementById("change_button").addEventListener("click", changeColor);
document.getElementById("Reset").addEventListener("click", resetColors);
