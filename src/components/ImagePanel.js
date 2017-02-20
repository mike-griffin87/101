import React from 'react';

class ImagePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      bgImage: [{
        url:'url(./dist/img/20170211_1.jpg)',
        imageTitle: 'Hello World'
      },
      {
        url:'url(./dist/img/20170211_2.jpg)',
        imageTitle: 'goodbye World'
      }]
    }
  }

  changeSlide() {
    let a = (this.state.currentSlide >= this.state.bgImage.length-1) ? 0 : this.state.currentSlide+1;
    this.setState({currentSlide: a});
  }

  render() {
    let photoCount = (this.state.bgImage.length);
    return(
      <div className="image-panel"
      style={{backgroundImage:this.state.bgImage[this.state.currentSlide].url}}>
        <div className="overlay">
          <div className="slideshow-controls">
            <button className="next" onClick={this.changeSlide.bind(this)}>next</button>
          </div>
          <h3 className="image-info">{this.state.bgImage[this.state.currentSlide].imageTitle} | {this.state.currentSlide +1} of {photoCount}</h3>
        </div>
      </div>
    );
  }
}

export default ImagePanel
