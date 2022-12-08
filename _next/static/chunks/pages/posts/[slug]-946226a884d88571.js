(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return t(5427)}])},7518:function(e,n,t){"use strict";var s=t(5893);n.Z=function(e){var n=e.children;return(0,s.jsx)("div",{className:"container mx-auto px-5",children:n})}},9371:function(e,n,t){"use strict";var s=t(5893),r=t(4184),a=t.n(r),i=t(1664),c=t.n(i),l=t(5675),o=t.n(l),x=t(3454);function d(e){return(x.env.GITHUB_ACTIONS?"/my-blog":"")+e}n.Z=function(e){var n=e.title,t=e.src,r=e.slug,i=(0,s.jsx)(o(),{src:d(t),alt:"Cover Image for ".concat(n),className:a()("shadow-sm w-full",{"hover:shadow-lg transition-shadow duration-200":r}),width:1300,height:630});return(0,s.jsx)("div",{className:"sm:mx-0",children:r?(0,s.jsx)(c(),{as:"/posts/".concat(r),href:"/posts/[slug]","aria-label":n,children:i}):i})}},3797:function(e,n,t){"use strict";var s=t(5893),r=t(8420),a=t(6159);n.Z=function(e){var n=e.dateString,t=(0,r.Z)(n);return(0,s.jsx)("time",{dateTime:n,children:(0,a.Z)(t,"LLLL\td, yyyy")})}},1952:function(e,n,t){"use strict";var s=t(5893),r=t(1664),a=t.n(r);n.Z=function(){return(0,s.jsx)("header",{children:(0,s.jsxs)("nav",{className:"fixed z-20 w-full bg-gray-700 py-3 text-center font-semibold","aria-label":"Header navigation",children:[(0,s.jsx)(a(),{href:"/",className:"rounded px-5 py-2.5 font-mono tracking-tight no-underline hover:bg-gray-700/50 active:bg-gray-600",children:(0,s.jsx)("span",{className:"test-xs px-5 test-gray-100 duration-100",children:"home"})}),(0,s.jsx)(a(),{href:"/about",className:"rounded px-5 py-2.5 font-mono tracking-tight no-underline hover:bg-gray-700/50 active:bg-gray-600",children:(0,s.jsx)("span",{className:"test-xs test-gray-100 duration-100",children:"about"})})]})})}},5303:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var s=t(5893),r=t(1664),a=t.n(r),i=t(3642),c=[{href:"https://github.com/tetsu-sh",icon:(0,s.jsx)(i.pZu,{size:20}),label:"Github"},{href:"https://twitter.com/tetsu04228",icon:(0,s.jsx)(i.mWf,{size:20}),label:"Twitter"}],l=function(){return(0,s.jsx)("footer",{children:(0,s.jsx)("div",{className:"p-10 center bg-neutral-800",children:(0,s.jsxs)("div",{className:"vstack items-center gap-4",children:[(0,s.jsx)("div",{className:"flex gap-4",children:c.map((function(e){var n=e.href,t=e.icon;e.label;return(0,s.jsx)(a(),{href:n,className:"text-neutral-200 hover:text-neutral-500 active:text-gray-600 transition duration-100",children:t},n)}))}),(0,s.jsxs)("div",{className:"text-neutral-200 text-sm text-center",children:["\xa9 ",(new Date).getFullYear()," Chimu"]})]})})})},o=t(9008),x=t.n(o),d=function(){return(0,s.jsxs)(x(),{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,s.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat("Markdown",".")}),(0,s.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})},m=function(e){e.preview;var n=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{}),(0,s.jsx)("div",{className:"min-h-screen",children:(0,s.jsx)("main",{children:n})}),(0,s.jsx)(l,{})]})}},5427:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return j},default:function(){return p}});var s=t(5893),r=t(1163),a=t(2918),i=t(7518),c=t(6834),l=t.n(c),o=function(e){var n=e.content;return(0,s.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,s.jsx)("div",{className:l().markdown,dangerouslySetInnerHTML:{__html:n}})})},x=t(1952),d=t(3797),m=t(9371),u=function(e){var n=e.children;return(0,s.jsx)("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:n})},h=function(e){var n=e.title,t=e.coverImage,r=e.date;return(0,s.jsxs)("div",{className:"mt-16",children:[(0,s.jsx)(u,{children:n}),(0,s.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:t&&(0,s.jsx)(m.Z,{title:n,src:t})}),(0,s.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,s.jsx)("div",{className:"mb-6 text-lg",children:(0,s.jsx)(d.Z,{dateString:r})})})]})},f=t(5303),g=t(9008),v=t.n(g),j=!0;function p(e){var n=e.post,t=(e.morePosts,e.preview),c=(0,r.useRouter)();return c.isFallback||(null===n||void 0===n?void 0:n.slug)?(0,s.jsx)(f.Z,{preview:t,children:(0,s.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,s.jsx)(x.Z,{}),(0,s.jsx)(i.Z,{children:c.isFallback?(0,s.jsx)(u,{children:"Loading\u2026"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("article",{className:"mb-32",children:[(0,s.jsx)(v(),{children:(0,s.jsx)("title",{children:n.title})}),(0,s.jsx)(h,{title:n.title,coverImage:n.coverImage,date:n.date}),(0,s.jsx)(o,{content:n.content})]})})})]})}):(0,s.jsx)(a.default,{statusCode:404})}},6834:function(e){e.exports={markdown:"markdown-styles_markdown__h_8de"}},2918:function(e,n,t){e.exports=t(9185)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[415,831,537,774,888,179],(function(){return n=592,e(e.s=n);var n}));var n=e.O();_N_E=n}]);