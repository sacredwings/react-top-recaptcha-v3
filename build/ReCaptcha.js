"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  elementID: _propTypes["default"].string,
  verifyCallbackName: _propTypes["default"].string,
  verifyCallback: _propTypes["default"].func,
  sitekey: _propTypes["default"].string.isRequired,
  action: _propTypes["default"].string.isRequired
};
var defaultProps = {
  elementID: 'g-recaptcha',
  verifyCallbackName: 'verifyCallback'
};

var isReady = function isReady() {
  return typeof window !== 'undefined' && typeof window.grecaptcha !== 'undefined' && typeof window.grecaptcha.execute !== 'undefined';
};

var readyCheck;

var ReCaptcha = /*#__PURE__*/function (_Component) {
  _inherits(ReCaptcha, _Component);

  var _super = _createSuper(ReCaptcha);

  function ReCaptcha(props) {
    var _this;

    _classCallCheck(this, ReCaptcha);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "execute", function () {
      var _this$props = _this.props,
          sitekey = _this$props.sitekey,
          verifyCallback = _this$props.verifyCallback,
          action = _this$props.action;

      if (_this.state.ready) {
        window.grecaptcha.execute(sitekey, {
          action: action
        }).then(function (token) {
          if (typeof verifyCallback !== 'undefined') {
            verifyCallback(token);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_updateReadyState", function () {
      if (isReady()) {
        _this.setState(function () {
          return {
            ready: true
          };
        });

        clearInterval(readyCheck);
      }
    });

    _this.state = {
      ready: isReady()
    };
    return _this;
  }

  _createClass(ReCaptcha, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.ready) {
        this.execute();
      } else {
        readyCheck = setInterval(this._updateReadyState, 1000);
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
      clearInterval(readyCheck);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.ready ? /*#__PURE__*/_react["default"].createElement("div", {
        id: this.props.elementID,
        "data-verifycallbackname": this.props.verifyCallbackName
      }) : /*#__PURE__*/_react["default"].createElement("div", {
        id: this.props.elementID,
        className: "g-recaptcha"
      });
    }
  }]);

  return ReCaptcha;
}(_react.Component);

ReCaptcha.propTypes = propTypes;
ReCaptcha.defaultProps = defaultProps;
var _default = ReCaptcha;
exports["default"] = _default;