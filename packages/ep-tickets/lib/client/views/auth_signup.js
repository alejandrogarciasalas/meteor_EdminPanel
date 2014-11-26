// 'use strict';

Template.authSignup.events({
	'submit #signup-form': function(e, t){
		e.preventDefault();

    var routeId = Router.current().params._ticketId;
    // AUTH CONTROL
    // console.log(this.data);
		var email = t.find('#email').value,
        password = t.find('#password').value,
        ticketIdVal = t.find('#ticket-id').value,
        ticketPassphraseVal = t.find('#ticket-passphrase').value;

    // TICKET CONTROL
    console.log(this);
    var ticketLimit = this.ticket.limit,
        ticketStatus = this.ticket.status,
        ticketFor = this.ticket.ticketFor,
        sentBy = this.ticket.userRef,
        usersRef = this.ticket.usersRef;
        passphrase = this.ticket.passPhrase,
        ticketId = this.ticket.ticketId;

    var orgRef = Meteor.users.findOne(sentBy, {fields: {orgRef: 1}}); // Organization ID (Reference)
    orgRef = orgRef.orgRef;
    
    if (ticketIdVal === ticketId || ticketPassphraseVal === passphrase) {
      switch (true) {
        case ticketLimit > 0:
          // CREATE USER
          var doc = {
                email: email,
                password: password
              },
              userData = {
                updatedAt: new Date(),
                type: ticketFor,
                orgRef: orgRef
              },
              _ticketId = {
                limit: ticketLimit
              };
          Accounts.createUser(doc, function(err){
            if (err) {
              console.log(err);
            } else {
              // console.log(Meteor.userId());
              Meteor.users.update(Meteor.userId(), {$set: userData}, function(err){
                if (err) {
                  console.log(err);
                } else {
                  // console.log('User updated');
                  ticketLimit -= 1;
                  if (ticketLimit === 0) {
                    var _ticketStatus = _.extend(_ticketId, {
                      status: 'closed',
                      updatedAt: new Date()
                    });
                    Tickets.update(routeId, {$set: _ticketStatus}, function(err){
                      if (err) {
                        console.log(err.reason);
                      }
                    });
                  }
                  if (usersRef[0] === 'empty') {
                    usersRef.pop();
                    var _usersRef = usersRef.push(Meteor.userId());
                  } else {
                    var _usersRef = usersRef.push(Meteor.userId());
                  }
                  var _ticketLimit = _.extend(_ticketId, {
                    limit: ticketLimit,
                    usersRef: usersRef,
                    updatedAt: new Date()
                  });
                  Tickets.update(routeId, {$set: _ticketLimit}, function(err){
                    if (err) {
                      console.log(err);
                    } else {
                      // console.log('Ticket limit updated');
                    }
                  });
                  Router.go('user.show', {_id: Meteor.userId()});
                }
              });
            }
          });
          break;
        case ticketLimit === 0:
          growl('Ticket has reached its limit, please request another one', 'error');
          break;
        default:
          break;
      }
    } else {
      growl('Ticket is not valid, copy-paste it for best matching.', 'error');
    }
	}
});

Template.authSignup.rendered = function(){};