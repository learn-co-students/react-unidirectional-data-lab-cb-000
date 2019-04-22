'use strict';

import Store from './Store';

class FileStore extends Store {
  addFile() {
    const files = this.getState().slice();
    this.setState([...files, ''])
  }

  removeFile(index) {
    const files = this.getState().slice();
    if (files.length > 1) {
      files.splice(index, 1);
      this.setState(files);
    } else {
      this.setState(['']);
    }
  }

  updateFile(index, file) {
    const files = this.getState().slice();
    files.splice(index, 1, file)
    this.setState(files);
  }
}

const fileStore = new FileStore(['']);

export default fileStore;
