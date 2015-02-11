//--------------------------------------------------------------------------------------------------//
//--------------------------------------------- Filters --------------------------------------------//
//--------------------------------------------------------------------------------------------------//

Router._filters = {
	isNotLoggedIn: function(){
		if (Meteor.userId()) {
			// console.log('Already signed in');
		} else {
			Router.go('auth.signin');
		}
		this.next();
	},
	isLoggedIn: function(){
		if (Meteor.userId()) {
			Router.go('user.show', {_id: Meteor.userId()});
		}
		this.next();
	},
	resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    var $body = $('body');
    $body.scrollTop(scrollTo);
    $body.css("min-height", 0);
    this.next();
  },
  hasCompletedProfileInfo: function(){
  	if (Meteor.userId()) {
  		var userInfo = Meteor.users.findOne(Meteor.userId(), {fields: {name: 1, lastname: 1}});
  		var name = userInfo.name;
  		var lastname = userInfo.lastname;
  		if (name && lastname) {
  			this.next();
  		} else {
  			growl('You must add your name and lastname to continue');
  			Router.go('user.edit', {_id: Meteor.userId()});
  		}
  	}
		this.next();
  }
  // belongsToOrg: function(){
  // 	console.log(Session.get('orgId'));
  // 	if (Session.get('orgId')) {
  // 		this.next();
  // 	} else {
  // 		growl('You don\'t belong to any organization, please create one or signin');
  // 	}
  // 	this.next();
  // }
};
filters = Router._filters;

if(Meteor.isClient){
	// Router.onBeforeAction(filters.isNotLoggedIn, {except: ['auth.signin', 'auth.signup', 'org.new', 'auth.admin']});
	Router.onBeforeAction(filters.isLoggedIn, {only: ['auth.signin', 'auth.signup']});
	Router.onBeforeAction(filters.resetScroll);
	Router.onBeforeAction(filters.hasCompletedProfileInfo, {except: ['auth.signin', 'auth.signup']});
	// Router.onBeforeAction(filters.belongsToOrg, {only: ['auth.admin']});
}