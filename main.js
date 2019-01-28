"use strict";

const modalData = [
  {
    name: 'logo-challenge',
    about: '<h1>Logo chalange</h1>'+'<div class="line"></div>'+'<div class="modal-text"><p>This is some of my crated logos from 30 days of logo chalange.</p></div>',
    img: 'image/Logo [roject/part.logos.jpg'
  },
  {
    name: 'player-scrape',
    about: '<h1>Poker app UI</h1>'+'<div class="line"></div>'+'<p></p>',
    img: 'image/Poker scraper/presentation  pokerpage.jpg'
  },
  {
    name: 'tisanes-branding',
    about: '<h1>Branding for tisanes tea</h1>'+'<div class="line"></div>'+'<div class="modal-text"><h4>Design Constraints</h4><ul><li>The logo has to be simple, elegant, clean.</li><li>The logo has to represent nature, have a warm, friendly style.</li><li>The logo had to be able to be used across a variety of different application such as packaging, business card online shop.</li></ul><h4>Researching</h4><p>I started my work with some research about other tea companies, about packaging and most used shapes and colors.</p><h4>Design decisions:</h4><p> Minimalism: After research, I decided to use minimalist style, I started sketching in my notebook and soon decided to use thick rounded lines which gives more natural elegance feeling, I used one color, to make the logo as simple and clean as it can be. After many sketches, I had a pretty clear vision of logo and my next step was to start working with vectors, I choose from 2 different sketches, first one is half leaf form with letters "ti" in the middle which stands for first two company letters.</p><p>The second shape was more simple, from the perspective of the viewer could be seen a flower blooming, four leaf, or two flowers, but most importantly the mark still communicates feeling of nature, warmth and elegant, from these two I have chosen the second logo because the first one was too messy while combining it with the type, end not clear enough while using without.</p> <p> It was time to choose the typeface, soon I decided to use a serif font, after I tried a lot of different types I decided to use “Didot” font, which was the most popular used on the cover titles, it added a more modern and elegant look for the logo.</p><h4>Packaging: </h4><p>For packaging I wanted to create a pattern, which could be used in many different places, so I started my work in Affinity Designer (vector software) I used it on the background of packages and business cards.</p></div>',
    img: 'image/tisanes branding/tisanes MAIN.jpg'
  }
];
const modal = document.querySelector('.modal');
const mainModal = document.querySelector('.main-modal');
let modalOpen = false;

const projects = document.querySelectorAll('.project-box');
projects.forEach((project) => {
  project.addEventListener('click', () => {
    selectModal(project);
  });
});

function selectModal (el) {
  let projectIndex = modalData.findIndex(item => item.name === el.dataset.project);
  generateHTML(projectIndex);
}

function generateHTML (index) {
  const html = `
    <div class="modal-about">
      <p>${modalData[index].about}</p>
    </div>
    <div class="modal-content">
      <img src="${modalData[index].img}" width="100%">
    </div>
  `;
  mainModal.innerHTML = html;
  makeModalVisible();
}

function makeModalVisible () {
  if (modalOpen === false) {
    modal.style.display = 'flex';
    modalOpen = true;
  } else {
    modal.removeAttribute('style');
    modalOpen = false;
  }
}

modal.addEventListener('click', () => {
  if (event.target === modal) {
    makeModalVisible();
  }
})

document.querySelector('.close').addEventListener('click', makeModalVisible);