function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    const emailInput = document.getElementById("email-input");
    const emailMessage = document.getElementById("invalid-message");
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      event.preventDefault();

      emailInput.classList.add("invalid-email");
      emailMessage.style.display = "inline";
    } else {
      emailInput.classList.contains("invalid-email") &&
        emailInput.classList.remove("invalid-email");

      emailMessage.style.display = "none";
    }
  });

document
  .getElementById("subscribe-button")
  .addEventListener("click", function (event) {
    const emailInput = document.getElementById("sub-email-input");
    const emailMessage = document.getElementById("sub-invalid-message");
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      event.preventDefault();

      emailInput.classList.add("invalid-email");
      emailMessage.style.display = "inline";
    } else {
      emailInput.classList.contains("invalid-email") &&
        emailInput.classList.remove("invalid-email");

      emailMessage.style.display = "none";
    }
  });
