/* =========================
	TICKETS
	========================== */
var userId = Meteor.userId();
Router.route('/tickets-index', {
	template: 'ticketsIndex',
	name: 'tickets.index',
	data: function(){
		return {
			view: {
				title: i18n.t('Tickets created by you')
			},
			tickets: Tickets.find({userRef: userId})
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