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
    if (e.key === 'Enter' && e.target.value) { // if user has pressed enter, then script should create todo item and append to todo list
      e.preventDefault();
      const newListItem = document.createElement('li');
      newListItem.classList.add('list-item-todo');

      const updateBtn = document.createElement('button');
      updateBtn.classList.add('btn-update');

      updateBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('checked')) {
          e.target.classList.remove('checked');
          e.target.parentElement.children[1].classList.remove('checked');
        }  else {
          e.target.classList.add('checked');
          e.target.parentElement.children[1].classList.add('checked');
        }
      });

      const descriptionSpan = document.createElement('span');
      descriptionSpan.classList.add('todo-description');
      descriptionSpan.innerHTML = e.target.value;

      if (e.target.parentElement.children[0].classList.contains('checked')) {
        updateBtn.classList.add('checked');
        descriptionSpan.classList.add('checked');
      }
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn-delete');

      deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
      })
      const crossImg = document.createElement('img');
      crossImg.classList.add('icon-cross');
      crossImg.src = './images/icon-cross.svg';
      crossImg.alt = 'icon-close';
      deleteBtn.append(crossImg);

      newListItem.append(updateBtn, descriptionSpan, deleteBtn);
      todosList.append(newListItem);

      // Reset inputCreate
      e.target.value = '';
      e.target.parentElement.children[0].classList.remove('checked');
    }
  });
});