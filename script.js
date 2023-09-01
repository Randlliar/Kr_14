let userName = $('#userName');
let password = $('#password');
let fullName = $('#fullName');
let email = $('#email');
let repeatPassword = $('#repeat-password');
let checkbox = $('#checkbox');
let popup = $('.popup');
let signUpBtn = $('#sign-up-btn');
let submitBtn = $('#button-submit');
let account =  $('#acc').attr('disabled', true);
let inputBlock = $('.input-block')
// userName.on( "keydown", function() {
//   console.log(userName.val());
// } );

userName.val('asd');
fullName.val('asd');
password.val('asdaSD123');
repeatPassword.val('asdaSD123');
email.val('sharkevich.i@inbox.ru');


function checkInput(input, reg) {
  if (!input.val().match(reg)) {
    input.css("border-color", "#ff0000");
    input.placeholder = 'Введите ' + input;
    return true;
  } else {
    input.css("border-color", "#636363");
    return false;
  }
}

let regName = /^[A-Za-z]+\s*$/;
let regUserName = /^[A-Za-z0-9_]+\s*$/;
let regEmail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
let regPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/

let hasError = false;

signUpBtn.on('click', function () {

  if (checkInput(fullName, regName)) {
    hasError = true;
    return;
  }

  if (checkInput(userName, regUserName)) {
    hasError = true;
    return;
  }

  if (checkInput(email, regEmail)) {
    hasError = true;
    return;
  }

  if (checkInput(password, regPassword)) {
    hasError = true;
    return;
  }

  if (repeatPassword.val() !== password.val() || !repeatPassword.val()) {
    hasError = true;
    repeatPassword.css("border-color", "#ff0000");
    repeatPassword.placeholder = 'Введите ' + repeatPassword;
  } else {
    repeatPassword.css("border-color", "#636363");
  }

  if (!checkbox.is(':checked')) {
    alert('Дайте свое согласие на обработку данных!');
    return;
  }

  popup.css('display', 'flex');
})

const clients = [];

submitBtn.on('click', function () {
  popup.css('display', 'none');

  const client = {};

  client.fullName = fullName.val();
  client.userName = userName.val();
  client.email = email.val();
  client.password = password.val();

  clients.push(client);
  localStorage.setItem('clients', JSON.stringify(clients));
  JSON.parse(localStorage.getItem('clients'));


  inputBlock[0].remove();
  inputBlock[1].remove();
  inputBlock[2].remove();
  $('.checkbox').remove();
  $('.input-value').val('');
  $('#title').val('Log in to the system');
  account.text('Registration');
  signUpBtn.text('Sign In');
  account.attr('disabled', false);

})

account.on('click', function () {
  location.reload();
  inputBlock[0].remove();
  inputBlock[1].remove();
  inputBlock[2].remove();
  $('.checkbox').remove();
})