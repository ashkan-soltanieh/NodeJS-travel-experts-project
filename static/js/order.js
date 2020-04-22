const fName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');

// Telephone, email, and postal enteries checked by regEX key. all field except email are set to be required

fName.addEventListener('blur', function() {
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
