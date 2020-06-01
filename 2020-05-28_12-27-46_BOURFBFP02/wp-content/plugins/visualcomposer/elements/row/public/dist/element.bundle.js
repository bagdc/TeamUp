(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./row/cssMixins/columnGap.pcss":function(e,t){e.exports=".vce-row--col-gap-$gap {\n\n  @if $gap != false {\n    > .vce-row-content {\n      > .vce-col {\n        margin-right: $(gap)px;\n      }\n\n      > .vce-column-resizer .vce-column-resizer-handler {\n        width: $(gap)px;\n      }\n    }\n  }\n}\n\n.rtl .vce-row--col-gap-$gap,\n.rtl.vce-row--col-gap-$gap {\n  @if $gap != false {\n    > .vce-row-content {\n      > .vce-col {\n        margin-left: $(gap)px;\n        margin-right: 0;\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./row/styles.css":function(e,t){e.exports='/* ----------------------------------------------\n * Row\n * ---------------------------------------------- */\n.vce {\n  margin-bottom: 30px;\n}\n.vce-row-container {\n  width: 100%;\n}\n.vce-row {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-left: 0;\n  margin-right: 0;\n  transition: box-shadow .2s;\n}\n.vce-row-content > .vce-col:last-child {\n  margin-right: 0;\n}\n.vce-row-full-height {\n  min-height: 100vh;\n}\n.vce-row-content {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  min-height: 1em;\n  position: relative;\n}\n.vce-row-wrap--reverse > .vce-row-content {\n  -ms-flex-wrap: wrap-reverse;\n      flex-wrap: wrap-reverse;\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n.vce-row-columns--top > .vce-row-content {\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n.vce-row-columns--top.vce-row-wrap--reverse > .vce-row-content {\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n}\n.vce-row-columns--middle > .vce-row-content {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.vce-row-columns--bottom > .vce-row-content {\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n}\n.vce-row-columns--bottom.vce-row-wrap--reverse > .vce-row-content {\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n.vce-row-columns--top > .vce-row-content:after,\n.vce-row-columns--middle > .vce-row-content:after,\n.vce-row-columns--bottom > .vce-row-content:after {\n  content: "";\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n  display: block;\n}\n.vce-row-content--middle > .vce-row-content > .vce-col > .vce-col-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.vce-row-content--bottom > .vce-row-content > .vce-col > .vce-col-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.vce-row-equal-height > .vce-row-content {\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.vce-row-columns--stretch > .vce-row-content {\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.vce-row[data-vce-full-width="true"] {\n  position: relative;\n  box-sizing: border-box;\n}\n.vce-row[data-vce-stretch-content="true"] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.vce-row[data-vce-stretch-content="true"].vce-row-no-paddings {\n  padding-left: 0;\n  padding-right: 0;\n}\n.vce-row.vce-element--has-background {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 30px;\n}\n.vce-row.vce-element--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n  padding-left: 0;\n  padding-right: 0;\n}\n.vce-row.vce-element--has-background.vce-row--has-col-background {\n  padding-bottom: 30px;\n}\n.vce-row > .vce-row-content > .vce-col.vce-col--all-last {\n  margin-right: 0;\n}\n.rtl .vce-row > .vce-row-content > .vce-col.vce-col--all-last,\n.rtl.vce-row > .vce-row-content > .vce-col.vce-col--all-last {\n  margin-left: 0;\n}\n@media (min-width: 0) and (max-width: 543px) {\n  .vce-row.vce-element--xs--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--xs--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--xs--has-background.vce-row--xs--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--xs--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--xs--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--xs-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--xs-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--xs-last {\n    margin-left: 0;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 544px) and (max-width: 767px) {\n  .vce-row.vce-element--sm--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--sm--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--sm--has-background.vce-row--sm--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--sm--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--sm--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--sm-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--sm-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--sm-last {\n    margin-left: 0;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 768px) and (max-width: 991px) {\n  .vce-row.vce-element--md--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--md--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--md--has-background.vce-row--md--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--md--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--md--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--md-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--md-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--md-last {\n    margin-left: 0;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 992px) and (max-width: 1199px) {\n  .vce-row.vce-element--lg--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--lg--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--lg--has-background.vce-row--lg--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--lg--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--lg--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--lg-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--lg-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--lg-last {\n    margin-left: 0;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 1200px) {\n  .vce-row.vce-element--xl--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--xl--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--xl--has-background.vce-row--xl--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--xl--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--xl--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--xl-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--xl-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--xl-last {\n    margin-left: 0;\n  }\n}\n'},"./row/index.js":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/vc-cake/index.js"),a=n("./node_modules/@babel/runtime/helpers/extends.js"),l=n.n(a),c=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),r=n.n(c),i=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=n.n(i),d=n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),u=n.n(d),p=n("./node_modules/@babel/runtime/helpers/createClass.js"),v=n.n(p),g=n("./node_modules/@babel/runtime/helpers/inherits.js"),h=n.n(g),m=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),w=n.n(m),f=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),b=n.n(f),x=n("./node_modules/react/index.js"),y=n.n(x),k=n("./node_modules/lodash/lodash.js"),O=n.n(k),S=n("./node_modules/classnames/index.js"),j=n.n(S);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b()(e);if(t){var a=b()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return w()(this,n)}}var z=Object(o.getService)("api"),P=Object(o.getService)("document"),D=Object(o.getStorage)("assets"),_=Object(o.getStorage)("elementsSettings"),I=Object(o.getStorage)("fieldOptions"),A=_.state("extendedOptions"),T=["all","defaultSize","xs","sm","md","lg","xl"],L=function(e){h()(n,e);var t=E(n);function n(e){var o;return s()(this,n),(o=t.call(this,e)).state={layout:{}},o.rowRef=y.a.createRef(),o.handleStorageChange=o.handleStorageChange.bind(u()(o)),o}return v()(n,null,[{key:"getRowData",value:function(e){for(var t=[],n=0,o=0,a=[],l=!0,c=e.slice();c.lastIndexOf("hide")===c.length-1&&c.length;)l=!1,c.splice(c.lastIndexOf("hide"),1);c.forEach((function(e,r){var i=0;if("hide"===e)l=!1;else if("auto"===e||""===e)i=.01,a.push("auto"),o++;else{if(e.indexOf("%")>-1)i=parseFloat(e.replace("%","").replace(",","."))/100;else{var s=e.split("/");i=s[0]/s[1]}a.push(i)}var d=Math.floor(1e3*(n+i))/1e3;(d>1||1===d&&"hide"===e)&&(l=!1,t.push(r-1),n=0),void 0===c[r+1]&&t.push(r),n+=i}));var r=0,i=(1-(n-.01*o))/o;return a.forEach((function(e,t){"auto"===e?(a[t]=i,r+=i):r+=e})),a.forEach((function(e){a[0]!==e&&1!==e&&(l=!1)})),{lastColumnIndex:t,isColumnsEqual:l,rowValue:r}}},{key:"resetRowLayout",value:function(e){var t=P.get(e);t.layout.layoutData=null,P.update(e,t)}},{key:"getDefaultLayout",value:function(e,t){var n=[];t&&Object.prototype.hasOwnProperty.call(t,"all")?n=t.all.slice():P.children(e).forEach((function(e){Object.prototype.hasOwnProperty.call(e.size,"defaultSize")&&n.push(e.size.defaultSize)}));return n}},{key:"setColumns",value:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=P.children(e),c=[],r=[],i={tag:"column",parent:e,designOptionsAdvanced:{},customClass:"",customHeaderTitle:"",metaCustomId:"",dividers:{},sticky:{},lastInRow:{},firstInRow:{},size:{}},s=null;Object.keys(t).forEach((function(e){var d=t[e],u=o&&o[e];if(u&&u.length)if(d.length>u.length){var p=n.getRowData(u);if(Math.round(100*p.rowValue)/100<1){var v=1-p.rowValue;(d=u).push("".concat(100*v,"%"))}else if(p.isColumnsEqual){var g=d.length,h="".concat(Math.floor(100/g*100)/100,"%");d=[];for(var m=0;m<g;m++)d.push(h)}}else if(d.length<u.length){var w=n.getRowData(u);if(Math.round(100*w.rowValue)/100==1&&w.isColumnsEqual){var f=d.length,b="".concat(Math.floor(100/f*100)/100,"%");d=[];for(var x=0;x<f;x++)d.push(b)}}var y=n.getRowData(d).lastColumnIndex,k=0;d.forEach((function(t,n){var o=y.indexOf(n)>-1,d=0===n||y.indexOf(n-1)>-1;if(void 0!==l[n]){(s=l[n]).size[e]=t,"defaultSize"!==e&&(s.lastInRow[e]=o,s.firstInRow[e]=d),s.disableStacking=a;var u=!1;c.forEach((function(e,t){s.id===e.id&&(c[t]=s,u=!0)})),u||c.push(s)}else{if(r[k]){var p=r[k];p.size[e]=t,"defaultSize"!==e&&(p.lastInRow[e]=o,p.firstInRow[e]=d),p.disableStacking=a}else{var v=O.a.defaultsDeep({},i);v.size[e]=t,"defaultSize"!==e&&(v.lastInRow[e]=o,v.firstInRow[e]=d),v.disableStacking=a,r.push(v)}k+=1}}))})),c.forEach((function(e){Object.prototype.hasOwnProperty.call(t,"all")?(delete e.size.xs,delete e.size.sm,delete e.size.md,delete e.size.lg,delete e.size.xl):delete e.size.all,P.update(e.id,e)})),r.forEach((function(e){P.create(e)}));var d=t.all||t.xs;if(d&&l.length>d.length){var u=l.slice(d.length);u.forEach((function(e){P.children(e.id).forEach((function(e){e.parent=s.id,P.update(e.id,e)})),P.delete(e.id)}))}}},{key:"getLayout",value:function(e){var t={},n=P.children(e),o=!1;return n.forEach((function(e){Object.prototype.hasOwnProperty.call(e.size,"xs")&&(o=!0)})),n.forEach((function(e){!o&&e.size.all&&(Object.prototype.hasOwnProperty.call(t,"all")||(t.all=[]),t.all.push(e.size.all)),e.size.defaultSize&&(Object.prototype.hasOwnProperty.call(t,"defaultSize")||(t.defaultSize=[]),t.defaultSize.push(e.size.defaultSize))})),Object.prototype.hasOwnProperty.call(t,"all")||T.forEach((function(e){"defaultSize"!==e&&"all"!==e&&n.forEach((function(n){n.size[e]&&(Object.prototype.hasOwnProperty.call(t,e)||(t[e]=[]),t[e].push(n.size[e])),o&&Object.prototype.hasOwnProperty.call(n.size,"all")&&(Object.prototype.hasOwnProperty.call(t,e)||(t[e]=[]),"xs"===e||"sm"===e?t[e].push("100%"):t[e].push(n.size.all))}))})),t}},{key:"getDerivedStateFromProps",value:function(e,t){if(!Object(o.env)("VCV_JS_FT_ROW_COLUMN_LOGIC_REFACTOR"))return null;var a=e.atts,l=e.id,c=a.layout&&a.layout.layoutData?a.layout.layoutData:n.getLayout(l),r=a.layout&&a.layout.layoutData;if(JSON.stringify(c)!==JSON.stringify(t.layout)){if(r)return n.setColumns(l,r,null,a.layout.disableStacking),n.resetRowLayout(l),setTimeout((function(){D.trigger("updateElement",l)}),10),{layout:r};var i=n.getLayout(l);return n.setColumns(l,i,t.layout,a.layout.disableStacking),setTimeout((function(){D.trigger("updateElement",l)}),10),{layout:i}}return null}}]),v()(n,[{key:"componentDidMount",value:function(){var e=A.get();if(!e||e&&!e.elements.includes(this.props.id)){A.onChange(this.handleStorageChange);var t={fieldKey:!1,fieldType:!1,id:this.props.id};I.trigger("fieldOptionsChange",t)}}},{key:"componentDidUpdate",value:function(){this.handleStorageChange(!1)}},{key:"handleStorageChange",value:function(e){var t=this,n=A.get();if(e&&(n=e,A.ignoreChange(this.handleStorageChange)),n){var o=n.elements.find((function(e){return e.id===t.props.id}));if(o){var a=this.rowRef.current;_.state("elementOptions").set(R(R({},o),{},{ref:a}))}}}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.atts,o=e.editor,a=e.isBackend,c=n.customClass,r=n.rowWidth,i=n.removeSpaces,s=n.columnGap,d=n.fullHeight,u=n.metaCustomId,p=n.equalHeight,v=n.columnPosition,g=n.contentPosition,h=n.designOptionsAdvanced,m=n.layout,w=n.columnBackground,f=n.hidden,b=n.sticky,x=n.boxShadow,k=this.props.children,O=window.VCV_EDITOR_TYPE?window.VCV_EDITOR_TYPE():"default",S=j()({"vce-row-container":!0,"vce-wpbackend-element-hidden":f&&a}),C=["vce-row"];if(w)if(w.all)C.push("vce-row--has-col-background");else for(var R in w)w[R]&&C.push("vce-row--".concat(R,"--has-col-background"));C.push(this.getBackgroundClass(h)),C.push("vce-row--col-gap-".concat(s?parseInt(s):0)),m&&m.reverseColumn&&!m.disableStacking&&C.push("vce-row-wrap--reverse");var E={style:{}},z={style:{}},P={};"string"==typeof c&&c&&C.push(c),"stretchedRow"===r||"stretchedRowAndColumn"===r?z["data-vce-full-width"]=!0:(z.style.width="",z.style.left="",z.style.right="",E.style.paddingLeft="",E.style.paddingRight=""),"stretchedRowAndColumn"!==r&&"sidebar"!==O||(z["data-vce-stretch-content"]=!0);var D={};b&&b.device&&(D=this.getStickyAttributes(b)),"sidebar"!==O&&"stretchedRowAndColumn"!==r||!i||C.push("vce-row-no-paddings"),d?C.push("vce-row-full-height"):z.style.minHeight="",p&&"stretch"!==v&&C.push("vce-row-equal-height"),v&&C.push("vce-row-columns--".concat(v)),g&&C.push("vce-row-content--".concat(g));var _={};x&&x.device&&(_=this.getBoxShadowAttributes(x,t));var I=j()(C);u&&(P.id=u),P["data-vce-delete-attr"]="style",z["data-vce-delete-attr"]="style",E["data-vce-element-content"]=!0;var A=this.applyDO("all");return y.a.createElement("div",l()({className:S},P),y.a.createElement("div",l()({className:I},z,D,_,o,{id:"el-"+t},A,{ref:this.rowRef}),this.getBackgroundTypeContent(),this.getContainerDivider(),y.a.createElement("div",l()({className:"vce-row-content"},E),k)))}}]),n}(z.elementComponent);(0,Object(o.getService)("cook").add)(n("./row/settings.json"),(function(e){e.add(L)}),{css:n("./node_modules/raw-loader/index.js!./row/styles.css"),editorCss:!1,mixins:{columnGap:{mixin:n("./node_modules/raw-loader/index.js!./row/cssMixins/columnGap.pcss")}}},(function(e){var t=e.rowLayout,n=e.designOptionsAdvanced;if(t&&!Array.isArray(t)||(e.rowLayout={all:t}),n&&n.device){var o={},a={};if(Object.keys(n.device).forEach((function(e){var t=n.device[e],l=Object.assign({},t);if(t.parallax){var c={parallaxEnable:!0,parallax:t.parallax};Object.prototype.hasOwnProperty.call(t,"parallaxReverse")&&(c.parallaxReverse=t.parallaxReverse),Object.prototype.hasOwnProperty.call(t,"parallaxSpeed")&&(c.parallaxSpeed=t.parallaxSpeed),o[e]=c,delete l.parallax,delete l.parallaxReverse,delete l.parallaxSpeed,a[e]=l}})),!O.a.isEmpty(o)){e.parallax={device:o};var l=Object.assign({},n);l.device=a,e.designOptionsAdvanced=l}}return e}))},"./row/settings.json":function(e){e.exports=JSON.parse('{"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"layout":{"type":"rowLayout","access":"public","value":{},"options":{"label":"Row Layout"}},"dividers":{"type":"divider","access":"public","value":{},"options":{"label":"Dividers"}},"sticky":{"type":"sticky","access":"public","value":{},"options":{"label":"Sticky"}},"boxShadow":{"type":"boxShadow","access":"public","value":{},"options":{"label":"Box Shadow"}},"parallax":{"type":"parallax","access":"public","value":{},"options":{"label":"Parallax"}},"designOptionsAdvanced":{"type":"designOptionsAdvanced","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["rowWidth","removeSpaces","columnGap","fullHeight","columnPosition","equalHeight","contentPosition","metaCustomId","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","layout","designOptionsAdvanced","parallax","boxShadow","dividers","sticky"]},"relatedTo":{"type":"group","access":"protected","value":["General","RootElements","Row"]},"containerFor":{"type":"group","access":"protected","value":["Column"]},"parentWrapper":{"type":"string","access":"protected","value":""},"metaOrder":{"type":"number","access":"protected","value":2},"rowWidth":{"type":"buttonGroup","access":"public","value":"boxed","options":{"label":"Row width","values":[{"label":"Boxed","value":"boxed","icon":"vcv-ui-icon-attribute-row-width-boxed"},{"label":"Stretched Row","value":"stretchedRow","icon":"vcv-ui-icon-attribute-row-width-stretched"},{"label":"Stretched Row and Column","value":"stretchedRowAndColumn","icon":"vcv-ui-icon-attribute-row-width-stretched-content"}],"containerDependency":{"sidebar":"hide"}}},"removeSpaces":{"type":"toggle","access":"public","value":false,"options":{"label":"Remove spaces","description":"Remove row spaces from left and right.","onChange":{"rules":{"rowWidth":{"rule":"value","options":{"value":"stretchedRowAndColumn"}}},"actions":[{"action":"toggleVisibility"}]},"containerDependency":{"sidebar":"removeDependencies"}}},"columnGap":{"type":"number","access":"public","value":"30","options":{"label":"Column gap","description":"Enter gap between columns in pixels (Example: 5).","min":"0","cssMixin":{"mixin":"columnGap","property":"gap","namePattern":"[\\\\da-f]+"}}},"fullHeight":{"type":"toggle","access":"public","value":false,"options":{"label":"Full height","description":"Set row to be full screen height."}},"metaCustomId":{"type":"customId","access":"public","value":"","options":{"label":"Element ID","description":"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},"equalHeight":{"type":"toggle","access":"public","value":false,"options":{"label":"Column equal height"}},"columnPosition":{"type":"buttonGroup","access":"public","value":"top","options":{"label":"Column position","values":[{"label":"Top","value":"top","icon":"vcv-ui-icon-attribute-vertical-alignment-top"},{"label":"Middle","value":"middle","icon":"vcv-ui-icon-attribute-vertical-alignment-middle"},{"label":"Bottom","value":"bottom","icon":"vcv-ui-icon-attribute-vertical-alignment-bottom"},{"label":"Full Height","value":"stretch","icon":"vcv-ui-icon-attribute-vertical-alignment-full-height"}],"onChange":{"rules":{"fullHeight":{"rule":"toggle"}},"actions":[{"action":"toggleVisibility"}]}}},"contentPosition":{"type":"buttonGroup","access":"public","value":"top","options":{"label":"Content position","values":[{"label":"Top","value":"top","icon":"vcv-ui-icon-attribute-vertical-alignment-top"},{"label":"Middle","value":"middle","icon":"vcv-ui-icon-attribute-vertical-alignment-middle"},{"label":"Bottom","value":"bottom","icon":"vcv-ui-icon-attribute-vertical-alignment-bottom"}]}},"size":{"type":"string","access":"public","value":"auto"},"hidden":{"type":"string","access":"public","value":false},"columnBackground":{"type":"string","access":"public","value":""},"tag":{"access":"protected","type":"string","value":"row"},"sharedAssetsLibrary":{"access":"protected","type":"string","value":{"libraries":[{"rules":{"rowWidth":{"rule":"!value","options":{"value":"boxed"}}},"libsNames":["fullWidth"]},{"rules":{"fullHeight":{"rule":"toggle"}},"libsNames":["fullHeight"]}]}},"initChildren":{"access":"protected","type":"object","value":[{"tag":"column"}]}}')}},[["./row/index.js"]]]);