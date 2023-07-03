"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var IFRAME_ID = 'wb-frame__popup';
var IFRAME_SELETOR = "#".concat(IFRAME_ID);
var Popup = /*#__PURE__*/function () {
  function Popup(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Popup);
    this.url = url;
    this.options = options;
    this.isLoaded = false;
    this.payload = {};
  }
  _createClass(Popup, [{
    key: "close",
    value: function close() {
      var _this$options;
      if (this !== null && this !== void 0 && (_this$options = this.options) !== null && _this$options !== void 0 && _this$options.cached) {
        $(IFRAME_SELETOR).hide();
        return;
      }
      $(IFRAME_SELETOR).remove();
      this.isLoaded = false;
    }
  }, {
    key: "setPayload",
    value: function setPayload() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.payload = payload;
    }
  }, {
    key: "show",
    value: function show() {
      var iframeElm = "<iframe id=\"".concat(IFRAME_ID, "\" src=\"").concat(this.url, "\"></iframe>");

      // check iframe is exist
      if (!this.isLoaded) {
        $('body').append(iframeElm);
      }
      $(IFRAME_SELETOR).show();
      if (!this.isLoaded) {
        var _self = this;
        $(IFRAME_SELETOR).on('load', function () {
          _self.isLoaded = true;
          $(IFRAME_SELETOR)[0].contentWindow.postMessage(_self.payload, '*');
        });
        return;
      }
      $(IFRAME_SELETOR)[0].contentWindow.postMessage(this.payload, '*');
    }
  }, {
    key: "setCallbacks",
    value: function setCallbacks(fns) {
      window.iframeFns = fns;
    }
  }], [{
    key: "postMessageToParent",
    value: function postMessageToParent(url, payload) {
      try {
        if (window) {
          var parentWindow = window.parent;
          parentWindow.postMessage(payload, url);
          return;
        }
        throw new Error("Cannot post message to parent, because window does not exist");
      } catch (error) {
        console.error("Something went wrong when post message to ".concat(url, ", reason: ").concat(error.message));
      }
    }
  }, {
    key: "extractMessageFromIframe",
    value: function extractMessageFromIframe(url, callback) {
      try {
        if (window) {
          // Listen for messages from the iframe
          window.addEventListener('message', function (event) {
            // Verify that the message is from the expected iframe
            if (event.origin.includes(url)) {
              // Handle the received message
              callback(event.data);
            }
          });
          return;
        }
        throw new Error("Cannot extract data from iframe url ".concat(url, ", because window does not exist"));
      } catch (error) {
        console.error("Something went wrong when post message to ".concat(url, ", reason: ").concat(error.message));
      }
    }
  }, {
    key: "extractPayloadFromParent",
    value: function extractPayloadFromParent(callback) {
      // Listen for messages from the parent window
      $(window).on('message', function (event) {
        // Retrieve the received message
        var payload = event.originalEvent.data;
        callback(payload);
      });
    }
  }, {
    key: "extractCallbacksFromParent",
    value: function extractCallbacksFromParent() {
      var _window, _window$parent;
      return (_window = window) === null || _window === void 0 ? void 0 : (_window$parent = _window.parent) === null || _window$parent === void 0 ? void 0 : _window$parent.iframeFns;
    }
  }]);
  return Popup;
}();