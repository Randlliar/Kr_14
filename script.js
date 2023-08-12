window.onload = function () {

  let password = document.getElementById('password');
  let fullName = document.getElementById('fullName');
  let email = document.getElementById('email');
  let repeatPassword = document.getElementById('repeat-password');
  let popup = document.getElementsByClassName('popup')[0];
  let haveAccount = document.getElementById('acc');
  let buttonSubmit = document.getElementById('button-submit');

  console.log(password.value)


  fullName.onkeydown = (ev) => {
    // console.log(ev.key)
    let number = parseInt(ev.key);

    if (!isNaN(number)) {
      return false;
    }
  }

  let userName = document.getElementById('userName');

  userName.onkeydown = (ev) => {
    if ((ev.key === "." || ev.key === ",")) {
      return false;
    }
  }

  let checkbox = document.getElementById('checkbox');

  checkbox.onchange = () => {
    if (checkbox.checked) {
      console.log("Согласен");
    } else {
      console.log("Не согласен");
    }
  }


  let signUpBtn = document.getElementById('sign-up-btn');

  signUpBtn.onclick = function () {

    if (!fullName.value) {
      alert("Заполните поле Full Name");
      return;
    }

    if (!userName.value) {
      alert("Заполните поле Your username");
      return;
    }

    if (!email.value) {
      alert("Заполните поле E-mail");
      return;
    }

    if (!password.value) {
      alert("Заполните поле Password");
      return;
    }

    if (!repeatPassword.value) {
      alert("Заполните поле Repeat Password");
      return;
    }

    if (password.value.length < 8) {
      alert(" Пароль должен содержать не менее 8 символов");
      return;
    }

    if (password.value !== repeatPassword.value) {
      alert("Пароли не совпадают");
      return;
    }

    if (!checkbox.checked) {
      alert("Вы должны согласиться с правилами");
      return;
    }

    popup.style.display = 'flex';
}

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

  buttonSubmit.onclick = logInPage;
  haveAccount.onclick = logInPage;

}