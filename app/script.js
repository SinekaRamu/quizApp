//Global Variable inialization
const groupSelect = document.querySelector("#selectCategory");
const quizCatBox = document.querySelector("#QuizCategory");
const questionBox = document.querySelector("#Questions");
const form = document.querySelector("#question-form");

const categories = [
  {
    id: 1,
    name: "Computer Science",
    value: "computer",
  },
  {
    id: 2,
    name: "Electronis",
    value: "electronics",
  },
  {
    id: 3,
    name: "Fundamental Physics",
    value: "physics",
  },
];

const questions = [
  {
    id: "cs1",
    question: "what is brain of computer?",
    options: [
      { id: "choice1", text: "CPU", isCorrect: true },
      { id: "choice2", text: "mouse", isCorrect: false },
      { id: "choice3", text: "monitor", isCorrect: false },
      { id: "choice4", text: "ALU", isCorrect: false },
    ],
    category: 1,
  },
];
//appends an array of options to a given select element
function appendOptions(selectElement, options) {
  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    const optionElement = document.createElement("option");
    optionElement.textContent = option.name;
    optionElement.value = option.value;
    selectElement.appendChild(optionElement);
  }
}

// append group options
appendOptions(groupSelect, categories);

// Get the selected value and move to the respected page when the button is clicked
document.getElementById("proceed").addEventListener("click", function (e) {
  e.preventDefault();
  clearApp();
  openQuestions();
});

function clearApp() {
  questionBox.innerHTML = " ";
}
function openQuestions() {
  const selectedCat = categories.findIndex(
    (cat) => cat.value == groupSelect.value
  );
  quizCatBox.style.visibility = "collapse";
  questionBox.style.visibility = "inherit";
  const cat = categories[selectedCat];
  questionCategory(cat);
}

function questionCategory(cat) {
  const h1 = document.createElement("h1");
  h1.innerText = cat.name;
  const backBtn = document.createElement("button");
  backBtn.innerText = "Go Back";
  questionBox.append(h1, backBtn);
  backBtn.addEventListener("click", function () {
    // e.preventDefault();
    questionBox.style.visibility = "hidden";
    quizCatBox.style.visibility = "inherit";
  });
}
