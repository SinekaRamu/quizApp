const groupSelect = document.getElementById("selectCategory");
const categories = [
  {
    id: 1,
    name: "Computer Science",
    value: "computer",
  },
  {
    id: 2,
    name: "Electronis",
    value: "electro",
  },
  {
    id: 3,
    name: "Fundamental Physics",
    value: "physics",
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
  const selectedValue = groupSelect.value;
  console.log(selectedValue);
});
