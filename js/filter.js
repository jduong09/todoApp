document.addEventListener('DOMContentLoaded', () => {
  const filterAll = document.getElementById('filter-all');
  const filterActive = document.getElementById('filter-active');
  const filterCompleted = document.getElementById('filter-completed');

  filterAll.addEventListener('click', () => {
    const todoItems = document.getElementsByClassName('list-item-todo');
    
    if (filterActive.classList.contains('selected')) {
      filterActive.classList.remove('selected');
    }

    if (filterCompleted.classList.contains('selected')) {
      filterCompleted.classList.remove('selected');
    }

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].classList.contains('hide')) {
        todoItems[i].classList.remove('hide');
      }
    }

    filterAll.classList.add('selected');
  });

  filterActive.addEventListener('click', () => {
    const todoItems = document.getElementsByClassName('list-item-todo');
    
    if (filterAll.classList.contains('selected')) {
      filterAll.classList.remove('selected');
    }

    if (filterCompleted.classList.contains('selected')) {
      filterCompleted.classList.remove('selected');
    }

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].children[0].classList.contains('checked')) {
        todoItems[i].classList.add('hide');
      } else {
        if (todoItems[i].classList.contains('hide')) {
          todoItems[i].classList.remove('hide');
        }
      }
    }

    filterActive.classList.add('selected');
  });

  filterCompleted.addEventListener('click', () => {
    const todoItems = document.getElementsByClassName('list-item-todo');
    
    if (filterAll.classList.contains('selected')) {
      filterAll.classList.remove('selected');
    }

    if (filterActive.classList.contains('selected')) {
      filterActive.classList.remove('selected');
    }

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].children[0].classList.contains('checked')) {
        if (todoItems[i].classList.contains('hide')) {
          todoItems[i].classList.remove('hide');
        }
      } else {
        todoItems[i].classList.add('hide');
      }
    }

    filterCompleted.classList.add('selected');
  });
});