(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},26:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(16),l=t.n(i),s=(t(25),t(26),t(7)),m=t(5),r=t(19),o=t(6),d=function(e){var a=e.id,t=e.image,c=(e.index,e.title);return n.a.createElement("div",{className:"Section8"},n.a.createElement(s.b,{to:"/details/"+a},n.a.createElement("img",{className:"Image2",src:t,alt:"Click to get details on the movie "+c})))};var v=function(){var e=Object(c.useState)({movies:[]}),a=Object(o.a)(e,2),t=a[0],i=a[1],l=function(){fetch("http://api.themoviedb.org/3/movie/popular?api_key=3d2560b40244f01afa57b67b4f3390a1").then(function(e){return e.json()}).then(function(e){return function(e,a){var t=e.data.results.map(function(e){return{id:e.id,title:e.title,posterPath:e.poster_path,plot:e.overview,userRating:e.vote_average,releaseDate:e.release_date}});i({movies:Object(r.a)(t)})}({data:e})})};return Object(c.useEffect)(function(){l()},{}),n.a.createElement("div",{className:"Sectionlimit"},n.a.createElement("div",{className:"Section1"}),n.a.createElement("div",{className:"Section2"}),n.a.createElement("div",{className:"Section3"},n.a.createElement("div",{className:"Header1"},"Pop Movies")),n.a.createElement("div",{className:"Section4"}),n.a.createElement("div",{className:"Section5"},n.a.createElement("img",{className:"Image1",src:"tripledots.png"})," "),n.a.createElement("div",{className:"Section6"}),n.a.createElement("div",{className:"Section7"}," "),t.movies.map(function(e,a){return n.a.createElement(d,{id:e.id,index:a,image:"http://image.tmdb.org/t/p/w185"+e.posterPath,title:e.title})}))};var E=function(e){var a=e.match,t=Object(c.useState)({movie:{}}),i=Object(o.a)(t,2),l=i[0],m=i[1],r=Object(c.useState)(""),d=Object(o.a)(r,2),v=d[0],E=d[1],N=Object(c.useState)(""),S=Object(o.a)(N,2),u=S[0],p=S[1],f=Object(c.useState)(0),g=Object(o.a)(f,2),h=(g[0],g[1],function(){fetch("http://api.themoviedb.org/3/movie/"+a.params.movieID+"/videos?api_key=3d2560b40244f01afa57b67b4f3390a1").then(function(e){return e.json()}).then(function(e){return function(e,a){console.log("AllData:"+JSON.stringify(e));var t=e.data.results.map(function(e){return{key:e.key}});console.log("AllMovieVideos:"+JSON.stringify(t[0].key)),console.log("AllMovieVideos:"+JSON.stringify(t[1].key)),E(t[0].key),p(t[1].key)}({data:e})})});return Object(c.useEffect)(function(){(g[0],g[1],function(){fetch("http://api.themoviedb.org/3/movie/"+a.params.movieID+"?api_key=3d2560b40244f01afa57b67b4f3390a1").then(function(e){return e.json()}).then(function(e){return function(e,a){console.log("AllData:"+JSON.stringify(e)),console.log("Movie ID:"+e.data.title);var t=e.data.release_date;t=t.slice(0,4),m({movie:JSON.parse(JSON.stringify({id:e.data.id,title:e.data.title,posterPath:e.data.poster_path,plot:e.data.overview,userRating:e.data.vote_average,minutes:e.data.runtime,releaseDate:t}))}),console.log("AllData:"+JSON.stringify(l.movie))}({data:e})})})(),h()},{}),n.a.createElement("div",{className:"Sectionlimit"},n.a.createElement("div",{className:"Section1"}),n.a.createElement("div",{className:"Section2"}),n.a.createElement("div",{className:"Section3"},n.a.createElement("div",{className:"Header1"},n.a.createElement(s.b,{className:"Link1",to:"/"},n.a.createElement("img",{src:"../arrow.png"}),"\xa0MovieDetails"))),n.a.createElement("div",{className:"Section4"}),n.a.createElement("div",{className:"Section5"},n.a.createElement("img",{className:"Image1",src:"../tripledots.png"})),n.a.createElement("div",{className:"Section6"}),n.a.createElement("div",{className:"Section7"}),n.a.createElement("div",{className:"Section9"}),n.a.createElement("div",{className:"Section10"}),n.a.createElement("div",{className:"Section11"},n.a.createElement("div",{className:"Header2"},l.movie?l.movie.title:" No movies found. ")),n.a.createElement("div",{className:"Section12"}),n.a.createElement("div",{className:"Section13"}),n.a.createElement("div",{className:"Section14"}),n.a.createElement("div",{className:"Section15"}),n.a.createElement("div",{className:"Section16"},n.a.createElement("img",{className:"Image3",src:"http://image.tmdb.org/t/p/w154"+l.movie.posterPath,alt:l.movie.title})),n.a.createElement("div",{className:"Section17"}),n.a.createElement("div",{className:"Section18"},n.a.createElement("div",{className:"Section20"},n.a.createElement("div",{className:"Header3"},l.movie.releaseDate)),n.a.createElement("div",{className:"Section21"}),n.a.createElement("div",{className:"Section22"},n.a.createElement("div",{className:"Header4"},l.movie.minutes," mins")),n.a.createElement("div",{className:"Section23"}),n.a.createElement("div",{className:"Section24"},n.a.createElement("div",{className:"Header5"},l.movie.userRating,"/10")),n.a.createElement("div",{className:"Section25"}),n.a.createElement("div",{className:"Section26"},n.a.createElement("div",{className:"Rectangle"},n.a.createElement("div",{className:"Header6"},"MARK AS",n.a.createElement("br",null),"FAVORITE"))),n.a.createElement("div",{className:"Section27"})),n.a.createElement("div",{className:"Section19"}),n.a.createElement("div",{className:"Section28"}),n.a.createElement("div",{className:"Section30"},n.a.createElement("div",{className:"Header7"},l.movie.plot)),n.a.createElement("div",{className:"Section32"}),n.a.createElement("div",{className:"Section33"}),n.a.createElement("div",{className:"Section34"}),n.a.createElement("div",{className:"Section35"}),n.a.createElement("div",{className:"Section36"}),n.a.createElement("div",{className:"Section37"}),n.a.createElement("div",{className:"Section38"},n.a.createElement("div",{className:"Header8"},"Trailers:")),n.a.createElement("div",{className:"Section39"}),n.a.createElement("div",{className:"Section40"}),n.a.createElement("div",{className:"Section41"}),n.a.createElement("div",{className:"Section42"},n.a.createElement("a",{href:"https://www.youtube.com/watch?v="+v},n.a.createElement("img",{className:"Image4",src:"../playbutton.png"}))),n.a.createElement("div",{className:"Section43"}),n.a.createElement("div",{className:"Section44"},n.a.createElement("div",{className:"Header9"},"Trailer 1")),n.a.createElement("div",{className:"Section45"}),n.a.createElement("div",{className:"Section46"}),n.a.createElement("div",{className:"Section33"}),n.a.createElement("div",{className:"Section34"}),n.a.createElement("div",{className:"Section35"}),n.a.createElement("div",{className:"Section47"}),n.a.createElement("div",{className:"Section41"}),n.a.createElement("div",{className:"Section42"},n.a.createElement("a",{href:"https://www.youtube.com/watch?v="+u},n.a.createElement("img",{className:"Image4",src:"../playbutton.png"}))),n.a.createElement("div",{className:"Section43"}),n.a.createElement("div",{className:"Section44"},n.a.createElement("div",{className:"Header9"},"Trailer 2")),n.a.createElement("div",{className:"Section45"}),n.a.createElement("div",{className:"Section48"}))};var N=function(e){var a=e.APIkey;return n.a.createElement("div",{className:"Section1"},n.a.createElement(s.a,null,n.a.createElement(m.a,{exact:!0,path:"/",component:v}),n.a.createElement(m.a,{path:"/details/:movieID",component:E})),n.a.createElement("p",null,a))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.65aae294.chunk.js.map