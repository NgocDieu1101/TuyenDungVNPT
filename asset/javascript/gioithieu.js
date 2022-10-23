var btnHeader = $('.btn-menu-bar')
var showMenu = 'show-menu-right'
btnHeader.on('click', ()=> {
  if($('#menu').hasClass('show-menu-right')){
    $('#menu').removeClass('show-menu-right')
    $('.btn-menu-bar i').addClass('fa-bars')
    $('.btn-menu-bar i').removeClass('fa-times')
  } else {
    $('#menu').addClass('show-menu-right')
    $('.btn-menu-bar i').removeClass('fa-bars')
    $('.btn-menu-bar i').addClass('fa-times')
  }
})