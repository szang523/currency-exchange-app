(this["webpackJsonpcurrency-exchange-app"]=this["webpackJsonpcurrency-exchange-app"]||[]).push([[0],{32:function(e,n,a){},33:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),s=a(15),c=a.n(s),o=(a(25),a(8)),l=a(2),i=a(1),m=function(e){return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)("nav",{className:"navbar justify-content-center",children:Object(i.jsx)("span",{className:"h1 py-2 m-2 text-center",children:"Currency Converter & Exchange Rates"})}),Object(i.jsx)("div",{className:"container py-3",children:e.children}),Object(i.jsx)("footer",{className:"footer text-center p-3",children:Object(i.jsx)("div",{children:Object(i.jsxs)("span",{className:"text-white",children:["Portfolio: ",Object(i.jsx)("a",{className:"text-white",href:"",target:"_blank",children:"xyz@example.com"})]})})})]})},b=a(16),h=a(17),j=a(20),u=a(19),d={AUD:{symbol:"$",name:"Australian dollar"},BGN:{symbol:"\u043b\u0432",name:"Bulgarian lev"},BRL:{symbol:"R$",name:"Brazilian real"},CAD:{symbol:"$",name:"Canadian dollar"},CHF:{symbol:"Fr",name:"Swiss franc"},CNY:{symbol:"\xa5",name:"Chinese yuan"},CZK:{symbol:"K\u010d",name:"Czech koruna"},DKK:{symbol:"kr",name:"Danish krone"},EUR:{symbol:"\u20ac",name:"Euro"},GBP:{symbol:"\xa3",name:"British pound"},HKD:{symbol:"$",name:"Hong Kong dollar"},HRK:{symbol:"kn",name:"Croatian kuna"},HUF:{symbol:"Ft",name:"Hungarian forint"},IDR:{symbol:"Rp",name:"Indonesian rupiah"},ILS:{symbol:"\u20aa",name:"Israeli new shekel"},INR:{symbol:"\u20b9",name:"Indian rupee"},ISK:{symbol:"kr",name:"Icelandic kr\xf3na"},JPY:{symbol:"\xa5",name:"Japanese yen"},KRW:{symbol:"\u20a9",name:"South Korean won"},MXN:{symbol:"$",name:"Mexican peso"},MYR:{symbol:"RM",name:"Malaysian ringgit"},NOK:{symbol:"kr",name:"Norwegian krone"},NZD:{symbol:"$",name:"New Zealand dollar"},PHP:{symbol:"\u20b1",name:"Philippine peso"},PLN:{symbol:"z\u0142",name:"Polish z\u0142oty "},RON:{symbol:"lei",name:"Romanian leu"},RUB:{symbol:"\u20bd",name:"Russian ruble"},SEK:{symbol:"kr",name:"Swedish krona"},SGD:{symbol:"$",name:"Singapore dollar"},THB:{symbol:"\u0e3f",name:"Thai baht"},TRY:{symbol:"\u20ba",name:"Turkish lira"},USD:{symbol:"$",name:"United States dollar"},ZAR:{symbol:"R",name:"South African rand"}},y=function(e){if(e.ok)return e;throw new Error("Request was either a 404 or 500")},x=function(e){return e.json()},p=function(e){var n=e.base,a=e.rates;return a?Object(i.jsxs)("table",{className:"table table-sm bg-light mt-4",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col"}),Object(i.jsxs)("th",{scope:"col",className:"text-right pr-4 py-2",children:["1.00 ",n]})]})}),Object(i.jsx)("tbody",{children:a.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsxs)("td",{className:"pl-4 py-2",children:[e.name," ",Object(i.jsxs)("small",{children:["(",e.acronym,")"]})]}),Object(i.jsx)("td",{className:"text-right pr-4 py-2",children:Object(i.jsx)(o.b,{to:"/currencyconverter?base=".concat(n,"&quote=").concat(e.acronym),children:e.rate.toFixed(6)})})]},e.acronym)}))})]}):null},O=function(e){Object(j.a)(a,e);var n=Object(u.a)(a);function a(){var e;return Object(b.a)(this,a),(e=n.call(this)).changeBase=function(n){e.setState({base:n.target.value}),e.getRatesData(n.target.value)},e.getRatesData=function(n){e.setState({loading:!0}),fetch("https://altexchangerateapi.herokuapp.com/latest?from=".concat(n)).then(y).then(x).then((function(a){if(a.error)throw new Error(a.error);var t=Object.keys(a.rates).filter((function(e){return e!==n})).map((function(e){return{acronym:e,rate:a.rates[e],name:d[e].name,symbol:d[e].symbol}}));e.setState({rates:t,loading:!1})})).catch((function(e){return console.error(e.message)}))},e.state={base:"USD",rates:null,loading:!0},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getRatesData(this.state.base)}},{key:"render",value:function(){var e=this.state,n=e.base,a=e.rates,t=e.loading;return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsxs)("form",{className:"p-3 bg-light form-inline justify-content-center",children:[Object(i.jsxs)("h3",{className:"mb-2",children:["Base currency: ",Object(i.jsx)("b",{className:"mr-2",children:"1"})]}),Object(i.jsx)("select",{value:n,onChange:this.changeBase,className:"form-control form-control-lg mb-2",disabled:t,children:Object.keys(d).map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})]}),Object(i.jsx)(p,{base:n,rates:a})]})}}]),a}(r.a.Component),f=(a(32),function(){return Object(i.jsx)(o.a,{children:Object(i.jsx)(m,{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,component:O}),Object(i.jsx)(l.a,{render:function(){return Object(i.jsx)("h1",{children:"404 Not found"})}})]})})})});c.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3a70838d.chunk.js.map