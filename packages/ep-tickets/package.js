Package.describe(
  {
    summary: "Edmin Panel Tickets",
    name: 'edminpanel:tickets'
  }
);

Package.onUse(function (api) {

  api.use(['aldeed:simple-schema', 'aldeed:collection2', 'telescope:i18n', 'audit-argument-checks'], ['client', 'server']);

  api.use([
    'jquery',
    'underscore',
    'iron:router',
    'templating',
    'ui'
  ], 'client');

  api.add_files(['lib/ep-tickets.js'], ['client', 'server']);

  api.add_files([
    'lib/client/routes.js',
    'lib/client/views/tickets_index.html',
    'lib/client/views/tickets_index.js',
    'lib/client/views/ticket_new.html',
    'lib/client/views/ticket_new.js',
    'lib/client/views/auth_signup.html',
    'lib/client/views/auth_signup.js'
    ], ['client']);

  api.add_files(['lib/server/publications.js'], ['server']);
 
  // api.export(['']);
});