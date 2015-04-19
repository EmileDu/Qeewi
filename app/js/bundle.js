/**
 * Qeewi - Application to initialize quickly, easily and efficiently a website
 * @version v1.0.0
 * @license ISC
 */
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var require;'use strict';
	
	(function (window, require, process) {
	
		'use strict';
	
		var debug = __webpack_require__(8);
	
		var React = __webpack_require__(1);
		var Router = __webpack_require__(30);
		var routes = __webpack_require__(6);
		var AppComponent = __webpack_require__(7);
	
		var app = {};
		app.node = {};
		app.node.fs = __webpack_require__(2);
		app.node.gui = __webpack_require__(3);
		app.node.os = __webpack_require__(4);
	
		var tray;
	
		var isTrayOn = false;
	
		app.init = function () {
			if (isTrayOn) {
				tray.remove();
				isTrayOn = false;
			}
			initMenu();
			initTray();
		};
	
		function initMenu() {
			var nativeMenuBar = new app.node.gui.Menu({ type: 'menubar' });
			nativeMenuBar.createMacBuiltin('Qeewi');
			app.node.gui.Window.get().menu = nativeMenuBar;
		}
	
		function initTray() {
			tray = new app.node.gui.Tray({ icon: 'icons/tray_icon.png', tooltip: 'Qeewi' });
	
			var trayMenu = new app.node.gui.Menu();
			trayMenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'DevTool', click: function click() {
					app.node.gui.Window.get().showDevTools();
				} }));
			trayMenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'Reload', click: function click() {
					app.node.gui.Window.get().reload();
				} }));
			tray.menu = trayMenu;
	
			isTrayOn = true;
		}
	
		app.node.gui.Window.get().on('loaded', function () {
			app.init();
		});
	
		debug('React rendering');
		Router.run(routes, Router.HistoryLocation, function (Handler) {
			React.render(React.createElement(AppComponent, { name: 'Emile' }), document.getElementById('container'));
		});
	})(window, require, process);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("fs");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("nw.gui");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("os");

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Router = __webpack_require__(30);
	var Route = Router.Route;
	var DefaultRoute = Router.DefaultRoute;
	
	// route handler components
	var App = __webpack_require__(31);
	var DashboardProject = __webpack_require__(32);
	var NewProject = __webpack_require__(33);
	var Home = __webpack_require__(34);
	
	module.exports = React.createElement(
	  Route,
	  { name: 'app', path: '/', handler: App },
	  React.createElement(DefaultRoute, { handler: Home }),
	  React.createElement(Route, { name: 'dashboardproject', path: '/:project', handler: DashboardProject }),
	  React.createElement(Route, { name: 'newproject', path: '/new-project', handler: NewProject })
	);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  render: function render() {
	    return React.createElement(
	      'h1',
	      null,
	      'Hello ',
	      this.props.name,
	      '!!'
	    );
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var tty = __webpack_require__(35);
	var util = __webpack_require__(36);
	
	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(38);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	
	/**
	 * Colors.
	 */
	
	exports.colors = [6, 2, 3, 4, 5, 1];
	
	/**
	 * The file descriptor to write the `debug()` calls to.
	 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
	 *
	 *   $ DEBUG_FD=3 node script.js 3>debug.log
	 */
	
	var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
	var stream = 1 === fd ? process.stdout :
	             2 === fd ? process.stderr :
	             createWritableStdioStream(fd);
	
	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */
	
	function useColors() {
	  var debugColors = (process.env.DEBUG_COLORS || '').trim().toLowerCase();
	  if (0 === debugColors.length) {
	    return tty.isatty(fd);
	  } else {
	    return '0' !== debugColors
	        && 'no' !== debugColors
	        && 'false' !== debugColors
	        && 'disabled' !== debugColors;
	  }
	}
	
	/**
	 * Map %o to `util.inspect()`, since Node doesn't do that out of the box.
	 */
	
	var inspect = (4 === util.inspect.length ?
	  // node <= 0.8.x
	  function (v, colors) {
	    return util.inspect(v, void 0, void 0, colors);
	  } :
	  // node > 0.8.x
	  function (v, colors) {
	    return util.inspect(v, { colors: colors });
	  }
	);
	
	exports.formatters.o = function(v) {
	  return inspect(v, this.useColors)
	    .replace(/\s*\n\s*/g, ' ');
	};
	
	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	  var name = this.namespace;
	
	  if (useColors) {
	    var c = this.color;
	
	    args[0] = '  \u001b[3' + c + ';1m' + name + ' '
	      + '\u001b[0m'
	      + args[0] + '\u001b[3' + c + 'm'
	      + ' +' + exports.humanize(this.diff) + '\u001b[0m';
	  } else {
	    args[0] = new Date().toUTCString()
	      + ' ' + name + ' ' + args[0];
	  }
	  return args;
	}
	
	/**
	 * Invokes `console.error()` with the specified arguments.
	 */
	
	function log() {
	  return stream.write(util.format.apply(this, arguments) + '\n');
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete process.env.DEBUG;
	  } else {
	    process.env.DEBUG = namespaces;
	  }
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  return process.env.DEBUG;
	}
	
	/**
	 * Copied from `node/src/node.js`.
	 *
	 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
	 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
	 */
	
	function createWritableStdioStream (fd) {
	  var stream;
	  var tty_wrap = process.binding('tty_wrap');
	
	  // Note stream._type is used for test-module-load-list.js
	
	  switch (tty_wrap.guessHandleType(fd)) {
	    case 'TTY':
	      stream = new tty.WriteStream(fd);
	      stream._type = 'tty';
	
	      // Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;
	
	    case 'FILE':
	      var fs = __webpack_require__(2);
	      stream = new fs.SyncWriteStream(fd, { autoClose: false });
	      stream._type = 'fs';
	      break;
	
	    case 'PIPE':
	    case 'TCP':
	      var net = __webpack_require__(37);
	      stream = new net.Socket({
	        fd: fd,
	        readable: false,
	        writable: true
	      });
	
	      // FIXME Should probably have an option in net.Socket to create a
	      // stream from an existing fd which is writable only. But for now
	      // we'll just add this hack and set the `readable` member to false.
	      // Test: ./node test/fixtures/echo.js < /etc/passwd
	      stream.readable = false;
	      stream.read = null;
	      stream._type = 'pipe';
	
	      // FIXME Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;
	
	    default:
	      // Probably an error on in uv_guess_handle()
	      throw new Error('Implement me. Unknown stream file type!');
	  }
	
	  // For supporting legacy API we put the FD here.
	  stream.fd = fd;
	
	  stream._isStdio = true;
	
	  return stream;
	}
	
	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */
	
	exports.enable(load());


/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.DefaultRoute = __webpack_require__(103);
	exports.Link = __webpack_require__(104);
	exports.NotFoundRoute = __webpack_require__(105);
	exports.Redirect = __webpack_require__(106);
	exports.Route = __webpack_require__(107);
	exports.RouteHandler = __webpack_require__(108);
	
	exports.HashLocation = __webpack_require__(109);
	exports.HistoryLocation = __webpack_require__(110);
	exports.RefreshLocation = __webpack_require__(111);
	exports.StaticLocation = __webpack_require__(112);
	exports.TestLocation = __webpack_require__(113);
	
	exports.ImitateBrowserBehavior = __webpack_require__(114);
	exports.ScrollToTopBehavior = __webpack_require__(115);
	
	exports.History = __webpack_require__(116);
	exports.Navigation = __webpack_require__(117);
	exports.State = __webpack_require__(118);
	
	exports.createRoute = __webpack_require__(119).createRoute;
	exports.createDefaultRoute = __webpack_require__(119).createDefaultRoute;
	exports.createNotFoundRoute = __webpack_require__(119).createNotFoundRoute;
	exports.createRedirect = __webpack_require__(119).createRedirect;
	exports.createRoutesFromReactChildren = __webpack_require__(120);
	exports.create = __webpack_require__(121);
	exports.run = __webpack_require__(122);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("tty");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("util");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("net");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(177);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var PropTypes = __webpack_require__(166);
	var RouteHandler = __webpack_require__(108);
	var Route = __webpack_require__(107);
	
	/**
	 * A <DefaultRoute> component is a special kind of <Route> that
	 * renders when its parent matches but none of its siblings do.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */
	
	var DefaultRoute = (function (_Route) {
	  function DefaultRoute() {
	    _classCallCheck(this, DefaultRoute);
	
	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }
	
	  _inherits(DefaultRoute, _Route);
	
	  return DefaultRoute;
	})(Route);
	
	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619
	
	DefaultRoute.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.falsy,
	  children: PropTypes.falsy,
	  handler: PropTypes.func.isRequired
	};
	
	DefaultRoute.defaultProps = {
	  handler: RouteHandler
	};
	
	module.exports = DefaultRoute;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = __webpack_require__(1);
	var assign = __webpack_require__(26);
	var PropTypes = __webpack_require__(166);
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} />
	 *
	 * In addition to params, links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
	 */
	
	var Link = (function (_React$Component) {
	  function Link() {
	    _classCallCheck(this, Link);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Link, _React$Component);
	
	  _createClass(Link, {
	    handleClick: {
	      value: function handleClick(event) {
	        var allowTransition = true;
	        var clickResult;
	
	        if (this.props.onClick) clickResult = this.props.onClick(event);
	
	        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
	          return;
	        }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;
	
	        event.preventDefault();
	
	        if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
	      }
	    },
	    getHref: {
	
	      /**
	       * Returns the value of the "href" attribute to use on the DOM element.
	       */
	
	      value: function getHref() {
	        return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
	      }
	    },
	    getClassName: {
	
	      /**
	       * Returns the value of the "class" attribute to use on the DOM element, which contains
	       * the value of the activeClassName property when this <Link> is active.
	       */
	
	      value: function getClassName() {
	        var className = this.props.className;
	
	        if (this.getActiveState()) className += " " + this.props.activeClassName;
	
	        return className;
	      }
	    },
	    getActiveState: {
	      value: function getActiveState() {
	        return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
	      }
	    },
	    render: {
	      value: function render() {
	        var props = assign({}, this.props, {
	          href: this.getHref(),
	          className: this.getClassName(),
	          onClick: this.handleClick.bind(this)
	        });
	
	        if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;
	
	        return React.DOM.a(props, this.props.children);
	      }
	    }
	  });
	
	  return Link;
	})(React.Component);
	
	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619
	
	Link.contextTypes = {
	  router: PropTypes.router.isRequired
	};
	
	Link.propTypes = {
	  activeClassName: PropTypes.string.isRequired,
	  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
	  params: PropTypes.object,
	  query: PropTypes.object,
	  activeStyle: PropTypes.object,
	  onClick: PropTypes.func
	};
	
	Link.defaultProps = {
	  activeClassName: "active",
	  className: ""
	};
	
	module.exports = Link;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var PropTypes = __webpack_require__(166);
	var RouteHandler = __webpack_require__(108);
	var Route = __webpack_require__(107);
	
	/**
	 * A <NotFoundRoute> is a special kind of <Route> that
	 * renders when the beginning of its parent's path matches
	 * but none of its siblings do, including any <DefaultRoute>.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */
	
	var NotFoundRoute = (function (_Route) {
	  function NotFoundRoute() {
	    _classCallCheck(this, NotFoundRoute);
	
	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }
	
	  _inherits(NotFoundRoute, _Route);
	
	  return NotFoundRoute;
	})(Route);
	
	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619
	
	NotFoundRoute.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.falsy,
	  children: PropTypes.falsy,
	  handler: PropTypes.func.isRequired
	};
	
	NotFoundRoute.defaultProps = {
	  handler: RouteHandler
	};
	
	module.exports = NotFoundRoute;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var PropTypes = __webpack_require__(166);
	var Route = __webpack_require__(107);
	
	/**
	 * A <Redirect> component is a special kind of <Route> that always
	 * redirects to another route when it matches.
	 */
	
	var Redirect = (function (_Route) {
	  function Redirect() {
	    _classCallCheck(this, Redirect);
	
	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }
	
	  _inherits(Redirect, _Route);
	
	  return Redirect;
	})(Route);
	
	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619
	
	Redirect.propTypes = {
	  path: PropTypes.string,
	  from: PropTypes.string, // Alias for path.
	  to: PropTypes.string,
	  handler: PropTypes.falsy
	};
	
	// Redirects should not have a default handler
	Redirect.defaultProps = {};
	
	module.exports = Redirect;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = __webpack_require__(1);
	var invariant = __webpack_require__(40);
	var PropTypes = __webpack_require__(166);
	var RouteHandler = __webpack_require__(108);
	
	/**
	 * <Route> components specify components that are rendered to the page when the
	 * URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 *
	 * The preferred way to configure a router is using JSX. The XML-like syntax is
	 * a great way to visualize how routes are laid out in an application.
	 *
	 *   var routes = [
	 *     <Route handler={App}>
	 *       <Route name="login" handler={Login}/>
	 *       <Route name="logout" handler={Logout}/>
	 *       <Route name="about" handler={About}/>
	 *     </Route>
	 *   ];
	 *   
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 *
	 * Handlers for Route components that contain children can render their active
	 * child route using a <RouteHandler> element.
	 *
	 *   var App = React.createClass({
	 *     render: function () {
	 *       return (
	 *         <div class="application">
	 *           <RouteHandler/>
	 *         </div>
	 *       );
	 *     }
	 *   });
	 *
	 * If no handler is provided for the route, it will render a matched child route.
	 */
	
	var Route = (function (_React$Component) {
	  function Route() {
	    _classCallCheck(this, Route);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Route, _React$Component);
	
	  _createClass(Route, {
	    render: {
	      value: function render() {
	        invariant(false, "%s elements are for router configuration only and should not be rendered", this.constructor.name);
	      }
	    }
	  });
	
	  return Route;
	})(React.Component);
	
	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619
	
	Route.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.string,
	  handler: PropTypes.func,
	  ignoreScrollBehavior: PropTypes.bool
	};
	
	Route.defaultProps = {
	  handler: RouteHandler
	};
	
	module.exports = Route;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = __webpack_require__(1);
	var ContextWrapper = __webpack_require__(167);
	var assign = __webpack_require__(26);
	var PropTypes = __webpack_require__(166);
	
	var REF_NAME = "__routeHandler__";
	
	/**
	 * A <RouteHandler> component renders the active child route handler
	 * when routes are nested.
	 */
	
	var RouteHandler = (function (_React$Component) {
	  function RouteHandler() {
	    _classCallCheck(this, RouteHandler);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(RouteHandler, _React$Component);
	
	  _createClass(RouteHandler, {
	    getChildContext: {
	      value: function getChildContext() {
	        return {
	          routeDepth: this.context.routeDepth + 1
	        };
	      }
	    },
	    componentDidMount: {
	      value: function componentDidMount() {
	        this._updateRouteComponent(this.refs[REF_NAME]);
	      }
	    },
	    componentDidUpdate: {
	      value: function componentDidUpdate() {
	        this._updateRouteComponent(this.refs[REF_NAME]);
	      }
	    },
	    componentWillUnmount: {
	      value: function componentWillUnmount() {
	        this._updateRouteComponent(null);
	      }
	    },
	    _updateRouteComponent: {
	      value: function _updateRouteComponent(component) {
	        this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
	      }
	    },
	    getRouteDepth: {
	      value: function getRouteDepth() {
	        return this.context.routeDepth;
	      }
	    },
	    createChildRouteHandler: {
	      value: function createChildRouteHandler(props) {
	        var route = this.context.router.getRouteAtDepth(this.getRouteDepth());
	        return route ? React.createElement(route.handler, assign({}, props || this.props, { ref: REF_NAME })) : null;
	      }
	    },
	    render: {
	      value: function render() {
	        var handler = this.createChildRouteHandler();
	        // <script/> for things like <CSSTransitionGroup/> that don't like null
	        return handler ? React.createElement(
	          ContextWrapper,
	          null,
	          handler
	        ) : React.createElement("script", null);
	      }
	    }
	  });
	
	  return RouteHandler;
	})(React.Component);
	
	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619
	
	RouteHandler.contextTypes = {
	  routeDepth: PropTypes.number.isRequired,
	  router: PropTypes.router.isRequired
	};
	
	RouteHandler.childContextTypes = {
	  routeDepth: PropTypes.number.isRequired
	};
	
	module.exports = RouteHandler;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var LocationActions = __webpack_require__(168);
	var History = __webpack_require__(116);
	
	var _listeners = [];
	var _isListening = false;
	var _actionType;
	
	function notifyChange(type) {
	  if (type === LocationActions.PUSH) History.length += 1;
	
	  var change = {
	    path: HashLocation.getCurrentPath(),
	    type: type
	  };
	
	  _listeners.forEach(function (listener) {
	    listener.call(HashLocation, change);
	  });
	}
	
	function ensureSlash() {
	  var path = HashLocation.getCurrentPath();
	
	  if (path.charAt(0) === "/") {
	    return true;
	  }HashLocation.replace("/" + path);
	
	  return false;
	}
	
	function onHashChange() {
	  if (ensureSlash()) {
	    // If we don't have an _actionType then all we know is the hash
	    // changed. It was probably caused by the user clicking the Back
	    // button, but may have also been the Forward button or manual
	    // manipulation. So just guess 'pop'.
	    var curActionType = _actionType;
	    _actionType = null;
	    notifyChange(curActionType || LocationActions.POP);
	  }
	}
	
	/**
	 * A Location that uses `window.location.hash`.
	 */
	var HashLocation = {
	
	  addChangeListener: function addChangeListener(listener) {
	    _listeners.push(listener);
	
	    // Do this BEFORE listening for hashchange.
	    ensureSlash();
	
	    if (!_isListening) {
	      if (window.addEventListener) {
	        window.addEventListener("hashchange", onHashChange, false);
	      } else {
	        window.attachEvent("onhashchange", onHashChange);
	      }
	
	      _isListening = true;
	    }
	  },
	
	  removeChangeListener: function removeChangeListener(listener) {
	    _listeners = _listeners.filter(function (l) {
	      return l !== listener;
	    });
	
	    if (_listeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener("hashchange", onHashChange, false);
	      } else {
	        window.removeEvent("onhashchange", onHashChange);
	      }
	
	      _isListening = false;
	    }
	  },
	
	  push: function push(path) {
	    _actionType = LocationActions.PUSH;
	    window.location.hash = path;
	  },
	
	  replace: function replace(path) {
	    _actionType = LocationActions.REPLACE;
	    window.location.replace(window.location.pathname + window.location.search + "#" + path);
	  },
	
	  pop: function pop() {
	    _actionType = LocationActions.POP;
	    History.back();
	  },
	
	  getCurrentPath: function getCurrentPath() {
	    return decodeURI(
	    // We can't use window.location.hash here because it's not
	    // consistent across browsers - Firefox will pre-decode it!
	    window.location.href.split("#")[1] || "");
	  },
	
	  toString: function toString() {
	    return "<HashLocation>";
	  }
	
	};
	
	module.exports = HashLocation;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var LocationActions = __webpack_require__(168);
	var History = __webpack_require__(116);
	
	var _listeners = [];
	var _isListening = false;
	
	function notifyChange(type) {
	  var change = {
	    path: HistoryLocation.getCurrentPath(),
	    type: type
	  };
	
	  _listeners.forEach(function (listener) {
	    listener.call(HistoryLocation, change);
	  });
	}
	
	function onPopState(event) {
	  if (event.state === undefined) {
	    return;
	  } // Ignore extraneous popstate events in WebKit.
	
	  notifyChange(LocationActions.POP);
	}
	
	/**
	 * A Location that uses HTML5 history.
	 */
	var HistoryLocation = {
	
	  addChangeListener: function addChangeListener(listener) {
	    _listeners.push(listener);
	
	    if (!_isListening) {
	      if (window.addEventListener) {
	        window.addEventListener("popstate", onPopState, false);
	      } else {
	        window.attachEvent("onpopstate", onPopState);
	      }
	
	      _isListening = true;
	    }
	  },
	
	  removeChangeListener: function removeChangeListener(listener) {
	    _listeners = _listeners.filter(function (l) {
	      return l !== listener;
	    });
	
	    if (_listeners.length === 0) {
	      if (window.addEventListener) {
	        window.removeEventListener("popstate", onPopState, false);
	      } else {
	        window.removeEvent("onpopstate", onPopState);
	      }
	
	      _isListening = false;
	    }
	  },
	
	  push: function push(path) {
	    window.history.pushState({ path: path }, "", path);
	    History.length += 1;
	    notifyChange(LocationActions.PUSH);
	  },
	
	  replace: function replace(path) {
	    window.history.replaceState({ path: path }, "", path);
	    notifyChange(LocationActions.REPLACE);
	  },
	
	  pop: History.back,
	
	  getCurrentPath: function getCurrentPath() {
	    return decodeURI(window.location.pathname + window.location.search);
	  },
	
	  toString: function toString() {
	    return "<HistoryLocation>";
	  }
	
	};
	
	module.exports = HistoryLocation;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var HistoryLocation = __webpack_require__(110);
	var History = __webpack_require__(116);
	
	/**
	 * A Location that uses full page refreshes. This is used as
	 * the fallback for HistoryLocation in browsers that do not
	 * support the HTML5 history API.
	 */
	var RefreshLocation = {
	
	  push: function push(path) {
	    window.location = path;
	  },
	
	  replace: function replace(path) {
	    window.location.replace(path);
	  },
	
	  pop: History.back,
	
	  getCurrentPath: HistoryLocation.getCurrentPath,
	
	  toString: function toString() {
	    return "<RefreshLocation>";
	  }
	
	};
	
	module.exports = RefreshLocation;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var invariant = __webpack_require__(40);
	
	function throwCannotModify() {
	  invariant(false, "You cannot modify a static location");
	}
	
	/**
	 * A location that only ever contains a single path. Useful in
	 * stateless environments like servers where there is no path history,
	 * only the path that was used in the request.
	 */
	
	var StaticLocation = (function () {
	  function StaticLocation(path) {
	    _classCallCheck(this, StaticLocation);
	
	    this.path = path;
	  }
	
	  _createClass(StaticLocation, {
	    getCurrentPath: {
	      value: function getCurrentPath() {
	        return this.path;
	      }
	    },
	    toString: {
	      value: function toString() {
	        return "<StaticLocation path=\"" + this.path + "\">";
	      }
	    }
	  });
	
	  return StaticLocation;
	})();
	
	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619
	
	StaticLocation.prototype.push = throwCannotModify;
	StaticLocation.prototype.replace = throwCannotModify;
	StaticLocation.prototype.pop = throwCannotModify;
	
	module.exports = StaticLocation;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var invariant = __webpack_require__(40);
	var LocationActions = __webpack_require__(168);
	var History = __webpack_require__(116);
	
	/**
	 * A location that is convenient for testing and does not require a DOM.
	 */
	
	var TestLocation = (function () {
	  function TestLocation(history) {
	    _classCallCheck(this, TestLocation);
	
	    this.history = history || [];
	    this.listeners = [];
	    this._updateHistoryLength();
	  }
	
	  _createClass(TestLocation, {
	    needsDOM: {
	      get: function () {
	        return false;
	      }
	    },
	    _updateHistoryLength: {
	      value: function _updateHistoryLength() {
	        History.length = this.history.length;
	      }
	    },
	    _notifyChange: {
	      value: function _notifyChange(type) {
	        var change = {
	          path: this.getCurrentPath(),
	          type: type
	        };
	
	        for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
	      }
	    },
	    addChangeListener: {
	      value: function addChangeListener(listener) {
	        this.listeners.push(listener);
	      }
	    },
	    removeChangeListener: {
	      value: function removeChangeListener(listener) {
	        this.listeners = this.listeners.filter(function (l) {
	          return l !== listener;
	        });
	      }
	    },
	    push: {
	      value: function push(path) {
	        this.history.push(path);
	        this._updateHistoryLength();
	        this._notifyChange(LocationActions.PUSH);
	      }
	    },
	    replace: {
	      value: function replace(path) {
	        invariant(this.history.length, "You cannot replace the current path with no history");
	
	        this.history[this.history.length - 1] = path;
	
	        this._notifyChange(LocationActions.REPLACE);
	      }
	    },
	    pop: {
	      value: function pop() {
	        this.history.pop();
	        this._updateHistoryLength();
	        this._notifyChange(LocationActions.POP);
	      }
	    },
	    getCurrentPath: {
	      value: function getCurrentPath() {
	        return this.history[this.history.length - 1];
	      }
	    },
	    toString: {
	      value: function toString() {
	        return "<TestLocation>";
	      }
	    }
	  });
	
	  return TestLocation;
	})();
	
	module.exports = TestLocation;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var LocationActions = __webpack_require__(168);
	
	/**
	 * A scroll behavior that attempts to imitate the default behavior
	 * of modern browsers.
	 */
	var ImitateBrowserBehavior = {
	
	  updateScrollPosition: function updateScrollPosition(position, actionType) {
	    switch (actionType) {
	      case LocationActions.PUSH:
	      case LocationActions.REPLACE:
	        window.scrollTo(0, 0);
	        break;
	      case LocationActions.POP:
	        if (position) {
	          window.scrollTo(position.x, position.y);
	        } else {
	          window.scrollTo(0, 0);
	        }
	        break;
	    }
	  }
	
	};
	
	module.exports = ImitateBrowserBehavior;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * A scroll behavior that always scrolls to the top of the page
	 * after a transition.
	 */
	var ScrollToTopBehavior = {
	
	  updateScrollPosition: function updateScrollPosition() {
	    window.scrollTo(0, 0);
	  }
	
	};
	
	module.exports = ScrollToTopBehavior;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var invariant = __webpack_require__(40);
	var canUseDOM = __webpack_require__(29).canUseDOM;
	
	var History = {
	
	  /**
	   * The current number of entries in the history.
	   *
	   * Note: This property is read-only.
	   */
	  length: 1,
	
	  /**
	   * Sends the browser back one entry in the history.
	   */
	  back: function back() {
	    invariant(canUseDOM, "Cannot use History.back without a DOM");
	
	    // Do this first so that History.length will
	    // be accurate in location change listeners.
	    History.length -= 1;
	
	    window.history.back();
	  }
	
	};
	
	module.exports = History;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var warning = __webpack_require__(44);
	var PropTypes = __webpack_require__(166);
	
	function deprecatedMethod(routerMethodName, fn) {
	  return function () {
	    warning(false, "Router.Navigation is deprecated. Please use this.context.router." + routerMethodName + "() instead");
	
	    return fn.apply(this, arguments);
	  };
	}
	
	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Router.Navigation ],
	 *     handleClick(event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render() {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {
	
	  contextTypes: {
	    router: PropTypes.router.isRequired
	  },
	
	  /**
	   * Returns an absolute URL path created from the given route
	   * name, URL parameters, and query values.
	   */
	  makePath: deprecatedMethod("makePath", function (to, params, query) {
	    return this.context.router.makePath(to, params, query);
	  }),
	
	  /**
	   * Returns a string that may safely be used as the href of a
	   * link to the route with the given name.
	   */
	  makeHref: deprecatedMethod("makeHref", function (to, params, query) {
	    return this.context.router.makeHref(to, params, query);
	  }),
	
	  /**
	   * Transitions to the URL specified in the arguments by pushing
	   * a new URL onto the history stack.
	   */
	  transitionTo: deprecatedMethod("transitionTo", function (to, params, query) {
	    this.context.router.transitionTo(to, params, query);
	  }),
	
	  /**
	   * Transitions to the URL specified in the arguments by replacing
	   * the current URL in the history stack.
	   */
	  replaceWith: deprecatedMethod("replaceWith", function (to, params, query) {
	    this.context.router.replaceWith(to, params, query);
	  }),
	
	  /**
	   * Transitions to the previous URL.
	   */
	  goBack: deprecatedMethod("goBack", function () {
	    return this.context.router.goBack();
	  })
	
	};
	
	module.exports = Navigation;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var warning = __webpack_require__(44);
	var PropTypes = __webpack_require__(166);
	
	function deprecatedMethod(routerMethodName, fn) {
	  return function () {
	    warning(false, "Router.State is deprecated. Please use this.context.router." + routerMethodName + "() instead");
	
	    return fn.apply(this, arguments);
	  };
	}
	
	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ Router.State ],
	 *     render() {
	 *       var className = this.props.className;
	 *   
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *   
	 *       return React.DOM.a({ className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {
	
	  contextTypes: {
	    router: PropTypes.router.isRequired
	  },
	
	  /**
	   * Returns the current URL path.
	   */
	  getPath: deprecatedMethod("getCurrentPath", function () {
	    return this.context.router.getCurrentPath();
	  }),
	
	  /**
	   * Returns the current URL path without the query string.
	   */
	  getPathname: deprecatedMethod("getCurrentPathname", function () {
	    return this.context.router.getCurrentPathname();
	  }),
	
	  /**
	   * Returns an object of the URL params that are currently active.
	   */
	  getParams: deprecatedMethod("getCurrentParams", function () {
	    return this.context.router.getCurrentParams();
	  }),
	
	  /**
	   * Returns an object of the query params that are currently active.
	   */
	  getQuery: deprecatedMethod("getCurrentQuery", function () {
	    return this.context.router.getCurrentQuery();
	  }),
	
	  /**
	   * Returns an array of the routes that are currently active.
	   */
	  getRoutes: deprecatedMethod("getCurrentRoutes", function () {
	    return this.context.router.getCurrentRoutes();
	  }),
	
	  /**
	   * A helper method to determine if a given route, params, and query
	   * are active.
	   */
	  isActive: deprecatedMethod("isActive", function (to, params, query) {
	    return this.context.router.isActive(to, params, query);
	  })
	
	};
	
	module.exports = State;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var assign = __webpack_require__(26);
	var invariant = __webpack_require__(40);
	var warning = __webpack_require__(44);
	var PathUtils = __webpack_require__(169);
	
	var _currentRoute;
	
	var Route = (function () {
	  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
	    _classCallCheck(this, Route);
	
	    this.name = name;
	    this.path = path;
	    this.paramNames = PathUtils.extractParamNames(this.path);
	    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
	    this.isDefault = !!isDefault;
	    this.isNotFound = !!isNotFound;
	    this.onEnter = onEnter;
	    this.onLeave = onLeave;
	    this.handler = handler;
	  }
	
	  _createClass(Route, {
	    appendChild: {
	
	      /**
	       * Appends the given route to this route's child routes.
	       */
	
	      value: function appendChild(route) {
	        invariant(route instanceof Route, "route.appendChild must use a valid Route");
	
	        if (!this.childRoutes) this.childRoutes = [];
	
	        this.childRoutes.push(route);
	      }
	    },
	    toString: {
	      value: function toString() {
	        var string = "<Route";
	
	        if (this.name) string += " name=\"" + this.name + "\"";
	
	        string += " path=\"" + this.path + "\">";
	
	        return string;
	      }
	    }
	  }, {
	    createRoute: {
	
	      /**
	       * Creates and returns a new route. Options may be a URL pathname string
	       * with placeholders for named params or an object with any of the following
	       * properties:
	       *
	       * - name                     The name of the route. This is used to lookup a
	       *                            route relative to its parent route and should be
	       *                            unique among all child routes of the same parent
	       * - path                     A URL pathname string with optional placeholders
	       *                            that specify the names of params to extract from
	       *                            the URL when the path matches. Defaults to `/${name}`
	       *                            when there is a name given, or the path of the parent
	       *                            route, or /
	       * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
	       *                            the scroll behavior of the router
	       * - isDefault                True to make this route the default route among all
	       *                            its siblings
	       * - isNotFound               True to make this route the "not found" route among
	       *                            all its siblings
	       * - onEnter                  A transition hook that will be called when the
	       *                            router is going to enter this route
	       * - onLeave                  A transition hook that will be called when the
	       *                            router is going to leave this route
	       * - handler                  A React component that will be rendered when
	       *                            this route is active
	       * - parentRoute              The parent route to use for this route. This option
	       *                            is automatically supplied when creating routes inside
	       *                            the callback to another invocation of createRoute. You
	       *                            only ever need to use this when declaring routes
	       *                            independently of one another to manually piece together
	       *                            the route hierarchy
	       *
	       * The callback may be used to structure your route hierarchy. Any call to
	       * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
	       * inside the callback automatically uses this route as its parent.
	       */
	
	      value: function createRoute(options, callback) {
	        options = options || {};
	
	        if (typeof options === "string") options = { path: options };
	
	        var parentRoute = _currentRoute;
	
	        if (parentRoute) {
	          warning(options.parentRoute == null || options.parentRoute === parentRoute, "You should not use parentRoute with createRoute inside another route's child callback; it is ignored");
	        } else {
	          parentRoute = options.parentRoute;
	        }
	
	        var name = options.name;
	        var path = options.path || name;
	
	        if (path && !(options.isDefault || options.isNotFound)) {
	          if (PathUtils.isAbsolute(path)) {
	            if (parentRoute) {
	              invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, "You cannot nest path \"%s\" inside \"%s\"; the parent requires URL parameters", path, parentRoute.path);
	            }
	          } else if (parentRoute) {
	            // Relative paths extend their parent.
	            path = PathUtils.join(parentRoute.path, path);
	          } else {
	            path = "/" + path;
	          }
	        } else {
	          path = parentRoute ? parentRoute.path : "/";
	        }
	
	        if (options.isNotFound && !/\*$/.test(path)) path += "*"; // Auto-append * to the path of not found routes.
	
	        var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);
	
	        if (parentRoute) {
	          if (route.isDefault) {
	            invariant(parentRoute.defaultRoute == null, "%s may not have more than one default route", parentRoute);
	
	            parentRoute.defaultRoute = route;
	          } else if (route.isNotFound) {
	            invariant(parentRoute.notFoundRoute == null, "%s may not have more than one not found route", parentRoute);
	
	            parentRoute.notFoundRoute = route;
	          }
	
	          parentRoute.appendChild(route);
	        }
	
	        // Any routes created in the callback
	        // use this route as their parent.
	        if (typeof callback === "function") {
	          var currentRoute = _currentRoute;
	          _currentRoute = route;
	          callback.call(route, route);
	          _currentRoute = currentRoute;
	        }
	
	        return route;
	      }
	    },
	    createDefaultRoute: {
	
	      /**
	       * Creates and returns a route that is rendered when its parent matches
	       * the current URL.
	       */
	
	      value: function createDefaultRoute(options) {
	        return Route.createRoute(assign({}, options, { isDefault: true }));
	      }
	    },
	    createNotFoundRoute: {
	
	      /**
	       * Creates and returns a route that is rendered when its parent matches
	       * the current URL but none of its siblings do.
	       */
	
	      value: function createNotFoundRoute(options) {
	        return Route.createRoute(assign({}, options, { isNotFound: true }));
	      }
	    },
	    createRedirect: {
	
	      /**
	       * Creates and returns a route that automatically redirects the transition
	       * to another route. In addition to the normal options to createRoute, this
	       * function accepts the following options:
	       *
	       * - from         An alias for the `path` option. Defaults to *
	       * - to           The path/route/route name to redirect to
	       * - params       The params to use in the redirect URL. Defaults
	       *                to using the current params
	       * - query        The query to use in the redirect URL. Defaults
	       *                to using the current query
	       */
	
	      value: function createRedirect(options) {
	        return Route.createRoute(assign({}, options, {
	          path: options.path || options.from || "*",
	          onEnter: function onEnter(transition, params, query) {
	            transition.redirect(options.to, options.params || params, options.query || query);
	          }
	        }));
	      }
	    }
	  });
	
	  return Route;
	})();
	
	module.exports = Route;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* jshint -W084 */
	var React = __webpack_require__(1);
	var assign = __webpack_require__(26);
	var warning = __webpack_require__(44);
	var DefaultRoute = __webpack_require__(103);
	var NotFoundRoute = __webpack_require__(105);
	var Redirect = __webpack_require__(106);
	var Route = __webpack_require__(119);
	
	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || "UnknownComponent";
	
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);
	
	      if (error instanceof Error) warning(false, error.message);
	    }
	  }
	}
	
	function createRouteOptions(props) {
	  var options = assign({}, props);
	  var handler = options.handler;
	
	  if (handler) {
	    options.onEnter = handler.willTransitionTo;
	    options.onLeave = handler.willTransitionFrom;
	  }
	
	  return options;
	}
	
	function createRouteFromReactElement(element) {
	  if (!React.isValidElement(element)) {
	    return;
	  }var type = element.type;
	  var props = assign({}, type.defaultProps, element.props);
	
	  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);
	
	  if (type === DefaultRoute) {
	    return Route.createDefaultRoute(createRouteOptions(props));
	  }if (type === NotFoundRoute) {
	    return Route.createNotFoundRoute(createRouteOptions(props));
	  }if (type === Redirect) {
	    return Route.createRedirect(createRouteOptions(props));
	  }return Route.createRoute(createRouteOptions(props), function () {
	    if (props.children) createRoutesFromReactChildren(props.children);
	  });
	}
	
	/**
	 * Creates and returns an array of routes created from the given
	 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
	 * <NotFoundRoute>, or <Redirect>, e.g.:
	 *
	 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
	 *
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route path="/" handler={App}>
	 *       <Route name="user" path="/user/:userId" handler={User}>
	 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
	 *         <Redirect from="todos/:taskId" to="task"/>
	 *       </Route>
	 *     </Route>
	 *   );
	 */
	function createRoutesFromReactChildren(children) {
	  var routes = [];
	
	  React.Children.forEach(children, function (child) {
	    if (child = createRouteFromReactElement(child)) routes.push(child);
	  });
	
	  return routes;
	}
	
	module.exports = createRoutesFromReactChildren;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* jshint -W058 */
	var React = __webpack_require__(1);
	var warning = __webpack_require__(44);
	var invariant = __webpack_require__(40);
	var canUseDOM = __webpack_require__(29).canUseDOM;
	var LocationActions = __webpack_require__(168);
	var ImitateBrowserBehavior = __webpack_require__(114);
	var HashLocation = __webpack_require__(109);
	var HistoryLocation = __webpack_require__(110);
	var RefreshLocation = __webpack_require__(111);
	var StaticLocation = __webpack_require__(112);
	var ScrollHistory = __webpack_require__(170);
	var createRoutesFromReactChildren = __webpack_require__(120);
	var isReactChildren = __webpack_require__(171);
	var Transition = __webpack_require__(172);
	var PropTypes = __webpack_require__(166);
	var Redirect = __webpack_require__(173);
	var History = __webpack_require__(116);
	var Cancellation = __webpack_require__(174);
	var Match = __webpack_require__(175);
	var Route = __webpack_require__(119);
	var supportsHistory = __webpack_require__(176);
	var PathUtils = __webpack_require__(169);
	
	/**
	 * The default location for new routers.
	 */
	var DEFAULT_LOCATION = canUseDOM ? HashLocation : "/";
	
	/**
	 * The default scroll behavior for new routers.
	 */
	var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;
	
	function hasProperties(object, properties) {
	  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
	    return false;
	  }return true;
	}
	
	function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
	  return routes.some(function (r) {
	    if (r !== route) return false;
	
	    var paramNames = route.paramNames;
	    var paramName;
	
	    // Ensure that all params the route cares about did not change.
	    for (var i = 0, len = paramNames.length; i < len; ++i) {
	      paramName = paramNames[i];
	
	      if (nextParams[paramName] !== prevParams[paramName]) return false;
	    }
	
	    // Ensure the query hasn't changed.
	    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
	  });
	}
	
	function addRoutesToNamedRoutes(routes, namedRoutes) {
	  var route;
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    route = routes[i];
	
	    if (route.name) {
	      invariant(namedRoutes[route.name] == null, "You may not have more than one route named \"%s\"", route.name);
	
	      namedRoutes[route.name] = route;
	    }
	
	    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
	  }
	}
	
	function routeIsActive(activeRoutes, routeName) {
	  return activeRoutes.some(function (route) {
	    return route.name === routeName;
	  });
	}
	
	function paramsAreActive(activeParams, params) {
	  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
	    return false;
	  }return true;
	}
	
	function queryIsActive(activeQuery, query) {
	  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
	    return false;
	  }return true;
	}
	
	/**
	 * Creates and returns a new router using the given options. A router
	 * is a ReactComponent class that knows how to react to changes in the
	 * URL and keep the contents of the page in sync.
	 *
	 * Options may be any of the following:
	 *
	 * - routes           (required) The route config
	 * - location         The location to use. Defaults to HashLocation when
	 *                    the DOM is available, "/" otherwise
	 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
	 *                    when the DOM is available, null otherwise
	 * - onError          A function that is used to handle errors
	 * - onAbort          A function that is used to handle aborted transitions
	 *
	 * When rendering in a server-side environment, the location should simply
	 * be the URL path that was used in the request, including the query string.
	 */
	function createRouter(options) {
	  options = options || {};
	
	  if (isReactChildren(options)) options = { routes: options };
	
	  var mountedComponents = [];
	  var location = options.location || DEFAULT_LOCATION;
	  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
	  var state = {};
	  var nextState = {};
	  var pendingTransition = null;
	  var dispatchHandler = null;
	
	  if (typeof location === "string") location = new StaticLocation(location);
	
	  if (location instanceof StaticLocation) {
	    warning(!canUseDOM || process.env.NODE_ENV === "test", "You should not use a static location in a DOM environment because " + "the router will not be kept in sync with the current URL");
	  } else {
	    invariant(canUseDOM || location.needsDOM === false, "You cannot use %s without a DOM", location);
	  }
	
	  // Automatically fall back to full page refreshes in
	  // browsers that don't support the HTML history API.
	  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;
	
	  var Router = React.createClass({
	
	    displayName: "Router",
	
	    statics: {
	
	      isRunning: false,
	
	      cancelPendingTransition: function cancelPendingTransition() {
	        if (pendingTransition) {
	          pendingTransition.cancel();
	          pendingTransition = null;
	        }
	      },
	
	      clearAllRoutes: function clearAllRoutes() {
	        Router.cancelPendingTransition();
	        Router.namedRoutes = {};
	        Router.routes = [];
	      },
	
	      /**
	       * Adds routes to this router from the given children object (see ReactChildren).
	       */
	      addRoutes: function addRoutes(routes) {
	        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);
	
	        addRoutesToNamedRoutes(routes, Router.namedRoutes);
	
	        Router.routes.push.apply(Router.routes, routes);
	      },
	
	      /**
	       * Replaces routes of this router from the given children object (see ReactChildren).
	       */
	      replaceRoutes: function replaceRoutes(routes) {
	        Router.clearAllRoutes();
	        Router.addRoutes(routes);
	        Router.refresh();
	      },
	
	      /**
	       * Performs a match of the given path against this router and returns an object
	       * with the { routes, params, pathname, query } that match. Returns null if no
	       * match can be made.
	       */
	      match: function match(path) {
	        return Match.findMatch(Router.routes, path);
	      },
	
	      /**
	       * Returns an absolute URL path created from the given route
	       * name, URL parameters, and query.
	       */
	      makePath: function makePath(to, params, query) {
	        var path;
	        if (PathUtils.isAbsolute(to)) {
	          path = to;
	        } else {
	          var route = to instanceof Route ? to : Router.namedRoutes[to];
	
	          invariant(route instanceof Route, "Cannot find a route named \"%s\"", to);
	
	          path = route.path;
	        }
	
	        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
	      },
	
	      /**
	       * Returns a string that may safely be used as the href of a link
	       * to the route with the given name, URL parameters, and query.
	       */
	      makeHref: function makeHref(to, params, query) {
	        var path = Router.makePath(to, params, query);
	        return location === HashLocation ? "#" + path : path;
	      },
	
	      /**
	       * Transitions to the URL specified in the arguments by pushing
	       * a new URL onto the history stack.
	       */
	      transitionTo: function transitionTo(to, params, query) {
	        var path = Router.makePath(to, params, query);
	
	        if (pendingTransition) {
	          // Replace so pending location does not stay in history.
	          location.replace(path);
	        } else {
	          location.push(path);
	        }
	      },
	
	      /**
	       * Transitions to the URL specified in the arguments by replacing
	       * the current URL in the history stack.
	       */
	      replaceWith: function replaceWith(to, params, query) {
	        location.replace(Router.makePath(to, params, query));
	      },
	
	      /**
	       * Transitions to the previous URL if one is available. Returns true if the
	       * router was able to go back, false otherwise.
	       *
	       * Note: The router only tracks history entries in your application, not the
	       * current browser session, so you can safely call this function without guarding
	       * against sending the user back to some other site. However, when using
	       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
	       * don't support HTML5 history) this method will *always* send the client back
	       * because we cannot reliably track history length.
	       */
	      goBack: function goBack() {
	        if (History.length > 1 || location === RefreshLocation) {
	          location.pop();
	          return true;
	        }
	
	        warning(false, "goBack() was ignored because there is no router history");
	
	        return false;
	      },
	
	      handleAbort: options.onAbort || function (abortReason) {
	        if (location instanceof StaticLocation) throw new Error("Unhandled aborted transition! Reason: " + abortReason);
	
	        if (abortReason instanceof Cancellation) {
	          return;
	        } else if (abortReason instanceof Redirect) {
	          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
	        } else {
	          location.pop();
	        }
	      },
	
	      handleError: options.onError || function (error) {
	        // Throw so we don't silently swallow async errors.
	        throw error; // This error probably originated in a transition hook.
	      },
	
	      handleLocationChange: function handleLocationChange(change) {
	        Router.dispatch(change.path, change.type);
	      },
	
	      /**
	       * Performs a transition to the given path and calls callback(error, abortReason)
	       * when the transition is finished. If both arguments are null the router's state
	       * was updated. Otherwise the transition did not complete.
	       *
	       * In a transition, a router first determines which routes are involved by beginning
	       * with the current route, up the route tree to the first parent route that is shared
	       * with the destination route, and back down the tree to the destination route. The
	       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
	       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
	       * all route handlers we're transitioning to.
	       *
	       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
	       * transition. To resolve asynchronously, they may use the callback argument. If no
	       * hooks wait, the transition is fully synchronous.
	       */
	      dispatch: function dispatch(path, action) {
	        Router.cancelPendingTransition();
	
	        var prevPath = state.path;
	        var isRefreshing = action == null;
	
	        if (prevPath === path && !isRefreshing) {
	          return;
	        } // Nothing to do!
	
	        // Record the scroll position as early as possible to
	        // get it before browsers try update it automatically.
	        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);
	
	        var match = Router.match(path);
	
	        warning(match != null, "No route matches path \"%s\". Make sure you have <Route path=\"%s\"> somewhere in your routes", path, path);
	
	        if (match == null) match = {};
	
	        var prevRoutes = state.routes || [];
	        var prevParams = state.params || {};
	        var prevQuery = state.query || {};
	
	        var nextRoutes = match.routes || [];
	        var nextParams = match.params || {};
	        var nextQuery = match.query || {};
	
	        var fromRoutes, toRoutes;
	        if (prevRoutes.length) {
	          fromRoutes = prevRoutes.filter(function (route) {
	            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });
	
	          toRoutes = nextRoutes.filter(function (route) {
	            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });
	        } else {
	          fromRoutes = [];
	          toRoutes = nextRoutes;
	        }
	
	        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
	        pendingTransition = transition;
	
	        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);
	
	        Transition.from(transition, fromRoutes, fromComponents, function (error) {
	          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.
	
	          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
	            dispatchHandler.call(Router, error, transition, {
	              path: path,
	              action: action,
	              pathname: match.pathname,
	              routes: nextRoutes,
	              params: nextParams,
	              query: nextQuery
	            });
	          });
	        });
	      },
	
	      /**
	       * Starts this router and calls callback(router, state) when the route changes.
	       *
	       * If the router's location is static (i.e. a URL path in a server environment)
	       * the callback is called only once. Otherwise, the location should be one of the
	       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
	       */
	      run: function run(callback) {
	        invariant(!Router.isRunning, "Router is already running");
	
	        dispatchHandler = function (error, transition, newState) {
	          if (error) Router.handleError(error);
	
	          if (pendingTransition !== transition) return;
	
	          pendingTransition = null;
	
	          if (transition.abortReason) {
	            Router.handleAbort(transition.abortReason);
	          } else {
	            callback.call(Router, Router, nextState = newState);
	          }
	        };
	
	        if (!(location instanceof StaticLocation)) {
	          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);
	
	          Router.isRunning = true;
	        }
	
	        // Bootstrap using the current path.
	        Router.refresh();
	      },
	
	      refresh: function refresh() {
	        Router.dispatch(location.getCurrentPath(), null);
	      },
	
	      stop: function stop() {
	        Router.cancelPendingTransition();
	
	        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);
	
	        Router.isRunning = false;
	      },
	
	      getLocation: function getLocation() {
	        return location;
	      },
	
	      getScrollBehavior: function getScrollBehavior() {
	        return scrollBehavior;
	      },
	
	      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
	        var routes = state.routes;
	        return routes && routes[routeDepth];
	      },
	
	      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
	        mountedComponents[routeDepth] = component;
	      },
	
	      /**
	       * Returns the current URL path + query string.
	       */
	      getCurrentPath: function getCurrentPath() {
	        return state.path;
	      },
	
	      /**
	       * Returns the current URL path without the query string.
	       */
	      getCurrentPathname: function getCurrentPathname() {
	        return state.pathname;
	      },
	
	      /**
	       * Returns an object of the currently active URL parameters.
	       */
	      getCurrentParams: function getCurrentParams() {
	        return state.params;
	      },
	
	      /**
	       * Returns an object of the currently active query parameters.
	       */
	      getCurrentQuery: function getCurrentQuery() {
	        return state.query;
	      },
	
	      /**
	       * Returns an array of the currently active routes.
	       */
	      getCurrentRoutes: function getCurrentRoutes() {
	        return state.routes;
	      },
	
	      /**
	       * Returns true if the given route, params, and query are active.
	       */
	      isActive: function isActive(to, params, query) {
	        if (PathUtils.isAbsolute(to)) {
	          return to === state.path;
	        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
	      }
	
	    },
	
	    mixins: [ScrollHistory],
	
	    propTypes: {
	      children: PropTypes.falsy
	    },
	
	    childContextTypes: {
	      routeDepth: PropTypes.number.isRequired,
	      router: PropTypes.router.isRequired
	    },
	
	    getChildContext: function getChildContext() {
	      return {
	        routeDepth: 1,
	        router: Router
	      };
	    },
	
	    getInitialState: function getInitialState() {
	      return state = nextState;
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.setState(state = nextState);
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	      Router.stop();
	    },
	
	    render: function render() {
	      var route = Router.getRouteAtDepth(0);
	      return route ? React.createElement(route.handler, this.props) : null;
	    }
	
	  });
	
	  Router.clearAllRoutes();
	
	  if (options.routes) Router.addRoutes(options.routes);
	
	  return Router;
	}
	
	module.exports = createRouter;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createRouter = __webpack_require__(121);
	
	/**
	 * A high-level convenience method that creates, configures, and
	 * runs a router in one shot. The method signature is:
	 *
	 *   Router.run(routes[, location ], callback);
	 *
	 * Using `window.location.hash` to manage the URL, you could do:
	 *
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 * 
	 * Using HTML5 history and a custom "cursor" prop:
	 * 
	 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
	 *     React.render(<Handler cursor={cursor}/>, document.body);
	 *   });
	 *
	 * Returns the newly created router.
	 *
	 * Note: If you need to specify further options for your router such
	 * as error/abort handling or custom scroll behavior, use Router.create
	 * instead.
	 *
	 *   var router = Router.create(options);
	 *   router.run(function (Handler) {
	 *     // ...
	 *   });
	 */
	function runRouter(routes, location, callback) {
	  if (typeof location === "function") {
	    callback = location;
	    location = null;
	  }
	
	  var router = createRouter({
	    routes: routes,
	    location: location
	  });
	
	  router.run(callback);
	
	  return router;
	}
	
	module.exports = runRouter;

/***/ },
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var assign = __webpack_require__(26);
	var ReactPropTypes = __webpack_require__(1).PropTypes;
	var Route = __webpack_require__(119);
	
	var PropTypes = assign({}, ReactPropTypes, {
	
	  /**
	   * Indicates that a prop should be falsy.
	   */
	  falsy: function falsy(props, propName, componentName) {
	    if (props[propName]) {
	      return new Error("<" + componentName + "> may not have a \"" + propName + "\" prop");
	    }
	  },
	
	  /**
	   * Indicates that a prop should be a Route object.
	   */
	  route: ReactPropTypes.instanceOf(Route),
	
	  /**
	   * Indicates that a prop should be a Router object.
	   */
	  //router: ReactPropTypes.instanceOf(Router) // TODO
	  router: ReactPropTypes.func
	
	});
	
	module.exports = PropTypes;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	/**
	 * This component is necessary to get around a context warning
	 * present in React 0.13.0. It sovles this by providing a separation
	 * between the "owner" and "parent" contexts.
	 */
	
	var React = __webpack_require__(1);
	
	var ContextWrapper = (function (_React$Component) {
	  function ContextWrapper() {
	    _classCallCheck(this, ContextWrapper);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(ContextWrapper, _React$Component);
	
	  _createClass(ContextWrapper, {
	    render: {
	      value: function render() {
	        return this.props.children;
	      }
	    }
	  });
	
	  return ContextWrapper;
	})(React.Component);
	
	module.exports = ContextWrapper;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * Actions that modify the URL.
	 */
	var LocationActions = {
	
	  /**
	   * Indicates a new location is being pushed to the history stack.
	   */
	  PUSH: "push",
	
	  /**
	   * Indicates the current location should be replaced.
	   */
	  REPLACE: "replace",
	
	  /**
	   * Indicates the most recent entry should be removed from the history stack.
	   */
	  POP: "pop"
	
	};
	
	module.exports = LocationActions;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var invariant = __webpack_require__(40);
	var objectAssign = __webpack_require__(196);
	var qs = __webpack_require__(197);
	
	var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
	var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
	var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
	var queryMatcher = /\?(.*)$/;
	
	var _compiledPatterns = {};
	
	function compilePattern(pattern) {
	  if (!(pattern in _compiledPatterns)) {
	    var paramNames = [];
	    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
	      if (paramName) {
	        paramNames.push(paramName);
	        return "([^/?#]+)";
	      } else if (match === "*") {
	        paramNames.push("splat");
	        return "(.*?)";
	      } else {
	        return "\\" + match;
	      }
	    });
	
	    _compiledPatterns[pattern] = {
	      matcher: new RegExp("^" + source + "$", "i"),
	      paramNames: paramNames
	    };
	  }
	
	  return _compiledPatterns[pattern];
	}
	
	var PathUtils = {
	
	  /**
	   * Returns true if the given path is absolute.
	   */
	  isAbsolute: function isAbsolute(path) {
	    return path.charAt(0) === "/";
	  },
	
	  /**
	   * Joins two URL paths together.
	   */
	  join: function join(a, b) {
	    return a.replace(/\/*$/, "/") + b;
	  },
	
	  /**
	   * Returns an array of the names of all parameters in the given pattern.
	   */
	  extractParamNames: function extractParamNames(pattern) {
	    return compilePattern(pattern).paramNames;
	  },
	
	  /**
	   * Extracts the portions of the given URL path that match the given pattern
	   * and returns an object of param name => value pairs. Returns null if the
	   * pattern does not match the given path.
	   */
	  extractParams: function extractParams(pattern, path) {
	    var _compilePattern = compilePattern(pattern);
	
	    var matcher = _compilePattern.matcher;
	    var paramNames = _compilePattern.paramNames;
	
	    var match = path.match(matcher);
	
	    if (!match) {
	      return null;
	    }var params = {};
	
	    paramNames.forEach(function (paramName, index) {
	      params[paramName] = match[index + 1];
	    });
	
	    return params;
	  },
	
	  /**
	   * Returns a version of the given route path with params interpolated. Throws
	   * if there is a dynamic segment of the route path for which there is no param.
	   */
	  injectParams: function injectParams(pattern, params) {
	    params = params || {};
	
	    var splatIndex = 0;
	
	    return pattern.replace(paramInjectMatcher, function (match, paramName) {
	      paramName = paramName || "splat";
	
	      // If param is optional don't check for existence
	      if (paramName.slice(-1) === "?") {
	        paramName = paramName.slice(0, -1);
	
	        if (params[paramName] == null) return "";
	      } else {
	        invariant(params[paramName] != null, "Missing \"%s\" parameter for path \"%s\"", paramName, pattern);
	      }
	
	      var segment;
	      if (paramName === "splat" && Array.isArray(params[paramName])) {
	        segment = params[paramName][splatIndex++];
	
	        invariant(segment != null, "Missing splat # %s for path \"%s\"", splatIndex, pattern);
	      } else {
	        segment = params[paramName];
	      }
	
	      return segment;
	    }).replace(paramInjectTrailingSlashMatcher, "/");
	  },
	
	  /**
	   * Returns an object that is the result of parsing any query string contained
	   * in the given path, null if the path contains no query string.
	   */
	  extractQuery: function extractQuery(path) {
	    var match = path.match(queryMatcher);
	    return match && qs.parse(match[1]);
	  },
	
	  /**
	   * Returns a version of the given path without the query string.
	   */
	  withoutQuery: function withoutQuery(path) {
	    return path.replace(queryMatcher, "");
	  },
	
	  /**
	   * Returns a version of the given path with the parameters in the given
	   * query merged into the query string.
	   */
	  withQuery: function withQuery(path, query) {
	    var existingQuery = PathUtils.extractQuery(path);
	
	    if (existingQuery) query = query ? objectAssign(existingQuery, query) : existingQuery;
	
	    var queryString = qs.stringify(query, { arrayFormat: "brackets" });
	
	    if (queryString) {
	      return PathUtils.withoutQuery(path) + "?" + queryString;
	    }return PathUtils.withoutQuery(path);
	  }
	
	};
	
	module.exports = PathUtils;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var invariant = __webpack_require__(40);
	var canUseDOM = __webpack_require__(29).canUseDOM;
	var getWindowScrollPosition = __webpack_require__(195);
	
	function shouldUpdateScroll(state, prevState) {
	  if (!prevState) {
	    return true;
	  } // Don't update scroll position when only the query has changed.
	  if (state.pathname === prevState.pathname) {
	    return false;
	  }var routes = state.routes;
	  var prevRoutes = prevState.routes;
	
	  var sharedAncestorRoutes = routes.filter(function (route) {
	    return prevRoutes.indexOf(route) !== -1;
	  });
	
	  return !sharedAncestorRoutes.some(function (route) {
	    return route.ignoreScrollBehavior;
	  });
	}
	
	/**
	 * Provides the router with the ability to manage window scroll position
	 * according to its scroll behavior.
	 */
	var ScrollHistory = {
	
	  statics: {
	
	    /**
	     * Records curent scroll position as the last known position for the given URL path.
	     */
	    recordScrollPosition: function recordScrollPosition(path) {
	      if (!this.scrollHistory) this.scrollHistory = {};
	
	      this.scrollHistory[path] = getWindowScrollPosition();
	    },
	
	    /**
	     * Returns the last known scroll position for the given URL path.
	     */
	    getScrollPosition: function getScrollPosition(path) {
	      if (!this.scrollHistory) this.scrollHistory = {};
	
	      return this.scrollHistory[path] || null;
	    }
	
	  },
	
	  componentWillMount: function componentWillMount() {
	    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, "Cannot use scroll behavior without a DOM");
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._updateScroll();
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    this._updateScroll(prevState);
	  },
	
	  _updateScroll: function _updateScroll(prevState) {
	    if (!shouldUpdateScroll(this.state, prevState)) {
	      return;
	    }var scrollBehavior = this.constructor.getScrollBehavior();
	
	    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
	  }
	
	};
	
	module.exports = ScrollHistory;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(1);
	
	function isValidChild(object) {
	  return object == null || React.isValidElement(object);
	}
	
	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}
	
	module.exports = isReactChildren;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* jshint -W058 */
	
	var Cancellation = __webpack_require__(174);
	var Redirect = __webpack_require__(173);
	
	/**
	 * Encapsulates a transition to a given path.
	 *
	 * The willTransitionTo and willTransitionFrom handlers receive
	 * an instance of this class as their first argument.
	 */
	function Transition(path, retry) {
	  this.path = path;
	  this.abortReason = null;
	  // TODO: Change this to router.retryTransition(transition)
	  this.retry = retry.bind(this);
	}
	
	Transition.prototype.abort = function (reason) {
	  if (this.abortReason == null) this.abortReason = reason || "ABORT";
	};
	
	Transition.prototype.redirect = function (to, params, query) {
	  this.abort(new Redirect(to, params, query));
	};
	
	Transition.prototype.cancel = function () {
	  this.abort(new Cancellation());
	};
	
	Transition.from = function (transition, routes, components, callback) {
	  routes.reduce(function (callback, route, index) {
	    return function (error) {
	      if (error || transition.abortReason) {
	        callback(error);
	      } else if (route.onLeave) {
	        try {
	          route.onLeave(transition, components[index], callback);
	
	          // If there is no callback in the argument list, call it automatically.
	          if (route.onLeave.length < 3) callback();
	        } catch (e) {
	          callback(e);
	        }
	      } else {
	        callback();
	      }
	    };
	  }, callback)();
	};
	
	Transition.to = function (transition, routes, params, query, callback) {
	  routes.reduceRight(function (callback, route) {
	    return function (error) {
	      if (error || transition.abortReason) {
	        callback(error);
	      } else if (route.onEnter) {
	        try {
	          route.onEnter(transition, params, query, callback);
	
	          // If there is no callback in the argument list, call it automatically.
	          if (route.onEnter.length < 4) callback();
	        } catch (e) {
	          callback(e);
	        }
	      } else {
	        callback();
	      }
	    };
	  }, callback)();
	};
	
	module.exports = Transition;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * Encapsulates a redirect to the given route.
	 */
	function Redirect(to, params, query) {
	  this.to = to;
	  this.params = params;
	  this.query = query;
	}
	
	module.exports = Redirect;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * Represents a cancellation caused by navigating away
	 * before the previous transition has fully resolved.
	 */
	function Cancellation() {}
	
	module.exports = Cancellation;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	/* jshint -W084 */
	var PathUtils = __webpack_require__(169);
	
	function deepSearch(route, pathname, query) {
	  // Check the subtree first to find the most deeply-nested match.
	  var childRoutes = route.childRoutes;
	  if (childRoutes) {
	    var match, childRoute;
	    for (var i = 0, len = childRoutes.length; i < len; ++i) {
	      childRoute = childRoutes[i];
	
	      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.
	
	      if (match = deepSearch(childRoute, pathname, query)) {
	        // A route in the subtree matched! Add this route and we're done.
	        match.routes.unshift(route);
	        return match;
	      }
	    }
	  }
	
	  // No child routes matched; try the default route.
	  var defaultRoute = route.defaultRoute;
	  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
	    return new Match(pathname, params, query, [route, defaultRoute]);
	  } // Does the "not found" route match?
	  var notFoundRoute = route.notFoundRoute;
	  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
	    return new Match(pathname, params, query, [route, notFoundRoute]);
	  } // Last attempt: check this route.
	  var params = PathUtils.extractParams(route.path, pathname);
	  if (params) {
	    return new Match(pathname, params, query, [route]);
	  }return null;
	}
	
	var Match = (function () {
	  function Match(pathname, params, query, routes) {
	    _classCallCheck(this, Match);
	
	    this.pathname = pathname;
	    this.params = params;
	    this.query = query;
	    this.routes = routes;
	  }
	
	  _createClass(Match, null, {
	    findMatch: {
	
	      /**
	       * Attempts to match depth-first a route in the given route's
	       * subtree against the given path and returns the match if it
	       * succeeds, null if no match can be made.
	       */
	
	      value: function findMatch(routes, path) {
	        var pathname = PathUtils.withoutQuery(path);
	        var query = PathUtils.extractQuery(path);
	        var match = null;
	
	        for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);
	
	        return match;
	      }
	    }
	  });
	
	  return Match;
	})();
	
	module.exports = Match;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function supportsHistory() {
	  /*! taken from modernizr
	   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	   */
	  var ua = navigator.userAgent;
	  if ((ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) && ua.indexOf("Mobile Safari") !== -1 && ua.indexOf("Chrome") === -1 && ua.indexOf("Windows Phone") === -1) {
	    return false;
	  }
	  return window.history && "pushState" in window.history;
	}
	
	module.exports = supportsHistory;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var invariant = __webpack_require__(40);
	var canUseDOM = __webpack_require__(29).canUseDOM;
	
	/**
	 * Returns the current scroll position of the window as { x, y }.
	 */
	function getWindowScrollPosition() {
	  invariant(canUseDOM, "Cannot get current scroll position without a DOM");
	
	  return {
	    x: window.pageXOffset || document.documentElement.scrollLeft,
	    y: window.pageYOffset || document.documentElement.scrollTop
	  };
	}
	
	module.exports = getWindowScrollPosition;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(204);


/***/ },
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Stringify = __webpack_require__(206);
	var Parse = __webpack_require__(207);
	
	
	// Declare internals
	
	var internals = {};
	
	
	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 205 */,
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Utils = __webpack_require__(209);
	
	
	// Declare internals
	
	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	            return prefix;
	        }
	    }
	};
	
	
	internals.stringify = function (obj, prefix, generateArrayPrefix) {
	
	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }
	
	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {
	
	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
	        }
	    }
	
	    return values;
	};
	
	
	module.exports = function (obj, options) {
	
	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
	
	    var keys = [];
	
	    if (typeof obj !== 'object' ||
	        obj === null) {
	
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];
	
	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Utils = __webpack_require__(209);
	
	
	// Declare internals
	
	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};
	
	
	internals.parseValues = function (str, options) {
	
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));
	
	            if (Object.prototype.hasOwnProperty(key)) {
	                continue;
	            }
	
	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }
	
	    return obj;
	};
	
	
	internals.parseObject = function (chain, val, options) {
	
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {
	
	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	
	internals.parseKeys = function (key, val, options) {
	
	    if (!key) {
	        return;
	    }
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Don't allow them to overwrite object prototype properties
	
	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	
	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return internals.parseObject(keys, val, options);
	};
	
	
	module.exports = function (str, options) {
	
	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {
	
	        return {};
	    }
	
	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
	
	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }
	
	    return Utils.compact(obj);
	};


/***/ },
/* 208 */,
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	
	// Declare internals
	
	var internals = {};
	
	
	exports.arrayToObject = function (source) {
	
	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {
	
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	
	exports.merge = function (target, source) {
	
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }
	
	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {
	
	        target = exports.arrayToObject(target);
	    }
	
	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];
	
	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }
	
	    return target;
	};
	
	
	exports.decode = function (str) {
	
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	
	exports.compact = function (obj, refs) {
	
	    if (typeof obj !== 'object' ||
	        obj === null) {
	
	        return obj;
	    }
	
	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }
	
	    return obj;
	};
	
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	
	exports.isBuffer = function (obj) {
	
	    if (obj === null ||
	        typeof obj === 'undefined') {
	
	        return false;
	    }
	
	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ }
]);
//# sourceMappingURL=bundle.js.map