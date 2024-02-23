import botMsg from './botmsg';
import userMsg from './usermsg';

export default (data, bata) => (
  `
  <div class="ps-1 container-fluid row">
    ${bata.map((response) => botMsg(response)).join('')}
  </div>
  <div class="pe-1 container-fluid row">
    ${data.map((message) => userMsg(message)).join('')}
  </div>
  `
);
