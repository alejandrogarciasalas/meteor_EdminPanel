Package.describe(
  {
    summary: "Edmin Panel evaluations package",
    name: 'edminpanel:evals'
  }
);

Package.onUse(function (api) {

  api.use([
    'aldeed:simple-schema',
    'aldeed:collection2',
    'telescope:i18n',
    'audit-argument-checks',
    'accounts-password',
    'accounts-base',
    'meteorhacks:fast-render'
  ], ['client', 'server']);


   api.use([
    'jquery',
    'underscore',
    'iron:router',
    'templating',
    'ui'
  ], 'client');

  api.add_files(['lib/ep-evals.js'], ['client', 'server']);

  api.add_files([
    'lib/client/routes.js',
    'lib/client/views/evals_index.html',
    'lib/client/views/evals_index.js',
    'lib/client/views/eval_new.html',
    'lib/client/views/eval_new.js',
    'lib/client/views/eval_show.html',
    'lib/client/views/eval_show.js'
    ], ['client']);

  // api.add_files(['lib/server/...'], ['server']);
 
  // api.export(['']);
});