export class Mode {
  constructor() {
    this.modeBtn = document.getElementById("modeBtn");
    this.icon = modeBtn.querySelector(".fas");
    this.bodyElement = document.querySelector("body");

    this.addModeHandler();
  }

  addModeHandler() {
    this.modeBtn.addEventListener("click", () => {
      this.bodyElement.classList.toggle("dark");

      if (this.bodyElement.className === "dark") {
        this.icon.classList.remove("fa-moon");
        this.icon.classList.add("fa-sun");
      } else {
        this.icon.classList.remove("fa-sun");
        this.icon.classList.add("fa-moon");
      }
    });
  }
}
