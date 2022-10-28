import axios from 'https://cdn.skypack.dev/axios';

// import axios from 'axios';

const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map((el) =>
      resultsContainer.innerHTML +=
      `<div class="response-container">
    <p> ID: <span>${el.id}</span></p>
    <p> Name: <span>${el.name}</span><p>
    <p> E-mail: <span>${el.email}</span><p>
    <p>Website: <span>${el.website}</span></p>
    <p> Company: <span>${el.company.name}</span><p>
    </div>`
    ))
})


