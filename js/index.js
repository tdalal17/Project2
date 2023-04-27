jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

function ValidateEmail(email) {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }
  function isValidPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, '');

    if (phoneNumber.length !== 10) {
      return false;
    }
  
  if (['0', '1'].includes(phoneNumber.charAt(0))) {
    return false;}

  }