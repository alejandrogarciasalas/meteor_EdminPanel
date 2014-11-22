'use strict';

Template.sidebarLeft.events({
	'click #signout': function(e,t){
		e.preventDefault();
		if(Meteor.userId()) {
			Meteor.logout(function(err){
				if (err) {
					console.log('Can\'t logout user');
				} else {
					Router.go('auth.signin');
				}
			});
		} else {
			console.log('User is not logged in');
		}
	}
});

Template.sidebarLeft.helpers({
	userOwnProfile: function(){
		return '/user-show/' + Meteor.userId();
	}
});