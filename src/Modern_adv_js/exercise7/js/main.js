/**
 *
 Use one global variable.
 Create three modules: dom, string and quiz.
 Use three separate JavaScript files for these modules.
 Use the module pattern for each file.
 Link the files together using dependencies.
 Test and make sure everything is working.
 */

var MAINAPP = (function (nsp, u ) {

  /*
  Other Utilities
  */

  var domReady = function (funct) {
    u.doc.addEventListener('DOMContentLoaded', function () {
      if (typeof funct === 'function') {
        funct();
      }
    }, false);
  };

  /*
  Setup
  */
  domReady(function () {
    u.initQuiz();
  });

  // PUBLIC METHODS
  nsp.domReady = domReady;

  return nsp;

})(MAINAPP || {}, UTIL );
