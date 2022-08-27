document.addEventListener('DOMContentLoaded', () => {
  const deleteBtns = document.getElementsByClassName('btn-delete');
  const todosList = document.getElementById('list-todos');
  const itemsLeftSpan = document.querySelector('.main-todos > span');
  const clearCompletedBtn = document.getElementById('btn-clear');

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', (e) => {
      e.target.parentElement.parentElement.remove();

      if (todosList.children.length === 0) {
        todosList.classList.add('empty');
      } 
        
      itemsLeftSpan.innerHTML = todosList.children.length === 1 ? `${todosList.children.length} item left` : `${todosList.children.length} items left`;
    });
  }

  clearCompletedBtn.addEventListener('click', () => {
    const currentTodoList = document.getElementsByClassName('list-item-todo');

    for (let i = 0; i < currentTodoList.length; i++) {
      if (currentTodoList[i].children[0].classList.contains('checked')) {
        currentTodoList[i].remove();
      }
    }

    itemsLeftSpan.innerHTML = todosList.children.length === 1 ? `${todosList.children.length} item left` : `${todosList.children.length} items left`;
  });
});