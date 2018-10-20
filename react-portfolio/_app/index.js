var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
// var Routeapp = require('./components/Routeapp');
import Routeapp from './components/Routeapp';
// var Projects = require('./components/Projects');
import Projects from './components/Projects';

class App extends React.Component {
  render() {
    return (
      <div >
        <Routeapp />,
        <Projects />,
        <p>This is the App testing here</p>
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('app'));