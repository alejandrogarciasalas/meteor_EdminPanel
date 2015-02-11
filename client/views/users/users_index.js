Template.usersIndex.rendered = function(){};

Template.usersIndex.helpers({
	orgName: function(){
		var orgRef = Session.get('orgRef');
		var orgName = Orgs.findOne({_id: orgRef}, {fields: {name: 1}});
		orgName = orgName.name;
		return orgName;
	}, 
	// usersByType: function(){
	// 	if (isAdmin(Meteor.userId())) {
	// 		var orgRef = Session.get('orgRef');
	// 		return Meteor.users.find({orgRef: orgRef});
	// 	} else {
	// 		return Meteor.users.find({ticketBy: Meteor.userId()});
	// 	}
	// }
});