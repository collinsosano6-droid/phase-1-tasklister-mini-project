// Wait for the DOM to load before running any code
document.addEventListener("DOMContentLoaded", () => {
  // Select Form
  const form = document.getElementById("create-task-form");

  // Add event listener to form
  // "submit" is the type of event, followed by an arrow function
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop the browser from submitting the form and reloading the page


    // Using event, gather data into an object
    // Use the name new-task-description to select the correct target
    // from the event, and save to a variable
    const task = document.getElementById("new-task-description").value;

    // Call buildToDo, passing in the saved task
    buildToDo(task);
  });
});

// Create a new function called buildToDo
function buildToDo(todo) {
  // Create a new li element
  const li = document.createElement("li");

  // Add the task as the textContent
  li.textContent = todo;

  // Append the li element to the task list
  // The task list is the <ul> with the id of "tasks" in the HTML
  document.getElementById("tasks").appendChild(li);
}