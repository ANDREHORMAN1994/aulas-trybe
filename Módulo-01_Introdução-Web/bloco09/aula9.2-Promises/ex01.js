const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = (callback) => {
  const div = document.createElement('div');
  const ol = document.createElement('ol');
  const li = document.createElement('li');
  document.body.appendChild(div);
  div.appendChild(ol);
  ol.appendChild(li);
  li.innerText = callback;
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => fetchJoke(data.joke));
