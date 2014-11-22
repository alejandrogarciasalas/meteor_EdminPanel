'use strict';

Template.userEdit.helpers({
	userOwnProfile: function(){
		return '/user-show/' + Meteor.userId();
	}
});