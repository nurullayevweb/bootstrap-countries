var elSiteBody = document.querySelector(".site-body");
var elMenuBtn = document.querySelector(".js-dark-mode-btn");

elMenuBtn.addEventListener("click", function(){

   elSiteBody.classList.toggle("dark-mode");

});