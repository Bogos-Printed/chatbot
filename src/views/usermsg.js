// const submit = querySelector(button);
// submit.addEventListener('click', (event) => {
//   console.log('ping submit');
// });

export default (data) => (
  `
  <div class="col-6"></div>
  <div class="user container rounded mt-3 w-50 col-6 ">
    <p>${data}</p>
  </div>
  `
);
