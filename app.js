(function(t){function e(e){for(var s,n,o=e[0],u=e[1],l=e[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1ec4":function(t,e,r){"use strict";r("d331")},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("2b0e"),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},["syui"===t.id?e("div",{staticClass:"bluesky-avatar"},[e("img",{attrs:{src:t.user.data.avatar}})]):t._e(),"syui"===t.id?e("div",{staticClass:"bluesky-user"},[e("p",[t._v(t._s(t.user.data.did))])]):t._e(),e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{placeholder:"id",value:"id"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),e("input",{attrs:{type:"submit"}})]),e("p",[e("a",{attrs:{href:this.bskyurl}},[t._v(t._s(t.name))])]),t.avator?e("div",{staticClass:"bluesky-avatar"},[e("img",{attrs:{src:t.avator}})]):t._e(),t.record&&t.record.data.records[0].uri!==t.uri?e("div",{staticClass:"bluesky-record"},t._l(t.record.data.records,(function(r){return e("li",[e("p",[e("span",{staticClass:"name"},[t._v(t._s(t.name))])]),e("p",[e("span",{staticClass:"text"},[t._v(t._s(r.value.text))])]),e("p",[e("span",{staticClass:"time"},[e("a",{attrs:{href:r.uri}},[t._v(t._s(r.value.createdAt))])])])])})),0):t._e()])},i=[],n=r("bc3a"),o=r.n(n),u=window.location.pathname.split("/").slice(-1)[0],l=window.location.hash.split("/").slice(-1)[0];if(0==u.length||"bsky"===u)var c="syui";else c=u;if("#github"===l)var p="https://github.com/"+c+".png";var d={data(){return{uri:"did:plc:uqzpqmrjnptsxezjx4xuh2mn",name:"@"+c+".bsky.social",id:c,bskyurl:"https://bsky.app/profile/"+c+".bsky.social",user:null,record:null,appurl:u,avator:p}},mounted(){o.a.get("/json/syui.bsky.social.json").then(t=>this.user=t),o.a.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user="+this.id+".bsky.social&collection=app.bsky.feed.post").then(t=>this.record=t)},methods:{submit(){o.a.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user="+this.id+".bsky.social&collection=app.bsky.feed.post").then(t=>this.record=t),this.name="@"+this.id+".bsky.social",null!==this.uri?this.uri=this.record.data.records[0].uri:this.uri=null}}},f=d,h=(r("1ec4"),r("2877")),v=Object(h["a"])(f,a,i,!1,null,null,null),b=v.exports;s["a"].config.productionTip=!1,new s["a"]({render:t=>t(b)}).$mount("#app")},d331:function(t,e,r){}});
//# sourceMappingURL=app.js.map