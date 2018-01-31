import React, { Component } from 'react';
import ListItem from './list_item.js'

export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => {
          return <ListItem key={index} index={item} />;
        })}
      </ul>
    );
  }
}
