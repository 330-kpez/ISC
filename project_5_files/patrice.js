var submitbutt = document.getElementById("finish")
var createbutt = document.getElementById("create")

createbutt.onclick = submitForm1()
submitbutt.onclick = submitForm2()

var userName =

function submitForm1() {
  document.getElementById("mySubmitForm").submit();
  var userName = document.getElementById("UserName").value;
  var email = document.getElementById("EmailAddr").value;
  var password = document.getElementById("Password").value;
}

function submitForm2(){
  document.getElementById("mySubmitForm").submit();
  var phone = document.getElementById("PhoneNum").value;
  var hometown = document.getElementById("Hometown").value;
  var edu = document.getElementById("Education").value;
  var dob = document.getElementById("DOB").value;
}
