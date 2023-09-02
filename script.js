let userName = $('#userName');
let password = $('#password');
let fullName = $('#fullName');
let email = $('#email');
let repeatPassword = $('#repeat-password');
let checkbox = $('#checkbox');
let popup = $('.popup');
let signUpBtn = $('#sign-up-btn');
let submitBtn = $('#button-submit');
let account =  $('#acc');
let inputBlock = $('.input-block')
let title = $('#title')

userName.val('asd');
fullName.val('asd');
password.val('asdaSD123');
repeatPassword.val('asdaSD123');
email.val('sharkevich.i@inbox.ru');


function checkInput(input, reg) {
  if (!input.val().match(reg)) {
    input.css("border-color", "#ff0000");
    input.attr( 'placeholder', 'Введите ' + input.prev().html());
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

console.log(fullName)

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
    return;
  }

  if (!checkbox.is(':checked')) {
    alert('Дайте свое согласие на обработку данных!');
    return;
  }

  popup.css('display', 'flex');
})

const clients = [];


function logInPage() {

  // submitBtn.on('click', function () {
    popup.css('display', 'none');

    class Client {
      constructor(fullName, userName, email, password) {
        this.fullName = fullName;
        this.userName = userName;
        this.email = email;
        this.password = password;
      }
    }

    // let client = new Client(
    //   fullName.val(),
    //   userName.val(),
    //   email.val(),
    //   password.val(),
    // );

    //
    // client.fullName = fullName.val();
    // client.userName = userName.val();
    // client.email = email.val();
    // client.password = password.val();

    // console.log(client)

    clients.push(new Client(
      fullName.val(),
      userName.val(),
      email.val(),
      password.val(),
    ));
    localStorage.setItem('clients', JSON.stringify(clients));
    let clientsArray = JSON.parse(localStorage.getItem('clients'));
    console.log(clientsArray)
    console.log(clientsArray[0].fullName)


    inputBlock[0].remove();
    inputBlock[2].remove();
    inputBlock[4].remove();
    $('.checkbox').remove();
    console.log(localStorage)
    // $('.input-value').val('');
    title.val('Log in to the system');
    account.text('Registration');
    signUpBtn.text('Sign In');
    account.attr('disabled', false);

    signUpBtn.on('click', function () {
      for (let i = 0; i < localStorage.length; i++) {
        if (userName.val() !== clientsArray[i].fullName) {
          userName.attr('placeholder', 'Такой пользователь не зарегистрирован');
          return;
        }
        if (password.val() !== clientsArray[i].password) {
          userName.attr('placeholder', 'Неверый пароль');
          return;
        }


      }
      title.val('Welcome, ' + fullName);

    })

  // })
}

submitBtn.on('click', function () {
  logInPage();
});

// account.on('click', function () {
// });
account.on('click', function () {
  logIn()
})

function logIn (){

    logInPage();
}

function reload (){
  account.on('click', function () {
    location.reload();
  })
}



// function logInPage() {
//   console.log(document.getElementsByClassName('input-block')[4]);
//
//   document.getElementById('title').innerText = "Log in to the system";
//   document.getElementsByClassName('input-block')[4].remove();
//   document.getElementsByClassName('input-block')[2].remove();
//   document.getElementsByClassName('input-block')[0].remove();
//   document.getElementById('sign-up-btn').innerText = "Log In";
//
//   document.getElementsByClassName('checkbox')[0].remove();
//   document.getElementsByClassName('account')[0].remove();
//   popup.style.display = 'none';
//   userName.value = "";
//   password.value = "";
//
//   signUpBtn.onclick = function () {
//     if (!password.value) {
//       alert("Неверно введен пароль");
//       return;
//     }
//     if (!userName.value) {
//       alert("Неверно введено имя пользователя");
//       return;
//     }
//     alert(`Добро пожаловать, ${userName.value}!`)
//   }
// }