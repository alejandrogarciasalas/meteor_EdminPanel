AuthSigninController = RouteController.extend({
	fastRender: true
});

AuthAdminSignupController = RouteController.extend({
	data: function(){
		return Orgs.findOne(Session.get('orgId'));
	},
	fastRender: true
});