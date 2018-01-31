import React, { Component } from 'react';
import Text from './text';
import List from './list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Text />
        <List list={this.props.list} />
      </div>
    );
  }
}
