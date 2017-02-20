import React from 'react';
import TextPanel from './TextPanel';
import ImagePanel from './ImagePanel';

class StoryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      color: '#454545'
    };
  }

  handleMenuClick() {
      this.setState({menuOpen: !this.state.menuOpen});
      this.setState({color: 'coral'})
  }

  render() {

    (this.state.menuOpen) ? this.state.menuBtnText='Close Menu' : this.state.menuBtnText='Menu';
    (this.state.menuOpen) ? this.state.color='coral' : this.state.color='#454545';

    return(
      <div className="story-container">
        <button className="menu-btn"
          onClick={this.handleMenuClick.bind(this)}
          style={{color:this.state.color,borderColor:this.state.color}}>
          {this.state.menuBtnText}
        </button>
        <ImagePanel />
        <TextPanel heading="Hello World" body={bodyText}/>
      </div>
  );
  }
}


let bodyText = `Since Hurricane Wilma hit in late October, the clean up has been moving fast. In fact, commercial and charter flights are back on regular schedules and many of the Cancun hotels, restaurants, bars, shops, golf courses and clubs have reopened. Even the ancient Mayan sites of Tulum and Coba are open and looking better than ever.

In an effort to repair the beaches, engineers have been working around the clock building the equivalent of two American football fields of beach a day by collecting the displaced sand, from 22 miles off shore, onto two ships and re-depositing it back in it’s original location.

Since Hurricane Wilma hit in late October, the clean up has been moving fast. In fact, commercial and charter flights are back on regular schedules and many of the Cancun hotels, restaurants, bars, shops, golf courses and clubs have reopened. Even the ancient Mayan sites of Tulum and Coba are open and looking better than ever.

In an effort to repair the beaches, engineers have been working around the clock building the equivalent of two American football fields of beach a day by collecting the displaced sand, from 22 miles off shore, onto two ships and re-depositing it back in it’s original location.

Since Hurricane Wilma hit in late October, the clean up has been moving fast. In fact, commercial and charter flights are back on regular schedules and many of the Cancun hotels, restaurants, bars, shops, golf courses and clubs have reopened. Even the ancient Mayan sites of Tulum and Coba are open and looking better than ever.

In an effort to repair the beaches, engineers have been working around the clock building the equivalent of two American football fields of beach a day by collecting the displaced sand, from 22 miles off shore, onto two ships and re-depositing it back in it’s original location.`


export default StoryContainer
