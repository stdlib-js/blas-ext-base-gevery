"use strict";var v=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=v(function(w,c){
var g=require('@stdlib/boolean-ctor/dist');function p(a,r,e,u){var t,i,n,o;if(t=r.data,i=r.accessors[0],e===0)return g(i(t,u));for(n=u,o=0;o<a;o++){if(!i(t,n))return!1;n+=e}return!0}c.exports=p
});var s=v(function(z,q){
var b=require('@stdlib/array-base-arraylike2object/dist'),d=require('@stdlib/boolean-ctor/dist'),B=f();function j(a,r,e,u){var t,i,n;if(a<=0)return!1;if(i=b(r),i.accessorProtocol)return B(a,i,e,u);if(e===0)return d(r[u]);for(t=u,n=0;n<a;n++){if(!r[t])return!1;t+=e}return!0}q.exports=j
});var y=v(function(A,l){
var k=require('@stdlib/strided-base-stride2offset/dist'),m=s();function O(a,r,e){var u=k(a,e);return m(a,r,e,u)}l.exports=O
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=y(),R=s();P(x,"ndarray",R);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
