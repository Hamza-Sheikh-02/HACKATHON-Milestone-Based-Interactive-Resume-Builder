document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillElement = document.getElementById("skills") as HTMLInputElement; // Updated here

    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skill = skillElement.value;

      const resumeOutput = `<h2>Resume</h2>
      <p><strong>Name:</strong> <span id="editName" class="editable"> ${name} </span> </p>
      <p><strong>Email:</strong> <span id="editEmail" class="editable"> ${email} </span> </p>
      <p><strong>Phone:</strong> <span id="editPhone" class="editable"> ${phone} </span> </p>
      
      <h3>Education</h3>
      <p id="editEducation" class="editable">${education}</p>
      
      <h3>Experience</h3>
      <p id="editExperience" class="editable">${experience}</p>
      
      <h3>Skills</h3>
      <p id="editSkills" class="editable">${skill}</p>`;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
      } else {
        console.error("resume output element not found");
      }
    } else {
      console.error("form elements not found");
    }
  });

function makeEditable() {
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((element) => {
    element.addEventListener("click", function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
