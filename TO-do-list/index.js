
const inputField = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

let items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

// Render the task list
function renderList() {
	taskList.innerHTML = "";
	items.forEach((item, index) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `<span>${item}</span><button class="delete" data-index="${index}">Delete</button>`;
		taskList.appendChild(listItem);
	});
	localStorage.setItem("items", JSON.stringify(items));
}

// Add a new task to the list
function addTask() {
	const inputValue = inputField.value.trim();
	if (inputValue) {
		items.push(inputValue);
		renderList();
		inputField.value = " ";
	}else {
        alert(" Input feild is empty please Add the task  ")
    }
}

// Remove a task from the list
function removeTask(event) {
	if (event.target.classList.contains("delete")) {
		const index = event.target.getAttribute("data-index");
		items.splice(index, 1);
		renderList();
	}
}

// Add event listeners to the button and list
addButton.addEventListener("click", addTask);
taskList.addEventListener("click", removeTask);

renderList();
