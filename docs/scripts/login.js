function check(form) {
  username = "DSI";
  password = "DSI1186";
  if (form.userid.value == username && form.pswrd.value == password) {
    document.querySelector(".login-card").style.display = "none";
    document.querySelector(".content-card").style.display = "block";
  } else if (form.userid.value == username) {
    alert("Incorrect Password");
  } else {
    alert("Incorrect Username or Password");
  }
}
