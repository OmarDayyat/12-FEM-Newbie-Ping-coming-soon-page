const email = document.getElementById("email");
const form = document.getElementById("form");
const errorD = document.querySelector(".error-msg-desktop");

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (e) => {
  let msgs = [];

  if (email.value === "" || email.value == null) {
    errorD.style.display = "block";
    email.style.borderColor = "red";
    msgs.push("Email can't be empty");
  }

  if (!email.value.match(regex) && email.value !== "" && email.value != null) {
    errorD.style.display = "block";
    email.style.borderColor = "red";
    msgs.push("Please provide a valid email address");
  }

  if (msgs.length > 0) {
    e.preventDefault();
    errorD.innerText = msgs.join(',');
  }


  // console.log(msgs[0])

})

