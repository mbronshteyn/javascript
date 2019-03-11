var MAINAPP = (function (nsp, $, domU, strU, quizU) {

  /*
  Quiz Functionality
  */
  var initQuiz = function () {
      domU.assignEvent($('.fill-in-submit.btn-primary'), 'click', function () {
        hideFeedback();
        checkAnswer($('#q01_ans')[0].value);
      });
    },
    checkAnswer = quizU.checkAnswer,
    displayFeedback = quizU.displayFeedback,
    hideFeedback = quizU.hideFeedback;

  /*
  Setup
  */
  UTIL.domReady(function (){
    initQuiz();
  });

  //Public Methods and Properties
  nsp.displayFeedback = displayFeedback;

  return nsp;

})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string, UTIL.quiz  );
