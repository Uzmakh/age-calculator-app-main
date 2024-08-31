// Defining input elements as variables
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

//  Defining output elements as variables
const outputDay = document.querySelector(".output-day");
const outputMonth = document.querySelector(".output-month");
const outputYear = document.querySelector(".output-year");

// Defining error elements as variables
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

const submitBtn = document.querySelector(".submit-btn");

// Validation
let isDayValid = false;
let isMonthValid = false;
let isYearValid = false;

// validation for day
inputDay.addEventListener("input", (e) => {
    if (inputDay.value <= 0 || inputDay.value > 31) {
        inputDay.style.border = "1px solid red";
        errorDay.textContent = "Must be a valid date";
        isDayValid = false;
    } else {
        inputDay.style.border = "2px solid #854dff";
        isDayValid = true;
        errorDay.textContent = "";
    }
    if (inputDay.value === "") {
        isDayValid = false;
        errorDay.textContent = "The field is required.";
    }
});
// validation for month
inputMonth.addEventListener("input", (e) => {
    if (inputMonth.value <= 0 || inputMonth.value > 12) {
        inputMonth.style.border = "1px solid red";
        errorMonth.textContent = "Must be a valid month";
        isMonthValid = false;
    } else {
        inputMonth.style.border = "2px solid #854dff";
        isMonthValid = true;
        errorMonth.textContent = "";
    }
    if (inputMonth.value === "") {
        isMonthValid = false;
        errorMonth.textContent = "The field is required.";
    }
});
// validation for year
inputYear.addEventListener("input", (e) => {
    const currentYear = new Date().getFullYear();
    if (inputYear.value <= 0 || inputYear.value > currentYear) {
        inputYear.style.border = "1px solid red";
        errorYear.textContent = "Must be a valid year";
        isYearValid = false;
    } else {
        inputYear.style.border = "2px solid #854dff";
        isYearValid = true;
        errorYear.textContent = "";
    }
    if (inputYear.value === "") {
        isYearValid = false;
        errorYear.textContent = "The field is required.";
    }
});

function calculateDate() {
    // Check if all inputs are valid
    if (isDayValid && isMonthValid && isYearValid) {
        const birthDate = new Date(`${inputYear.value}-${inputMonth.value}-${inputDay.value}`);
        const today = new Date();

        let ageYear = today.getFullYear() - birthDate.getFullYear();
        let ageMonth = today.getMonth() - birthDate.getMonth();
        let ageDay = today.getDate() - birthDate.getDate();

        if (ageDay < 0) {
            ageMonth--;
            ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonth < 0) {
            ageYear--;
            ageMonth += 12;
        }

        // Displaying output
        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYear;
    } else {
        alert("Please correct the errors in the form.");
        // Reset the outputs to avoid showing NaN
        outputYear.textContent = "--";
        outputMonth.textContent = "--";
        outputDay.textContent = "--";
    }
}
submitBtn.addEventListener("click", calculateDate);
