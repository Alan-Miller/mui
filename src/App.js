import React, { Component } from 'react';
import './reset.css';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Alan from './question.jpg';

class App extends Component {
  constructor() {
    super()
    this.state = {
      drawer: false,
      dialog: false
    }
  }
  render() {
    return (
      <div className="App">

        <AppBar
          onLeftIconButtonClick={() => this.setState({ drawer: !this.state.drawer })}
          showMenuIconButton={true}
          title={`AppBar Title`}
          style={{ height: '100px', display: 'flex', alignItems: 'center' }}
          iconElementLeft={
            <FloatingActionButton
              children={<h1 style={{ color: 'white', fontSize: '28px' }}>+</h1>}
              secondary={true}
            />
          }
        >
          <Avatar
            backgroundColor="orange"
            size={70}
            src={Alan}
          />
        </AppBar>

        <Drawer
          open={this.state.drawer}
          openSecondary={true}
          width={'50%'}
        >
          <AppBar
            style={{ height: '100px', display: 'flex', alignItems: 'center' }}
            showMenuIconButton={false}
          />
          <MenuItem>First</MenuItem>
          <MenuItem>Second</MenuItem>
          <MenuItem>Third</MenuItem>
        </Drawer>
        <Dialog
          title="Click if you're awesome :)"
          open={this.state.dialog}
          actions={
            <RaisedButton
              secondary={true}
              label="Confirmed!"
              onClick={() => this.setState({ dialog: false })}
            />
          }
        />

        <RaisedButton
          secondary={true}
          label="Confirm You're Awesome"
          onClick={() => this.setState({ dialog: true })}
        />

      </div>
    );
  }
}

export default App;