let UTIL = (
  function generalUtilse( gen ){
   /*
    Other Utilities
    */
    var domReady = function(funct) {
      doc.addEventListener('DOMContentLoaded', function(){
        if (typeof funct === "function") {
          funct();
        }
      }, false);
    };

    // PUBLIC METHODS
    gen.domReady = domReady;

    return gen;
  }
)( UTIL || {} )
