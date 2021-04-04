class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log("This is working!");
  }
}

customElements.define("woof-tooltip", Tooltip);
