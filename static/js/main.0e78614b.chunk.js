(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),i=r(7),a=r.n(i),c=(r(13),r.p,r(14),r(8)),u=r(2),o=r(3),l=r(5),h=r(4),d=r(0);function j(e){return Object(d.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){return Object(u.a)(this,r),t.call(this,e)}return Object(o.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"border-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(d.jsxs)("div",{className:"border-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(d.jsxs)("div",{className:"border-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(n.Component),v=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).state={xIsNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},n}return Object(o.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares;x(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat({squares:r}),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,r=this.state.history[this.state.stepNumber],n=x(r.squares);return e=n?"Winner is "+n:"Next Player is "+(this.state.xIsNext?"X":"O"),Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-info",children:Object(d.jsx)("div",{children:Object(d.jsx)("strong",{children:e})})}),Object(d.jsx)("div",{className:"board",children:Object(d.jsx)(b,{onClick:function(e){return t.handleClick(e)},squares:r.squares})})]})}}]),r}(n.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(c.a)(t[r],3),s=n[0],i=n[1],a=n[2];if(e[s]&&e[s]===e[i]&&e[i]===e[a])return e[s]}return null}var O=function(){return Object(d.jsx)(v,{})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.0e78614b.chunk.js.map