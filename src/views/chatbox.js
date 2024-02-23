import botMsg from './botmsg';
import userMsg from './usermsg';

export default (response, message) => (
  `
  <div class="ps-1 container-fluid row">
    <div class="ps-1 container-fluid row">
      ${botMsg(response)}
    </div>
    <div class="pe-1 container-fluid row">
      ${userMsg(message)}
    </div>
  </div>
  `
);
