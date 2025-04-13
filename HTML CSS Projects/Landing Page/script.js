const dropBtn = document.querySelector(".drop-box")
const navLinks= document.querySelector(".navigation")
const navLink = document.querySelector(".nav-links")
const closeBtn = document.querySelector(".close-icon")


dropBtn.addEventListener('click',()=>{
    navLinks.style.display = "flex"
   closeBtn.style.display = 'block';
   dropBtn.style.display = 'none';

})
closeBtn.addEventListener('click', () => {
    navLinks.style.display = 'none';
    closeBtn.style.display = 'none';
    dropBtn.style.display = 'block';
  });