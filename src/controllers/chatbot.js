import Nav from '../views/nav';
import Contacts from '../views/contacts';
import Chatbox from '../views/chatbox';

const Chatbot = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.data = [];
    this.commands = ['/bored', '/joke', '/advice', '/otherAPI'];
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
    this.setupEventListeners();
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
    this.updateBox();
    userInput.value = '';

    if (this.commands.includes(userMessage)) {
      if (userMessage === '/joke') {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist').then((response) => {
          if (!response.ok) {
            this.dataBot.push('Sorry to say this, but it seems im out of jokes at the moment');
          }
          return response.json();
        }).then((data) => {
          const joke = data.joke;
          const setup = data.setup;
          const delivery = data.delivery;
          if (joke != null) {
            this.dataBot.push(joke);
            console.log(data.category);
            this.updateBox();
          } else {
            this.dataBot.push(setup + delivery);
          }
          this.updateBox();
        }).catch((error) => {
          console.error('error with fetch:', error);
          this.updateBox();
        });
      } else if (userMessage === '/bored') {
        fetch('https://www.boredapi.com/api/activity/').then((response) => {
          if (!response.ok) {
            this.dataBot.push('I don t have any activities for you at the moment');
            this.updateBox();
          }
          return response.json();
        }).then((data) => {
          const activity = data.activity;
          if (!activity) {
            console.log('no activities');
          }
          this.dataBot.push(activity);
          this.updateBox();
        }).catch((error) => {
          console.error('error:', error);
        });
        this.updateBox();
      } else if (userMessage === '/advice') {
        fetch('https://api.adviceslip.com/advice').then((response) => {
          if (!response.ok) {
            this.dataBot.push('I don t have any advices for you at the moment');
            this.updateBox();
          }
          return response.json();
        }).then((data) => {
          const advice = data.slip.advice;
          if (!advice) {
            console.log('no advices');
          }
          this.dataBot.push(advice);
          this.updateBox();
        }).catch((error) => {
          console.error('error:', error);
        });
        this.updateBox();
      }
    } else {
      this.dataBot.push('hello');
      this.updateBox();
    }
  }

  run() {
    this.el.innerHTML = this.render();
    this.setupEventListeners();
  }
};

export default Chatbot;
