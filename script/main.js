function calculateBMI() {
    var height = +document.querySelector(".height").value;
    var weight = +document.querySelector(".weight").value;

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.querySelector(".error").innerHTML = "Please enter valid height and weight.";
      return;
    }

    var bmi = weight / ((height/100) ** 2);
    var category;


    switch(true){
        case bmi < 18.5:
            category = "Underweight";
            break
        case (bmi >= 18.5 && bmi < 24.9):
            category = "Normal weight";
            break
        case (bmi >= 25 && bmi < 29.9):
            category = "Overweight";
        default:
            category = "Obese";
    }

    document.querySelector(".result").innerHTML = "Your BMI is " + bmi.toFixed(2) + ", which is " + category + ".";
  }