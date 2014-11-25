getOrg = function(){
	var orgRef = Meteor.users.findOne(Meteor.userId(), {fields: {orgRef: 1}});
  orgRef = orgRef.orgRef;
  return orgRef;
};