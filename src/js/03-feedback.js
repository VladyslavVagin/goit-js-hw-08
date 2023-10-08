// import the THROTTLE
var throttle = require('lodash.throttle');

// SET CONST VALUES 
const feedbackForm = document.querySelector('.feedback-form');
const inputBox = document.querySelector('input');
const msg = document.querySelector('textarea');
const FEEDBACK = "feedback-form-state";
let formData = { email: '', message: '' };

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
    if (savedInputData) {
        const inputsDataSaved = JSON.parse(savedInputData);
        inputBox.value = inputsDataSaved.email;
        msg.value = inputsDataSaved.message;
        formData = { email: `${inputBox.value}`, message: `${msg.value}` };
    };
};

// SUMBIT FORM + RESET INPUTS + REMOVE FROM LOCAL STORAGE INPUT DATA
feedbackForm.addEventListener("submit", e => {
    e.preventDefault();
    if (inputBox.value && msg.value) {
        e.currentTarget.reset();
        localStorage.removeItem(FEEDBACK);
        console.log(formData);
    } else {
        alert("ATTENTION !!! PLEASE, ALL FIELDS SHOULD BE FILLED !!!!")
    }

});

