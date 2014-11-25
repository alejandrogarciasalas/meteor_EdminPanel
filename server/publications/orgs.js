Meteor.publish('org', function(){
	// check(orgRef, String);
	return Orgs.find();
});