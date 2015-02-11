// getOrg = function(){
// 	if (Meteor.userId()) {
// 		var orgRef = Meteor.users.findOne(Meteor.userId(), {fields: {orgRef: 1}});
// 	  orgRef = orgRef.orgRef;
// 	  orgRef = orgRef.toString();
// 	  // console.log(orgRef);
// 	  return orgRef;
// 	}
// };


// var setUserOrg = function(){
// 	if (Meteor.userId()) {
// 		var orgRef = Meteor.users.findOne(Meteor.userId(), {orgRef: 1});
// 		orgRef = orgRef.orgRef;
// 		console.log(orgRef);
// 		Session.set('orgRef', orgRef);
// 	}
// };
// setUserOrg();