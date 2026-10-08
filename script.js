'use strict';

document.querySelector('#features-button').addEventListener('click', () => {
  document.querySelector('#features-dialog').showModal();
});

const aboutButton = document.querySelector('#about-button');
const aboutDialog = document.querySelector('#about-dialog');

aboutButton.addEventListener('click', () => {
  aboutDialog.showModal();
});

const schoolsButton = document.querySelector('#schools-button');
const schoolsDialog = document.querySelector('#schools-dialog');

schoolsButton.addEventListener('click', () => {
  schoolsDialog.showModal();
});

const inquireDialog = document.querySelector('#inquire-dialog');
const copyStatus = document.querySelector('#copy-status');

document.querySelector('#inquire-button').addEventListener('click', () => {
  copyStatus.textContent = '';
  inquireDialog.showModal();
});

document.querySelector('#copy-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('lukasrodban@gmail.com');
    copyStatus.textContent = 'Email address copied.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(inquireDialog.querySelector('a'));
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Press Ctrl+C (or Command+C) to copy the selected email address.';
  }
});
