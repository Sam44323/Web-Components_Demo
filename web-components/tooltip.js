class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.tooltipContainer;
    this._tooltipText = this.getAttribute("text")
      ? this.getAttribute("text")
      : "This is working!";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      div{
        background-color: salmon;
        padding: 10px;
        position: absolute;
        z-index: 10;
      }
    </style>
    <slot>Some default!</slot>
    <span> (?) </span>`;
  }

  connectedCallback() {
    const tooltipIcon = this.shadowRoot.querySelector("span");
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._removeTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this.tooltipContainer = document.createElement("div");
    this.tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this.tooltipContainer);
  }
  _removeTooltip() {
    this.shadowRoot.removeChild(this.tooltipContainer);
  }
}
customElements.define("woof-tooltip", Tooltip);
