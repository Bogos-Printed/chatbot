import Nav from '../views/nav';
import Contacts from '../views/contacts';
import Chatbox from '../views/chatbox';

const Chatbot = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.data = [];
    this.commands = ['/weather', '/otherAPI'];
    this.dataBot = ['lets groove tonight', 'or not', 'i dont know, im a robot I cant dance', 'like at all'];
    this.bot = ['wa', 'Citizen 17', 'sometime i dream about cheese', 'bonk', 'waaaaa'];

    this.run();
  }

  render() {
    return `
    ${Nav()}
    <div class="d-flex flex-wrap min-vh-100" id="root">
      ${Contacts(this.bot)}
      <div class="col-9" id="chatbox">
        ${Chatbox(this.data, this.dataBot)}
        <div class="d-flex position-absolute bottom-0 end-0 mb-1 m-4 " id="bar">
          <input class="form-control" id="contentMsg" placeholder="message goes here"></input>
          <button type="submit" id="msgSend" class="btn btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    `;
  }

  getBar() {
    const messageButton = document.querySelector('#msgSend');
    const userInput = document.querySelector('#contentMsg');
    console.log('ping');
    console.log(this.commands);
    messageButton.addEventListener('click', () => {
      const userMessage = userInput.value;
      if (userMessage !== ' ') {
        this.data.push(userMessage);

        userInput.value = ' ';
      } else if (userMessage === this.commands) {
        console.log('poing');
      }

      this.el.innerHTML = this.render();
    });
  }

  run() {
    this.el.innerHTML = this.render();
    this.getBar();
  }
};

export default Chatbot;
