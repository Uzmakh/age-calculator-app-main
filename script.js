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
let isValid = false;
// validation for day
inputDay.addEventListener("input", (e) => {
    if (inputDay.value <= 0 || inputDay.value > 31) {
        inputDay.style.border = "1px solid red";
        errorDay.textContent = "Must be a valid date";
        isValid = false;
    } else {
        inputDay.style.border = "2px solid #854dff";
        isValid = true;
        errorDay.textContent = "";
    }
    if (inputDay.value === "") {
        isValid = false;
        errorDay.textContent = "The field is required.";
    }
});
// validation for month
inputMonth.addEventListener("input", (e) => {
    if (inputMonth.value <= 0 || inputDay.value > 12) {
        inputMonth.style.border = "1px solid red";
        errorMonth.textContent = "Must be a valid month";
        isValid = false;
    } else {
        inputMonth.style.border = "2px solid #854dff";
        isValid = true;
        errorMonth.textContent = "";
    }
    if (inputMonth.value === "") {
        isValid = false;
        errorMonth.textContent = "The field is required.";
    }
});
// validation for year
inputYear.addEventListener("input", (e) => {
    if (inputYear.value <= 0 || inputYear.value > 2024) {
        inputYear.style.border = "1px solid red";
        errorYear.textContent = "Must be a valid year";
        isValid = false;
    } else {
        inputYear.style.border = "2px solid #854dff";
        isValid = true;
        errorYear.textContent = "";
    }
    if (inputYear.value === "") {
        isValid = false;
        errorYear.textContent = "The field is required.";
    }
});

function calculateDate() {
    if (isValid) {
        let birthDay = `${inputDay.value}/${inputMonth.value}/${inputYear.value}`;
        let birthDayObj = new Date(birthDay);
        let ageDiffMilli = Date.now() - birthDayObj;
        let ageDate = new Date(ageDiffMilli);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth() - 1;
        let ageDay = ageDate.getUTCDay();

        // consoling
        console.log(birthDay);
        console.log(birthDayObj);
        console.log(ageDiffMilli);
        console.log(ageDate);
        console.log(ageDay);
        console.log(ageMonth);
        console.log(ageYear);
        // Displaying output
        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYear;
    } else {
        alert("error");
    }
}
submitBtn.addEventListener("click", calculateDate);
