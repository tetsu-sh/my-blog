(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(532)}])},7518:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},3797:function(e,t,n){"use strict";var r=n(5893),i=n(8420),l=n(6159);t.Z=function(e){var t=e.dateString,n=(0,i.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,l.Z)(n,"LLLL\td, yyyy")})}},1952:function(e,t,n){"use strict";var r=n(5893),i=n(1664),l=n.n(i);t.Z=function(){return(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"fixed z-20 w-full bg-gray-700 py-3 text-center font-semibold","aria-label":"Header navigation",children:[(0,r.jsx)(l(),{href:"/",className:"rounded px-5 py-2.5 font-mono tracking-tight no-underline hover:bg-gray-700/50 active:bg-gray-600",children:(0,r.jsx)("span",{className:"test-xs px-5 text-neutral-200 hover:text-neutral-500 active:text-gray-600 transition duration-100",children:"home"})}),(0,r.jsx)(l(),{href:"/about",className:"rounded px-5 py-2.5 font-mono tracking-tight no-underline hover:bg-gray-700/50 active:bg-gray-600",children:(0,r.jsx)("span",{className:"test-xs text-neutral-200 hover:text-neutral-500 active:text-gray-600 transition duration-100",children:"about"})})]})})}},5303:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),i=n(1664),l=n.n(i),o=n(3642),s=[{href:"https://github.com/tetsu-sh",icon:(0,r.jsx)(o.pZu,{size:20}),label:"Github"},{href:"https://twitter.com/tetsu04228",icon:(0,r.jsx)(o.mWf,{size:20}),label:"Twitter"}],a=function(){return(0,r.jsx)("footer",{children:(0,r.jsx)("div",{className:"p-10 center bg-neutral-800",children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,r.jsx)("div",{className:"flex gap-4",children:s.map((function(e){var t=e.href,n=e.icon,i=e.label;return(0,r.jsx)(l(),{href:t,passHref:!0,children:(0,r.jsx)("span",{className:"text-neutral-200 hover:text-neutral-500 active:text-gray-600 transition duration-100","aria-label":i,children:n})},t)}))}),(0,r.jsxs)("div",{className:"text-neutral-200 text-sm text-center",children:["\xa9 ",(new Date).getFullYear()," Chimu"]})]})})})},c=n(9008),d=n.n(c),u=function(){return(0,r.jsxs)(d(),{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"128x128",href:"/favicon/favicon-128.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32-32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16-16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon-32-32.png"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat("Markdown",".")}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})},f=function(e){e.preview;var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)(a,{})]})}},532:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return L}});var r=n(5893),i=n(1163),l=n(2918),o=n(7518),s=n(6834),a=n.n(s),c=n(7294),d=function(e){var t=e.content;return(0,r.jsx)("div",{className:"post",children:(0,r.jsx)("div",{className:a().markdown,dangerouslySetInnerHTML:{__html:t}})})},u=n(1952),f=n(3797),m=function(e){var t=e.children;return(0,r.jsx)("h1",{className:"text-5xl md:text-7xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})},h=function(e){var t=e.title,n=(e.coverImage,e.date);return(0,r.jsxs)("div",{className:"mt-16",children:[(0,r.jsx)(m,{children:t}),(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(f.Z,{dateString:n})}),(0,r.jsx)("div",{className:"max-w-2xl mx-auto"})]})},p=n(5303),x=n(9008),g=n.n(x),v=n(2866),C=n.n(v),b=function(){return(0,c.useEffect)((function(){return C().init({tocSelector:".toc",contentSelector:".post",headingSelector:"h1,h2, h3,h4",scrollSmoothOffset:-80}),function(){return C().destroy()}}),[]),(0,r.jsxs)("div",{className:"sticky-container",children:[(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("div",{className:"center gap-2 py-2 px-3 border-b-2 border-teal-700 dark:border-teal-400 text-base font-bold text-primary-1",children:"\u76ee\u6b21"})}),(0,r.jsx)("nav",{className:"toc"})]})};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j={sm:640,md:768,lg:1024,xl:1280},N=function(e){return function(){var e=S(c.useState({width:0,height:0}),2),t=e[0],n=e[1];return c.useEffect((function(){var e=function(){return n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),t}().width>=j[e]},k=!0;function L(e){var t=e.post,n=(e.morePosts,e.preview),s=N("lg"),a=(0,i.useRouter)();return a.isFallback||(null===t||void 0===t?void 0:t.slug)?((0,c.useEffect)((function(){return C().init({tocSelector:".toc",contentSelector:".post",headingSelector:"h1,h2, h3",scrollSmoothOffset:-80}),function(){return C().destroy()}}),[]),(0,r.jsxs)(p.Z,{preview:n,children:[(0,r.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,r.jsx)(u.Z,{}),(0,r.jsx)(o.Z,{children:a.isFallback?(0,r.jsx)(m,{children:"Loading\u2026"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(g(),{children:(0,r.jsx)("title",{children:t.title})})}),(0,r.jsx)("div",{children:(0,r.jsx)(h,{title:t.title,coverImage:t.coverImage,date:t.date})}),(0,r.jsxs)("div",{className:"flex gap-10 znc",children:[(0,r.jsx)("div",{className:"article flex-col",children:(0,r.jsx)(d,{content:t.content})}),s&&(0,r.jsx)("div",{className:"aside-toc flex-col",children:(0,r.jsx)("aside",{className:"sticky top-20",children:(0,r.jsx)(b,{})})})]})]})})})]}),(0,r.jsx)("style",{children:"\n        .aside-toc{\n          width:300px;\n        }\n        .article{\n          width:(100-aside-toc.width)%\n        }\n        "})]})):(0,r.jsx)(l.default,{statusCode:404})}},6834:function(e){e.exports={markdown:"markdown-styles_markdown__h_8de"}},2918:function(e,t,n){e.exports=n(9185)},1163:function(e,t,n){e.exports=n(387)},1557:function(e){e.exports=function(e){var t,n=[].forEach,r=[].some,i=document.body,l=!0,o=" ";function s(t,r){var i=r.appendChild(function(t){var r=document.createElement("li"),i=document.createElement("a");e.listItemClass&&r.setAttribute("class",e.listItemClass);e.onClick&&(i.onclick=e.onClick);e.includeTitleTags&&i.setAttribute("title",t.textContent);e.includeHtml&&t.childNodes.length?n.call(t.childNodes,(function(e){i.appendChild(e.cloneNode(!0))})):i.textContent=t.textContent;return i.setAttribute("href",e.basePath+"#"+t.id),i.setAttribute("class",e.linkClass+o+"node-name--"+t.nodeName+o+e.extraLinkClasses),r.appendChild(i),r}(t));if(t.children.length){var l=a(t.isCollapsed);t.children.forEach((function(e){s(e,l)})),i.appendChild(l)}}function a(t){var n=e.orderedList?"ol":"ul",r=document.createElement(n),i=e.listClass+o+e.extraListClasses;return t&&(i+=o+e.collapsibleClass,i+=o+e.isCollapsedClass),r.setAttribute("class",i),r}function c(t){var n=0;return null!==t&&(n=t.offsetTop,e.hasInnerContainers&&(n+=c(t.offsetParent))),n}function d(t){return t&&-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(o+e.isCollapsedClass).join(""),d(t.parentNode.parentNode)):t}return{enableTocAnimation:function(){l=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"===typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(l=!1)},render:function(e,n){var r=a(!1);if(n.forEach((function(e){s(e,r)})),null!==(t=e||t))return t.firstChild&&t.removeChild(t.firstChild),0===n.length?t:t.appendChild(r)},updateToc:function(s){var a;a=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||i.scrollTop,e.positionFixedSelector&&function(){var n;n=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||i.scrollTop;var r=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=t.offsetTop),n>e.fixedSidebarOffset?-1===r.className.indexOf(e.positionFixedClass)&&(r.className+=o+e.positionFixedClass):r.className=r.className.split(o+e.positionFixedClass).join("")}();var u,f=s;if(l&&null!==t&&f.length>0){r.call(f,(function(t,n){return c(t)>a+e.headingsOffset+10?(u=f[0===n?n:n-1],!0):n===f.length-1?(u=f[f.length-1],!0):void 0}));var m=t.querySelectorAll("."+e.linkClass);n.call(m,(function(t){t.className=t.className.split(o+e.activeLinkClass).join("")}));var h=t.querySelectorAll("."+e.listItemClass);n.call(h,(function(t){t.className=t.className.split(o+e.activeListItemClass).join("")}));var p=t.querySelector("."+e.linkClass+".node-name--"+u.nodeName+'[href="'+e.basePath+"#"+u.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g,"\\$1")+'"]');p&&-1===p.className.indexOf(e.activeLinkClass)&&(p.className+=o+e.activeLinkClass);var x=p&&p.parentNode;x&&-1===x.className.indexOf(e.activeListItemClass)&&(x.className+=o+e.activeListItemClass);var g=t.querySelectorAll("."+e.listClass+"."+e.collapsibleClass);n.call(g,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=o+e.isCollapsedClass)})),p&&p.nextSibling&&-1!==p.nextSibling.className.indexOf(e.isCollapsedClass)&&(p.nextSibling.className=p.nextSibling.className.split(o+e.isCollapsedClass).join("")),d(p&&p.parentNode.parentNode)}}}}},1340:function(e){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1}},2866:function(e,t,n){var r,i,l,o;o="undefined"!==typeof n.g?n.g:window||n.g,i=[],r=function(e){"use strict";var t,r,i,l=n(1340),o={},s={},a=n(1557),c=n(9620),d=n(3693),u=!!e&&!!e.document&&!!e.document.querySelector&&!!e.addEventListener;if("undefined"!==typeof window||u){var f=Object.prototype.hasOwnProperty;return s.destroy=function(){var e=x(o);null!==e&&(o.skipRendering||e&&(e.innerHTML=""),o.scrollContainer&&document.querySelector(o.scrollContainer)?(document.querySelector(o.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(o.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(o.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1)))},s.init=function(e){if(u){o=m(l,e||{}),this.options=o,this.state={},o.scrollSmooth&&(o.duration=o.scrollSmoothDuration,o.offset=o.scrollSmoothOffset,s.scrollSmooth=n(764).initSmoothScrolling(o)),t=a(o),r=c(o),this._buildHtml=t,this._parseContent=r,this._headingsArray=i,s.destroy();var f=p(o);if(null!==f){var g=x(o);if(null!==g&&null!==(i=r.selectHeadings(f,o.headingSelector))){var v=r.nestHeadingsArray(i).nest;o.skipRendering||t.render(g,v),this._scrollListener=h((function(e){t.updateToc(i),!o.disableTocScrollSync&&d(o);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(i),o.scrollEndCallback&&o.scrollEndCallback(e))}),o.throttleTimeout),this._scrollListener(),o.scrollContainer&&document.querySelector(o.scrollContainer)?(document.querySelector(o.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(o.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var C=null;return this._clickListener=h((function(e){o.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(i),C&&clearTimeout(C),C=setTimeout((function(){t.enableTocAnimation()}),o.scrollSmoothDuration)}),o.throttleTimeout),o.scrollContainer&&document.querySelector(o.scrollContainer)?document.querySelector(o.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},s.refresh=function(e){s.destroy(),s.init(e||this.options)},e.tocbot=s,s}function m(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)f.call(n,r)&&(e[r]=n[r])}return e}function h(e,t,n){var r,i;return t||(t=250),function(){var l=n||this,o=+new Date,s=arguments;r&&o<r+t?(clearTimeout(i),i=setTimeout((function(){r=o,e.apply(l,s)}),t)):(r=o,e.apply(l,s))}}function p(e){try{return e.contentElement||document.querySelector(e.contentSelector)}catch(t){return console.warn("Contents element not found: "+e.contentSelector),null}}function x(e){try{return e.tocElement||document.querySelector(e.tocSelector)}catch(t){return console.warn("TOC element not found: "+e.tocSelector),null}}}(o),void 0===(l="function"===typeof r?r.apply(t,i):r)||(e.exports=l)},9620:function(e){e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function r(e){return+e.nodeName.toUpperCase().replace("H","")}function i(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;const n=t.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim());var i={id:t.id,children:[],nodeName:t.nodeName,headingLevel:r(t),textContent:n};return e.includeHtml&&(i.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(i,t):i}return{nestHeadingsArray:function(r){return t.call(r,(function(t,r){var l=i(r);return l&&function(t,r){for(var l=i(t),o=l.headingLevel,s=r,a=n(s),c=o-(a?a.headingLevel:0);c>0&&(!(a=n(s))||o!==a.headingLevel);)a&&void 0!==a.children&&(s=a.children),c--;o>=e.collapseDepth&&(l.isCollapsed=!0),s.push(l)}(l,t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var r=n;e.ignoreSelector&&(r=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return t.querySelectorAll(r)}catch(i){return console.warn("Headers not found with selector: "+r),null}}}}},764:function(e,t){t.initSmoothScrolling=function(e){var t=e.duration,n=e.offset,r=location.hash?i(location.href):location.href;function i(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",(function(l){var o;"a"!==(o=l.target).tagName.toLowerCase()||!(o.hash.length>0||"#"===o.href.charAt(o.href.length-1))||i(o.href)!==r&&i(o.href)+"#"!==r||l.target.className.indexOf("no-smooth-scroll")>-1||"#"===l.target.href.charAt(l.target.href.length-2)&&"!"===l.target.href.charAt(l.target.href.length-1)||-1===l.target.className.indexOf(e.linkClass)||function(e,t){var n,r,i=window.pageYOffset,l={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||u},o=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]')||document.querySelector('[id="'+e.split("#").join("")+'"]'),s="string"===typeof e?l.offset+(e?o&&o.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,a="function"===typeof l.duration?l.duration(s):l.duration;function c(e){r=e-n,window.scrollTo(0,l.easing(r,i,s,a)),r<a?requestAnimationFrame(c):d()}function d(){window.scrollTo(0,i+s),"function"===typeof l.callback&&l.callback()}function u(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}requestAnimationFrame((function(e){n=e,c(e)}))}(l.target.hash,{duration:t,offset:n,callback:function(){!function(e){var t=document.getElementById(e.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}(l.target.hash)}})}),!1)}},3693:function(e){e.exports=function(e){var t=e.tocElement||document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);n&&(t.scrollTop=n.offsetTop)}}}},function(e){e.O(0,[415,831,358,774,888,179],(function(){return t=592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);