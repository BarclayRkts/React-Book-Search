(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{34:function(e,t,n){e.exports=n(60)},39:function(e,t,n){},41:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(26),r=n.n(o),c=(n(39),n(15)),u=n.n(c),i=n(27),s=n(8),m=n(9),h=n(7),v=n(12),g=n(11),E=(n(41),n(28)),d=n.n(E),f=n(61),p=n(62),b=n(63),k=n(32),y=(n(59),function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e;return this.props.books&&(e=this.props.books.map((function(e){var t=e.id,n=e.volumeInfo.title,a=e.volumeInfo.imageLinks.thumbnail,o=e.volumeInfo.categories,r=e.volumeInfo.authors,c=e.volumeInfo.publisher,u=e.volumeInfo.description,i=e.volumeInfo.pageCount,s=e.volumeInfo.publishedDate,m=e.volumeInfo.averageRating;return l.a.createElement(p.a,{key:t},l.a.createElement(f.a,null,l.a.createElement("h3",null,n),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:a,alt:"presentation"})),l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(k.a,null,l.a.createElement("strong",null,"Categories: "),o),l.a.createElement(k.a,null,l.a.createElement("strong",null,"Authors: "),r),l.a.createElement(k.a,null,l.a.createElement("strong",null,"Publisher: "),c),l.a.createElement(k.a,null,l.a.createElement("strong",null,"Publish Date: "),s),l.a.createElement(k.a,null,l.a.createElement("strong",null,"Page Count: "),i),l.a.createElement(k.a,null,l.a.createElement("strong",null,"Average Rating: "),l.a.createElement("span",{className:"rating"},m))))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Book Description"),l.a.createElement("div",{className:"desc"},u),l.a.createElement("hr",null)))))}))),l.a.createElement("div",{className:"containerDiv"},l.a.createElement("div",null,e))}}]),n}(a.Component)),w=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={text:"",items:[],toggle:!1},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(n,[{key:"getBook",value:function(){var e=this;d.a.request({method:"get",url:"https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.text,"&key=AIzaSyC1eqYmoHCSHBy40V6bFTGoj9DL0S7A1cE")}).then((function(t){e.setState({items:t.data.items,toggle:!0})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.getBook()}},{key:"handleChange",value:function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.setState({text:t.target.value});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"Display"},l.a.createElement("h1",null,"Book Finder"),l.a.createElement("form",{className:"inputBox",onSubmit:this.handleSubmit},l.a.createElement("input",{value:this.state.text,onChange:this.handleChange,name:"text",type:"text"}),l.a.createElement("button",null,"Search")),l.a.createElement(y,{books:this.state.items}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.21d36853.chunk.js.map