import React from 'react';
import ReactDOM from 'react-dom';
//import '../src/css/main.scss';
import StoryContainer from '../src/components/StoryContainer';

class App extends React.Component {
  render() {
    return(
      <StoryContainer />
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
);
