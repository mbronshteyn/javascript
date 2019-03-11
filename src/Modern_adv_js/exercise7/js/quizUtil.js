var UTIL = ( function( u){

  /*
    Quiz Functionality
    */
  var initQuiz = function () {
      u.assignEvent( u.$('.fill-in-submit.btn-primary'), 'click', function () {
        hideFeedback();
        checkAnswer( u.$('#q01_ans')[0].value);
      });
    },
    checkAnswer = function (value) {
      var ans,
        correct,
        result;

      if (value !== '') {
        ans = u.breakOut(u.data(u.$('#q01'), 'answer'), ',');
        correct = ans.every(function (val) {
          return (value.toUpperCase().indexOf(val.toUpperCase()) > -1);
        });
        result = (correct) ? 'correct' : 'incorrect';
        displayFeedback(result);
      } else {
        displayFeedback('no-answer');
      }
    },
    displayFeedback = function (result) {
      var feedback = u.$('.feedback.' + result);
      u.addClass(feedback, 'visible');
    },
    hideFeedback = function () {
      var feedback = u.$('.feedback.visible');
      u.removeClass(feedback, 'visible');
    };

  // PUBLIC METHODS
  u.initQuiz = initQuiz;
  u.checkAnswer = checkAnswer;
  u.displayFeedback = displayFeedback;
  u.hideFeedback = hideFeedback;

  return u;

})( UTIL || {} );
