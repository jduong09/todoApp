// Javascript for toggling dark mode.
// dark_mode.js will be an event listener for the button in the header
// , which toggles light and dark mode for the website.
// Default: light mode.
// When clicking on the button in the header, it will switch to dark mode
// The icon will change to a sun, and we can add the class 'dark' to all items that will be changed
// While on dark mode, if clicking on the sun, the image will turn to the moon, and all items will have their dark class removed, therefore displaying light mode.
document.addEventListener('DOMContentLoaded', () => {
  const darkModeBtn = document.querySelector('header button');
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  darkModeBtn.addEventListener('click', (e) => {
    // If the icon is moon, then we want to change to dark mode
    // If the icon is not moon, then it is sun, and we want to change to light mode
    if (e.target.id === 'icon-moon') {
      // toggle it to sun.
      e.target.id = 'icon-sun';
      e.target.alt = 'icon sun';

      if (darkModeBtn.classList.contains('dark')) {
        darkModeBtn.classList.remove('dark');
        body.classList.remove('dark');
        header.classList.remove('dark');
        main.classList.remove('dark');
        footer.classList.remove('dark');
      } else {
        darkModeBtn.classList.add('dark');
        body.classList.add('dark');
        header.classList.add('dark');
        main.classList.add('dark');
        footer.classList.add('dark');
      }
    } else {
      e.target.id = 'icon-moon';
      e.target.alt = 'icon moon';

      darkModeBtn.classList.remove('dark');

      body.classList.remove('dark');
      header.classList.remove('dark');
      main.classList.remove('dark');
      footer.classList.remove('dark');
    }
  });
});