(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var props = {
    state: '已结束'
};

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'header' },
                React.createElement(
                    'h1',
                    { className: 'title_header' },
                    '\u7B2C\u4E94\u5C4A\u5317\u4EACMBA\u7BEE\u7403\u8054\u8D5B'
                ),
                React.createElement(
                    'div',
                    { className: 'FirstTeam' },
                    React.createElement(
                        'h2',
                        null,
                        '\u4E3B\u961F'
                    ),
                    React.createElement('img', { src: '' }),
                    React.createElement(
                        'h3',
                        null,
                        '\u4E2D\u56FD\u79D1\u5B66\u9662MBA'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '56'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'vs' },
                    React.createElement(
                        'div',
                        null,
                        '\u5DF2\u7ED3\u675F'
                    ),
                    React.createElement(
                        'button',
                        null,
                        '\u67E5\u770B\u56DE\u653E'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'SecondTeam' },
                    React.createElement(
                        'h2',
                        null,
                        '\u5BA2\u961F'
                    ),
                    React.createElement('img', { src: '' }),
                    React.createElement(
                        'h3',
                        null,
                        '\u5317\u4EAC\u7406\u5DE5MBA'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '54'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    '2018\u5E7405\u670812\u65E5 08:30'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Footer = function (_React$Component2) {
    _inherits(Footer, _React$Component2);

    function Footer(props) {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'footer' },
                '2'
            );
        }
    }]);

    return Footer;
}(React.Component);

var date = new Date().getTime();
ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(Header, { name: 'aaa' }),
    React.createElement(Footer, { name: 'world' })
), document.getElementById('root'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
