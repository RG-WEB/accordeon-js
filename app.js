const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btns = question.querySelector(".btn");

  btns.addEventListener("click", function () {
    question.classList.toggle("show-accordion");
  });
});
