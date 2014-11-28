AuthSignUpController = FastRender.RouteController.extend({
	data: function(){
  	return {
  		ticket: Tickets.findOne({_id: this.params._ticketId}),
  		users: Meteor.users.find()
  	};
  },
  waitOn: function(){
  	return [Meteor.subscribe('tickets'), Meteor.subscribe('users')];
  }
});