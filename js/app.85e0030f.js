(function(t){function a(a){for(var o,r,n=a[0],l=a[1],c=a[2],u=0,p=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],o=!0,n=1;n<e.length;n++){var l=e[n];0!==s[l]&&(o=!1)}o&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var o={},s={app:0},i=[];function r(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)r.d(e,o,function(a){return t[a]}.bind(null,o));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0286":function(t,a,e){t.exports=e.p+"img/sede1.f0892286.jpg"},"034f":function(t,a,e){"use strict";var o=e("85ec"),s=e.n(o);s.a},"2e6c":function(t,a,e){"use strict";var o=e("d083"),s=e.n(o);s.a},3376:function(t,a,e){"use strict";var o=e("e953"),s=e.n(o);s.a},"359c":function(t,a,e){t.exports=e.p+"img/github.7f28fec6.png"},"43c6":function(t,a,e){t.exports=e.p+"img/noticiasIcon.7f93ed25.png"},"49fe":function(t,a,e){},"4bf8":function(t,a,e){},5087:function(t,a,e){"use strict";var o=e("d33e"),s=e.n(o);s.a},"555a":function(t,a,e){t.exports=e.p+"img/icon.2a6ca26d.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("45fc"),e("ac1f"),e("5319"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column justify-content-between",attrs:{id:"contenedor"}},[e("div",{attrs:{id:"notas"}},[e("nav1"),e("keep-alive",[e("transition",{attrs:{name:"slide-fade"}},[e("router-view")],1)],1)],1),e("footer1")],1)},i=[],r=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("section",{staticClass:"nav1"},[o("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[o("img",{staticClass:"navbar-brand",class:[0!=t.pagina?"ocultar":""],attrs:{id:"navIcon",src:e("555a")}}),o("img",{staticClass:"navbar-brand",class:[1!=t.pagina?"ocultar":""],attrs:{id:"navIcon",src:e("c032")}}),o("img",{staticClass:"navbar-brand",class:[2!=t.pagina?"ocultar":""],attrs:{id:"navIcon",src:e("43c6")}}),t._m(0),o("div",{staticClass:"collapse navbar-collapse justify-content-center",attrs:{id:"collapsibleNavId"}},[o("ul",{staticClass:"navbar-nav mt-lg-0"},[o("li",{staticClass:"nav-item",class:[0==t.pagina?"active":""],on:{click:function(a){return t.cambiarPagina(0)}}},[o("router-link",{staticClass:"nav-link",attrs:{to:"/olimpicos"}},[t._v("Inicio"),o("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._m(1),t._m(2),t._m(3),o("li",{staticClass:"nav-item",class:[1==t.pagina?"active":""],on:{click:function(a){return t.cambiarPagina(1)}}},[o("router-link",{staticClass:"nav-link",attrs:{to:"/notas"}},[t._v("TwoNotes")])],1),o("li",{staticClass:"nav-item",class:[2==t.pagina?"active":""],on:{click:function(a){return t.cambiarPagina(2)}}},[o("router-link",{staticClass:"nav-link",attrs:{to:"/noticias"}},[t._v("Noticias")])],1)])]),o("div",{staticClass:"nav-item",attrs:{id:"botones"}},[o("button",{staticClass:"btn btn-outline-primary my-2 my-sm-0",attrs:{id:"login",type:"submit"},on:{click:t.abrirModalLogin}},[t._v("Login")]),o("button",{staticClass:"btn btn-outline-primary my-2 my-sm-0",attrs:{id:"register",type:"submit"},on:{click:t.abrirModalRegis}},[t._v("Register")]),o("button",{staticClass:"btn btn-outline-danger my-2 my-sm-0 ",attrs:{id:"logout",type:"submit"},on:{click:t.loggout}},[t._v("Logout")])])]),t._m(4),t._m(5)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler d-lg-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"dropdownId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Noticias")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownId"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Noticia 1")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Noticia 2")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"dropdownId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Nosotros")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownId"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Nosotros 1")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Nosotros 2")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Contacto")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal",attrs:{id:"modalRegistro",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"modalTitle"}},[t._v("Registro")]),e("button",{staticClass:"close",attrs:{type:"button",id:"cerrarRegistro","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Nombre")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"nombre1",placeholder:"Introduce el nombre"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Apellidos")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"apellidos1",placeholder:"Introduce tus apellidos"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Mail")]),e("input",{staticClass:"form-control",attrs:{type:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2, 4}$",id:"mail1",placeholder:"Introduce el mail"}})]),e("div",{staticClass:"form-check row",attrs:{id:"genero"}},[e("div",{staticClass:"col-6"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"genero",id:"hombre1",value:"Hombre",checked:""}}),e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios1"}},[t._v(" Hombre ")])]),e("div",{staticClass:"col-6"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"genero",id:"mujer1",value:"Mujer"}}),e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios2"}},[t._v(" Mujer ")])])]),e("p",{staticClass:"mb-0 mt-1"},[t._v("Redes Sociales")]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"twitter1",value:"twitter"}}),e("label",{staticClass:"form-check-label",attrs:{for:"twitter1"}},[t._v("Twitter")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"facebook1",value:"facebook"}}),e("label",{staticClass:"form-check-label",attrs:{for:"facebook1"}},[t._v("Facebook")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"insta1",value:"instagram"}}),e("label",{staticClass:"form-check-label",attrs:{for:"insta1"}},[t._v("Instagram")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"github1",value:"github"}}),e("label",{staticClass:"form-check-label",attrs:{for:"github1"}},[t._v("GitHub")])]),e("button",{staticClass:"form-control mt-3 btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])]),e("div",{staticClass:"modal-footer"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal",attrs:{id:"modalLogin",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"modalTitle"}},[t._v("Login")]),e("button",{staticClass:"close",attrs:{type:"button",id:"cerrarLogin","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body container-fluid"},[e("form",{staticClass:"row m-0",attrs:{target:"/"}},[e("label",{staticClass:"col-12",attrs:{for:"usuario"}},[t._v("Nombre")]),e("input",{staticClass:"col-12",attrs:{type:"text",id:"usuario",name:"usuario"}}),e("label",{staticClass:"col-12",attrs:{for:"contrasena"}},[t._v("Contraseña")]),e("input",{staticClass:"col-12",attrs:{type:"password",id:"contrasena",name:"contrasena"}}),e("input",{staticClass:"col-12 btn btn-outline-primary mt-4",attrs:{type:"submit",name:"login",value:"Login"}})])]),e("div",{staticClass:"modal-footer"})])])])}],l=e("8aa5"),c=e.n(l),d=e("1157");window.$=d;var u={name:"nav1",props:[],updated:function(){localStorage.pagina=JSON.stringify(this.pagina),c.a.auth().currentUser?(d("#login").css("display","none"),d("#register").css("display","none"),d("#logout").css("display","")):(d("#login").css("display",""),d("#register").css("display",""),d("#logout").css("display","none")),this.logged=!1},mounted:function(){localStorage.pagina&&(this.pagina=JSON.parse(localStorage.pagina))},data:function(){return{logged:!1,pagina:0}},methods:{abrirModalLogin:function(){d("#modalLogin").fadeIn()},abrirModalRegis:function(){d("#modalRegistro").fadeIn()},cambiarPagina:function(t){this.pagina=t},loggout:function(){c.a.auth().signOut(),this.logged=!1}},computed:{}},p=u,m=(e("3376"),e("2877")),f=Object(m["a"])(p,r,n,!1,null,"70f8322d",null),v=f.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("section",{staticClass:"footer-1 bg-light"},[o("footer",{staticClass:"d-flex justify-content-center mt-3 col-12 row"},[o("ul",{staticClass:"align-midle col-12 col-sm-6 order-sm-last d-flex justify-content-around",attrs:{id:"enlacesFooter"}},[o("a",{attrs:{href:"https://www.facebook.com/falloutboy/"}},[o("img",{staticClass:" redes",attrs:{src:e("ef15")}})]),o("a",{attrs:{href:"https://twitter.com/markknopfler?lang=es"}},[o("img",{staticClass:" redes",attrs:{src:e("a3df")}})]),o("a",{attrs:{href:"https://github.com/Marcocuma"}},[o("img",{staticClass:" redes",attrs:{src:e("359c")}})])]),o("p",{staticClass:"col-12 col-sm-6 align-midle",attrs:{id:"textoFooter"}},[t._v("Copyright "),o("a",{attrs:{href:"#"}},[t._v("Alumno")])])])])}],b={name:"footer-1",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},C=b,_=(e("2e6c"),Object(m["a"])(C,g,h,!1,null,"1279f56b",null)),x=_.exports,y={name:"notas",components:{nav1:v,footer1:x},data:function(){return{}},mounted:function(){},methods:{},computed:{}},w=y,k=(e("034f"),Object(m["a"])(w,s,i,!1,null,null,null)),N=k.exports,I=(e("4989"),e("ab8b"),e("8c4f")),j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"main-nota row col-12"},[e("div",{staticClass:"col-12 d-flex",attrs:{id:"barraBusqueda"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textoNota,expression:"textoNota"}],staticClass:"w-75 m-4",attrs:{type:"text",required:"",placeholder:"Texto Nota"},domProps:{value:t.textoNota},on:{keypress:t.add,input:function(a){a.target.composing||(t.textoNota=a.target.value)}}}),e("input",{staticClass:"w-25 m-4",attrs:{type:"file",required:"",placeholder:"Subir Archivo"},on:{change:t.anadirURL}})]),e("label",{staticClass:"col-12 col-sm-6 align-center"},[t._v(" "+t._s(t.snapshot))]),e("label",{staticClass:"col-12 col-sm-6"},[t._v(t._s(t.error))]),e("div",{staticClass:"col-12 d-flex",attrs:{id:"barraFiltro"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textoFiltro,expression:"textoFiltro"}],staticClass:"w-100 m-4",attrs:{type:"text",placeholder:"Texto Filtro"},domProps:{value:t.textoFiltro},on:{keypress:t.add,input:function(a){a.target.composing||(t.textoFiltro=a.target.value)}}})]),e("div",{staticClass:"col-12 d-flex justify-content-around"},[e("p",{staticClass:"mb-0"},[e("a",{attrs:{href:"#"},on:{click:t.compTodas}},[t._v(t._s(t.textoCompletar))]),t._v("| Tienes un total de "+t._s(t.totalNotas)+" | Completadas: "+t._s(t.notasCompletadas)+" "),e("a",{attrs:{href:"#"},on:{click:t.delCompletadas}},[t._v("Borrar Completadas")])]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.orden,expression:"orden"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.orden=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"1"}},[t._v("Alfabetico")]),e("option",{attrs:{value:"2"}},[t._v("Completadas")]),e("option",{attrs:{value:"3"}},[t._v("Incompletas")]),e("option",{attrs:{value:"4"}},[t._v("Prioridad")]),e("option",{attrs:{value:"5"}},[t._v("Nueva")]),e("option",{attrs:{value:"6"}},[t._v("Antigüa")])])]),e("lista",{attrs:{ordenarNotas:t.ordenarNotas},on:{"prioridad-cambiada":t.forzarUpdate,borrarNota:t.borrarNota}})],1)},A=[],S=(e("4de4"),e("4160"),e("caad"),e("fb6a"),e("b0c0"),e("2532"),e("159b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition-group",{staticClass:"col-12",attrs:{name:"slide-fade",tag:"ol"}},t._l(t.ordenarNotas,(function(a){return e("nota",{key:a.id,attrs:{index:a.id,todo:a},on:{"prioridad-cambiada":t.forzarUpdate,borrarNota:t.borrarNota}})})),1)}),L=[],F=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("li",{staticClass:"m-4"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[o("label",[t._v(t._s(t.todo.usuario))])]),o("div",{staticClass:"card-body row d-flex align-items-center justify-content-between"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.marcada,expression:"todo.marcada"}],attrs:{type:"checkbox",id:t.index},domProps:{checked:Array.isArray(t.todo.marcada)?t._i(t.todo.marcada,null)>-1:t.todo.marcada},on:{change:function(a){var e=t.todo.marcada,o=a.target,s=!!o.checked;if(Array.isArray(e)){var i=null,r=t._i(e,i);o.checked?r<0&&t.$set(t.todo,"marcada",e.concat([i])):r>-1&&t.$set(t.todo,"marcada",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.todo,"marcada",s)}}}),o("label",{staticClass:"mb-0 col-2",attrs:{for:t.index}}),o("p",{staticClass:"col-8 mb-0",class:{terminada:t.todo.marcada}},[t._v(" "+t._s(t.todo.text)+" ")]),o("div",{staticClass:"col-2 d-flex justify-content-end"},[o("img",{attrs:{src:e("c8e4")},on:{click:function(a){return t.eliminarNota(t.index)}}})])]),o("div",{staticClass:"card-footer"},[o("div",{attrs:{id:"tiempo"}},[o("span",[t._v("Fecha: "+t._s(t.calculaTiempo(t.todo.tiempo)))])]),o("div",{staticClass:"btn-group btn-group-toggle"},[o("label",{staticClass:"btn btn-outline-success ",class:[-1==t.todo.prioridad?"active":""]},[o("input",{attrs:{type:"radio",id:"option1"},on:{click:function(a){return t.cambiarPrioridad(t.todo,-1)}}}),t._v("Baja ")]),o("label",{staticClass:"btn btn-outline-primary",class:[0==t.todo.prioridad?"active":""]},[o("input",{attrs:{type:"radio",id:"option2"},on:{click:function(a){return t.cambiarPrioridad(t.todo,0)}}}),t._v("Media ")]),o("label",{staticClass:"btn btn-outline-danger",class:[1==t.todo.prioridad?"active":""]},[o("input",{attrs:{type:"radio",id:"option3"},on:{click:function(a){return t.cambiarPrioridad(t.todo,1)}}}),t._v("Alta ")])]),o("div",[o("a",{attrs:{href:t.todo.archivo.url}},[t._v(" "+t._s(t.todo.archivo.nombre))])])])])])},E=[],T={name:"nota",props:["todo","index"],mounted:function(){},data:function(){return{}},methods:{calculaTiempo:function(t){var a=new Date(t);return a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()+"  "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()},cambiarPrioridad:function(t,a){t.prioridad=a,this.$emit("prioridad-cambiada")},eliminarNota:function(t){this.$emit("borrarNota",t)}},computed:{}},$=T,P=(e("a40e"),Object(m["a"])($,F,E,!1,null,"42c646b2",null)),O=P.exports,q={name:"lista",components:{nota:O},props:["ordenarNotas"],mounted:function(){},data:function(){return{}},methods:{forzarUpdate:function(){this.$emit("prioridad-cambiada")},borrarNota:function(t){this.$emit("borrarNota",t)}},computed:{}},M=q,R=(e("a551"),Object(m["a"])(M,S,L,!1,null,null,null)),U=R.exports,B=e("59ca"),D=e.n(B),z=(e("e71f"),{apiKey:"AIzaSyDn_viwntvIsN9OogQhAdIKcGE-AuglBbo",authDomain:"twonotes-c9d1c.firebaseapp.com",databaseURL:"https://twonotes-c9d1c.firebaseio.com",projectId:"twonotes-c9d1c",storageBucket:"twonotes-c9d1c.appspot.com",messagingSenderId:"517868775559",appId:"1:517868775559:web:7d5ae3a01bfa60deb87022"}),G=D.a.initializeApp(z).firestore(),J=D.a.firestore;J.Timestamp,J.GeoPoint;G.settings({timestampsInSnapshots:!0});var H={name:"main-nota",components:{lista:U},props:[],mounted:function(){},updated:function(){localStorage.notas=JSON.stringify(this.notas)},data:function(){return{notas:[],prio:"-1",textoNota:"",textoFiltro:"",orden:"4",completadas:!1,textoCompletar:"Completar todas",linkArchivo:"",nombreArchivo:"",urlArchivo:"",subiendo:!1,snapshot:"",error:""}},firestore:{notas:G.collection("notas")},methods:{add:function(t){var a=this;13!=t.keyCode||this.subiendo||c.a.storage().ref(this.linkArchivo.name).put(this.linkArchivo).on(c.a.storage.TaskEvent.STATE_CHANGED,(function(t){a.snapshot="Progreso = "+parseInt(t.bytesTransferred/t.totalBytes*100)+"%"}),(function(t){a.error=t}),(function(){c.a.storage().ref().child(a.linkArchivo.name).getDownloadURL().then((function(t){a.urlArchivo=t,G.collection("notas").add({text:a.textoNota,marcada:!1,tiempo:Date.now(),prioridad:-1,usuario:c.a.auth().currentUser.email,archivo:{nombre:a.nombreArchivo,url:a.urlArchivo}}),a.textoNota=""})).catch(),a.completadas=!1,a.subiendo=!1}))},delCompletadas:function(){},calculaTiempo:function(t){var a=new Date(Date.now()-this.notas[t].tiempo);return a.getMinutes()},forzarUpdate:function(){this.$forceUpdate()},compTodas:function(){this.completadas?(this.ordenarNotas.forEach((function(t){t.marcada=!1})),this.completadas=!1,this.textoCompletar="Completar todas "):(this.ordenarNotas.forEach((function(t){t.marcada=!0})),this.completadas=!0,this.textoCompletar="Descompletar todas")},borrarNota:function(t){G.collection("notas").doc(t).delete()},anadirURL:function(t){this.nombreArchivo=t.target.files[0].name,this.linkArchivo=t.target.files[0]}},computed:{totalNotas:function(){return this.notas.length},notasCompletadas:function(){var t=this.notas.filter((function(t){return 1==t.marcada}));return t.length},ordenarNotas:function(){var t=this;return"2"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.marcada,o=a.marcada;return 0==e?1:e==o?0:-1})):"3"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.marcada,o=a.marcada;return 1==e?1:e==o?0:-1})):"4"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.prioridad,o=a.prioridad;return e<o?1:e==o?0:-1})):"5"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.tiempo,o=a.tiempo;return e<o?1:e==o?0:-1})):"5"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.tiempo,o=a.tiempo;return e>o?1:e==o?0:-1})):this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.text.toLowerCase(),o=a.text.toLowerCase();return e>o?1:e==o?0:-1}))}}},K=H,W=(e("7ef1"),Object(m["a"])(K,j,A,!1,null,"4974e285",null)),Q=W.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"login"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.correo,expression:"correo"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"helpId",placeholder:"Introduce el correo"},domProps:{value:t.correo},on:{input:function(a){a.target.composing||(t.correo=a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contrasena,expression:"contrasena"}],staticClass:"form-control",attrs:{type:"password","aria-describedby":"helpId",placeholder:"Introduce la contraseña"},domProps:{value:t.contrasena},on:{input:function(a){a.target.composing||(t.contrasena=a.target.value)}}}),e("input",{staticClass:"btn btn-primary",attrs:{name:"Login",id:"",type:"button",value:"Login"},on:{click:t.login}}),e("input",{staticClass:"btn btn-primary",attrs:{name:"Google",id:"",type:"button",value:"Google"},on:{click:t.googleLogin}})]),e("section",{attrs:{id:"firebaseui-auth-container"}})])},Z=[],V={name:"login",props:[],mounted:function(){},data:function(){return{correo:"",contrasena:""}},methods:{login:function(){c.a.auth().signInWithEmailAndPassword(this.correo,this.contrasena)},googleLogin:function(){var t=new c.a.auth.GoogleAuthProvider;c.a.auth().signInWithRedirect(t)}},computed:{}},X=V,tt=(e("f148"),Object(m["a"])(X,Y,Z,!1,null,"f28cfa8a",null)),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"noticias p-2"},[e("h1",{staticClass:"text-center"},[t._v("Noticias")]),e("div",{staticClass:"carousel slide m-md-3",attrs:{id:"carouselId","data-ride":"carousel"}},[t._m(0),e("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},t._l(t.importantes,(function(a,o){return e("div",{key:o,staticClass:"carousel-item",class:[0==o?"active":""]},[e("img",{attrs:{src:a.urlToImage,alt:"First slide"}}),e("div",{staticClass:"carousel-caption d-none d-md-block"},[e("h5",[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.description))]),e("a",{staticClass:"btn btn-primary",attrs:{name:"readMore",id:"leerMas",target:"_blank",href:a.url,role:"button"}},[t._v("Leer más")])])])})),0),t._m(1),t._m(2)]),e("div",{staticClass:"row m-0"},[e("label",{staticClass:"m-0 col-12 col-md-2",attrs:{for:"filtro"}},[t._v("Filtro: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.textoFiltro,expression:"textoFiltro"}],staticClass:"col-12 col-md-10",attrs:{id:"filtro",placeholder:"Pulsa intro para filtrar"},domProps:{value:t.textoFiltro},on:{keypress:t.aplicarFiltro,input:function(a){a.target.composing||(t.textoFiltro=a.target.value)}}})]),e("div",{staticClass:"row m-0"},t._l(t.noticias,(function(t){return e("noticia",{key:t.url,attrs:{contenido:t,clases:"card col-12 col-md-6 col-lg-4 col-xl-3 p-0 mt-3"}})})),1)])},ot=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#carouselId","data-slide-to":"0"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"1"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"2"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"3"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"4"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"5"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"6"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselId",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselId",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])}],st=(e("99af"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.clases},[e("div",{attrs:{id:"divImg"}}),e("img",{staticClass:"card-img-top",attrs:{src:t.contenido.urlToImage,alt:""}}),e("div",{staticClass:"card-body"},[e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.contenido.publishedAt.replace("T"," ").replace("Z"," "))+" - "+t._s(t.contenido.author))]),e("h4",{staticClass:"card-title"},[t._v(t._s(t.contenido.title))]),e("p",{staticClass:"card-text"},[t._v(t._s(t.contenido.content.slice(0,100)+"..."))])]),e("div",{staticClass:"card-footer"},[e("a",{staticClass:"btn btn-primary",attrs:{name:"readMore",id:"leerMas",href:t.contenido.url,target:"_blank",role:"button"}},[t._v("Leer más")])])])}),it=[],rt={name:"noticia",props:["contenido","clases"],mounted:function(){},data:function(){return{}},methods:{},computed:{}},nt=rt,lt=(e("880d"),Object(m["a"])(nt,st,it,!1,null,"4d0706dc",null)),ct=lt.exports,dt=e("1157"),ut=e.n(dt),pt=e("bc3a"),mt=ut.a,ft={name:"noticias",props:[],components:{noticia:ct},updated:function(){this.bloqueo=!1},mounted:function(){var t=this;pt.get("https://newsapi.org/v2/everything?languaje=es&domains=elpais.com,elmundo.es,elcortodigital.es,ideal.es&page=1&apiKey=e859accb681646698b5ba6f1e8b23ba8").then((function(a){t.importantes=a.data.articles.slice(0,7),t.noticias=a.data.articles.slice(7,a.data.articles.length-1)})),mt(window).scroll(this.comprobarBloqueo)},data:function(){return{importantes:[],noticias:[],bloqueo:!1,page:2,textoFiltro:""}},methods:{comprobarBloqueo:function(){!this.bloqueo&&this.page<6&&this.cargarNoticias()},cargarNoticias:function(){var t,a=this;mt(window).scrollTop()+mt(window).height()>=mt(document).height()-100&&(this.bloqueo=!0,t=this.textoFiltro?"https://newsapi.org/v2/everything?languaje=es&qInTitle="+this.textoFiltro:"https://newsapi.org/v2/everything?languaje=es",t+="&domains=elpais.com,elmundo.es,ideal.es&page="+this.page+"&apiKey=e859accb681646698b5ba6f1e8b23ba8",pt.get(t).then((function(t){a.noticias=a.noticias.concat(t.data.articles)})),this.page++)},aplicarFiltro:function(t){var a,e=this;13==t.keyCode&&(this.page=1,a=this.textoFiltro?"https://newsapi.org/v2/everything?languaje=es&qInTitle="+this.textoFiltro:"https://newsapi.org/v2/everything?languaje=es",a+="&domains=elpais.com,elmundo.es,ideal.es&page="+this.page+"&apiKey=e859accb681646698b5ba6f1e8b23ba8",pt.get(a).then((function(t){e.noticias=t.data.articles.slice(7,t.data.articles.length-1)})),this.page++)}},computed:{}},vt=ft,gt=(e("5087"),Object(m["a"])(vt,et,ot,!1,null,"2cafc480",null)),ht=gt.exports,bt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("section",{staticClass:"olimpicos col-12"},[o("div",{staticClass:"jumbotron jumbotron-fluid card d-flex align-items-center justify-content-center"},[o("div",{staticClass:"container"},[o("div",{staticClass:"card-body",attrs:{id:"content"}},[o("h1",{staticClass:"display-3"},[t._v("トップスペイン")]),o("p",{staticClass:"lead"},[t._v("Descrube el mañana")])])])]),o("main",{staticClass:"row",attrs:{id:"main"}},[o("div",{staticClass:"col-12 col-md-9 d-flex justify-content-center row",attrs:{id:"sedes"}},[o("div",{staticClass:"col-12 row",attrs:{id:"sede1"}},[o("img",{staticClass:"col-sm-4",attrs:{id:"imgSede1",src:e("0286")}}),o("div",{staticClass:"col-sm-8",attrs:{id:"conenidoSede1"}},[o("h1",{staticClass:"tituloContenido"},[t._v("Titulo Sede")]),o("p",{staticClass:"textoSedes",attrs:{id:"contenidoSede2"}},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat cumque blanditiis, quam et rem fugiat quae perferendis reiciendis at! A placeat suscipit eaque velit ad possimus natus dolorem aliquid. ")])])]),o("div",{staticClass:"col-12 row",attrs:{id:"sede2"}},[o("img",{staticClass:"col-sm-4 order-sm-last",attrs:{id:"imgSede1",src:e("e02f")}}),o("div",{staticClass:"col-sm-8",attrs:{id:"conenidoSede2"}},[o("h1",{staticClass:"tituloContenido"},[t._v("Titulo Sede")]),o("p",{staticClass:"textoSedes",attrs:{id:"contenidoSede2"}},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat cumque blanditiis, quam et rem fugiat quae perferendis reiciendis at! A placeat suscipit eaque velit ad possimus natus dolorem aliquid. ")])])])]),o("div",{staticClass:"col-12 col-md-3",attrs:{id:"lista"}},[o("h2",[t._v("Grandes atletas de la historia")]),o("ul",{attrs:{id:"listaAtletas"}},[o("li",[o("a",{attrs:{href:"#"}},[t._v("Johnny Weissmuller")])]),o("li",[o("a",{attrs:{href:"#"}},[t._v("Jesse Owens")])]),o("li",[o("a",{attrs:{href:"#"}},[t._v("Nadia Comaneci")])]),o("li",[o("a",{attrs:{href:"#"}},[t._v("Michael Phelps")])]),o("li",[o("a",{attrs:{href:"#"}},[t._v("Usain Bolts")])]),o("li",[o("a",{attrs:{href:"#"}},[t._v("Simone Biles")])])])]),o("div",{staticClass:"carousel slide col-12",attrs:{id:"carouselId","data-ride":"carousel"}},[o("ol",{staticClass:"carousel-indicators"},[o("li",{staticClass:"active",attrs:{"data-target":"#carouselId","data-slide-to":"0"}}),o("li",{attrs:{"data-target":"#carouselId","data-slide-to":"1"}}),o("li",{attrs:{"data-target":"#carouselId","data-slide-to":"2"}})]),o("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},[o("div",{staticClass:"carousel-item active"},[o("img",{attrs:{src:e("c510"),alt:"First slide"}})]),o("div",{staticClass:"carousel-item"},[o("img",{attrs:{src:e("8d88"),alt:"Second slide"}})]),o("div",{staticClass:"carousel-item"},[o("img",{attrs:{src:e("880b"),alt:"Third slide"}})])]),o("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselId",role:"button","data-slide":"prev"}},[o("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),o("span",{staticClass:"sr-only"},[t._v("Previous")])]),o("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselId",role:"button","data-slide":"next"}},[o("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),o("span",{staticClass:"sr-only"},[t._v("Next")])])])])])}],_t={name:"olimpicos",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},xt=_t,yt=(e("b3b3"),Object(m["a"])(xt,bt,Ct,!1,null,"6b2049e2",null)),wt=yt.exports,kt=e("0ff2"),Nt=e("9483");Object(Nt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].use(kt["a"]),o["a"].use(I["a"]),o["a"].config.productionTip=!1;var It=[{path:"/notas",component:Q,meta:{requiresAuth:!0}},{path:"/noticias",component:ht},{path:"/olimpicos",component:wt},{path:"/login",component:at},{path:"/*",component:wt}],jt=new I["a"]({routes:It});c.a.auth().onAuthStateChanged((function(t){t?jt.replace("notas"):jt.replace("login")})),jt.beforeEach((function(t,a,e){var o=c.a.auth().currentUser,s=t.matched.some((function(t){return t.meta.requiresAuth}));!o&&s?e("login"):e()})),new o["a"]({render:function(t){return t(N)},router:jt}).$mount("#app")},"5ef7":function(t,a,e){},6647:function(t,a,e){},"6ce0":function(t,a,e){},"7dac":function(t,a,e){},"7ef1":function(t,a,e){"use strict";var o=e("7dac"),s=e.n(o);s.a},"85ec":function(t,a,e){},"880b":function(t,a,e){t.exports=e.p+"img/slide3.801ad4c5.jpg"},"880d":function(t,a,e){"use strict";var o=e("4bf8"),s=e.n(o);s.a},"8d88":function(t,a,e){t.exports=e.p+"img/slide2.b3a4be3f.jpg"},a3df:function(t,a,e){t.exports=e.p+"img/twitter.90730c3c.svg"},a40e:function(t,a,e){"use strict";var o=e("49fe"),s=e.n(o);s.a},a551:function(t,a,e){"use strict";var o=e("5ef7"),s=e.n(o);s.a},b3b3:function(t,a,e){"use strict";var o=e("6ce0"),s=e.n(o);s.a},c032:function(t,a,e){t.exports=e.p+"img/logoNav.3dcc9448.png"},c510:function(t,a,e){t.exports=e.p+"img/slide1.f36f0737.jpg"},c8e4:function(t,a,e){t.exports=e.p+"img/trash.aa4cd934.png"},d083:function(t,a,e){},d33e:function(t,a,e){},e02f:function(t,a,e){t.exports=e.p+"img/sede2.42d6cbd5.jpg"},e953:function(t,a,e){},ef15:function(t,a,e){t.exports=e.p+"img/face.17b57389.svg"},f148:function(t,a,e){"use strict";var o=e("6647"),s=e.n(o);s.a}});
//# sourceMappingURL=app.85e0030f.js.map