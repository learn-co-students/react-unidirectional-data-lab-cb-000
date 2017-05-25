'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  constructor(props){
    super(props);

    this.getTitle = this.getTitle.bind(this);
  }

  getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }

  render() {
    const { file = '', isSelected, onClick } = this.props;
    return (
      <li className={classNames('sidebar__item',
        { 'sidebar__item--selected': isSelected }
      )}>
        <a className='sidebar__link' onClick={onClick}>
          {
            this.getTitle(file) || <em>Untitled</em>
          }
        </a>
      </li>
    );
  }
}
