Meteor.publish('orgByUser', function(orgRef){
	check(orgRef, String);
	return Orgs.find({_id: orgRef});
});

Meteor.publish('orgs', function(){
	return Orgs.find();
});