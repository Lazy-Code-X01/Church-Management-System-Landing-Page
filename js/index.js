// for the nav toggle
const openNav = () => {
  const menuWidth = document.getElementById('myNav') 
  menuWidth.classList.toggle('menu_width')

  //toggle the X from the Hamburger 
  const menuBtnStyle = document.querySelector('.custom_menu-btn'); 
  menuBtnStyle.classList.toggle('menu_btn-style')
}