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
		  'usersRef': '',
		  'limit': limit
		};

		Tickets.insert(ticketObj, function(err){
			if (err) {
				console.log(err.message);
			} else {
				// alert('Message was saved succesfully');
				growl('Ticket has been sent successfully');
			}
		});

		// console.log(ticketFor);
		// console.log(ticketTo);
		// console.log(ticketPassphrase);

		// var emailHead = {
		// 	to: 
		// }
	}
});