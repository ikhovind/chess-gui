(()=>{"use strict";const r="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",e=["1-0","0-1","1/2-1/2","*"],n={b:[16,32,17,15],w:[-16,-32,-17,-15]},t={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},o=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],i=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],a={p:0,n:1,b:2,r:3,q:4,k:5},u={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},f={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},l={w:[{square:f.a1,flag:u.QSIDE_CASTLE},{square:f.h1,flag:u.KSIDE_CASTLE}],b:[{square:f.a8,flag:u.QSIDE_CASTLE},{square:f.h8,flag:u.KSIDE_CASTLE}]};function s(r){var e=r.charAt(0);if(e>="a"&&e<="h"){if(r.match(/[a-h]\d.*[a-h]\d/))return;return y}return"o"===(e=e.toLowerCase())?C:e}function c(r){return r.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function p(r){return r>>4}function v(r){return 15&r}function g(r){var e=v(r),n=p(r);return"abcdefgh".substring(e,e+1)+"87654321".substring(n,n+1)}function h(r){return r===E?m:E}function d(r){var e=r instanceof Array?[]:{};for(var n in r)e[n]="object"==typeof n?d(r[n]):r[n];return e}function b(r){return r.replace(/^\s+|\s+$/g,"")}const m="b",E="w",_=-1,y="p",C="k",S=(function(){for(var r=[],e=f.a8;e<=f.h1;e++)136&e?e+=7:r.push(g(e))}(),{NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"});var A=null,w=new function(A){var w=new Array(128),I={w:_,b:_},T=E,L={w:0,b:0},P=_,R=0,k=1,q=[],O={},N={};function D(r){void 0===r&&(r=!1),w=new Array(128),I={w:_,b:_},T=E,L={w:0,b:0},P=_,R=0,k=1,q=[],r||(O={}),N={},B($())}function Q(){for(var r=[],e={},n=function(r){r in N&&(e[r]=N[r])};q.length>0;)r.push(nr());for(n($());r.length>0;)er(r.pop()),n($());N=e}function U(){K(r)}function K(r,e){void 0===e&&(e=!1);var n=r.split(/\s+/),t=n[0],o=0;if(!x(r).valid)return!1;D(e);for(var i=0;i<t.length;i++){var a=t.charAt(i);if("/"===a)o+=8;else if(-1!=="0123456789".indexOf(a))o+=parseInt(a,10);else{var l=a<"a"?E:m;W({type:a.toLowerCase(),color:l},g(o)),o++}}return T=n[1],n[2].indexOf("K")>-1&&(L.w|=u.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(L.w|=u.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(L.b|=u.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(L.b|=u.QSIDE_CASTLE),P="-"===n[3]?_:f[n[3]],R=parseInt(n[4],10),k=parseInt(n[5],10),B($()),!0}function x(r){var e=r.split(/\s+/);if(6!==e.length)return{valid:!1,error_number:1,error:"FEN string must contain six space-delimited fields."};if(isNaN(parseInt(e[5]))||parseInt(e[5],10)<=0)return{valid:!1,error_number:2,error:"6th field (move number) must be a positive integer."};if(isNaN(parseInt(e[4]))||parseInt(e[4],10)<0)return{valid:!1,error_number:3,error:"5th field (half move counter) must be a non-negative integer."};if(!/^(-|[abcdefgh][36])$/.test(e[3]))return{valid:!1,error_number:4,error:"4th field (en-passant square) is invalid."};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(e[2]))return{valid:!1,error_number:5,error:"3rd field (castling availability) is invalid."};if(!/^(w|b)$/.test(e[1]))return{valid:!1,error_number:6,error:"2nd field (side to move) is invalid."};var n=e[0].split("/");if(8!==n.length)return{valid:!1,error_number:7,error:"1st field (piece positions) does not contain 8 '/'-delimited rows."};for(var t=0;t<n.length;t++){for(var o=0,i=!1,a=0;a<n[t].length;a++)if(isNaN(n[t][a])){if(!/^[prnbqkPRNBQK]$/.test(n[t][a]))return{valid:!1,error_number:9,error:"1st field (piece positions) is invalid [invalid piece]."};o+=1,i=!1}else{if(i)return{valid:!1,error_number:8,error:"1st field (piece positions) is invalid [consecutive numbers]."};o+=parseInt(n[t][a],10),i=!0}if(8!==o)return{valid:!1,error_number:10,error:"1st field (piece positions) is invalid [row too large]."}}return"3"==e[3][1]&&"w"==e[1]||"6"==e[3][1]&&"b"==e[1]?{valid:!1,error_number:11,error:"Illegal en-passant square"}:{valid:!0,error_number:0,error:"No errors."}}function $(){for(var r=0,e="",n=f.a8;n<=f.h1;n++){if(null==w[n])r++;else{r>0&&(e+=r,r=0);var t=w[n].color,o=w[n].type;e+=t===E?o.toUpperCase():o.toLowerCase()}n+1&136&&(r>0&&(e+=r),n!==f.h1&&(e+="/"),r=0,n+=8)}var i="";L[E]&u.KSIDE_CASTLE&&(i+="K"),L[E]&u.QSIDE_CASTLE&&(i+="Q"),L[m]&u.KSIDE_CASTLE&&(i+="k"),L[m]&u.QSIDE_CASTLE&&(i+="q"),i=i||"-";var a=P===_?"-":g(P);return[e,T,i,a,R,k].join(" ")}function j(r){for(var e=0;e<r.length;e+=2)"string"==typeof r[e]&&"string"==typeof r[e+1]&&(O[r[e]]=r[e+1]);return O}function B(e){q.length>0||(e!==r?(O.SetUp="1",O.FEN=e):(delete O.SetUp,delete O.FEN))}function M(r){var e=w[f[r]];return e?{type:e.type,color:e.color}:null}function W(r,e){if(!("type"in r)||!("color"in r))return!1;if(-1==="pnbrqkPNBRQK".indexOf(r.type.toLowerCase()))return!1;if(!(e in f))return!1;var n=f[e];return(r.type!=C||I[r.color]==_||I[r.color]==n)&&(w[n]={type:r.type,color:r.color},r.type===C&&(I[r.color]=n),B($()),!0)}function F(r,e,n,t,o){var i={color:T,from:e,to:n,flags:t,piece:r[e].type};return o&&(i.flags|=u.PROMOTION,i.promotion=o),r[n]?i.captured=r[n].type:t&u.EP_CAPTURE&&(i.captured=y),i}function G(r){function e(r,e,n,t,o){if(r[n].type!==y||0!==p(t)&&7!==p(t))e.push(F(r,n,t,o));else for(var i=["q","r","b","n"],a=0,u=i.length;a<u;a++)e.push(F(r,n,t,o,i[a]))}var o=[],i=T,a=h(i),l={b:1,w:6},s=f.a8,c=f.h1,v=!1,g=void 0===r||!("legal"in r)||r.legal,d=void 0===r||!("piece"in r)||"string"!=typeof r.piece||r.piece.toLowerCase();if(void 0!==r&&"square"in r){if(!(r.square in f))return[];s=c=f[r.square],v=!0}for(var b=s;b<=c;b++)if(136&b)b+=7;else{var m=w[b];if(null!=m&&m.color===i)if(m.type!==y||!0!==d&&d!==y){if(!0===d||d===m.type)for(var E=0,_=t[m.type].length;E<_;E++){var S=t[m.type][E];for(A=b;!(136&(A+=S));){if(null!=w[A]){if(w[A].color===i)break;e(w,o,b,A,u.CAPTURE);break}if(e(w,o,b,A,u.NORMAL),"n"===m.type||"k"===m.type)break}}}else{var A=b+n[i][0];if(null==w[A]){e(w,o,b,A,u.NORMAL);A=b+n[i][1];l[i]===p(b)&&null==w[A]&&e(w,o,b,A,u.BIG_PAWN)}for(E=2;E<4;E++)136&(A=b+n[i][E])||(null!=w[A]&&w[A].color===a?e(w,o,b,A,u.CAPTURE):A===P&&e(w,o,b,P,u.EP_CAPTURE))}}if(!(!0!==d&&d!==C||v&&c!==I[i])){if(L[i]&u.KSIDE_CASTLE){var R=(k=I[i])+2;null!=w[k+1]||null!=w[R]||Z(a,I[i])||Z(a,k+1)||Z(a,R)||e(w,o,I[i],R,u.KSIDE_CASTLE)}var k;if(L[i]&u.QSIDE_CASTLE)R=(k=I[i])-2,null!=w[k-1]||null!=w[k-2]||null!=w[k-3]||Z(a,I[i])||Z(a,k-1)||Z(a,R)||e(w,o,I[i],R,u.QSIDE_CASTLE)}if(!g)return o;var q=[];for(b=0,_=o.length;b<_;b++)er(o[b]),H(i)||q.push(o[b]),nr();return q}function z(r,e){var n="";if(r.flags&u.KSIDE_CASTLE)n="O-O";else if(r.flags&u.QSIDE_CASTLE)n="O-O-O";else{if(r.piece!==y){var t=function(r,e){for(var n=r.from,t=r.to,o=r.piece,i=0,a=0,u=0,f=0,l=e.length;f<l;f++){var s=e[f].from,c=e[f].to;o===e[f].piece&&n!==s&&t===c&&(i++,p(n)===p(s)&&a++,v(n)===v(s)&&u++)}return i>0?a>0&&u>0?g(n):u>0?g(n).charAt(1):g(n).charAt(0):""}(r,e);n+=r.piece.toUpperCase()+t}r.flags&(u.CAPTURE|u.EP_CAPTURE)&&(r.piece===y&&(n+=g(r.from)[0]),n+="x"),n+=g(r.to),r.flags&u.PROMOTION&&(n+="="+r.promotion.toUpperCase())}return er(r),J()&&(V()?n+="#":n+="+"),nr(),n}function Z(r,e){for(var n=f.a8;n<=f.h1;n++)if(136&n)n+=7;else if(null!=w[n]&&w[n].color===r){var t=w[n],u=n-e,l=u+119;if(o[l]&1<<a[t.type]){if(t.type===y){if(u>0){if(t.color===E)return!0}else if(t.color===m)return!0;continue}if("n"===t.type||"k"===t.type)return!0;for(var s=i[l],c=n+s,p=!1;c!==e;){if(null!=w[c]){p=!0;break}c+=s}if(!p)return!0}}return!1}function H(r){return Z(h(r),I[r])}function J(){return H(T)}function V(){return J()&&0===G().length}function X(){return!J()&&0===G().length}function Y(){for(var r={},e=[],n=0,t=0,o=f.a8;o<=f.h1;o++)if(t=(t+1)%2,136&o)o+=7;else{var i=w[o];i&&(r[i.type]=i.type in r?r[i.type]+1:1,"b"===i.type&&e.push(t),n++)}if(2===n)return!0;if(3===n&&(1===r.b||1===r.n))return!0;if(n===r.b+2){var a=0,u=e.length;for(o=0;o<u;o++)a+=e[o];if(0===a||a===u)return!0}return!1}function rr(){for(var r=[],e={},n=!1;;){var t=nr();if(!t)break;r.push(t)}for(;;){var o=$().split(" ").slice(0,4).join(" ");if(e[o]=o in e?e[o]+1:1,e[o]>=3&&(n=!0),!r.length)break;er(r.pop())}return n}function er(r){var e=T,n=h(e);if(function(r){q.push({move:r,kings:{b:I.b,w:I.w},turn:T,castling:{b:L.b,w:L.w},ep_square:P,half_moves:R,move_number:k})}(r),w[r.to]=w[r.from],w[r.from]=null,r.flags&u.EP_CAPTURE&&(T===m?w[r.to-16]=null:w[r.to+16]=null),r.flags&u.PROMOTION&&(w[r.to]={type:r.promotion,color:e}),w[r.to].type===C){if(I[w[r.to].color]=r.to,r.flags&u.KSIDE_CASTLE){var t=r.to-1,o=r.to+1;w[t]=w[o],w[o]=null}else r.flags&u.QSIDE_CASTLE&&(t=r.to+1,o=r.to-2,w[t]=w[o],w[o]=null);L[e]=""}if(L[e])for(var i=0,a=l[e].length;i<a;i++)if(r.from===l[e][i].square&&L[e]&l[e][i].flag){L[e]^=l[e][i].flag;break}if(L[n])for(i=0,a=l[n].length;i<a;i++)if(r.to===l[n][i].square&&L[n]&l[n][i].flag){L[n]^=l[n][i].flag;break}P=r.flags&u.BIG_PAWN?"b"===T?r.to-16:r.to+16:_,r.piece===y||r.flags&(u.CAPTURE|u.EP_CAPTURE)?R=0:R++,T===m&&k++,T=h(T)}function nr(){var r=q.pop();if(null==r)return null;var e=r.move;I=r.kings,T=r.turn,L=r.castling,P=r.ep_square,R=r.half_moves,k=r.move_number;var n,t,o=T,i=h(T);if(w[e.from]=w[e.to],w[e.from].type=e.piece,w[e.to]=null,e.flags&u.CAPTURE)w[e.to]={type:e.captured,color:i};else if(e.flags&u.EP_CAPTURE){var a;a=o===m?e.to-16:e.to+16,w[a]={type:y,color:i}}return e.flags&(u.KSIDE_CASTLE|u.QSIDE_CASTLE)&&(e.flags&u.KSIDE_CASTLE?(n=e.to+1,t=e.to-1):e.flags&u.QSIDE_CASTLE&&(n=e.to-2,t=e.to+1),w[n]=w[t],w[t]=null),e}function tr(r,e){for(var n=c(r),t=0;t<2;t++){if(1==t){if(!e)return null;var o=!1;if(p=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/)){var i=p[1],a=p[2],u=p[3],l=p[4];1==a.length&&(o=!0)}else{var p;(p=n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/))&&(i=p[1],a=p[2],u=p[3],l=p[4],1==a.length&&(o=!0))}}for(var v=s(n),h=G({legal:!0,piece:i||v}),d=0,b=h.length;d<b;d++)switch(t){case 0:if(n===c(z(h[d],h)))return h[d];break;case 1:if(p){if(!(i&&i.toLowerCase()!=h[d].piece||f[a]!=h[d].from||f[u]!=h[d].to||l&&l.toLowerCase()!=h[d].promotion))return h[d];if(o){var m=g(h[d].from);if(!(i&&i.toLowerCase()!=h[d].piece||f[u]!=h[d].to||a!=m[0]&&a!=m[1]||l&&l.toLowerCase()!=h[d].promotion))return h[d]}}}}return null}function or(r){var e=d(r);e.san=z(e,G({legal:!0})),e.to=g(e.to),e.from=g(e.from);var n="";for(var t in u)u[t]&e.flags&&(n+=S[t]);return e.flags=n,e}function ir(r){for(var e=G({legal:!1}),n=0,t=T,o=0,i=e.length;o<i;o++)er(e[o]),H(t)||(r-1>0?n+=ir(r-1):n++),nr();return n}return K(r),{load:function(r){return K(r)},reset:function(){return U()},moves:function(r){for(var e=G(r),n=[],t=0,o=e.length;t<o;t++)void 0!==r&&"verbose"in r&&r.verbose?n.push(or(e[t])):n.push(z(e[t],G({legal:!0})));return n},in_check:function(){return J()},in_checkmate:function(){return V()},in_stalemate:function(){return X()},in_draw:function(){return R>=100||X()||Y()||rr()},insufficient_material:function(){return Y()},in_threefold_repetition:function(){return rr()},game_over:function(){return R>=100||V()||X()||Y()||rr()},validate_fen:function(r){return x(r)},fen:function(){return $()},board:function(){for(var r=[],e=[],n=f.a8;n<=f.h1;n++)null==w[n]?e.push(null):e.push({square:g(n),type:w[n].type,color:w[n].color}),n+1&136&&(r.push(e),e=[],n+=8);return r},pgn:function(r){var e="object"==typeof r&&"string"==typeof r.newline_char?r.newline_char:"\n",n="object"==typeof r&&"number"==typeof r.max_width?r.max_width:0,t=[],o=!1;for(var i in O)t.push("["+i+' "'+O[i]+'"]'+e),o=!0;o&&q.length&&t.push(e);for(var a=function(r){var e=N[$()];return void 0!==e&&(r=`${r}${r.length>0?" ":""}{${e}}`),r},u=[];q.length>0;)u.push(nr());var f=[],l="";for(0===u.length&&f.push(a(""));u.length>0;){l=a(l);var s=u.pop();q.length||"b"!==s.color?"w"===s.color&&(l.length&&f.push(l),l=k+"."):l=k+". ...",l=l+" "+z(s,G({legal:!0})),er(s)}if(l.length&&f.push(a(l)),void 0!==O.Result&&f.push(O.Result),0===n)return t.join("")+f.join(" ");var c=function(){return t.length>0&&" "===t[t.length-1]&&(t.pop(),!0)},p=function(r,o){for(var i of o.split(" "))if(i){if(r+i.length>n){for(;c();)r--;t.push(e),r=0}t.push(i),r+=i.length,t.push(" "),r++}return c()&&r--,r},v=0;for(i=0;i<f.length;i++)v+f[i].length>n&&f[i].includes("{")?v=p(v,f[i]):(v+f[i].length>n&&0!==i?(" "===t[t.length-1]&&t.pop(),t.push(e),v=0):0!==i&&(t.push(" "),v++),t.push(f[i]),v+=f[i].length);return t.join("")},load_pgn:function(r,n){var t=void 0!==n&&"sloppy"in n&&n.sloppy;function o(r){return r.replace(/\\/g,"\\")}r=r.trim();var i="object"==typeof n&&"string"==typeof n.newline_char?n.newline_char:"\r?\n",a=new RegExp("^(\\[((?:"+o(i)+")|.)*\\])(?:\\s*"+o(i)+"){2}"),u=a.test(r)?a.exec(r)[1]:"";U();var f=function(r,e){for(var n="object"==typeof e&&"string"==typeof e.newline_char?e.newline_char:"\r?\n",t={},i=r.split(new RegExp(o(n))),a="",u="",f=0;f<i.length;f++){var l=/^\s*\[([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;a=i[f].replace(l,"$1"),u=i[f].replace(l,"$2"),b(a).length>0&&(t[a]=u)}return t}(u,n),l="";for(var s in f)"fen"===s.toLowerCase()&&(l=f[s]),j([s,f[s]]);if(t){if(l&&!K(l,!0))return!1}else if(!("1"!==f.SetUp||"FEN"in f&&K(f.FEN,!0)))return!1;for(var c=function(r){return`{${function(r){return Array.from(r).map((function(r){return r.charCodeAt(0)<128?r.charCodeAt(0).toString(16):encodeURIComponent(r).replace(/\%/g,"").toLowerCase()})).join("")}((r=r.replace(new RegExp(o(i),"g")," ")).slice(1,r.length-1))}}`},p=function(r){if(r.startsWith("{")&&r.endsWith("}"))return function(r){return 0==r.length?"":decodeURIComponent("%"+r.match(/.{1,2}/g).join("%"))}(r.slice(1,r.length-1))},v=r.replace(u,"").replace(new RegExp(`({[^}]*})+?|;([^${o(i)}]*)`,"g"),(function(r,e,n){return void 0!==e?c(e):" "+c(`{${n.slice(1)}}`)})).replace(new RegExp(o(i),"g")," "),g=/(\([^\(\)]+\))+?/g;g.test(v);)v=v.replace(g,"");var h=b(v=(v=(v=v.replace(/\d+\.(\.\.)?/g,"")).replace(/\.\.\./g,"")).replace(/\$\d+/g,"")).split(new RegExp(/\s+/));h=h.join(",").replace(/,,+/g,",").split(",");for(var d="",m="",E=0;E<h.length;E++){var _=p(h[E]);if(void 0===_)if(null==(d=tr(h[E],t))){if(!(e.indexOf(h[E])>-1))return!1;m=h[E]}else m="",er(d);else N[$()]=_}return m&&Object.keys(O).length&&!O.Result&&j(["Result",m]),!0},header:function(){return j(arguments)},turn:function(){return T},move:function(r,e){var n=void 0!==e&&"sloppy"in e&&e.sloppy,t=null;if("string"==typeof r)t=tr(r,n);else if("object"==typeof r)for(var o=G(),i=0,a=o.length;i<a;i++)if(r.from===g(o[i].from)&&r.to===g(o[i].to)&&(!("promotion"in o[i])||r.promotion===o[i].promotion)){t=o[i];break}if(!t)return null;var u=or(t);return er(t),u},undo:function(){var r=nr();return r?or(r):null},clear:function(){return D()},put:function(r,e){return W(r,e)},get:function(r){return M(r)},ascii(){for(var r="   +------------------------+\n",e=f.a8;e<=f.h1;e++){if(0===v(e)&&(r+=" "+"87654321"[p(e)]+" |"),null==w[e])r+=" . ";else{var n=w[e].type;r+=" "+(w[e].color===E?n.toUpperCase():n.toLowerCase())+" "}e+1&136&&(r+="|\n",e+=8)}return(r+="   +------------------------+\n")+"     a  b  c  d  e  f  g  h"},remove:function(r){return function(r){var e=M(r);return w[f[r]]=null,e&&e.type===C&&(I[e.color]=_),B($()),e}(r)},perft:function(r){return ir(r)},square_color:function(r){if(r in f){var e=f[r];return(p(e)+v(e))%2==0?"light":"dark"}return null},history:function(r){for(var e=[],n=[],t=(void 0!==r&&"verbose"in r&&r.verbose);q.length>0;)e.push(nr());for(;e.length>0;){var o=e.pop();t?n.push(or(o)):n.push(z(o,G({legal:!0}))),er(o)}return n},get_comment:function(){return N[$()]},set_comment:function(r){N[$()]=r.replace("{","[").replace("}","]")},delete_comment:function(){var r=N[$()];return delete N[$()],r},get_comments:function(){return Q(),Object.keys(N).map((function(r){return{fen:r,comment:N[r]}}))},delete_comments:function(){return Q(),Object.keys(N).map((function(r){var e=N[r];return delete N[r],{fen:r,comment:e}}))}}};function I(){$("#myBoard .square-55d63").css("background","")}function T(r){var e=$("#myBoard .square-"+r),n="#a9a9a9";e.hasClass("black-3c85d")&&(n="#696969"),e.css("background",n)}var L={draggable:!0,position:"start",onDragStart:function(r,e){return!w.game_over()&&!("w"===w.turn()&&-1!==e.search(/^b/)||"b"===w.turn()&&-1!==e.search(/^w/))&&void 0},onDrop:function(r,e){if(I(),null===w.move({from:r,to:e,promotion:"q"}))return"snapback"},onMouseoutSquare:function(r,e){I()},onMouseoverSquare:function(r,e){var n=w.moves({square:r,verbose:!0});if(0!==n.length){T(r);for(var t=0;t<n.length;t++)T(n[t].to)}},onSnapEnd:function(){A.position(w.fen())}};document.body.appendChild((A=Chessboard("myBoard",L),document.getElementById("myBoard")))})();