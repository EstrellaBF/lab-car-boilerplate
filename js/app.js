// La funcionalidad de tu proyecto
window.addEventListener('load', function() {
  var btnLogina = document.getElementById('btn-login-modal'),
    btnClose = document.getElementById('btn-close-modal'),
    usernameAccount = document.getElementById('username-account'),
    passwordAccount = document.getElementById('password-account'),
    navbar = document.getElementById('navbar');

  btnLogina.addEventListener('click', function(event) {
  console.log(event.currentTarget); 
  console.log(event.target);
  console.log(usernameAccount.value);
  console.log(passwordAccount);
    if(usernameAccount.value!=="" && passwordAccount.value!=="") {
      var newDiv = document.createElement('div');
      var newP = document.createElement('p');
      newDiv.appendChild(newP);
      navbar.appendChild(newDiv);
      newP.innerHTML = usernameAccount.value;
      btnClose.classList.add('btn-success');
      newDiv.classList.add();
    }
  });
/*
  $(document).ready(function(){
    $(".btn-download-mobile").mouseover(function(){
        $(".full-width").slideUp();
    });
});*/

});

