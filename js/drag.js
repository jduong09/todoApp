// Element needs to have property 'draggable = true'
document.addEventListener('DOMContentLoaded', () => {
  const todoItemsList = document.getElementById('list-todos');
  const todoItems = document.getElementsByClassName('list-item-todo');

  for (let j = 0; j < todoItems.length; j++) {
    // add dropzone event listeners to each current todoItem.
    todoItems[j].classList.add('dropzone');

    todoItems[j].addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    todoItems[j].addEventListener('dragenter', (e) => {
      // highlight potential drop target when the draggable element enters it
      if (e.target.classList.contains('dropzone')) {
        e.target.classList.add('dragover');
      }
    });

    todoItems[j].addEventListener('dragleave', (e) => {
      if (e.target.classList.contains('dropzone')) {
        e.target.classList.remove('dragover');
      }
    });

    todoItems[j].addEventListener('drop', (e) => {
      e.preventDefault();

      if (e.target.classList.contains('dropzone')) {
        e.target.classList.remove('dragover');
        window.dragged.parentNode.removeChild(window.dragged);
        todoItemsList.insertBefore(window.dragged, e.target);
      }
    });

    todoItems[j].addEventListener('drag', (e) => {
      e.target.classList.remove('dropzone');
    });
    // dragstart
    todoItems[j].addEventListener('dragstart', (e) => {
      window.dragged = e.target;
      e.target.classList.add('dragging');
    });
    // dragend
    todoItems[j].addEventListener('dragend', (e) => {
      e.target.classList.remove('dragging');
      e.target.classList.add('dropzone');
    });
  }
});