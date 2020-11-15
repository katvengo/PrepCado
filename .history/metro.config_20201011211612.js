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
        /#current-cloud-backend\/.*/
    ]);
  }
};

module.exports = config;