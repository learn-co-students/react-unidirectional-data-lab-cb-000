'use strict';

import Store from './Store';

class FileStore extends Store {
  updateFile(index, file){
    const newState = this.getState().slice()
    newState.splice(index,1,file)
    this.setState(newState)
  }

  addFile(){
    const newState = this.getState().concat('')
    this.setState(newState)
  }

  removeFile(index){
    var newState = this.getState().slice()
    if(newState.length == 1){
      newState.splice(index, 1, '')
    }
    else{
      newState.splice(index,1)
    }
    this.setState(newState)
  }

}

const fileStore = new FileStore(['']);

export default fileStore;
