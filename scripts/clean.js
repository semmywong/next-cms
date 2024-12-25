const fs = require('fs');
const process = require('process');

const DEL_TARGET = ['node_modules', 'dist', '.turbo'];
const enterTargetDir = process.cwd();

deleteTargetFolder(enterTargetDir, DEL_TARGET);

function deleteTargetFolder(path, target) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      const curPath = path + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        // 同下边 都改成lstatSync
        if (target.includes(file)) {
          try {
            console.log('directory being deleted. %s', curPath);
            deleteFolder(curPath);
            console.log('successfully delete the directory. %s', curPath);
          } catch (error) {
            console.error('failed to delete directory. %s', curPath);
          }
        } else {
          deleteTargetFolder(curPath, target);
        }
      }
    });
  }
}

function deleteFolder(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      const curPath = path + '/' + file;
      //  本来网上是statSync 我给改成了 lstatSync
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolder(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}
