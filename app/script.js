//Global Variable inialization
const groupSelect = document.querySelector("#selectCategory");
const quizCatBox = document.querySelector("#QuizCategory");
const questionBox = document.querySelector("#Questions");

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
  {
    id: "cs2",
    question: "The C programming language was developed by?",
    options: [
      { id: "choice1", text: "Dennis Ritchie", isCorrect: true },
      { id: "choice2", text: "Brendan Eich", isCorrect: false },
      { id: "choice3", text: "Guido van Rossum", isCorrect: false },
      { id: "choice4", text: "Elon Musk", isCorrect: false },
    ],
    category: 1,
  },
  {
    id: "ec1",
    question: "Which of the following is an application of Zener diode?",
    options: [
      { id: "choice1", text: "Rectifier", isCorrect: false },
      { id: "choice2", text: "Amplifier", isCorrect: false },
      { id: "choice3", text: "Voltage Regulator", isCorrect: true },
      { id: "choice4", text: "Oscillator", isCorrect: false },
    ],
    category: 2,
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
  questionBox.appendChild(h1);

  const qnList = findQuestion(cat.id);
  updateUi(qnList);

  const backBtn = document.createElement("button");
  backBtn.innerText = "Go Back";
  backBtn.addEventListener("click", function () {
    // e.preventDefault();
    questionBox.style.visibility = "hidden";
    quizCatBox.style.visibility = "inherit";
  });
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("class", "submitBtn");

  submitBtn.type = "submit";
  submitBtn.innerText = "Check Answer";
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
  });
  questionBox.append(backBtn, submitBtn);
}

function findQuestion(questionId) {
  const filterArrray = questions.filter((qn) => qn["category"] == questionId);
  console.log(filterArrray.length);
  return filterArrray;
}
function updateUi(qnArray) {
  // clearApp();
  const form = document.createElement("form");
  form.setAttribute("id", "questionForm");
  for (let i = 0; i < qnArray.length; i++) {
    const question = displayQuestionCard(qnArray[i]);
    form.append(question);
    questionBox.append(form);
  }
  //   submitFn();
}

function displayQuestionCard(qn) {
  // Form styling
  const fieldset = document.createElement("fieldset");
  // Question displaying format
  const legend = document.createElement("legend");
  legend.innerText = qn["question"];
  const optionGrid = document.createElement("div");
  optionGrid.setAttribute("class", "grid-box");

  let option = qn["options"];
  console.log(option);
  for (let i = 0; i < option.length; i++) {
    const op = option[i];
    const optionDiv = document.createElement("div");
    const radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.name = qn["id"] + "qnCode";
    radioBtn.id = op["id"] + "btn";
    radioBtn.value = op["text"];
    const label = document.createElement("label");
    label.htmlFor = op["id"] + "btn";
    label.innerText = op["text"];
    optionDiv.append(radioBtn, label);
    optionGrid.append(optionDiv);
  }

  const displayAnswer = document.createElement("div");
  displayAnswer.setAttribute("class", "answerDiv");
  displayAnswer.innerText = "Answer: " + qn["correct"];
  displayAnswer.style.visibility = "hidden";

  fieldset.append(legend, optionGrid, displayAnswer);
  return fieldset;
}
