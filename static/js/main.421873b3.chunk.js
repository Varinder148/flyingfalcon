(this.webpackJsonpflyingfalcon=this.webpackJsonpflyingfalcon||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(19),r=n.n(a),s=(n(42),n(43),n(6)),l=n(35),i=n(5),u=(n(49),n(50),n(13)),o=n.n(u),h=n(16),d=n(18),j=(n(52),n(34)),b=n(12),f=n(2),O={START_FETCHING:"START_FETCHING",REQUEST_SUCCESS:"REQUEST_SUCCESS",REQUEST_FAIL:"REQUEST_FAIL",FILTER_PLANETS:"FILTER_PLANETS",DISABLE_CORRESPONDING_VEHICLES:"DISABLE_CORRESPONDING_VEHICLES",CALCULATE_VEHICLE_COUNT:"CALCULATE_VEHICLE_COUNT",UPDATE_RESULT:"UPDATE_RESULT",RESET_GAME:"RESET_GAME"},p=function(e,t){var n=Object.values(t);return e.filter((function(e){return!n.find((function(t){return t.name===e.name}))}))},v=function(e,t,n,c,a){var r=c.map((function(e){var n=e.max_distance<t.distance,c=a.find((function(t){return t.name===e.name}));return n=n||c<=0,Object(f.a)(Object(f.a)({},e),{},{disabled:n})}));return Object(f.a)(Object(f.a)({},n),{},Object(b.a)({},e,r))},E=function(e,t){var n=[];return e=Object.values(e),t.forEach((function(t){var c=e.filter((function(e){return t.name===e.name})),a=t.total_no-c.length;a=a<=0?0:a;var r={name:t.name,total_no:a};n.push(r)})),n},m={token:{value:"",error:"",isFetching:!1},planets:{value:[],error:"",isFetching:!1},vehicles:{value:[],error:"",isFetching:!1},filteredPlanets:{},filteredVehicles:{},availableVehicleCount:[],result:{value:"",error:"",isFetching:!1}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.START_FETCHING:return Object(f.a)(Object(f.a)({},e),{},Object(b.a)({},t.requestType,Object(f.a)(Object(f.a)({},e[t.requestType]),{},{isFetching:!0})));case O.REQUEST_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},Object(b.a)({},t.requestType,Object(f.a)(Object(f.a)({},e[t.requestType]),{},{isFetching:!1,value:t.payload})));case O.REQUEST_FAIL:return Object(f.a)(Object(f.a)({},e),{},Object(b.a)({},t.requestType,Object(f.a)(Object(f.a)({},e[t.requestType]),{},{isFetching:!1,error:t.msg})));case O.FILTER_PLANETS:return Object(f.a)(Object(f.a)({},e),{},{filteredPlanets:p(e.planets.value,t.payload)});case O.DISABLE_CORRESPONDING_VEHICLES:return Object(f.a)(Object(f.a)({},e),{},{filteredVehicles:v(t.selectorId,t.payload,e.filteredVehicles,e.vehicles.value,e.availableVehicleCount)});case O.CALCULATE_VEHICLE_COUNT:return Object(f.a)(Object(f.a)({},e),{},{availableVehicleCount:E(t.playerVehicles,e.vehicles.value)});case O.RESET_GAME:return m;default:return e}},x={ADD_PLANET:"ADD_PLANET",ADD_VEHICLE:"ADD_VEHICLE",RESET_PLAYER:"RESET_PLAYER"},S={selectedPlanets:{},selectedVehicles:{}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.ADD_PLANET:return Object(f.a)(Object(f.a)({},e),{},{selectedPlanets:Object(f.a)(Object(f.a)({},e.selectedPlanets),{},Object(b.a)({},t.selectorId,t.payload))});case x.ADD_VEHICLE:return Object(f.a)(Object(f.a)({},e),{},{selectedVehicles:Object(f.a)(Object(f.a)({},e.selectedVehicles),{},Object(b.a)({},t.selectorId,t.payload))});case x.RESET_PLAYER:return S;default:return e}},T=Object(d.b)({game:g,player:y}),C=[j.a];var _=Object(d.c)(T,d.a.apply(void 0,C)),A=n(14),L=n.n(A),P=function(e){return{type:O.START_FETCHING,requestType:e}},N=function(e,t){return{type:O.REQUEST_SUCCESS,payload:t,requestType:e}},V=function(e,t){return{type:O.REQUEST_FAIL,requestType:e,msg:t}},I=function(){return function(e){e(function(){var e=Object(h.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="token",e.prev=1,t(P(n)),e.next=5,L.a.post("/token");case 5:c=e.sent,t(N(n,c.data.token)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(V(n,"Something went wrong while fetching token"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(h.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="planets",e.prev=1,t(P(n)),e.next=5,L.a.get("/planets");case 5:c=e.sent,t(N(n,c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(V(n,"Something went wrong while fetching Planets"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(h.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="vehicles",e.prev=1,t(P(n)),e.next=5,L.a.get("/vehicles");case 5:c=e.sent,t(N(n,c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(V(n,"Something went wrong while fetching Vehicles."));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}},R=function(e,t){return function(n){n(function(e,t){return{type:x.ADD_PLANET,payload:t,selectorId:e}}(e,t));var c=_.getState().player.selectedPlanets;n({type:O.FILTER_PLANETS,payload:c}),n(function(e,t){return{type:O.DISABLE_CORRESPONDING_VEHICLES,payload:t,selectorId:e}}(e,t))}},F=function(e,t){return function(n){n(function(e,t){return{type:x.ADD_VEHICLE,payload:t,selectorId:e}}(e,t)),n(function(e,t,n){return{type:O.CALCULATE_VEHICLE_COUNT,payload:t,selectorId:e,playerVehicles:n}}(e,t,_.getState().player.selectedVehicles))}},w=function(e){return e.map((function(e){return e.name}))},k=function(){return function(e){e({type:O.RESET_GAME}),e({type:x.RESET_PLAYER}),e(I())}},D=n(1),U=Object(s.b)(null,(function(e){return{resetFullGame:function(){return e(k())}}}))((function(e){var t=e.resetFullGame;return Object(D.jsx)("ul",{className:"navbar",children:Object(D.jsx)("li",{onClick:t,children:"Reset"})})})),G=Object(i.f)((function(e){var t=e.history;return Object(D.jsx)("div",{className:"header-wrapper",children:Object(D.jsxs)("header",{children:[Object(D.jsx)("h2",{className:"logo",onClick:function(){return t.push("/")},children:"Flying Falcon"}),Object(D.jsx)(U,{})]})})})),H=(n(75),function(){return Object(D.jsx)("div",{className:"footer-wrapper",children:Object(D.jsx)("footer",{children:"developed using React, Redux (2021)"})})}),Q=(n(76),n(4)),q=n(36),J=n(37),B=(n(77),function(e){return e.game}),Y=Object(Q.a)([B],(function(e){return e.planets})),K=Object(Q.a)([B],(function(e){return e.vehicles})),M=Object(Q.a)([B],(function(e){return e.result})),W=Object(Q.a)([B],(function(e){return e.filteredPlanets})),z=Object(Q.a)([B],(function(e){return e.filteredVehicles})),X=(Object(Q.a)([B],(function(e){return e.vehicleCount})),Object(Q.a)([B],(function(e){return e.availableVehicleCount}))),Z=function(e){return e.player},$=Object(Q.a)([Z],(function(e){return e.selectedPlanets})),ee=Object(Q.a)([Z],(function(e){return e.selectedVehicles})),te=Object(Q.a)([Z],(function(e){return ne(e.selectedPlanets,e.selectedVehicles)})),ne=function(e,t){var n=Object.keys(e),c=0;return n.forEach((function(n){var a=0,r=1;e[n]&&t[n]&&(a=e[n].distance,r=t[n].speed);var s=a/r;c+=s||0})),c},ce=Object(Q.b)({selectFilteredPlanets:W,selectPlayerSelectedPlanets:$}),ae=Object(s.b)(ce,(function(e){return{addPlanet:function(t,n){e(R(t,n))},addVehicle:function(t){return e(F(t,{}))}}}))((function(e){var t=e.selectorId,n=e.showVehicles,a=e.setShowVehicles,r=e.selectPlanets,s=e.selectFilteredPlanets,l=e.selectPlayerSelectedPlanets,i=e.addPlanet,u=e.addVehicle;Object(c.useEffect)((function(){l[t]?a(!0):a(!1)}),[n,l,t,a]);var o=r.value;return s.length>0&&(o=s),Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("select",{onChange:function(e){e.preventDefault(),n||a(!0);var c=JSON.parse(e.target.value);i(t,c),u(t)},value:JSON.stringify(l[t]),defaultValue:"empty",children:[Object(D.jsx)("option",{disabled:!0,value:"empty",children:"-- Pick a Planet --"}),o&&o.map((function(e){return Object(D.jsx)("option",{value:JSON.stringify(e),children:e.name},e.name)})),l[t]?Object(D.jsx)("option",{value:JSON.stringify(l[t]),children:l[t].name}):null]})})})),re=(n(78),Object(Q.b)({selectFilteredVehicles:z,selectPlayerSelectedVehicles:ee,selectAvailableVehicleCount:X})),se=Object(s.b)(re,(function(e){return{addVehicle:function(t,n){return e(F(t,n))}}}))((function(e){var t=e.selectorId,n=e.addVehicle,c=e.selectVehicles,a=e.selectFilteredVehicles,r=e.selectPlayerSelectedVehicles,s=e.selectAvailableVehicleCount,l=function(e){var c=e.target.value;n(t,c?JSON.parse(c):null)},i=c.value;a[t]&&(i=a[t]);var u=function(e){var t=s.find((function(t){return t.name===e.name}));return t?t.total_no:e.total_no},o=function(e){return r[t]&&e.name===r[t].name||!1};return Object(D.jsxs)("div",{className:"vehicle-menu",children:[Object(D.jsx)("p",{children:"Who will go here?"}),i.map((function(e,n){return Object(D.jsxs)("div",{children:[Object(D.jsx)("input",{id:"veh".concat(n).concat(t),type:"radio",name:"vehicle".concat(t),value:JSON.stringify(e),checked:!e.disabled&&o(e),onChange:l,disabled:(e.disabled||0===u(e))&&!o(e)}),Object(D.jsx)("label",{htmlFor:"veh".concat(n).concat(t),children:"".concat(e.name," (").concat(u(e),")")})]},e.name)}))]})})),le=["selectVehicles","selectPlanets"],ie=Object(s.b)((function(){return Object(Q.b)({selectVehicles:K,selectPlanets:Y})}))((function(e){var t=e.selectVehicles,n=e.selectPlanets,a=Object(J.a)(e,le),r=Object(c.useState)(!1),s=Object(q.a)(r,2),l=s[0],i=s[1];return Object(D.jsxs)(D.Fragment,{children:[0!==n.value.length&&Object(D.jsx)(ae,Object(f.a)(Object(f.a)({},a),{},{showVehicles:l,setShowVehicles:i,selectPlanets:n})),0!==n.value.length&&l&&Object(D.jsx)(se,Object(f.a)(Object(f.a)({},a),{},{selectVehicles:t}))]})})),ue=Object(Q.b)({selectTimeTaken:te}),oe=Object(s.b)(ue)((function(e){var t=e.selectTimeTaken;return Object(D.jsxs)(D.Fragment,{children:["Time Taken:",t||0]})})),he=(n(79),Object(Q.b)({selectResult:M})),de=Object(s.b)(he)((function(e){var t=e.selectResult;return Object(D.jsx)("div",{className:"msg-offset",children:Object(D.jsx)("div",{className:"msg ".concat(""===t.error&&t.value.includes("found")?"green":"red"),children:""!==t.error?t.error:t.value})})})),je=Object(Q.b)({selectResult:M}),be=Object(s.b)(je,(function(e){return{launchSearchAsync:function(){return e(function(){var e=Object(h.a)(o.a.mark((function e(t){var n,c,a,r,s,l,i,u,h,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(V("result","")),t(N("result","")),t(P("result")),n=_.getState(),c=n.game.token.value,a=n.player,r=a.selectedPlanets,s=a.selectedVehicles,l=w(Object.values(r)),i=w(Object.values(s)),4===l.length&&4===i.length){e.next=11;break}return t(V("result","Please select 4 planets and 4 vehicles")),e.abrupt("return");case 11:if(!i.find((function(e){return void 0===e}))){e.next=14;break}return t(V("result","Please select 4 vehicles")),e.abrupt("return");case 14:return u={token:c,planet_names:l,vehicle_names:i},e.prev=15,e.next=18,L.a.post("/find",u);case 18:h=e.sent,d="",d="success"===h.data.status?"Congratulations! You found the queen on "+h.data.planet_name+".":"Shoot! It's a miss.",t(N("result",d)),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(15),t(V("result","Something went wrong. Please try again"));case 27:case"end":return e.stop()}}),e,null,[[15,24]])})));return function(t){return e.apply(this,arguments)}}())},resetFullGame:function(){return e(k())}}}))((function(e){var t=e.selectResult,n=e.launchSearchAsync,c=e.resetFullGame;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(de,{}),Object(D.jsxs)("div",{className:"gamepage",children:[Object(D.jsx)("div",{className:"selectors",children:[1,2,3,4].map((function(e){return Object(D.jsx)("div",{children:Object(D.jsx)(ie,{selectorId:e})},e)}))}),Object(D.jsx)("div",{className:"score-display",children:Object(D.jsx)(oe,{})}),""===t.value&&Object(D.jsx)("button",{className:"submit",onClick:n,disabled:t.isFetching,children:"Deploy the troops"}),""!==t.value&&Object(D.jsx)("button",{className:"submit",onClick:c,children:"New Game?"})]})]})})),fe=(n(80),function(e){var t=e.history;return Object(D.jsxs)("div",{className:"homepage",children:[Object(D.jsxs)("p",{children:[Object(D.jsx)("span",{children:"In the distant distant galaxy of Tara B."}),Object(D.jsx)("span",{children:"After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for 15 years."}),"Queen Al Falcone is now in hiding. But if King Shan can find her before the years are up, she will be exiled for another 15 years\u2026"]}),Object(D.jsx)("p",{children:"King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin and Pingasor. However he has limited resources at his disposal and can send his army to only 4 of these planets."}),Object(D.jsxs)("p",{children:[Object(D.jsx)("span",{children:"Now pick a side, Traveller."}),Object(D.jsx)("span",{className:"link marginTop",onClick:function(){return t.push("game")},children:"Find the Queen, and put her before the rotten King"}),"or",Object(D.jsx)("span",{className:"link",onClick:function(){t.push("goodbye")},children:"Let the Queen live happily in the hiding"})]})]})}),Oe=Object(s.b)(null,(function(e){return{loadGame:function(){return e(I())}}}))((function(e){return(0,e.loadGame)(),Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(l.a,{children:[Object(D.jsx)(G,{}),Object(D.jsxs)(i.c,{children:[Object(D.jsx)(i.a,{exact:!0,path:"/",component:fe}),Object(D.jsx)(i.a,{exact:!0,path:"/game",component:be}),Object(D.jsx)(i.a,{exact:!0,path:"/goodbye",render:function(){return Object(D.jsxs)("h2",{className:"misc-messages",children:["You made the right decision, me friend.",Object(D.jsx)("span",{}),"Now go, Shoo..."]})}}),Object(D.jsx)(i.a,{exact:!0,path:"*",render:function(){return Object(D.jsx)("h2",{className:"misc-messages",children:"You seem to be lost, me friend"})}})]}),Object(D.jsx)(H,{})]})})})),pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};L.a.defaults.baseURL="https://findfalcone.herokuapp.com/",L.a.defaults.headers.common.Accept="application/json",r.a.render(Object(D.jsx)(s.a,{store:_,children:Object(D.jsx)(Oe,{})}),document.getElementById("root")),pe()}},[[81,1,2]]]);
//# sourceMappingURL=main.421873b3.chunk.js.map