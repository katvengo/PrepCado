const blacklist = require('metro-bundler').createBlacklist;

module.exports = { 
 resolver: {
   blacklistRE: blacklist([/#current-cloud-backend\/.*/])
 }
};