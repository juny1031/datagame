/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

if ( !window.requestAnimationFrame ) {

	window.requestAnimationFrame = ( function(callback) {
//		var ret = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		var ret = function(callback) {
			window.setTimeout(callback, 1000 / 30);
		};

		return ret;
	} )();

}

requestAnimationFrame = (function(callback) {
//	var ret = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	var ret = function(callback) {
		window.setTimeout(callback, 1000 / 30);
	};

	return ret;
})();