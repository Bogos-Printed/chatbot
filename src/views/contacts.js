import botList from './botList';

export default (bot) => (
  `
  <div class=" col-3" id="contacts">
    <ul class="list-unstyled me-1">
    ${bot.map((detail) => botList(detail)).join('')}
    </ul>
  </div>
  `
);
