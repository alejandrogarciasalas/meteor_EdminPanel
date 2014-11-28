// 'use strict';

// var FastRender = {RouteController: RouteController, onAllRoutes: function() {}};
subs = new SubsManager();

RouteController.extend({
	fastRender: true
});

Router.configure({
	layoutTemplate: 'layout',
	yieldRegions: {
    'navTop': {to: 'navTop'},
    'sidebarLeft': {to: 'sidebarLeft'},
    'sidebarRight': {to: 'sidebarRight'},
    'footer': {to: 'footer'}
  },
  waitOn: function() {
  	if (Meteor.userId()) {
	  	return Meteor.subscribe('userProfile', Meteor.userId());	  	
  	}
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
	isLoggedIn: function(){
		if (Meteor.userId()) {
			Router.go('user.show', {_id: Meteor.userId()});
		}
		this.next();
	},
	resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    var $body = $('body');
    $body.scrollTop(scrollTo);
    $body.css("min-height", 0);
    this.next();
  },
  hasCompletedProfileInfo: function(){
  	if (Meteor.userId()) {
  		var userInfo = Meteor.users.findOne(Meteor.userId(), {fields: {name: 1, lastname: 1}});
  		var name = userInfo.name;
  		var lastname = userInfo.lastname;
  		if (name && lastname) {
  			this.next();
  		} else {
  			growl('You must add your name and lastname to continue');
  			Router.go('user.edit', {_id: Meteor.userId()});
  			this.next();
  		}
  	}
  }
};
filters = Router._filters;

if(Meteor.isClient){
	Router.onBeforeAction(filters.isNotLoggedIn, {except: ['auth.signin', 'auth.signup']});
	Router.onBeforeAction(filters.isLoggedIn, {only: ['auth.signin', 'auth.signup']});
	Router.onBeforeAction(filters.resetScroll);
	Router.onBeforeAction(filters.hasCompletedProfileInfo, {except: ['auth.signin', 'auth.signup']});
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
  },
  controller: 'AuthSignInController'
});


/* =========================
	NOT FOUND
	========================== */

Router.route('/404-not-found', {
	template: 'notFound',
	name: 'not.found'
});

/* =========================
	SETTINGS
	========================== */
	
Router.route('/settings-edit', {
	template: 'settingsEdit',
	name: 'settings.edit',
	controller: 'SettingsEditController'
});

/* =========================
	USERS
	========================== */

Router.route('/users-index', {
	template: 'usersIndex',
	name: 'users.index',
	controller: 'UsersIndexController'
});

Router.route('/user-show/:_id', {
	template: 'userShow',
	name: 'user.show',
	controller: 'UserShowController'
});

Router.route('/user-edit/:_id', {
	template: 'userEdit',
	name: 'user.edit',
	controller: 'UserEditController'
});

/* =========================
	ORGANIZATIONS
	========================== */

Router.route('/org-show', {
	template: 'orgShow',
	name: 'org.show',
	controller: 'OrgShowController'
});

Router.route('/org-edit', {
	template: 'orgEdit',
	name: 'org.edit',
	controller: 'OrgEditController'
});