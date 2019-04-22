'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
    getTitle(file) {
    // Find first non-empty line and use as title.
    if(!file) return false;
    const titleFile = file.split('\n');
    return titleFile[0].substring(0, 20);
  }
  render() {
    return (
      <li className={this.props.isSelected ? "sidebar__item sidebar__item--selected" : "sidebar__item"}>
        <a className="sidebar__link" onClick={this.props.onClick}>
          {this.getTitle(this.props.file) || <em>Untitled</em>}
        </a>
      </li>
    );
  }
}
