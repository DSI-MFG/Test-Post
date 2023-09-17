function check(form) {
  if (
    form.userid.value == CONFIG.username &&
    form.pswrd.value == CONFIG.password
  ) {
    document.querySelector(".login-card").style.display = "none";
    document.querySelector(".content-card").style.display = "block";
    fetchDownloads("DSI-MFG", "Test-Post", "docs");
    fetchReadme("DSI-MFG", "Test-Post", "docs");
  } else if (form.userid.value == username) {
    alert("Incorrect Password");
  } else {
    alert("Incorrect Username or Password");
  }
}
