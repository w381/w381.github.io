LWR.define("example/paginator/v/0_0_1",["exports","lwc/v/2_38_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2"],function(n,t,y,g){"use strict";function m(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var h=m(y),_=m(g);function x(e,v,L){var l=e?"["+e+"]":"";return"red"+l+" {color: #1798c1;}button"+l+" {color: blue;}ui-button"+l+" {color: green;}"}var c=[x];const b=t.parseFragment`<div${3}>Paginator with button</div>`,d={props:{title:"paginator"},key:0},w={},s={label:"Prev"},a=[["color","red",!1]],o={label:"Next"},p={attrs:{slot:"footer"},props:{source:"example/hello"},key:5};function r(e,v,L,l){const{st:k,b:T,t:S,h:P,c:M}=e,{_m0:D,_m1:E}=l;return[M("ui-card",_.default,d,[k(b(),2),P("button",{classMap:w,attrs:s,key:3,on:{click:D||(l._m0=T(v.prev))}},[S("Prev")]),P("button",{styleDecls:a,attrs:o,key:4,on:{click:E||(l._m1=T(v.next))}},[S("Next")]),M("example-view-source",h.default,p,[S("Bind an HTML element to a component property.")])])]}var i=t.registerTemplate(r);r.stylesheets=[],c&&r.stylesheets.push.apply(r.stylesheets,c),r.stylesheetToken="example-paginator_paginator",t.freezeTemplate(r);class u extends t.LightningElement{prev(){this.dispatchEvent(new CustomEvent("prev"))}next(){this.dispatchEvent(new CustomEvent("next"))}}var f=t.registerComponent(u,{tmpl:i});n.default=f,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("example/eventSimple/v/0_0_1",["exports","lwc/v/2_38_1","example/paginator/v/0_0_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2"],function(n,t,y,g,m){"use strict";function h(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var _=h(y),x=h(g),c=h(m);const b={props:{title:"Event Simple"},key:0},d={key:1},w={attrs:{slot:"footer"},props:{source:"example/hello"},key:3};function s(r,i,u,f){const{d:e,t:v,h:L,b:l,c:k}=r,{_m0:T,_m1:S}=f;return[k("ui-card",c.default,b,[L("div",d,[v("Page "+e(i.pageNum))]),k("example-paginator",_.default,{key:2,on:{prev:T||(f._m0=l(i.handlePrev)),next:S||(f._m1=l(i.handleNext))}}),k("example-view-source",x.default,w,[v("Bind an HTML element to a component property.")])])]}var a=t.registerTemplate(s);s.stylesheets=[],s.stylesheetToken="example-eventSimple_eventSimple",t.freezeTemplate(s);class o extends t.LightningElement{constructor(...i){super(...i);this.pageNum=1}handlePrev(){this.pageNum--}handleNext(){this.pageNum++}}t.registerDecorators(o,{fields:["pageNum"]});var p=t.registerComponent(o,{tmpl:a});n.default=p,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("ui/card/v/0_3_2",["exports","lwc/v/2_38_1"],function(n,t){"use strict";function y(i,u,f){var e=i?"["+i+"]":"";return"@media (min-width: 48em) {.card"+e+" {padding: 2rem;}}.card"+e+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 600px;}.card"+e+" .card-header"+e+",.card"+e+" .card-body"+e+",.card"+e+" .card-footer"+e+" {padding: 0.8rem;padding-bottom: 0;}.card"+e+" .card-header:last-child"+e+",.card"+e+" .card-body:last-child"+e+",.card"+e+" .card-footer:last-child"+e+" {padding-bottom: 0.8rem;}.card"+e+" .card-body"+e+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}.card"+e+" .card-image"+e+" {padding-top: 0.8rem;}.card"+e+" .card-image:first-child"+e+" {padding-top: 0;}.card"+e+" .card-image:first-child"+e+" img"+e+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}.card"+e+" .card-image:last-child"+e+" img"+e+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}.card"+e+" .card-title"+e+" {font-size: 2rem;font-weight: 800;}.card"+e+" .card-footer"+e+" {vertical-align: bottom;}@media (max-width: 380px) {.card"+e+" .card-title"+e+" {font-size: 1.6rem;font-weight: 600;}}"}var g=[y];const m={classMap:{card:!0},key:0},h={classMap:{"card-header":!0},key:1},_={classMap:{"card-title":!0},key:2},x={classMap:{"card-subtitle":!0},key:3},c={classMap:{"card-body":!0},key:4},b={key:5},d=[],w={classMap:{"card-footer":!0},key:6},s={attrs:{name:"footer"},key:7};function a(i,u,f,e){const{d:v,t:L,h:l,s:k}=i;return[l("div",m,[l("div",h,[u.title?l("div",_,[L(v(u.title))]):null,u.subtitle?l("div",x,[L(v(u.subtitle))]):null]),l("div",c,[k("",b,d,f)]),l("div",w,[k("footer",s,d,f)])])]}var o=t.registerTemplate(a);a.slots=["","footer"],a.stylesheets=[],g&&a.stylesheets.push.apply(a.stylesheets,g),a.stylesheetToken="ui-card_card",t.freezeTemplate(a);class p extends t.LightningElement{constructor(...u){super(...u);this.imageUrl=void 0,this.title=void 0,this.subtitle=void 0}get showHeader(){return this.title&&this.subtitle}get showImage(){return this.imageUrl!==void 0&&this.imageUrl.length>0}}t.registerDecorators(p,{publicProps:{imageUrl:{config:0},title:{config:0},subtitle:{config:0}}});var r=t.registerComponent(p,{tmpl:o});n.default=r,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("example/viewSource/v/0_0_1",["exports","lwc/v/2_38_1"],function(n,t){"use strict";function y(s,a,o){var p=s?"["+s+"]":"",r=s?"["+s+"-host]":"";return(a?":host {":r+" {")+"text-align: left;}.description"+p+" {color: #706e6b;}a"+p+" {color: var(--color-text-link);text-decoration: var(--text-decoration);}"}var g=[y];const m={classMap:{description:!0},key:0},h={key:1},_=[],x={key:2};function c(s,a,o,p){const{s:r,h:i,t:u}=s;return[i("div",m,[r("",h,_,o)]),i("p",x,[i("a",{attrs:{href:a.sourceURL,target:"source"},key:3},[u("View Source")])])]}var b=t.registerTemplate(c);c.slots=[""],c.stylesheets=[],g&&c.stylesheets.push.apply(c.stylesheets,g),c.stylesheetToken="example-viewSource_viewSource",t.freezeTemplate(c);class d extends t.LightningElement{constructor(...a){super(...a);this.baseURL="https://github.com/bigboki/salesforce-oss/tree/master/lwr-single-page-app/src/modules/",this.source=void 0}get sourceURL(){return this.baseURL+this.source}}t.registerDecorators(d,{publicProps:{source:{config:0}},fields:["baseURL"]});var w=t.registerComponent(d,{tmpl:b});n.default=w,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("example/hello/v/0_0_1",["exports","lwc/v/2_38_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2"],function(n,t,y,g){"use strict";function m(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var h=m(y),_=m(g);const x={props:{title:"Hello"},key:0},c={key:1},b={attrs:{slot:"footer"},props:{source:"example/hello"},key:2};function d(o,p,r,i){const{d:u,t:f,h:e,c:v}=o;return[v("ui-card",_.default,x,[e("div",c,[f("Hello, "+u(p.greeting)+"!")]),v("example-view-source",h.default,b,[f("Bind an HTML element to a component property.")])])]}var w=t.registerTemplate(d);d.stylesheets=[],d.stylesheetToken="example-hello_hello",t.freezeTemplate(d);class s extends t.LightningElement{constructor(...p){super(...p);this.greeting="World"}}t.registerDecorators(s,{fields:["greeting"]});var a=t.registerComponent(s,{tmpl:w});n.default=a,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("example/app/v/0_0_1",["exports","lwc/v/2_38_1","example/hello/v/0_0_1","example/eventSimple/v/0_0_1"],function(n,t,y,g){"use strict";function m(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var h=m(y),_=m(g);function x(e,v,L){var l=e?"["+e+"]":"";return"main"+l+" {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1"+l+" {color: #1798c1;}"}var c=[x];const b=t.parseFragment`<img src="/public/assets/recipes-logo.png" alt="logo"${3}>`,d=t.parseFragment`<h1${3}>Hello World!</h1>`,w={key:0},s={key:5},a={key:6},o={key:7},p={key:8};function r(e,v,L,l){const{st:k,c:T,h:S}=e;return[S("main",w,[k(b(),2),k(d(),4),S("div",s,[T("example-hello",h.default,a)]),S("div",o,[T("example-event-simple",_.default,p)])])]}var i=t.registerTemplate(r);r.stylesheets=[],c&&r.stylesheets.push.apply(r.stylesheets,c),r.stylesheetToken="example-app_app",t.freezeTemplate(r);class u extends t.LightningElement{}var f=t.registerComponent(u,{tmpl:i});n.default=f,Object.defineProperty(n,"__esModule",{value:!0})});
