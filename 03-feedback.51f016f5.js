!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function T(e){return l=e,f=setTimeout(j,t),d?y(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function j(){var e=p();if(O(e))return E(e);f=setTimeout(j,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function E(e){return f=void 0,v&&r?y(e):(r=o=void 0,u)}function h(){var e=p(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return T(c);if(s)return f=setTimeout(j,t),y(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},h.flush=function(){return void 0===f?u:E(p())},h}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?c(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var T=document.querySelector(".feedback-form"),O=document.querySelector("input"),j=document.querySelector("textarea"),E="feedback-form-state",h={email:"",message:""};T.addEventListener("input",n((function(e){var t=e.target.value;h[e.target.name]=t,localStorage.setItem(E,JSON.stringify(h))}),500)),function(){var e=localStorage.getItem(E);if(e){var t=JSON.parse(e);O.value=t.email,j.value=t.message,h={email:"".concat(O.value),message:"".concat(j.value)}}}(),T.addEventListener("submit",(function(e){e.preventDefault(),O.value&&j.value?(e.currentTarget.reset(),localStorage.removeItem(E),console.log(h)):alert("ATTENTION !!! PLEASE, ALL FIELDS SHOULD BE FILLED !!!!")}))}();
//# sourceMappingURL=03-feedback.51f016f5.js.map
