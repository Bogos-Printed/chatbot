import Chatbox from '../views/chatbox';
import Contacts from '../views/contacts';
import Nav from '../views/nav';

const Chatbot = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
    ${Nav()}
    <div class="d-flex flex-wrap min-vh-100" id="root">
      ${Contacts()}
      ${Chatbox()}
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Chatbot;
