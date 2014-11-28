Meteor.publish('userProfile', function (userId) {
	check(userId, String);
  return Meteor.users.find({_id: userId});
});

Meteor.publish('users', function () {
	// check(orgRef, String);
  return Meteor.users.find();
});

Meteor.publish('usersByOrg', function (orgRef) {
	check(orgRef, String);
  return Meteor.users.find({orgRef: orgRef});
});

Meteor.publish('userOrg', function(userId){
	var sub = this;
	check(userId, String);
	var options = {
    limit: 1,
    fields: {orgRef: 1}
  };
	return Meteor.users.find({_id: userId}, options);
});