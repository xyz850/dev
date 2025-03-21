function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);

    newTask.appendChild(taskText);
    taskList.appendChild(newTask);
    taskInput.value = "";

    newTask.onclick = function () {
        if (newTask.classList.contains("completed")) {
            newTask.classList.remove("completed");
        } else {
            newTask.classList.add("completed");
        }
    };

    newTask.ondblclick = function () {
        taskList.removeChild(newTask);
    };
}
