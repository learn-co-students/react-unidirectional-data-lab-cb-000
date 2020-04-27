'use strict';

import Store from './Store';

class FileStore extends Store {

  addFile() {
    const files = this.getState().concat('')
    this.setState(files)
  }

  removeFile(index) {
    const files = this.getState().slice()
    if (files.length === 1) {
      this.setState([''])
    } else {
      files.splice(index, 1)
      this.setState(files)
    }
  }

  updateFile(index, file) {
    const files = this.getState().slice()
    // files[index] = file
    files.splice(index, 1, file)
    this.setState(files)
  }
}

const fileStore = new FileStore(['']);

export default fileStore;
