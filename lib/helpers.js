'use strict';

UI.registerHelper('returnIfRoute', function(routeName, text){
	var route = Router.current().route.getName();
	if (route == routeName) {
		return text;
	}
});