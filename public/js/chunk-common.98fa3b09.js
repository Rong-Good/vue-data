(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"058c":function(t,e,n){"use strict";n("6c5f"),n("cc57");var a=n("a18c");a["a"].beforeEach((function(t,e,n){"home"==t.name&&sessionStorage.clear("token"),Object.is(t.name,"home")||sessionStorage.getItem("token")?n():n({path:"/home"})}))},"1fa8":function(t,e,n){"use strict";n("cc57");for(var a=n("03a1"),i=n.n(a),o=i.a.Random,r=[],s=0;s<26;s++){var c={Boolean:o.boolean,Natural:o.natural(1,10),Integer:o.integer(1,100),Float:o.float(0,100,0,5),Character:o.character(),String:o.string(2,10),Range:o.range(0,10,2),Date:o.date(),Image:o.image(o.size,"#02adea","Hello"),Color:o.color(),Paragraph:o.paragraph(2,5),Name:o.name(),Url:o.url(),Address:o.province()};r.push(c)}i.a.mock("/getlist","post",(function(t){var e=JSON.parse(t.body),n=[e.pageIndex,e.pageSize,r.length],a=n[0],i=n[1],o=n[2],s=o/i,c=s-parseInt(s)>0?parseInt(s)+1:s,l=r.slice(a*i,(a+1)*i);return{code:"0",message:"success",data:{pageIndex:a,pageSize:i,rows:l,total:o,totalPages:c}}}))},"272b":function(t,e,n){"use strict";var a=n("3997"),i=n.n(a);i.a},"300a":function(t,e,n){"use strict";var a=n("e83b"),i=n.n(a);i.a},3191:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("eeb9"),i=function(t){return a["a"].request({method:"get",url:"data.json",data:t})}},3997:function(t,e,n){},4360:function(t,e,n){"use strict";var a=n("0261"),i=n("ae8c"),o=(n("6d57"),n("b705")),r=n("3191"),s={token:JSON.parse(sessionStorage.getItem("token"))},c={},l={getlist:function(t,e){t.state;return new Promise((function(t,n){Object(r["a"])().then((function(a){console.log(e),a.data.zhang.forEach((function(n){n.zhang==e&&(sessionStorage.setItem("token",JSON.stringify(a.data.token.token)),t(a))})),n("账号错误")}),(function(t){o["Message"].error("请求错误")}))}))}},u={namespaced:!0,state:s,mutations:c,actions:l};a["default"].use(i["a"]);e["a"]=new i["a"].Store({state:{},mutations:{},actions:{},modules:{home:u}})},"485a":function(t,e,n){"use strict";var a=n("694a"),i=n.n(a);i.a},"581b":function(t,e,n){"use strict";n("9e76")},"5cdd":function(t,e,n){"use strict";var a=n("65f9"),i=n.n(a);i.a},"65f9":function(t,e,n){},"694a":function(t,e,n){},"739d":function(t,e,n){"use strict";var a=n("d035"),i=n.n(a);i.a},8626:function(t,e,n){"use strict";var a=n("bc2d"),i=n.n(a);i.a},"924e":function(t,e,n){"use strict";var a=n("e403"),i=n.n(a);i.a},9849:function(t,e,n){},a18c:function(t,e,n){"use strict";var a=n("0261"),i=n("3f11"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.inc,expression:"inc"}],staticClass:"home"},[n("div",{staticClass:"ii"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px "}},[n("el-form-item",{attrs:{label:"账号"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.open}},[t._v("登陆")])],1)],1)],1)])},r=[],s=(n("cc57"),n("3191"),{name:"home",data:function(){return{form:{name:""},inc:!1}},created:function(){},methods:{open:function(){var t=this;if(""==this.form.name)return this.$message.error("请输入账号"),!1;this.inc=!0,this.$store.dispatch("home/getlist",this.form.name).then((function(e){console.log(e),t.$message({message:"登陆成功",type:"success"}),t.inc=!1,t.$router.push({path:"/log"})}),(function(e){t.$message.error("账号错误"),t.inc=!1}))}}}),c=s,l=(n("cccb"),n("9ca4")),u=Object(l["a"])(c,o,r,!1,null,null,null),d=u.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",[n("el-header",[n("hede")],1),n("el-container",[n("el-aside",{attrs:{width:"15%"}},[n("navc")],1),n("el-main",[n("mainc")],1)],1)],1)],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-page-header",{attrs:{content:"详情页面"}})],1)},h=[],g={},v=g,b=(n("f058"),Object(l["a"])(v,p,h,!1,null,"7d11e722",null)),_=b.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:24}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen}},t._l(this.$router.options.routes[2].children,(function(e,a){return n("el-submenu",{key:a,attrs:{index:e.name}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v(t._s(e.meta.name))])]),n("el-menu-item-group",t._l(e.children,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.path}},[t._v(t._s(e.meta.name))])})),1)],2)})),1)],1)],1)],1)},w=[],k={created:function(){console.log(this.$router),console.log(this.$route)},methods:{handleOpen:function(t){this.$router.push({name:t})}}},y=k,S=(n("272b"),Object(l["a"])(y,x,w,!1,null,null,null)),C=S.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainc"}},[n("router-view")],1)},$=[],j={},I=j,E=(n("8626"),Object(l["a"])(I,O,$,!1,null,null,null)),L=E.exports,P={components:{hede:_,navc:C,mainc:L},data:function(){return{msg:n("cc49")}}},z=P,N=(n("924e"),Object(l["a"])(z,m,f,!1,null,null,null)),q=N.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},F=[],M={},T=M,U=Object(l["a"])(T,R,F,!1,null,null,null),J=U.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"mui-table-view"},[n("li",{staticClass:"mui-table-view-cell",attrs:{id:"device.html"},on:{click:t.getImage}},[n("a",{staticClass:"mui-navigate-right"},[t._v("\n            调用拍照\n        ")])])]),n("input",{attrs:{type:"file",name:"file",capture:"camera"},on:{change:function(e){return t.takePhoto(e)}}}),n("button",{on:{click:t.text}},[t._v("推送")]),n("ul",{staticClass:"mui-table-view cccc"},t._l(t.imgs,(function(e,a){return n("li",{key:a,staticClass:"mui-table-view-cell",attrs:{id:"device.html"}},[n("img",{attrs:{src:t.baseUrl+"/"+e.key,alt:""}})])})),0)])},A=[],B=n("eeb9"),G=n("fed1"),H=n.n(G),Y=function(t){return B["a"].request({method:"POST",url:"https://api.it120.cc/lirongsheng/dfs/upload/file",data:t})},K=function(t){return B["a"].request({method:"get",url:"https://api.it120.cc/lirongsheng/dfs/upload/list/v2",data:t})},Q=function(t){return B["a"].request({headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",url:"https://api.it120.cc/lirongsheng/comment/add",data:H.a.stringify(t)})},V=function(t){return B["a"].request({method:"post",url:"https://api.it120.cc/lirongsheng/comment/list",data:H.a.stringify(t)})},W={data:function(){return{imgs:[],baseUrl:""}},created:function(){var t=this;this.hui(),this.getimg();var e=plus.push.getClientInfo();console.log("获取客户端推送标识信息："),console.log("token: "+e.token),console.log("clientid: "+e.clientid),console.log("appid: "+e.appid),console.log("appkey: "+e.appkey),setInterval((function(){t.text()}),1e4)},methods:{getimg:function(){var t=this;K().then((function(e){console.log(e),t.imgs=e.data.data.oSSObjectSummaryList,t.baseUrl=e.data.data.baseUrl}))},hui:function(){mui.plusReady((function(){plus.push.addEventListener("click",(function(t){alert("You clicked: "+t.content)}),!1)}))},text:function(){plus.push.createMessage("测试消息","LocalMSG",{cover:!1})},takePhoto:function(t){var e=this,n=t.target.files[0],a=new FormData;a.append("upfile",n),console.log(a),Y(a).then((function(t){e.getimg()}),(function(t){console.log(t)}))},getImage:function(){var t=plus.camera.getCamera(),e=t.supportedImageResolutions[0],n=t.supportedImageFormats[0];console.log("Resolution :"+e+", Format: "+n),t.captureImage((function(t){alert("调用成功: "+t);var e="file://"+plus.io.convertLocalFileSystemURL(t),n=new FormData;n.append("upfile",e),Y(n).then((function(t){console.log("成功"+t)}),(function(t){console.log(t)}))}),(function(t){alert("调用失败: "+t.message)}),{resolution:e,format:n})}}},X=W,Z=(n("5cdd"),Object(l["a"])(X,D,A,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},nt=[],at={},it=at,ot=Object(l["a"])(it,et,nt,!1,null,null,null),rt=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"infinite-list-wrapper",staticStyle:{overflow:"auto"}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"disabled"}},t._l(t.arr,(function(e,a){return n("li",{key:a,staticClass:"list-item"},[n("ul",{style:"background:"+e.Color},[n("li",[t._v("\n              "+t._s(e.Name)+"\n             \n            ")]),n("li",[t._v("\n              "+t._s(e.Address)+"\n            ")]),n("li",[t._v("\n              "+t._s(e.Date)+"\n            ")])])])})),0),t.loading?n("p",[t._v("加载中...")]):t._e(),t.noMore?n("p",[t._v("没有更多了")]):t._e()])])},ct=[],lt=n("ad0a"),ut=function(t){return B["a"].request({method:"POST",url:"/getlist",data:t})},dt={data:function(){return{count:5,loading:!1,total:0,arr:[],listParams:{pageIndex:0,pageSize:5}}},created:function(){this.ccc()},computed:{noMore:function(){return this.arr.length>=this.total},disabled:function(){return this.loading||this.noMore}},methods:{ccc:function(){var t=this;ut(this.listParams).then((function(e){var n;(n=t.arr).push.apply(n,Object(lt["a"])(e.data.data.rows)),t.total=e.data.data.total,t.loading=!1}))},load:function(){var t=this;this.loading=!0,setTimeout((function(){t.listParams.pageIndex+=1,t.ccc()}),2e3)}}},mt=dt,ft=(n("739d"),Object(l["a"])(mt,st,ct,!1,null,null,null)),pt=ft.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-carousel",{attrs:{interval:4e3,type:"card",height:"300px"}},t._l(t.arr,(function(t,e){return n("el-carousel-item",{key:e},[n("h3",{staticClass:"medium"},[n("img",{attrs:{src:t.img,alt:""}})])])})),1)],1)},gt=[],vt=function(t){return B["a"].request({method:"get",url:"data.json",data:t})},bt={data:function(){return{arr:[]}},created:function(){var t=this;vt().then((function(e){t.arr=e.data.img}))}},_t=bt,xt=(n("300a"),Object(l["a"])(_t,ht,gt,!1,null,"506d0004",null)),wt=xt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"mui-input-group"},[n("div",{staticClass:"mui-input-row"},[n("label",{on:{click:t.lc}},[n("p",[t._v("发表")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.content,expression:"user.content"}],attrs:{type:"text",placeholder:"请输入内容"},domProps:{value:t.user.content},on:{input:function(e){e.target.composing||t.$set(t.user,"content",e.target.value)}}})])]),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("ul",{staticClass:"mui-table-view"},t._l(t.arr,(function(e,a){return n("li",{key:a,staticClass:"mui-table-view-cell"},[t._v("\r\n                  "+t._s(e.content)+"\r\n              ")])})),0)])],1)],1)},yt=[],St={data:function(){return{arr:[],user:{content:""},isLoading:!1,loading:!1,finished:!1,pageSize:8,page:1}},created:function(){this.gets()},methods:{onLoad:function(){var t=this;this.page+=1,console.log(this.page),setTimeout((function(){V({page:t.page,pageSize:t.pageSize}).then((function(e){var n;console.log(e);var a=e.data.data;(n=t.arr).push.apply(n,Object(lt["a"])(a)),t.loading=!1}),(function(e){t.finished=!0})).catch((function(e){t.finished=!0}))}),500)},onRefresh:function(){var t=this;this.page=1,this.gets(),setTimeout((function(){t.isLoading=!1,t.onLoad()}),1e3)},gets:function(){var t=this;V({page:this.page,pageSize:this.pageSize}).then((function(e){console.log(e),t.arr=e.data.data}))},sets:function(){var t=this;Q(this.user).then((function(e){mui.alert("添加成功","恭喜"),t.arr.unshift({content:t.user.content})}),(function(t){mui.alert("服务器错误","错误")}))},lc:function(){if(""==this.user.content)return mui.alert("不能为空哦","错误"),!1;this.sets()}}},Ct=St,Ot=(n("485a"),Object(l["a"])(Ct,kt,yt,!1,null,"675a7472",null)),$t=Ot.exports;a["default"].use(i["a"]);var jt=i["a"].prototype.push;i["a"].prototype.push=function(t){return jt.call(this,t).catch((function(t){return t}))};e["a"]=new i["a"]({routes:[{path:"/",redirect:d},{path:"/home",name:"home",component:d},{path:"/log",name:"log",component:q,redirect:"/log/one",children:[{path:"/log/one",name:"one",component:J,meta:{name:"管理首页"},redirect:"/log/one/xiang",children:[{path:"/log/one/xiang",name:"xiang",component:pt,meta:{name:"管理首页详情"}},{path:"/log/one/img",name:"img",component:wt,meta:{name:"图片首页详情"}}]},{path:"/log/two",name:"two",component:tt,meta:{name:"系统管理"}},{path:"/log/siri",name:"siri",component:rt,meta:{name:"用户管理"},redirect:"/log/siri/tu",children:[{path:"/log/siri/tu",component:$t,meta:{name:"比例图管理"}}]}]}]})},bc2d:function(t,e,n){},cc49:function(t,e,n){t.exports=n.p+"public/img/one.d1202bad.jpg"},cccb:function(t,e,n){"use strict";var a=n("9849"),i=n.n(a);i.a},d035:function(t,e,n){},d8c9:function(t,e,n){},e403:function(t,e,n){},e83b:function(t,e,n){},eeb9:function(t,e,n){"use strict";var a=n("82ae"),i=n.n(a),o=i.a.create({});o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),e["a"]=o},f058:function(t,e,n){"use strict";var a=n("d8c9"),i=n.n(a);i.a}}]);