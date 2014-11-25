Meteor.publish('org', function(){
	return Orgs.find();
});