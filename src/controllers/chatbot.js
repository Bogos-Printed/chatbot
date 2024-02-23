import Nav from '../views/nav';
import Contacts from '../views/contacts';
import Chatbox from '../views/chatbox';

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
      <div class="col-9" id="chatbox">
        ${Chatbox('metal pipe vfx', 'flabbergasted')}
        <div class="d-flex position-absolute bottom-0 end-0 mb-1 m-4 " id="bar">
          <input class="form-control" placeholder="message goes here"></input>
          <button type="submit" class="btn btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Chatbot;
