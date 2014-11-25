Template.usersIndex.rendered = function(){
	// console.log(this);
};

Template.usersIndex.helpers({
	orgName: function(){
		var orgRef = getOrg();
		var orgName = Orgs.findOne({_id: orgRef}, {fields: {name: 1}});
		orgName = orgName.name;
		return orgName;
	}
});