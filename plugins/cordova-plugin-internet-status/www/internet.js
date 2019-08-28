"use strict";

module.exports = {

    CONNECTED: 1,
    DISCONNECTED: 0,

    getStatus: function (callback) {
        cordova.exec(callback, function () {
        }, "InternetStatus", "getStatus", []);
    }
};