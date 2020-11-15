

var blacklist = require('react-native/packager/blacklist');

var config = {
  getBlacklistRE(platform) {
    return blacklist(platform, [
        /#current-cloud-backend\/.*/
    ]);
  }
};

module.exports = config;

const blacklist = require('metro-config/src/defaults/blacklist');

// blacklist is a function that takes an array of regexes and combines
// them with the default blacklist to return a single regex.

module.exports = {
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/])
  }
};