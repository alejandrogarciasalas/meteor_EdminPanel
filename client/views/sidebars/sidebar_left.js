'use strict';

Template.sidebarLeft.events({
	'click #signout': function(e,t){
		e.preventDefault();
		if(Meteor.userId()) {
			Meteor.logout(function(err){
				if (err) {
					console.log('Can\'t logout user');
				} else {
					Router.go('auth.signin');
				}
			});
		} else {
			console.log('User is not logged in');
		}
	},
	'mouseover .has-dropdown > a': function(e, t){
    if ($('.site-wrapper').hasClass('sidebar-left-shrink')) {
      $(e.currentTarget).parent().addClass('dropdown-open');
    } else {
      return false;
    }
	},
	'mouseleave .has-dropdown > a': function(e,t){
    if ($('.site-wrapper').hasClass('sidebar-left-shrink')) {
      $(e.currentTarget).parent().removeClass('dropdown-open');
    } else {
      return false;
    }
	},
	'mouseover .sidebar-left-dropdown': function(e, t){
    if ($('.site-wrapper').hasClass('sidebar-left-shrink')) {
      $(e.currentTarget).parent().addClass('dropdown-open');
    } else {
      return false;
    }
	},
	'mouseleave .sidebar-left-dropdown': function(e,t){
    if ($('.site-wrapper').hasClass('sidebar-left-shrink')) {
      $(e.currentTarget).parent().removeClass('dropdown-open');
    } else {
      return false;
    }
	}
});

Template.sidebarLeft.helpers({
	userOwnProfile: function(){
		return '/user-show/' + Meteor.userId();
	}
});