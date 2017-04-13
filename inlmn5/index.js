/*jshint esnext: true, moz: true*/
/*jslint browser:true */
/*global React.Component, React, ReactDOM */

//REACT
//=====================================================
//GLOBALS

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var input1 = document.getElementById("textInput1");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var devided = document.getElementById("devided");
var outputSecond = document.getElementById("outputSecond");
var method = "";
var output3 = document.getElementById("output3");
//=====================================================
//CLASSES

//First

var First = (function (_React$Component) {
    _inherits(First, _React$Component);

    function First() {
        _classCallCheck(this, First);

        _get(Object.getPrototypeOf(First.prototype), "constructor", this).apply(this, arguments);
    }

    //END First

    //Second

    _createClass(First, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                input1.value
            );
        }
    }]);

    return First;
})(React.Component);

var Second = (function (_React$Component2) {
    _inherits(Second, _React$Component2);

    function Second() {
        _classCallCheck(this, Second);

        _get(Object.getPrototypeOf(Second.prototype), "constructor", this).apply(this, arguments);
    }

    //END Second

    //SecondState

    _createClass(Second, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                null,
                React.createElement("input", { id: "inputx", type: "text", name: "x", placeholder: "value1" }),
                React.createElement("input", { id: "inputy", type: "text", name: "y", placeholder: "value2" }),
                React.createElement(
                    "p",
                    null,
                    result()
                )
            );
        }
    }]);

    return Second;
})(React.Component);

var SecondState = (function (_React$Component3) {
    _inherits(SecondState, _React$Component3);

    function SecondState(props) {
        _classCallCheck(this, SecondState);

        _get(Object.getPrototypeOf(SecondState.prototype), "constructor", this).call(this, props);
        this.state = {};
        this.calcResult = this.calcResult.bind(this);
    }

    //END SecondState

    //Third

    _createClass(SecondState, [{
        key: "calcResult",
        value: function calcResult(e) {
            var method = e.target.textContent;
            var inputx = document.getElementById("inputx2");
            var inputy = document.getElementById("inputy2");
            var inputCorrect = inputx !== null && inputy !== null;
            if (inputCorrect) {
                console.log("***", method, ":", inputx.value, ":", inputy.value);
                if (method == "+") {

                    this.setState({ result: "Result is " + (parseInt(inputx.value) + parseInt(inputy.value)) });
                } else if (method == "-") {
                    this.setState({ result: "Result is " + (parseInt(inputx.value) - parseInt(inputy.value)) });
                } else if (method == "*") {
                    this.setState({ result: "Result is " + parseInt(inputx.value) * parseInt(inputy.value) });
                } else if (method == "/") {
                    console.log(inputx.value, inputy.value);
                    this.setState({ result: "Result is " + parseInt(inputx.value) / parseInt(inputy.value) });
                }
            } else {
                this.setState({ result: "" });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                null,
                React.createElement("input", { id: "inputx2", type: "text", name: "x2", placeholder: "value1" }),
                React.createElement("input", { id: "inputy2", type: "text", name: "y2", placeholder: "value2" }),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { onClick: this.calcResult, id: "plus2" },
                    "+"
                ),
                React.createElement(
                    "button",
                    { onClick: this.calcResult, id: "minus2" },
                    "-"
                ),
                React.createElement(
                    "button",
                    { onClick: this.calcResult, id: "times2" },
                    "*"
                ),
                React.createElement(
                    "button",
                    { onClick: this.calcResult, id: "devided2" },
                    "/"
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.result
                )
            );
        }
    }]);

    return SecondState;
})(React.Component);

var Third = (function (_React$Component4) {
    _inherits(Third, _React$Component4);

    function Third(props) {
        _classCallCheck(this, Third);

        _get(Object.getPrototypeOf(Third.prototype), "constructor", this).call(this, props);
        this.state = {
            text: "",
            class_name: "stateChange",
            clicked: 0,
            clickedMost: 0
        };
        this.stateChange = this.stateChange.bind(this);
    }

    //=====================================================
    //MAIN

    _createClass(Third, [{
        key: "stateChange",
        value: function stateChange(e) {
            var btn = undefined,
                btnArr = [],
                clickedTimes = 0,
                mostClicked = undefined;
            var btn1 = document.getElementById("btn1");
            var btn2 = document.getElementById("btn2");
            var btn3 = document.getElementById("btn3");
            btnArr = [btn1, btn2, btn3];

            for (var i = 1; i <= 3; i++) {
                btn = document.getElementById("btn" + i);
                btn.className = "";
            }

            var elm = e.target;
            this.setState({ text: elm.title, class_name: "stateChange", clicked: this.state.clicked + 1 });
            elm.className = this.state.class_name;

            if (elm.clicked === undefined) {
                elm.clicked = 0;
            }
            elm.clicked++;
            if (elm.clicked > 0) {
                for (var i = 0; i < 3; i++) {
                    clickedTimes = btnArr[i].clicked > clickedTimes ? btnArr[i].clicked : clickedTimes;

                    if (btnArr[i].clicked == clickedTimes) {
                        mostClicked = btnArr[i];
                    }
                }
                mostClicked.className = "clickedMost";
                this.setState({ clickedMost: mostClicked.clicked });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                null,
                React.createElement(
                    "button",
                    { title: "Första Knappen", onClick: this.stateChange, id: "btn1" },
                    "Btn1"
                ),
                React.createElement(
                    "button",
                    { title: "Andra Knappen", onClick: this.stateChange, id: "btn2" },
                    "Btn2"
                ),
                React.createElement(
                    "button",
                    { title: "Tredje Knappen", onClick: this.stateChange, id: "btn3" },
                    "Btn3"
                ),
                React.createElement(
                    "p",
                    null,
                    "Button:",
                    this.state.text,
                    ", Total clicks: ",
                    this.state.clicked,
                    ", Element clicked most: ",
                    this.state.clickedMost
                )
            );
        }
    }]);

    return Third;
})(React.Component);

ReactDOM.render(React.createElement(SecondState, null), outputSecond);
ReactDOM.render(React.createElement(Second, null), output2);
ReactDOM.render(React.createElement(Third, null), output3);
calcMethod(plus);
calcMethod(minus);
calcMethod(times);
calcMethod(devided);

//=====================================================
//CALLBACKS
input1.addEventListener("keyup", function () {
    ReactDOM.render(React.createElement(First, null), output1);
});

//=====================================================
//FUNCTIONS

//-----------------------------------
//class Second
function calcMethod(elm) {
    elm.addEventListener("click", function (e) {
        method = e.target.textContent;
        ReactDOM.render(React.createElement(Second, null), output2);
    });
}
function result() {
    var inputx = document.getElementById("inputx");
    var inputy = document.getElementById("inputy");

    if (inputx !== null && inputy !== null && method == "+") {
        return "Result is " + (parseInt(inputx.value) + parseInt(inputy.value));
    } else if (inputx !== null && inputy !== null && method == "-") {
        return "Result is " + (parseInt(inputx.value) - parseInt(inputy.value));
    }
    if (inputx !== null && inputy !== null && method == "*") {
        return "Result is " + parseInt(inputx.value) * parseInt(inputy.value);
    }
    if (inputx !== null && inputy !== null && method == "/") {
        return "Result is " + parseInt(inputx.value) / parseInt(inputy.value);
    } else {
        return "";
    }
}
//END
//------------------------------------