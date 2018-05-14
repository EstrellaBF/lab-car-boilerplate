$(document).ready(function () {
  // let $driverVehicle = $('#driver-vehicle-btn');
  // let $driverBrand = $('#driver-brand-btn');
  let $driverYear = $('#driver-year-btn');
  let $driverPlate = $('#driver-plate-btn');

  let selectOption = function () {
    var selected = $(this).text();
    // console.log($(this).parent().parent().prev())
    $(this).parent().parent().parent().find('button').html(selected + '&nbsp;<span class="caret"></span>');
  }

  // Selected option on modal
  $('.dropdown-item').on('click', selectOption);

  // verifying driver modal
  $('#driver-form').on('submit', function () {
    alert('hice form')
  })


  $('#driver-year-btn').on('input', function () {
    $(this).val();
  })


  // $('#btn-login-modal').attr('disabled', true);
  // // let $('#password-account') = false;
  // // let usernameAccount = $('#username-account');
  // // usernameAccount =  false;


  let usernameStatus = false;

  $('#btn-login-modal').attr('disabled', true);

  $('#username-account').on('keyup', function () {
    if ($(this).val().length > 3) {
      usernameStatus = true;
    } else {
      usernameStatus = false;
    }
  })

  $('#password-account').on('keyup', function () {
    console.log(usernameStatus);
    if ($(this).val().length > 3 && usernameStatus === true) {
      $('#btn-login-modal').attr('disabled', false);
    } else {
      $('#btn-login-modal').attr('disabled', true);
    }
  })

  $('#btn-login-modal').on('click', function () {
    alert('No estás registrado.')
  })


});


