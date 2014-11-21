Package.describe(
  {
    summary: "Edmin Panel iGrowl Notifications",
    name: 'edminpanel:igrowl-notifications'
  }
);

Package.onUse(function (api) {

  // api.use([], ['client', 'server']);

  api.use([
    'jquery',
    'templating',
    'ui',
    'telescope:i18n'
  ], 'client');

  api.add_files(['lib/client/igrowl.min.js', 'lib/client/iGrowl.js'], ['client']);

  // api.add_files([
  //   'lib/client/...'
  //   ], ['client']);

  // api.add_files(['lib/server/...'], ['server']);
 
  api.export(['growl']);
});