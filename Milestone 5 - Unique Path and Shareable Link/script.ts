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

    const userNameElement = document.getElementById(
      "userName"
    ) as HTMLInputElement;

    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillElement &&
      userNameElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skill = skillElement.value;
      const userName = userNameElement.value;
      const uniquePath = `${userName.replace(/\s+/g, "_")}_cv.html`;

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

      const downloadLink = document.createElement("a");
      downloadLink.href =
        "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
      downloadLink.download = uniquePath;
      downloadLink.text = "Download Your Resume";

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");
        resumeOutputElement.appendChild(downloadLink);

        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer);

        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download PDF";
        downloadButton.addEventListener("click", () => {
          window.print();
        });
        buttonsContainer.appendChild(downloadButton);

        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable Link";
        shareLinkButton.addEventListener("click", async () => {
          try {
            const shareableLink = `https://yourdomain.com/resumes/${name.replace(
              /\s+/g,
              "_"
            )}_cv.html`;
            await navigator.clipboard.writeText(shareableLink);
            alert("Shareable link copied to clipboard!");
          } catch (err) {
            console.error("Failed to copy link", err);
            alert("Failed to copy shareable link, Please try again");
          }
        });
        buttonsContainer.appendChild(shareLinkButton);

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
