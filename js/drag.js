// Element needs to have property 'draggable = true'
document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.getElementsByClassName('list-item-todo');
  const todoItemsList = document.getElementById('list-todos');
  for (let i = 0; i < listItems.length; i++) {
    // drag, dragstart, dratend, dragenter, dragleave, drop
    let dragged;
    listItems[i].addEventListener('drag', (e) => {
      console.log('drag');
    });
    // dragstart
    listItems[i].addEventListener('dragstart', (e) => {
      dragged = e.target;
      e.target.classList.add('dragging');
    });
    // dragend
    listItems[i].addEventListener('dragend', (e) => {
      e.target.classList.remove('dragging');
    });

    // events fired on the drop targets
    for (let j = 0; j < 2; j++) {
      const dropTarget = document.createElement('li');
      dropTarget.classList.add('dropzone');
      dropTarget.id = 'droptarget';

      if (j === 0) {
        todoItemsList.prepend(dropTarget);
      } else {
        todoItemsList.appendChild(dropTarget);
      }

      dropTarget.addEventListener('dragover', (e) => {
        e.preventDefault();
      }, false);

      // highlight potential drop target when the draggable element enters it
      dropTarget.addEventListener('dragenter', (e) => {
        if (e.target.classList.contains('dropzone')) {
          e.target.classList.add('dragover');
        }
      });

      dropTarget.addEventListener('dragleave', (e) => {
        // reset background of potential drop target when the draggable element leaves it
        if (e.target.classList.contains('dropzone')) {
          e.target.classList.remove('dragover');
        }
      });

      dropTarget.addEventListener('drop', (e) => {
        // prevent default action (open as link for some elements)
        e.preventDefault();
        // move dragged element to the selected drop target
        if (e.target.classList.contains('dropzone')) {
          e.target.classList.remove('dragover');
          dragged.parentNode.removeChild(dragged);
          e.target.appendChild(dragged);
        }
      });
    }
  }
});