import botMsg from './botmsg';
import userMsg from './usermsg';
import chatbar from './chatbar';

export default (data, bata) => (
  `
  <div class="pe-1 container-fluid row">
    ${data.map((message) => userMsg(message)).join('')}
  </div>  
  <div class="ps-1 container-fluid row">
    ${bata.map((response) => botMsg(response)).join('')}
  </div>
  ${chatbar()}
  `
);
