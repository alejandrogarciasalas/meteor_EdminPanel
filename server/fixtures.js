// Meteor.startup(function(){
// 	var now = new Date();
// 	if (Orgs.find().count() === 0) {
// 	  Orgs.insert({
// 	    name: 'EdminPanel',
// 	    createdAt: now,
// 	    updatedAt: now,
// 	    description: 'Open Source Realtime Education Dashboard & Tools.',
// 	    groupsRef: []
// 	  });
// 	}
// 	if (Meteor.users.find().count() === 0) {
// 		var doc = {
// 			email: 'admin@edminpanel.com',
// 			password: 'EdminP@nel'
// 		}
// 		Accounts.createUser(doc);
// 		var userId = Meteor.users.findOne({}, {'id': 1});
// 		var orgRef = Orgs.findOne({},{_id: 1});
// 		orgRef = orgRef._id;
// 		userId = userId._id;
// 		console.log(orgRef);
// 		var userData = {
// 			type: 'auth.admin',
// 			updatedAt: now,
// 			orgRef: orgRef
// 		}
// 		console.log(userId);
// 		Meteor.users.update(userId, {$set: userData}, function(err){
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				console.log('Admin user updated');
// 			}
// 		});
// 	}
// });