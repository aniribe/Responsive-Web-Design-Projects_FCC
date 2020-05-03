export class Card {
  constructor() {
    this.leftSideBtns = document
      .getElementById("left-side")
      .querySelector("ul").children;
    this.sections = document.getElementById("survey-form").children;
    this.border = document.getElementById("line");

    this.addListeners();
  }

  addListeners() {
    for (let i = 0; i < this.leftSideBtns.length; i++) {
      this.leftSideBtns[i].addEventListener("click", () => {
        let id = this.leftSideBtns[i].id;

        this.removeActiveFromBtns();
        this.removeActiveFromSection();

        this.leftSideBtns[i].classList.add("active");

        this.sections[id - 1].classList.add("active");
        this.changeBorderPosition(id);
      });
    }
  }

  removeActiveFromBtns() {
    for (let i = 0; i < this.leftSideBtns.length; i++) {
      this.leftSideBtns[i].classList.remove("active");
    }
  }

  removeActiveFromSection() {
    for (let i = 0; i < this.sections.length; i++) {
      this.sections[i].classList.remove("active");
    }
  }

  changeBorderPosition(id) {
    this.border.classList = "";

    switch (id) {
      case "1":
        this.border.classList.add("one");
        break;

      case "2":
        this.border.classList.add("two");
        break;

      case "3":
        this.border.classList.add("three");
        break;

      case "4":
        this.border.classList.add("four");
        break;
    }
  }
}
