var submitbutt = document.getElementById("finish")
var createbutt = document.getElementById("create")


var check = function () {
  if (document.getElementById('Password').value ==
    document.getElementById('Confirm_Password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'passwords must match';
  }
}

var check_mail = function (){
  var email = document.getElementById('EmailAddr');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (filter.test(email.value)) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'email verified as valid';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'invalid email addresss';
  }
}

var check_mail_login = function () {
  var email = document.getElementById('login_email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (filter.test(email.value)) {
    document.getElementById('message2').style.color = 'green';
    document.getElementById('message2').innerHTML = 'email verified as valid';
  } else {
    document.getElementById('message2').style.color = 'red';
    document.getElementById('message2').innerHTML = 'invalid email addresss';
  }
}

function submitForm1() {
  document.getElementById("mySubmitForm").submit();
  var userName = document.getElementById("UserName").value;
  var email = document.getElementById("EmailAddr").value;
  var password = document.getElementById("Password").value;
  localStorage.clear();
}

function submitForm2(){
  document.getElementById("mySubmitForm").submit();
  var phone = document.getElementById("PhoneNum").value;
  var hometown = document.getElementById("Hometown").value;
  var edu = document.getElementById("Education").value;
  var dob = document.getElementById("DOB").value;
  localStorage.setItem('phone', phone);
  localStorage.setItem('hometown', hometown);
  localStorage.setItem('edu', edu);
  localStorage.setItem('dob', dob);
}


function loginfunction(){
  localStorage.clear();
  document.getElementById("mySubmitForm").submit();
  localStorage.setItem('user', document.getElementById("login_email").value)
}

function loadfunction(){
  if(localStorage.getItem('user') == "jwick@gmail.com"){
    document.getElementById("usernameID").innerHTML = "John Wick"
    document.getElementById("emailID").innerHTML = "jwick@gmail.com"
    document.getElementById("phonenumberID").innerHTML = "917-755-0949"
    document.getElementById("birthdayID").innerHTML = "10/10/1997"
    document.getElementById("homeID").innerHTML = "Pilsburg"

  }
}
