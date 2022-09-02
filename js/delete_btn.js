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
    const copiedTodoList = Array.from(currentTodoList);

    const activeTodoList = copiedTodoList.filter((todoItem) => {
      return !todoItem.children[0].classList.contains('checked');
    });

    const updatedTodoList = document.createElement('ul');
    updatedTodoList.id = 'list-todos';
    let todoListChildren = '';
    activeTodoList.map(todoItem => {
      const listItemTodo = document.createElement('li');
      listItemTodo.classList.add('list-item-todo');

      const spanBtnUpdate = document.createElement('span');
      spanBtnUpdate.classList.add('btn-update');

      const spanTodoDescription = document.createElement('span');
      spanTodoDescription.classList.add('todo-description');
      spanTodoDescription.innerHTML = todoItem.children[1].innerHTML;

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('btn-delete');

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

      btnDelete.append(crossSvg);

      listItemTodo.append(spanBtnUpdate, spanTodoDescription, btnDelete);

      updatedTodoList.append(listItemTodo);
    });

    const mainTodoDiv = document.querySelector('.main-todos');
    mainTodoDiv.replaceChild(updatedTodoList, todosList);

    let itemsLeft = 0;
    for (let j = 0; j < todosList.children.length; j++) {
      if (!todosList.children[j].children[0].classList.contains('checked')) {
        itemsLeft++;
      }
    }

    itemsLeftSpan.innerHTML = itemsLeft === 1 ? `${itemsLeft} item left` : `${itemsLeft} items left`;
  });
});