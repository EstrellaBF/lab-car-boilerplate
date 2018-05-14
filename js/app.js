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
  $('#driver-form').on('submit', function() {
    alert('hice form')
  })


  $('#driver-year-btn').on('input', function() {
    $(this).val();
  })
  // // 
  // $driverBrand.on('focusout', function() {
  //   console.log();
  // });
  // let li = $driverBrand.next().find('li');

  // let lop = [];
  // for(let l of li) {
  //   console.log(l)
  //   lop = l
  // }
  // console.log(lop)


  // $('#sent-btn-d').on('click', function(e) {
  //   e.preventDefault();
  //   console.log(this)
  // })



});


