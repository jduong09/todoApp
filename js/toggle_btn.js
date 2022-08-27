// Javascript File
// toggle_btn.js focuses on update buttons on todo items.
// Using classes, if the button has class 'checked', it will display the completed state.
// If the button does not have the 'checked' class, the button will be unchecked.
document.addEventListener('DOMContentLoaded', () => {
  const allUpdateBtns = document.getElementsByClassName('btn-update');
  // Iterate over all the update buttons, and give them an event listener that will respond to the click event.
  for (let i = 0; i < allUpdateBtns.length; i++) {
    allUpdateBtns[i].addEventListener('click', (e) => {
      e.preventDefault();
      
      if (e.target.classList.contains('checked')) {
        e.target.classList.remove('checked');
        e.target.parentElement.children[1].classList.remove('checked');

      } else {
        e.target.classList.add('checked');
        e.target.parentElement.children[1].classList.add('checked');
      }
    });
  }
});