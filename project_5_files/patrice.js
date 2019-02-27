var submitbutt = document.getElementById("finish")
var createbutt = document.getElementById("create")





function submitForm1() {
  document.getElementById("mySubmitForm").submit();
  var userName = document.getElementById("UserName").value;
  var email = document.getElementById("EmailAddr").value;
  var password = document.getElementById("Password").value;
  localStorage.clear();
  localStorage.setItem('users', userName);
  localStorage.setItem('email', email);
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


function dataFunction(){
  document.getElementById("usernameID").innerHTML = localStorage.getItem('users');
  document.getElementById("phonenumberID").innerHTML = localStorage.getItem('phone');
 document.getElementById("emailID").innerHTML = localStorage.getItem('email');
document.getElementById("hometownID").innerHTML = localStorage.getItem('hometown');
 document.getElementById("educationID").innerHTML = localStorage.getItem('edu');
document.getElementById("birthdayID").innerHTML = localStorage.getItem('dob');
};
