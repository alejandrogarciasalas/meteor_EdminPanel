Meteor.publish("userProfile", function (userId) {
	check(userId, String);
  return Meteor.users.find({_id: userId});
});

Meteor.publish("users", function () {
	// check(userId, String);
  return Meteor.users.find();
});