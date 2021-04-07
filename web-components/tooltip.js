class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.tooltipContainer;
    this._tooltipText = this.getAttribute("text")
      ? this.getAttribute("text")
      : "This is working!";
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._removeTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this.tooltipContainer = document.createElement("div");
    this.tooltipContainer.textContent = this._tooltipText;
    this.tooltipContainer.style.backgroundColor = "salmon";
    this.tooltipContainer.style.padding = "10px";
    this.tooltipContainer.style.position = "absolute";
    this.tooltipContainer.style.zIndex = "10";
    this.shadowRoot.appendChild(this.tooltipContainer);
  }
  _removeTooltip() {
    this.shadowRoot.removeChild(this.tooltipContainer);
  }
}
customElements.define("woof-tooltip", Tooltip);
