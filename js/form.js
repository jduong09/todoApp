// Javascript Tasks
// form.js will create a new todo when a user fills out the input and presses the key 'Enter'.
// They should be able to toggle the completion button.
// When 'Enter' key is pressed, todo item is created and added to the todo list.
// input is then reset to the fresh input.
// updateTotal function should be ran after a create todo is finished.
document.addEventListener('DOMContentLoaded', () => {
  // Add event listener for enter key? When enter key is pressed, if input has been filled out, then we can add that as todo?
  const inputCreate = document.getElementById('todo-create');

  const todosList = document.getElementById('list-todos');

  inputCreate.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  });
});