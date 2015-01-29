AuthSigninController = RouteController.extend({
	fastRender: true
});

AuthAdminSignupController = RouteController.extend({
	data: function(){
		return Orgs.findOne(Session.get('orgId'));
	},
	fastRender: true
});

/* =========================
	AUTH
	========================== */
Router.route('/signin', {
	layoutTemplate: 'authLayout',
	template: 'authSignin',
	name: 'auth.signin',
	yieldRegions: {
    'navTop': {to: 'navTop'}
  },
  controller: 'AuthSigninController'
});

Router.route('/signup/admin/:orgId', {
	layoutTemplate: 'authLayout',
	yieldRegions: {
    'navTop': {to: 'navTop'}
  },
  name: 'auth.admin',
  template: 'authAdminSignup',
  controller: 'AuthAdminSignupController'
});