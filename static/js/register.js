const postal = document.querySelector('#postal');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const province = document.querySelector('#province');

// Telephone, email, and postal enteries checked by regEX key. all field except email are set to be required
// uName.addEventListener('blur', function() {
//   if (this.value != '') {
//     this.classList.add('green-bg');
//     this.classList.remove('red-bg');
//     this.setCustomValidity('');
//   } else {
//     this.classList.remove('green-bg');
//     this.classList.remove('red-bg');
//     this.setCustomValidity('Please enter your a username');
//   }
// });

firstName.addEventListener('blur', function() {
  if (this.value != '') {
    this.classList.add('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('');
  } else {
    this.classList.remove('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('Please enter your fullname');
  }
});

lastName.addEventListener('blur', function() {
  if (this.value != '') {
    this.classList.add('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('');
  } else {
    this.classList.remove('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('Please enter your fullname');
  }
});

// pass.addEventListener('blur', function() {
//   if (this.value != '' && this.value.length > 7) {
//     this.classList.add('green-bg');
//     this.classList.remove('red-bg');
//     this.setCustomValidity('');
//   } else {
//     this.classList.remove('green-bg');
//     this.classList.add('red-bg');
//     this.setCustomValidity('Minimum 8 charachters needed');
//   }
// });

// vpass.addEventListener('blur', function() {
//   if (this.value != '' && this.value === pass.value) {
//     this.classList.add('green-bg');
//     this.classList.remove('red-bg');
//     this.setCustomValidity('');
//   } else {
//     this.classList.remove('green-bg');
//     this.classList.add('red-bg');
//     this.setCustomValidity('Password does not match please try again');
//   }
// });

// Email is not an entery required field
email.addEventListener('blur', function() {
  reg = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; //reference provided on README
  if (reg.test(this.value)) {
    this.classList.remove('red-bg');
    this.classList.add('green-bg');
    this.setCustomValidity('');
  } else if (this.value != '' && reg.test(this.value) == false) {
    this.classList.remove('green-bg');
    this.classList.add('red-bg');
    this.setCustomValidity('Please enter a valid email address');
  } else {
    this.classList.remove('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('');
  }
});

tel.addEventListener('blur', function() {
  reg = /^\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}$/; //reference provided on README
  if (reg.test(this.value)) {
    this.classList.remove('red-bg');
    this.classList.add('green-bg');
    this.setCustomValidity('');
  } else if (reg.test(this.value) == false && this.value != '') {
    this.classList.remove('green-bg');
    this.classList.add('red-bg');
    this.setCustomValidity('Valid format: xxx-xxx-xxxx or (xxx)xxx-xxxx');
  } else {
    this.classList.remove('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('Please enter your phone number');
  }
});

address.addEventListener('blur', function() {
  if (this.value != '') {
    this.classList.add('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('');
  } else {
    this.classList.remove('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('Please enter your address');
  }
});

city.addEventListener('blur', function() {
  if (this.value != '') {
    this.classList.add('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('');
  } else {
    this.classList.remove('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('Please enter your city');
  }
});

province.addEventListener('blur', function() {
  if ((this.value != '', this.value.length == 2)) {
    this.classList.add('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('');
  } else if (this.value.length != 2) {
    this.classList.remove('green-bg');
    this.classList.add('red-bg');
    this.setCustomValidity('Valid format: AB or CA, XX');
  } else {
    this.classList.remove('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('Province format: (AB, CA, etc.)');
  }
});

postal.addEventListener('blur', function() {
  let reg = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/; //given on individual assignment
  // console.log(reg.test(enteredValue))   //Confirming entered data and its      boolean status
  if (reg.test(this.value)) {
    this.classList.remove('red-bg');
    this.classList.add('green-bg');
    this.setCustomValidity('');
  } else if (reg.test(this.value) == false && this.value != '') {
    this.classList.remove('green-bg');
    this.classList.add('red-bg');
    this.setCustomValidity('Valid format: A1A1A1 or A1A 1A1');
  } else {
    this.classList.remove('green-bg');
    this.classList.remove('red-bg');
    this.setCustomValidity('Please enter your postal code');
  }
});
