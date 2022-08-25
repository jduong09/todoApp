document.addEventListener('DOMContentLoaded', () => {
  const deleteBtns = document.getElementsByClassName('btn-delete');

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', (e) => {
      e.target.parentElement.parentElement.remove();
    });
  }
});