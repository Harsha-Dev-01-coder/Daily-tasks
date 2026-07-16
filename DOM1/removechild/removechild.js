const container = document.createElement('div');

const paragraph = document.createElement('p');
paragraph.textContent = 'This paragraph will be removed.';

container.appendChild(paragraph);

document.body.appendChild(container);
container.removeChild(paragraph);