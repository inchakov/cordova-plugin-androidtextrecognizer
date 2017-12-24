"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextRecognizer = /** @class */ (function () {
    function TextRecognizer() {
    }
    TextRecognizer.detect = function (options) {
        var method;
        var args;
        if (options.path) {
            method = "detectFromPath";
            args = [options.path];
        }
        if (options.data) {
            method = "detectFromData";
            args = [options.data];
        }
        if (!method)
            throw new Error('Expected "path" or "data" option.');
        cordova.exec(options.success, options.error, "TextRecognizer", method, args);
    };
    return TextRecognizer;
}());
exports.TextRecognizer = TextRecognizer;
