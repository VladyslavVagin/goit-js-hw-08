// import the THROTTLE
var throttle = require('lodash.throttle');

// SET CONST VALUES 
const feedbackForm = document.querySelector('.feedback-form');
const inputBox = document.querySelector('input');
const message = document.querySelector('textarea');
const FEEDBACK = "feedback-form-state";
const formData = {};

// ADD EVENT LISTENER FOR INPUT FORM + ADD INPUT DATA TO LOCAL STORAGE
feedbackForm.addEventListener("input", throttle((e => {
    const value = e.target.value;
    formData[e.target.name] = value;
    localStorage.setItem(FEEDBACK, JSON.stringify(formData));
}), 500));

// IF WEBSITE RENEW (AND NO SUBMIT!!!) ALL DATA REMAIN IN INPUT AREA
showDataSaved();

function showDataSaved() {
    const savedInputData = localStorage.getItem(FEEDBACK);
    console.log(savedInputData);
    if (savedInputData) {
        const inputsDataSaved = JSON.parse(savedInputData);
        inputBox.value = inputsDataSaved.email;
        message.value = inputsDataSaved.message;
    };
};

// SUMBIT FORM + RESET INPUTS + REMOVE FROM LOCAL STORAGE INPUT DATA
feedbackForm.addEventListener("submit", e => {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK);
});

