parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"7GFy":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=function(){function t(t,i){void 0===t&&(t=window.innerWidth),void 0===i&&(i=window.innerHeight),this.framerate=null,this.image=null,this.loop=!0,this.createCanvas(t,i)}return t.prototype.start=function(t){var i=this;this.loop&&(this.calcFramerate(t),requestAnimationFrame(function(){i.start(t)}))},t.prototype.noLoop=function(){this.loop=!1},t.prototype.getColour=function(){var t=this.ctx.fillStyle;if("string"==typeof t)return[parseInt(t.substring(1,3),16),parseInt(t.substring(3,5),16),parseInt(t.substring(5),16)]},t.prototype.setColour=function(t){this.ctx.fillStyle="rgb("+t[0]+", "+t[1]+", "+t[2]+")",this.ctx.strokeStyle="rgb("+t[0]+", "+t[1]+", "+t[2]+")"},t.prototype.set=function(t,i){null==this.image&&(this.image=this.ctx.getImageData(0,0,this.width,this.height));var e=this.getColour(),o=4*i*this.width+4*t;this.image.data[o]=e[0],this.image.data[o+1]=e[1],this.image.data[o+2]=e[2]},t.prototype.updatePixels=function(){null!=this.image&&(this.ctx.putImageData(this.image,0,0),this.image=null)},t.prototype.setFont=function(t,i,e,o){this.ctx.font=t+"px "+i,this.ctx.textAlign=e,this.ctx.textBaseline=o},t.prototype.text=function(t,i,e){this.ctx.fillText(t,i,e)},t.prototype.showFramerate=function(){null!=this.framerate&&(this.setColour([255,255,255]),this.rect(0,0,35,20),this.setColour([0,0,0]),this.setFont(20,"serif","left","top"),this.text(this.framerate,0,0))},t.prototype.background=function(t){var i=this.getColour();this.setColour(t),this.rect(0,0,this.width,this.height),this.setColour(i)},t.prototype.line=function(t,i,e,o){this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,o),this.ctx.stroke()},t.prototype.rect=function(t,i,e,o){this.ctx.beginPath(),this.ctx.rect(t,i,e,o),this.ctx.fill()},t.prototype.circle=function(t,i,e){this.ctx.beginPath(),this.ctx.arc(t,i,e,0,2*Math.PI),this.ctx.fill()},t.prototype.createCanvas=function(t,i){var e=document.createElement("canvas");this.width=e.width=t,this.height=e.height=i,this.ctx=e.getContext("2d"),document.body.appendChild(e),this.background([255,255,255])},t.prototype.calcFramerate=function(t){var i=performance.now();t();var e=performance.now();this.framerate=(1/((e-i)/1e3)).toFixed(1)},t}();exports.default=t;
},{}],"g7hl":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var t=e(require("./canvas")),r=new t.default;function a(){r.background([255,255,255]);for(var e=0;e<r.width/4;e++)for(var t=0;t<r.height/4;t++)r.setColour([0,0,255]),r.set(e,t);r.rect(100,100,100,100),r.updatePixels(),r.setColour([255,0,0]),r.showFramerate()}r.start(a);
},{"./canvas":"7GFy"}]},{},["g7hl"], null)
//# sourceMappingURL=/TypeScriptBoilerplate/main.f644c9ad.js.map