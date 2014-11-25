Meteor.publish('userTickets', function(userId){
	check(userId, String);
	return Tickets.find({userRef: userId});
});

Meteor.publish('tickets', function(){
	return Tickets.find();
});