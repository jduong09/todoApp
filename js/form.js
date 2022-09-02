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
  const itemsLeftSpan = document.querySelector('div.main-todos > span');
  itemsLeftSpan.innerHTML = todosList.children.length === 1 ? `${todosList.children.length} item left` : `${todosList.children.length} items left`;
  if (todosList.children.length === 0) {
    todosList.classList.add('empty');
  }

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

        let itemsLeft = 0;
        for (let j = 0; j < todosList.children.length; j++) {
          if (!todosList.children[j].children[0].classList.contains('checked')) {
            itemsLeft++;
          }
        }
  
        itemsLeftSpan.innerHTML = itemsLeft === 1 ? `${itemsLeft} item left` : `${itemsLeft} items left`;
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
        e.currentTarget.parentElement.remove();
      });

      const crossSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

      const width = 18;
      const height = 18;
      crossSvg.setAttributeNS(null, 'width', width);
      crossSvg.setAttributeNS(null, 'height', height);
      crossSvg.classList.add('icon-cross');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttributeNS(null, 'fill', '#494C6B');
      path.setAttributeNS(null, 'fill-rule', 'evenodd');
      path.setAttributeNS(null, 'd', 'M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z');

      crossSvg.appendChild(path);
      deleteBtn.append(crossSvg);

      newListItem.append(updateBtn, descriptionSpan, deleteBtn);
      todosList.append(newListItem);

      let itemsLeft = 0;
      for (let j = 0; j < todosList.children.length; j++) {
        if (!todosList.children[j].children[0].classList.contains('checked')) {
          itemsLeft++;
        }
      }

      itemsLeftSpan.innerHTML = itemsLeft === 1 ? `${itemsLeft} item left` : `${itemsLeft} items left`;

      if (todosList.classList.contains('empty')) {
        todosList.classList.remove('empty');
      }

      // Reset inputCreate
      e.target.value = '';
      e.target.parentElement.children[0].classList.remove('checked');
    }
  });
});