'use strict';

var FastRender = {RouteController: RouteController, onAllRoutes: function() {}};

Router.configure({
	layoutTemplate: 'layout',
	yieldRegions: {
    'navTop': {to: 'navTop'},
    'sidebarLeft': {to: 'sidebarLeft'},
    'sidebarRight': {to: 'sidebarRight'},
    'footer': {to: 'footer'}
  }
});

Router._filters = {
	isNotLoggedIn: function(){
		if (Meteor.userId()) {
			// console.log('Already signed in');
		} else {
			Router.go('auth.signin');
		}
		this.next();
	},
	resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    var $body = $('body');
    $body.scrollTop(scrollTo);
    $body.css("min-height", 0);
    this.next();
  }
};
var filters = Router._filters;

if(Meteor.isClient){
	Router.onBeforeAction(filters.isNotLoggedIn, {except: ['auth.signin', 'auth.signup']});
	Router.onBeforeAction(filters.resetScroll);
}

/* =========================
	AUTH
	========================== */
Router.route('/signin', {
	layoutTemplate: 'authLayout',
	template: 'authSignin',
	name: 'auth.signin',
	yieldRegions: {
    'navTop': {to: 'navTop'},
  }
});

Router.route('/signup', {
	layoutTemplate: 'authLayout',
	template: 'authSignup',
	name: 'auth.signup',
	yieldRegions: {
    'navTop': {to: 'navTop'},
  }
});

/* =========================
	USERS
	========================== */
Router.route('/users-index', {
	template: 'usersIndex',
	name: 'users.index'
});

Router.route('/user-show', {
	template: 'userShow',
	name: 'user.show'
});