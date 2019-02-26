var submitbutt = document.getElementById("finish")
var createbutt = document.getElementById("create")

createbutt.onclick = submitForm1
submitbutt.onclick = submitForm2


function submitForm1() {
  document.getElementById("mySubmitForm").submit();
  var userName = document.getElementById("UserName")
  var email = document.getElementById("EmailAddr")
  var password = document.getElementById("Password")
}

function submitForm2(){
  document.getElementById("mySubmitForm").submit();
  var phone = document.getElementById("PhoneNum")
  var hometown = document.getElementById("Hometown")
  var edu = document.getElementById("Education")
  var dob = document.getElementById("DOB")
}
