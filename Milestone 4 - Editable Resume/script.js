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
        var resumeOutput = "<h2>Resume</h2>\n      <p><strong>Name:</strong> <span id=\"editName\" class=\"editable\"> ".concat(name_1, " </span> </p>\n      <p><strong>Email:</strong> <span id=\"editEmail\" class=\"editable\"> ").concat(email, " </span> </p>\n      <p><strong>Phone:</strong> <span id=\"editPhone\" class=\"editable\"> ").concat(phone, " </span> </p>\n      \n      <h3>Education</h3>\n      <p id=\"editEducation\" class=\"editable\">").concat(education, "</p>\n      \n      <h3>Experience</h3>\n      <p id=\"editExperience\" class=\"editable\">").concat(experience, "</p>\n      \n      <h3>Skills</h3>\n      <p id=\"editSkills\" class=\"editable\">").concat(skill, "</p>");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("resume output element not found");
        }
    }
    else {
        console.error("form elements not found");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
