// 'use strict';

if (Meteor.loggingIn()) {
  var orgRef = Meteor.users.findOne(Meteor.userId(), {orgRef: 1});
  orgRef = orgRef.orgRef;
  console.log(orgRef);
  Session.set('orgRef', orgRef);
}

Template.authSignin.events({
	'submit #signin-form': function(e, t){
		e.preventDefault();
		var email = t.find('#email').value;
    var password = t.find('#password').value;

    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        growl(err.message, 'error');
      } else {
        growl('Welcome back!', 'success');
        Router.go('users.index');
      }
    });   
	}
});