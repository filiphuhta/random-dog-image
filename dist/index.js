'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./dog.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dogGenerator = function (_React$Component) {
  _inherits(dogGenerator, _React$Component);

  function dogGenerator(props) {
    _classCallCheck(this, dogGenerator);

    var _this = _possibleConstructorReturn(this, (dogGenerator.__proto__ || Object.getPrototypeOf(dogGenerator)).call(this, props));

    _this.state = {
      dogURL: ""
    };
    _this.newDog = _this.newDog.bind(_this);
    return _this;
  }

  _createClass(dogGenerator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'dog-container' },
        _react2.default.createElement('img', { variant: 'top', src: this.state.dogURL }),
        _react2.default.createElement(
          'button',
          { className: 'dog-button', onClick: this.newDog },
          'New Dog Image'
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Simple GET request using fetch
      fetch('https://dog.ceo/api/breeds/image/random').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({ dogURL: data.message });
      });
    }
  }, {
    key: 'newDog',
    value: function newDog() {
      var _this3 = this;

      fetch('https://dog.ceo/api/breeds/image/random').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this3.setState({ dogURL: data.message });
      });
    }
  }]);

  return dogGenerator;
}(_react2.default.Component);

exports.default = dogGenerator;