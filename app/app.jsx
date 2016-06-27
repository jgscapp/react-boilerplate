var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
//require('style!css!applicationStyles')

// app with sass
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <p>BoilerPlate 3 Project</p>,
  document.getElementById('app')
);