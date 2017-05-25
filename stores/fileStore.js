'use strict';

import Store from './Store';

class FileStore extends Store{

  updateFile(index, file){
    const files = this.getState().slice();
    files.splice(index, 1, file);
    this.setState(files);
  }

  addFile(){
    //concat returns copy of array
    const files = this.getState().concat('');
    this.setState(files);
  }

  removeFile(index){
    if (this.state.length === 1) {
      return this.setState(['']);
    }

    //slice returns copy of array
    const files = this.getState().slice();
    files.splice(index, 1);
    this.setState(files);
  }

}

const fileStore = new FileStore(['']);

export default fileStore;
