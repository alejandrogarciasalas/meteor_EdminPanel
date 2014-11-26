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
	}
});