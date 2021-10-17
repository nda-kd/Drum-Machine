(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"DATA":{"bankOne":[{"keyCode":81,"keyTrigger":"Q","id":"Heater-1","url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{"keyCode":87,"keyTrigger":"W","id":"Heater-2","url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{"keyCode":69,"keyTrigger":"E","id":" Heater-3","url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{"keyCode":65,"keyTrigger":"A","id":"Heater-4","url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{"keyCode":83,"keyTrigger":"S","id":"Clap","url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{"keyCode":68,"keyTrigger":"D","id":"Open-HH","url":"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{"keyCode":90,"keyTrigger":"Z","id":"Kick-n\'-Hat","url":"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{"keyCode":88,"keyTrigger":"X","id":"Kick","url":"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{"keyCode":67,"keyTrigger":"C","id":"Closed-HH","url":"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp"}],"bankTwo":[{"keyCode":81,"keyTrigger":"Q","id":"Chord-1","url":"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{"keyCode":87,"keyTrigger":"W","id":"Chord-2","url":"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{"keyCode":69,"keyTrigger":"E","id":"Chord-3","url":"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{"keyCode":65,"keyTrigger":"A","id":"Shaker","url":"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{"keyCode":83,"keyTrigger":"S","id":"Open-HH","url":"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{"keyCode":68,"keyTrigger":"D","id":"Closed-HH","url":"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{"keyCode":90,"keyTrigger":"Z","id":"Punchy-Kick","url":"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{"keyCode":88,"keyTrigger":"X","id":"Side-Stick","url":"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{"keyCode":67,"keyTrigger":"C","id":"Snare","url":"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]}}')},,,,,,,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},,function(e,a,c){},function(e,a,c){"use strict";c.r(a);var s=c(1),t=c.n(s),r=c(6),d=c.n(r),i=(c(11),c(2)),n=(c(12),c(13),c(14),c(3)),o=function(e,a){switch(a.type){case"SET_DISPLAY":return Object(n.a)(Object(n.a)({},e),{},{display:a.payload});case"SET_KEY":return Object(n.a)(Object(n.a)({},e),{},{key:a.payload});case"TURN_ON_OFF":return Object(n.a)(Object(n.a)({},e),{},{switchIsOn:a.payload});case"SET_VOLUME":return Object(n.a)(Object(n.a)({},e),{},{volume:a.payload});default:return e}},m=c(0),l={display:"",key:{},switchIsOn:!0,volume:50},u=Object(s.createContext)(l),j=function(e){var a=e.children,c=Object(s.useReducer)(o,l),t=Object(i.a)(c,2),r=t[0],d=t[1];return Object(m.jsx)(u.Provider,{value:[r,d],children:a})};var p=function(e){var a=Object(s.useContext)(u),c=Object(i.a)(a,2),t=(c[0],c[1]);return Object(m.jsx)("div",{className:"pad",children:e.bank?e.bank.map((function(e,a){return Object(m.jsxs)("div",{className:"drum-pad",onClick:function(){return t({type:"SET_KEY",payload:a=e}),void t({type:"SET_DISPLAY",payload:a.id});var a},children:[e.keyTrigger,Object(m.jsx)("audio",{src:e.url,id:e.keyTrigger,className:"clip"})]},a)})):""})};c(16);var b=function(){var e=Object(s.useContext)(u),a=Object(i.a)(e,1)[0];return Object(m.jsx)("div",{className:"display-wrap",children:Object(m.jsx)("div",{id:"display",children:a.switchIsOn?a.display:""})})},O=c(4);var h=function(){var e=Object(s.useState)(!0),a=Object(i.a)(e,2),c=a[0],t=a[1],r=Object(s.useState)(O.DATA.bankOne),d=Object(i.a)(r,2),n=d[0],o=d[1],l=Object(s.useContext)(u),j=Object(i.a)(l,2),h=j[0],y=j[1];return Object(m.jsxs)("div",{id:"drum-machine",className:"container-wrap",children:[Object(m.jsx)(b,{}),Object(m.jsxs)("div",{className:"controll-button",children:[Object(m.jsx)("div",{className:"speaker-wrap",children:Object(m.jsx)("div",{id:"y"})}),Object(m.jsxs)("div",{className:"button-wrap",children:[Object(m.jsx)("div",{className:"off-on",children:Object(m.jsxs)("button",{className:"toggle ".concat(h.switchIsOn?"off":""),children:[Object(m.jsx)("span",{className:h.switchIsOn?"toggleLampOn":"toggleLampOff"}),Object(m.jsx)("div",{"aria-hidden":"true",className:"switchArea",children:Object(m.jsx)("div",{className:"switch",onClick:function(){y({type:"TURN_ON_OFF",payload:!h.switchIsOn}),y({type:"SET_DISPLAY",payload:"Welcome"})},children:Object(m.jsx)("div",{className:"lines"})})})]})}),Object(m.jsxs)("div",{className:"toggle-wrapper ".concat(c?"pushed":""),onClick:function(){t(!c),c?(o(O.DATA.bankTwo),y({type:"SET_DISPLAY",payload:"Heater Kit"})):(o(O.DATA.bankOne),y({type:"SET_DISPLAY",payload:"Smooth Piano Kit"}))},children:[Object(m.jsx)("div",{className:"rect_2"}),Object(m.jsx)("div",{className:"rect_1",children:Object(m.jsx)("div",{className:"rect_1__inset"})}),Object(m.jsx)("div",{className:"rect_3"}),Object(m.jsx)("div",{className:"toggle_handler",children:Object(m.jsx)("div",{className:"toggle__ellips"})})]})]})]}),Object(m.jsx)("div",{className:"pad-wrap",children:Object(m.jsx)(p,{bank:n})}),Object(m.jsx)("div",{className:"volums",children:Object(m.jsx)("input",{type:"range",id:"vol",name:"vol",min:"0",max:"100",value:h.volume,onChange:function(e){return function(e){y({type:"SET_VOLUME",payload:e.target.value}),y({type:"SET_DISPLAY",payload:"Volume: "+e.target.value}),setTimeout((function(){y({type:"SET_DISPLAY",payload:""})}),2e3)}(e)}})})]})};var y=function(){var e=Object(s.useContext)(u),a=Object(i.a)(e,1)[0];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{}),a.switchIsOn&&Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"}),Object(m.jsx)("div",{className:"cube"})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(a){var c=a.getCLS,s=a.getFID,t=a.getFCP,r=a.getLCP,d=a.getTTFB;c(e),s(e),t(e),r(e),d(e)}))};d.a.render(Object(m.jsx)(j,{children:Object(m.jsx)(t.a.StrictMode,{children:Object(m.jsx)(y,{})})}),document.getElementById("root")),k()}],[[17,1,2]]]);
//# sourceMappingURL=main.f1fd5ae8.chunk.js.map