export default (data) => {
  const message = data;

  return `
  <div class="col-6"></div>
  <div class="user container rounded mt-3 w-50 col-6 ">
    <p>${message}</p>
  </div>
  `;
};
