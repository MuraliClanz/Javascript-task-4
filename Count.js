
const form = document.querySelector('form');
const inputField = document.getElementById('input');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', event => {
  event.preventDefault();
  const str = inputField.value;
  const counts = new Map();
  
  for (const ch of str) {
    const count = counts.get(ch) ?? 0;
    counts.set(ch, count + 1);
  }
  
//   outputDiv.innerHTML = '';
  for (const [ch, count] of counts) {
    const p = document.createElement('p');
    p.textContent = `"${ch}" count: ${counts.get(ch)}`;
    outputDiv.appendChild(p);
  }
});