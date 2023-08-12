function logInPage() {
  console.log(document.getElementsByClassName('input-block')[4]);

  document.getElementById('title').innerText = "Log in to the system";
  document.getElementsByClassName('input-block')[4].remove();
  document.getElementsByClassName('input-block')[2].remove();
  document.getElementsByClassName('input-block')[0].remove();
  document.getElementById('sign-up-btn').innerText = "Log In";

  document.getElementsByClassName('checkbox')[0].remove();
  document.getElementsByClassName('account')[0].remove();
  popup.style.display = 'none';
  userName.value = "";
  password.value = "";

  signUpBtn.onclick = function () {
    if (!password.value) {
      alert("Неверно введен пароль");
      return;
    }
    if (!userName.value) {
      alert("Неверно введено имя пользователя");
      return;
    }
    alert(`Добро пожаловать, ${userName.value}!`)
  }
}