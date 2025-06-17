jQuery(document).ready(function($) {

  /*
  jQuery throttle / debounce - v1.1 - 3/7/2010 -- Rewritten to accommodate webpack compilation
  http://benalman.com/projects/jquery-throttle-debounce-plugin/
  */
  function st_throttle(e,f,j,i){var c=undefined;var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g}

  /*
  $(window).on('scroll', st_throttle(500, function() {
    console.log('do something');
  }));
  */




});