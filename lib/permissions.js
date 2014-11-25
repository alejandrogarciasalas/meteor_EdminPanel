// if (this.userId) {
getUserType = function(userId){
	var userType = Meteor.users.findOne(userId, {fields: {type: 1}});
	userType = userType.type;
	// console.log(userType);
	switch (userType) {
		case ('auth.admin'):
			return 'auth.admin';
			break;
		case ('auth.teacher'):
			return 'auth.teacher';
			break;
		case ('auth.student'):
			return 'auth.student';
			break;
		default:
			console.log('User has not defined type :S');
	}
};

isAdmin = function(userId){
	var type = getUserType(userId) === 'auth.admin' ? true : false;
	return type;
};

isTeacher = function(userId){
	var type = getUserType(userId) === 'auth.teacher' ? true : false;
	return type;
};

isStudent = function(userId){
	var type = getUserType(userId) === 'auth.student' ? true : false;
	return type;
};
// }