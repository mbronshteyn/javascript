var UTIL = (function ( u, $, domU, strU ) {

  var sub = u.quiz = u.quiz || {};

  const checkAnswer = function (value) {
      var ans,
        correct,
        result;

      if (value !== '') {
        ans = strU.breakOut(domU.data($('#q01'), 'answer'), ',');
        correct = ans.every(function (val) {
          return (value.indexOf(val) > -1);
        });
        result = (correct) ? 'correct' : 'incorrect';
        displayFeedback(result);
      } else {
        displayFeedback('no-answer');
      }
    },
    displayFeedback = function (result) {
      var feedback = $('.feedback.' + result);
      domU.addClass(feedback, 'visible');
    },
    hideFeedback = function () {
      var feedback = $('.feedback.visible');
      domU.removeClass(feedback, 'visible');
    };

  // PUBLIC METHODS
  sub.checkAnswer = checkAnswer;
  sub.displayFeedback = displayFeedback;
  sub.hideFeedback = hideFeedback;

  return u;

})(UTIL || {}, UTIL.dom.$, UTIL.dom, UTIL.string );
