import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";  
    this.emit(Application.events.READY);
    this.div = document.getElementById("emojis")
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    this.removeAllChildNodes(this.div)
    
    this.emojis.forEach(emoji => {
      const p = document.createElement("p")
      p.textContent = emoji;
      this.div.appendChild(p)
    })
  }

  addBananas() {
   const monkeys = this.emojis.map(element => {
      return element += this.banana
    })

    this.setEmojis(monkeys)
  }

   removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
}
