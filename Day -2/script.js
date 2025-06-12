function addTask() {
  const input = document.querySelector("input");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  // Mark as completed on click
  li.onclick = () => li.classList.toggle("completed");

  // Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
