'use strict';

import Store from './Store';

class FileStore extends Store{
  addFile(){
    let files = [...this.getState(),''];
    this.setState(files);
  }
  removeFile(index){
    let files = this.getState();
    if (files.length === 1) {
      let startFiles = [''];
      this.setState(startFiles);
    }else{
      files.splice(index,1);
      this.setState(files);
    }
  }
  updateFile(index,file){
    let files = this.getState();
    files[index] = file;
    let updatedFiles = [...files];
    this.setState(updatedFiles);
  }
}

const fileStore = new FileStore(['']);

export default fileStore;
