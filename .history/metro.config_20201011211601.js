const blacklist = require('react-native/packager/blacklist');

module.exports = { 
 resolver: {
   blacklistRE: blacklist([/#current-cloud-backend\/.*/])
 }
};