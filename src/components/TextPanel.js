import React from 'react';

class TextPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="text-panel">
        <div className="story-text-container">
          <h1 className="story-heading">{this.props.heading}</h1>
          <div className="story-body">
            <div className="text-fade"></div>
            <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TextPanel;
