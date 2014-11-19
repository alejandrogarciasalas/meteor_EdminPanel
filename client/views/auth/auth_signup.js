'use strict';

Template.authSignup.events({
	'submit #signup-form': function(e, t){
		e.preventDefault();
		var email = t.find('#email').value;
    var password = t.find('#password').value;
    var doc = {
      email: email,
      password: password,
      createdAt: new Date().getTime()
    };
    Accounts.createUser(doc, function(err) {
      if (err) {
        
      } else {
        Router.go('users.index');
      }
    });
	}
});