"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{653:function(e,a,t){t.r(a),t.d(a,{Movies:function(){return c},default:function(){return v}});var i=t(439),o=t(182),s=t(87),m=t(791),r=t(689),n={searchBar:"Movies_searchBar__RYxd-",form:"Movies_form__mp42q",button:"Movies_button__hVjwG",movieImage:"Movies_movieImage__7C3bK",movieGallery:"Movies_movieGallery__jt8my",movieInfo:"Movies_movieInfo__DQtN6",movieName:"Movies_movieName__rhxMt",movieItem:"Movies_movieItem__WBe6u"},l=t(184),c=function(){var e,a=(0,o.a)(),t=a.myMovies,c=a.setMovieName,v=a.movieResults,p=(0,s.lr)(),h=(0,i.Z)(p,2),u=h[0],x=h[1],_=null!==(e=u.get("movie"))&&void 0!==e?e:"";(0,m.useEffect)((function(){c(_)}),[_]);var d=(0,r.TH)();return(0,l.jsxs)("div",{children:[(0,l.jsx)("header",{className:n.searchBar,children:(0,l.jsxs)("form",{className:n.form,onSubmit:function(e){e.preventDefault(),x({movie:e.target[0].value.trim()}),e.target[1].style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){e.target[1].style.boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)"}),5e3)},children:[(0,l.jsx)("input",{className:n.input,type:"text",autoComplete:"off",placeholder:"Search images and photos"}),(0,l.jsx)("button",{type:"submit",className:n.button,children:"Search"})]})}),(0,l.jsx)("ul",{className:n.movieGallery,children:0!==t.length&&0===v.length&&""===_?t.map((function(e){return(0,l.jsx)("li",{name:e.id,className:n.movieItem,children:(0,l.jsxs)(s.rU,{to:"".concat(e.id),name:e.id,className:n.movieInfo,state:{from:d},children:[(0,l.jsx)("img",{className:n.movieImage,src:"https://image.tmdb.org/t/p/original/"+e.poster_path,alt:"Unavailable"}),(0,l.jsx)("span",{className:n.movieName,children:e.original_title||e.original_name})]})},e.id)})):""!==_&&0!==v.length&&0!==t.length?v.map((function(e){return(0,l.jsx)("li",{className:n.movieItem,children:(0,l.jsxs)(s.rU,{to:"".concat(e.id),name:e.id,className:n.movieInfo,state:{from:d},children:[(0,l.jsx)("img",{className:n.movieImage,src:"https://image.tmdb.org/t/p/original/"+e.poster_path,alt:"Unavailable"}),(0,l.jsx)("span",{className:n.movieName,children:e.original_title||e.original_name})]})},e.id)})):(0,l.jsx)("div",{children:"No Movies Found"})})]})},v=c}}]);
//# sourceMappingURL=653.7f7d008b.chunk.js.map