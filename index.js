const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#add-btn");
const thelist = document.querySelector("#list");



function Additem() {
  const inputValue = inputBox.value.trim();

  if (inputValue !== "") {
    const newListItem = document.createElement("li");

    newListItem.innerHTML =
      '<input type="checkbox">' +
      inputValue +
      '<button class="close-btn"><i class="fa-solid fa-xmark"></i></button>';

    thelist.appendChild(newListItem);
    inputBox.value = "";

    const closeButton = newListItem.querySelector(".close-btn");
    closeButton.addEventListener("click", () => {
      thelist.removeChild(newListItem);
    });
  }
}

addButton.addEventListener("click", Additem);
document.addEventListener("keydown", (event) => {
  if(event.key ==="Enter") {
    Additem();
  }
})