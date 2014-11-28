OrgShowController = FastRender.RouteController.extend({
	data: function(){
		var orgRef = getOrg();
		var orgName = Orgs.findOne(orgRef, {fields: {name: 1}});		
		orgName = orgName.name;
		return {
			view: {
				title: orgName
			}
		}
	},
	waitOn: function(){
		var orgRef = getOrg();
		return subs.subscribe('orgByUser', orgRef);
	}
});

OrgEditController = FastRender.RouteController.extend({
	data: function(){
		var orgRef = getOrg();
		// console.log(orgRef);
		var orgName = Orgs.findOne(orgRef, {fields: {name: 1}});
		// console.log(orgName);
		orgName = orgName.name;
		return {
			view: {
				title: i18n.t('Editing ' + orgName)
			},
			org: Orgs.findOne(orgRef)
		}
	},
	waitOn: function(){
		var orgRef = getOrg();
		return subs.subscribe('orgByUser', orgRef);
	}
});