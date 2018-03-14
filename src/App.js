import React, { Component } from 'react';
import './reset.css';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Alan from './pizza.jpg';

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
          title={`Pizza Bar`}
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
          title="Click if you like pizza :)"
          open={this.state.dialog}
          actions={
            <RaisedButton
              secondary={true}
              label="Yes for pizza!"
              onClick={() => this.setState({ dialog: false })}
            />
          }
        />

        <RaisedButton
          secondary={true}
          label="Confirm You Like Pizza"
          onClick={() => this.setState({ dialog: true })}
        />

        <Paper
          style={{ width: '400px', height: '550px', margin: '0 auto' }}
          rounded={true}
          zDepth={4}
        >
        </Paper>

      </div>
    );
  }
}

export default App;