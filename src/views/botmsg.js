export default (data) => {
  const botMsg = data;

  return `
  <div class="bot rounded mt-3 w-50 col-6">
    <p>${botMsg}</p>
  </div>
  <div class="col-6"></div>
  `;
};
