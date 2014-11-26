// 'use strict';

Template.userEdit.helpers({
	userOwnProfile: function(){
		return '/user-show/' + Meteor.userId();
	},
	userId: function(){
		return Meteor.users.findOne(Meteor.userId());
	}
});

Template.userEdit.rendered = function(){};