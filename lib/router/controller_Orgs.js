OrgShowController = RouteController.extend({
	data: function(){
		var orgRef = Session.get('orgRef');
		var orgName = Orgs.findOne(orgRef, {fields: {name: 1}});		
		orgName = orgName.name;
		return {
			view: {
				title: orgName
			}
		}
	},
	waitOn: function(){
		var orgRef = Session.get('orgRef');
		return subs.subscribe('orgByUser', orgRef);
	},
	fastRender: true
});

OrgEditController = RouteController.extend({
	data: function(){
		var orgRef = Session.get('orgRef');
		var orgName = Orgs.findOne(orgRef, {fields: {name: 1}});
		orgName = orgName.name;
		return {
			view: {
				title: i18n.t('Editing ' + orgName)
			},
			org: Orgs.findOne(orgRef)
		}
	},
	waitOn: function(){
		var orgRef = Session.get('orgRef');
		return subs.subscribe('orgByUser', orgRef);
	},
	fastRender: true
});

OrgNewController = RouteController.extend({
	// data: function(){},
	// waitOn: function(){},
	// fastRender: true
});

/* =========================
	ORGANIZATIONS
	========================== */

Router.route('/org-show', {
	template: 'orgShow',
	name: 'org.show',
	controller: 'OrgShowController'
});

Router.route('/org-edit', {
	template: 'orgEdit',
	name: 'org.edit',
	controller: 'OrgEditController'
});

Router.route('/org-new', {
	layoutTemplate: 'authLayout',
	yieldRegions: {
    'navTop': {to: 'navTop'}
  },
	template: 'orgNew',
	name: 'org.new',
	controller: 'OrgNewController'
});