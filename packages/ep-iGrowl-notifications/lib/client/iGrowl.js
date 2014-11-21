// 'use strict';

$.iGrowl.prototype.defaults.placement.y = 'bottom';

growl = function(message, type){
	$.iGrowl({
		'type': type,
		'message': i18n.t(message),
		'placement[x]': 'right',
		'placement[y]': 'bottom',
		'animation': true,
		'animShow': 'bounceIn',
		'animHide': 'bounceOut'
	});
};
