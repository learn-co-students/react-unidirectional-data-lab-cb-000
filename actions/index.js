'use strict';

import fileStore from '../stores/fileStore';

const addFile = () => {
  fileStore.addFile();
};

const removeFile = (index) => {
  fileStore.removeFile(index);
};

const updateFile = (index, file) => {
  fileStore.updateFile(index, file);
};

export default {
  addFile,
  removeFile,
  updateFile,
};
