'use strict'

import React from 'react';
import classNames from 'classnames';

function getTitle(file){
  return file.split('\n').find(line => line.length);
}

export default class SidebarItem extends React.Component {
  render() {
    return (
      <li className={classNames('sidebar__item', {'sidebar__item--selected':this.props.isSelected})}>
        <a href='#' onClick={this.props.onClick} className='sidebar__link'><em>Untitled</em></a>
      </li>
    );
  }
}
