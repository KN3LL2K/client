webpackHotUpdate(0,{

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(210);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CreateUser = function (_React$Component) {
	  _inherits(CreateUser, _React$Component);
	
	  function CreateUser(props) {
	    _classCallCheck(this, CreateUser);
	
	    var _this = _possibleConstructorReturn(this, (CreateUser.__proto__ || Object.getPrototypeOf(CreateUser)).call(this, props));
	
	    _this.state = {
	      username: '',
	      password: '',
	      confirm: '',
	      email: ''
	    };
	    _this.updateFormInput = _this.updateFormInput.bind(_this);
	    _this.signUp = _this.signUp.bind(_this);
	    return _this;
	  }
	
	  _createClass(CreateUser, [{
	    key: 'submitHandler',
	    value: function submitHandler(e) {
	      e.preventDefault();
	      this.props.router.push('/');
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      e.preventDefault();
	      this.props.router.push('/');
	    }
	
	    /*<button onClick={(e) => this.clickHandler(e)}> Cancel </button>*/
	
	  }, {
	    key: 'updateFormInput',
	    value: function updateFormInput(key) {
	      var state = {};
	      console.log('this is: ', this);
	      return function (e) {
	        state[key] = e.target.value;
	        this.setState(state);
	      }.bind(this);
	    }
	  }, {
	    key: 'signUp',
	    value: function signUp(e) {
	      console.log('in signUp function. event is: ', e);
	      var username = this.state.username;
	      var password = this.state.password;
	      var email = this.state.email;
	      _jquery2.default.ajax({
	        url: 'http://localhost:8999/signup',
	        method: 'POST',
	        data: {
	          username: username,
	          password: password,
	          email: email
	        },
	        success: function success(message) {
	          console.log('success message is:', message);
	        },
	        error: function error(message) {
	          console.log('error message is:', message);
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var passwordDoesNotMatchOrEmpty = this.state.password.length === 0 || this.state.password !== this.state.confirm;
	      var passwordDoesNotMatch = this.state.password !== this.state.confirm;
	      return _react2.default.createElement(
	        'div',
	        { className: 'createUser' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('img', { src: '/img/grnCrypt.svg', className: 'createUserBanner' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'loginForm' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: function onSubmit(e) {
	                return _this2.submitHandler(e);
	              } },
	            _react2.default.createElement(
	              'label',
	              null,
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('username'), placeholder: 'username', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              console.log(this.state.username),
	              console.log(this.state.password),
	              console.log(this.state.confirm),
	              console.log(this.state.email),
	              console.log(this.state.disabled),
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('password'), placeholder: 'password', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('confirm'), placeholder: 'confirm password', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              passwordDoesNotMatch && _react2.default.createElement(
	                'p',
	                null,
	                'Passwords do not match'
	              ),
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('email'), placeholder: 'email', name: 'name' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('input', { type: 'submit', onClick: this.signUp, value: 'Submit', disabled: passwordDoesNotMatchOrEmpty }),
	            '\xA0\xA0'
	          )
	        )
	      );
	    }
	  }]);
	
	  return CreateUser;
	}(_react2.default.Component);
	
	exports.default = CreateUser;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "CreateUser.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJ1cGRhdGVGb3JtSW5wdXQiLCJiaW5kIiwic2lnblVwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwicGFzc3dvcmREb2VzTm90TWF0Y2hPckVtcHR5IiwibGVuZ3RoIiwicGFzc3dvcmREb2VzTm90TWF0Y2giLCJzdWJtaXRIYW5kbGVyIiwiZGlzYWJsZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxVOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlIQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVUsRUFEQztBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGdCQUFTLEVBSEU7QUFJWEMsY0FBTztBQUpJLE1BQWI7QUFNQSxXQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBVGlCO0FBVWxCOzs7O21DQUNhRSxDLEVBQUc7QUFDZkEsU0FBRUMsY0FBRjtBQUNBLFlBQUtWLEtBQUwsQ0FBV1csTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkI7QUFDRDs7O2tDQUVZSCxDLEVBQUc7QUFDZEEsU0FBRUMsY0FBRjtBQUNBLFlBQUtWLEtBQUwsQ0FBV1csTUFBWCxD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O0FBWUdzQix1Q0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaM0I7QUFhRSx3REFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLdEIsZUFBTCxDQUFxQixPQUFyQixDQUE3QixFQUE0RCxhQUFZLE9BQXhFLEVBQWdGLE1BQUssTUFBckY7QUFiRixjQURGO0FBZ0JFLHNEQWhCRjtBQWdCUSxzREFoQlI7QUFpQkUsc0RBQU8sTUFBSyxRQUFaLEVBQXFCLFNBQVMsS0FBS0UsTUFBbkMsRUFBMkMsT0FBTSxRQUFqRCxFQUEwRCxVQUFVa0IsMkJBQXBFLEdBakJGO0FBQUE7QUFBQTtBQURGO0FBSkYsUUFERjtBQTRCRDs7OztHQXpGc0IsZ0JBQU1LLFM7O21CQTRGaEJoQyxVIiwiZmlsZSI6IjAuMTVhNzE4YmE5MmI0Y2M5OGM0ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBDcmVhdGVVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgZW1haWw6ICcnXG4gICAgfVxuICAgIHRoaXMudXBkYXRlRm9ybUlucHV0ID0gdGhpcy51cGRhdGVGb3JtSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZ25VcCA9IHRoaXMuc2lnblVwLmJpbmQodGhpcyk7XG4gIH1cbiAgc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4vKjxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpfT4gQ2FuY2VsIDwvYnV0dG9uPiovXG5cbiAgdXBkYXRlRm9ybUlucHV0KGtleSkge1xuICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzOiAnLCB0aGlzKVxuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBzdGF0ZVtrZXldID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHN0YXRlLFxuICAgICAgKVxuICAgIH0uYmluZCh0aGlzKVxuICB9XG5cbiAgc2lnblVwKGUpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gc2lnblVwIGZ1bmN0aW9uLiBldmVudCBpczogJywgZSlcbiAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lXG4gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIHZhciBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWxcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4OTk5L3NpZ251cCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIG1lc3NhZ2UgaXM6JywgbWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlIGlzOicsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcGFzc3dvcmREb2VzTm90TWF0Y2hPckVtcHR5ID0gdGhpcy5zdGF0ZS5wYXNzd29yZC5sZW5ndGggPT09IDAgfHwgdGhpcy5zdGF0ZS5wYXNzd29yZCAhPT0gdGhpcy5zdGF0ZS5jb25maXJtXG4gICAgbGV0IHBhc3N3b3JkRG9lc05vdE1hdGNoID0gdGhpcy5zdGF0ZS5wYXNzd29yZCAhPT0gdGhpcy5zdGF0ZS5jb25maXJtXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjcmVhdGVVc2VyJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9Jy9pbWcvZ3JuQ3J5cHQuc3ZnJyBjbGFzc05hbWU9J2NyZWF0ZVVzZXJCYW5uZXInPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luRm9ybSc+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29uZmlybSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtYWlsKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGlzYWJsZWQpfVxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3Bhc3N3b3JkJyl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ2NvbmZpcm0nKX0gcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAge3Bhc3N3b3JkRG9lc05vdE1hdGNoICYmIDxwPlBhc3N3b3JkcyBkbyBub3QgbWF0Y2g8L3A+fVxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ2VtYWlsJyl9IHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc2lnblVwfSB2YWx1ZT1cIlN1Ym1pdFwiIGRpc2FibGVkPXtwYXNzd29yZERvZXNOb3RNYXRjaE9yRW1wdHl9IC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hdXRoL0NyZWF0ZVVzZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==