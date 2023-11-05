const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
const box = document.querySelector("#container");

let i = 1;

// if enter is pressed
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    if (item.value == "") {
      alert("write something");
    } else {
      addToDo(item.value);
      item.value = "";
    }
  }
});

// To add list on the box
const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${i}) ${item} <i  class="ri-delete-bin-6-line"></i>`;
  toDoBox.appendChild(listItem);
  i++;

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
    
    updateNumber()

  });

  listItem.addEventListener("click", function () {
    listItem.classList.toggle("done");
    // listItem.classList.toggle("remove-item");
  });
};

// function to update item number
const updateNumber = () =>{
  const listItem = document.querySelectorAll("li");
  i = 1;

  listItem.forEach((item) =>{
    const text  = item.textContent;
    item.innerHTML = `${i}) ${text.slice(text.indexOf(")") +1 )} <i class="ri-delete-bin-6-line"></i>`
    i++;

    item.querySelector("i").addEventListener("click", function () {
      item.remove();
      updateNumber()
    });

  })

}
