UsersIndexController = FastRender.RouteController.extend({
	data: function(){
		var orgRef = getOrg();
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

UserShowController = FastRender.RouteController.extend({
	data: function(){
		return {
			view: {
				title: i18n.t('User\'s profile')
			},
			user: Meteor.users.findOne({_id: this.params._id})
		}
	},
	waitOn: function(){
		var orgRef = getOrg();
		return [
			subs.subscribe('userProfile', this.params._id),
			subs.subscribe('orgByUser', orgRef)
		]
	}
});

UserEditController = FastRender.RouteController.extend({
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
	}
});