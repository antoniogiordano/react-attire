!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-attire"]=t(require("react")):e["react-attire"]=t(e.react)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);Object.defineProperty(t,"Attire",{enumerable:!0,get:function(){return n.Attire}});var o=r(8);Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return o.validate}});var u=r(9);Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return u.transform}});var i=r(10);Object.defineProperty(t,"value",{enumerable:!0,get:function(){return i.value}})},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Attire=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(2),s=r(7),l=function(e){return e&&e.__esModule?e:{default:e}}(s),p=function(e){function t(e){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleFormValueChange=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var u=r.props.onChange,i={};if(1===t.length){var c=t[0],f=c.target,s=f.name,l=f.type,p=f.checked,d=f.value;i=n({},s,"checkbox"===l?p:d)}if(2===t.length){var b=t[0],v=t[1];i=n({},b,v)}r.setState(function(e){var t=a({},e.data,i);return u&&u(t),{data:t}})},r.handleFormReset=function(){var e=r.props,t=e.initial,n=e.onChange;r.setState(function(e){return n&&n(a({},t)),{data:a({},t)}})},r.state={data:a({},e.initial)},r}return i(t,e),c(t,[{key:"render",value:function(){return this.props.children(this.state.data,this.handleFormValueChange,this.handleFormReset)}}]),t}(l.default.Component);p.propTypes={initial:f.object,onChange:f.func,render:f.func},p.defaultProps={initial:{}},t.Attire=p},function(e,t,r){e.exports=r(3)()},function(e,t,r){"use strict";var n=r(4),o=r(5),u=r(6);e.exports=function(){function e(e,t,r,n,i,a){a!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";function n(e,t,r,n,u,i,a,c){if(o(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,u,i,a,c],l=0;f=new Error(t.replace(/%s/g,function(){return s[l++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e,t){var r=function(t){return new Promise(function(r,n){if(!e||0===Object.keys(e).length)return r(t);var o={};return Object.keys(e).reduce(function(r,n){var u=r;return u=!!e[n].call(void 0,t[n],t),o[n]=u,!1!==r&&u},!0)?r(t):n(o)})};return t?r(t):r}Object.defineProperty(t,"__esModule",{value:!0}),t.validate=n},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=this,o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&0!==Object.keys(e).length?Object.keys(t).reduce(function(o,i){return e[i]?u({},o,n({},i,e[i].call(r,t[i],t))):u({},o,n({},i,t[i]))},{}):t};return t?o(t):o}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.transform=o},function(e,t,r){"use strict";function n(e){return e||""}Object.defineProperty(t,"__esModule",{value:!0}),t.value=n}])});