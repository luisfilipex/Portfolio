var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var form = document.getElementById("myForm");
  var mensagemDiv = document.querySelector(".mensagem");

  alert("Mensagem enviada com sucesso!");

  form.reset();

  mensagemDiv.innerHTML = "Mensagem enviada com sucesso!";
  mensagemDiv.style.color = "green";
});
