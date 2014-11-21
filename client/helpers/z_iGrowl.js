// 'use strict';

$.iGrowl.prototype.defaults.placement.y = 'bottom';

growl = function(message){
	$.iGrowl({
		'message': i18n.t(message),
		'placement[x]': 'right',
		'placement[y]': 'bottom',
		'animation': true,
		'animShow': 'bounceIn',
		'animHide': 'bounceOut'
	});
};

// Template.registerHelper('iGrowl', function(message){

// });