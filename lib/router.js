'use strict';

Router.configure({
	layoutTemplate: 'layout',
	yieldRegions: {
    'navTop': {to: 'navTop'},
    'sidebarLeft': {to: 'sidebarLeft'},
    'sidebarRight': {to: 'sidebarRight'},
    'footer': {to: 'footer'}
  }
});

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