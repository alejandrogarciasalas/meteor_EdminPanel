Package.describe({
	summary: "Telescope i18n package",
	name: 'telescope:i18n'
});

Package.onUse(function (api) {
	api.use(['ui'], 'client');
  api.add_files(['i18n.js'], ['client', 'server']);
	api.export('i18n');
});