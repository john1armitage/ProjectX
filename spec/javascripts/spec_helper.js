//= require application.js.erb
//= require_self

var d = document;
d.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Account.rootElement = "#ember-testing";
Account.setupForTesting();
Account.injectTestHelpers()