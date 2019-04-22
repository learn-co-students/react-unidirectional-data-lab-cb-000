'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {
  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index);
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
        {
          files.map((file, index) => {
            return <SidebarItem onClick={this.handleClick.bind(this, index)} isSelected={selectedFileIndex === index} file={file} key={index} />
          })
        }
      </ul>
    );
  }
}
