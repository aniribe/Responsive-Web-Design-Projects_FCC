const leftSideBtns = [];
let sections;
const presonalBtn = document.getElementById("1");
const favoriteBtn = document.getElementById("2");
const improvingBtn = document.getElementById("3");
const commentBtn = document.getElementById("4");
const border = document.getElementById("line");
const personalSection = document.getElementById("personal-section");
const favoriteSection = document.getElementById("favorite-section");
const improvingSection = document.getElementById("improving-section");
const commentSection = document.getElementById("comment-section");
const modeBtn = document.getElementById("modeBtn");
const icon = modeBtn.querySelector(".fas");
let bodyElement = document.querySelector("body");

initializeLeftSideBtns();
initializeSections();

modeBtn.addEventListener("click", function () {
  bodyElement.classList.toggle("dark");

  if (bodyElement.className === "dark") {
    // modeBtn.querySelector(".fas").classList.remove("fa-moon");
    // modeBtn.querySelector(".fas").classList.add("fa-sun");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    // modeBtn.querySelector(".fas").classList.remove("fa-sun");
    // modeBtn.querySelector(".fas").classList.add("fa-moon");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

presonalBtn.addEventListener("click", function () {
  let id = this.id;

  removeActiveFromBtns();
  removeActiveFromSection();

  this.classList.add("active");
  sections[id - 1].classList.add("active");
  changeBorderPosition(id);

  // border.style.top = "11%";
  // personalSection.style.top = "20px";
});

favoriteBtn.addEventListener("click", function () {
  let id = this.id;

  removeActiveFromBtns();
  removeActiveFromSection();

  this.classList.add("active");
  sections[id - 1].classList.add("active");

  changeBorderPosition(id);
  // border.style.top = "30%";
  // favoriteSection.style.top = "20px";
});

improvingBtn.addEventListener("click", function () {
  let id = this.id;

  removeActiveFromBtns();
  removeActiveFromSection();

  this.classList.add("active");
  sections[id - 1].classList.add("active");

  changeBorderPosition(id);
  // border.style.top = "50%";
  // favoriteSection.style.top = "20px";
});

commentBtn.addEventListener("click", function () {
  let id = this.id;

  removeActiveFromBtns();
  removeActiveFromSection();

  this.classList.add("active");
  sections[id - 1].classList.add("active");

  changeBorderPosition(id);
  // border.style.top = "70%";
  // favoriteSection.style.top = "20px";
});

function initializeLeftSideBtns() {
  for (let i = 1; i < 5; i++) {
    leftSideBtns.push(document.getElementById(i));
  }
}

function initializeSections() {
  sections = document.getElementById("survey-form").children;
  console.log(sections);
}

function removeActiveFromBtns() {
  for (let i = 0; i < leftSideBtns.length; i++) {
    leftSideBtns[i].classList.remove("active");
  }
}

function removeActiveFromSection() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
}

function changeBorderPosition(id) {
  border.classList = "";

  switch (id) {
    case "1":
      border.classList.add("one");
      break;

    case "2":
      border.classList.add("two");
      break;

    case "3":
      border.classList.add("three");
      break;

    case "4":
      border.classList.add("four");
      break;
  }
}
