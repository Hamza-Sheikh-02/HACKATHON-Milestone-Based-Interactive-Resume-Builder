"use strict";
var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skills"); // Updated here
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        var resumeOutput = "<h2>Resume</h2>\n      <p><strong>Name:</strong> ".concat(name_1, " </p>\n      <p><strong>Email:</strong> ").concat(email, " </p>\n      <p><strong>Phone:</strong> ").concat(phone, " </p>\n      \n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      \n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      \n      <h3>Skills</h3>\n      <p>").concat(skill, "</p>"); // Updated this label
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("resume output element not found");
        }
    }
    else {
        console.error("form elements not found");
    }
});
