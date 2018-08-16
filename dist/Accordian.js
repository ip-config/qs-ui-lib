'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accordian = function Accordian(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return _react2.default.createElement(
    'details',
    {
      className: 'jsx-2007648393' + ' ' + 'Accordian'
    },
    _react2.default.createElement(
      'summary',
      {
        className: 'jsx-2007648393'
      },
      title
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-2007648393' + ' ' + 'details-content'
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '2007648393',
      css: 'details.jsx-2007648393{padding:0;max-width:635px;border-radius:2px;background-color:#ffffff;border:solid 1px #e4e4e4;cursor:pointer;}details.jsx-2007648393:focus,summary.jsx-2007648393:focus{outline:none !important;}summary.jsx-2007648393{padding:20px 40px 20px 0;position:relative;font-size:16px;font-weight:bold;font-style:normal;font-stretch:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#1e2837;}summary.jsx-2007648393::after{content:\'\';display:block;position:absolute;right:20px;top:20px;width:20px;height:10px;line-height:1;background:' + ('url(' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-arrow.svg.js') + ')') + ' no-repeat center center;}summary.jsx-2007648393::-webkit-details-marker{color:transparent;}details[open].jsx-2007648393 summary.jsx-2007648393::after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.details-content.jsx-2007648393{margin:0 0 20px 20px;font-size:14px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.43;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#1e2837;}'
    })
  );
};

Accordian.propTypes = {
  /**
   * Child Elements
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired
};

Accordian.defaultProps = {};

exports.default = Accordian;