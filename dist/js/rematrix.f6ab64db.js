/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
function r(r){if(r.constructor!==Array)throw new TypeError("Expected array.");if(16===r.length)return r;if(6===r.length){var n=t();return n[0]=r[0],n[1]=r[1],n[4]=r[2],n[5]=r[3],n[12]=r[4],n[13]=r[5],n}throw new RangeError("Expected array with either 6 or 16 values.")}function t(){for(var r=[],t=0;t<16;t++)t%5==0?r.push(1):r.push(0);return r}function n(t,n){for(var a=r(t),e=r(n),o=[],u=0;u<4;u++)for(var i=[a[u],a[u+4],a[u+8],a[u+12]],s=0;s<4;s++){var f=4*s,c=[e[f],e[f+1],e[f+2],e[f+3]],h=i[0]*c[0]+i[1]*c[1]+i[2]*c[2]+i[3]*c[3];o[u+f]=h}return o}function a(n){if("string"==typeof n){var a=n.match(/matrix(3d)?\(([^)]+)\)/);if(a)return r(a[2].split(", ").map(parseFloat))}return t()}function e(r){var n=Math.PI/180*r,a=t();return a[5]=a[10]=Math.cos(n),a[6]=a[9]=Math.sin(n),a[9]*=-1,a}function o(r){var n=Math.PI/180*r,a=t();return a[0]=a[10]=Math.cos(n),a[2]=a[8]=Math.sin(n),a[2]*=-1,a}function u(r){var n=Math.PI/180*r,a=t();return a[0]=a[5]=Math.cos(n),a[1]=a[4]=Math.sin(n),a[4]*=-1,a}function i(r,n){var a=t();return a[0]=r,a[5]="number"==typeof n?n:r,a}function s(r){var n=t();return n[12]=r,n}function f(r){var n=t();return n[13]=r,n}export{s as a,o as b,u as c,n as m,a as p,e as r,i as s,f as t};
