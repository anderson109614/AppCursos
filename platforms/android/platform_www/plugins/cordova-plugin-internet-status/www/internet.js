cordova.define("cordova-plugin-internet-status.internet", function(require, exports, module) {
"use strict";

module.exports = {

    CONNECTED: 1,
    DISCONNECTED: 0,

    getStatus: function (callback) {
        cordova.exec(callback, function () {
        }, "InternetStatus", "getStatus", []);
    }
};
});
