SettingsEditController = RouteController.extend({
	data: function(){
		return {
			view: {
				title: i18n.t('Edit settings')
			}
		}
	}
});

/* =========================
	SETTINGS
	========================== */
	
Router.route('/settings-edit', {
	template: 'settingsEdit',
	name: 'settings.edit',
	controller: 'SettingsEditController'
});