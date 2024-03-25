export class Tooltip {
  constructor() {
    this._tooltip = [];
  }

  addTooltip(element) {

    const tooltipElement = document.createElement("div");
    tooltipElement.classList.add("tooltip-wrapper");

    const tooltipTitle = document.createElement("h3");
    tooltipTitle.classList.add("tooltip-title");
    tooltipTitle.textContent = "Popover title";

    const tooltipText = document.createElement("div");
    tooltipText.classList.add("tooltip-text");
    tooltipText.textContent =
      "And here iss some amazing content. It is very engaging. Right?";

    tooltipElement.prepend(tooltipTitle);
    tooltipElement.append(tooltipText);
    document.body.append(tooltipElement);

    const {left} = element.getBoundingClientRect();
    tooltipElement.style.bottom =
      tooltipElement.offsetHeight + element.offsetHeight + 10 + "px";
    tooltipElement.style.left =
      left + (element.offsetWidth - tooltipElement.offsetWidth) / 2 - 8 + "px";
  }

  removeTooltip() {
    const currentTooltip = document.querySelector(".tooltip-wrapper");
    currentTooltip.remove();
  }
}