// 'use strict';

Template.authSignup.events({
	'submit #signup-form': function(e, t){
		e.preventDefault();

    var routeId = Router.current().params._ticketId;
    // AUTH CONTROL
    // console.log(this.data);
		var email = t.find('#email').value;
    var password = t.find('#password').value;
    var ticketIdVal = t.find('#ticket-id').value;
    var ticketPassphraseVal = t.find('#ticket-passphrase').value;

    // TICKET CONTROL
    var ticketLimit = this.ticket.limit;
    var ticketStatus = this.ticket.status;
    var ticketFor = this.ticket.ticketFor;
    var sentBy = this.ticket.userRef;
    var passphrase = this.ticket.passPhrase;
    var ticketId = this.ticket.ticketId;

    // console.log(ticketLimit);

    // var orgRef = Meteor.users.find({_id: sentBy}, {fields: {orgRef: 1}}); // Organization ID (Reference)
    
    if (ticketIdVal === ticketId || ticketPassphraseVal === passphrase) {
      // CREATE USER
      var doc = {
        email: email,
        password: password
      };

      var userData = {
        updatedAt: new Date().getTime(),
        type: ticketFor
        // orgRef: orgRef
      };

      var _ticketId = {
        status: ticketStatus
      };

      if (ticketLimit > 0) {
        ticketLimit -= 1;
        var _ticket = _.extend(_ticketId, {
          limit: ticketLimit
        });
        Tickets.update(routeId, {$set: _ticket}, function(error){
          if (error) {
            growl(error.reason);
          } else {
            growl('Ticket was successfully submitted', 'success');
          }
        });
        Accounts.createUser(doc, function(err) {
          if (err) {
            growl(err.message, 'error');
          } else {
            // var usersRef = [];
            // usersRef = usersRef.push(Meteor.userId());
            // var _ticket = _.extend(_ticket, {
            //   usersRef: usersRef
            // });
            // Tickets.update(routeId, {$set: _ticket}, function(error){
            //   if (error) {
            //     growl(error.reason);
            //   } else {
            //     growl('Ticket was successfully submitted', 'success');
            //   }
            // });
          }
          Meteor.users.update(Meteor.userId(), {$set: userData}, function(error){
            if (error) {
              growl(error.reason, 'danger');
            } else {
              growl('Your account was created successfully', 'success');
              Router.go('users.index');
            }
          });
        });
      } else {
        var _ticket = _.extend(_ticketId, {
          status: 'closed'
        });
        Tickets.update(routeId, {$set: _ticket}, function(error){
          if (error) {
            console.log(error.reason);
          } else {
          }
        });
        growl('Sorry but this ticket has reached its limit', 'error');
      }

    } else {
      growl('Ticket is not valid, copy-paste it for best matching.', 'error');
    }

	}
});

Template.authSignup.rendered = function(){
  // console.log(this.data.ticket);
};