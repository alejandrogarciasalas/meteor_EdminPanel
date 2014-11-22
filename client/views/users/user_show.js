'use strict';

Template.userShow.helpers({
	email: function(){
		return this.user.emails[0].address;
	},
	userOwnProfile: function(){
		return '/user-edit/' + Meteor.userId();
	}
});