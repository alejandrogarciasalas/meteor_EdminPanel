Meteor.users.allow({
	update: function(userId, doc) {return true; },
	insert: function(userId, doc) {return true; }
});