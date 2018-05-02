(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = window.React;
var Component = React.Component;

var TabRouter = function (_Component) {
    _inherits(TabRouter, _Component);

    function TabRouter(props) {
        _classCallCheck(this, TabRouter);

        var _this = _possibleConstructorReturn(this, (TabRouter.__proto__ || Object.getPrototypeOf(TabRouter)).call(this, props));

        _this.state = {
            current: 0
        };
        return _this;
    }

    _createClass(TabRouter, [{
        key: "itemNav",
        value: function itemNav(index) {
            return index === this.state.current ? "ui-col nav-active" : "ui-col";
        }
    }, {
        key: "itemCont",
        value: function itemCont(index) {
            return index === this.state.current ? "cont" : "cont hide";
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "tab_main" },
                React.createElement(
                    "div",
                    { className: "tab_title" },
                    React.Children.map(this.props.children, function (element, index) {
                        return React.createElement(
                            "div",
                            { onClick: function onClick() {
                                    _this2.setState({ current: index });
                                }, className: _this2.itemNav(index) },
                            element.props.title
                        );
                    })
                ),
                React.createElement(
                    "div",
                    { className: "tab_content" },
                    React.Children.map(this.props.children, function (element, index) {
                        return React.createElement(
                            "div",
                            { className: _this2.itemCont(index) },
                            element
                        );
                    })
                )
            );
        }
    }]);

    return TabRouter;
}(Component);

exports.default = TabRouter;

},{}]},{},[1]);
