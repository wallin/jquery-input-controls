/* jQuery input control plugin v0.1
 * Copyright 2010 Sebastian Wallin
 * licensed under the MIT license
 */

(function($){
  /* Attach this new method to jQuery */
  $.fn.extend({
    inputCtl: function(options) {
      var self = this;

      /* Default options */
      var defaults = {
        step    : 1,
        incText : "+",
        decText : "-",
        maxVal  : false,
        minVal  : false
      };
      /* Parse user options */
      options =  $.extend(defaults, options);

      /* Helper function */
      function _dress(obj) {
        $("<button>").text(options.incText).click(function(e) {
          var val = parseInt($(obj).val(), 10) + options.step;
          if(options.maxVal !== false && val > options.maxVal) {
            val = options.maxVal;
          }
          $(obj).val(val);
          e.preventDefault();
          return false;
        }).insertAfter(obj);

        $("<button>").text(options.decText).click(function(e) {
          var val = parseInt($(obj).val(), 10) - options.step;
          if(options.minVal !== false && val < options.minVal) {
            val = options.minVal;
          }
          $(obj).val(val);
          e.preventDefault();
          return false;
        }).insertAfter(obj);
      }

      /* Apply controls to all matching input boxes */
      for(var i = 0; i < self.length; i++) {
        if(self.hasOwnProperty(i) && $(self[i]).is('input')) {
          _dress(self[i]);
        }
      }
      return this;
    }
  });
})(jQuery);