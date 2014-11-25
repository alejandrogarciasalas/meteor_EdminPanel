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
	}
});

OrgEditController = FastRender.RouteController.extend({
	data: function(){
		var orgRef = getOrg();
		var orgName = Orgs.findOne(orgRef, {fields: {name: 1}});
		orgName = orgName.name;
		return {
			view: {
				title: i18n.t('Editing ' + orgName)
			}
		}
	}
});