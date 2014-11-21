'use strict';

Template.ticketNew.events({
	'submit #ticket-send': function(e,t){
		e.preventDefault();
		var ticketFor 	= t.find('#ticket-for').value,
				ticketTo 		= t.find('#ticket-to').value,
				ticketPassphrase 		= t.find('#ticket-passphrase').value;

		ticketTo = ticketTo.toString().split(', ');

		var ticketId = Random.id();

		var limit = ticketTo.length;

		console.log(limit);

		var ticketObj = {
			'createdAt': new Date(),
		  'updatedAt': new Date(),
		  'ticketId': ticketId,
		  'passPhrase': ticketPassphrase,
		  'ticketFor': ticketFor,
		  'status': 'active',
		  'userRef': Meteor.userId(),
		  'usersRef': [''], // Contains userId's if ticket is sent to existent users
		  'limit': limit
		};

		if (Meteor.userId()) {
			Tickets.insert(ticketObj, function(err){
				if (err) {
					growl(err.message, 'error');
				} else {
					// alert('Message was saved succesfully');
					growl('Ticket has been sent successfully', 'success');
					$('#ticket-send').find('input[type=text], input[type=email], textarea').val('');
				}
			});
		} else {
			growl('You need to be logged in to send tickets', 'error');
		}


		// console.log(ticketFor);
		// console.log(ticketTo);
		// console.log(ticketPassphrase);

		// var emailHead = {
		// 	to: 
		// }
	}
});