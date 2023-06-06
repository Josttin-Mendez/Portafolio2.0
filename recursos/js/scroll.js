function reveal() {
    var reveals = document.querySelectorAll(".revelar");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activo");
      } else {
        reveals[i].classList.remove("activo");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);