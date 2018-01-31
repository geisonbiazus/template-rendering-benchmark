import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li>List Item {this.props.index}</li>
    );
  }
}
