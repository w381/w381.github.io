LWR.define("ui/button/v/0_3_2",["exports","lwc/v/2_38_1"],function(r,e){"use strict";function b(o,y,l){var c=o?"["+o+"]":"";return"button"+c+" {font-size: 0.9em;padding: 4px 8px;background-color: var(--button-color-bg);border: none;color: white;padding: 10px 10px;min-width: 100px;text-align: center;text-decoration: var(--text-decoration);display: inline-block;}button:hover"+c+" {background-color: var(--button-color-bg-active);}button:focus"+c+" {outline: 0;}"}var g=[b];function u(o,y,l,c){const{d:s,t:p,h:a}=o;return[a("button",{attrs:{title:y.label},key:0},[p(s(y.label))])]}var n=e.registerTemplate(u);u.stylesheets=[],g&&u.stylesheets.push.apply(u.stylesheets,g),u.stylesheetToken="ui-button_button",e.freezeTemplate(u);class k extends e.LightningElement{constructor(...y){super(...y);this.label=void 0}}e.registerDecorators(k,{publicProps:{label:{config:0}}});var _=e.registerComponent(k,{tmpl:n});r.default=_,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/paginator/v/0_0_1",["exports","lwc/v/2_38_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2","ui/button/v/0_3_2"],function(r,e,b,g,u){"use strict";function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var k=n(b),_=n(g),o=n(u);function y(v,m,E){var w=v?"["+v+"]":"";return".button-right"+w+" {float: right;}red"+w+" {color: #1798c1;}button"+w+" {color: blue;}"}var l=[y];const c=e.parseFragment`<div${3}>Paginator with button</div>`,s={props:{title:"paginator"},key:0},p={label:"Prev"},a={label:"Next"},d={attrs:{slot:"footer"},props:{source:"example/hello"},key:5},f={key:6},i={label:"Previous"},x={"button-right":!0};function h(v,m,E,w){const{st:C,b:T,t:S,h:j,c:R}=v,{_m0:D,_m1:M,_m2:W,_m3:N}=w;return[R("ui-card",_.default,s,[C(c(),2),j("button",{attrs:p,key:3,on:{click:D||(w._m0=T(m.prev))}},[S("Prev")]),j("button",{attrs:a,key:4,on:{click:M||(w._m1=T(m.next))}},[S("Next")]),R("example-view-source",k.default,d,[S("Bind an HTML element to a component property.")])]),j("div",f,[R("ui-button",o.default,{props:i,key:7,on:{click:W||(w._m2=T(m.prev))}}),R("ui-button",o.default,{classMap:x,props:a,key:8,on:{click:N||(w._m3=T(m.next))}})])]}var t=e.registerTemplate(h);h.stylesheets=[],l&&h.stylesheets.push.apply(h.stylesheets,l),h.stylesheetToken="example-paginator_paginator",e.freezeTemplate(h);class P extends e.LightningElement{prev(){this.dispatchEvent(new CustomEvent("prev"))}next(){this.dispatchEvent(new CustomEvent("next"))}}var L=e.registerComponent(P,{tmpl:t});r.default=L,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/eventSimple/v/0_0_1",["exports","lwc/v/2_38_1","example/paginator/v/0_0_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2"],function(r,e,b,g,u){"use strict";function n(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var k=n(b),_=n(g),o=n(u);const y={props:{title:"Event Simple"},key:0},l={key:1},c={attrs:{slot:"footer"},props:{source:"example/hello"},key:3};function s(f,i,x,h){const{d:t,t:P,h:L,b:v,c:m}=f,{_m0:E,_m1:w}=h;return[m("ui-card",o.default,y,[L("div",l,[P("Page "+t(i.pageNum))]),m("example-paginator",k.default,{key:2,on:{prev:E||(h._m0=v(i.handlePrev)),next:w||(h._m1=v(i.handleNext))}}),m("example-view-source",_.default,c,[P("Bind an HTML element to a component property.")])])]}var p=e.registerTemplate(s);s.stylesheets=[],s.stylesheetToken="example-eventSimple_eventSimple",e.freezeTemplate(s);class a extends e.LightningElement{constructor(...i){super(...i);this.pageNum=1}handlePrev(){this.pageNum--}handleNext(){this.pageNum++}}e.registerDecorators(a,{fields:["pageNum"]});var d=e.registerComponent(a,{tmpl:p});r.default=d,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/viewSource/v/0_0_1",["exports","lwc/v/2_38_1"],function(r,e){"use strict";function b(s,p,a){var d=s?"["+s+"]":"",f=s?"["+s+"-host]":"";return(p?":host {":f+" {")+"text-align: left;}.description"+d+" {color: #706e6b;}a"+d+" {color: var(--color-text-link);text-decoration: var(--text-decoration);}"}var g=[b];const u={classMap:{description:!0},key:0},n={key:1},k=[],_={key:2};function o(s,p,a,d){const{s:f,h:i,t:x}=s;return[i("div",u,[f("",n,k,a)]),i("p",_,[i("a",{attrs:{href:p.sourceURL,target:"source"},key:3},[x("View Source")])])]}var y=e.registerTemplate(o);o.slots=[""],o.stylesheets=[],g&&o.stylesheets.push.apply(o.stylesheets,g),o.stylesheetToken="example-viewSource_viewSource",e.freezeTemplate(o);class l extends e.LightningElement{constructor(...p){super(...p);this.baseURL="https://github.com/bigboki/salesforce-oss/tree/master/lwr-single-page-app/src/modules/",this.source=void 0}get sourceURL(){return this.baseURL+this.source}}e.registerDecorators(l,{publicProps:{source:{config:0}},fields:["baseURL"]});var c=e.registerComponent(l,{tmpl:y});r.default=c,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/hello/v/0_0_1",["exports","lwc/v/2_38_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2"],function(r,e,b,g){"use strict";function u(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var n=u(b),k=u(g);const _={props:{title:"Hello"},key:0},o={key:1},y={attrs:{slot:"footer"},props:{source:"example/hello"},key:2};function l(a,d,f,i){const{d:x,t:h,h:t,c:P}=a;return[P("ui-card",k.default,_,[t("div",o,[h("Hello, "+x(d.greeting)+"!")]),P("example-view-source",n.default,y,[h("Bind an HTML element to a component property.")])])]}var c=e.registerTemplate(l);l.stylesheets=[],l.stylesheetToken="example-hello_hello",e.freezeTemplate(l);class s extends e.LightningElement{constructor(...d){super(...d);this.greeting="World"}}e.registerDecorators(s,{fields:["greeting"]});var p=e.registerComponent(s,{tmpl:c});r.default=p,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("data/contacts/v/0_0_1",["exports"],function(r){"use strict";const e=[{Id:"0031700000pJRRSAA4",Name:"Amy Taylor",Title:"VP of Engineering",Phone:"4152568563",Email:"amy@demo.net",Picture:"/assets/images/demo/amy_taylor.jpg"},{Id:"0031700000pJRRTAA4",Name:"Michael Jones",Title:"VP of Sales",Phone:"4158526633",Email:"michael@demo.net",Picture:"/assets/images/demo/michael_jones.jpg"},{Id:"0031700000pJRRUAA4",Name:"Jennifer Wu",Title:"CEO",Phone:"4158521463",Email:"jennifer@demo.net",Picture:"/assets/images/demo/jennifer_wu.jpg"},{Id:"0031700000pJRRVAA4",Name:"Anup Gupta",Title:"VP of Products",Phone:"4158526398",Email:"anup@demo.net",Picture:"/assets/images/demo/anup_gupta.jpg"},{Id:"0031700000pJRRWAA4",Name:"Caroline Kingsley",Title:"VP of Technology",Phone:"4158753654",Email:"caroline@demo.net",Picture:"/assets/images/demo/caroline_kingsley.jpg"},{Id:"0031700000pJRRXAA4",Name:"Jonathan Bradley",Title:"VP of Opearations",Phone:"4158885522",Email:"jonathan@demo.net",Picture:"/assets/images/demo/jonathan_bradley.jpg"}];r.contacts=e,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("data/wireGetContactListProvider/v/0_0_1",["exports","lwc/v/2_38_1","data/contacts/v/0_0_1"],function(r,e,b){"use strict";var g=void 0;class u{constructor(_){this.connected=!1,this.dataCallback=_}connect(){this.connected=!0,this.provideContactList()}disconnect(){this.connected=!1}update(){this.provideContactList()}provideContactList(){this.connected&&this.dataCallback({data:b.contacts})}}e.registerDecorators(u,{fields:["connected"]});var n=e.registerComponent(u,{tmpl:g});r.default=n,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("ui/card/v/0_3_2",["exports","lwc/v/2_38_1"],function(r,e){"use strict";function b(i,x,h){var t=i?"["+i+"]":"";return"@media (min-width: 48em) {.card"+t+" {padding: 2rem;}}.card"+t+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 600px;}.card"+t+" .card-header"+t+",.card"+t+" .card-body"+t+",.card"+t+" .card-footer"+t+" {padding: 0.8rem;padding-bottom: 0;}.card"+t+" .card-header:last-child"+t+",.card"+t+" .card-body:last-child"+t+",.card"+t+" .card-footer:last-child"+t+" {padding-bottom: 0.8rem;}.card"+t+" .card-body"+t+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}.card"+t+" .card-image"+t+" {padding-top: 0.8rem;}.card"+t+" .card-image:first-child"+t+" {padding-top: 0;}.card"+t+" .card-image:first-child"+t+" img"+t+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}.card"+t+" .card-image:last-child"+t+" img"+t+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}.card"+t+" .card-title"+t+" {font-size: 2rem;font-weight: 800;}.card"+t+" .card-footer"+t+" {vertical-align: bottom;}@media (max-width: 380px) {.card"+t+" .card-title"+t+" {font-size: 1.6rem;font-weight: 600;}}"}var g=[b];const u={classMap:{card:!0},key:0},n={classMap:{"card-header":!0},key:1},k={classMap:{"card-title":!0},key:2},_={classMap:{"card-subtitle":!0},key:3},o={classMap:{"card-body":!0},key:4},y={key:5},l=[],c={classMap:{"card-footer":!0},key:6},s={attrs:{name:"footer"},key:7};function p(i,x,h,t){const{d:P,t:L,h:v,s:m}=i;return[v("div",u,[v("div",n,[x.title?v("div",k,[L(P(x.title))]):null,x.subtitle?v("div",_,[L(P(x.subtitle))]):null]),v("div",o,[m("",y,l,h)]),v("div",c,[m("footer",s,l,h)])])]}var a=e.registerTemplate(p);p.slots=["","footer"],p.stylesheets=[],g&&p.stylesheets.push.apply(p.stylesheets,g),p.stylesheetToken="ui-card_card",e.freezeTemplate(p);class d extends e.LightningElement{constructor(...x){super(...x);this.imageUrl=void 0,this.title=void 0,this.subtitle=void 0}get showHeader(){return this.title&&this.subtitle}get showImage(){return this.imageUrl!==void 0&&this.imageUrl.length>0}}e.registerDecorators(d,{publicProps:{imageUrl:{config:0},title:{config:0},subtitle:{config:0}}});var f=e.registerComponent(d,{tmpl:a});r.default=f,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/contactListItem/v/0_0_1",["exports","lwc/v/2_38_1","ui/card/v/0_3_2"],function(r,e,b){"use strict";function g(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var u=g(b);const n=e.parseFragment`<br${3}>`,k={key:1};function _(c,s,p,a){const{b:d,d:f,t:i,st:x,h,c:t}=c,{_m0:P}=a;return[t("ui-card",u.default,{key:0,on:{click:P||(a._m0=d(s.handleClick))}},[h("div",k,[i(f(s.contact.Name)),x(n(),3),i(f(s.contact.Picture))])])]}var o=e.registerTemplate(_);_.stylesheets=[],_.stylesheetToken="example-contactListItem_contactListItem",e.freezeTemplate(_);class y extends e.LightningElement{constructor(...s){super(...s);this.contact=void 0}handleClick(){let s=new CustomEvent("contactselected",{detail:this.contact.Id});this.dispatchEvent(s)}}e.registerDecorators(y,{publicProps:{contact:{config:0}}});var l=e.registerComponent(y,{tmpl:o});r.default=l,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/eventWithData/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItem/v/0_0_1","ui/card/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(r,e,b,g,u){"use strict";function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var k=n(b),_=n(g),o=n(u);const y={props:{title:"Event With Data"},key:0};function l(a,d,f,i){const{k:x,b:h,c:t,i:P,t:L,d:v,fr:m,f:E}=a,{_m0:w}=i;return[t("ui-card",_.default,y,E([P(d.contacts.data,function(C){return t("example-contact-list-item",k.default,{props:{contact:C},key:x(1,C.Id),on:{contactselected:w||(i._m0=h(d.handleContactSelected))}})}),L("selected contact:"),d.selectedContact?m(2,[L(v(d.selectedContact.Name))],0):null,L("after")]))]}var c=e.registerTemplate(l);l.stylesheets=[],l.stylesheetToken="example-eventWithData_eventWithData",e.freezeTemplate(l);class s extends e.LightningElement{constructor(...d){super(...d);this.selectedContact=void 0,this.contacts={}}handleContactSelected(d){const f=d.detail;this.selectedContact=this.contacts.data.find(i=>i.Id===f)}}e.registerDecorators(s,{wire:{contacts:{adapter:o.default,config:function(a){return{}}}},fields:["selectedContact"]});var p=e.registerComponent(s,{tmpl:c});r.default=p,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/app/v/0_0_1",["exports","lwc/v/2_38_1","example/eventWithData/v/0_0_1","example/hello/v/0_0_1","example/eventSimple/v/0_0_1"],function(r,e,b,g,u){"use strict";function n(m){return m&&typeof m=="object"&&"default"in m?m:{default:m}}var k=n(b),_=n(g),o=n(u);function y(m,E,w){var C=m?"["+m+"]":"";return"main"+C+" {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1"+C+" {color: #1798c1;}"}var l=[y];const c=e.parseFragment`<img src="/assets/recipes-logo.png" alt="logo"${3}>`,s=e.parseFragment`<h1${3}>Hello World!</h1>`,p={key:0},a={key:1},d={key:2},f={key:7},i={key:8},x={key:9},h={key:10};function t(m,E,w,C){const{c:T,h:S,st:j}=m;return[S("main",p,[S("div",a,[T("example-event-with-data",k.default,d)]),j(c(),4),j(s(),6),S("div",f,[T("example-hello",_.default,i)]),S("div",x,[T("example-event-simple",o.default,h)])])]}var P=e.registerTemplate(t);t.stylesheets=[],l&&t.stylesheets.push.apply(t.stylesheets,l),t.stylesheetToken="example-app_app",e.freezeTemplate(t);class L extends e.LightningElement{}var v=e.registerComponent(L,{tmpl:P});r.default=v,Object.defineProperty(r,"__esModule",{value:!0})});