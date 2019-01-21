"use strict";

const modalData = [
  {
    name: 'logo-challenge',
    about: '<h1>Logo chalange</h1>'+'<div class="line"></div>'+'<p>This is some of my crated logos from 30 days of logo chalange.</p>',
    img: 'image/Logo [roject/part.logos.jpg'
  },
  {
    name: 'player-scrape',
    about: '<h1>Poker app UI</h1>'+'<div class="line"></div>'+'<p></p>',
    img: 'image/Poker scraper/presentation  pokerpage.jpg'
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