import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TimeIcon from '@material-ui/icons/Timelapse';
import InfoIcon from '@material-ui/icons/InfoOutline';
import HighlightIcon from '@material-ui/icons/Star'
import PriceIcon from '@material-ui/icons/AttachMoney';
import LocationIcon from '@material-ui/icons/LocationOn';


const SideDrawer = (props) => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false)
  }

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
      >
          <List component="nav">
              <ListItem button onClick={() => scrollToSection('featured')}>
                <ListItemIcon>
                    <TimeIcon/>
                </ListItemIcon>
                <ListItemText primary="Event Time" />
              </ListItem>

              <ListItem button onClick={() => scrollToSection('venue_info')}>
                <ListItemIcon>
                    <InfoIcon/>
                </ListItemIcon>
                <ListItemText primary="Venue Info" />
              </ListItem>

              <ListItem button onClick={() => scrollToSection('highlights')}>
                <ListItemIcon>
                    <HighlightIcon/>
                </ListItemIcon>
                <ListItemText primary="Highlights" />
              </ListItem>

              <ListItem button onClick={() => scrollToSection('pricing')}>
                <ListItemIcon>
                    <PriceIcon/>
                </ListItemIcon>
                <ListItemText primary="Pricing" />
              </ListItem>

              <ListItem button onClick={() => scrollToSection('location')}>
                <ListItemIcon>
                    <LocationIcon/>
                </ListItemIcon>
                <ListItemText primary="Location" />
              </ListItem>
          </List>
      </Drawer>
    </div>
  )
}

export default SideDrawer;