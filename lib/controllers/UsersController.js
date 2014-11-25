UsersIndexController = FastRender.RouteController.extend({
	data: function(){
		var orgRef = getOrg();
		return {
			view: {
				title: i18n.t('Users list')
			},
			users: Meteor.users.find({orgRef: orgRef})
		}
	}
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
		return Meteor.subscribe('userProfile', this.params._id);
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
		return Meteor.subscribe('userProfile', this.params._id);
	}
});