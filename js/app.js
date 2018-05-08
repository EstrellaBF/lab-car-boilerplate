$(document).ready(function () {

  // Selected option on modal
  $('.dropdown-item').on('click', function () {
    var selected = $(this).text();
    // console.log($(this).parent().parent().prev())
    $(this).parent().parent().parent().find('button').html(selected + '&nbsp;<span class="caret"></span>');
  });


});


