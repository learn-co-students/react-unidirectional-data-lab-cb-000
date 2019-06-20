'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = ({ files, selectedFileIndex, onSelect }) => (
  <ul className="sidebar">
    {
      files.map((file, i) => (
        <SidebarItem
          isSelected={selectedFileIndex === i}
          key={i}
          file={file}
          onClick={(ev, index=i) => { ev.preventDefault(); onSelect(i) }}
        />
      ))
    }
  </ul>
);

export default Sidebar;
