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

// fixed navbar 
// select Items
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if(scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  }
  else {
    navbar.classList.remove('fixed-nav')
  }

  // top link button
  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  }
  else {
    topLink.classList.remove('show-link')
  }
  console.log(scrollHeight);
})

// smooth scroll
// select items
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific target
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculaate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight;
    
    if(!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 105) {
      position = position + linksContainerHeight;
    }

    // scroll To
    window.scrollTo ({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0;
  })
})