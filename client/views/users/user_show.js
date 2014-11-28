'use strict';

Template.userShow.helpers({
	email: function(){
		return this.user.emails[0].address;
	},
	userOwnProfile: function(){
		return '/user-edit/' + Meteor.userId();
	},
	orgName: function(){
		var orgRef = Session.get('orgRef');
		var orgName = Orgs.findOne({_id: orgRef}, {fields: {name: 1}});
		orgName = orgName.name;
		return orgName;
	}
});