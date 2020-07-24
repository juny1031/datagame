var $j;
var jsmin = false;

requirejs.config({
	waitSeconds: 100000,
	paths: {
	}
});

var loadJquery  = [
	'lib/jquery-1.11.1.min'
];
var loadLibrary = [
	'lib/perfect-scrollbar.min',
	'lib/jquery.mousewheel.min',
	'three/sylvester',
	'three/Detector',
	'three/r52/three.min',
	'three/tween',
	'three/THREEx',
	'three/THREEx_002',
	'three/sparks',
	'three/Stats'
];
var loadCommon1 = [
	//'json/3d/male',
	//'json/3d/female3',
	//'json/3d/male2',
	//'json/3d/female'
];
var loadCommon2 = [
	'holistic_game'
];

function repMinPaths(paths) {
	for(var i in paths){
		paths[i] = getMinPath(paths[i]);
	}
	return paths;
}

function getMinPath(path) {
	if (path == void(0) || path.length <= 0) {
		return path;
	}

	var minIndex = path.indexOf('.min');
	if (jsmin) {
		if(minIndex == -1){
			path += '.min';
		}
	} else {
		if(minIndex > 0){
			path  = path.substring(0, minIndex);
		}
	}
	return path;
};

//common
require(loadJquery, function() {
	$j = jQuery.noConflict();
	//lib
	require(loadLibrary, function() {
		//common1
		require(repMinPaths(loadCommon1), function() {
			//common2
			require(repMinPaths(loadCommon2), function() {
				// custom
				var cjs = (typeof getCustomJS == "function") ? repMinPaths(getCustomJS()) : [];
				require(cjs, function() {
					$j(function(){
						if (typeof onLoad == "function") {
							onLoad();
						}
						
						if (typeof onView == "function") {
							onView();
						}
					});
				});
			});
		});
	});
});