(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"058c":function(e,t,n){"use strict";n("6c5f"),n("cc57");var a=n("a18c");a["a"].beforeEach((function(e,t,n){"home"==e.name&&sessionStorage.clear("token"),Object.is(e.name,"home")||sessionStorage.getItem("token")?n():n({path:"/home"})}))},"1fa8":function(e,t,n){"use strict";n("cc57");for(var a=n("03a1"),o=n.n(a),r=o.a.Random,i=[],c=0;c<26;c++){var s={Boolean:r.boolean,Natural:r.natural(1,10),Integer:r.integer(1,100),Float:r.float(0,100,0,5),Character:r.character(),String:r.string(2,10),Range:r.range(0,10,2),Date:r.date(),Image:r.image(r.size,"#02adea","Hello"),Color:r.color(),Paragraph:r.paragraph(2,5),Name:r.name(),Url:r.url(),Address:r.province()};i.push(s)}o.a.mock("/getlist","post",(function(e){var t=JSON.parse(e.body),n=[t.pageIndex,t.pageSize,i.length],a=n[0],o=n[1],r=n[2],c=r/o,s=c-parseInt(c)>0?parseInt(c)+1:c,l=i.slice(a*o,(a+1)*o);return{code:"0",message:"success",data:{pageIndex:a,pageSize:o,rows:l,total:r,totalPages:s}}}))},"272b":function(e,t,n){"use strict";var a=n("3997"),o=n.n(a);o.a},"300a":function(e,t,n){"use strict";var a=n("e83b"),o=n.n(a);o.a},3191:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("eeb9"),o=function(e){return a["a"].request({method:"get",url:"data.json",data:e})}},3997:function(e,t,n){},4360:function(e,t,n){"use strict";var a=n("0261"),o=n("ae8c"),r=(n("6d57"),n("b705")),i=n("3191"),c={token:JSON.parse(sessionStorage.getItem("token"))},s={},l={getlist:function(e,t){e.state;return new Promise((function(e,n){Object(i["a"])().then((function(a){console.log(t),a.data.zhang.forEach((function(n){n.zhang==t&&(sessionStorage.setItem("token",JSON.stringify(a.data.token.token)),e(a))})),n("账号错误")}),(function(e){r["Message"].error("请求错误")}))}))}},u={namespaced:!0,state:c,mutations:s,actions:l};a["default"].use(o["a"]);t["a"]=new o["a"].Store({state:{},mutations:{},actions:{},modules:{home:u}})},"581b":function(e,t,n){"use strict";n("9e76")},"739d":function(e,t,n){"use strict";var a=n("d035"),o=n.n(a);o.a},8626:function(e,t,n){"use strict";var a=n("bc2d"),o=n.n(a);o.a},"924e":function(e,t,n){"use strict";var a=n("e403"),o=n.n(a);o.a},9849:function(e,t,n){},a18c:function(e,t,n){"use strict";var a=n("0261"),o=n("3f11"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.inc,expression:"inc"}],staticClass:"home"},[n("div",{staticClass:"ii"},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px "}},[n("el-form-item",{attrs:{label:"账号"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.open}},[e._v("登陆")])],1)],1)],1)])},i=[],c=(n("cc57"),n("3191"),{name:"home",data:function(){return{form:{name:""},inc:!1}},created:function(){},methods:{open:function(){var e=this;if(""==this.form.name)return this.$message.error("请输入账号"),!1;this.inc=!0,this.$store.dispatch("home/getlist",this.form.name).then((function(t){console.log(t),e.$message({message:"登陆成功",type:"success"}),e.inc=!1,e.$router.push({path:"/log"})}),(function(t){e.$message.error("账号错误"),e.inc=!1}))}}}),s=c,l=(n("cccb"),n("9ca4")),u=Object(l["a"])(s,r,i,!1,null,null,null),m=u.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",[n("el-header",[n("hede")],1),n("el-container",[n("el-aside",{attrs:{width:"15%"}},[n("navc")],1),n("el-main",[n("mainc")],1)],1)],1)],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-page-header",{attrs:{content:"详情页面"}})],1)},h=[],g={},v=g,b=(n("f058"),Object(l["a"])(v,f,h,!1,null,"7d11e722",null)),_=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:24}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""},on:{open:e.handleOpen}},e._l(this.$router.options.routes[2].children,(function(t,a){return n("el-submenu",{key:a,attrs:{index:t.name}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[e._v(e._s(t.meta.name))])]),n("el-menu-item-group",e._l(t.children,(function(t,a){return n("el-menu-item",{key:a,attrs:{index:t.path}},[e._v(e._s(t.meta.name))])})),1)],2)})),1)],1)],1)],1)},k=[],x={created:function(){console.log(this.$router),console.log(this.$route)},methods:{handleOpen:function(e){this.$router.push({name:e})}}},M=x,y=(n("272b"),Object(l["a"])(M,w,k,!1,null,null,null)),C=y.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mainc"}},[n("router-view")],1)},j=[],O={},$=O,E=(n("8626"),Object(l["a"])($,I,j,!1,null,null,null)),S=E.exports,P={components:{hede:_,navc:C,mainc:S},data:function(){return{msg:n("cc49")}}},B=P,A=(n("924e"),Object(l["a"])(B,d,p,!1,null,null,null)),N=A.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},R=[],D={},J=D,U=Object(l["a"])(J,z,R,!1,null,null,null),q=U.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"mui-table-view"},[n("li",{staticClass:"mui-table-view-cell",attrs:{id:"device.html"},on:{click:e.getImage}},[n("a",{staticClass:"mui-navigate-right"},[e._v("\n            调用拍照\n        ")])])]),n("button",{on:{click:e.text}},[e._v("推送")])])},F=[],H={created:function(){this.hui();var e=plus.push.getClientInfo();console.log("获取客户端推送标识信息："),console.log("token: "+e.token),console.log("clientid: "+e.clientid),console.log("appid: "+e.appid),console.log("appkey: "+e.appkey)},methods:{hui:function(){mui.plusReady((function(){plus.push.addEventListener("click",(function(e){alert("You clicked: "+e.content)}),!1)}))},text:function(){plus.push.createMessage("测试消息","LocalMSG",{cover:!1})},getImage:function(){var e=plus.camera.getCamera(),t=e.supportedImageResolutions[0],n=e.supportedImageFormats[0];console.log("Resolution :"+t+", Format: "+n),e.captureImage((function(e){alert("调用成功: "+e)}),(function(e){alert("调用失败: "+e.message)}),{resolution:t,format:n})}}},L=H,K=Object(l["a"])(L,T,F,!1,null,null,null),W=K.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},Z=[],G={},X=G,Q=Object(l["a"])(X,Y,Z,!1,null,null,null),V=Q.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"infinite-list-wrapper",staticStyle:{overflow:"auto"}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"disabled"}},e._l(e.arr,(function(t,a){return n("li",{key:a,staticClass:"list-item"},[n("ul",{style:"background:"+t.Color},[n("li",[e._v("\n              "+e._s(t.Name)+"\n             \n            ")]),n("li",[e._v("\n              "+e._s(t.Address)+"\n            ")]),n("li",[e._v("\n              "+e._s(t.Date)+"\n            ")])])])})),0),e.loading?n("p",[e._v("加载中...")]):e._e(),e.noMore?n("p",[e._v("没有更多了")]):e._e()])])},te=[],ne=n("ad0a"),ae=n("eeb9"),oe=function(e){return ae["a"].request({method:"POST",url:"/getlist",data:e})},re={data:function(){return{count:5,loading:!1,total:0,arr:[],listParams:{pageIndex:0,pageSize:5}}},created:function(){this.ccc()},computed:{noMore:function(){return this.arr.length>=this.total},disabled:function(){return this.loading||this.noMore}},methods:{ccc:function(){var e=this;oe(this.listParams).then((function(t){var n;(n=e.arr).push.apply(n,Object(ne["a"])(t.data.data.rows)),e.total=t.data.data.total,e.loading=!1}))},load:function(){var e=this;this.loading=!0,setTimeout((function(){e.listParams.pageIndex+=1,e.ccc()}),2e3)}}},ie=re,ce=(n("739d"),Object(l["a"])(ie,ee,te,!1,null,null,null)),se=ce.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-carousel",{attrs:{interval:4e3,type:"card",height:"300px"}},e._l(e.arr,(function(e,t){return n("el-carousel-item",{key:t},[n("h3",{staticClass:"medium"},[n("img",{attrs:{src:e.img,alt:""}})])])})),1)],1)},ue=[],me=function(e){return ae["a"].request({method:"get",url:"data.json",data:e})},de={data:function(){return{arr:[]}},created:function(){var e=this;me().then((function(t){e.arr=t.data.img}))}},pe=de,fe=(n("300a"),Object(l["a"])(pe,le,ue,!1,null,"506d0004",null)),he=fe.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mapdiv",attrs:{id:e.mapId}})])},ve=[];function be(e){return new Promise((function(t,n){if("undefined"!==typeof BMap)return t(BMap),!0;window.onBMapCallback=function(){t(BMap)};var a=document.createElement("script");a.type="text/javascript",a.src="http://api.map.baidu.com/api?v=2.0&ak="+e+"&callback=onBMapCallback",a.onerror=n,document.head.appendChild(a)}))}var _e={data:function(){return{mapId:"BMap-"+parseInt(Date.now()+Math.random()),myMap:null}},mounted:function(){this.initMap()},methods:{initMap:function(){var e=this;be("9g1f8I5UtHvD0jgEKUbaEBWzUAAUoKzX").then((function(){e.myMap=new BMap.Map(e.mapId),e.myMap.centerAndZoom(new BMap.Point(116.404,39.915),11),e.myMap.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),e.myMap.setCurrentCity("北京"),e.myMap.enableScrollWheelZoom(!0)})).catch((function(e){console.log("地图加载失败")}))}}},we=_e,ke=Object(l["a"])(we,ge,ve,!1,null,null,null),xe=ke.exports;a["default"].use(o["a"]);var Me=o["a"].prototype.push;o["a"].prototype.push=function(e){return Me.call(this,e).catch((function(e){return e}))};t["a"]=new o["a"]({routes:[{path:"/",redirect:m},{path:"/home",name:"home",component:m},{path:"/log",name:"log",component:N,redirect:"/log/one",children:[{path:"/log/one",name:"one",component:q,meta:{name:"管理首页"},redirect:"/log/one/xiang",children:[{path:"/log/one/xiang",name:"xiang",component:se,meta:{name:"管理首页详情"}},{path:"/log/one/img",name:"img",component:he,meta:{name:"图片首页详情"}}]},{path:"/log/two",name:"two",component:W,meta:{name:"系统管理"}},{path:"/log/siri",name:"siri",component:V,meta:{name:"用户管理"},redirect:"/log/siri/tu",children:[{path:"/log/siri/tu",component:xe,meta:{name:"比例图管理"}}]}]}]})},bc2d:function(e,t,n){},cc49:function(e,t,n){e.exports=n.p+"public/img/one.d1202bad.jpg"},cccb:function(e,t,n){"use strict";var a=n("9849"),o=n.n(a);o.a},d035:function(e,t,n){},d8c9:function(e,t,n){},e403:function(e,t,n){},e83b:function(e,t,n){},eeb9:function(e,t,n){"use strict";var a=n("82ae"),o=n.n(a),r=o.a.create({});r.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),t["a"]=r},f058:function(e,t,n){"use strict";var a=n("d8c9"),o=n.n(a);o.a}}]);