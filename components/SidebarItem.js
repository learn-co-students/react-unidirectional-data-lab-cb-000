'use strict'

import React from 'react';

// Find first non-empty line and use as title.
const getTitle = (file) => file.split('\n').find(line => line.length);

const SidebarItem = ({ file = '', isSelected, onClick }) => (
  <li className={`sidebar__item ${isSelected ? 'sidebar__item--selected' : ''}`}>
    <a href='#' onClick={onClick} className='sidebar__link'>
      {getTitle(file) || <em>Untitled</em>}
    </a>
  </li>
);


export default SidebarItem;
