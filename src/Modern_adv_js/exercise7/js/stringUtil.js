
var UTIL = ( function( u ){
  /*
   String Functionality
   */
  var numChar = function (str, char) {
      //return (str.match(new RegExp(char, 'g')) || []).length;
      return (str.split(char).length - 1);
    },

    breakOut = function (str, delim) {
      var arr = str.split(delim);
      return arr.map(function (val) {
        return val.trim();
      });
    };

  // PUBLIC METHODS
  u.numChar = numChar;
  u.breakOut = breakOut;

  return u;

})( UTIL || {} );
