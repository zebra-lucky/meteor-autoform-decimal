Package.describe({
  name: 'zebralucky:autoform-decimal',
  version: '0.0.1',
  summary: 'decimal support for autoform',
  git: 'https://github.com/zebra-lucky/meteor-autoform-decimal'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.7', 'METEOR@1.8');
  api.use([
    'templating@1.0.0',
    'blaze@2.0.0',
    'mongo-decimal@0.1.0',
    'aldeed:autoform@6.0.0',
  ], ['client']);
  api.addFiles([
    'autoform-decimal.html',
    'autoform-decimal.js'
  ], ['client']);
});
