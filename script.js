let userName = $('#userName');
let password = $('#password');
let fullName = $('#fullName');
let email = $('#email');
let repeatPassword = $('#repeat-password');
let checkbox = $('#checkbox');
let checkboxBlock = $('.checkbox');
let popup = $('.popup');
let signUpBtn = $('#sign-up-btn');
let submitBtn = $('#button-submit');
let account = $('#acc');
let inputBlock = $('.input-block');
let title = $('#title');

userName.val('asd');
fullName.val('asd');
password.val('asdaSD12*3');
repeatPassword.val('asdaSD12*3');
email.val('sharkevich.i@inbox.ru');

inputBlock.append('<div class="error">');
checkboxBlock.append('<div class="error">');


function checkInput(input, reg) {
  if (!input.val().match(reg)) {
    input.css("border-color", "#ff0000");
    input.attr('placeholder', 'Введите ' + input.prev().html());

    return true;
  } else {
    input.css("border-color", "#636363");
    return false;
  }
}

function clearErrors(error) {
  for (let i = 0; i < $('.error').length; i++) {
    error.text(``);
  }
}


let regName = /^[A-Za-z]+\s*$/;
let regUserName = /^[A-Za-z0-9_]+\s*$/;
let regEmail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
let regPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[ab*c]).{8,})/


account.on('click', function () {
  goToLogIn();
})


signUpBtn.on('click', function () {


  let hasError = false;

  clearErrors($('.error'));

  if (checkInput(fullName, regName)) {
    hasError = true;
    $(fullName).next().text(`Full Name может содержать только буквы и пробел!`);
  }

  if (checkInput(userName, regUserName)) {
    hasError = true;
    $(userName).next().text(`Your username - может содержать только буквы, цифры, символ подчеркивания и тире`);
  }

  if (checkInput(email, regEmail)) {
    hasError = true;
    $(email).next().text('Введите корректый e-mail!');
  }

  if (checkInput(password, regPassword)) {
    hasError = true;
    $(password).next().text('Пароль должен содержать минимум 8 символов и хотя бы одну букву в верхнем регистре, цифру и спецсимовол!');
  }

  if (checkInput(repeatPassword, regPassword)) {
    hasError = true;
  }

  if (repeatPassword.val() !== password.val()) {
    hasError = true;
    repeatPassword.css("border-color", "#ff0000");
    $(repeatPassword).next().text('Пароли не совпадают');
  }

  if (!checkbox.is(':checked')) {
    hasError = true;
    $('.input-block_checkbox').next().text('Пользователь должен согласиться с условиями');
  }


  if (hasError) {
    return;
  }

  popup.css('display', 'flex');
})



const clients = [];

function goToLogIn() {
  inputBlock[0].remove();
  inputBlock[2].remove();
  inputBlock[4].remove();
  checkboxBlock.remove();
  console.log(localStorage);
  $('.input-value').val('');
  title.val('Log in to the system');
  account.text('Registration');
  signUpBtn.text('Sign In');

  account.off('click').on('click', function () {
    location.reload();
  })
}


submitBtn.on('click', function () {
  popup.css('display', 'none');



  class Client {
    constructor(fullName, userName, email, password) {
      this.fullName = fullName;
      this.userName = userName;
      this.email = email;
      this.password = password;
    }
  }

  let clientsArray = JSON.parse(localStorage.getItem('clients')) || [];

  if (!clientsArray) {
    clientsArray.push(new Client(
      userName.val('asd'),
      fullName.val('asd'),
      password.val('asdaSD123'),
      email.val('sharkevich.i@inbox.ru')
    ))
  } else {
    clientsArray.push(new Client(
      fullName.val(),
      userName.val(),
      email.val(),
      password.val(),
    ));
  }

  localStorage.setItem('clients', JSON.stringify(clientsArray));



  goToLogIn();

  signUpBtn.off('click').on('click', function () {
    clearErrors($('.error'));

    const find = clientsArray.find((client) => {
      return userName.val() === client.userName;
    })
    if (!find) {
      $(userName).next().text(`Такой пользователь не зарегистрирован!`);
      return;
    }
    if (password.val() !== find.password) {
      $(password).next().text(`Неверый пароль`);
      return;
    }
    title.text('Welcome, ' + fullName.val());
    signUpBtn.text('Exit');
    inputBlock[1].remove();
    inputBlock[3].remove();
    account.remove();

    signUpBtn.off('click').on('click', function () {
      location.reload();
    })
  })
})

