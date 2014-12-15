AutoForm.hooks({
	userEditForm: {
		onSuccess: function(operation, result, template) {
			growl('Information updated successfully', 'success');
		}
	},
	orgEditForm: {
		onSuccess: function(operation, result, template) {
			growl('Information updated successfully', 'success');
		}
	},
	orgNewForm: {
		onSuccess: function(op, result, template) {
			Session.set('orgId', result);
			// console.log(Session.get('orgId'));
			Router.go('auth.admin', {orgId: result});
		}
	}
});