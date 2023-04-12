document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#create-task-form")
  const input = document.querySelector("#new-task-description")
  const submit = document.querySelector("#submit")
  const tasks = document.querySelector("#tasks")

  form.addEventListener("submit", handleSubmit)
  function handleSubmit(event) {
    event.preventDefault()

    function addTasks() {
      const newTask = document.createElement("li")
      newTask.innerHTML = `${input.value}`
      tasks.appendChild(newTask)
    }
    addTasks()
    input.value = ""
  }


});
