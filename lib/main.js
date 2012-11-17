var async = require('async');

var Toolbox = function () {}

Toolbox.prototype.search = function (query, callback) {
  async.waterfall(
    [ function (callback) {
      require('npm').load({}, callback);
    }, function (npm, callback) {
      npm.commands.search([query], true, function (err, packages) {
        if (packages) {
          packages.npm = npm;
        };
        callback(err, packages);
      });
    }, function (packages, callback) {
      async.parallel(Object.keys(packages).map(function (name) {
        return function (callback) {
          packages.npm.commands.view([name], true, callback)
        };
      }), callback);
    }], callback);
};

module.exports = new Toolbox();