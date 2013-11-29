/**
 * Main JS file for Hartman
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

    });

}(jQuery));

var ps = 0;
$(window).scroll(function(){
	var s = $(window).scrollTop();
	var scrollDelta = s - ps;
	var marginDelta = scrollDelta/ 4.0;
	var backgroundPos = $('#site-head').css('backgroundPosition').split(" ");
	var xPos = backgroundPos[0];
	var yPos = parseFloat(backgroundPos[1]);
	var newYPos = yPos - marginDelta;
	newYPos += 'px';
	newPosition= xPos + ' ' + newYPos;
	$('#site-head').css('backgroundPosition', newPosition);
	ps = s;
});