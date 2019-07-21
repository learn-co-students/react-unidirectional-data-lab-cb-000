'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }

  render() {
    const {key,file,isSelected,onClick} = this.props;
    let fileExists = '';
    if (file !== undefined && file !== '') {
      fileExists = this.constructor.getTitle(file);
    }
    return (
      <li className={isSelected ? 'sidebar__item--selected' : 'sidebar__item'}>
        <a className='sidebar__link' onClick={onClick}>
          {fileExists === ''
            ? <em>Untitled</em>
            :fileExists
          }
        </a>
      </li>
    );
  }
}
