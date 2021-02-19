"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var loadReCaptcha = function loadReCaptcha(_ref) {
  var id = _ref.id,
      key = _ref.key;

  if (typeof document === 'undefined') {
    return Promise.reject(new Error('document is undefined'));
  }

  return new Promise(function (resolve, reject) {
    if (document.getElementById(id) !== null) {
      return resolve(id);
    }

    var script = document.createElement('script');
    script.id = id;
    script.src = "https://www.google.com/recaptcha/api.js?render=".concat(key);
    script.async = true;

    script.onload = function () {
      resolve(id);
    };

    script.onerror = function (e) {
      reject(e, id);
    };

    document.body.appendChild(script);
  });
};

var _default = loadReCaptcha;
exports["default"] = _default;