//--------------------------------------------------------------------------------------------------//
//--------------------------------------------- Configure --------------------------------------------//
//--------------------------------------------------------------------------------------------------//

subs = new SubsManager();

RouteController.extend({
	fastRender: true
});

Router.configure({
	layoutTemplate: 'layout',
	yieldRegions: {
    'navTop': {to: 'navTop'},
    'sidebarLeft': {to: 'sidebarLeft'},
    'sidebarRight': {to: 'sidebarRight'},
    'footer': {to: 'footer'}
  }
  // waitOn: function() {
  // 	if (Session.get('orgId')) {
  // 		// console.log(Session.get('orgId'));
	 //  	return [
	 //  		Meteor.subscribe('orgByUser', Session.get('orgId'))
	 //  		];
  // 	}
  // }
});