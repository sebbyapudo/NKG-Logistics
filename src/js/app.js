// getting the current date
const date = document.getElementById("date");
date.textContent = new Date().getFullYear()

// close links
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links')
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  }
  else {
    linksContainer.style.height = 0;
  }
})