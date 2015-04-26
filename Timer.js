var React = require('react');

var Timer = React.createClass({
  getInitialState: function () {
    return {secondsElapsed: 0};
  },
  tick: function () {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillMount: function () {
    clearInterval(this.interval);
  },
  render: function () {
    return React.DOM.div(
      {},
      React.DOM.input({type: 'text', defaultValue: 'Edit, me!'}),
      'Seconds Elapsed: ', this.state.secondsElapsed
    );
  }
});

module.exports = Timer;