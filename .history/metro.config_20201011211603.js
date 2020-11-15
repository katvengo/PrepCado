const blacklist = require('react-native/packager/blacklist');

module.exports = { 
 resolver: {
   blacklistRE: blacklist([/#current-cloud-backend\/.*/])
 }
};


var blacklist = require('react-native/packager/blacklist');

var config = {
  getBlacklistRE(platform) {
    return blacklist(platform, [
      /node_modules\/my-package\/excluded-directory\/.*/
    ]);
  }
};

module.exports = config;