Meteor.publish('userProfile', function (userId) {
	check(userId, String);
  return Meteor.users.find({_id: userId});
});

Meteor.publish('users', function () {
	// check(orgRef, String);
  return Meteor.users.find();
});

Meteor.publish('usersByOrg', function (orgRef) {
	// if (orgRef) {
		check(orgRef, String);
	  return Meteor.users.find({orgRef: orgRef});
	// } else {
		// return false;
	// }
});