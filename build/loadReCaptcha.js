"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Callback by default is an empty function to execute nothing when no callback is passed
var loadReCaptcha = function loadReCaptcha(siteKey) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var script = document.createElement('script');

  if (!window.onLoadCaptchaV3Callback && callback) {
    window.onLoadCaptchaV3Callback = callback;
  }

  script.src = "https://www.recaptcha.net/recaptcha/api.js?onload=onLoadCaptchaV3Callback&render=".concat(siteKey);
  document.body.appendChild(script);
};

var _default = loadReCaptcha;
exports["default"] = _default;