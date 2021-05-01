// let fname = getElementById("fname");
// let lname = getElementById("lname");
// let phone = getElementById("phone-number");
// let email = getElementById("email");
// let country = getElementById("country");
// let form = getElementById("form");

// function PersonInfo(fname, lname, phone, email, country) {
//   this.firstName = fname;
//   this.lastName = lname;
//   this.phoneNumber = phone;
//   this.email = email;
//   this.country = country;
// }

document.getElementById("error-phone").style.display = "none";
document.getElementById("error-mail").style.display = "none";

const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regex_phone = /^[0-9]+$/;

function checkphone() {
  let inpt_phonenumber = document.getElementById("phone-number").value;
  if (
    (inpt_phonenumber.length != 11) |
    (regex_phone.test(inpt_phonenumber) == false)
  ) {
    document.getElementById("error-phone").style.display = "block";
  } else {
    document.getElementById("error-phone").style.display = "none";
  }
}

function checkmail() {
  let inpt_email = document.getElementById("email").value;
  if (regex_email.test(inpt_email) !== true) {
    document.getElementById("error-mail").style.display = "block";
  } else {
    document.getElementById("error-mail").style.display = "none";
  }
}

function validation() {
  let x = document.getElementById("error-phone").style.display;
  let y = document.getElementById("error-mail").style.display;

  if ((x == "block") & (y == "block")) {
    alert("لطفا شماره تلفن و ایمیل خود را به درستی وارد کنید");
    return false;
  } else if (y == "block") {
    alert("لطفا ایمیل خود را به درستی وارد کنید");
    return false;
  } else if (x == "block") {
    alert("لطفا شماره تلفن خود را به درستی وارد کنید");
    return false;
  }
}

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let info = new PersonInfo(fname, lname, phone, email, country);
//   alert("اطلاعات شما با موفقیت ثبت شد");
//   getElementById("info").innerHtml(info);
// });
