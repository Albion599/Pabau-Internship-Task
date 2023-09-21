//To have one button "Shuffle Values" - when clicked, it should simply swap the order of the checkbox inputs that appear on the view
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("shuffleValues");
  button.addEventListener("click", switchLabels);

  function switchLabels() {
    const labels = document.querySelectorAll('label[for^="checkbox"]');

    const labelText = [];
    labels.forEach((label) => {
      labelText.push(label.textContent);
    });

    for (let i = labelText.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [labelText[i], labelText[j]] = [labelText[j], labelText[i]];
    }

    labels.forEach((label, index) => {
      label.textContent = labelText[index];
    });
  }
});


//To have one button "Change Values" - when clicked, it should simply change the values of the checkbox inputs that appear on the view into something of your choice
document.addEventListener("DOMContentLoaded", function () {
  const changeValuesButton = document.getElementById("changeValuesButton");
  const checkboxes = document.querySelectorAll(".checkbox-container input[type='checkbox']");

  const originalValues = Array.from(checkboxes).map(checkbox => checkbox.value);

  let isChanging = true;

  changeValuesButton.addEventListener("click", function () {
    const newValues = ["Intern", "Laptop", "Senior", "CEO"];

    checkboxes.forEach(function (checkbox, index) {
      if (isChanging) {
        checkbox.value = newValues[index % newValues.length];
      } else {
        checkbox.value = originalValues[index];
      }

      const label = document.querySelector('label[for="' + checkbox.id + '"]');
      label.textContent = checkbox.value;
    });

    isChanging = !isChanging;
  });
});






//To have one button "Show selected values" - when clicked, it should display on the screen the selected checkboxes.
document.addEventListener("DOMContentLoaded", function () {
  const showSelectedValueButton = document.getElementById("showSelectedValue");

  showSelectedValueButton.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".checkbox-container input[type='checkbox']");
    const selectedValues = [];

    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });

    alert("Selected values: " + selectedValues.join(", "));
  });
});
