// 'use strict';

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


/* =========================
	USERS
	========================== */
UsersIndexController = FastRender.RouteController.extend({
	data: function(){
		return {
			view: {
				title: i18n.t('Users list')
			}
		}
	}
});

UserShowController = FastRender.RouteController.extend({
	data: function(){
		return {
			view: {
				title: i18n.t('User\'s profile')
			},
			user: Meteor.users.findOne({_id: this.params._id})
		}
	},
	waitOn: function(){
		return Meteor.subscribe('userProfile', this.params._id);
	}
});

UserEditController = FastRender.RouteController.extend({
	data: function(){
		return {
			view: {
				title: i18n.t('Edit your profile')
			},
			user: Meteor.users.findOne({_id: this.params._id})
		}
	},
	waitOn: function(){
		return Meteor.subscribe('userProfile', this.params._id);
	}
});

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