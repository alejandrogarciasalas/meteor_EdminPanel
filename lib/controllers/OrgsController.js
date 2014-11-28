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