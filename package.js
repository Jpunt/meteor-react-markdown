Package.describe({
  name: 'q42:react-markdown',
  version: '0.0.3',
  summary: 'React component to parse markdown in Meteor',
  git: 'https://github.com/Jpunt/meteor-react-markdown.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use('react@0.14.3');
  api.use('perak:markdown@1.0.5');
  api.addFiles('react-markdown.jsx');
  api.export('Markdown', ['client', 'server']);
});
