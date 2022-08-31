document.addEventListener('DOMContentLoaded', () => {
  const todosFilter = document.getElementById('todos-filter');
  const main = document.querySelector('main');
  const buttonMain = document.querySelector('.main-todos > button');
  const todosMain = document.querySelector('.main-todos');

  if (window.innerWidth >= 992) {
    todosMain.insertBefore(todosFilter, buttonMain);
    todosFilter.classList.add('desktop');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      todosMain.insertBefore(todosFilter, buttonMain);
      todosFilter.classList.add('desktop');
    } else {
      if (todosFilter.classList.contains('desktop')) {
        todosFilter.classList.remove('desktop');
        main.append(todosFilter);
      }
    }
  });


});