Package.describe({
  name: 'q42:react-markdown',
  version: '0.0.1',
  summary: 'React component to parse markdown with Marked',
  git: 'https://github.com/Jpunt/meteor-react-markdown.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('react-markdown.js');
});
