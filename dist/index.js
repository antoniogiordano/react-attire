!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("joi-browser")):"function"==typeof define&&define.amd?define(["react","joi-browser"],t):"object"==typeof exports?exports["react-attire"]=t(require("react"),require("joi-browser")):e["react-attire"]=t(e.react,e["joi-browser"])}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validationsStates=t.Validator=void 0;var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.Validator=o.default,t.validationsStates=n.validationsStates,t.default=o.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Validator=t.validationStates=void 0;var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),c=r(7),l=(n(c),r(8)),f=n(l),p=function(e,t){var r=t.split("."),n=void 0;if(r.length>1){n=e[r[0]];for(var o=1;o<r.length-1;o++)n=n[r[o]];return{object:n,field:r.pop()}}return{object:e,field:r[0]}},d=function(e,t){return new Promise(function(r,n){var o={};Object.keys(t).forEach(function(e){return o[e]={state:v.CORRECT,error:null}}),f.default.validate(t,e,{abortEarly:!1},function(e){return e&&e.details.map(function(e){var r=p(t,e.path),i=r.object,a=r.field;if(void 0===i[a])return n("Error: field not found. "+a);0===i[a].toString().length?o[e.path]={state:v.EMPTY,error:null}:o[e.path]={state:v.WRONG,error:e.message}}),r({isValid:!e,validations:o})})})},h=function(e){var t={};return Object.keys(e).forEach(function(e){return t[e]={state:v.EMPTY,error:null}}),t},v=t.validationStates={CORRECT:"correct",WRONG:"wrong",EMPTY:"empty"};(t.Validator=function(e){function t(e){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return b.call(r),r.state={isValid:!1,validations:h(e.data)},r}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.handleFormValueChange(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.handleFormValueChange(e)}},{key:"render",value:function(){return this.props.children(this.state.isValid,this.state.validations)}}]),t}(c.Component)).propTypes={data:s.object.isRequired,joiObject:s.object.isRequired};var b=function(){var e=this;this.handleFormValueChange=function(t){d(t.joiObject,t.data).then(function(t){var r=t.isValid,n=t.validations;return e.setState({isValid:r,validations:n})}).catch(function(e){throw console.log(e),e})}}},function(e,t,r){e.exports=r(3)()},function(e,t,r){"use strict";var n=r(4),o=r(5),i=r(6);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";function n(e,t,r,n,i,a,u,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,i,a,u,s],f=0;c=new Error(t.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,r){t.exports=e},function(e,r){e.exports=t}])});