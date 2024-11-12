function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return false;
  }
  if (email.length < 10) {
    alert("Please enter a valid Email.");
    return false;
  }
  if (message.length < 10) {
    alert(" Message must be at least 10 characters.");
    return false;
  }

  document.getElementById("thankyou").style.display = "block";
  document.querySelector("form").reset();
  return true;
}
