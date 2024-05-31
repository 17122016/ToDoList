const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// step1 : create list task
function addTask() {
  if (inputBox.value === "") {
    alert("add your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveTask();
}

// step2 : remove and checked provided tasks
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTask();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);

// step3 : save the task and display the task  (in  browser , by browser)
function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const savedData = localStorage.getItem("data");

  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}

showTask();
