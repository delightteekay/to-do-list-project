document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
        document.getElementById('taskList').appendChild(li);
        taskInput.value = "";
    }
});

function removeTask(button) {
    const li = button.parentNode;
    li.parentNode.removeChild(li);
}
