import{i as r}from"./is-dom-node.77e5b026.js";import{i as t}from"./is-dom-node-list.24e7dd31.js";
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function e(e,o){if(void 0===o&&(o=document),e instanceof Array)return e.filter(r);if(r(e))return[e];if(t(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var i=o.querySelectorAll(e);return Array.prototype.slice.call(i)}catch(n){return[]}return[]}export{e as t};
