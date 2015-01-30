jQuery(function(){
  window.setTimeout( function() {
    jQuery('input[name="maths_q"]').each(function() {
      jQuery(this).val( window.mathsCaptcha[ jQuery(this).data('mathsid') ]);
    });
  }, 10000);
});
