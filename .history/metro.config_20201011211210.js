const blacklist = require('metro-config').createBlacklist;

module.exports = { 
 resolver: {
   blacklistRE: blacklist([/#current-cloud-backend\/.*/])
 }
};