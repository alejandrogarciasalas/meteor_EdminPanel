/* =========================
	TICKETS
	========================== */
var userId = Meteor.userId();

Router.route('/signup/:_ticketId', {
	layoutTemplate: 'authLayout',
	template: 'authSignup',
	name: 'auth.signup',
	yieldRegions: {
    'navTop': {to: 'navTop'},
  },
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

Router.route('/tickets-index', {
	template: 'ticketsIndex',
	name: 'tickets.index',
	data: function(){
		return {
			view: {
				title: i18n.t('Tickets created by you')
			},
			tickets: Tickets.find({userRef: Meteor.userId()})
		}
	},
	waitOn: function(){
		return Meteor.subscribe('userTickets', Meteor.userId());
	}
});

Router.route('/ticket-new', {
	template: 'ticketNew',
	name: 'ticket.new',
	data: function(){
		return {
			view: {
				title: i18n.t('Create new ticket')
			}
		}
	}
});