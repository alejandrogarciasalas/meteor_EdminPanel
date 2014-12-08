UsersIndexController = RouteController.extend({
	data: function(){
		var orgRef = Session.get('orgRef');
		return {
			view: {
				title: i18n.t('Users list')
			},
			users: Meteor.users.find({orgRef: orgRef})			
		}
	},
	waitOn: function(){
		return subs.subscribe('userTickets', Meteor.userId());
	},
	fastRender: true
});

UserShowController = RouteController.extend({
	data: function(){
		return {
			view: {
				title: i18n.t('User\'s profile')
			},
			user: Meteor.users.findOne({_id: this.params._id})
		}
	},
	waitOn: function(){
		var orgRef = Session.get('orgRef');
		return [
			subs.subscribe('userProfile', this.params._id),
			subs.subscribe('orgByUser', orgRef)
		]
	},
	fastRender: true
});

UserEditController = RouteController.extend({
	data: function(){
		return {
			view: {
				title: i18n.t('Edit your profile')
			},
			user: Meteor.users.findOne({_id: this.params._id})
		}
	},
	waitOn: function(){
		return subs.subscribe('userProfile', this.params._id);
	},
	fastRender: true
});