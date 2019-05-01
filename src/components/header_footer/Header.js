import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {

  state = {
    drawerOpen: false,
    showHeaderBg: false
  }

  componentDidMount() {
    // Vanilla JavaScript to set listener to scrolling event
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Remember to remove event listeners if you don't need them
    window.removeEventListener('scroll');
  }

  handleScroll = () => {
    // Check if scroll position is at the top of the page
    if (window.scrollY > 0) {
      this.setState({
        showHeaderBg: true
      })
    } else {
      this.setState({
        showHeaderBg: false
      })
    }
  }

  toggleDrawer = (value) => {
      this.setState({
        drawerOpen: value
      })
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.showHeaderBg ? "#2f2f2f" : 'transparent',
          boxShadow: 'none',
          padding: '10px 0'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font-frijole header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon/>
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;