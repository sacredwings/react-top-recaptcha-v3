"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isBrowser = typeof window !== 'undefined';

function isLoaded() {
  return isBrowser && typeof window.grecaptcha !== 'undefined';
}

function isReady() {
  return isLoaded() && typeof window.grecaptcha.execute === 'function';
}

var ReCaptcha = /*#__PURE__*/function (_Component) {
  _inherits(ReCaptcha, _Component);

  var _super = _createSuper(ReCaptcha);

  function ReCaptcha(props) {
    var _this;

    _classCallCheck(this, ReCaptcha);

    _this = _super.call(this, props);
    _this._updateReadyState = _this._updateReadyState.bind(_assertThisInitialized(_this));
    _this._setReady = _this._setReady.bind(_assertThisInitialized(_this));
    _this.state = {
      ready: isReady()
    };

    if (isBrowser) {
      _this.readyCheck = _this.state.ready ? null : window.setInterval(_this._updateReadyState, isLoaded() ? 0 : 1000);
    }

    return _this;
  }

  _createClass(ReCaptcha, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.ready) {
        this.execute();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (this.state.ready && !prevState.ready) {
        this.execute();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.readyCheck !== null) {
        clearInterval(this.readyCheck);
      }
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this$props = this.props,
          sitekey = _this$props.sitekey,
          verifyCallback = _this$props.verifyCallback,
          action = _this$props.action;
      window.grecaptcha.execute(sitekey, {
        action: action
      }).then(verifyCallback);
    }
  }, {
    key: "_setReady",
    value: function _setReady() {
      this.setState(function () {
        return {
          ready: true
        };
      });
    }
  }, {
    key: "_updateReadyState",
    value: function _updateReadyState() {
      if (isLoaded()) {
        window.grecaptcha.ready(this._setReady);
        clearInterval(this.readyCheck);
        this.readyCheck = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)
      );
    }
  }]);

  return ReCaptcha;
}(_react.Component);

_defineProperty(ReCaptcha, "propTypes", {
  verifyCallback: _propTypes["default"].func.isRequired,
  sitekey: _propTypes["default"].string.isRequired,
  action: _propTypes["default"].string.isRequired
});

var _default = ReCaptcha;
exports["default"] = _default;