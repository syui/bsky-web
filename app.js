(function(t){function e(e){for(var a,n,l=e[0],r=e[1],d=e[2],p=0,u=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);c&&c(e);while(u.length)u.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,l=1;l<s.length;l++){var r=s[l];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1:function(t,e){},"155f":function(t,e,s){},2:function(t,e){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("p",[e("a",{attrs:{href:this.signin}},[e("button",{},[t._v("signin")])]),t._v(" "),e("a",{attrs:{href:this.login}},[e("button",{},[t._v("login")])])]),"login.bsky.social"===t.id?e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.lsubmit.apply(null,arguments)}}},[e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.handle,expression:"handle"}],attrs:{placeholder:"user.bsky.social"},domProps:{value:t.handle},on:{input:function(e){e.target.composing||(t.handle=e.target.value)}}})]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("button",{attrs:{type:"lsubmit"}},[t._v("send")])])]):t._e(),null!==t.login_body?e("div",[e("p",[t._v(t._s(t.id=t.login_body.data.handle))]),e("p",[t._v(t._s(this.name="@"+this.id))]),null!==t.login_profile?e("div",{staticClass:"bluesky-avatar"},[e("p",[t._v(t._s(t.login_profile.data.did))]),e("form",{on:{submit:function(e){return e.preventDefault(),t.updatehandle.apply(null,arguments)}}},[t._v(" handle.update : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.domain,expression:"domain"}],attrs:{placeholder:"example.com"},domProps:{value:t.domain},on:{input:function(e){e.target.composing||(t.domain=e.target.value)}}}),e("input",{attrs:{type:"submit"}})]),e("p",[e("code",[t._v("DNS txt : _atproto."+t._s(t.domain)+", did="+t._s(t.login_profile.data.did))])]),e("p",[e("code",[t._v(t._s(t.update_handle))])]),!0===t.update_handle_check?e("div",[t._v(" handle.update : "+t._s(t.update_handle_check)+" ")]):t._e(),e("p",[t._v("follows "+t._s(t.login_profile.data.followsCount)+" / followers "+t._s(t.login_profile.data.followersCount))]),e("p",[e("img",{attrs:{src:t.login_profile.data.avatar}})])]):t._e()]):t._e(),null!==t.login_body?e("div",[t._v(" "+t._s(t.timeline())+" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.psubmit.apply(null,arguments)}}},[e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("button",{attrs:{type:"psubmit"}},[t._v("post")])]),t.cid?e("div",[e("p",[t._v("image : "+t._s(t.cid))]),e("p",[t._v(t._s(t.media_post))])]):t._e(),null!==t.login_post?e("div",[t._v(" "+t._s(t.login_post.data)+" ")]):t._e(),e("form",{on:{submit:function(e){return e.preventDefault(),t.profile.apply(null,arguments)}}},[e("button",{attrs:{type:"profile"}},[t._v("profile")])]),e("form",{on:{submit:function(e){return e.preventDefault(),t.tl.apply(null,arguments)}}},[e("button",{attrs:{type:"tl"}},[t._v("timeline")])])]):t._e(),null!==t.login_tl?e("div",[t.login_tl.data?e("div",t._l(t.login_tl.data.feed,(function(s){return e("li",{staticClass:"bluesky-record"},[e("p",{staticClass:"tl-avatar"},[e("img",{attrs:{src:s.post.author.avatar}})]),e("p",[e("span",{staticClass:"name"},[t._v("@"+t._s(s.post.author.handle))])]),e("p",[e("span",{staticClass:"text"},[t._v(t._s(s.post.record.text))])]),e("p",[e("span",{staticClass:"time"},[e("a",{attrs:{href:s.post.uri}},[t._v(t._s(s.post.record.createdAt))])])])])})),0):t._e()]):t._e(),"signin.bsky.social"===t.id?e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.ssubmit.apply(null,arguments)}}},[e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.handle,expression:"handle"}],attrs:{placeholder:"handle"},domProps:{value:t.handle},on:{input:function(e){e.target.composing||(t.handle=e.target.value)}}})]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{placeholder:"code"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),e("button",{attrs:{type:"ssubmit"}},[t._v("send")])]),t._v(" "+t._s(t.signin_body)+" ")]):t._e(),"syui.bsky.social"===t.id?e("div",{staticClass:"bluesky-avatar"},[e("img",{attrs:{src:t.syui_icon}})]):t._e(),"syui.bsky.social"===t.id?e("div",{staticClass:"bluesky-user"},[t._m(0)]):t._e(),"login.bsky.social"!==t.id?e("div",["signin.bsky.social"!==t.id?e("div",["login.bsky.social"!==t.loc?e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{placeholder:"id",value:"id"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),e("input",{attrs:{type:"submit"}})])]):t._e()]):t._e()]):t._e(),"login.bsky.social"!==t.id?e("div",["signin.bsky.social"!==t.id?e("div",[e("p",[e("a",{attrs:{href:this.bskyurl}},[t._v("@"+t._s(t.id))])])]):t._e()]):t._e(),t.avatar?e("div",{staticClass:"bluesky-avatar"},[e("img",{attrs:{src:t.avatar}})]):t._e(),t.record?e("div",{staticClass:"bluesky-did"},[t._v(" "+t._s(t.record.data.records[0].uri.split("/",3)[2])+" ")]):t._e(),t.record&&t.record.data.records[0].uri!==t.uri?e("div",{staticClass:"bluesky-record"},t._l(t.record.data.records,(function(s){return e("li",[e("p",[e("span",{staticClass:"name"},[t._v(t._s(t.name))])]),e("p",[e("span",{staticClass:"text"},[t._v(t._s(s.value.text))])]),e("p",[e("span",{staticClass:"time"},[e("a",{attrs:{href:s.uri}},[t._v(t._s(t.moment_origin(s.value.createdAt)))])])])])})),0):t._e()])},o=[function(){var t=this,e=t._self._c;return e("p",[e("code",[e("a",{attrs:{href:"/jack"}},[t._v("/jack")])])])}],n=s("bc3a"),l=s.n(n),r=s("c1df"),d=s.n(r),c=s("db82"),p=s.n(c);var u=window.location.pathname.split("/").slice(-1)[0];!1===u.includes(".")&&(u+=".bsky.social");var h=window.location.hash.split("/").slice(-1)[0];if(0==u.length||".bsky.social"===u)var b="syui.bsky.social";else b=u;if("#github"===h)var f="https://github.com/"+window.location.pathname.split("/").slice(-1)[0]+".png";var m={data(){return{syui_icon:"/syui.png",uri:"did:plc:uqzpqmrjnptsxezjx4xuh2mn",name:"@"+b+".bsky.social",id:b,bskyurl:"https://bsky.app/profile/"+b,user:null,record:null,appurl:u,login:"/login",signin:"/signin",avatar:f,handle:null,password:null,email:null,code:null,signin_body:null,login_body:null,login_post:null,time:d.a.utc().toISOString(),text:null,did:null,token:null,json:null,parmas:null,uid:null,urecord:null,loc:window.location.pathname.split("/").slice(-1)[0],login_profile:null,login_tl:null,domain:null,update_handle:null,update_handle_check:!1,error:{},cid:null,text:"",uploadFile:null,media_post:null,file:null,files:null}},created(){"login.bsky.social"!==this.id&&"signin.bsky.social"!==this.id&&l.a.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user="+this.id+"&collection=app.bsky.feed.post").then(t=>this.record=t)},methods:{selectedFile(t){let e=t.target.files[0];const s=new Blob([e],{type:"image/png"});t.preventDefault(),this.file=e,this.files=s},upload(){this.token="Bearer "+this.login_body.data.accessJwt,p.a.post("https://bsky.social/xrpc/com.atproto.blob.upload").set({Authorization:this.token}).attach("file",this.files).then(t=>{this.cid=t.body.cid,this.json={did:this.login_body.data.did,collection:"app.bsky.feed.post",record:{text:this.text,createdAt:this.time,embed:{$type:"app.bsky.feed.post",images:[{image:{cid:this.cid,mimeType:"image/png"},alt:""}]}}},l.a.post("https://bsky.social/xrpc/com.atproto.repo.createRecord",this.json,{headers:{Authorization:this.token}}).then(t=>this.media_post=t.data).catch(t=>this.media_post=t.response.data)})},moment:function(t){return d.a.unix(t).toISOString()},moment_origin:function(t){return d.a.utc(t).format("DD/MM/YY HH:mm")},submit(){!1===this.id.includes(".")&&(this.id=this.id+".bsky.social"),l.a.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user="+this.id+"&collection=app.bsky.feed.post").then(t=>this.record=t),this.name="@"+this.id,this.bskyurl="https://bsky.app/profile/"+this.id,null!==this.uri?this.uri=this.record.data.records[0].uri:this.uri=null},ssubmit(){l.a.post("https://bsky.social/xrpc/com.atproto.account.create",{handle:this.handle+".bsky.social",password:this.password,email:this.email,inviteCode:this.code}).then(t=>this.signin_body=t)},lsubmit(){l.a.post("https://bsky.social/xrpc/com.atproto.session.create",{handle:this.handle,password:this.password}).then(t=>this.login_body=t)},profile(){this.url="https://bsky.social/xrpc/app.bsky.actor.getProfile?actor="+this.login_body.data.handle,this.token="Bearer "+this.login_body.data.accessJwt,l.a.get(this.url,{headers:{Authorization:this.token}}).then(t=>this.login_profile=t)},updatehandle(){this.message=null,this.json={handle:this.domain},this.token="Bearer "+this.login_body.data.accessJwt,l.a.post("https://bsky.social/xrpc/com.atproto.handle.update",this.json,{headers:{Authorization:this.token}}).then(t=>{this.update_handle=t.data,this.update_handle_check=!0}).catch(t=>{this.update_handle=t.response.data})},psubmit(){this.json={did:this.login_body.data.did,collection:"app.bsky.feed.post",record:{text:this.text,createdAt:this.time,$type:"app.bsky.feed.post"}},this.token="Bearer "+this.login_body.data.accessJwt,l.a.post("https://bsky.social/xrpc/com.atproto.repo.createRecord",this.json,{headers:{Authorization:this.token}}).then(t=>this.login_post=t)},timeline(){l.a.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user="+this.id+"&collection=app.bsky.feed.post").then(t=>this.record=t)},tl(){this.url="https://bsky.social/xrpc/app.bsky.feed.getTimeline",this.token="Bearer "+this.login_body.data.accessJwt,l.a.get(this.url,{headers:{Authorization:this.token}}).then(t=>this.login_tl=t)}}},j=m,v=(s("9236"),s("2877")),_=Object(v["a"])(j,i,o,!1,null,null,null),g=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:t=>t(g)}).$mount("#app")},9236:function(t,e,s){"use strict";s("155f")}});
//# sourceMappingURL=app.js.map