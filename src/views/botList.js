export default (detail) => {
  const botName = detail;

  return `
  <li class="botCs m-2 p-1">
    <img src="" class="rounded-circle w-25 mb-2">an img</img>
    <div>
      <p class="fw-bold">${botName}</p>
      <p>a bot like I</p>
    </div>
  </li>
  `;
};
