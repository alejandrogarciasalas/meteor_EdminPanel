Template.authAdminSignup.helpers({
	orgName: function(){
		// var orgId = Router.current().params.orgId;
		// console.log(orgId);
		// console.log(Session.get('orgId'));
		// console.log(Orgs.findOne(Session.get('orgId'), {fields: {name: 1}}));
		return Orgs.findOne(Session.get('orgId'), {fields: {name: 1}}).name;
	}
});