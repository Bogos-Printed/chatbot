import Nav from '../views/nav';
import Contacts from '../views/contacts';
import Chatbox from '../views/chatbox';

const Chatbot = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.data = [];
    this.commands = ['/weather', '/otherAPI'];
    this.dataBot = [];
    this.bot = ['The Bot', 'Big Bot', 'Soul weatherman'];

    this.run();
  }

  render() {
    return `
    ${Nav()}
    <div class="d-flex flex-wrap min-vh-100" id="root">
      ${Contacts(this.bot)}
      <div class="col-9" id="chatbox">
        ${Chatbox(this.data, this.dataBot)}
      </div>
    </div>
    `;
  }

  updateBox() {
    const chatbox = document.querySelector('#chatbox');
    chatbox.innerHTML = Chatbox(this.data, this.dataBot);
  }

  setupEventListeners() {
    this.el.addEventListener('click', (event) => {
      if (event.target.id === 'msgSend') {
        this.sendMessage();
      }
    });

    const userInput = document.querySelector('#contentMsg');
    userInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.sendMessage();
      }
    });
  }

  sendMessage() {
    const userInput = document.querySelector('#contentMsg');
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    this.data.push(userMessage);
    this.dataBot.push('hello');
    this.updateBox();
    userInput.value = '';

    if (this.commands.includes(userMessage)) {
      this.dataBot.push('waaaaa');
      this.updateBox();
    }
  }

  run() {
    this.el.innerHTML = this.render();
    this.setupEventListeners();
  }
};

export default Chatbot;
