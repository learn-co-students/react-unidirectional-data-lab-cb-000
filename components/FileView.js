'use strict'

import React from 'react';
import Toolbar from './Toolbar';

export default class FileView extends React.Component {
  render() {
    const { file, onChange, onAdd, onRemove } = this.props;
    return (
      <div className='file-view'>
        <Toolbar
          onAdd={onAdd}
          onRemove={onRemove}
        />
        <textarea
          className='file-view__text'
          placeholder='type some text here...'
          value={file}
          onChange={onChange}
        />
      </div>
    );
  }
}
