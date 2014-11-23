Meteor.publish('userTickets', function(userId){
	check(userId, String);
	return Tickets.find({userRef: this.userId});
});

Meteor.publish('tickets', function(){
	return Tickets.find();
});