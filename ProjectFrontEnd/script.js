function checkEmail(emailId) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
    alert("You have entered valid email.");
    return true;
  }
  return false;
}

function ValidateEmail() {
  let emailID = document.form.email;

  if ((emailID.value == null) || (emailID.value == "")) {
    alert("Please Enter your Email ID")
    emailID.focus()
    return false
  }

  if (checkEmail(emailID.value) == false) {
    emailID.value = ""
    alert("Invalid Email Adderess");
    emailID.focus()
    return false
  }
  return true
}


let option1 = $('.fruit')[0].innerHTML;


function myFunctionF() {
  $('#result').empty();
  let fruit = option1
  $('#result').append("<p " + fruit + ";'>" + fruit + ' - yup, you are right! To be more specific,'
    + ' an avocados are fruits and are technically considered a single-seeded berry.' + "</p>");
}


let option2 = $('.veg')[0].innerHTML;


function myFunctionV() {
  $('#result').empty();
  let veg = option2
  $('#result').append("<p " + veg + ";'>" + veg + ' - Wrong, sorry! ' + "</p>");
}

