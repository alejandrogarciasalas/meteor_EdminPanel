Meteor.publish('orgByUser', function(orgRef){
	check(orgRef, String);
	var options = {
    limit: 1,
    fields: {_id: 1, name: 1, description: 1}
  };
	return Orgs.find({_id: orgRef}, options);
});

Meteor.publish('orgs', function(){
	return Orgs.find();
});