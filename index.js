setTimeOut(function () {
  var React = require('react');
  var Timer = require('./Timer');

  React.renderComponent(<Timer />, document.getElementById('react-root'));
}, 3000);