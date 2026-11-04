(()=>{function yr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Nm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Co={duration:.5,overwrite:!1,delay:0},qf,Mn,Bt,Ii=1e8,Ct=1/Ii,Bf=Math.PI*2,ny=Bf/4,iy=0,Um=Math.sqrt,ry=Math.cos,sy=Math.sin,cn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},Uc=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Yf=function(){return typeof window<"u"},Tc=function(e){return Zt(e)||cn(e)},Om=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,ay=/random\([^)]+\)/g,oy=/,\s*/g,Em=/(?:-?\.?\d|\.)+/gi,Zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,If=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jf=/[+-]=-?[.\d]+/,ly=/[^,'"\[\]\s]+/gi,cy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,er,kf,$f,di={},Cc={},Fm,Bm=function(e){return(Cc=oa(e,di))&&Dn},Oc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ro=function(e,t){return!t&&console.warn(e)},km=function(e,t){return e&&(di[e]=t)&&Cc&&(Cc[e]=t)||di},Po=function(){return 0},uy={suppressEvents:!0,isStart:!0,kill:!1},wc={suppressEvents:!0,kill:!1},hy={suppressEvents:!0},Kf={},Zr=[],zf={},zm,ni={},Lf={},Am=30,Ec=[],Qf="",jf=function(e){var t=e[0],n,i;if(nr(t)||Zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ec.length;i--&&!Ec[i].targetTest(t););n=Ec[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new id(e[i],n)))||e.splice(i,1);return e},Jr=function(e){return e._gsap||jf(Li(e))[0]._gsap},ed=function(e,t,n){return(n=e[t])&&Zt(n)?e[t]():Uc(n)&&e.getAttribute&&e.getAttribute(t)||n},Wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},fy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Rc=function(){var e=Zr.length,t=Zr.slice(0),n,i;for(zf={},Zr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},td=function(e){return!!(e._initted||e._startAt||e.add)},Gm=function(e,t,n,i){Zr.length&&!Mn&&Rc(),e.render(t,n,i||!!(Mn&&t<0&&td(e))),Zr.length&&!Mn&&Rc()},Vm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ly).length<2?t:cn(e)?e.trim():e},Hm=function(e){return e},pi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},oa=function(e,t){for(var n in t)e[n]=t[n];return e},Cm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=nr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Pc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wo=function(e){var t=e.parent||Vt,n=e.keyframes?dy(Ln(e.keyframes)):pi;if(ri(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},py=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Wm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Fc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},$r=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ws=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},my=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gf=function(e,t,n,i){return e._startAt&&(Mn?e._startAt.revert(wc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},gy=function r(e){return!e||e._ts&&r(e.parent)},Rm=function(e){return e._repeat?la(e._tTime,e=e.duration()+e._rDelay)*e:0},la=function(e,t){var n=Math.floor(e=Gt(e/t));return e&&n===e?n-1:n},Ic=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bc=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},kc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bc(e),n._dirty||ws(n,e)),e},Xm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ic(e.rawTime(),t),(!t._dur||No(0,t.totalDuration(),n)-t._tTime>Ct)&&t.render(n,!0)),ws(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ct}},tr=function(e,t,n,i){return t.parent&&$r(t),t._start=Gt((Sr(n)?n:!n&&Lc(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Vt?Pi(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Wm(e,t,"_first","_last",e._sort?"_start":0),Lc(t)||(e._recent=t),i||Xm(e,t),e._ts<0&&kc(e,e._tTime),e},qm=function(e,t){return(di.ScrollTrigger||Oc("scrollTrigger",t))&&di.ScrollTrigger.create(t,e)},Ym=function(e,t,n,i,s){if(ad(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&zm!==ii.frame)return Zr.push(e),e._lazy=[s,i],1},_y=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Lc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xy=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&_y(e)&&!(!e._initted&&Lc(e))||(e._ts<0||e._dp._ts<0)&&!Lc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=No(0,e._tDur,t),u=la(l,o),e._yoyo&&u&1&&(a=1-a),u!==la(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Mn||i||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&Ym(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ct:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Gf(e,t,n,!0),e._onUpdate&&!n&&fi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&fi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&$r(e,1),!n&&!Mn&&(fi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ca=function(e,t,n,i){var s=e._repeat,a=Gt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Gt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&kc(e,e._tTime=e._tDur*o),e.parent&&Bc(e),n||ws(e.parent,e),e},Pm=function(e){return e instanceof In?ws(e):ca(e,e._dur)},vy={_start:0,endTime:Po,totalDuration:Po},Pi=function r(e,t,n){var i=e.labels,s=e._recent||vy,a=e.duration()>=Ii?s.endTime(!1):e._dur,o,l,c;return cn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ln(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Eo=function(e,t,n){var i=Sr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;a.immediateRender=ri(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Qt(t[0],a,t[s+1])},Kr=function(e,t){return e||e===0?t(e):t},No=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!cn(e)||!(t=cy.exec(e))?"":t[1]},Sy=function(e,t,n){return Kr(n,function(i){return No(e,t,i)})},Vf=[].slice,Zm=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==er},My=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return cn(i)&&!t||Zm(i,1)?(s=n).push.apply(s,Li(i)):n.push(i)})||n},Li=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):cn(e)&&!n&&(kf||!ua())?Vf.call((t||$f).querySelectorAll(e),0):Ln(e)?My(e,n):Zm(e)?Vf.call(e,0):e?[e]:[]},Hf=function(e){return e=Li(e)[0]||Ro("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Li(t,n.querySelectorAll?n:n===e?Ro("Invalid scope")||$f.createElement("div"):e)}},Jm=function(e){return e.sort(function(){return .5-Math.random()})},$m=function(e){if(Zt(e))return e;var t=nr(e)?e:{each:e},n=Es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return cn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,p){var _=(p||t).length,m=a[_],g,v,M,y,b,w,x,S,I;if(!m){if(I=t.grid==="auto"?0:(t.grid||[1,Ii])[1],!I){for(x=-Ii;x<(x=p[I++].getBoundingClientRect().left)&&I<_;);I<_&&I--}for(m=a[_]=[],g=l?Math.min(I,_)*u-.5:i%I,v=I===Ii?0:l?_*d/I-.5:i/I|0,x=0,S=Ii,w=0;w<_;w++)M=w%I-g,y=v-(w/I|0),m[w]=b=c?Math.abs(c==="y"?y:M):Um(M*M+y*y),b>x&&(x=b),b<S&&(S=b);i==="random"&&Jm(m),m.max=x-S,m.min=S,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(I>_?_-1:c?c==="y"?_/I:I:Math.max(I,_/I))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,n=n&&_<0?Uy(n):n}return _=(m[h]-m.min)/m.max||0,Gt(m.b+(n?n(_):_)*m.v)+m.u}},Wf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Sr(n)?0:bn(n))}},Km=function(e,t){var n=Ln(e),i,s;return!n&&nr(e)&&(i=n=e.radius||Ii,e.values?(e=Li(e.values),(s=!Sr(e[0]))&&(i*=i)):e=Wf(e.increment)),Kr(t,n?Zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ii,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Sr(a)?u:u+bn(a)}:Wf(e))},Qm=function(e,t,n,i){return Kr(Ln(e)?!t:n===!0?!!(n=0):!i,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},by=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Ty=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},wy=function(e,t,n){return eg(e,t,0,1,n)},jm=function(e,t,n){return Kr(n,function(i){return e[~~t(i)]})},Ey=function r(e,t,n){var i=t-e;return Ln(e)?jm(e,r(0,e.length),t):Kr(n,function(s){return(i+(s-e)%i)%i+e})},Ay=function r(e,t,n){var i=t-e,s=i*2;return Ln(e)?jm(e,r(0,e.length-1),t):Kr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ha=function(e){return e.replace(ay,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(oy);return Qm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},eg=function(e,t,n,i,s){var a=t-e,o=i-n;return Kr(s,function(l){return n+((l-e)/a*o||0)})},Cy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=cn(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=oa(Ln(e)?[]:{},e));if(!u){for(l in t)rd.call(o,e,l,"get",t[l]);s=function(p){return cd(p,o)||(a?e.p:e)}}}return Kr(n,s)},Im=function(e,t,n){var i=e.labels,s=Ii,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},fi=function(e,t,n){var i=e.vars,s=i[t],a=Bt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Zr.length&&Rc(),o&&(Bt=o),u=l?s.apply(c,l):s.call(c),Bt=a,u},bo=function(e){return $r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&fi(e,"onInterrupt"),e},aa,tg=[],ng=function(e){if(e)if(e=!e.name&&e.default||e,Yf()||e.headless){var t=e.name,n=Zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Po,render:cd,add:rd,kill:Xy,modifier:Wy,rawVars:0},a={targetTest:0,get:0,getSetter:zc,aliases:{},register:0};if(ua(),e!==i){if(ni[t])return;pi(i,pi(Pc(e,s),a)),oa(i.prototype,oa(s,Pc(e,a))),ni[i.prop=t]=i,e.targetTest&&(Ec.push(i),Kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}km(t,i),e.register&&e.register(Dn,i,Xn)}else tg.push(e)},Lt=255,To={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},Df=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},ig=function(e,t,n){var i=e?Sr(e)?[e>>16,e>>8&Lt,e&Lt]:0:To.black,s,a,o,l,c,u,d,h,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),To[e])i=To[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Lt,i&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Em),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Df(l+1/3,s,a),i[1]=Df(l,s,a),i[2]=Df(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Zf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Em)||To.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Lt,a=i[1]/Lt,o=i[2]/Lt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},rg=function(e){var t=[],n=[],i=-1;return e.split(vr).forEach(function(s){var a=s.match(Cs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Lm=function(e,t,n){var i="",s=(e+i).match(vr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=ig(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=rg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vr,"1").split(Cs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},vr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in To)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Ry=/hsl[a]?\(/,nd=function(e){var t=e.join(" "),n;if(vr.lastIndex=0,vr.test(t))return n=Ry.test(t),e[1]=Lm(e[1],n),e[0]=Lm(e[0],n,rg(e[1])),!0},Io,ii=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,p=function _(m){var g=r()-i,v=m===!0,M,y,b,w;if((g>e||g<0)&&(n+=g-t),i+=g,b=i-n,M=b-a,(M>0||v)&&(w=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,a+=M+(M>=s?0:s-M),y=1),v||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](b,h,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Fm&&(!kf&&Yf()&&(er=kf=window,$f=er.document||{},di.gsap=Dn,(er.gsapVersions||(er.gsapVersions=[])).push(Dn.version),Bm(Cc||er.GreenSockGlobals||!er.gsap&&er||{}),tg.forEach(ng)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Io=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Io=0,c=Po},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,g,v){var M=g?function(y,b,w,x){m(y,b,w,x),d.remove(M)}:m;return d.remove(m),o[v?"unshift":"push"](M),ua(),M},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},d})(),ua=function(){return!Io&&ii.wake()},_t={},Py=/^[\d.\-M][\d.\-,\s]/,Iy=/["']/g,Ly=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Iy,"").trim():+c,i=l.substr(o+1).trim();return t},Dy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ny=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ly(t[1])]:Dy(e).split(",").map(Vm)):_t._CE&&Py.test(e)?_t._CE("",e):n},Uy=function(e){return function(t){return 1-e(1-t)}},Es=function(e,t){return e&&(Zt(e)?e:_t[e]||Ny(e))||t},Ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Wn(e,function(o){_t[o]=di[o]=s,_t[a=o.toLowerCase()]=n;for(var l in s)_t[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[o+"."+l]=s[l]}),s},sg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Bf*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*sy((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:sg(o);return s=Bf/s,l.config=function(c,u){return r(e,c,u)},l},Uf=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:sg(n);return i.config=function(s){return r(e,s)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ps(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Ps("Elastic",Nf("in"),Nf("out"),Nf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ps("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ps("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ps("Circ",function(r){return-(Um(1-r*r)-1)});Ps("Sine",function(r){return r===1?1:-ry(r*ny)+1});Ps("Back",Uf("in"),Uf("out"),Uf());_t.SteppedEase=_t.steps=di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ct;return function(o){return((i*No(0,a,o)|0)+s)*n}}};Co.ease=_t["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qf+=r+","+r+"Params,"});var id=function(e,t){this.id=iy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ed,this.set=t?t.getSetter:zc},Lo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ca(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Io||ii.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ca(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ua(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kc(this,n),!s._dp||s.parent||Xm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Rm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Rm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?la(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ic(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Ct?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(No(-Math.abs(this._delay),o,s),i!==!1),Bc(this),my(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ua(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Ct,a;if(s)for(this._tTime-=Ct,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Ct){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Gt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ic(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=hy);var i=Mn;return Mn=n,td(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Pm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Pm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Pi(this,n),ri(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ri(i)),this._dur||(this._zTime=-Ct),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ct)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Zt(n)?n:Hm,l=function(){var u=i.then;i.then=null,s&&s(),Zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){bo(this)},r})();pi(Lo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var In=(function(r){Nm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ri(n.sortChildren),Vt&&tr(n.parent||Vt,yr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&qm(yr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Eo(0,arguments,this),this},t.from=function(i,s,a){return Eo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Eo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,Pi(this,a),1),this},t.call=function(i,s,a){return tr(this,Qt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Qt(i,a,Pi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,wo(a).immediateRender=ri(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,wo(o).immediateRender=ri(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Gt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,p,_,m,g,v,M,y,b,w,x;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,M=this._ts,g=!M,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Gt(u%m),u===l?(_=this._repeat,h=c):(b=Gt(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=la(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(h=c-h,x=1),_!==b&&!this._lock){var S=w&&b&1,I=S===(w&&_&1);if(_<b&&(S=!S),o=S?0:u%c?c:u,this._lock=1,this.render(o||(x?0:Gt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&fi(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=yy(this,Gt(o),Gt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!b&&(fi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=-Ct);break}}f=p}else{f=this._last;for(var A=i<0?i:h;f;){if(p=f._prev,(f._act||A<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,a||Mn&&td(f)),h!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=A?-Ct:Ct);break}}f=p}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Ct)._zTime=h>=o?1:-1,this._ts))return this._start=y,Bc(this),this.render(i,s,a);this._onUpdate&&!s&&fi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$r(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(fi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Sr(s)||(s=Pi(this,s,i)),!(i instanceof Lo)){if(Ln(i))return i.forEach(function(o){return a.add(o,s)}),this;if(cn(i))return this.addLabel(i,s);if(Zt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?tr(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ii);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Qt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return cn(i)?this.removeLabel(i):Zt(i)?this.killTweensOf(i):(i.parent===this&&Fc(this,i),i===this._recent&&(this._recent=this._last),ws(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Pi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Qt.delayedCall(0,s||Po,a);return o.data="isPause",this._hasPause=1,tr(this,o,Pi(this,i))},t.removePause=function(i){var s=this._first;for(i=Pi(this,i);s;)s._start===i&&s.data==="isPause"&&$r(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Yr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Li(i),l=this._first,c=Sr(s),u;l;)l instanceof Qt?fy(l._targets,o)&&(c?(!Yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Pi(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,p=Qt.to(a,pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ct,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&ca(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,d||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,pi({startAt:{time:Pi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Im(this,Pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Im(this,Pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Gt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ws(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ws(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ii,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,tr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Gt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ca(a,a===Vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Vt._ts&&(Gm(Vt,Ic(i,Vt)),zm=ii.frame),ii.frame>=Am){Am+=si.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&si.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e})(Lo);pi(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var Oy=function(e,t,n,i,s,a,o){var l=new Xn(this._pt,e,t,0,1,ld,null,s),c=0,u=0,d,h,f,p,_,m,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=ha(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(If)||[];d=If.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Rs(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=If.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Jf.test(i)||g)&&(l.e=0),this._pt=l,l},rd=function(e,t,n,i,s,a,o,l,c,u){Zt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Zt(d)?c?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Zt(d)?c?Gy:og:od,p;if(cn(i)&&(~i.indexOf("random(")&&(i=ha(i)),i.charAt(1)==="="&&(p=Rs(h,i)+(bn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||Xf)return!isNaN(h*i)&&i!==""?(p=new Xn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?Hy:lg,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&Oc(t,i),Oy.call(this,e,t,h,i,f,l||si.stringFilter,c))},Fy=function(e,t,n,i,s){if(Zt(e)&&(e=Ao(e,s,t,n,i)),!nr(e)||e.style&&e.nodeType||Ln(e)||Om(e))return cn(e)?Ao(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ao(e[o],s,t,n,i);return a},sd=function(e,t,n,i,s,a){var o,l,c,u;if(ni[e]&&(o=new ni[e]).init(s,o.rawVars?t[e]:Fy(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Xn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==aa))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Yr,Xf,ad=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!qf,y=e.timeline,b=i.easeReverse||d,w,x,S,I,A,V,O,j,N,K,te,H,J;if(y&&(!h||!s)&&(s="none"),e._ease=Es(s,Co.ease),e._rEase=b&&(Es(b)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||h&&!i.stagger){if(j=m[0]?Jr(m[0]).harness:0,H=j&&i[j.prop],w=Pc(i,Kf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&p?wc:uy),_._lazy=0),a){if($r(e._startAt=Qt.set(m,pi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return fi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!o&&!f)&&e._startAt.revert(wc),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(o=!1),S=pi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ri(l),immediateRender:o,stagger:0,parent:g},w),H&&(S[j.prop]=H),$r(e._startAt=Qt.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(wc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ri(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],O=A._gsap||jf(m)[x]._gsap,e._ptLookup[x]=K={},zf[O.id]&&Zr.length&&Rc(),te=v===m?x:v.indexOf(A),j&&(N=new j).init(A,H||w,e,te,v)!==!1&&(e._pt=I=new Xn(e._pt,A,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(ee){K[ee]=I}),N.priority&&(V=1)),!j||H)for(S in w)ni[S]&&(N=sd(S,w,e,te,A,v))?N.priority&&(V=1):K[S]=I=rd.call(e,A,S,"get",w[S],te,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(A,e._op[x]),M&&e._pt&&(Yr=e,Vt.killTweensOf(A,K,e.globalTime(t)),J=!e.parent,Yr=0),e._pt&&l&&(zf[O.id]=1)}V&&ud(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,h&&t<=0&&y.render(Ii,!0,!0)},By=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Xf=1,e.vars[t]="+=0",ad(e,o),Xf=0,l?Ro(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Jt(n)+bn(d.e)),d.b&&(d.b=u.s+bn(d.b))},ky=function(e,t){var n=e[0]?Jr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=oa({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},zy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Ln(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ao=function(e,t,n,i,s){return Zt(e)?e.call(t,n,i,s):cn(e)&&~e.indexOf("random(")?ha(e):e},Dc=Qf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ag={};Wn(Dc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ag[r]=1});Dc=Dc.split(",");var Qt=(function(r){Nm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:wo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Vt,v=(Ln(n)||Om(n)?Sr(n[0]):"length"in i)?[n]:Li(n),M,y,b,w,x,S,I,A;if(o._targets=v.length?jf(v):Ro("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,p||h||Tc(c)||Tc(u)){i=o.vars;var V=i.easeReverse||i.yoyoEase;if(M=o.timeline=new In({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),M.kill(),M.parent=M._dp=yr(o),M._start=0,h||Tc(c)||Tc(u)){if(w=v.length,I=h&&$m(h),nr(h))for(x in h)~Dc.indexOf(x)&&(A||(A={}),A[x]=h[x]);for(y=0;y<w;y++)b=Pc(i,ag),b.stagger=0,V&&(b.easeReverse=V),A&&oa(b,A),S=v[y],b.duration=+Ao(c,yr(o),y,S,v),b.delay=(+Ao(u,yr(o),y,S,v)||0)-o._delay,!h&&w===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),M.to(S,b,I?I(y,S,v):0),M._ease=_t.none;M.duration()?c=u=0:o.timeline=0}else if(p){wo(pi(M.vars.defaults,{ease:"none"})),M._ease=Es(p.ease||i.ease||"none");var O=0,j,N,K;if(Ln(p))p.forEach(function(te){return M.to(v,te,">")}),M.duration();else{b={};for(x in p)x==="ease"||x==="easeEach"||zy(x,p[x],b,p.easeEach);for(x in b)for(j=b[x].sort(function(te,H){return te.t-H.t}),O=0,y=0;y<j.length;y++)N=j[y],K={ease:N.e,duration:(N.t-(y?j[y-1].t:0))/100*c},K[x]=N.v,M.to(v,K,O),O+=K.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return f===!0&&!qf&&(Yr=yr(o),Vt.killTweensOf(v),Yr=0),tr(g,yr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===Gt(g._time)&&ri(d)&&gy(yr(o))&&g.data!=="nested")&&(o._tTime=-Ct,o.render(Math.max(0,-u)||0)),m&&qm(yr(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Ct&&!u?l:i<Ct?0:i,h,f,p,_,m,g,v,M;if(!c)xy(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Gt(d%_),d===l?(p=this._repeat,h=c):(m=Gt(d/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(h=c-h),m=la(this._tTime,_),h===o&&!a&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Gt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Ym(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var b=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(fi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Gf(this,i,s,a),fi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&fi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Gf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&$r(this,1),!s&&!(u&&!o)&&(d||o||g)&&(fi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Io||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ad(this,c),u=this._ease(c/this._dur),By(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(kc(this,0),this.parent||Wm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?bo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Yr&&Yr.vars.overwrite!==!0)._first||bo(this),this.parent&&a!==this.timeline.totalDuration()&&ca(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Li(i):o,c=this._ptLookup,u=this._pt,d,h,f,p,_,m,g;if((!s||s==="all")&&py(o,l))return s==="all"&&(this._pt=0),bo(this);for(d=this._op=this._op||[],s!=="all"&&(cn(s)&&(_={},Wn(s,function(v){return _[v]=1}),s=_),s=ky(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s==="all"?(d[g]=s,p=h,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Fc(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&bo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Eo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Eo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Vt.killTweensOf(i,s,a)},e})(Lo);pi(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new In,t=Vf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var od=function(e,t,n){return e[t]=n},og=function(e,t,n){return e[t](n)},Gy=function(e,t,n,i){return e[t](i.fp,n)},Vy=function(e,t,n){return e.setAttribute(t,n)},zc=function(e,t){return Zt(e[t])?og:Uc(e[t])&&e.setAttribute?Vy:od},lg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Hy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ld=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},cd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Wy=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Xy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Fc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},qy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ud=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Xn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||lg,this.d=l||this,this.set=c||od,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=qy,this.m=n,this.mt=s,this.tween=i},r})();Wn(Qf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Kf[r]=1});di.TweenMax=di.TweenLite=Qt;di.TimelineLite=di.TimelineMax=In;Vt=new In({sortChildren:!1,defaults:Co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=nd;var As=[],Ac={},Yy=[],Dm=0,Zy=0,Of=function(e){return(Ac[e]||Yy).map(function(t){return t()})},Do=function(){var e=Date.now(),t=[];e-Dm>2&&(Of("matchMediaInit"),As.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=er.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Of("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Dm=e,Of("matchMedia"))},cg=(function(){function r(t,n){this.selector=n&&Hf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Zy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Zt(n)&&(s=i,i=n,n=Zt);var a=this,o=function(){var c=Bt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Hf(s)),Bt=a,d=i.apply(a,arguments),Zt(d)&&a._r.push(d),Bt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=As.length;a--;)As[a].id===this.id&&As.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Do):o.removeEventListener("change",Do)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),Jy=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){nr(n)||(n={matches:n});var a=new cg(0,s||this.scope),o=a.conditions={},l,c,u;Bt&&!a.selector&&(a.selector=Bt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=er.matchMedia(n[c]),l&&(As.indexOf(a)<0&&As.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Do):l.addEventListener("change",Do),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Nc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ng(i)})},timeline:function(e){return new In(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){cn(e)&&(e=Li(e)[0]);var s=Jr(e||{}).get,a=n?Hm:Vm;return n==="native"&&(n=""),e&&(t?a((ni[t]&&ni[t].get||s)(e,t,n,i)):function(o,l,c){return a((ni[o]&&ni[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Li(e),e.length>1){var i=e.map(function(u){return Dn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=ni[t],o=Jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;aa._pt=0,d.init(e,n?u+n:u,aa,0,[e]),d.render(1,d),aa._pt&&cd(1,aa)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Dn.to(e,pi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Es(e.ease,Co.ease)),Cm(Co,e||{})},config:function(e){return Cm(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ni[o]&&!di[o]&&Ro(t+" effect requires "+o+" plugin.")}),Lf[t]=function(o,l,c){return n(Li(o),pi(l||{},s),c)},a&&(In.prototype[t]=function(o,l,c){return this.add(Lf[t](o,nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=Es(t)},parseEase:function(e,t){return arguments.length?Es(e,t):_t},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new In(e),i,s;for(n.smoothChildTiming=ri(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&tr(n,i,i._start-i._delay),i=s;return tr(Vt,n,0),n},context:function(e,t){return e?new cg(e,t):Bt},matchMedia:function(e){return new Jy(e)},matchMediaRefresh:function(){return As.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Do()},addEventListener:function(e,t){var n=Ac[e]||(Ac[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ac[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ey,wrapYoyo:Ay,distribute:$m,random:Qm,snap:Km,normalize:wy,getUnit:bn,clamp:Sy,splitColor:ig,toArray:Li,selector:Hf,mapRange:eg,pipe:by,unitize:Ty,interpolate:Cy,shuffle:Jm},install:Bm,effects:Lf,ticker:ii,updateRoot:In.updateRoot,plugins:ni,globalTimeline:Vt,core:{PropTween:Xn,globals:km,Tween:Qt,Timeline:In,Animation:Lo,getCache:Jr,_removeLinkedListItem:Fc,reverting:function(){return Mn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return qf=e}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Nc[r]=Qt[r]});ii.add(In.updateRoot);aa=Nc.to({},{duration:0});var $y=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ky=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=$y(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ff=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(cn(s)&&(l={},Wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Ky(o,s)}}}},Dn=Nc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ff("roundProps",Wf),Ff("modifiers"),Ff("snap",Km))||Nc;Qt.version=In.version=Dn.version="3.15.1";Fm=1;Yf()&&ua();var Qy=_t.Power0,jy=_t.Power1,ev=_t.Power2,tv=_t.Power3,nv=_t.Power4,iv=_t.Linear,rv=_t.Quad,sv=_t.Cubic,av=_t.Quart,ov=_t.Quint,lv=_t.Strong,cv=_t.Elastic,uv=_t.Back,hv=_t.SteppedEase,fv=_t.Bounce,dv=_t.Sine,pv=_t.Expo,mv=_t.Circ;var ug,Qr,da,gd,Ns,gv,hg,_d,_v=function(){return typeof window<"u"},br={},Ds=180/Math.PI,pa=Math.PI/180,fa=Math.atan2,fg=1e8,xd=/([A-Z])/g,xv=/(left|right|width|margin|padding|x)/i,yv=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Sg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Tv=function(e,t,n){return e.style[t]=n},wv=function(e,t,n){return e.style.setProperty(t,n)},Ev=function(e,t,n){return e._gsap[t]=n},Av=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Rv=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ht="transform",ai=Ht+"Origin",Pv=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in br&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Mr(i,o)}):this.tfm[e]=a.x?a[e]:Mr(i,e),e===ai&&(this.tfm.zOrigin=a.zOrigin);else return ir.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ht)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},Mg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Iv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_d(),(!s||!s.isStart)&&!n[Ht]&&(Mg(n),i.zOrigin&&n[ai]&&(n[ai]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},bg=function(e,t){var n={target:e,props:[],revert:Iv,save:Pv};return e._gsap||Dn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Tg,dd=function(e,t){var n=Qr.createElementNS?Qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return n&&n.style?n:Qr.createElement(e)},mi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(xd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ma(t)||t,1)||""},dg="O,Moz,ms,Ms,Webkit".split(","),ma=function(e,t,n){var i=t||Ns,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(dg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?dg[a]:"")+e},pd=function(){_v()&&window.document&&(ug=window,Qr=ug.document,da=Qr.documentElement,Ns=dd("div")||{style:{}},gv=dd("div"),Ht=ma(Ht),ai=Ht+"Origin",Ns.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Tg=!!ma("perspective"),_d=Dn.core.reverting,gd=1)},pg=function(e){var t=e.ownerSVGElement,n=dd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),da.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),da.removeChild(n),s},mg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},wg=function(e){var t,n;try{t=e.getBBox()}catch{t=pg(e),n=1}return t&&(t.width||t.height)||n||(t=pg(e)),t&&!t.width&&!t.x&&!t.y?{x:+mg(e,["x","cx","x1"])||0,y:+mg(e,["y","cy","y1"])||0,width:0,height:0}:t},Eg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&wg(e))},es=function(e,t){if(t){var n=e.style,i;t in br&&t!==ai&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(xd,"-$1").toLowerCase())):n.removeAttribute(t)}},jr=function(e,t,n,i,s,a){var o=new Xn(e._pt,t,n,0,1,a?Sg:vg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},gg={deg:1,rad:1,turn:1},Lv={grid:1,flex:1},ts=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ns.style,l=xv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",p,_,m,g;if(i===a||!s||gg[i]||gg[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&Eg(e),(f||a==="%")&&(br[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Jt(f?s/p*d:s/100*p);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qr||!_.appendChild)&&(_=Qr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===ii.time&&!m.uncache)return Jt(s/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,p=e[u],v?e.style[t]=v:es(e,t)}else(f||a==="%")&&!Lv[mi(_,"display")]&&(o.position=mi(e,"position")),_===e&&(o.position="static"),_.appendChild(Ns),p=Ns[u],_.removeChild(Ns),o.position="absolute";return l&&f&&(m=Jr(_),m.time=ii.time,m.width=_[u]),Jt(h?p*s/d:p&&s?d/p*s:0)},Mr=function(e,t,n,i){var s;return gd||pd(),t in ir&&t!=="transform"&&(t=ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),br[t]&&t!=="transform"?(s=Fo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vc(mi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gc[t]&&Gc[t](e,t,n)||mi(e,t)||ed(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ts(e,t,s,n)+n:s},Dv=function(e,t,n,i){if(!n||n==="none"){var s=ma(t,e,1),a=s&&mi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=mi(e,"borderTopColor"))}var o=new Xn(this._pt,e.style,t,0,1,ld),l=0,c=0,u,d,h,f,p,_,m,g,v,M,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=mi(e,t)||i,_?e.style[t]=_:es(e,t)),u=[n,i],nd(u),n=u[0],i=u[1],h=n.match(Cs)||[],b=i.match(Cs)||[],b.length){for(;d=Cs.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=Rs(f,m)+y),g=parseFloat(m),M=m.substr((g+"").length),l=Cs.lastIndex-M.length,M||(M=M||si.units[t]||y,l===i.length&&(i+=M,o.e+=M)),y!==M&&(f=ts(e,t,_,M)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Sg:vg;return Jf.test(i)&&(o.e=0),this._pt=o,o},_g={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=_g[n]||n,t[1]=_g[i]||i,t.join(" ")},Uv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],br[o]&&(l=1,o=o==="transformOrigin"?ai:Ht),es(n,o);l&&(es(n,Ht),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Fo(n,1),a.uncache=1,Mg(i)))}},Gc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Xn(e._pt,t,n,0,0,Uv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Oo=[1,0,0,1,0,0],Ag={},Cg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xg=function(e){var t=mi(e,Ht);return Cg(t)?Oo:t.substr(7).match(Zf).map(Jt)},yd=function(e,t){var n=e._gsap||Jr(e),i=e.style,s=xg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oo:s):(s===Oo&&!e.offsetParent&&e!==da&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,da.appendChild(e)),s=xg(e),l?i.display=l:es(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):da.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},md=function(e,t,n,i,s,a){var o=e._gsap,l=s||yd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],M=t.split(" "),y=parseFloat(M[0])||0,b=parseFloat(M[1])||0,w,x,S,I;n?l!==Oo&&(x=f*m-p*_)&&(S=y*(m/x)+b*(-_/x)+(_*v-m*g)/x,I=y*(-p/x)+b*(f/x)-(f*v-p*g)/x,y=S,b=I):(w=wg(e),y=w.x+(~M[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(M[1]||M[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(g=y-c,v=b-u,o.xOffset=d+(g*f+v*_)-g,o.yOffset=h+(g*p+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ai]="0px 0px",a&&(jr(a,o,"xOrigin",c,y),jr(a,o,"yOrigin",u,b),jr(a,o,"xOffset",d,o.xOffset),jr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Fo=function(e,t){var n=e._gsap||new id(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=mi(e,ai)||"0",u,d,h,f,p,_,m,g,v,M,y,b,w,x,S,I,A,V,O,j,N,K,te,H,J,ee,R,ce,Ae,Oe,se,be;return u=d=h=_=m=g=v=M=y=0,f=p=1,n.svg=!!(e.getCTM&&Eg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),x=yd(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),md(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,x)),b=n.xOrigin||0,w=n.yOrigin||0,x!==Oo&&(V=x[0],O=x[1],j=x[2],N=x[3],u=K=x[4],d=te=x[5],x.length===6?(f=Math.sqrt(V*V+O*O),p=Math.sqrt(N*N+j*j),_=V||O?fa(O,V)*Ds:0,v=j||N?fa(j,N)*Ds+_:0,v&&(p*=Math.abs(Math.cos(v*pa))),n.svg&&(u-=b-(b*V+w*j),d-=w-(b*O+w*N))):(be=x[6],Oe=x[7],R=x[8],ce=x[9],Ae=x[10],se=x[11],u=x[12],d=x[13],h=x[14],S=fa(be,Ae),m=S*Ds,S&&(I=Math.cos(-S),A=Math.sin(-S),H=K*I+R*A,J=te*I+ce*A,ee=be*I+Ae*A,R=K*-A+R*I,ce=te*-A+ce*I,Ae=be*-A+Ae*I,se=Oe*-A+se*I,K=H,te=J,be=ee),S=fa(-j,Ae),g=S*Ds,S&&(I=Math.cos(-S),A=Math.sin(-S),H=V*I-R*A,J=O*I-ce*A,ee=j*I-Ae*A,se=N*A+se*I,V=H,O=J,j=ee),S=fa(O,V),_=S*Ds,S&&(I=Math.cos(S),A=Math.sin(S),H=V*I+O*A,J=K*I+te*A,O=O*I-V*A,te=te*I-K*A,V=H,K=J),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Jt(Math.sqrt(V*V+O*O+j*j)),p=Jt(Math.sqrt(te*te+be*be)),S=fa(K,te),v=Math.abs(S)>2e-4?S*Ds:0,y=se?1/(se<0?-se:se):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Cg(mi(e,Ht)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Jt(f),n.scaleY=Jt(p),n.rotation=Jt(_)+o,n.rotationX=Jt(m)+o,n.rotationY=Jt(g)+o,n.skewX=v+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ai]=Vc(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?Fv:Tg?Rg:Ov,n.uncache=0,n},Vc=function(e){return(e=e.split(" "))[0]+" "+e[1]},hd=function(e,t,n){var i=bn(t);return Jt(parseFloat(t)+parseFloat(ts(e,"x",n+"px",i)))+i},Ov=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rg(e,t)},Is="0deg",Uo="0px",Ls=") ",Rg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,M=n.zOrigin,y="",b=g==="auto"&&e&&e!==1||g===!0;if(M&&(d!==Is||u!==Is)){var w=parseFloat(u)*pa,x=Math.sin(w),S=Math.cos(w),I;w=parseFloat(d)*pa,I=Math.cos(w),a=hd(v,a,x*I*-M),o=hd(v,o,-Math.sin(w)*-M),l=hd(v,l,S*I*-M+M)}m!==Uo&&(y+="perspective("+m+Ls),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||a!==Uo||o!==Uo||l!==Uo)&&(y+=l!==Uo||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ls),c!==Is&&(y+="rotate("+c+Ls),u!==Is&&(y+="rotateY("+u+Ls),d!==Is&&(y+="rotateX("+d+Ls),(h!==Is||f!==Is)&&(y+="skew("+h+", "+f+Ls),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Ls),v.style[Ht]=y||"translate(0, 0)"},Fv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,M=parseFloat(a),y=parseFloat(o),b,w,x,S,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pa,c*=pa,b=Math.cos(l)*d,w=Math.sin(l)*d,x=Math.sin(l-c)*-h,S=Math.cos(l-c)*h,c&&(u*=pa,I=Math.tan(c-u),I=Math.sqrt(1+I*I),x*=I,S*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),b*=I,w*=I)),b=Jt(b),w=Jt(w),x=Jt(x),S=Jt(S)):(b=d,S=h,w=x=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=ts(f,"x",a,"px"),y=ts(f,"y",o,"px")),(p||_||m||g)&&(M=Jt(M+p-(p*b+_*x)+m),y=Jt(y+_-(p*w+_*S)+g)),(i||s)&&(I=f.getBBox(),M=Jt(M+i/100*I.width),y=Jt(y+s/100*I.height)),I="matrix("+b+","+w+","+x+","+S+","+M+","+y+")",f.setAttribute("transform",I),v&&(f.style[Ht]=I)},Bv=function(e,t,n,i,s){var a=360,o=cn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ds:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*fg)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*fg)%a-~~(c/a)*a)),e._pt=h=new Xn(e._pt,t,n,i,c,vv),h.e=u,h.u="deg",e._props.push(n),h},yg=function(e,t){for(var n in t)e[n]=t[n];return e},kv=function(e,t,n){var i=yg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ht]=t,o=Fo(n,1),es(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],a[Ht]=t,o=Fo(n,1),a[Ht]=c);for(l in br)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=bn(c),p=bn(u),d=f!==p?ts(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new Xn(e._pt,o,l,d,h-d,fd),e._pt.u=p||0,e._props.push(l));yg(o,i)};Wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Gc[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(p){return Mr(o,p,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(p,_){return f[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var vd={name:"css",register:pd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,p,_,m,g,v,M,y,b,w,x,S,I;gd||pd(),this.styles=this.styles||bg(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ni[_]&&sd(_,t,n,i,e,s)))){if(f=typeof u,p=Gc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ha(u)),p)p(this,e,_,u,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(m=bn(c),g=bn(u),g?m!==g&&(c=ts(e,_,c,g)+g):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),S.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],cn(c)&&~c.indexOf("random(")&&(c=ha(c)),bn(c+"")||c==="auto"||(c+=si.units[_]||bn(Mr(e,_))||""),(c+"").charAt(1)==="="&&(c=Mr(e,_))):c=Mr(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in ir&&(_==="autoAlpha"&&(h===1&&Mr(e,"visibility")==="hidden"&&d&&(h=0),S.push("visibility",0,o.visibility),jr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ir[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in br,M){if(this.styles.save(_),I=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=mi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=mi(e,"perspective"),A?e.style.perspective=A:es(e,"perspective")}d=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Fo(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Xn(this._pt,o,Ht,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new Xn(this._pt,b,"scaleY",b.scaleY,(v?Rs(b.scaleY,v+d):d)-b.scaleY||0,fd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(ai,0,o[ai]),u=Nv(u),b.svg?md(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==b.zOrigin&&jr(this,b,"zOrigin",b.zOrigin,g),jr(this,o,_,Vc(c),Vc(u)));continue}else if(_==="svgOrigin"){md(e,u,1,w,0,this);continue}else if(_ in Ag){Bv(this,b,_,h,v?Rs(h,v+u):u);continue}else if(_==="smoothOrigin"){jr(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){kv(this,u,e);continue}}else _ in o||(_=ma(_)||_);if(M||(d||d===0)&&(h||h===0)&&!yv.test(u)&&_ in o)m=(c+"").substr((h+"").length),d||(d=0),g=bn(u)||(_ in si.units?si.units[_]:m),m!==g&&(h=ts(e,_,c,g)),this._pt=new Xn(this._pt,M?b:o,_,h,(v?Rs(h,v+d):d)-h,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?bv:fd),this._pt.u=g||0,M&&I!==u?(this._pt.b=c,this._pt.e=I,this._pt.r=Mv):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Sv);else if(_ in o)Dv.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){Oc(_,u);continue}M||(_ in o?S.push(_,0,o[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),a.push(_)}}x&&ud(this)},render:function(e,t){if(t.tween._time||!_d())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mr,aliases:ir,getSetter:function(e,t,n){var i=ir[t];return i&&i.indexOf(",")<0&&(t=i),t in br&&t!==ai&&(e._gsap.x||Mr(e,"x"))?n&&hg===n?t==="scale"?Av:Ev:(hg=n||{})&&(t==="scale"?Cv:Rv):e.style&&!Uc(e.style[t])?Tv:~t.indexOf("-")?wv:zc(e,t)},core:{_removeProperty:es,_getMatrix:yd}};Dn.utils.checkPrefix=ma;Dn.core.getStyleSaver=bg;(function(r,e,t,n){var i=Wn(r+","+e+","+t,function(s){br[s]=1});Wn(e,function(s){si.units[s]="deg",Ag[s]=1}),ir[i[13]]=r+","+e,Wn(n,function(s){var a=s.split(":");ir[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){si.units[r]="px"});Dn.registerPlugin(vd);var et=Dn.registerPlugin(vd)||Dn,OE=et.core.Tween;function Pg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function zv(r,e,t){return e&&Pg(r.prototype,e),t&&Pg(r,t),r}var Tn,Xc,Gv,oi,ns,is,_a,Lg,Us,xa,Dg,Tr,Wi,Ng,Ug=function(){return Tn||typeof window<"u"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},Og=1,ga=[],lt=[],Xi=[],ko=Date.now,Sd=function(e,t){return t},Vv=function(){var e=xa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Xi),lt=n,Xi=i,Sd=function(a,o){return t[a](o)}},Er=function(e,t){return~Xi.indexOf(e)&&Xi[Xi.indexOf(e)+1][t]},zo=function(e){return!!~Dg.indexOf(e)},Yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},qn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Hc="scrollLeft",Wc="scrollTop",Md=function(){return Tr&&Tr.isPressed||lt.cache++},qc=function(e,t){var n=function i(s){if(s||s===0){Og&&oi.history.scrollRestoration!=="manual"&&(oi.history.scrollRestoration="manual");var a=Tr&&Tr.isPressed;s=i.v=Math.round(s)||(Tr&&Tr.iOS?1:0),e(s),i.cacheID=lt.cache,a&&Sd("ss",s)}else(t||lt.cache!==i.cacheID||Sd("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:Hc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qc(function(r){return arguments.length?oi.scrollTo(r,nn.sc()):oi.pageXOffset||ns[Hc]||is[Hc]||_a[Hc]||0})},nn={s:Wc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:qc(function(r){return arguments.length?oi.scrollTo(Nn.sc(),r):oi.pageYOffset||ns[Wc]||is[Wc]||_a[Wc]||0})},Zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Tn.utils.toArray)(e)[0]||(typeof e=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},wr=function(e,t){var n=t.s,i=t.sc;zo(e)&&(e=ns.scrollingElement||is);var s=lt.indexOf(e),a=i===nn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+a]||Yn(e,"scroll",Md);var o=lt[s+a],l=o||(lt[s+a]=qc(Er(e,n),!0)||(zo(e)?i:qc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Tn.getProperty(e,"scrollBehavior")==="smooth"),l},Yc=function(e,t,n){var i=e,s=e,a=ko(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=ko();_||m-a>l?(s=i,i=p,o=a,a=m):n?i+=p:i=s+(p-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(p){var _=o,m=s,g=ko();return(p||p===0)&&p!==i&&u(p),a===o||g-o>c?0:(i+(n?m:-m))/((n?g:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Bo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ig=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Fg=function(){xa=Tn.core.globals().ScrollTrigger,xa&&xa.core&&Vv()},Bg=function(e){return Tn=e||Ug(),!Xc&&Tn&&typeof document<"u"&&document.body&&(oi=window,ns=document,is=ns.documentElement,_a=ns.body,Dg=[oi,ns,is,_a],Gv=Tn.utils.clamp,Ng=Tn.core.context||function(){},Us="onpointerenter"in _a?"pointer":"mouse",Lg=$t.isTouch=oi.matchMedia&&oi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in oi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Wi=$t.eventTypes=("ontouchstart"in is?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in is?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Og=0},500),Xc=1),xa||Fg(),Xc};Nn.op=nn;lt.cache=0;var $t=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Xc||Bg(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),xa||Fg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,v=n.onDrag,M=n.onPress,y=n.onRelease,b=n.onRight,w=n.onLeft,x=n.onUp,S=n.onDown,I=n.onChangeX,A=n.onChangeY,V=n.onChange,O=n.onToggleX,j=n.onToggleY,N=n.onHover,K=n.onHoverEnd,te=n.onMove,H=n.ignoreCheck,J=n.isNormalizer,ee=n.onGestureStart,R=n.onGestureEnd,ce=n.onWheel,Ae=n.onEnable,Oe=n.onDisable,se=n.onClick,be=n.scrollSpeed,Ce=n.capture,ne=n.allowClicks,q=n.lockAxis,z=n.onLockAxis;this.target=o=Zn(o)||is,this.vars=n,f&&(f=Tn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,be=be||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(oi.getComputedStyle(_a).lineHeight)||22);var G,Y,fe,ue,L,Z,X,U=this,re=0,F=0,D=n.passive||!u&&n.passive!==!1,P=wr(o,Nn),B=wr(o,nn),ie=P(),k=B(),Ue=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Wi[0]==="pointerdown",He=zo(o),ke=o.ownerDocument||ns,pe=[0,0,0],Be=[0,0,0],Ee=0,We=function(){return Ee=ko()},C=function(Fe,Se){return(U.event=Fe)&&f&&Hv(Fe.target,f)||Se&&Ue&&Fe.pointerType!=="touch"||H&&H(Fe,Se)},T=function(){U._vx.reset(),U._vy.reset(),Y.pause(),d&&d(U)},ae=function(){var Fe=U.deltaX=Ig(pe),Se=U.deltaY=Ig(Be),ye=Math.abs(Fe)>=i,ze=Math.abs(Se)>=i;V&&(ye||ze)&&V(U,Fe,Se,pe,Be),ye&&(b&&U.deltaX>0&&b(U),w&&U.deltaX<0&&w(U),I&&I(U),O&&U.deltaX<0!=re<0&&O(U),re=U.deltaX,pe[0]=pe[1]=pe[2]=0),ze&&(S&&U.deltaY>0&&S(U),x&&U.deltaY<0&&x(U),A&&A(U),j&&U.deltaY<0!=F<0&&j(U),F=U.deltaY,Be[0]=Be[1]=Be[2]=0),(ue||fe)&&(te&&te(U),fe&&(m&&fe===1&&m(U),v&&v(U),fe=0),ue=!1),Z&&!(Z=!1)&&z&&z(U),L&&(ce(U),L=!1),G=0},Te=function(Fe,Se,ye){pe[ye]+=Fe,Be[ye]+=Se,U._vx.update(Fe),U._vy.update(Se),c?G||(G=requestAnimationFrame(ae)):ae()},xe=function(Fe,Se){q&&!X&&(U.axis=X=Math.abs(Fe)>Math.abs(Se)?"x":"y",Z=!0),X!=="y"&&(pe[2]+=Fe,U._vx.update(Fe,!0)),X!=="x"&&(Be[2]+=Se,U._vy.update(Se,!0)),c?G||(G=requestAnimationFrame(ae)):ae()},Ie=function(Fe){if(!C(Fe,1)){Fe=Bo(Fe,u);var Se=Fe.clientX,ye=Fe.clientY,ze=Se-U.x,ve=ye-U.y,qe=U.isDragging;U.x=Se,U.y=ye,(qe||(ze||ve)&&(Math.abs(U.startX-Se)>=s||Math.abs(U.startY-ye)>=s))&&(fe||(fe=qe?2:1),qe||(U.isDragging=!0),xe(ze,ve))}},De=U.onPress=function(Re){C(Re,1)||Re&&Re.button||(U.axis=X=null,Y.pause(),U.isPressed=!0,Re=Bo(Re),re=F=0,U.startX=U.x=Re.clientX,U.startY=U.y=Re.clientY,U._vx.reset(),U._vy.reset(),Yn(J?o:ke,Wi[1],Ie,D,!0),U.deltaX=U.deltaY=0,M&&M(U))},oe=U.onRelease=function(Re){if(!C(Re,1)){qn(J?o:ke,Wi[1],Ie,!0);var Fe=!isNaN(U.y-U.startY),Se=U.isDragging,ye=Se&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),ze=Bo(Re);!ye&&Fe&&(U._vx.reset(),U._vy.reset(),u&&ne&&Tn.delayedCall(.08,function(){if(ko()-Ee>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(ke.createEvent){var ve=ke.createEvent("MouseEvents");ve.initMouseEvent("click",!0,!0,oi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(ve)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,d&&Se&&!J&&Y.restart(!0),fe&&ae(),g&&Se&&g(U),y&&y(U,ye)}},_e=function(Fe){return Fe.touches&&Fe.touches.length>1&&(U.isGesturing=!0)&&ee(Fe,U.isDragging)},Pe=function(){return(U.isGesturing=!1)||R(U)},W=function(Fe){if(!C(Fe)){var Se=P(),ye=B();Te((Se-ie)*be,(ye-k)*be,1),ie=Se,k=ye,d&&Y.restart(!0)}},me=function(Fe){if(!C(Fe)){Fe=Bo(Fe,u),ce&&(L=!0);var Se=(Fe.deltaMode===1?l:Fe.deltaMode===2?oi.innerHeight:1)*p;Te(Fe.deltaX*Se,Fe.deltaY*Se,0),d&&!J&&Y.restart(!0)}},ge=function(Fe){if(!C(Fe)){var Se=Fe.clientX,ye=Fe.clientY,ze=Se-U.x,ve=ye-U.y;U.x=Se,U.y=ye,ue=!0,d&&Y.restart(!0),(ze||ve)&&xe(ze,ve)}},Ne=function(Fe){U.event=Fe,N(U)},we=function(Fe){U.event=Fe,K(U)},Le=function(Fe){return C(Fe)||Bo(Fe,u)&&se(U)};Y=U._dc=Tn.delayedCall(h||.25,T).pause(),U.deltaX=U.deltaY=0,U._vx=Yc(0,50,!0),U._vy=Yc(0,50,!0),U.scrollX=P,U.scrollY=B,U.isDragging=U.isGesturing=U.isPressed=!1,Ng(this),U.enable=function(Re){return U.isEnabled||(Yn(He?ke:o,"scroll",Md),a.indexOf("scroll")>=0&&Yn(He?ke:o,"scroll",W,D,Ce),a.indexOf("wheel")>=0&&Yn(o,"wheel",me,D,Ce),(a.indexOf("touch")>=0&&Lg||a.indexOf("pointer")>=0)&&(Yn(o,Wi[0],De,D,Ce),Yn(ke,Wi[2],oe),Yn(ke,Wi[3],oe),ne&&Yn(o,"click",We,!0,!0),se&&Yn(o,"click",Le),ee&&Yn(ke,"gesturestart",_e),R&&Yn(ke,"gestureend",Pe),N&&Yn(o,Us+"enter",Ne),K&&Yn(o,Us+"leave",we),te&&Yn(o,Us+"move",ge)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=ue=fe=!1,U._vx.reset(),U._vy.reset(),ie=P(),k=B(),Re&&Re.type&&De(Re),Ae&&Ae(U)),U},U.disable=function(){U.isEnabled&&(ga.filter(function(Re){return Re!==U&&zo(Re.target)}).length||qn(He?ke:o,"scroll",Md),U.isPressed&&(U._vx.reset(),U._vy.reset(),qn(J?o:ke,Wi[1],Ie,!0)),qn(He?ke:o,"scroll",W,Ce),qn(o,"wheel",me,Ce),qn(o,Wi[0],De,Ce),qn(ke,Wi[2],oe),qn(ke,Wi[3],oe),qn(o,"click",We,!0),qn(o,"click",Le),qn(ke,"gesturestart",_e),qn(ke,"gestureend",Pe),qn(o,Us+"enter",Ne),qn(o,Us+"leave",we),qn(o,Us+"move",ge),U.isEnabled=U.isPressed=U.isDragging=!1,Oe&&Oe(U))},U.kill=U.revert=function(){U.disable();var Re=ga.indexOf(U);Re>=0&&ga.splice(Re,1),Tr===U&&(Tr=0)},ga.push(U),J&&zo(o)&&(Tr=U),U.enable(_)},zv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$t.version="3.15.1";$t.create=function(r){return new $t(r)};$t.register=Bg;$t.getAll=function(){return ga.slice()};$t.getById=function(r){return ga.filter(function(e){return e.vars.id===r})[0]};Ug()&&Tn.registerPlugin($t);var Ze,Ma,ht,At,xi,Tt,Od,cu,jo,Yo,Vo,Zc,Un,fu,Rd,$n,kg,zg,ba,n_,bd,i_,Jn,Pd,r_,s_,rs,Id,Fd,Ta,Bd,ss,Ld,Td,Jc=1,On=Date.now,wd=On(),Ui=0,Ho=0,Gg=function(e,t,n){var i=_i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Vg=function(e,t){return t&&(!_i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Wv=function r(){return Ho&&requestAnimationFrame(r)},Hg=function(){return fu=1},Wg=function(){return fu=0},rr=function(e){return e},Wo=function(e){return Math.round(e*1e5)/1e5||0},a_=function(){return typeof window<"u"},o_=function(){return Ze||a_()&&(Ze=window.gsap)&&Ze.registerPlugin&&Ze},Gs=function(e){return!!~Od.indexOf(e)},l_=function(e){return(e==="Height"?Bd:ht["inner"+e])||xi["client"+e]||Tt["client"+e]},c_=function(e){return Er(e,"getBoundingClientRect")||(Gs(e)?function(){return lu.width=ht.innerWidth,lu.height=Bd,lu}:function(){return Ar(e)})},Xv=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Er(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?l_(s):e["client"+s])||0}},qv=function(e,t){return!t||~Xi.indexOf(e)?c_(e):function(){return lu}},sr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Er(e,n))?a()-c_(e)()[s]:Gs(e)?(xi[n]||Tt[n])-l_(i):e[n]-e["offset"+i])},$c=function(e,t){for(var n=0;n<ba.length;n+=3)(!t||~t.indexOf(ba[n+1]))&&e(ba[n],ba[n+1],ba[n+2])},_i=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},Xo=function(e){return typeof e=="number"},Os=function(e){return typeof e=="object"},Go=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ya=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},va=Math.abs,u_="left",h_="top",kd="right",zd="bottom",Bs="width",ks="height",Zo="Right",Jo="Left",$o="Top",Ko="Bottom",rn="padding",Di="margin",Ea="Width",Gd="Height",un="px",Ni=function(e){return ht.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Yv=function(e){var t=Ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Xg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ar=function(e,t){var n=t&&Ni(e)[Rd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ze.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},uu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},f_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Zv=function(e){return function(t){return Ze.utils.snap(f_(e),t)}},Vd=function(e){var t=Ze.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Jv=function(e){return function(t,n){return Vd(f_(e))(t,n.direction)}},Kc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jc={toggleActions:"play",anticipatePin:0},hu={top:0,left:0,center:.5,bottom:1,right:1},ru=function(e,t){if(_i(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hu?hu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},eu=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,p=At.createElement("div"),_=Gs(n)||Er(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?Tt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,M=v?c:u,y="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===nn?kd:zd)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],su(p,0,i,v),p},su=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ea]=1,s["border"+o+Ea]=0,s[n.p]=t+"px",Ze.set(e,s)},ut=[],Dd={},el,Yg=function(){return On()-Ui>34&&(el||(el=requestAnimationFrame(Cr)))},Sa=function(){(!Jn||!Jn.isPressed||Jn.startX>Tt.clientWidth)&&(lt.cache++,Jn?el||(el=requestAnimationFrame(Cr)):Cr(),Ui||Hs("scrollStart"),Ui=On())},Ed=function(){s_=ht.innerWidth,r_=ht.innerHeight},qo=function(e){lt.cache++,(e===!0||!Un&&!i_&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!Pd||s_!==ht.innerWidth||Math.abs(ht.innerHeight-r_)>ht.innerHeight*.25))&&cu.restart(!0)},Vs={},$v=[],d_=function r(){return mn(it,"scrollEnd",r)||Fs(!0)},Hs=function(e){return Vs[e]&&Vs[e].map(function(t){return t()})||$v},gi=[],p_=function(e){for(var t=0;t<gi.length;t+=5)(!e||gi[t+4]&&gi[t+4].query===e)&&(gi[t].style.cssText=gi[t+1],gi[t].getBBox&&gi[t].setAttribute("transform",gi[t+2]||""),gi[t+3].uncache=1)},m_=function(){lt.cache++,lt.forEach(function(e){return Fn(e)&&(e.rec=e())})},Hd=function(e,t){var n;for($n=0;$n<ut.length;$n++)n=ut[$n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ss=!0,t&&p_(t),t||Hs("revert")},g_=function(e,t){lt.cache++,(t||!Kn)&&lt.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),_i(e)&&(Fd=e,ht.history.scrollRestoration!==e&&(ht.history.scrollRestoration=e))},Kn,zs=0,Zg,Kv=function(){if(Zg!==zs){var e=Zg=zs;requestAnimationFrame(function(){return e===zs&&Fs(!0)})}},__=function(){Tt.appendChild(Ta),Bd=!Jn&&Ta.offsetHeight||ht.innerHeight,Tt.removeChild(Ta)},Jg=function(e){return jo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Fs=function(e,t){if(xi=At.documentElement,Tt=At.body,Od=[ht,At,xi,Tt],Ui&&!e&&!ss){gn(it,"scrollEnd",d_);return}__(),Kn=it.isRefreshing=!0,ss||m_();var n=Hs("refreshInit");n_&&it.sort(),t||Hd(),lt.forEach(function(i){Fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ut.slice(0).forEach(function(i){return i.refresh()}),ss=!1,ut.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Ld=1,Jg(!0),ut.forEach(function(i){var s=sr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Jg(!1),Ld=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),g_(Fd,1),cu.pause(),zs++,Kn=2,Cr(2),ut.forEach(function(i){return Fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=it.isRefreshing=!1,Hs("refresh")},Nd=0,au=1,Qo,Cr=function(e){if(e===2||!Kn&&!ss){it.isUpdating=!0,Qo&&Qo.update(0);var t=ut.length,n=On(),i=n-wd>=50,s=t&&ut[0].scroll();if(au=Nd>s?-1:1,Kn||(Nd=s),i&&(Ui&&!fu&&n-Ui>200&&(Ui=0,Hs("scrollEnd")),Vo=wd,wd=n),au<0){for($n=t;$n-- >0;)ut[$n]&&ut[$n].update(0,i);au=1}else for($n=0;$n<t;$n++)ut[$n]&&ut[$n].update(0,i);it.isUpdating=!1}el=0},Ud=[u_,h_,zd,kd,Di+Ko,Di+Zo,Di+$o,Di+Jo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ou=Ud.concat([Bs,ks,"boxSizing","max"+Ea,"max"+Gd,"position",Di,rn,rn+$o,rn+Zo,rn+Ko,rn+Jo]),Qv=function(e,t,n){wa(n);var i=e._gsap;if(i.spacerIsNative)wa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ad=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ud.length,a=t.style,o=e.style,l;s--;)l=Ud[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[zd]=o[kd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Bs]=uu(e,Nn)+un,a[ks]=uu(e,nn)+un,a[rn]=o[Di]=o[h_]=o[u_]="0",wa(i),o[Bs]=o["max"+Ea]=n[Bs],o[ks]=o["max"+Gd]=n[ks],o[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},jv=/([A-Z])/g,wa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ze.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(jv,"-$1").toLowerCase())}},tu=function(e){for(var t=ou.length,n=e.style,i=[],s=0;s<t;s++)i.push(ou[s],n[ou[s]]);return i.t=e,i},eS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},lu={left:0,top:0},$g=function(e,t,n,i,s,a,o,l,c,u,d,h,f,p){Fn(e)&&(e=e(l)),_i(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?ru("0"+e.substr(3),n):0));var _=f?f.time():0,m,g,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Xo(e))f&&(e=Ze.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&su(o,n,i,!0);else{Fn(t)&&(t=t(l));var M=(e||"0").split(" "),y,b,w,x;v=Zn(t,l)||Tt,y=Ar(v)||{},(!y||!y.left&&!y.top)&&Ni(v).display==="none"&&(x=v.style.display,v.style.display="block",y=Ar(v),x?v.style.display=x:v.style.removeProperty("display")),b=ru(M[0],y[i.d]),w=ru(M[1]||"0",n),e=y[i.p]-c[i.p]-u+b+s-w,o&&su(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var S=e+n,I=a._isStart;m="scroll"+i.d2,su(a,S,i,I&&S>20||!I&&(d?Math.max(Tt[m],xi[m]):a.parentNode[m])<=S+1),d&&(c=Ar(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+un))}return f&&v&&(m=Ar(v),f.seek(h),g=Ar(v),f._caScrollDist=m[i.p]-g[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},tS=/(webkit|moz|length|cssText|inset)/i,Kg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===Tt){e._stOrig=s.cssText,o=Ni(e);for(a in o)!+a&&!tS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ze.core.getCache(e).uncache=1,t.appendChild(e)}},x_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},nu=function(e,t,n){var i={};i[t.p]="+="+n,Ze.set(e,i)},Qg=function(e,t){var n=wr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,p={};c=c||n();var _=x_(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){lt.cache++,a.tween&&Cr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Ze.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},gn(e,"wheel",n.wheelHandler),it.isTouch&&gn(e,"touchmove",n.wheelHandler),s},it=(function(){function r(t,n){Ma||r.register(Ze)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Id(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ho){this.update=this.refresh=this.kill=rr;return}n=Xg(_i(n)||Xo(n)||n.nodeType?{trigger:n}:n,jc);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,M=s.once,y=s.snap,b=s.pinReparent,w=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,I=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:nn,V=!d&&d!==0,O=Zn(n.scroller||ht),j=Ze.core.getCache(O),N=Gs(O),K=("pinType"in n?n.pinType:Er(O,"pinType")||N&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=V&&n.toggleActions.split(" "),J="markers"in n?n.markers:jc.markers,ee=N?0:parseFloat(Ni(O)["border"+A.p2+Ea])||0,R=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Ae=Xv(O,N,A),Oe=qv(O,N),se=0,be=0,Ce=0,ne=wr(O,A),q,z,G,Y,fe,ue,L,Z,X,U,re,F,D,P,B,ie,k,Ue,He,ke,pe,Be,Ee,We,C,T,ae,Te,xe,Ie,De,oe,_e,Pe,W,me,ge,Ne,we;if(R._startClamp=R._endClamp=!1,R._dir=A,m*=45,R.scroller=O,R.scroll=x?x.time.bind(x):ne,Y=ne(),ss&&ne.rec==null&&(ne.rec=Y),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(n_=1,n.refreshPriority===-9999&&(Qo=R)),j.tweenScroll=j.tweenScroll||{top:Qg(O,nn),left:Qg(O,Nn)},R.tweenTo=q=j.tweenScroll[A.p],R.scrubDuration=function(ye){_e=Xo(ye)&&ye,_e?oe?oe.duration(ye):oe=Ze.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:_e,paused:!0,onComplete:function(){return g&&g(R)}}):(oe&&oe.progress(1).kill(),oe=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),Ie=0,l||(l=i.vars.id)),y&&((!Os(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Tt.style&&Ze.set(N?[Tt,xi]:O,{scrollBehavior:"auto"}),lt.forEach(function(ye){return Fn(ye)&&ye.target===(N?At.scrollingElement||xi:O)&&(ye.smooth=!1)}),G=Fn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Zv(i):y.snapTo==="labelsDirectional"?Jv(i):y.directional!==!1?function(ye,ze){return Vd(y.snapTo)(ye,On()-be<500?0:ze.direction)}:Ze.utils.snap(y.snapTo),Pe=y.duration||{min:.1,max:2},Pe=Os(Pe)?Yo(Pe.min,Pe.max):Yo(Pe,Pe),W=Ze.delayedCall(y.delay||_e/2||.1,function(){var ye=ne(),ze=On()-be<500,ve=q.tween;if((ze||Math.abs(R.getVelocity())<10)&&!ve&&!fu&&se!==ye){var qe=(ye-ue)/P,dt=i&&!V?i.totalProgress():qe,st=ze?0:(dt-De)/(On()-Vo)*1e3||0,Ot=Ze.utils.clamp(-qe,1-qe,va(st/2)*st/.185),jt=qe+(y.inertia===!1?0:Ot),Ft,Rt,bt=y,an=bt.onStart,Pt=bt.onInterrupt,Cn=bt.onComplete;if(Ft=G(jt,R),Xo(Ft)||(Ft=jt),Rt=Math.max(0,Math.round(ue+Ft*P)),ye<=L&&ye>=ue&&Rt!==ye){if(ve&&!ve._initted&&ve.data<=va(Rt-ye))return;y.inertia===!1&&(Ot=Ft-qe),q(Rt,{duration:Pe(va(Math.max(va(jt-dt),va(Ft-dt))*.185/st/.05||0)),ease:y.ease||"power3",data:va(Rt-ye),onInterrupt:function(){return W.restart(!0)&&Pt&&ya(R,Pt)},onComplete:function(){R.update(),se=ne(),i&&!V&&(oe?oe.resetTo("totalProgress",Ft,i._tTime/i._tDur):i.progress(Ft)),Ie=De=i&&!V?i.totalProgress():R.progress,v&&v(R),Cn&&ya(R,Cn)}},ye,Ot*P,Rt-ye-Ot*P),an&&ya(R,an,q.tween)}}else R.isActive&&se!==ye&&W.restart(!0)}).pause()),l&&(Dd[l]=R),h=R.trigger=Zn(h||f!==!0&&f),we=h&&h._gsap&&h._gsap.stRevert,we&&(we=we(R)),f=f===!0?h:Zn(f),_i(o)&&(o={targets:h,className:o}),f&&(p===!1||p===Di||(p=!p&&f.parentNode&&f.parentNode.style&&Ni(f.parentNode).display==="flex"?!1:rn),R.pin=f,z=Ze.core.getCache(f),z.spacer?B=z.pinState:(w&&(w=Zn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),z.spacerIsNative=!!w,w&&(z.spacerState=tu(w))),z.spacer=Ue=w||At.createElement("div"),Ue.classList.add("pin-spacer"),l&&Ue.classList.add("pin-spacer-"+l),z.pinState=B=tu(f)),n.force3D!==!1&&Ze.set(f,{force3D:!0}),R.spacer=Ue=z.spacer,xe=Ni(f),We=xe[p+A.os2],ke=Ze.getProperty(f),pe=Ze.quickSetter(f,A.a,un),Ad(f,Ue,xe),k=tu(f)),J){F=Os(J)?Xg(J,qg):qg,U=eu("scroller-start",l,O,A,F,0),re=eu("scroller-end",l,O,A,F,0,U),He=U["offset"+A.op.d2];var Le=Zn(Er(O,"content")||O);Z=this.markerStart=eu("start",l,Le,A,F,He,0,x),X=this.markerEnd=eu("end",l,Le,A,F,He,0,x),x&&(Ne=Ze.quickSetter([Z,X],A.a,un)),!K&&!(Xi.length&&Er(O,"fixedMarkers")===!0)&&(Yv(N?Tt:O),Ze.set([U,re],{force3D:!0}),T=Ze.quickSetter(U,A.a,un),Te=Ze.quickSetter(re,A.a,un))}if(x){var Re=x.vars.onUpdate,Fe=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),Re&&Re.apply(x,Fe||[])})}if(R.previous=function(){return ut[ut.indexOf(R)-1]},R.next=function(){return ut[ut.indexOf(R)+1]},R.revert=function(ye,ze){if(!ze)return R.kill(!0);var ve=ye!==!1||!R.enabled,qe=Un;ve!==R.isReverted&&(ve&&(me=Math.max(ne(),R.scroll.rec||0),Ce=R.progress,ge=i&&i.progress()),Z&&[Z,X,U,re].forEach(function(dt){return dt.style.display=ve?"none":"block"}),ve&&(Un=R,R.update(ve)),f&&(!b||!R.isActive)&&(ve?Qv(f,Ue,B):Ad(f,Ue,Ni(f),C)),ve||R.update(ve),Un=qe,R.isReverted=ve)},R.refresh=function(ye,ze,ve,qe){if(!((Un||!R.enabled)&&!ze)){if(f&&ye&&Ui){gn(r,"scrollEnd",d_);return}!Kn&&ce&&ce(R),Un=R,q.tween&&!ve&&(q.tween.kill(),q.tween=0),oe&&oe.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(le){return le.vars.immediateRender&&le.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var dt=Ae(),st=Oe(),Ot=x?x.duration():sr(O,A),jt=P<=.01||!P,Ft=0,Rt=qe||0,bt=Os(ve)?ve.end:n.end,an=n.endTrigger||h,Pt=Os(ve)?ve.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),Cn=R.pinnedContainer=n.pinnedContainer&&Zn(n.pinnedContainer,R),ui=h&&Math.max(0,ut.indexOf(R))||0,qt=ui,en,on,hi,sa,ln,Yt,Ri,Mo,Mc,Xr,E,$,de;for(J&&Os(ve)&&($=Ze.getProperty(U,A.p),de=Ze.getProperty(re,A.p));qt-- >0;)Yt=ut[qt],Yt.end||Yt.refresh(0,1)||(Un=R),Ri=Yt.pin,Ri&&(Ri===h||Ri===f||Ri===Cn)&&!Yt.isReverted&&(Xr||(Xr=[]),Xr.unshift(Yt),Yt.revert(!0,!0)),Yt!==ut[qt]&&(ui--,qt--);for(Fn(Pt)&&(Pt=Pt(R)),Pt=Gg(Pt,"start",R),ue=$g(Pt,h,dt,A,ne(),Z,U,R,st,ee,K,Ot,x,R._startClamp&&"_startClamp")||(f?-.001:0),Fn(bt)&&(bt=bt(R)),_i(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(_i(Pt)?Pt.split(" ")[0]:"")+bt:(Ft=ru(bt.substr(2),dt),bt=_i(Pt)?Pt:(x?Ze.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,ue):ue)+Ft,an=h)),bt=Gg(bt,"end",R),L=Math.max(ue,$g(bt||(an?"100% 0":Ot),an,dt,A,ne()+Ft,X,re,R,st,ee,K,Ot,x,R._endClamp&&"_endClamp"))||-.001,Ft=0,qt=ui;qt--;)Yt=ut[qt]||{},Ri=Yt.pin,Ri&&Yt.start-Yt._pinPush<=ue&&!x&&Yt.end>0&&(en=Yt.end-(R._startClamp?Math.max(0,Yt.start):Yt.start),(Ri===h&&Yt.start-Yt._pinPush<ue||Ri===Cn)&&isNaN(Pt)&&(Ft+=en*(1-Yt.progress)),Ri===f&&(Rt+=en));if(ue+=Ft,L+=Ft,R._startClamp&&(R._startClamp+=Ft),R._endClamp&&!Kn&&(R._endClamp=L||-.001,L=Math.min(L,sr(O,A))),P=L-ue||(ue-=.01)&&.001,jt&&(Ce=Ze.utils.clamp(0,1,Ze.utils.normalize(ue,L,me))),R._pinPush=Rt,Z&&Ft&&(en={},en[A.a]="+="+Ft,Cn&&(en[A.p]="-="+ne()),Ze.set([Z,X],en)),f&&!(Ld&&R.end>=sr(O,A)))en=Ni(f),sa=A===nn,hi=ne(),Be=parseFloat(ke(A.a))+Rt,!Ot&&L>1&&(E=(N?At.scrollingElement||xi:O).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},N&&Ni(Tt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),Ad(f,Ue,en),k=tu(f),on=Ar(f,!0),Mo=K&&wr(O,sa?Nn:nn)(),p?(C=[p+A.os2,P+Rt+un],C.t=Ue,qt=p===rn?uu(f,A)+P+Rt:0,qt&&(C.push(A.d,qt+un),Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=qt+un)),wa(C),Cn&&ut.forEach(function(le){le.pin===Cn&&le.vars.pinSpacing!==!1&&(le._subPinOffset=!0)}),K&&ne(me)):(qt=uu(f,A),qt&&Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=qt+un)),K&&(ln={top:on.top+(sa?hi-ue:Mo)+un,left:on.left+(sa?Mo:hi-ue)+un,boxSizing:"border-box",position:"fixed"},ln[Bs]=ln["max"+Ea]=Math.ceil(on.width)+un,ln[ks]=ln["max"+Gd]=Math.ceil(on.height)+un,ln[Di]=ln[Di+$o]=ln[Di+Zo]=ln[Di+Ko]=ln[Di+Jo]="0",ln[rn]=en[rn],ln[rn+$o]=en[rn+$o],ln[rn+Zo]=en[rn+Zo],ln[rn+Ko]=en[rn+Ko],ln[rn+Jo]=en[rn+Jo],ie=eS(B,ln,b),Kn&&ne(0)),i?(Mc=i._initted,bd(1),i.render(i.duration(),!0,!0),Ee=ke(A.a)-Be+P+Rt,ae=Math.abs(P-Ee)>1,K&&ae&&ie.splice(ie.length-2,2),i.render(0,!0,!0),Mc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bd(0)):Ee=P,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(h&&ne()&&!x)for(on=h.parentNode;on&&on!==Tt;)on._pinOffset&&(ue-=on._pinOffset,L-=on._pinOffset),on=on.parentNode;Xr&&Xr.forEach(function(le){return le.revert(!1,!0)}),R.start=ue,R.end=L,Y=fe=Kn?me:ne(),!x&&!Kn&&!ss&&(Y<me&&ne(me),R.scroll.rec=0),R.revert(!1,!0),be=On(),W&&(se=-1,W.restart(!0)),Un=0,i&&V&&(i._initted||ge)&&i.progress()!==ge&&i.progress(ge||0,!0).render(i.time(),!0,!0),(jt||Ce!==R.progress||x||_||i&&!i._initted)&&(i&&!V&&(i._initted||Ce||i.vars.immediateRender!==!1)&&i.totalProgress(x&&ue<-.001&&!Ce?Ze.utils.normalize(ue,L,0):Ce,!0),R.progress=jt||(Y-ue)/P===Ce?0:Ce),f&&p&&(Ue._pinOffset=Math.round(R.progress*Ee)),oe&&oe.invalidate(),isNaN($)||($-=Ze.getProperty(U,A.p),de-=Ze.getProperty(re,A.p),nu(U,A,$),nu(Z,A,$-(qe||0)),nu(re,A,de),nu(X,A,de-(qe||0))),jt&&!Kn&&R.update(),u&&!Kn&&!D&&(D=!0,u(R),D=!1)}},R.getVelocity=function(){return(ne()-fe)/(On()-Vo)*1e3||0},R.endAnimation=function(){Go(R.callbackAnimation),i&&(oe?oe.progress(1):i.paused()?V||Go(i,R.direction<0,1):Go(i,i.reversed()))},R.labelToScroll=function(ye){return i&&i.labels&&(ue||R.refresh()||ue)+i.labels[ye]/i.duration()*P||0},R.getTrailing=function(ye){var ze=ut.indexOf(R),ve=R.direction>0?ut.slice(0,ze).reverse():ut.slice(ze+1);return(_i(ye)?ve.filter(function(qe){return qe.vars.preventOverlaps===ye}):ve).filter(function(qe){return R.direction>0?qe.end<=ue:qe.start>=L})},R.update=function(ye,ze,ve){if(!(x&&!ve&&!ye)){var qe=Kn===!0?me:R.scroll(),dt=ye?0:(qe-ue)/P,st=dt<0?0:dt>1?1:dt||0,Ot=R.progress,jt,Ft,Rt,bt,an,Pt,Cn,ui;if(ze&&(fe=Y,Y=x?ne():qe,y&&(De=Ie,Ie=i&&!V?i.totalProgress():st)),m&&f&&!Un&&!Jc&&Ui&&(!st&&ue<qe+(qe-fe)/(On()-Vo)*m?st=1e-4:st===1&&L>qe+(qe-fe)/(On()-Vo)*m&&(st=.9999)),st!==Ot&&R.enabled){if(jt=R.isActive=!!st&&st<1,Ft=!!Ot&&Ot<1,Pt=jt!==Ft,an=Pt||!!st!=!!Ot,R.direction=st>Ot?1:-1,R.progress=st,an&&!Un&&(Rt=st&&!Ot?0:st===1?1:Ot===1?2:3,V&&(bt=!Pt&&H[Rt+1]!=="none"&&H[Rt+1]||H[Rt],ui=i&&(bt==="complete"||bt==="reset"||bt in i))),I&&(Pt||ui)&&(ui||d||!i)&&(Fn(I)?I(R):R.getTrailing(I).forEach(function(hi){return hi.endAnimation()})),V||(oe&&!Un&&!Jc?(oe._dp._time-oe._start!==oe._time&&oe.render(oe._dp._time-oe._start),oe.resetTo?oe.resetTo("totalProgress",st,i._tTime/i._tDur):(oe.vars.totalProgress=st,oe.invalidate().restart())):i&&i.totalProgress(st,!!(Un&&(be||ye)))),f){if(ye&&p&&(Ue.style[p+A.os2]=We),!K)pe(Wo(Be+Ee*st));else if(an){if(Cn=!ye&&st>Ot&&L+1>qe&&qe+1>=sr(O,A),b)if(!ye&&(jt||Cn)){var qt=Ar(f,!0),en=qe-ue;Kg(f,Tt,qt.top+(A===nn?en:0)+un,qt.left+(A===nn?0:en)+un)}else Kg(f,Ue);wa(jt||Cn?ie:k),ae&&st<1&&jt||pe(Be+(st===1&&!Cn?Ee:0))}}y&&!q.tween&&!Un&&!Jc&&W.restart(!0),o&&(Pt||M&&st&&(st<1||!Td))&&jo(o.targets).forEach(function(hi){return hi.classList[jt||M?"add":"remove"](o.className)}),a&&!V&&!ye&&a(R),an&&!Un?(V&&(ui&&(bt==="complete"?i.pause().totalProgress(1):bt==="reset"?i.restart(!0).pause():bt==="restart"?i.restart(!0):i[bt]()),a&&a(R)),(Pt||!Td)&&(c&&Pt&&ya(R,c),te[Rt]&&ya(R,te[Rt]),M&&(st===1?R.kill(!1,1):te[Rt]=0),Pt||(Rt=st===1?1:3,te[Rt]&&ya(R,te[Rt]))),S&&!jt&&Math.abs(R.getVelocity())>(Xo(S)?S:2500)&&(Go(R.callbackAnimation),oe?oe.progress(1):Go(i,bt==="reverse"?1:!st,1))):V&&a&&!Un&&a(R)}if(Te){var on=x?qe/x.duration()*(x._caScrollDist||0):qe;T(on+(U._isFlipped?1:0)),Te(on)}Ne&&Ne(-qe/x.duration()*(x._caScrollDist||0))}},R.enable=function(ye,ze){R.enabled||(R.enabled=!0,gn(O,"resize",qo),N||gn(O,"scroll",Sa),ce&&gn(r,"refreshInit",ce),ye!==!1&&(R.progress=Ce=0,Y=fe=se=ne()),ze!==!1&&R.refresh())},R.getTween=function(ye){return ye&&q?q.tween:oe},R.setPositions=function(ye,ze,ve,qe){if(x){var dt=x.scrollTrigger,st=x.duration(),Ot=dt.end-dt.start;ye=dt.start+Ot*ye/st,ze=dt.start+Ot*ze/st}R.refresh(!1,!1,{start:Vg(ye,ve&&!!R._startClamp),end:Vg(ze,ve&&!!R._endClamp)},qe),R.update()},R.adjustPinSpacing=function(ye){if(C&&ye){var ze=C.indexOf(A.d)+1;C[ze]=parseFloat(C[ze])+ye+un,C[1]=parseFloat(C[1])+ye+un,wa(C)}},R.disable=function(ye,ze){if(ye!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,ze||oe&&oe.pause(),me=0,z&&(z.uncache=1),ce&&mn(r,"refreshInit",ce),W&&(W.pause(),q.tween&&q.tween.kill()&&(q.tween=0)),!N)){for(var ve=ut.length;ve--;)if(ut[ve].scroller===O&&ut[ve]!==R)return;mn(O,"resize",qo),N||mn(O,"scroll",Sa)}},R.kill=function(ye,ze){R.disable(ye,ze),oe&&!ze&&oe.kill(),l&&delete Dd[l];var ve=ut.indexOf(R);ve>=0&&ut.splice(ve,1),ve===$n&&au>0&&$n--,ve=0,ut.forEach(function(qe){return qe.scroller===R.scroller&&(ve=1)}),ve||Kn||ss||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ye&&i.revert({kill:!1}),ze||i.kill()),Z&&[Z,X,U,re].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),Qo===R&&(Qo=0),f&&(z&&(z.uncache=1),ve=0,ut.forEach(function(qe){return qe.pin===f&&ve++}),ve||(z.spacer=0)),n.onKill&&n.onKill(R)},ut.push(R),R.enable(!1,!1),we&&we(R),i&&i.add&&!P){var Se=R.update;R.update=function(){R.update=Se,lt.cache++,ue||L||R.refresh()},Ze.delayedCall(.01,R.update),P=.01,ue=L=0}else R.refresh();f&&Kv()},r.register=function(n){return Ma||(Ze=n||o_(),a_()&&window.document&&r.enable(),Ma=Ho),Ma},r.defaults=function(n){if(n)for(var i in n)jc[i]=n[i];return jc},r.disable=function(n,i){Ho=0,ut.forEach(function(a){return a[i?"kill":"disable"](n)}),mn(ht,"wheel",Sa),mn(At,"scroll",Sa),clearInterval(Zc),mn(At,"touchcancel",rr),mn(Tt,"touchstart",rr),Kc(mn,At,"pointerdown,touchstart,mousedown",Hg),Kc(mn,At,"pointerup,touchend,mouseup",Wg),cu.kill(),$c(mn);for(var s=0;s<lt.length;s+=3)Qc(mn,lt[s],lt[s+1]),Qc(mn,lt[s],lt[s+2])},r.enable=function(){if(ht=window,At=document,xi=At.documentElement,Tt=At.body,Ze){if(jo=Ze.utils.toArray,Yo=Ze.utils.clamp,Id=Ze.core.context||rr,bd=Ze.core.suppressOverwrites||rr,Fd=ht.history.scrollRestoration||"auto",Nd=ht.pageYOffset||0,Ze.core.globals("ScrollTrigger",r),Tt){Ho=1,Ta=document.createElement("div"),Ta.style.height="100vh",Ta.style.position="absolute",__(),Wv(),$t.register(Ze),r.isTouch=$t.isTouch,rs=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pd=$t.isTouch===1,gn(ht,"wheel",Sa),Od=[ht,At,xi,Tt],Ze.matchMedia?(r.matchMedia=function(u){var d=Ze.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Ze.addEventListener("matchMediaInit",function(){m_(),Hd()}),Ze.addEventListener("matchMediaRevert",function(){return p_()}),Ze.addEventListener("matchMedia",function(){Fs(0,1),Hs("matchMedia")}),Ze.matchMedia().add("(orientation: portrait)",function(){return Ed(),Ed})):console.warn("Requires GSAP 3.11.0 or later"),Ed(),gn(At,"scroll",Sa);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,a=Ze.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ar(Tt),nn.m=Math.round(o.top+nn.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),Zc=setInterval(Yg,250),Ze.delayedCall(.5,function(){return Jc=0}),gn(At,"touchcancel",rr),gn(Tt,"touchstart",rr),Kc(gn,At,"pointerdown,touchstart,mousedown",Hg),Kc(gn,At,"pointerup,touchend,mouseup",Wg),Rd=Ze.utils.checkPrefix("transform"),ou.push(Rd),Ma=On(),cu=Ze.delayedCall(.2,Fs).pause(),ba=[At,"visibilitychange",function(){var u=ht.innerWidth,d=ht.innerHeight;At.hidden?(kg=u,zg=d):(kg!==u||zg!==d)&&qo()},At,"DOMContentLoaded",Fs,ht,"load",Fs,ht,"resize",qo],$c(gn),ut.forEach(function(u){return u.enable(0,1)}),l=0;l<lt.length;l+=3)Qc(mn,lt[l],lt[l+1]),Qc(mn,lt[l],lt[l+2])}else if(At){var c=function u(){r.enable(),At.removeEventListener("DOMContentLoaded",u)};At.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Td=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Zc)||(Zc=i)&&setInterval(Yg,i),"ignoreMobileResize"in n&&(Pd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($c(mn)||$c(gn,n.autoRefreshEvents||"none"),i_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Zn(n),a=lt.indexOf(s),o=Gs(s);~a&&lt.splice(a,o?6:2),i&&(o?Xi.unshift(ht,i,Tt,i,xi,i):Xi.unshift(s,i))},r.clearMatchMedia=function(n){ut.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(_i(n)?Zn(n):n).getBoundingClientRect(),o=a[s?Bs:ks]*i||0;return s?a.right-o>0&&a.left+o<ht.innerWidth:a.bottom-o>0&&a.top+o<ht.innerHeight},r.positionInViewport=function(n,i,s){_i(n)&&(n=Zn(n));var a=n.getBoundingClientRect(),o=a[s?Bs:ks],l=i==null?o/2:i in hu?hu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ht.innerWidth:(a.top+l)/ht.innerHeight},r.killAll=function(n){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Vs.killAll||[];Vs={},i.forEach(function(s){return s()})}},r})();it.version="3.15.1";it.saveStyles=function(r){return r?jo(r).forEach(function(e){if(e&&e.style){var t=gi.indexOf(e);t>=0&&gi.splice(t,5),gi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ze.core.getCache(e),Id())}}):gi};it.revert=function(r,e){return Hd(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?qo(!0):(Ma||it.register())&&Fs(!0)};it.update=function(r){return++lt.cache&&Cr(r===!0?2:0)};it.clearScrollMemory=g_;it.maxScroll=function(r,e){return sr(r,e?Nn:nn)};it.getScrollFunc=function(r,e){return wr(Zn(r),e?Nn:nn)};it.getById=function(r){return Dd[r]};it.getAll=function(){return ut.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Ui};it.snapDirectional=Vd;it.addEventListener=function(r,e){var t=Vs[r]||(Vs[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=Vs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Ze.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),h.push(p),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Fn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Fn(s)&&(s=s(),gn(it,"refresh",function(){return s=e.batchMax()})),jo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var jg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Cd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===xi&&r(Tt,t)},iu={auto:1,scroll:1},nS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ze.core.getCache(s),o=On(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(iu[(l=Ni(s)).overflowY]||iu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Gs(s)&&(iu[(l=Ni(s)).overflowY]||iu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},y_=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&nS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&gn(At,$t.eventTypes[0],t_,!1,!0)},onDisable:function(){return mn(At,$t.eventTypes[0],t_,!0)}})},iS=/(input|label|select|textarea)/i,e_,t_=function(e){var t=iS.test(e.target.tagName);(t||e_)&&(e._gsapAllow=!0,e_=t)},rS=function(e){Os(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Zn(e.target)||xi,u=Ze.core.globals().ScrollSmoother,d=u&&u.get(),h=rs&&(e.content&&Zn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=wr(c,nn),p=wr(c,Nn),_=1,m=($t.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,g=0,v=Fn(i)?function(){return i(o)}:function(){return i||2.8},M,y,b=y_(c,e.type,!0,s),w=function(){return y=!1},x=rr,S=rr,I=function(){l=sr(c,nn),S=Yo(rs?1:0,l),n&&(x=Yo(0,sr(c,Nn))),M=zs},A=function(){h._gsap.y=Wo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},V=function(){if(y){requestAnimationFrame(w);var J=Wo(o.deltaY/2),ee=S(f.v-J);if(h&&ee!==f.v+f.offset){f.offset=ee-f.v;var R=Wo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",f.cacheID=lt.cache,Cr()}return!0}f.offset&&A(),y=!0},O,j,N,K,te=function(){I(),O.isActive()&&O.vars.scrollY>l&&(f()>l?O.progress(1)&&f(l):O.resetTo("scrollY",l))};return h&&Ze.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return rs&&H.type==="touchmove"&&V(H)||_>1.05&&H.type!=="touchstart"||o.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){y=!1;var H=_;_=Wo((ht.visualViewport&&ht.visualViewport.scale||1)/m),O.pause(),H!==_&&Cd(c,_>1.01?!0:n?!1:"x"),j=p(),N=f(),I(),M=zs},e.onRelease=e.onGestureStart=function(H,J){if(f.offset&&A(),!J)K.restart(!0);else{lt.cache++;var ee=v(),R,ce;n&&(R=p(),ce=R+ee*.05*-H.velocityX/.227,ee*=jg(p,R,ce,sr(c,Nn)),O.vars.scrollX=x(ce)),R=f(),ce=R+ee*.05*-H.velocityY/.227,ee*=jg(f,R,ce,sr(c,nn)),O.vars.scrollY=S(ce),O.invalidate().duration(ee).play(.01),(rs&&O.vars.scrollY>=l||R>=l-1)&&Ze.to({},{onUpdate:te,duration:ee})}a&&a(H)},e.onWheel=function(){O._ts&&O.pause(),On()-g>1e3&&(M=0,g=On())},e.onChange=function(H,J,ee,R,ce){if(zs!==M&&I(),J&&n&&p(x(R[2]===J?j+(H.startX-H.x):p()+J-R[1])),ee){f.offset&&A();var Ae=ce[2]===ee,Oe=Ae?N+H.startY-H.y:f()+ee-ce[1],se=S(Oe);Ae&&Oe!==se&&(N+=se-Oe),f(se)}(ee||J)&&Cr()},e.onEnable=function(){Cd(c,n?!1:"x"),it.addEventListener("refresh",te),gn(ht,"resize",te),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){Cd(c,!0),mn(ht,"resize",te),it.removeEventListener("refresh",te),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new $t(e),o.iOS=rs,rs&&!f()&&f(1),rs&&Ze.ticker.add(rr),K=o._dc,O=Ze.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:x_(f,f(),function(){return O.pause()})},onUpdate:Cr,onComplete:K.vars.onComplete}),o};it.sort=function(r){if(Fn(r))return ut.sort(r);var e=ht.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),ut.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new $t(r)};it.normalizeScroll=function(r){if(typeof r>"u")return Jn;if(r===!0&&Jn)return Jn.enable();if(r===!1){Jn&&Jn.kill(),Jn=r;return}var e=r instanceof $t?r:rS(r);return Jn&&Jn.target===e.target&&Jn.kill(),Gs(e.target)&&(Jn=e),e};it.core={_getVelocityProp:Yc,_inputObserver:y_,_scrollers:lt,_proxies:Xi,bridge:{ss:function(){Ui||Hs("scrollStart"),Ui=On()},ref:function(){return Un}}};o_()&&Ze.registerPlugin(it);function v_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function sS(r,e,t){return e&&v_(r.prototype,e),t&&v_(r,t),r}var wt,du,Bn,Rr,Aa,ar,aS,Ws,S_,ot,or,pu,M_,b_,T_,w_,E_=function(){return typeof window<"u"},A_=function(){return wt||E_()&&(wt=window.gsap)&&wt.registerPlugin&&wt};var oS=function(e){return Math.round(e*1e5)/1e5||0},as=function(e){return ot.maxScroll(e||Bn)},lS=function(e,t){var n=e.parentNode||Aa,i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),a=s.top-i.top,o=s.bottom-i.bottom,l=(Math.abs(a)>Math.abs(o)?a:o)/(1-t),c=-l*t,u,d;return l>0&&(u=s.height/(Bn.innerHeight+s.height),d=u===.5?s.height*2:Math.min(s.height,Math.abs(-l*u/(2*u-1)))*2*(t||1),c+=t?-d*t:-d/2,l+=d),{change:l,offset:c}},cS=function(e){var t=Rr.querySelector(".ScrollSmoother-wrapper");return t||(t=Rr.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},os=(function(){function r(e){var t=this;du||r.register(wt)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},or&&or.kill(),or=this,T_(this);var n=e,i=n.smoothTouch,s=n.onUpdate,a=n.onStop,o=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u=n.wholePixels,d,h,f,p,_,m,g,v,M,y,b,w,x,S,I=this,A=e.effectsPrefix||"",V=ot.getScrollFunc(Bn),O=ot.isTouch===1?i===!0?.8:parseFloat(i)||0:o===0||o===!1?0:parseFloat(o)||.8,j=O&&+e.speed||1,N=0,K=0,te=1,H=M_(0),J=function(){return H.update(-N)},ee={y:0},R=function(){return d.style.overflow="visible"},ce,Ae=function(D){D.update();var P=D.getTween();P&&(P.pause(),P._time=P._dur,P._tTime=P._tDur),ce=!1,D.animation.progress(D.progress,!0)},Oe=function(D,P){(D!==N&&!y||P)&&(u&&(D=Math.round(D)),O&&(d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px"),K=D-N,N=D,ot.isUpdating||r.isRefreshing||ot.update())},se=function(D){return arguments.length?(D<0&&(D=0),ee.y=-D,ce=!0,y?N=-D:Oe(-D),ot.isRefreshing?p.update():V(D/j),this):-N},be=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!ot.isRefreshing){var F=as(h)*j;F<-N&&se(F),w_.restart(!0)}}),Ce,ne=function(D){h.scrollTop=0,!(D.target.contains&&D.target.contains(h)||l&&l(t,D)===!1)&&(ot.isInViewport(D.target)||D.target===Ce||t.scrollTo(D.target,!1,"center center"),Ce=D.target)},q=function(D,P){if(D<P.start)return D;var B=isNaN(P.ratio)?1:P.ratio,ie=P.end-P.start,k=D-P.start,Ue=P.offset||0,He=P.pins||[],ke=He.offset||0,pe=P._startClamp&&P.start<=0||P.pins&&P.pins.offset?0:P._endClamp&&P.end===as()?1:.5;return He.forEach(function(Be){ie-=Be.distance,Be.nativeStart<=D&&(k-=Be.distance)}),ke&&(k*=(ie-ke/B)/ie),D+(k-Ue*pe)/B-k},z=function F(D,P,B){B||(D.pins.length=D.pins.offset=0);var ie=D.pins,k=D.markers,Ue,He,ke,pe,Be,Ee,We,C;for(We=0;We<P.length;We++)if(C=P[We],D.trigger&&C.trigger&&D!==C&&(C.trigger===D.trigger||C.pinnedContainer===D.trigger||D.trigger.contains(C.trigger))&&(Be=C._startNative||C._startClamp||C.start,Ee=C._endNative||C._endClamp||C.end,ke=q(Be,D),pe=C.pin&&Ee>0?ke+(Ee-Be):q(Ee,D),C.setPositions(ke,pe,!0,(C._startClamp?Math.max(0,ke):ke)-Be),C.markerStart&&k.push(wt.quickSetter([C.markerStart,C.markerEnd],"y","px")),C.pin&&C.end>0&&!B)){if(Ue=C.end-C.start,He=D._startClamp&&C.start<0,He){if(D.start>0){D.setPositions(0,D.end+(D._startNative-D.start),!0),F(D,P);return}Ue+=C.start,ie.offset=-C.start}ie.push({start:C.start,nativeStart:Be,end:C.end,distance:Ue,trig:C}),D.setPositions(D.start,D.end+(He?-C.start:Ue),!0)}},G=function(D,P){_.forEach(function(B){return z(B,D,P)})},Y=function(){Aa=Rr.documentElement,ar=Rr.body,R(),requestAnimationFrame(R),_&&(ot.getAll().forEach(function(D){D._startNative=D.start,D._endNative=D.end}),_.forEach(function(D){var P=D._startClamp||D.start,B=D.autoSpeed?Math.min(as(),D.end):P+Math.abs((D.end-P)/D.ratio),ie=B-D.end;if(P-=ie/2,B-=ie/2,P>B){var k=P;P=B,B=k}D._startClamp&&P<0?(B=D.ratio<0?as():D.end/D.ratio,ie=B-D.end,P=0):(D.ratio<0||D._endClamp&&B>=as())&&(B=as(),P=D.ratio<0||D.ratio>1?0:B-(B-D.start)/D.ratio,ie=(B-P)*D.ratio-(D.end-D.start)),D.offset=ie||1e-4,D.pins.length=D.pins.offset=0,D.setPositions(P,B,!0)}),G(ot.sort())),H.reset()},fe=function(){return ot.addEventListener("refresh",Y)},ue=function(){return _&&_.forEach(function(D){return D.vars.onRefresh(D)})},L=function(){return _&&_.forEach(function(D){return D.vars.onRefreshInit(D)}),ue},Z=function(D,P,B,ie){return function(){var k=typeof P=="function"?P(B,ie):P;k||k===0||(k=ie.getAttribute("data-"+A+D)||(D==="speed"?1:0)),ie.setAttribute("data-"+A+D,k);var Ue=(k+"").substr(0,6)==="clamp(";return{clamp:Ue,value:Ue?k.substr(6,k.length-7):k}}},X=function(D,P,B,ie,k){k=(typeof k=="function"?k(ie,D):k)||0;var Ue=Z("speed",P,ie,D),He=Z("lag",B,ie,D),ke=wt.getProperty(D,"y"),pe=D._gsap,Be,Ee,We,C,T,ae,Te=[],xe=function(){P=Ue(),B=parseFloat(He().value),Be=parseFloat(P.value)||1,We=P.value==="auto",T=We||Ee&&Ee._startClamp&&Ee.start<=0||Te.offset?0:Ee&&Ee._endClamp&&Ee.end===as()?1:.5,C&&C.kill(),C=B&&wt.to(D,{ease:pu,overwrite:!1,y:"+=0",duration:B}),Ee&&(Ee.ratio=Be,Ee.autoSpeed=We)},Ie=function(){pe.y=ke+"px",pe.renderTransform(1),xe()},De=[],oe=0,_e=function(W){if(We){Ie();var me=lS(D,S_(0,1,-W.start/(W.end-W.start)));oe=me.change,ae=me.offset}else ae=Te.offset||0,oe=(W.end-W.start-ae)*(1-Be);Te.forEach(function(ge){return oe-=ge.distance*(1-Be)}),W.offset=oe||.001,W.vars.onUpdate(W),C&&C.progress(1)};return xe(),(Be!==1||We||C)&&(Ee=ot.create({trigger:We?D.parentNode:D,start:function(){return P.clamp?"clamp(top bottom+="+k+")":"top bottom+="+k},end:function(){return P.value<0?"max":P.clamp?"clamp(bottom top-="+k+")":"bottom top-="+k},scroller:h,scrub:!0,refreshPriority:-999,onRefreshInit:Ie,onRefresh:_e,onKill:function(W){var me=_.indexOf(W);me>=0&&_.splice(me,1),Ie()},onUpdate:function(W){var me=ke+oe*(W.progress-T),ge=Te.length,Ne=0,we,Le,Re;if(W.offset){if(ge){for(Le=-N,Re=W.end;ge--;){if(we=Te[ge],we.trig.isActive||Le>=we.start&&Le<=we.end){C&&(we.trig.progress+=we.trig.direction<0?.001:-.001,we.trig.update(0,0,1),C.resetTo("y",parseFloat(pe.y),-K,!0),te&&C.progress(1));return}Le>we.end&&(Ne+=we.distance),Re-=we.distance}me=ke+Ne+oe*((wt.utils.clamp(W.start,W.end,Le)-W.start-Ne)/(Re-W.start)-T)}De.length&&!We&&De.forEach(function(Fe){return Fe(me-Ne)}),me=oS(me+ae),C?(C.resetTo("y",me,-K,!0),te&&C.progress(1)):(pe.y=me+"px",pe.renderTransform(1))}}}),_e(Ee),wt.core.getCache(Ee.trigger).stRevert=L,Ee.startY=ke,Ee.pins=Te,Ee.markers=De,Ee.ratio=Be,Ee.autoSpeed=We,D.style.willChange="transform"),Ee};fe(),ot.addEventListener("killAll",fe),wt.delayedCall(.5,function(){return te=0}),this.scrollTop=se,this.scrollTo=function(F,D,P){var B=wt.utils.clamp(0,as(),isNaN(F)?t.offset(F,P,!!D&&!y):+F);D?y?wt.to(t,{duration:O,scrollTop:B,overwrite:"auto",ease:pu}):V(B):se(B)},this.offset=function(F,D,P){F=Ws(F)[0];var B=F.style.cssText,ie=ot.create({trigger:F,start:D||"top top"}),k;return _&&(te?ot.refresh():G([ie],!0)),k=ie.start/(P?j:1),ie.kill(!1),F.style.cssText=B,wt.core.getCache(F).uncache=1,k};function U(){return f=d.clientHeight,d.style.overflow="visible",ar.style.height=Bn.innerHeight+(f-Bn.innerHeight)/j+"px",f-Bn.innerHeight}this.content=function(F){if(arguments.length){var D=Ws(F||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||ar.children[0];return D!==d&&(d=D,M=d.getAttribute("style")||"",be&&be.observe(d),wt.set(d,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),O||wt.set(d,{clearProps:"transform"})),this}return d},this.wrapper=function(F){return arguments.length?(h=Ws(F||"#smooth-wrapper")[0]||cS(d),v=h.getAttribute("style")||"",U(),wt.set(h,O?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):h},this.effects=function(F,D){var P;if(_||(_=[]),!F)return _.slice(0);F=Ws(F),F.forEach(function(Be){for(var Ee=_.length;Ee--;)_[Ee].trigger===Be&&_[Ee].kill()}),D=D||{};var B=D,ie=B.speed,k=B.lag,Ue=B.effectsPadding,He=[],ke,pe;for(ke=0;ke<F.length;ke++)pe=X(F[ke],ie,k,ke,Ue),pe&&He.push(pe);return(P=_).push.apply(P,He),D.refresh!==!1&&ot.refresh(),He},this.sections=function(F,D){var P;if(m||(m=[]),!F)return m.slice(0);var B=Ws(F).map(function(ie){return ot.create({trigger:ie,start:"top 120%",end:"bottom -20%",onToggle:function(Ue){ie.style.opacity=Ue.isActive?"1":"0",ie.style.pointerEvents=Ue.isActive?"all":"none"}})});return D&&D.add?(P=m).push.apply(P,B):m=B.slice(0),B},this.content(e.content),this.wrapper(e.wrapper),this.render=function(F){return Oe(F||F===0?F:N)},this.getVelocity=function(){return H.getVelocity(-N)},ot.scrollerProxy(h,{scrollTop:se,scrollHeight:function(){return U()&&ar.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!O,content:d,getBoundingClientRect:function(){return{top:0,left:0,width:Bn.innerWidth,height:Bn.innerHeight}}}),ot.defaults({scroller:h});var re=ot.getAll().filter(function(F){return F.scroller===Bn||F.scroller===h});re.forEach(function(F){return F.revert(!0,!0)}),p=ot.create({animation:wt.fromTo(ee,{y:function(){return S=0,0}},{y:function(){return S=1,-U()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(S){var D=ce;D&&(Ae(p),ee.y=N),Oe(ee.y,D),J(),s&&!y&&s(I)}}}),onRefreshInit:function(D){if(!r.isRefreshing){if(r.isRefreshing=!0,_){var P=ot.getAll().filter(function(ie){return!!ie.pin});_.forEach(function(ie){ie.vars.pinnedContainer||P.forEach(function(k){if(k.pin.contains(ie.trigger)){var Ue=ie.vars;Ue.pinnedContainer=k.pin,ie.vars=null,ie.init(Ue,ie.animation)}})})}var B=D.getTween();x=B&&B._end>B._dp._time,w=N,ee.y=0,O&&(ot.isTouch===1&&(h.style.position="absolute"),h.scrollTop=0,ot.isTouch===1&&(h.style.position="fixed"))}},onRefresh:function(D){D.animation.invalidate(),ee.y=0,D.setPositions(D.start,U()/j),x||Ae(D),ee.y=-V()*j,Oe(ee.y),te||(x&&(ce=!1),D.animation.progress(wt.utils.clamp(0,1,w/j/-D.end))),x&&(D.progress-=.001,D.update()),r.isRefreshing=!1},id:"ScrollSmoother",scroller:Bn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return U()/j},onScrubComplete:function(){H.reset(),a&&a(t)},scrub:O||!0}),this.smooth=function(F){return arguments.length&&(O=F||0,j=O&&+e.speed||1,p.scrubDuration(F)),p.getTween()?p.getTween().duration():0},p.getTween()&&(p.getTween().vars.ease=e.ease||pu),this.scrollTrigger=p,e.effects&&this.effects(e.effects===!0?"[data-"+A+"speed], [data-"+A+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),re.forEach(function(F){F.vars.scroller=h,F.revert(!1,!0),F.init(F.vars,F.animation)}),this.paused=function(F,D){return arguments.length?(!!y!==F&&(F?(p.getTween()&&p.getTween().pause(),V(-N/j),H.reset(),b=ot.normalizeScroll(),b&&b.disable(),y=ot.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return se(-N)}}),y.nested=b_(Aa,"wheel,touch,scroll",!0,D!==!1)):(y.nested.kill(),y.kill(),y=0,b&&b.enable(),p.progress=(-N/j-p.start)/(p.end-p.start),Ae(p))),this):!!y},this.kill=this.revert=function(){t.paused(!1),Ae(p),p.kill();for(var F=(_||[]).concat(m||[]),D=F.length;D--;)F[D].kill();ot.scrollerProxy(h),ot.removeEventListener("killAll",fe),ot.removeEventListener("refresh",Y),h.style.cssText=v,d.style.cssText=M;var P=ot.defaults({});P&&P.scroller===h&&ot.defaults({scroller:Bn}),t.normalizer&&ot.normalizeScroll(!1),clearInterval(g),or=null,be&&be.disconnect(),ar.style.removeProperty("height"),Bn.removeEventListener("focusin",ne)},this.refresh=function(F,D){return p.refresh(F,D)},c&&(this.normalizer=ot.normalizeScroll(c===!0?{debounce:!0,content:!O&&d}:c)),ot.config(e),"scrollBehavior"in Bn.getComputedStyle(ar)&&wt.set([ar,Aa],{scrollBehavior:"auto"}),Bn.addEventListener("focusin",ne),g=setInterval(J,250),Rr.readyState==="loading"||requestAnimationFrame(function(){return ot.refresh()})}return r.register=function(t){return du||(wt=t||A_(),E_()&&window.document&&(Bn=window,Rr=document,Aa=Rr.documentElement,ar=Rr.body),wt&&(Ws=wt.utils.toArray,S_=wt.utils.clamp,pu=wt.parseEase("expo"),T_=wt.core.context||function(){},ot=wt.core.globals().ScrollTrigger,wt.core.globals("ScrollSmoother",r),ar&&ot&&(w_=wt.delayedCall(.2,function(){return ot.isRefreshing||or&&or.refresh()}).pause(),aS=[Bn,Rr,Aa,ar],M_=ot.core._getVelocityProp,b_=ot.core._inputObserver,r.refresh=ot.refresh,du=1))),du},sS(r,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),r})();os.version="3.15.1";os.create=function(r){return or&&r&&or.content()===Ws(r.content)[0]?or:new os(r)};os.get=function(){return or};A_()&&wt.registerPlugin(os);var tl,nl,C_=typeof Symbol=="function"?Symbol():"_split",Xd,uS=()=>Xd||Ra.register(window.gsap),R_=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,il=r=>r?typeof r=="string"?il(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...il(t)):e.push(t),e),[]):[r]:[],P_=r=>il(r).filter(e=>e&&e.nodeType===1),mu=[],Wd=function(){},hS={add:r=>r()},fS=/\s+/g,I_=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),gu={left:0,top:0,width:0,height:0},dS=(r,e)=>{for(;++e<r.length&&r[e]===gu;);return r[e]||gu},L_=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},D_=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||mu),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},N_=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Ca=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),qd=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let d=document.createElement(i),h=t.length+1;return n&&(d.className=n+(l?" "+n+h:"")),a&&d.style.setProperty("--"+r,h+""),s!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=o),d.textContent=u,t.push(d),d};return l&&(n=n.replace("++","")),c.collection=t,c},pS=(r,e,t,n)=>{let i=qd("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},U_=(r,e,t,n,i,s,a,o,l,c)=>{var u;let d=Array.from(r.childNodes),h=0,{wordDelimiter:f,reduceWhiteSpace:p=!0,prepareText:_}=e,m=r.getBoundingClientRect(),g=m,v=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=s&&c&&window.getComputedStyle(r).direction==="rtl",y=0,b=t.collection,w,x,S,I,A,V,O,j,N,K,te,H,J,ee,R,ce,Ae,Oe;for(typeof f=="object"?(S=f.delimiter||f,x=f.replaceWith||""):x=f===""?"":f||" ",w=x!==" ";h<d.length;h++)if(I=d[h],I.nodeType===3){for(R=I.textContent||"",p?R=R.replace(fS," "):v&&(R=R.replace(/\n/g,x+`
`)),_&&(R=_(R,r)),I.textContent=R,A=x||S?R.split(S||x):R.match(o)||mu,Ae=A[A.length-1],j=w?Ae.slice(-1)===" ":!Ae,Ae||A.pop(),g=m,O=w?A[0].charAt(0)===" ":!A[0],O&&Ca(" ",r,I),A[0]||A.shift(),D_(A,l),s&&c||(I.textContent=""),N=1;N<=A.length;N++)if(ce=A[N-1],!p&&v&&ce.charAt(0)===`
`&&((u=I.previousSibling)==null||u.remove(),Ca(document.createElement("br"),r,I),ce=ce.slice(1)),!p&&ce==="")Ca(x,r,I);else if(ce===" ")r.insertBefore(document.createTextNode(" "),I);else{if(w&&ce.charAt(0)===" "&&Ca(" ",r,I),y&&N===1&&!O&&b.indexOf(y.parentNode)>-1?(V=b[b.length-1],V.appendChild(document.createTextNode(n?"":ce))):(V=t(n?"":ce),Ca(V,r,I),y&&N===1&&!O&&V.insertBefore(y,V.firstChild)),n){if(te=R_?D_([...R_.segment(ce)].map(se=>se.segment),l):ce.match(o)||mu,l){let se=ce.match(l);se&&se.some(be=>te.indexOf(be)<0)&&(te=ce.match(o)||mu)}for(Oe=0;Oe<te.length;Oe++)V.appendChild(te[Oe]===" "?document.createTextNode(" "):n(te[Oe]))}if(s&&c){if(R=I.textContent=R.substring(ce.length+1,R.length),K=V.getBoundingClientRect(),K.top>g.top&&(M?K.left>=g.left:K.left<=g.left)){for(H=r.cloneNode(),J=r.childNodes[0];J&&J!==V;)ee=J,J=J.nextSibling,H.appendChild(ee);r.parentNode.insertBefore(H,r),i&&N_(H)}g=K}(N<A.length||j)&&Ca(N>=A.length?" ":w&&ce.slice(-1)===" "?" "+x:x,r,I)}r.removeChild(I),y=0}else I.nodeType===1&&(a&&a.indexOf(I)>-1?(b.indexOf(I.previousSibling)>-1&&b[b.length-1].appendChild(I),y=I):(U_(I,e,t,n,i,s,a,o,l,!0),y=0),i&&N_(I))},O_=class F_{constructor(e,t){this.isSplit=!1,uS(),this.elements=P_(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(s=>{var a;t.overwrite!==!1&&((a=s[C_])==null||a._data.orig.filter(({element:o})=>o===s).forEach(L_)),s[C_]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let s=n.length,a;for(;s--;){a=n[s];let o=a.element.offsetWidth;if(o!==a.width){a.width=o,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Wd(this),this.split(t)}split(e){return(this._ctx||hS).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,d=t.indexOf("chars")>-1,h=t.indexOf("words")>-1,f=d&&!h&&!u,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+I_.source,"gu"):I_,m=!!e.ignore&&P_(e.ignore),{orig:g,animTime:v,obs:M}=this._data,y;(d||h||u)&&(this.elements.forEach((b,w)=>{g[w]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let x=[],S=[],I=[],A=d?qd("char",e,x):null,V=qd("word",e,S),O,j,N,K;if(U_(b,e,V,A,f,i&&(u||f),m,_,p,!1),u){let te=il(b.childNodes),H=pS(b,te,e,I),J,ee=[],R=0,ce=window.getComputedStyle(b).direction==="rtl",Ae=te.map(be=>be.nodeType===1?be.getBoundingClientRect():gu),Oe=gu,se;for(O=0;O<te.length;O++)J=te[O],J.nodeType===1&&(J.nodeName==="BR"?((!O||te[O-1].nodeName!=="BR")&&(ee.push(J),H(R,O+1)),R=O+1,Oe=dS(Ae,O)):(se=Ae[O],O&&se.top>Oe.top&&(ce?se.left+se.width>Oe.left+1:se.left<Oe.left+Oe.width-1)&&(H(R,O),R=O),Oe=se));R<O&&H(R,O),ee.forEach(be=>{var Ce;return(Ce=be.parentNode)==null?void 0:Ce.removeChild(be)})}if(!h){for(O=0;O<S.length;O++)if(j=S[O],d||!j.nextSibling||j.nextSibling.nodeType!==3)if(s&&!u){for(N=document.createElement("span"),N.style.whiteSpace="nowrap";j.firstChild;)N.appendChild(j.firstChild);j.replaceWith(N)}else j.replaceWith(...j.childNodes);else K=j.nextSibling,K&&K.nodeType===3&&(K.textContent=(j.textContent||"")+(K.textContent||""),j.remove());S.length=0,b.normalize()}this.lines.push(...I),this.words.push(...S),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let w=b.cloneNode();return b.replaceWith(w),w.appendChild(b),b.className&&(w.className=b.className.trim().split(" ").map(x=>x+"-mask").join(" ")),w.style.overflow="clip",w.style.verticalAlign="top",w}))),this.isSplit=!0,nl&&u&&o&&nl.addEventListener("loadingdone",this._split),(y=a&&a(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),u&&o&&this.elements.forEach((b,w)=>{g[w].width=b.offsetWidth,M&&M.observe(b)})}),this}kill(){let{obs:e,t}=this._data;e&&e.disconnect(),clearTimeout(t),nl?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(L_),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new F_(e,t)}static register(e){tl=tl||e||window.gsap,tl&&(il=tl.utils.toArray,Wd=tl.core.context||Wd),!Xd&&window.innerWidth>0&&(nl=document.fonts,Xd=!0)}};O_.version="3.15.1";var Ra=O_;var b0=0,Np=1,T0=2;var Kl=1,w0=2,uo=3,xs=0,wn=1,ti=2,zr=0,ho=1,ea=2,Up=3,Op=4,E0=5;var ta=100,A0=101,C0=102,R0=103,P0=104,I0=200,L0=201,D0=202,N0=203,Fp=204,Bp=205,U0=206,O0=207,F0=208,B0=209,k0=210,z0=211,G0=212,V0=213,H0=214,qu=0,Yu=1,Zu=2,Xa=3,Ju=4,$u=5,Ku=6,Qu=7,kp=0,W0=1,X0=2,zi=0,Ql=1,jl=2,ec=3,tc=4,nc=5,ic=6,rc=7;var zp=300,na=301,fo=302,Ch=303,Rh=304,qa=1e3,Fi=1001,Ya=1002,xn=1003,q0=1004;var sc=1005;var jn=1006,Ph=1007;var Gr=1008;var ci=1009,Gp=1010,Vp=1011,po=1012,Ih=1013,Ki=1014,Gi=1015,En=1016,Lh=1017,Dh=1018,ia=1020,Hp=35902,Wp=35899,Xp=1021,qp=1022,Qi=1023,Fr=1026,Vr=1027,Nh=1028,Uh=1029,ys=1030,Oh=1031;var Fh=1033,ac=33776,oc=33777,lc=33778,cc=33779,Bh=35840,kh=35841,zh=35842,Gh=35843,Vh=36196,Hh=37492,Wh=37496,Xh=37488,qh=37489,uc=37490,Yh=37491,Zh=37808,Jh=37809,$h=37810,Kh=37811,Qh=37812,jh=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,af=37819,of=37820,lf=37821,cf=36492,uf=36494,hf=36495,ff=36283,df=36284,hc=36285,pf=36286;var ml=2300,ju=2301,Wu=2302,yp=2303,vp=2400,Sp=2401,Mp=2402;var Y0=3200;var mf=0,Z0=1,Hr="",Qn="srgb",gl="srgb-linear",_l="linear",vt="srgb";var Xu=7680;var J0=519,$0=512,K0=513,Q0=514,Yp=515,j0=516,ex=517,Zp=518,Jp=519,tx=35044;var $p="300 es",Bi=2e3,Za=2001;function mS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nx(){let r=xl("canvas");return r.style.display="block",r}var B_={},Ja=null;function Kp(...r){let e="THREE."+r.shift();Ja?Ja("log",e,...r):console.log(e,...r)}function ix(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function nt(...r){r=ix(r);let e="THREE."+r.shift();if(Ja)Ja("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function rt(...r){r=ix(r);let e="THREE."+r.shift();if(Ja)Ja("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function fl(...r){let e=r.join(" ");e in B_||(B_[e]=!0,nt(...r))}function rx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var sx={[qu]:qu,[Zu]:Ku,[Ju]:Ju,[Xa]:$u,[Yu]:Yu,[Ku]:Zu,[Qu]:Qu,[$u]:Xa},ur=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yd=Math.PI/180,eh=180/Math.PI;function mo(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function _S(r,e){return(r%e+e)%e}function Zd(r,e,t){return(1-t)*r+t*e}function ax(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qp(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xS(r,e){if(e.constructor===Float32Array)return r;let t=Qp(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function yS(r,e){if(e.constructor===Float32Array)return r;let t=Qp(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var rm=class rm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rm.prototype.isVector2=!0;var Me=rm,ki=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*_;m<0&&(h=-h,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,o=Math.sin(o*v)/M,l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+_*o}else{l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sm=class sm{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(k_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(k_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jd.copy(this).projectOnVector(e),this.sub(Jd)}reflect(e){return this.sub(Jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sm.prototype.isVector3=!0;var Q=sm,Jd=new Q,k_=new ki,am=class am{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],v=i[1],M=i[4],y=i[7],b=i[2],w=i[5],x=i[8];return s[0]=a*_+o*v+l*b,s[3]=a*m+o*M+l*w,s[6]=a*g+o*y+l*x,s[1]=c*_+u*v+d*b,s[4]=c*m+u*M+d*w,s[7]=c*g+u*y+d*x,s[2]=h*_+f*v+p*b,s[5]=h*m+f*M+p*w,s[8]=h*g+f*y+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,p=t*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($d.makeScale(e,t)),this}rotate(e){return fl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($d.makeRotation(-e)),this}translate(e,t){return fl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};am.prototype.isMatrix3=!0;var je=am,$d=new je,z_=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G_=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){let r={enabled:!0,workingColorSpace:gl,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=Or(i.r),i.g=Or(i.g),i.b=Or(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=Wa(i.r),i.g=Wa(i.g),i.b=Wa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hr?_l:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[gl]:{primaries:e,whitePoint:n,transfer:_l,toXYZ:z_,fromXYZ:G_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:z_,fromXYZ:G_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),r}var ft=vS();function Or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Pa,th=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pa===void 0&&(Pa=xl("canvas")),Pa.width=e.width,Pa.height=e.height;let i=Pa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Or(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Or(t[n]/255)*255):t[n]=Or(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},SS=0,$a=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Kd(i[a].image)):s.push(Kd(i[a]))}else s=Kd(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Kd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?th.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var MS=0,Qd=new Q,ei=class r extends ur{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Fi,i=Fi,s=jn,a=Gr,o=Qi,l=ci,c=r.DEFAULT_ANISOTROPY,u=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=mo(),this.name="",this.source=new $a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=zp;ei.DEFAULT_ANISOTROPY=1;var om=class om{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,b=(g+1)/2,w=(u+h)/4,x=(d+_)/4,S=(p+m)/4;return M>y&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=x/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=S/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=x/s,i=S/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;var kt=om,nh=class extends ur{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new ei({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new $a(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yl=class extends ei{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ih=class extends ei{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ah=class Ah{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ah().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ia.setFromMatrixColumn(e,0).length(),s=1/Ia.setFromMatrixColumn(e,1).length(),a=1/Ia.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-_*d}else if(e.order==="XZY"){let h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bS,e,TS)}lookAt(e,t,n){let i=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),ls.crossVectors(n,yi),ls.lengthSq()===0&&(Math.abs(n.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),ls.crossVectors(n,yi)),ls.normalize(),_u.crossVectors(yi,ls),i[0]=ls.x,i[4]=_u.x,i[8]=yi.x,i[1]=ls.y,i[5]=_u.y,i[9]=yi.y,i[2]=ls.z,i[6]=_u.z,i[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],M=n[7],y=n[11],b=n[15],w=i[0],x=i[4],S=i[8],I=i[12],A=i[1],V=i[5],O=i[9],j=i[13],N=i[2],K=i[6],te=i[10],H=i[14],J=i[3],ee=i[7],R=i[11],ce=i[15];return s[0]=a*w+o*A+l*N+c*J,s[4]=a*x+o*V+l*K+c*ee,s[8]=a*S+o*O+l*te+c*R,s[12]=a*I+o*j+l*H+c*ce,s[1]=u*w+d*A+h*N+f*J,s[5]=u*x+d*V+h*K+f*ee,s[9]=u*S+d*O+h*te+f*R,s[13]=u*I+d*j+h*H+f*ce,s[2]=p*w+_*A+m*N+g*J,s[6]=p*x+_*V+m*K+g*ee,s[10]=p*S+_*O+m*te+g*R,s[14]=p*I+_*j+m*H+g*ce,s[3]=v*w+M*A+y*N+b*J,s[7]=v*x+M*V+y*K+b*ee,s[11]=v*S+M*O+y*te+b*R,s[15]=v*I+M*j+y*H+b*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*f-c*h,M=o*f-c*d,y=o*h-l*d,b=a*f-c*u,w=a*h-l*u,x=a*d-o*u;return t*(_*v-m*M+g*y)-n*(p*v-m*b+g*w)+i*(p*M-_*b+g*x)-s*(p*y-_*w+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*o-n*a,M=t*l-i*a,y=t*c-s*a,b=n*l-i*o,w=n*c-s*o,x=i*c-s*l,S=u*_-d*p,I=u*m-h*p,A=u*g-f*p,V=d*m-h*_,O=d*g-f*_,j=h*g-f*m,N=v*j-M*O+y*V+b*A-w*I+x*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/N;return e[0]=(o*j-l*O+c*V)*K,e[1]=(i*O-n*j-s*V)*K,e[2]=(_*x-m*w+g*b)*K,e[3]=(h*w-d*x-f*b)*K,e[4]=(l*A-a*j-c*I)*K,e[5]=(t*j-i*A+s*I)*K,e[6]=(m*y-p*x-g*M)*K,e[7]=(u*x-h*y+f*M)*K,e[8]=(a*O-o*A+c*S)*K,e[9]=(n*A-t*O-s*S)*K,e[10]=(p*w-_*y+g*v)*K,e[11]=(d*y-u*w-f*v)*K,e[12]=(o*I-a*V-l*S)*K,e[13]=(t*V-n*I+i*S)*K,e[14]=(_*M-p*b-m*v)*K,e[15]=(u*b-d*M+h*v)*K,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,p=s*d,_=a*u,m=a*d,g=o*d,v=l*c,M=l*u,y=l*d,b=n.x,w=n.y,x=n.z;return i[0]=(1-(_+g))*b,i[1]=(f+y)*b,i[2]=(p-M)*b,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(h+g))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(p+M)*x,i[9]=(m-v)*x,i[10]=(1-(h+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ia.set(i[0],i[1],i[2]).length(),o=Ia.set(i[4],i[5],i[6]).length(),l=Ia.set(i[8],i[9],i[10]).length();s<0&&(a=-a),qi.copy(this);let c=1/a,u=1/o,d=1/l;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=d,qi.elements[9]*=d,qi.elements[10]*=d,t.setFromRotationMatrix(qi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Bi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===Bi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Za)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Bi,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i),p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===Bi)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===Za)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ah.prototype.isMatrix4=!0;var St=Ah,Ia=new Q,qi=new St,bS=new Q(0,0,0),TS=new Q(1,1,1),ls=new Q,_u=new Q,yi=new Q,V_=new St,H_=new ki,Br=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return V_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return H_.setFromEuler(this),this.setFromQuaternion(H_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Br.DEFAULT_ORDER="XYZ";var vl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wS=0,W_=new Q,La=new ki,Pr=new St,xu=new Q,rl=new Q,ES=new Q,AS=new ki,X_=new Q(1,0,0),q_=new Q(0,1,0),Y_=new Q(0,0,1),Z_={type:"added"},CS={type:"removed"},Da={type:"childadded",child:null},jd={type:"childremoved",child:null},yn=class r extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new Q,t=new Br,n=new ki,i=new Q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return La.setFromAxisAngle(e,t),this.quaternion.multiply(La),this}rotateOnWorldAxis(e,t){return La.setFromAxisAngle(e,t),this.quaternion.premultiply(La),this}rotateX(e){return this.rotateOnAxis(X_,e)}rotateY(e){return this.rotateOnAxis(q_,e)}rotateZ(e){return this.rotateOnAxis(Y_,e)}translateOnAxis(e,t){return W_.copy(e).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(X_,e)}translateY(e){return this.translateOnAxis(q_,e)}translateZ(e){return this.translateOnAxis(Y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xu.copy(e):xu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(rl,xu,this.up):Pr.lookAt(xu,rl,this.up),this.quaternion.setFromRotationMatrix(Pr),i&&(Pr.extractRotation(i.matrixWorld),La.setFromRotationMatrix(Pr),this.quaternion.premultiply(La.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z_),Da.child=e,this.dispatchEvent(Da),Da.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(CS),jd.child=e,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z_),Da.child=e,this.dispatchEvent(Da),Da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,ES),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,AS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new Q(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},RS={type:"move"},Ka=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},yu={h:0,s:0,l:0};function ep(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=_S(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ep(a,s,e+1/3),this.g=ep(a,s,e),this.b=ep(a,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=Qn){function n(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){let n=ox[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return ft.workingToColorSpace(zn.copy(this),e),Math.round(pt(zn.r*255,0,255))*65536+Math.round(pt(zn.g*255,0,255))*256+Math.round(pt(zn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(zn.copy(this),t);let n=zn.r,i=zn.g,s=zn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Qn){ft.workingToColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,i=zn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(yu);let n=Zd(cs.h,yu.h,t),i=Zd(cs.s,yu.s,t),s=Zd(cs.l,yu.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new tt;tt.NAMES=ox;var Sl=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ml=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yi=new Q,Ir=new Q,tp=new Q,Lr=new Q,Na=new Q,Ua=new Q,J_=new Q,np=new Q,ip=new Q,rp=new Q,sp=new kt,ap=new kt,op=new kt,ds=class r{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yi.subVectors(e,t),i.cross(Yi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yi.subVectors(i,t),Ir.subVectors(n,t),tp.subVectors(e,t);let a=Yi.dot(Yi),o=Yi.dot(Ir),l=Yi.dot(tp),c=Ir.dot(Ir),u=Ir.dot(tp),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Lr)===null?!1:Lr.x>=0&&Lr.y>=0&&Lr.x+Lr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Lr.x),l.addScaledVector(a,Lr.y),l.addScaledVector(o,Lr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return sp.setScalar(0),ap.setScalar(0),op.setScalar(0),sp.fromBufferAttribute(e,t),ap.fromBufferAttribute(e,n),op.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(sp,s.x),a.addScaledVector(ap,s.y),a.addScaledVector(op,s.z),a}static isFrontFacing(e,t,n,i){return Yi.subVectors(n,t),Ir.subVectors(e,t),Yi.cross(Ir).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Ir.subVectors(this.a,this.b),Yi.cross(Ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Na.subVectors(i,n),Ua.subVectors(s,n),np.subVectors(e,n);let l=Na.dot(np),c=Ua.dot(np);if(l<=0&&c<=0)return t.copy(n);ip.subVectors(e,i);let u=Na.dot(ip),d=Ua.dot(ip);if(u>=0&&d<=u)return t.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Na,a);rp.subVectors(e,s);let f=Na.dot(rp),p=Ua.dot(rp);if(p>=0&&f<=p)return t.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ua,o);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return J_.subVectors(s,i),o=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(J_,o);let g=1/(m+_+h);return a=_*g,o=h*g,t.copy(n).addScaledVector(Na,a).addScaledVector(Ua,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hr=class{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zi):Zi.fromBufferAttribute(s,a),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vu.copy(n.boundingBox)),vu.applyMatrix4(e.matrixWorld),this.union(vu)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),Su.subVectors(this.max,sl),Oa.subVectors(e.a,sl),Fa.subVectors(e.b,sl),Ba.subVectors(e.c,sl),us.subVectors(Fa,Oa),hs.subVectors(Ba,Fa),Xs.subVectors(Oa,Ba);let t=[0,-us.z,us.y,0,-hs.z,hs.y,0,-Xs.z,Xs.y,us.z,0,-us.x,hs.z,0,-hs.x,Xs.z,0,-Xs.x,-us.y,us.x,0,-hs.y,hs.x,0,-Xs.y,Xs.x,0];return!lp(t,Oa,Fa,Ba,Su)||(t=[1,0,0,0,1,0,0,0,1],!lp(t,Oa,Fa,Ba,Su))?!1:(Mu.crossVectors(us,hs),t=[Mu.x,Mu.y,Mu.z],lp(t,Oa,Fa,Ba,Su))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Zi=new Q,vu=new hr,Oa=new Q,Fa=new Q,Ba=new Q,us=new Q,hs=new Q,Xs=new Q,sl=new Q,Su=new Q,Mu=new Q,qs=new Q;function lp(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){qs.fromArray(r,s);let o=i.x*Math.abs(qs.x)+i.y*Math.abs(qs.y)+i.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),u=n.dot(qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var sn=new Q,bu=new Me,PS=0,Si=class extends ur{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tx,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=e!==void 0?Qp(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bu.fromBufferAttribute(this,t),bu.applyMatrix3(e),this.setXY(t,bu.x,bu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xS(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yS(e,this.array)}};var bl=class extends Si{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tl=class extends Si{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Si{constructor(e,t,n){super(new Float32Array(e),t,n)}},IS=new hr,al=new Q,cp=new Q,fr=class{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):IS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);let t=al.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(al,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(cp)),this.expandByPoint(al.copy(e.center).sub(cp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},LS=0,Oi=new St,up=new yn,ka=new Q,vi=new hr,ol=new hr,_n=new Q,Kt=class r extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mS(e)?Tl:bl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return up.lookAt(e),up.updateMatrix(),this.applyMatrix4(up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ka).negate(),this.translate(ka.x,ka.y,ka.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];vi.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){let n=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ol.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(vi.min,ol.min),vi.expandByPoint(_n),_n.addVectors(vi.max,ol.max),vi.expandByPoint(_n)):(vi.expandByPoint(ol.min),vi.expandByPoint(ol.max))}vi.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_n.fromBufferAttribute(o,c),l&&(ka.fromBufferAttribute(e,c),_n.add(ka)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new Q,l[I]=new Q;let u=new Q,d=new Q,h=new Q,f=new Me,p=new Me,_=new Me,m=new Q,g=new Q;function v(I,A,V){c[I]=c[A]=c[V]=1,u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,V),f.fromBufferAttribute(s,I),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,V),d.sub(u),h.sub(u),p.sub(f),_.sub(f);let O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(O),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(O),o[I].add(m),o[A].add(m),o[V].add(m),l[I].add(g),l[A].add(g),l[V].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,A=M.length;I<A;++I){let V=M[I],O=V.start,j=V.count;for(let N=O,K=O+j;N<K;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new Q,b=new Q,w=new Q,x=new Q;function S(I){w.fromBufferAttribute(i,I),x.copy(w);let A=o[I];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),b.crossVectors(x,A);let O=b.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,O)}for(let I=0,A=n.count;I<A;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new Q,s=new Q,a=new Q,o=new Q,l=new Q,c=new Q,u=new Q,d=new Q;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Si(h,u,d)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hp=new Q,DS=new Q,NS=new je,Ji=class{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=hp.subVectors(n,t).cross(DS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(hp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||NS.getNormalMatrix(e),i=this.coplanarPoint(hp).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},US=0,dr=class extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=ho,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fp,this.blendDst=Bp,this.blendEquation=ta,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xu,this.stencilZFail=Xu,this.stencilZPass=Xu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ji().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Nr=new Q,fp=new Q,Tu=new Q,wu=new Q,Qa=class{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nr.copy(this.origin).addScaledVector(this.direction,t),Nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fp.copy(e).add(t).multiplyScalar(.5),Tu.copy(t).sub(e).normalize(),wu.copy(this.origin).sub(fp);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Tu),o=wu.dot(this.direction),l=-wu.dot(Tu),c=wu.lengthSq(),u=Math.abs(1-a*a),d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=s*u,d>=0)if(h>=-p)if(h<=p){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(fp).addScaledVector(Tu,h),f}intersectSphere(e,t){if(e.radius<0)return null;Nr.subVectors(e.center,this.origin);let n=Nr.dot(this.direction),i=Nr.dot(Nr)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nr)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,m=t.z-a.z,g=n.x-a.x,v=n.y-a.y,M=n.z-a.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(u),x,S,I,A,V,O,j,N,K,te,H,J;if(y>=b&&y>=w?(I=l,O=d,K=p,J=g,l>=0?(x=c,S=u,A=h,V=f,j=_,N=m,te=v,H=M):(x=u,S=c,A=f,V=h,j=m,N=_,te=M,H=v)):b>=w?(I=c,O=h,K=_,J=v,c>=0?(x=u,S=l,A=f,V=d,j=m,N=p,te=M,H=g):(x=l,S=u,A=d,V=f,j=p,N=m,te=g,H=M)):(I=u,O=f,K=m,J=M,u>=0?(x=l,S=c,A=d,V=h,j=p,N=_,te=g,H=v):(x=c,S=l,A=h,V=d,j=_,N=p,te=v,H=g)),I===0)return null;let ee=x/I,R=S/I,ce=1/I,Ae=A-ee*O,Oe=V-R*O,se=j-ee*K,be=N-R*K,Ce=te-ee*J,ne=H-R*J,q=Ce*be-ne*se,z=Ae*ne-Oe*Ce,G=se*Oe-be*Ae;if(i){if(q<0||z<0||G<0)return null}else if((q<0||z<0||G<0)&&(q>0||z>0||G>0))return null;let Y=q+z+G;if(Y===0)return null;let fe=ce*(q*O+z*K+G*J);return(Y>0?fe<0:fe>0)?null:this.at(fe/Y,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mi=class extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$_=new St,Ys=new Qa,Eu=new fr,K_=new Q,Au=new Q,Cu=new Q,Ru=new Q,dp=new Q,Pu=new Q,Q_=new Q,Iu=new Q,Ut=class extends yn{constructor(e=new Kt,t=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Pu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(dp.fromBufferAttribute(d,e),a?Pu.addScaledVector(dp,u):Pu.addScaledVector(dp.sub(t),u))}t.add(Pu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eu.copy(n.boundingSphere),Eu.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(Eu.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Eu,K_)===null||Ys.origin.distanceToSquared(K_)>(e.far-e.near)**2))&&($_.copy(s).invert(),Ys.copy(e.ray).applyMatrix4($_),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,b=M;y<b;y+=3){let w=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);i=Lu(this,g,e,n,c,u,d,w,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let v=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);i=Lu(this,a,e,n,c,u,d,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,b=M;y<b;y+=3){let w=y,x=y+1,S=y+2;i=Lu(this,g,e,n,c,u,d,w,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let v=m,M=m+1,y=m+2;i=Lu(this,a,e,n,c,u,d,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function OS(r,e,t,n,i,s,a,o){let l;if(e.side===wn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===xs,o),l===null)return null;Iu.copy(o),Iu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Iu);return c<t.near||c>t.far?null:{distance:c,point:Iu.clone(),object:r}}function Lu(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Au),r.getVertexPosition(l,Cu),r.getVertexPosition(c,Ru);let u=OS(r,e,t,n,Au,Cu,Ru,Q_);if(u){let d=new Q;ds.getBarycoord(Q_,Au,Cu,Ru,d),i&&(u.uv=ds.getInterpolatedAttribute(i,o,l,c,d,new Me)),s&&(u.uv1=ds.getInterpolatedAttribute(s,o,l,c,d,new Me)),a&&(u.normal=ds.getInterpolatedAttribute(a,o,l,c,d,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new Q,materialIndex:0};ds.getNormal(Au,Cu,Ru,h.normal),u.face=h,u.barycoord=d}return u}var wl=class extends ei{constructor(e=null,t=1,n=1,i,s,a,o,l,c=xn,u=xn,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var El=class extends Si{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},za=new St,j_=new St,Du=[],e0=new hr,FS=new St,ll=new Ut,cl=new fr,Al=class extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,FS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,za),e0.copy(e.boundingBox).applyMatrix4(za),this.boundingBox.union(e0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,za),cl.copy(e.boundingSphere).applyMatrix4(za),this.boundingSphere.union(cl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ll.geometry=this.geometry,ll.material=this.material,ll.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(n),e.ray.intersectsSphere(cl)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,za),j_.multiplyMatrices(n,za),ll.matrixWorld=j_,ll.raycast(e,Du);for(let a=0,o=Du.length;a<o;a++){let l=Du[a];l.instanceId=s,l.object=this,t.push(l)}Du.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wl(new Float32Array(i*this.count),i,this.count,Nh,Gi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zs=new fr,BS=new Me(.5,.5),Nu=new Q,ps=class{constructor(e=new Ji,t=new Ji,n=new Ji,i=new Ji,s=new Ji,a=new Ji){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],v=s[12],M=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-a,f-u,g-p,b-v).normalize(),i[1].setComponents(c+a,f+u,g+p,b+v).normalize(),i[2].setComponents(c+o,f+d,g+_,b+M).normalize(),i[3].setComponents(c-o,f-d,g-_,b-M).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,f-h,g-m,b-y).normalize();else if(i[4].setComponents(c-l,f-h,g-m,b-y).normalize(),t===Bi)i[5].setComponents(c+l,f+h,g+m,b+y).normalize();else if(t===Za)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);let t=BS.distanceTo(e.center);return Zs.radius=.7071067811865476+t,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Nu.x=i.normal.x>0?e.max.x:e.min.x,Nu.y=i.normal.y>0?e.max.y:e.min.y,Nu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},t0=new St,rh=class r{constructor(){this.coordinateSystem=Bi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];t0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ps),n[i].setFromProjectionMatrix(t0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new ps),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Js=class extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sh=new Q,ah=new Q,n0=new St,ul=new Qa,Uu=new fr,pp=new Q,i0=new Q,oh=class extends yn{constructor(e=new Kt,t=new Js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sh.fromBufferAttribute(t,i-1),ah.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sh.distanceTo(ah);e.setAttribute("lineDistance",new xt(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uu.copy(n.boundingSphere),Uu.applyMatrix4(i),Uu.radius+=s,e.ray.intersectsSphere(Uu)===!1)return;n0.copy(i).invert(),ul.copy(e.ray).applyMatrix4(n0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){let g=u.getX(_),v=u.getX(_+1),M=Ou(this,e,ul,l,g,v,_);M&&t.push(M)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(f),g=Ou(this,e,ul,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){let g=Ou(this,e,ul,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Ou(this,e,ul,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ou(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(sh.fromBufferAttribute(o,i),ah.fromBufferAttribute(o,s),t.distanceSqToSegment(sh,ah,pp,i0)>n)return;pp.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(pp);if(!(c<e.near||c>e.far))return{distance:c,point:i0.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var r0=new Q,s0=new Q,ja=class extends oh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)r0.fromBufferAttribute(t,i),s0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+r0.distanceTo(s0);e.setAttribute("lineDistance",new xt(n,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var eo=class extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},a0=new St,bp=new Qa,Fu=new fr,Bu=new Q,Cl=class extends yn{constructor(e=new Kt,t=new eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fu.copy(n.boundingSphere),Fu.applyMatrix4(i),Fu.radius+=s,e.ray.intersectsSphere(Fu)===!1)return;a0.copy(i).invert(),bp.copy(e.ray).applyMatrix4(a0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,_=f;p<_;p++){let m=c.getX(p);Bu.fromBufferAttribute(d,m),o0(Bu,m,l,i,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,_=f;p<_;p++)Bu.fromBufferAttribute(d,p),o0(Bu,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function o0(r,e,t,n,i,s,a){let o=bp.distanceSqToPoint(r);if(o<t){let l=new Q;bp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Rl=class extends ei{constructor(e=[],t=na,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pl=class extends ei{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kr=class extends ei{constructor(e,t,n=Ki,i,s,a,o=xn,l=xn,c,u=Fr,d=1){if(u!==Fr&&u!==Vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $a(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Il=class extends kr{constructor(e,t=Ki,n=na,i,s,a=xn,o=xn,l,c=Fr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ll=class extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pr=class r extends Kt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function p(_,m,g,v,M,y,b,w,x,S,I){let A=y/x,V=b/S,O=y/2,j=b/2,N=w/2,K=x+1,te=S+1,H=0,J=0,ee=new Q;for(let R=0;R<te;R++){let ce=R*V-j;for(let Ae=0;Ae<K;Ae++){let Oe=Ae*A-O;ee[_]=Oe*v,ee[m]=ce*M,ee[g]=N,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[g]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Ae/x),d.push(1-R/S),H+=1}}for(let R=0;R<S;R++)for(let ce=0;ce<x;ce++){let Ae=h+ce+K*R,Oe=h+ce+K*(R+1),se=h+(ce+1)+K*(R+1),be=h+(ce+1)+K*R;l.push(Ae,Oe,be),l.push(Oe,se,be),J+=6}o.addGroup(f,J,I),f+=J,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var lh=class r extends Kt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new Q,y=new Q,b=new Q;for(let w=0;w<t.length;w+=3)f(t[w+0],M),f(t[w+1],y),f(t[w+2],b),l(M,y,b,v)}function l(v,M,y,b){let w=b+1,x=[];for(let S=0;S<=w;S++){x[S]=[];let I=v.clone().lerp(y,S/w),A=M.clone().lerp(y,S/w),V=w-S;for(let O=0;O<=V;O++)O===0&&S===w?x[S][O]=I:x[S][O]=I.clone().lerp(A,O/V)}for(let S=0;S<w;S++)for(let I=0;I<2*(w-S)-1;I++){let A=Math.floor(I/2);I%2===0?(h(x[S][A+1]),h(x[S+1][A]),h(x[S][A])):(h(x[S][A+1]),h(x[S+1][A+1]),h(x[S+1][A]))}}function c(v){let M=new Q;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(v),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function u(){let v=new Q;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];let y=m(v)/2/Math.PI+.5,b=g(v)/Math.PI+.5;a.push(y,1-b)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){let M=a[v+0],y=a[v+2],b=a[v+4],w=Math.max(M,y,b),x=Math.min(M,y,b);w>.9&&x<.1&&(M<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let v=new Q,M=new Q,y=new Q,b=new Q,w=new Me,x=new Me,S=new Me;for(let I=0,A=0;I<s.length;I+=9,A+=6){v.set(s[I+0],s[I+1],s[I+2]),M.set(s[I+3],s[I+4],s[I+5]),y.set(s[I+6],s[I+7],s[I+8]),w.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),b.copy(v).add(M).add(y).divideScalar(3);let V=m(b);_(w,A+0,v,V),_(x,A+2,M,V),_(S,A+4,y,V)}}function _(v,M,y,b){b<0&&v.x===1&&(a[M]=v.x-1),y.x===0&&y.z===0&&(a[M]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var bi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Me:new Q);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Q,i=[],s=[],a=[],o=new Q,l=new St;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new Q)}s[0]=new Q,a[0]=new Q;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(pt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(pt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},to=class extends bi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Me){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ch=class extends to{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jp(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var l0=new Q,c0=new Q,mp=new jp,gp=new jp,_p=new jp,uh=class extends bi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Q){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(c0.subVectors(i[0],i[1]).add(i[0]),c=c0);let d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(l0.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=l0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),mp.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,m),gp.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,m),_p.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(mp.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),gp.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),_p.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(mp.calc(l),gp.calc(l),_p.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Q().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function u0(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function kS(r,e){let t=1-r;return t*t*e}function zS(r,e){return 2*(1-r)*r*e}function GS(r,e){return r*r*e}function dl(r,e,t,n){return kS(r,e)+zS(r,t)+GS(r,n)}function VS(r,e){let t=1-r;return t*t*t*e}function HS(r,e){let t=1-r;return 3*t*t*r*e}function WS(r,e){return 3*(1-r)*r*r*e}function XS(r,e){return r*r*r*e}function pl(r,e,t,n,i){return VS(r,e)+HS(r,t)+WS(r,n)+XS(r,i)}var Dl=class extends bi{constructor(e=new Me,t=new Me,n=new Me,i=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Me){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pl(e,i.x,s.x,a.x,o.x),pl(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hh=class extends bi{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pl(e,i.x,s.x,a.x,o.x),pl(e,i.y,s.y,a.y,o.y),pl(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends bi{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fh=class extends bi{constructor(e=new Q,t=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends bi{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(dl(e,i.x,s.x,a.x),dl(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dh=class extends bi{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(dl(e,i.x,s.x,a.x),dl(e,i.y,s.y,a.y),dl(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(u0(o,l.x,c.x,u.x,d.x),u0(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Me().fromArray(i))}return this}},Tp=Object.freeze({__proto__:null,ArcCurve:ch,CatmullRomCurve3:uh,CubicBezierCurve:Dl,CubicBezierCurve3:hh,EllipseCurve:to,LineCurve:Nl,LineCurve3:fh,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:dh,SplineCurve:Ol}),ph=class extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Tp[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},mr=class extends ph{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nl(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ul(this.currentPoint.clone(),new Me(e,t),new Me(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Dl(this.currentPoint.clone(),new Me(e,t),new Me(n,i),new Me(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new to(e,t,n,i,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fl=class extends mr{constructor(e){super(e),this.uuid=mo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new mr().fromJSON(i))}return this}};function qS(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=lx(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=KS(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let u=o,d=l;for(let h=t;h<i;h+=t){let f=r[h],p=r[h+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Bl(s,a,t,o,l,c,0),a}function lx(r,e,t,n,i){let s;if(i===lM(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=h0(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=h0(a/n|0,r[a],r[a+1],s);return s&&no(s,s.next)&&(zl(s),s=s.next),s}function $s(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(no(t,t.next)||Wt(t.prev,t,t.next)===0)){if(zl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Bl(r,e,t,n,i,s,a){if(!r)return;!a&&s&&nM(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?ZS(r,n,i,s):YS(r)){e.push(l.i,r.i,c.i),zl(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=JS($s(r),e),Bl(r,e,t,n,i,s,2)):a===2&&$S(r,e,t,n,i,s):Bl($s(r),e,t,n,i,s,1);break}}}function YS(r){let e=r.prev,t=r,n=r.next;if(Wt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(i,s,a),d=Math.min(o,l,c),h=Math.max(i,s,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&hl(i,o,s,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ZS(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Wt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,u=i.y,d=s.y,h=a.y,f=Math.min(o,l,c),p=Math.min(u,d,h),_=Math.max(o,l,c),m=Math.max(u,d,h),g=wp(f,p,e,t,n),v=wp(_,m,e,t,n),M=r.prevZ,y=r.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==a&&hl(o,u,l,d,c,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==a&&hl(o,u,l,d,c,h,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==a&&hl(o,u,l,d,c,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==a&&hl(o,u,l,d,c,h,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function JS(r,e){let t=r;do{let n=t.prev,i=t.next.next;!no(n,i)&&ux(n,t,t.next,i)&&kl(n,i)&&kl(i,n)&&(e.push(n.i,t.i,i.i),zl(t),zl(t.next),t=r=i),t=t.next}while(t!==r);return $s(t)}function $S(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sM(a,o)){let l=hx(a,o);a=$s(a,a.next),l=$s(l,l.next),Bl(a,e,t,n,i,s,0),Bl(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function KS(r,e,t,n){let i=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=lx(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(rM(c))}i.sort(QS);for(let s=0;s<i.length;s++)t=jS(i[s],t);return t}function QS(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function jS(r,e){let t=eM(r,e);if(!t)return e;let n=hx(t,r);return $s(n,n.next),$s(t,t.next)}function eM(r,e){let t=e,n=r.x,i=r.y,s=-1/0,a;if(no(r,t))return t;do{if(no(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&cx(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);kl(t,r)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&tM(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function tM(r,e){return Wt(r.prev,r,e.prev)<0&&Wt(e.next,r,r.next)<0}function nM(r,e,t,n){let i=r;do i.z===0&&(i.z=wp(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,iM(i)}function iM(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function wp(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function rM(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function cx(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function hl(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&cx(r,e,t,n,i,s,a,o)}function sM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!aM(r,e)&&(kl(r,e)&&kl(e,r)&&oM(r,e)&&(Wt(r.prev,r,e.prev)||Wt(r,e.prev,e))||no(r,e)&&Wt(r.prev,r,r.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function no(r,e){return r.x===e.x&&r.y===e.y}function ux(r,e,t,n){let i=zu(Wt(r,e,t)),s=zu(Wt(r,e,n)),a=zu(Wt(t,n,r)),o=zu(Wt(t,n,e));return!!(i!==s&&a!==o||i===0&&ku(r,t,e)||s===0&&ku(r,n,e)||a===0&&ku(t,r,n)||o===0&&ku(t,e,n))}function ku(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function zu(r){return r>0?1:r<0?-1:0}function aM(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ux(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function kl(r,e){return Wt(r.prev,r,r.next)<0?Wt(r,e,r.next)>=0&&Wt(r,r.prev,e)>=0:Wt(r,e,r.prev)<0||Wt(r,r.next,e)<0}function oM(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function hx(r,e){let t=Ep(r.i,r.x,r.y),n=Ep(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function h0(r,e,t,n){let i=Ep(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ep(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lM(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}var Ap=class{static triangulate(e,t,n=2){return qS(e,t,n)}},cr=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];f0(e),d0(n,e);let a=e.length;t.forEach(f0);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,d0(n,t[l]);let o=Ap.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function f0(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function d0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Gl=class r extends Kt{constructor(e=new Fl([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new xt(i,3)),this.setAttribute("uv",new xt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:cM,M,y=!1,b,w,x,S;if(g){M=g.getSpacedPoints(u),y=!0,h=!1;let L=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(u,L),w=new Q,x=new Q,S=new Q}h||(m=0,f=0,p=0,_=0);let I=o.extractPoints(c),A=I.shape,V=I.holes;if(!cr.isClockWise(A)){A=A.reverse();for(let L=0,Z=V.length;L<Z;L++){let X=V[L];cr.isClockWise(X)&&(V[L]=X.reverse())}}function j(L){let X=10000000000000001e-36,U=L[0];for(let re=1;re<=L.length;re++){let F=re%L.length,D=L[F],P=D.x-U.x,B=D.y-U.y,ie=P*P+B*B,k=Math.max(Math.abs(D.x),Math.abs(D.y),Math.abs(U.x),Math.abs(U.y)),Ue=X*k*k;if(ie<=Ue){L.splice(F,1),re--;continue}U=D}}j(A),V.forEach(j);let N=V.length,K=A;for(let L=0;L<N;L++){let Z=V[L];A=A.concat(Z)}function te(L,Z,X){return Z||rt("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(Z,X)}let H=A.length;function J(L,Z,X){let U,re,F,D=L.x-Z.x,P=L.y-Z.y,B=X.x-L.x,ie=X.y-L.y,k=D*D+P*P,Ue=D*ie-P*B;if(Math.abs(Ue)>Number.EPSILON){let He=Math.sqrt(k),ke=Math.sqrt(B*B+ie*ie),pe=Z.x-P/He,Be=Z.y+D/He,Ee=X.x-ie/ke,We=X.y+B/ke,C=((Ee-pe)*ie-(We-Be)*B)/(D*ie-P*B);U=pe+D*C-L.x,re=Be+P*C-L.y;let T=U*U+re*re;if(T<=2)return new Me(U,re);F=Math.sqrt(T/2)}else{let He=!1;D>Number.EPSILON?B>Number.EPSILON&&(He=!0):D<-Number.EPSILON?B<-Number.EPSILON&&(He=!0):Math.sign(P)===Math.sign(ie)&&(He=!0),He?(U=-P,re=D,F=Math.sqrt(k)):(U=D,re=P,F=Math.sqrt(k/2))}return new Me(U/F,re/F)}let ee=[];for(let L=0,Z=K.length,X=Z-1,U=L+1;L<Z;L++,X++,U++)X===Z&&(X=0),U===Z&&(U=0),ee[L]=J(K[L],K[X],K[U]);let R=[],ce,Ae=ee.concat();for(let L=0,Z=N;L<Z;L++){let X=V[L];ce=[];for(let U=0,re=X.length,F=re-1,D=U+1;U<re;U++,F++,D++)F===re&&(F=0),D===re&&(D=0),ce[U]=J(X[U],X[F],X[D]);R.push(ce),Ae=Ae.concat(ce)}let Oe;if(m===0)Oe=cr.triangulateShape(K,V);else{let L=[],Z=[];for(let X=0;X<m;X++){let U=X/m,re=f*Math.cos(U*Math.PI/2),F=p*Math.sin(U*Math.PI/2)+_;for(let D=0,P=K.length;D<P;D++){let B=te(K[D],ee[D],F);z(B.x,B.y,-re),U===0&&L.push(B)}for(let D=0,P=N;D<P;D++){let B=V[D];ce=R[D];let ie=[];for(let k=0,Ue=B.length;k<Ue;k++){let He=te(B[k],ce[k],F);z(He.x,He.y,-re),U===0&&ie.push(He)}U===0&&Z.push(ie)}}Oe=cr.triangulateShape(L,Z)}let se=Oe.length,be=p+_;for(let L=0;L<H;L++){let Z=h?te(A[L],Ae[L],be):A[L];y?(x.copy(b.normals[0]).multiplyScalar(Z.x),w.copy(b.binormals[0]).multiplyScalar(Z.y),S.copy(M[0]).add(x).add(w),z(S.x,S.y,S.z)):z(Z.x,Z.y,0)}for(let L=1;L<=u;L++)for(let Z=0;Z<H;Z++){let X=h?te(A[Z],Ae[Z],be):A[Z];y?(x.copy(b.normals[L]).multiplyScalar(X.x),w.copy(b.binormals[L]).multiplyScalar(X.y),S.copy(M[L]).add(x).add(w),z(S.x,S.y,S.z)):z(X.x,X.y,d/u*L)}for(let L=m-1;L>=0;L--){let Z=L/m,X=f*Math.cos(Z*Math.PI/2),U=p*Math.sin(Z*Math.PI/2)+_;for(let re=0,F=K.length;re<F;re++){let D=te(K[re],ee[re],U);z(D.x,D.y,d+X)}for(let re=0,F=V.length;re<F;re++){let D=V[re];ce=R[re];for(let P=0,B=D.length;P<B;P++){let ie=te(D[P],ce[P],U);y?z(ie.x,ie.y+M[u-1].y,M[u-1].x+X):z(ie.x,ie.y,d+X)}}}Ce(),ne();function Ce(){let L=i.length/3;if(h){let Z=0,X=H*Z;for(let U=0;U<se;U++){let re=Oe[U];G(re[2]+X,re[1]+X,re[0]+X)}Z=u+m*2,X=H*Z;for(let U=0;U<se;U++){let re=Oe[U];G(re[0]+X,re[1]+X,re[2]+X)}}else{for(let Z=0;Z<se;Z++){let X=Oe[Z];G(X[2],X[1],X[0])}for(let Z=0;Z<se;Z++){let X=Oe[Z];G(X[0]+H*u,X[1]+H*u,X[2]+H*u)}}n.addGroup(L,i.length/3-L,0)}function ne(){let L=i.length/3,Z=0;q(K,Z),Z+=K.length;for(let X=0,U=V.length;X<U;X++){let re=V[X];q(re,Z),Z+=re.length}n.addGroup(L,i.length/3-L,1)}function q(L,Z){let X=L.length;for(;--X>=0;){let U=X,re=X-1;re<0&&(re=L.length-1);for(let F=0,D=u+m*2;F<D;F++){let P=H*F,B=H*(F+1),ie=Z+U+P,k=Z+re+P,Ue=Z+re+B,He=Z+U+B;Y(ie,k,Ue,He)}}}function z(L,Z,X){l.push(L),l.push(Z),l.push(X)}function G(L,Z,X){fe(L),fe(Z),fe(X);let U=i.length/3,re=v.generateTopUV(n,i,U-3,U-2,U-1);ue(re[0]),ue(re[1]),ue(re[2])}function Y(L,Z,X,U){fe(L),fe(Z),fe(U),fe(Z),fe(X),fe(U);let re=i.length/3,F=v.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);ue(F[0]),ue(F[1]),ue(F[3]),ue(F[1]),ue(F[2]),ue(F[3])}function fe(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function ue(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return uM(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Tp[i.type]().fromJSON(i)),new r(n,e.options)}},cM={generateTopUV:function(r,e,t,n,i){let s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Me(s,a),new Me(o,l),new Me(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Me(a,1-l),new Me(c,1-d),new Me(h,1-p),new Me(_,1-g)]:[new Me(o,1-l),new Me(u,1-d),new Me(f,1-p),new Me(m,1-g)]}};function uM(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var io=class r extends lh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var Ks=class r extends Kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let v=g*h-a;for(let M=0;M<c;M++){let y=M*d-s;p.push(y,-v,0),_.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let M=v+c*g,y=v+c*(g+1),b=v+1+c*(g+1),w=v+1+c*g;f.push(M,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var ro=class r extends Kt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new Q,h=new Q,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let v=[],M=g/n,y=a+M*o,b=e*Math.cos(y),w=Math.sqrt(e*e-b*b),x=0;g===0&&a===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let I=S/t,A=i+I*s;d.x=-w*Math.cos(A),d.y=b,d.z=w*Math.sin(A),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(I+x,1-M),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let M=u[g][v+1],y=u[g][v],b=u[g+1][v],w=u[g+1][v+1];(g!==0||a>0)&&f.push(M,y,w),(g!==n-1||l<Math.PI)&&f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var so=class r extends Kt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],d=[],h=new Q,f=new Q,p=new Q;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let g=0;g<=i;g++){let v=g/i*s;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,v=(i+1)*(_-1)+m-1,M=(i+1)*(_-1)+m,y=(i+1)*_+m;l.push(g,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ra(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(p0(i))i.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(p0(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Vn(r){let e={};for(let t=0;t<r.length;t++){let n=ra(r[t]);for(let i in n)e[i]=n[i]}return e}function p0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function hM(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function em(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Wr={clone:ra,merge:Vn},fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Me().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new St().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ao=class extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ti=class extends dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var mh=class extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gh=class extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ga(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Gu(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var ms=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_h=class extends ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vp,endingEnd:vp}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sp:s=e,o=2*t-n;break;case Mp:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sp:a=e,l=2*n-t;break;case Mp:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,M=(-1-f)*m+(1.5+f)*_+.5*p,y=f*m-f*_;for(let b=0;b!==o;++b)s[b]=g*a[u+b]+v*a[c+b]+M*a[l+b]+y*a[d+b];return s}},xh=class extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}},yh=class extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},vh=class extends ms{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(n-t)/(i-t),_=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*_+a[l+m]*p;return s}let h=o*2,f=e-1;for(let p=0;p!==o;++p){let _=a[c+p],m=a[l+p],g=f*h+p*2,v=d[g],M=d[g+1],y=e*h+p*2,b=u[y],w=u[y+1],x=mM(n,t,v,b,i);s[p]=fx(x,_,M,w,m)}return s}};function fx(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function pM(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function mM(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=fx(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=pM(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var wi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Gu(e.settings)&&(n.settings={inTangents:Ga(e.settings.inTangents,Array),outTangents:Ga(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ml:t=this.InterpolantFactoryMethodDiscrete;break;case ju:t=this.InterpolantFactoryMethodLinear;break;case Wu:t=this.InterpolantFactoryMethodSmooth;break;case yp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ml;case this.InterpolantFactoryMethodLinear:return ju;case this.InterpolantFactoryMethodSmooth:return Wu;case this.InterpolantFactoryMethodBezier:return yp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Gu(this.settings)&&(m0(this.settings.inTangents,e),m0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Gu(this.settings)&&(g0(this.settings.inTangents,e),g0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){rt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&gS(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wu,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[h+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Gu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function m0(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function g0(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=ju;var gs=class extends wi{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ml;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sh=class extends wi{constructor(e,t,n,i){super(e,t,n,i)}};Sh.prototype.ValueTypeName="color";var Mh=class extends wi{constructor(e,t,n,i){super(e,t,n,i)}};Mh.prototype.ValueTypeName="number";var bh=class extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)ki.slerpFlat(s,0,a,c-o,a,c,l);return s}},Vl=class extends wi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}};Vl.prototype.ValueTypeName="quaternion";Vl.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends wi{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ml;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Th=class extends wi{constructor(e,t,n,i){super(e,t,n,i)}};Th.prototype.ValueTypeName="vector";var Cp={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(_0(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!_0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function _0(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var wh=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dx=new wh,Qs=class{constructor(e){this.manager=e!==void 0?e:dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur={},Rp=class extends Error{constructor(e,t){super(e),this.response=t}},Hl=class extends Qs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Cp.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ur[e]!==void 0){Ur[e].push({onLoad:t,onProgress:n,onError:i});return}Ur[e]=[],Ur[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ur[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0,_=0,m=new ReadableStream({start(g){v();function v(){d.read().then(({done:M,value:y})=>{if(M)g.close();else{_+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let w=0,x=u.length;w<x;w++){let S=u[w];S.onProgress&&S.onProgress(b)}g.enqueue(y),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Rp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Cp.add(`file:${e}`,c);let u=Ur[e];delete Ur[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ur[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ur[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var oo=class extends yn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wl=class extends oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xp=new St,x0=new Q,y0=new Q,Xl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;x0.setFromMatrixPosition(e.matrixWorld),t.position.copy(x0),y0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(y0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){xp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xp,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===Za||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vu=new Q,Hu=new ki,lr=new Q,ql=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vu,Hu,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vu,Hu,lr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vu,Hu,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vu,Hu,lr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new Q,v0=new Me,S0=new Me,Gn=class extends ql{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=eh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,v0,S0),t.subVectors(S0,v0)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yd*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Pp=class extends Xl{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}},Yl=class extends oo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},js=class extends ql{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ip=class extends Xl{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zl=class extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Ip}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Va=-90,Ha=1,lo=class extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Gn(Va,Ha,e,t);i.layers=this.layers,this.add(i);let s=new Gn(Va,Ha,e,t);s.layers=this.layers,this.add(s);let a=new Gn(Va,Ha,e,t);a.layers=this.layers,this.add(a);let o=new Gn(Va,Ha,e,t);o.layers=this.layers,this.add(o);let l=new Gn(Va,Ha,e,t);l.layers=this.layers,this.add(l);let c=new Gn(Va,Ha,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Eh=class extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Jl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=gM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function gM(){this._document.hidden===!1&&this.reset()}var tm="\\[\\]\\.:\\/",_M=new RegExp("["+tm+"]","g"),nm="[^"+tm+"]",xM="[^"+tm.replace("\\.","")+"]",yM=/((?:WC+[\/:])*)/.source.replace("WC",nm),vM=/(WCOD+)?/.source.replace("WCOD",xM),SM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nm),MM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nm),bM=new RegExp("^"+yM+vM+SM+MM+"$"),TM=["material","materials","bones","map"],Lp=class{constructor(e,t,n){let i=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_M,"")}static parseTrackName(e){let t=bM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);TM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Lp;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HE=new Float32Array(1);var lm=class lm{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};lm.prototype.isMatrix2=!0;var Dp=lm,M0=new Me,co=class{constructor(e=new Me(1/0,1/0),t=new Me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=M0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,M0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var $l=class extends ja{constructor(e=10,t=10,n=4473924,i=8947848){n=new tt(n),i=new tt(i);let s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let _=h===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let u=new Kt;u.setAttribute("position",new xt(l,3)),u.setAttribute("color",new xt(c,3));let d=new Js({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var $i=class{constructor(){this.type="ShapePath",this.color=new tt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new mr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,d=c.length;for(let h=0,f=d-1;h<d;f=h++){let p=c[h],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new Me);if(e(u,l))return u;let d=u.y,h=[],f=l.length;for(let p=0;p<f;p++){let _=l[p],m=l[(p+1)%f];if(_.y>d!=m.y>d){let g=_.x+(d-_.y)*(m.x-_.x)/(m.y-_.y);h.push(g)}}return h.length>1&&(h.sort((p,_)=>p-_),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(nt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=cr.area(c);if(u===0)continue;let d=new co;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],u=0;for(let d=l-1;d>=0;d--){let h=s[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}i(c.winding)===i(u)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new Fl;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new mr;u.curves=l.subPath.curves,c.holes.push(u)}return a}};function im(r,e,t,n){let i=wM(n);switch(t){case Xp:return r*e;case Nh:return r*e/i.components*i.byteLength;case Uh:return r*e/i.components*i.byteLength;case ys:return r*e*2/i.components*i.byteLength;case Oh:return r*e*2/i.components*i.byteLength;case qp:return r*e*3/i.components*i.byteLength;case Qi:return r*e*4/i.components*i.byteLength;case Fh:return r*e*4/i.components*i.byteLength;case ac:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kh:case Gh:return Math.max(r,16)*Math.max(e,8)/4;case Bh:case zh:return Math.max(r,8)*Math.max(e,8)/2;case Vh:case Hh:case Xh:case qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wh:case uc:case Yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $h:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case rf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case of:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case lf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case cf:case uf:case hf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ff:case df:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hc:case pf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wM(r){switch(r){case ci:case Gp:return{byteLength:1,components:1};case po:case Vp:case En:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case Ki:case Ih:case Gi:return{byteLength:4,components:1};case Hp:case Wp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ux(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function AM(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ST=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ET=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,AT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:CM,alphahash_pars_fragment:RM,alphamap_fragment:PM,alphamap_pars_fragment:IM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:NM,aomap_pars_fragment:UM,batching_pars_vertex:OM,batching_vertex:FM,begin_vertex:BM,beginnormal_vertex:kM,bsdfs:zM,iridescence_fragment:GM,bumpmap_pars_fragment:VM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:ZM,color_pars_vertex:JM,color_vertex:$M,common:KM,defaultnormal_vertex:QM,displacementmap_pars_vertex:jM,displacementmap_vertex:eb,emissivemap_fragment:tb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:rb,envmap_fragment:sb,envmap_common_pars_fragment:ab,envmap_pars_fragment:ob,envmap_pars_vertex:lb,envmap_physical_pars_fragment:yb,envmap_vertex:cb,fog_vertex:ub,fog_pars_vertex:hb,fog_fragment:fb,fog_pars_fragment:db,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:_b,lights_pars_begin:xb,lights_toon_fragment:vb,lights_toon_pars_fragment:Sb,lights_phong_fragment:Mb,lights_phong_pars_fragment:bb,lights_physical_fragment:Tb,lights_physical_pars_fragment:wb,lights_fragment_begin:Eb,lights_fragment_maps:Ab,lights_fragment_end:Cb,lightprobes_pars_fragment:Rb,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Ib,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Db,map_fragment:Nb,map_pars_fragment:Ub,map_particle_fragment:Ob,map_particle_pars_fragment:Fb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:kb,morphinstance_vertex:zb,morphcolor_vertex:Gb,morphnormal_vertex:Vb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Wb,normal_fragment_begin:Xb,normal_fragment_maps:qb,normal_pars_fragment:Yb,normal_pars_vertex:Zb,normal_vertex:Jb,normalmap_pars_fragment:$b,clearcoat_normal_fragment_begin:Kb,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:eT,opaque_fragment:tT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:rT,dithering_fragment:sT,dithering_pars_fragment:aT,roughnessmap_fragment:oT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:uT,shadowmap_vertex:hT,shadowmask_pars_fragment:fT,skinbase_vertex:dT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:_T,specularmap_pars_fragment:xT,tonemapping_fragment:yT,tonemapping_pars_fragment:vT,transmission_fragment:ST,transmission_pars_fragment:MT,uv_pars_fragment:bT,uv_pars_vertex:TT,uv_vertex:wT,worldpos_vertex:ET,background_vert:AT,background_frag:CT,backgroundCube_vert:RT,backgroundCube_frag:PT,cube_vert:IT,cube_frag:LT,depth_vert:DT,depth_frag:NT,distance_vert:UT,distance_frag:OT,equirect_vert:FT,equirect_frag:BT,linedashed_vert:kT,linedashed_frag:zT,meshbasic_vert:GT,meshbasic_frag:VT,meshlambert_vert:HT,meshlambert_frag:WT,meshmatcap_vert:XT,meshmatcap_frag:qT,meshnormal_vert:YT,meshnormal_frag:ZT,meshphong_vert:JT,meshphong_frag:$T,meshphysical_vert:KT,meshphysical_frag:QT,meshtoon_vert:jT,meshtoon_frag:e1,points_vert:t1,points_frag:n1,shadow_vert:i1,shadow_frag:r1,sprite_vert:s1,sprite_frag:a1},Xe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},_r={basic:{uniforms:Vn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Vn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Vn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Vn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Vn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new tt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Vn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Vn([Xe.points,Xe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Vn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Vn([Xe.common,Xe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Vn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Vn([Xe.sprite,Xe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Vn([Xe.common,Xe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Vn([Xe.lights,Xe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};_r.physical={uniforms:Vn([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var gf={r:0,b:0,g:0},o1=new St,Ox=new je;Ox.set(-1,0,0,0,1,0,0,0,1);function l1(r,e,t,n,i,s){let a=new tt(0),o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(v){let M=!1,y=f(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Ut(new pr(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:ra(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ox),c.material.toneMapped=ft.getTransfer(y.colorSpace)!==vt,(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ut(new Ks(2,2),new vn({name:"BackgroundMaterial",uniforms:ra(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(gf,em(r)),t.buffers.color.setClear(gf.r,gf.g,gf.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:_,dispose:g}}function c1(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,a=!1;function o(V,O,j,N,K){let te=!1,H=d(V,N,j,O);s!==H&&(s=H,c(s.object)),te=f(V,N,j,K),te&&p(V,N,j,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(V,O,j,N),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return r.createVertexArray()}function c(V){return r.bindVertexArray(V)}function u(V){return r.deleteVertexArray(V)}function d(V,O,j,N){let K=N.wireframe===!0,te=n[O.id];te===void 0&&(te={},n[O.id]=te);let H=V.isInstancedMesh===!0?V.id:0,J=te[H];J===void 0&&(J={},te[H]=J);let ee=J[j.id];ee===void 0&&(ee={},J[j.id]=ee);let R=ee[K];return R===void 0&&(R=h(l()),ee[K]=R),R}function h(V){let O=[],j=[],N=[];for(let K=0;K<t;K++)O[K]=0,j[K]=0,N[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:N,object:V,attributes:{},index:null}}function f(V,O,j,N){let K=s.attributes,te=O.attributes,H=0,J=j.getAttributes();for(let ee in J)if(J[ee].location>=0){let ce=K[ee],Ae=te[ee];if(Ae===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(Ae=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(Ae=V.instanceColor)),ce===void 0||ce.attribute!==Ae||Ae&&ce.data!==Ae.data)return!0;H++}return s.attributesNum!==H||s.index!==N}function p(V,O,j,N){let K={},te=O.attributes,H=0,J=j.getAttributes();for(let ee in J)if(J[ee].location>=0){let ce=te[ee];ce===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(ce=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(ce=V.instanceColor));let Ae={};Ae.attribute=ce,ce&&ce.data&&(Ae.data=ce.data),K[ee]=Ae,H++}s.attributes=K,s.attributesNum=H,s.index=N}function _(){let V=s.newAttributes;for(let O=0,j=V.length;O<j;O++)V[O]=0}function m(V){g(V,0)}function g(V,O){let j=s.newAttributes,N=s.enabledAttributes,K=s.attributeDivisors;j[V]=1,N[V]===0&&(r.enableVertexAttribArray(V),N[V]=1),K[V]!==O&&(r.vertexAttribDivisor(V,O),K[V]=O)}function v(){let V=s.newAttributes,O=s.enabledAttributes;for(let j=0,N=O.length;j<N;j++)O[j]!==V[j]&&(r.disableVertexAttribArray(j),O[j]=0)}function M(V,O,j,N,K,te,H){H===!0?r.vertexAttribIPointer(V,O,j,K,te):r.vertexAttribPointer(V,O,j,N,K,te)}function y(V,O,j,N){_();let K=N.attributes,te=j.getAttributes(),H=O.defaultAttributeValues;for(let J in te){let ee=te[J];if(ee.location>=0){let R=K[J];if(R===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(R=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(R=V.instanceColor)),R!==void 0){let ce=R.normalized,Ae=R.itemSize,Oe=e.get(R);if(Oe===void 0)continue;let se=Oe.buffer,be=Oe.type,Ce=Oe.bytesPerElement,ne=be===r.INT||be===r.UNSIGNED_INT||R.gpuType===Ih;if(R.isInterleavedBufferAttribute){let q=R.data,z=q.isInterleavedBuffer===!0?q.stride:q.itemSize,G=R.offset;if(q.isInstancedInterleavedBuffer||q.isInstancedBufferAttribute){for(let Y=0;Y<ee.locationSize;Y++)g(ee.location+Y,q.meshPerAttribute);V.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Y=0;Y<ee.locationSize;Y++)m(ee.location+Y);r.bindBuffer(r.ARRAY_BUFFER,se);for(let Y=0;Y<ee.locationSize;Y++)M(ee.location+Y,Ae/ee.locationSize,be,ce,z*Ce,(G+Ae/ee.locationSize*Y)*Ce,ne)}else{if(R.isInstancedBufferAttribute){for(let q=0;q<ee.locationSize;q++)g(ee.location+q,R.meshPerAttribute);V.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let q=0;q<ee.locationSize;q++)m(ee.location+q);r.bindBuffer(r.ARRAY_BUFFER,se);for(let q=0;q<ee.locationSize;q++)M(ee.location+q,Ae/ee.locationSize,be,ce,Ae*Ce,Ae/ee.locationSize*q*Ce,ne)}}else if(H!==void 0){let ce=H[J];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(ee.location,ce);break;case 3:r.vertexAttrib3fv(ee.location,ce);break;case 4:r.vertexAttrib4fv(ee.location,ce);break;default:r.vertexAttrib1fv(ee.location,ce)}}}}v()}function b(){I();for(let V in n){let O=n[V];for(let j in O){let N=O[j];for(let K in N){let te=N[K];for(let H in te)u(te[H].object),delete te[H];delete N[K]}}delete n[V]}}function w(V){if(n[V.id]===void 0)return;let O=n[V.id];for(let j in O){let N=O[j];for(let K in N){let te=N[K];for(let H in te)u(te[H].object),delete te[H];delete N[K]}}delete n[V.id]}function x(V){for(let O in n){let j=n[O];for(let N in j){let K=j[N];if(K[V.id]===void 0)continue;let te=K[V.id];for(let H in te)u(te[H].object),delete te[H];delete K[V.id]}}}function S(V){for(let O in n){let j=n[O],N=V.isInstancedMesh===!0?V.id:0,K=j[N];if(K!==void 0){for(let te in K){let H=K[te];for(let J in H)u(H[J].object),delete H[J];delete K[te]}delete j[N],Object.keys(j).length===0&&delete n[O]}}}function I(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function u1(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function h1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Qi&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ci&&x!==Gi&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:w}}function f1(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Ji,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{let v=s?0:n,M=v*4,y=g.clippingState||null;l.value=y,y=u(p,h,M,f);for(let b=0;b!==M;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=f;M!==_;++M,y+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var pc=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Rl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new pr(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:zr});s.uniforms.tEquirect.value=t;let a=new Ut(i,s),o=t.minFilter;return t.minFilter===Gr&&(t.minFilter=jn),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},px=256,d1=3,p1=20,Fx=256,Bx=16,m1=3,g1=new Q,_1=new tt,xf=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lo(1,10,null),this._boxMesh=new Ut(new pr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=g1}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(_1));let m=new lo(n,i,u);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(px,ax(e))}_fromTexture(e,t){e.mapping===na||e.mapping===fo?this._setSize(e.image.length===0?px:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=mx(e,!1,!1),n=Math.log2(e)-d1;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===na||e.mapping===fo?(this._cubemapMaterial===null&&(this._cubemapMaterial=_x()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gx()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=x1(),this._integrationMaterial=y1());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Bx);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-m1)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Fx*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=v1());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function mx(r,e,t){return new pc(r,{minFilter:Gr,generateMipmaps:e,type:En,colorSpace:gl,depthBuffer:t})}function mc(r,e,t){return new vn({name:r,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:wn,blending:zr,depthTest:!1,depthWrite:!1})}function x1(){return mc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function y1(){return mc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function v1(){return mc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${p1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gx(){return mc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _x(){return mc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function S1(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ch||f===Rh)if(e.has(h)){let p=e.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let _=new pc(p.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===Ch||f===Rh,_=f===na||f===fo;if(p||_){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new xf(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new xf(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Ch?h.mapping=na:f===Rh&&(h.mapping=fo),h}function l(h){let f=0,p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function M1(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&fl("WebGLRenderer: "+n+" extension not supported."),i}}}function b1(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let _=s.get(p);_&&(e.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],r.ARRAY_BUFFER)}function d(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,M=m.count>=65535?Tl:bl,y=new M(Math.ceil(v/3)*6,1),b=y.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,I=0;S<v;S+=3){let A=x[S+0],V=x[S+1],O=x[S+2];b[I++]=A,b[I++]=V,b[I++]=V,b[I++]=O,b[I++]=O,b[I++]=A}}else{g=m.version;for(let x=0,S=0;x<v;x+=3){let I=x+0,A=x+1,V=x+2;b[S++]=I,b[S++]=A,b[S++]=A,b[S++]=V,b[S++]=V,b[S++]=I}}y.version=g;let w=s.get(p);w&&e.remove(w),s.set(p,y)}function h(p){let _=s.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return s.get(p)}function f(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function T1(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function w1(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function E1(r,e,t){let n=new WeakMap,i=new kt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let I=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let y=o.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*d),x=new yl(w,y,b,d);x.type=Gi,x.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let V=m[A],O=g[A],j=v[A],N=y*b*4*A;for(let K=0;K<V.count;K++){let te=K*S;f===!0&&(i.fromBufferAttribute(V,K),w[N+te+0]=i.x,w[N+te+1]=i.y,w[N+te+2]=i.z,w[N+te+3]=0),p===!0&&(i.fromBufferAttribute(O,K),w[N+te+4]=i.x,w[N+te+5]=i.y,w[N+te+6]=i.z,w[N+te+7]=0),_===!0&&(i.fromBufferAttribute(j,K),w[N+te+8]=i.x,w[N+te+9]=i.y,w[N+te+10]=i.z,w[N+te+11]=j.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new Me(y,b)},n.set(o,h),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function A1(r,e,t,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var C1={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[ec]:"CINEON_TONE_MAPPING",[tc]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[rc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function R1(r,e,t,n,i,s){let a=new hn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Kt;u.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xt([0,2,0,0,2,0],2));let d=new ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ut(u,d),f=new js(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,v=null,M=[],y=!1;this.setSize=function(b,w){a.setSize(b,w),o!==null&&o.setSize(b,w),l!==null&&l.setSize(b,w);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){M=b,y=M.length>0&&M[0].isRenderPass===!0;let w=a.width,x=a.height;M.length>0&&o===null&&(o=new hn(w,x,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new hn(w,x,{type:En,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(I=>I.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new kr(w,x),s===!0&&(c.format=Vr,c.type=ia)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let I=0;I<M.length;I++){let A=M[I];A.setSize&&A.setSize(w,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===zi&&M.length===0)return!1;if(v=w,w!==null){let x=w.width,S=w.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return y===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=zi,!0},this.hasRenderPass=function(){return y},this.end=function(b,w){b.toneMapping=g,m=!0;let x=a,S=o;for(let I=0;I<M.length;I++){let A=M[I];A.enabled!==!1&&(A.render(b,S,x,w),A.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(p!==b.outputColorSpace||_!==b.toneMapping){p=b.outputColorSpace,_=b.toneMapping,d.defines={},ft.getTransfer(p)===vt&&(d.defines.SRGB_TRANSFER="");let I=C1[_];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(h,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var kx=new ei,zx=new kr(1,1),Gx=new Il(1),Vx=new yl,Hx=new ih,Wx=new Rl,xx=[],yx=[],vx=new Float32Array(16),Sx=new Float32Array(9),Mx=new Float32Array(4);function _o(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=xx[i];if(s===void 0&&(s=new Float32Array(i),xx[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vf(r,e){let t=yx[e];t===void 0&&(t=new Int32Array(e),yx[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function P1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function I1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function L1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function D1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function N1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Mx.set(n),r.uniformMatrix2fv(this.addr,!1,Mx),dn(t,n)}}function U1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Sx.set(n),r.uniformMatrix3fv(this.addr,!1,Sx),dn(t,n)}}function O1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;vx.set(n),r.uniformMatrix4fv(this.addr,!1,vx),dn(t,n)}}function F1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function B1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function k1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function z1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function G1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function V1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function H1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function W1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function Sf(r){return r.version===0&&(r.compareFunction=Jp,r.needsUpdate=!0),r}function X1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Sf(zx):s=kx,t.setTexture2D(e||s,i)}function q1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hx,i)}function Y1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Sf(Gx):s=Wx,t.setTextureCube(e||s,i)}function Z1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vx,i)}function J1(r){switch(r){case 5126:return P1;case 35664:return I1;case 35665:return L1;case 35666:return D1;case 35674:return N1;case 35675:return U1;case 35676:return O1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return k1;case 35669:case 35673:return z1;case 5125:return G1;case 36294:return V1;case 36295:return H1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return Z1}}function $1(r,e){r.uniform1fv(this.addr,e)}function K1(r,e){let t=_o(e,this.size,2);r.uniform2fv(this.addr,t)}function Q1(r,e){let t=_o(e,this.size,3);r.uniform3fv(this.addr,t)}function j1(r,e){let t=_o(e,this.size,4);r.uniform4fv(this.addr,t)}function ew(r,e){let t=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function tw(r,e){let t=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function nw(r,e){let t=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function iw(r,e){r.uniform1iv(this.addr,e)}function rw(r,e){r.uniform2iv(this.addr,e)}function sw(r,e){r.uniform3iv(this.addr,e)}function aw(r,e){r.uniform4iv(this.addr,e)}function ow(r,e){r.uniform1uiv(this.addr,e)}function lw(r,e){r.uniform2uiv(this.addr,e)}function cw(r,e){r.uniform3uiv(this.addr,e)}function uw(r,e){r.uniform4uiv(this.addr,e)}function hw(r,e,t){let n=this.cache,i=e.length,s=vf(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Sf(zx):a=kx;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function fw(r,e,t){let n=this.cache,i=e.length,s=vf(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Hx,s[a])}function dw(r,e,t){let n=this.cache,i=e.length,s=vf(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Sf(Gx):a=Wx;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function pw(r,e,t){let n=this.cache,i=e.length,s=vf(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vx,s[a])}function mw(r){switch(r){case 5126:return $1;case 35664:return K1;case 35665:return Q1;case 35666:return j1;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return aw;case 5125:return ow;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return pw}}var hm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=J1(t.type)}},fm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mw(t.type)}},dm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},cm=/(\w+)(\])?(\[|\.)?/g;function bx(r,e){r.seq.push(e),r.map[e.id]=e}function gw(r,e,t){let n=r.name,i=n.length;for(cm.lastIndex=0;;){let s=cm.exec(n),a=cm.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bx(t,c===void 0?new hm(o,r,e):new fm(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new dm(o),bx(t,d)),t=d}}}var go=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gw(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Tx(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var _w=37297,xw=0;function yw(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var wx=new je;function vw(r){ft._getMatrix(wx,ft.workingColorSpace,r);let e=`mat3( ${wx.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case _l:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ex(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+yw(r.getShaderSource(e),o)}else return s}function Sw(r,e){let t=vw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Mw={[Ql]:"Linear",[jl]:"Reinhard",[ec]:"Cineon",[tc]:"ACESFilmic",[ic]:"AgX",[rc]:"Neutral",[nc]:"Custom"};function bw(r,e){let t=Mw[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _f=new Q;function Tw(){ft.getLuminanceCoefficients(_f);let r=_f.x.toFixed(4),e=_f.y.toFixed(4),t=_f.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dc).join(`
`)}function Ew(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Aw(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function dc(r){return r!==""}function Ax(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Cx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(r){return r.replace(Cw,Rw)}function Rw(r,e){let t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pm(t)}var Pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(r){return r.replace(Pw,Iw)}function Iw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Px(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Lw={[Kl]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function Dw(r){return Lw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nw={[fo]:"ENVMAP_MODE_REFRACTION"};function Uw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Nw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ow={[kp]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[X0]:"ENVMAP_BLENDING_ADD"};function Fw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Ow[r.combine]||"ENVMAP_BLENDING_NONE"}function Bw(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Dw(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Uw(t),d=Fw(t),h=ww(t),f=Ew(s),p=i.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(dc).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(dc).join(`
`),m.length>0&&(m+=`
`)):(_=[Px(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dc).join(`
`),m=[Px(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?ct.tonemapping_pars_fragment:"",t.toneMapping!==zi?bw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Sw("linearToOutputTexel",t.outputColorSpace),Tw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dc).join(`
`)),a=pm(a),a=Ax(a,t),a=Cx(a,t),o=pm(o),o=Ax(o,t),o=Cx(o,t),a=Rx(a),o=Rx(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+_+a,M=g+m+o,y=Tx(i,i.VERTEX_SHADER,v),b=Tx(i,i.FRAGMENT_SHADER,M);i.attachShader(p,y),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(A){if(r.debug.checkShaderErrors){let V=i.getProgramInfoLog(p)||"",O=i.getShaderInfoLog(y)||"",j=i.getShaderInfoLog(b)||"",N=V.trim(),K=O.trim(),te=j.trim(),H=!0,J=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,y,b);else{let ee=Ex(i,y,"vertex"),R=Ex(i,b,"fragment");rt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+ee+`
`+R)}else N!==""?nt("WebGLProgram: Program Info Log:",N):(K===""||te==="")&&(J=!1);J&&(A.diagnostics={runnable:H,programLog:N,vertexShader:{log:K,prefix:_},fragmentShader:{log:te,prefix:m}})}i.deleteShader(y),i.deleteShader(b),x=new go(i,p),S=Aw(i,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(p,_w)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var kw=0,mm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gm(e),t.set(e,n)),n}},gm=class{constructor(e){this.id=kw++,this.code=e,this.usedTimes=0}};function zw(r){return r===ys||r===uc||r===hc}function Gw(r,e,t,n,i,s){let a=new vl,o=new mm,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,I,A,V,O){let j=A.fog,N=V.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||K,te),J=h[x.type],ee=n.precision;x.precision!==null&&(ee=n.getMaxPrecision(x.precision),ee!==x.precision&&nt("WebGLProgram.getParameters:",x.precision,"not supported, using",ee,"instead."));let R=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ce=R!==void 0?R.length:0,Ae=0;N.morphAttributes.position!==void 0&&(Ae=1),N.morphAttributes.normal!==void 0&&(Ae=2),N.morphAttributes.color!==void 0&&(Ae=3);let Oe,se,be,Ce;if(J){let ve=_r[J];Oe=ve.vertexShader,se=ve.fragmentShader}else{Oe=x.vertexShader,se=x.fragmentShader;let ve=o.getVertexShaderStage(x),qe=o.getFragmentShaderStage(x);o.update(x,ve,qe),be=ve.id,Ce=qe.id}let ne=r.getRenderTarget(),q=r.state.buffers.depth.getReversed(),z=V.isInstancedMesh===!0,G=V.isBatchedMesh===!0,Y=!!x.map,fe=!!x.matcap,ue=!!H,L=ue&&H.isPMREMTexture===!0,Z=!!x.aoMap,X=!!x.lightMap,U=!!x.bumpMap&&x.wireframe===!1,re=!!x.normalMap,F=!!x.displacementMap,D=!!x.emissiveMap,P=!!x.metalnessMap,B=!!x.roughnessMap,ie=x.anisotropy>0,k=x.clearcoat>0,Ue=x.diffuseRoughness>0,He=x.dispersion>0,ke=x.retroreflectivity>0,pe=x.iridescence>0,Be=x.sheen>0,Ee=x.transmission>0,We=ie&&!!x.anisotropyMap,C=k&&!!x.clearcoatMap,T=k&&!!x.clearcoatNormalMap,ae=k&&!!x.clearcoatRoughnessMap,Te=Ue&&!!x.diffuseRoughnessMap,xe=pe&&!!x.iridescenceMap,Ie=pe&&!!x.iridescenceThicknessMap,De=Be&&!!x.sheenColorMap,oe=Be&&!!x.sheenRoughnessMap,_e=!!x.specularMap,Pe=!!x.specularColorMap,W=!!x.specularIntensityMap,me=Ee&&!!x.transmissionMap,ge=Ee&&!!x.thicknessMap,Ne=!!x.gradientMap,we=!!x.alphaMap,Le=x.alphaTest>0,Re=!!x.alphaHash,Fe=!!x.extensions,Se=zi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Se=r.toneMapping);let ye=L?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ze={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:se,defines:x.defines,customVertexShaderID:be,customFragmentShaderID:Ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:ee,batching:G,batchingColor:G&&V._colorsTexture!==null,instancing:z,instancingColor:z&&V.instanceColor!==null,instancingMorph:z&&V.morphTexture!==null,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Y,matcap:fe,envMap:ue,envMapMode:ue&&H.mapping,envMapPMREM:L,envMapMaxLod:L?ye.length-1:null,envMapSize:L?ye[0].width:null,aoMap:Z,lightMap:X,bumpMap:U,normalMap:re,displacementMap:F,emissiveMap:D,normalMapObjectSpace:re&&x.normalMapType===Z0,normalMapTangentSpace:re&&x.normalMapType===mf,packedNormalMap:re&&x.normalMapType===mf&&zw(x.normalMap.format),metalnessMap:P,roughnessMap:B,anisotropy:ie,anisotropyMap:We,clearcoat:k,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:ae,diffuseRoughness:Ue,diffuseRoughnessMap:Te,dispersion:He,retroreflection:ke,iridescence:pe,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:Be,sheenColorMap:De,sheenRoughnessMap:oe,specularMap:_e,specularColorMap:Pe,specularIntensityMap:W,transmission:Ee,transmissionMap:me,thicknessMap:ge,gradientMap:Ne,opaque:x.transparent===!1&&x.blending===ho&&x.alphaToCoverage===!1,alphaMap:we,alphaTest:Le,alphaHash:Re,combine:x.combine,mapUv:Y&&f(x.map.channel),aoMapUv:Z&&f(x.aoMap.channel),lightMapUv:X&&f(x.lightMap.channel),bumpMapUv:U&&f(x.bumpMap.channel),normalMapUv:re&&f(x.normalMap.channel),displacementMapUv:F&&f(x.displacementMap.channel),emissiveMapUv:D&&f(x.emissiveMap.channel),metalnessMapUv:P&&f(x.metalnessMap.channel),roughnessMapUv:B&&f(x.roughnessMap.channel),anisotropyMapUv:We&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Te&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:oe&&f(x.sheenRoughnessMap.channel),specularMapUv:_e&&f(x.specularMap.channel),specularColorMapUv:Pe&&f(x.specularColorMap.channel),specularIntensityMapUv:W&&f(x.specularIntensityMap.channel),transmissionMapUv:me&&f(x.transmissionMap.channel),thicknessMapUv:ge&&f(x.thicknessMap.channel),alphaMapUv:we&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(re||ie),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!N.attributes.uv&&(Y||we),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:q,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(ve=>ve.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Se,decodeVideoTexture:Y&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ti,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&x.extensions.multiDraw===!0||G)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)S.push(I),S.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let S=h[x.type],I;if(S){let A=_r[S];I=Wr.clone(A.uniforms)}else I=x.uniforms;return I}function M(x,S){let I=u.get(S);return I!==void 0?++I.usedTimes:(I=new Bw(r,S,x,i),c.push(I),u.set(S,I)),I}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:w}}function Vw(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Hw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ix(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Lx(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,_,m,g){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},r[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=g),e++,v}function l(h,f,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let M=o(h,f,p,_,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function c(h,f,p,_,m,g){let v=o(h,f,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||Hw),n.length>1&&n.sort(f||Ix),i.length>1&&i.sort(f||Ix)}function d(){for(let h=e,f=r.length;h<f;h++){let p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function Ww(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Lx,r.set(n,[a])):i>=s.length?(a=new Lx,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Xw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Q,color:new tt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=t,t}}}function qw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Yw=0;function Zw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Jw(r){let e=new Xw,t=qw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);let i=new Q,s=new St,a=new St;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,v=0,M=0,y=0,b=0,w=0,x=0,S=0,I=0,A=0;c.sort(Zw);for(let O=0,j=c.length;O<j;O++){let N=c[O],K=N.color,te=N.intensity,H=N.distance,J=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ys?J=N.shadow.map.texture:J=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=K.r*te,d+=K.g*te,h+=K.b*te;else if(N.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(N.sh.coefficients[ee],te);A++}else if(N.isSunLight){let ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let R=N.shadow,ce=t.get(N);ce.shadowIntensity=R.intensity,ce.shadowBias=R.bias,ce.shadowNormalBias=R.normalBias,ce.shadowRadius=R.radius,ce.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=ce,n.sunShadowMap[p]=J;let Ae=R.getViewportCount();for(let Oe=0;Oe<Ae;Oe++)n.sunShadowMatrix[_+Oe]=R.getMatrix(Oe),n.sunShadowCascade[_+Oe]=R._cascadeData[Oe];_+=Ae,p++}n.sun[f]=ee,f++}else if(N.isDirectionalLight){let ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let R=N.shadow,ce=t.get(N);ce.shadowIntensity=R.intensity,ce.shadowBias=R.bias,ce.shadowNormalBias=R.normalBias,ce.shadowRadius=R.radius,ce.shadowMapSize=R.mapSize,n.directionalShadow[m]=ce,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=ee,m++}else if(N.isSpotLight){let ee=e.get(N);ee.position.setFromMatrixPosition(N.matrixWorld),ee.color.copy(K).multiplyScalar(te),ee.distance=H,ee.coneCos=Math.cos(N.angle),ee.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ee.decay=N.decay,n.spot[v]=ee;let R=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,R.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[v]=R.matrix,N.castShadow){let ce=t.get(N);ce.shadowIntensity=R.intensity,ce.shadowBias=R.bias,ce.shadowNormalBias=R.normalBias,ce.shadowRadius=R.radius,ce.shadowMapSize=R.mapSize,n.spotShadow[v]=ce,n.spotShadowMap[v]=J,x++}v++}else if(N.isRectAreaLight){let ee=e.get(N);ee.color.copy(K).multiplyScalar(te),ee.halfWidth.set(N.width*.5,0,0),ee.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=ee,M++}else if(N.isPointLight){let ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),ee.distance=N.distance,ee.decay=N.decay,N.castShadow){let R=N.shadow,ce=t.get(N);ce.shadowIntensity=R.intensity,ce.shadowBias=R.bias,ce.shadowNormalBias=R.normalBias,ce.shadowRadius=R.radius,ce.shadowMapSize=R.mapSize,ce.shadowCameraNear=R.camera.near,ce.shadowCameraFar=R.camera.far,n.pointShadow[g]=ce,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=N.shadow.matrix,w++}n.point[g]=ee,g++}else if(N.isHemisphereLight){let ee=e.get(N);ee.skyColor.copy(N.color).multiplyScalar(te),ee.groundColor.copy(N.groundColor).multiplyScalar(te),n.hemi[y]=ee,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let V=n.hash;(V.sunLength!==f||V.directionalLength!==m||V.pointLength!==g||V.spotLength!==v||V.rectAreaLength!==M||V.hemiLength!==y||V.numSunShadows!==p||V.numDirectionalShadows!==b||V.numPointShadows!==w||V.numSpotShadows!==x||V.numSpotMaps!==S||V.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,V.sunLength=f,V.directionalLength=m,V.pointLength=g,V.spotLength=v,V.rectAreaLength=M,V.hemiLength=y,V.numSunShadows=p,V.numDirectionalShadows=b,V.numPointShadows=w,V.numSpotShadows=x,V.numSpotMaps=S,V.numLightProbes=A,n.version=Yw++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),h++}else if(y.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Dx(r){let e=new Jw(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $w(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Dx(r),e.set(i,[o])):s>=a.length?(o=new Dx(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jw=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],eE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Nx=new St,fc=new Q,um=new Q;function tE(r,e,t){let n=new ps,i=new Me,s=new Me,a=new kt,o=new mh,l=new gh,c={},u=t.maxTextureSize,d={[xs]:wn,[wn]:xs,[ti]:ti},h=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Kw,fragmentShader:Qw}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Kt;p.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ut(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let g=this.type;this.render=function(w,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===w0&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kl);let I=r.getRenderTarget(),A=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),O=r.state;O.setBlending(zr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let j=g!==this.type;j&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(K=>K.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,K=w.length;N<K;N++){let te=w[N],H=te.shadow;if(H===void 0){nt("WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let J=H.getFrameExtents();i.multiply(J),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,H.mapSize.y=s.y));let ee=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ee,H.map===null||j===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===uo){if(te.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new hn(i.x,i.y,{format:ys,type:En,minFilter:jn,magFilter:jn,generateMipmaps:!1}),H.map.texture.name=te.name+".shadowMap",H.map.depthTexture=new kr(i.x,i.y,Gi),H.map.depthTexture.name=te.name+".shadowMapDepth",H.map.depthTexture.format=Fr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=xn,H.map.depthTexture.magFilter=xn}else te.isPointLight?(H.map=new pc(i.x),H.map.depthTexture=new Il(i.x,Ki)):(H.map=new hn(i.x,i.y),H.map.depthTexture=new kr(i.x,i.y,Ki)),H.map.depthTexture.name=te.name+".shadowMap",H.map.depthTexture.format=Fr,this.type===Kl?(H.map.depthTexture.compareFunction=ee?Zp:Yp,H.map.depthTexture.minFilter=jn,H.map.depthTexture.magFilter=jn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=xn,H.map.depthTexture.magFilter=xn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let R=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();te.isPointLight!==!0&&H.updateMatrices(te,S);let ce=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Ae=0;Ae<R;Ae++){let Oe=H.getCamera(Ae);if(te.isPointLight){let se=H.camera,be=H.matrix,Ce=te.distance||se.far;Ce!==se.far&&(se.far=Ce,se.updateProjectionMatrix()),fc.setFromMatrixPosition(te.matrixWorld),se.position.copy(fc),um.copy(se.position),um.add(jw[Ae]),se.up.copy(eE[Ae]),se.lookAt(um),se.updateMatrixWorld(),be.makeTranslation(-fc.x,-fc.y,-fc.z),Nx.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Nx,se.coordinateSystem,se.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,Ae),r.clear();else{Ae===0&&(r.setRenderTarget(H.map),r.clear());let se=H.getViewport(Ae);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),O.viewport(a)}n=H.getFrustum(Ae),y(x,S,Oe,te,ce,this.type)}H.isPointLightShadow!==!0&&this.type===uo&&v(H,S),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(I,A,V)};function v(w,x){let S=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new hn(i.x,i.y,{format:ys,type:En}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(x,null,S,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(x,null,S,f,_,null)}function M(w,x,S,I){let A=null,V=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)A=V;else if(A=S.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=A.uuid,j=x.uuid,N=c[O];N===void 0&&(N={},c[O]=N);let K=N[j];K===void 0&&(K=A.clone(),N[j]=K,x.addEventListener("dispose",b)),A=K}if(A.visible=x.visible,A.wireframe=x.wireframe,I===uo?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let O=r.properties.get(A);O.light=S}return A}function y(w,x,S,I,A,V){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&V===uo)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let N=e.update(w),K=w.material;if(Array.isArray(K)){let te=N.groups;for(let H=0,J=te.length;H<J;H++){let ee=te[H],R=K[ee.materialIndex];if(R&&R.visible){let ce=M(w,R,I,V);w.onBeforeShadow(r,w,x,S,N,ce,ee),r.renderBufferDirect(S,null,N,ce,w,ee),w.onAfterShadow(r,w,x,S,N,ce,ee)}}}else if(K.visible){let te=M(w,K,I,V);w.onBeforeShadow(r,w,x,S,N,te,null),r.renderBufferDirect(S,null,N,te,w,null),w.onAfterShadow(r,w,x,S,N,te,null)}}let j=w.children;for(let N=0,K=j.length;N<K;N++)y(j[N],x,S,I,A,V)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let I=c[S],A=w.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function nE(r,e){function t(){let W=!1,me=new kt,ge=null,Ne=new kt(0,0,0,0);return{setMask:function(we){ge!==we&&!W&&(r.colorMask(we,we,we,we),ge=we)},setLocked:function(we){W=we},setClear:function(we,Le,Re,Fe,Se){Se===!0&&(we*=Fe,Le*=Fe,Re*=Fe),me.set(we,Le,Re,Fe),Ne.equals(me)===!1&&(r.clearColor(we,Le,Re,Fe),Ne.copy(me))},reset:function(){W=!1,ge=null,Ne.set(-1,0,0,0)}}}function n(){let W=!1,me=!1,ge=null,Ne=null,we=null;return{setReversed:function(Le){if(me!==Le){let Re=e.get("EXT_clip_control");Le?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),me=Le;let Fe=we;we=null,this.setClear(Fe)}},getReversed:function(){return me},setTest:function(Le){Le?q(r.DEPTH_TEST):z(r.DEPTH_TEST)},setMask:function(Le){ge!==Le&&!W&&(r.depthMask(Le),ge=Le)},setFunc:function(Le){if(me&&(Le=sx[Le]),Ne!==Le){switch(Le){case qu:r.depthFunc(r.NEVER);break;case Yu:r.depthFunc(r.ALWAYS);break;case Zu:r.depthFunc(r.LESS);break;case Xa:r.depthFunc(r.LEQUAL);break;case Ju:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case Ku:r.depthFunc(r.GREATER);break;case Qu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=Le}},setLocked:function(Le){W=Le},setClear:function(Le){we!==Le&&(we=Le,me&&(Le=1-Le),r.clearDepth(Le))},reset:function(){W=!1,ge=null,Ne=null,we=null,me=!1}}}function i(){let W=!1,me=null,ge=null,Ne=null,we=null,Le=null,Re=null,Fe=null,Se=null;return{setTest:function(ye){W||(ye?q(r.STENCIL_TEST):z(r.STENCIL_TEST))},setMask:function(ye){me!==ye&&!W&&(r.stencilMask(ye),me=ye)},setFunc:function(ye,ze,ve){(ge!==ye||Ne!==ze||we!==ve)&&(r.stencilFunc(ye,ze,ve),ge=ye,Ne=ze,we=ve)},setOp:function(ye,ze,ve){(Le!==ye||Re!==ze||Fe!==ve)&&(r.stencilOp(ye,ze,ve),Le=ye,Re=ze,Fe=ve)},setLocked:function(ye){W=ye},setClear:function(ye){Se!==ye&&(r.clearStencil(ye),Se=ye)},reset:function(){W=!1,me=null,ge=null,Ne=null,we=null,Le=null,Re=null,Fe=null,Se=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],_=null,m=!1,g=null,v=null,M=null,y=null,b=null,w=null,x=null,S=new tt(0,0,0),I=0,A=!1,V=null,O=null,j=null,N=null,K=null,te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ee)[1]),H=J>=1):ee.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),H=J>=2);let R=null,ce={},Ae=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),se=new kt().fromArray(Ae),be=new kt().fromArray(Oe);function Ce(W,me,ge,Ne){let we=new Uint8Array(4),Le=r.createTexture();r.bindTexture(W,Le),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<ge;Re++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(me+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return Le}let ne={};ne[r.TEXTURE_2D]=Ce(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(r.DEPTH_TEST),a.setFunc(Xa),U(!1),re(Np),q(r.CULL_FACE),Z(zr);function q(W){u[W]!==!0&&(r.enable(W),u[W]=!0)}function z(W){u[W]!==!1&&(r.disable(W),u[W]=!1)}function G(W,me){return h[W]!==me?(r.bindFramebuffer(W,me),h[W]=me,W===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=me),W===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Y(W,me){let ge=p,Ne=!1;if(W){ge=f.get(me),ge===void 0&&(ge=[],f.set(me,ge));let we=W.textures;if(ge.length!==we.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,Re=we.length;Le<Re;Le++)ge[Le]=r.COLOR_ATTACHMENT0+Le;ge.length=we.length,Ne=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(ge)}function fe(W){return _!==W?(r.useProgram(W),_=W,!0):!1}let ue={[ta]:r.FUNC_ADD,[A0]:r.FUNC_SUBTRACT,[C0]:r.FUNC_REVERSE_SUBTRACT};ue[R0]=r.MIN,ue[P0]=r.MAX;let L={[I0]:r.ZERO,[L0]:r.ONE,[D0]:r.SRC_COLOR,[Fp]:r.SRC_ALPHA,[k0]:r.SRC_ALPHA_SATURATE,[F0]:r.DST_COLOR,[U0]:r.DST_ALPHA,[N0]:r.ONE_MINUS_SRC_COLOR,[Bp]:r.ONE_MINUS_SRC_ALPHA,[B0]:r.ONE_MINUS_DST_COLOR,[O0]:r.ONE_MINUS_DST_ALPHA,[z0]:r.CONSTANT_COLOR,[G0]:r.ONE_MINUS_CONSTANT_COLOR,[V0]:r.CONSTANT_ALPHA,[H0]:r.ONE_MINUS_CONSTANT_ALPHA};function Z(W,me,ge,Ne,we,Le,Re,Fe,Se,ye){if(W===zr){m===!0&&(z(r.BLEND),m=!1);return}if(m===!1&&(q(r.BLEND),m=!0),W!==E0){if(W!==g||ye!==A){if((v!==ta||b!==ta)&&(r.blendEquation(r.FUNC_ADD),v=ta,b=ta),ye)switch(W){case ho:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ea:r.blendFunc(r.ONE,r.ONE);break;case Up:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Op:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:rt("WebGLState: Invalid blending: ",W);break}else switch(W){case ho:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ea:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Up:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Op:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",W);break}M=null,y=null,w=null,x=null,S.set(0,0,0),I=0,g=W,A=ye}return}we=we||me,Le=Le||ge,Re=Re||Ne,(me!==v||we!==b)&&(r.blendEquationSeparate(ue[me],ue[we]),v=me,b=we),(ge!==M||Ne!==y||Le!==w||Re!==x)&&(r.blendFuncSeparate(L[ge],L[Ne],L[Le],L[Re]),M=ge,y=Ne,w=Le,x=Re),(Fe.equals(S)===!1||Se!==I)&&(r.blendColor(Fe.r,Fe.g,Fe.b,Se),S.copy(Fe),I=Se),g=W,A=!1}function X(W,me){W.side===ti?z(r.CULL_FACE):q(r.CULL_FACE);let ge=W.side===wn;me&&(ge=!ge),U(ge),W.blending===ho&&W.transparent===!1?Z(zr):Z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);let Ne=W.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),D(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?q(r.SAMPLE_ALPHA_TO_COVERAGE):z(r.SAMPLE_ALPHA_TO_COVERAGE)}function U(W){V!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),V=W)}function re(W){W!==b0?(q(r.CULL_FACE),W!==O&&(W===Np?r.cullFace(r.BACK):W===T0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):z(r.CULL_FACE),O=W}function F(W){W!==j&&(H&&r.lineWidth(W),j=W)}function D(W,me,ge){W?(q(r.POLYGON_OFFSET_FILL),(N!==me||K!==ge)&&(N=me,K=ge,a.getReversed()&&(me=-me,ge=-ge),r.polygonOffset(me,ge))):z(r.POLYGON_OFFSET_FILL)}function P(W){W?q(r.SCISSOR_TEST):z(r.SCISSOR_TEST)}function B(W){W===void 0&&(W=r.TEXTURE0+te-1),R!==W&&(r.activeTexture(W),R=W)}function ie(W,me,ge){ge===void 0&&(R===null?ge=r.TEXTURE0+te-1:ge=R);let Ne=ce[ge];Ne===void 0&&(Ne={type:void 0,texture:void 0},ce[ge]=Ne),(Ne.type!==W||Ne.texture!==me)&&(R!==ge&&(r.activeTexture(ge),R=ge),r.bindTexture(W,me||ne[W]),Ne.type=W,Ne.texture=me)}function k(){let W=ce[R];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ue(){try{r.compressedTexImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function He(){try{r.compressedTexImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function ke(){try{r.texSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function pe(){try{r.texSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function Be(){try{r.compressedTexSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function We(){try{r.texStorage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function C(){try{r.texStorage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function T(){try{r.texImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function ae(){try{r.texImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function Te(W){return d[W]!==void 0?d[W]:r.getParameter(W)}function xe(W,me){d[W]!==me&&(r.pixelStorei(W,me),d[W]=me)}function Ie(W){se.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),se.copy(W))}function De(W){be.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),be.copy(W))}function oe(W,me){let ge=c.get(me);ge===void 0&&(ge=new WeakMap,c.set(me,ge));let Ne=ge.get(W);Ne===void 0&&(Ne=r.getUniformBlockIndex(me,W.name),r.uniformBlockBinding(me,Ne,Ne),ge.set(W,Ne))}function _e(W,me,ge){let we=c.get(me).get(W);l[we]!==ge&&(r.bindBufferBase(r.UNIFORM_BUFFER,we,ge),l[we]=ge)}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},R=null,ce={},h={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,v=null,M=null,y=null,b=null,w=null,x=null,S=new tt(0,0,0),I=0,A=!1,V=null,O=null,j=null,N=null,K=null,se.set(0,0,r.canvas.width,r.canvas.height),be.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:z,bindFramebuffer:G,drawBuffers:Y,useProgram:fe,setBlending:Z,setMaterial:X,setFlipSided:U,setCullFace:re,setLineWidth:F,setPolygonOffset:D,setScissorTest:P,activeTexture:B,bindTexture:ie,unbindTexture:k,compressedTexImage2D:Ue,compressedTexImage3D:He,texImage2D:T,texImage3D:ae,pixelStorei:xe,getParameter:Te,updateUBOMapping:oe,uniformBlockBinding:_e,texStorage2D:We,texStorage3D:C,texSubImage2D:ke,texSubImage3D:pe,compressedTexSubImage2D:Be,compressedTexSubImage3D:Ee,scissor:Ie,viewport:De,reset:Pe}}function iE(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,_=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return m?new OffscreenCanvas(C,T):xl("canvas")}function v(C,T,ae){let Te=1,xe=We(C);if((xe.width>ae||xe.height>ae)&&(Te=ae/Math.max(xe.width,xe.height)),Te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Ie=Math.floor(Te*xe.width),De=Math.floor(Te*xe.height);h===void 0&&(h=g(Ie,De));let oe=T?g(Ie,De):h;return oe.width=Ie,oe.height=De,oe.getContext("2d").drawImage(C,0,0,Ie,De),nt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ie+"x"+De+")."),oe}else return"data"in C&&nt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),C;return C}function M(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,T,ae,Te,xe,Ie=!1){if(C!==null){if(r[C]!==void 0)return r[C];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let De;Te&&(De=e.get("EXT_texture_norm16"),De||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=T;if(T===r.RED&&(ae===r.FLOAT&&(oe=r.R32F),ae===r.HALF_FLOAT&&(oe=r.R16F),ae===r.UNSIGNED_BYTE&&(oe=r.R8),ae===r.UNSIGNED_SHORT&&De&&(oe=De.R16_EXT),ae===r.SHORT&&De&&(oe=De.R16_SNORM_EXT)),T===r.RED_INTEGER&&(ae===r.UNSIGNED_BYTE&&(oe=r.R8UI),ae===r.UNSIGNED_SHORT&&(oe=r.R16UI),ae===r.UNSIGNED_INT&&(oe=r.R32UI),ae===r.BYTE&&(oe=r.R8I),ae===r.SHORT&&(oe=r.R16I),ae===r.INT&&(oe=r.R32I)),T===r.RG&&(ae===r.FLOAT&&(oe=r.RG32F),ae===r.HALF_FLOAT&&(oe=r.RG16F),ae===r.UNSIGNED_BYTE&&(oe=r.RG8),ae===r.UNSIGNED_SHORT&&De&&(oe=De.RG16_EXT),ae===r.SHORT&&De&&(oe=De.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(ae===r.UNSIGNED_BYTE&&(oe=r.RG8UI),ae===r.UNSIGNED_SHORT&&(oe=r.RG16UI),ae===r.UNSIGNED_INT&&(oe=r.RG32UI),ae===r.BYTE&&(oe=r.RG8I),ae===r.SHORT&&(oe=r.RG16I),ae===r.INT&&(oe=r.RG32I)),T===r.RGB_INTEGER&&(ae===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),ae===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),ae===r.UNSIGNED_INT&&(oe=r.RGB32UI),ae===r.BYTE&&(oe=r.RGB8I),ae===r.SHORT&&(oe=r.RGB16I),ae===r.INT&&(oe=r.RGB32I)),T===r.RGBA_INTEGER&&(ae===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),ae===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),ae===r.UNSIGNED_INT&&(oe=r.RGBA32UI),ae===r.BYTE&&(oe=r.RGBA8I),ae===r.SHORT&&(oe=r.RGBA16I),ae===r.INT&&(oe=r.RGBA32I)),T===r.RGB&&(ae===r.UNSIGNED_SHORT&&De&&(oe=De.RGB16_EXT),ae===r.SHORT&&De&&(oe=De.RGB16_SNORM_EXT),ae===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),ae===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),T===r.RGBA){let _e=Ie?_l:ft.getTransfer(xe);ae===r.FLOAT&&(oe=r.RGBA32F),ae===r.HALF_FLOAT&&(oe=r.RGBA16F),ae===r.UNSIGNED_BYTE&&(oe=_e===vt?r.SRGB8_ALPHA8:r.RGBA8),ae===r.UNSIGNED_SHORT&&De&&(oe=De.RGBA16_EXT),ae===r.SHORT&&De&&(oe=De.RGBA16_SNORM_EXT),ae===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),ae===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(C,T){let ae;return C?T===null||T===Ki||T===ia?ae=r.DEPTH24_STENCIL8:T===Gi?ae=r.DEPTH32F_STENCIL8:T===po&&(ae=r.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===ia?ae=r.DEPTH_COMPONENT24:T===Gi?ae=r.DEPTH_COMPONENT32F:T===po&&(ae=r.DEPTH_COMPONENT16),ae}function S(C,T){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==xn&&C.minFilter!==jn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function I(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),_.register(C,T,T)}function A(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),_.unregister(T))}function V(C){j(C.target)}function O(C){N(C.target)}function j(C){C.removeEventListener("dispose",V),A(C),te(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&d.delete(C)}function N(C){C.removeEventListener("dispose",O),A(C),J(C)}function K(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):j(T))}p.clear(),d.clear()}function te(C){let T=n.get(C);if(T.__webglInit===void 0)return;let ae=C.source,Te=f.get(ae);if(Te){let xe=Te[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&H(C),Object.keys(Te).length===0&&f.delete(ae)}n.remove(C)}function H(C){let T=n.get(C);r.deleteTexture(T.__webglTexture);let ae=C.source,Te=f.get(ae);delete Te[T.__cacheKey],a.memory.textures--}function J(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let ae=C.depthTexture;if(ae&&ae.renderTarget===C&&j(ae),C.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(T.__webglFramebuffer[xe]))for(let Ie=0;Ie<T.__webglFramebuffer[xe].length;Ie++)r.deleteFramebuffer(T.__webglFramebuffer[xe][Ie]);else r.deleteFramebuffer(T.__webglFramebuffer[xe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[xe])}else{if(Array.isArray(T.__webglFramebuffer))for(let xe=0;xe<T.__webglFramebuffer.length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[xe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xe=0;xe<T.__webglColorRenderbuffer.length;xe++)T.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[xe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Te=C.textures;for(let xe=0,Ie=Te.length;xe<Ie;xe++){let De=n.get(Te[xe]);De.__webglTexture&&(r.deleteTexture(De.__webglTexture),a.memory.textures--),n.remove(Te[xe])}n.remove(C)}let ee=0;function R(){ee=0}function ce(){return ee}function Ae(C){ee=C}function Oe(){let C=ee;return C>=i.maxTextures&&nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),ee+=1,C}function se(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function be(C,T){let ae=n.get(C);if(C.isVideoTexture&&Be(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&ae.__version!==C.version){let Te=C.image;if(Te===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(ae,C,T);return}}else C.isExternalTexture&&(ae.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture,r.TEXTURE0+T)}function Ce(C,T){let ae=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&ae.__version!==C.version){X(ae,C,T);return}else C.isExternalTexture&&(ae.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,ae.__webglTexture,r.TEXTURE0+T)}function ne(C,T){let ae=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&ae.__version!==C.version){X(ae,C,T);return}t.bindTexture(r.TEXTURE_3D,ae.__webglTexture,r.TEXTURE0+T)}function q(C,T){let ae=n.get(C);if(C.version>0&&ae.__version!==C.version){U(ae,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture,r.TEXTURE0+T)}let z={[qa]:r.REPEAT,[Fi]:r.CLAMP_TO_EDGE,[Ya]:r.MIRRORED_REPEAT},G={[xn]:r.NEAREST,[q0]:r.NEAREST_MIPMAP_NEAREST,[sc]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},Y={[$0]:r.NEVER,[Jp]:r.ALWAYS,[K0]:r.LESS,[Yp]:r.LEQUAL,[Q0]:r.EQUAL,[Zp]:r.GEQUAL,[j0]:r.GREATER,[ex]:r.NOTEQUAL};function fe(C,T){if(T.type===Gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===jn||T.magFilter===Ph||T.magFilter===sc||T.magFilter===Gr||T.minFilter===jn||T.minFilter===Ph||T.minFilter===sc||T.minFilter===Gr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,z[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,z[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,z[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,G[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,G[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Y[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xn||T.minFilter!==sc&&T.minFilter!==Gr||T.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let ae=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ue(C,T){let ae=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",V),I(T));let Te=T.source,xe=f.get(Te);xe===void 0&&(xe={},f.set(Te,xe));let Ie=se(T);if(Ie!==C.__cacheKey){xe[Ie]===void 0&&(xe[Ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,ae=!0),xe[Ie].usedTimes++;let De=xe[C.__cacheKey];De!==void 0&&(xe[C.__cacheKey].usedTimes--,De.usedTimes===0&&H(T)),C.__cacheKey=Ie,C.__webglTexture=xe[Ie].texture}return ae}function L(C,T,ae){return Math.floor(Math.floor(C/ae)/T)}function Z(C,T,ae,Te){let Ie=C.updateRanges;if(Ie.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,ae,Te,T.data);else{Ie.sort((W,me)=>W.start-me.start);let De=0;for(let W=1;W<Ie.length;W++){let me=Ie[De],ge=Ie[W],Ne=me.start+me.count,we=L(ge.start,T.width,4),Le=L(me.start,T.width,4);ge.start<=Ne+1&&we===Le&&L(ge.start+ge.count-1,T.width,4)===we?me.count=Math.max(me.count,ge.start+ge.count-me.start):(++De,Ie[De]=ge)}Ie.length=De+1;let oe=t.getParameter(r.UNPACK_ROW_LENGTH),_e=t.getParameter(r.UNPACK_SKIP_PIXELS),Pe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let W=0,me=Ie.length;W<me;W++){let ge=Ie[W],Ne=Math.floor(ge.start/4),we=Math.ceil(ge.count/4),Le=Ne%T.width,Re=Math.floor(Ne/T.width),Fe=we,Se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(r.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(r.TEXTURE_2D,0,Le,Re,Fe,Se,ae,Te,T.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,oe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,Pe)}}function X(C,T,ae){let Te=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Te=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Te=r.TEXTURE_3D);let xe=ue(C,T),Ie=T.source;t.bindTexture(Te,C.__webglTexture,r.TEXTURE0+ae);let De=n.get(Ie);if(Ie.version!==De.__version||xe===!0){if(t.activeTexture(r.TEXTURE0+ae),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Se=ft.getPrimaries(ft.workingColorSpace),ye=T.colorSpace===Hr?null:ft.getPrimaries(T.colorSpace),ze=T.colorSpace===Hr||Se===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let _e=v(T.image,!1,i.maxTextureSize);_e=Ee(T,_e);let Pe=s.convert(T.format,T.colorSpace),W=s.convert(T.type),me=w(T.internalFormat,Pe,W,T.normalized,T.colorSpace,T.isVideoTexture);fe(Te,T);let ge,Ne=T.mipmaps,we=T.isVideoTexture!==!0,Le=De.__version===void 0||xe===!0,Re=Ie.dataReady,Fe=S(T,_e);if(T.isDepthTexture)me=x(T.format===Vr,T.type),Le&&(we?t.texStorage2D(r.TEXTURE_2D,1,me,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,me,_e.width,_e.height,0,Pe,W,null));else if(T.isDataTexture)if(Ne.length>0){we&&Le&&t.texStorage2D(r.TEXTURE_2D,Fe,me,Ne[0].width,Ne[0].height);for(let Se=0,ye=Ne.length;Se<ye;Se++)ge=Ne[Se],we?Re&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ge.width,ge.height,Pe,W,ge.data):t.texImage2D(r.TEXTURE_2D,Se,me,ge.width,ge.height,0,Pe,W,ge.data);T.generateMipmaps=!1}else we?(Le&&t.texStorage2D(r.TEXTURE_2D,Fe,me,_e.width,_e.height),Re&&Z(T,_e,Pe,W)):t.texImage2D(r.TEXTURE_2D,0,me,_e.width,_e.height,0,Pe,W,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){we&&Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,me,Ne[0].width,Ne[0].height,_e.depth);for(let Se=0,ye=Ne.length;Se<ye;Se++)if(ge=Ne[Se],T.format!==Qi)if(Pe!==null)if(we){if(Re)if(T.layerUpdates.size>0){let ze=im(ge.width,ge.height,T.format,T.type);for(let ve of T.layerUpdates){let qe=ge.data.subarray(ve*ze/ge.data.BYTES_PER_ELEMENT,(ve+1)*ze/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,ve,ge.width,ge.height,1,Pe,qe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,ge.width,ge.height,_e.depth,Pe,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,me,ge.width,ge.height,_e.depth,0,ge.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,ge.width,ge.height,_e.depth,Pe,W,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,me,ge.width,ge.height,_e.depth,0,Pe,W,ge.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{we&&Le&&t.texStorage2D(r.TEXTURE_2D,Fe,me,Ne[0].width,Ne[0].height);for(let Se=0,ye=Ne.length;Se<ye;Se++)ge=Ne[Se],T.format!==Qi?Pe!==null?we?Re&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,ge.width,ge.height,Pe,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,me,ge.width,ge.height,0,ge.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Re&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ge.width,ge.height,Pe,W,ge.data):t.texImage2D(r.TEXTURE_2D,Se,me,ge.width,ge.height,0,Pe,W,ge.data)}else if(T.isDataArrayTexture)if(we){if(Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,me,_e.width,_e.height,_e.depth),Re)if(T.layerUpdates.size>0){let Se=im(_e.width,_e.height,T.format,T.type);for(let ye of T.layerUpdates){let ze=_e.data.subarray(ye*Se/_e.data.BYTES_PER_ELEMENT,(ye+1)*Se/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,_e.width,_e.height,1,Pe,W,ze)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Pe,W,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,_e.width,_e.height,_e.depth,0,Pe,W,_e.data);else if(T.isData3DTexture)we?(Le&&t.texStorage3D(r.TEXTURE_3D,Fe,me,_e.width,_e.height,_e.depth),Re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Pe,W,_e.data)):t.texImage3D(r.TEXTURE_3D,0,me,_e.width,_e.height,_e.depth,0,Pe,W,_e.data);else if(T.isFramebufferTexture){if(Le)if(we)t.texStorage2D(r.TEXTURE_2D,Fe,me,_e.width,_e.height);else{let Se=_e.width,ye=_e.height;for(let ze=0;ze<Fe;ze++)t.texImage2D(r.TEXTURE_2D,ze,me,Se,ye,0,Pe,W,null),Se>>=1,ye>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let Se=r.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),_e.parentNode!==Se){Se.appendChild(_e),d.add(T),Se.onpaint=ye=>{let ze=ye.changedElements;for(let ve of d)ze.includes(ve.image)&&(ve.needsUpdate=!0)},Se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,_e);else{let ze=r.RGBA,ve=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ze,ve,qe,_e)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(we&&Le){let Se=We(Ne[0]);t.texStorage2D(r.TEXTURE_2D,Fe,me,Se.width,Se.height)}for(let Se=0,ye=Ne.length;Se<ye;Se++)ge=Ne[Se],we?Re&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,Pe,W,ge):t.texImage2D(r.TEXTURE_2D,Se,me,Pe,W,ge);T.generateMipmaps=!1}else if(we){if(Le){let Se=We(_e);t.texStorage2D(r.TEXTURE_2D,Fe,me,Se.width,Se.height)}Re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Pe,W,_e)}else t.texImage2D(r.TEXTURE_2D,0,me,Pe,W,_e);M(T)&&T.mipmapsAutoUpdate===!0&&y(Te),De.__version=Ie.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function U(C,T,ae){if(T.image.length!==6)return;let Te=ue(C,T),xe=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+ae);let Ie=n.get(xe);if(xe.version!==Ie.__version||Te===!0){t.activeTexture(r.TEXTURE0+ae);let De=ft.getPrimaries(ft.workingColorSpace),oe=T.colorSpace===Hr?null:ft.getPrimaries(T.colorSpace),_e=T.colorSpace===Hr||De===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,W=T.image[0]&&T.image[0].isDataTexture,me=[];for(let ve=0;ve<6;ve++)!Pe&&!W?me[ve]=v(T.image[ve],!0,i.maxCubemapSize):me[ve]=W?T.image[ve].image:T.image[ve],me[ve]=Ee(T,me[ve]);let ge=me[0],Ne=s.convert(T.format,T.colorSpace),we=s.convert(T.type),Le=w(T.internalFormat,Ne,we,T.normalized,T.colorSpace),Re=T.isVideoTexture!==!0,Fe=Ie.__version===void 0||Te===!0,Se=xe.dataReady,ye=S(T,ge);fe(r.TEXTURE_CUBE_MAP,T);let ze;if(T.isDepthTexture){if(Le=x(T.format===Vr,T.type),Fe)if(Re)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,Le,ge.width,ge.height);else for(let ve=0;ve<6;ve++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Le,ge.width,ge.height,0,Ne,we,null)}else if(Pe){Re&&Fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,Le,ge.width,ge.height);for(let ve=0;ve<6;ve++){ze=me[ve].mipmaps;for(let qe=0;qe<ze.length;qe++){let dt=ze[qe];T.format!==Qi?Ne!==null?Re?Se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,dt.width,dt.height,Ne,dt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,Le,dt.width,dt.height,0,dt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,dt.width,dt.height,Ne,we,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,Le,dt.width,dt.height,0,Ne,we,dt.data)}}}else{if(ze=T.mipmaps,Re&&Fe){ze.length>0&&ye++;let ve=We(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,Le,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(W){Re?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,me[ve].width,me[ve].height,Ne,we,me[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Le,me[ve].width,me[ve].height,0,Ne,we,me[ve].data);for(let qe=0;qe<ze.length;qe++){let st=ze[qe].image[ve].image;Re?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,st.width,st.height,Ne,we,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,Le,st.width,st.height,0,Ne,we,st.data)}}else{Re?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ne,we,me[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Le,Ne,we,me[ve]);for(let qe=0;qe<ze.length;qe++){let dt=ze[qe];Re?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,Ne,we,dt.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,Le,Ne,we,dt.image[ve])}}}M(T)&&T.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),Ie.__version=xe.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function re(C,T,ae,Te,xe,Ie){let De=s.convert(ae.format,ae.colorSpace),oe=s.convert(ae.type),_e=w(ae.internalFormat,De,oe,ae.normalized,ae.colorSpace),Pe=n.get(T),W=n.get(ae);if(W.__renderTarget=T,!Pe.__hasExternalTextures){let me=Math.max(1,T.width>>Ie),ge=Math.max(1,T.height>>Ie);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,Ie,_e,me,ge,T.depth,0,De,oe,null):t.texImage2D(xe,Ie,_e,me,ge,0,De,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),pe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Te,xe,W.__webglTexture,0,ke(T)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Te,xe,W.__webglTexture,Ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function F(C,T,ae){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){let Te=T.depthTexture,xe=Te&&Te.isDepthTexture?Te.type:null,Ie=x(T.stencilBuffer,xe),De=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke(T),Ie,T.width,T.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke(T),Ie,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,C)}else{let Te=T.textures;for(let xe=0;xe<Te.length;xe++){let Ie=Te[xe],De=s.convert(Ie.format,Ie.colorSpace),oe=s.convert(Ie.type),_e=w(Ie.internalFormat,De,oe,Ie.normalized,Ie.colorSpace);pe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke(T),_e,T.width,T.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke(T),_e,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,_e,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function D(C,T,ae){let Te=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let xe=n.get(T.depthTexture);xe.__renderTarget=T;let Ie=Te?T.depthTexture.image[0]:T.depthTexture.image;(!xe.__webglTexture||Ie.width!==T.width||Ie.height!==T.height)&&(Ie.width=T.width,Ie.height=T.height,T.depthTexture.needsUpdate=!0),Te?q(T.depthTexture,0):be(T.depthTexture,0);let De=xe.__webglTexture,oe=ke(T),_e=Te?r.TEXTURE_CUBE_MAP_POSITIVE_X+ae:r.TEXTURE_2D,Pe=T.depthTexture.format===Vr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Fr)pe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,_e,De,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,_e,De,0);else if(T.depthTexture.format===Vr)pe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,_e,De,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,_e,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function P(C){let T=n.get(C),ae=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let Te=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Te){let xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Te.removeEventListener("dispose",xe)};Te.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=Te}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(ae)for(let Te=0;Te<6;Te++)D(T.__webglFramebuffer[Te],C,Te);else C.texture.mipmaps.length>0?D(T.__webglFramebuffer[0],C,0):D(T.__webglFramebuffer,C,0);else if(ae){T.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Te]),T.__webglDepthbuffer[Te]===void 0)T.__webglDepthbuffer[Te]=r.createRenderbuffer(),F(T.__webglDepthbuffer[Te],C,!1);else{let xe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=T.__webglDepthbuffer[Te];r.bindRenderbuffer(r.RENDERBUFFER,Ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Ie)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),F(T.__webglDepthbuffer,C,!1);else{let xe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Ie)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function B(C,T,ae){let Te=n.get(C);T!==void 0&&re(Te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ae!==void 0&&P(C)}function ie(C){let T=C.texture,ae=n.get(C),Te=n.get(T);C.addEventListener("dispose",O),I(C);let xe=C.textures,Ie=C.isWebGLCubeRenderTarget===!0,De=xe.length>1;if(De||(Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture()),Te.__version=T.version,a.memory.textures++),Ie){ae.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0){ae.__webglFramebuffer[oe]=[];for(let _e=0;_e<T.mipmaps.length;_e++)ae.__webglFramebuffer[oe][_e]=r.createFramebuffer()}else ae.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)ae.__webglFramebuffer[oe]=r.createFramebuffer()}else ae.__webglFramebuffer=r.createFramebuffer();if(De)for(let oe=0,_e=xe.length;oe<_e;oe++){let Pe=n.get(xe[oe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&pe(C)===!1){ae.__webglMultisampledFramebuffer=r.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let oe=0;oe<xe.length;oe++){let _e=xe[oe];ae.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Pe=s.convert(_e.format,_e.colorSpace),W=s.convert(_e.type),me=w(_e.internalFormat,Pe,W,_e.normalized,_e.colorSpace,C.isXRRenderTarget===!0),ge=ke(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,me,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(ae.__webglDepthRenderbuffer=r.createRenderbuffer(),F(ae.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(r.TEXTURE_CUBE_MAP,Te.__webglTexture),fe(r.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)re(ae.__webglFramebuffer[oe][_e],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e);else re(ae.__webglFramebuffer[oe],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);M(T)?y(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(De){for(let oe=0,_e=xe.length;oe<_e;oe++){let Pe=xe[oe],W=n.get(Pe),me=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,W.__webglTexture),fe(me,Pe),re(ae.__webglFramebuffer,C,Pe,r.COLOR_ATTACHMENT0+oe,me,0),M(Pe)&&y(me)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Te.__webglTexture),fe(oe,T),T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)re(ae.__webglFramebuffer[_e],C,T,r.COLOR_ATTACHMENT0,oe,_e);else re(ae.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,oe,0);M(T)?y(oe):T.mipmaps.length>0&&r.texParameteri(oe,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&P(C)}function k(C){let T=C.textures;for(let ae=0,Te=T.length;ae<Te;ae++){let xe=T[ae];if(M(xe)&&xe.mipmapsAutoUpdate===!0){let Ie=b(C),De=n.get(xe).__webglTexture;t.bindTexture(Ie,De),y(Ie),t.unbindTexture()}}}let Ue=[];function He(C){if(C.samples>0){if(pe(C)===!1){let T=C.textures,ae=C.width,Te=C.height,xe=r.COLOR_BUFFER_BIT,Ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=n.get(C),oe=T.length>1;if(oe)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);let W=n.get(T[Pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,W,0)}r.blitFramebuffer(0,0,ae,Te,0,0,ae,Te,xe,r.NEAREST),l===!0&&(Ue.length=0,Ue.push(r.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Ue.push(Ie),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);let W=n.get(T[Pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,W,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ke(C){return Math.min(i.maxSamples,C.samples)}function pe(C){let T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Be(C){let T=a.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function Ee(C,T){let ae=C.colorSpace,Te=C.format,xe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||ae!==gl&&ae!==Hr&&(ft.getTransfer(ae)===vt?(Te!==Qi||xe!==ci)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",ae)),T}function We(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=R,this.getTextureUnits=ce,this.setTextureUnits=Ae,this.setTexture2D=be,this.setTexture2DArray=Ce,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=B,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=re,this.useMultisampledRTT=pe,this.dispose=K}function rE(r,e){function t(n,i=Hr){let s,a=ft.getTransfer(i);if(n===ci)return r.UNSIGNED_BYTE;if(n===Lh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Dh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gp)return r.BYTE;if(n===Vp)return r.SHORT;if(n===po)return r.UNSIGNED_SHORT;if(n===Ih)return r.INT;if(n===Ki)return r.UNSIGNED_INT;if(n===Gi)return r.FLOAT;if(n===En)return r.HALF_FLOAT;if(n===Xp)return r.ALPHA;if(n===qp)return r.RGB;if(n===Qi)return r.RGBA;if(n===Fr)return r.DEPTH_COMPONENT;if(n===Vr)return r.DEPTH_STENCIL;if(n===Nh)return r.RED;if(n===Uh)return r.RED_INTEGER;if(n===ys)return r.RG;if(n===Oh)return r.RG_INTEGER;if(n===Fh)return r.RGBA_INTEGER;if(n===ac||n===oc||n===lc||n===cc)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bh||n===kh||n===zh||n===Gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vh||n===Hh||n===Wh||n===Xh||n===qh||n===uc||n===Yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vh||n===Hh)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xh)return s.COMPRESSED_R11_EAC;if(n===qh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===uc)return s.COMPRESSED_RG11_EAC;if(n===Yh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zh||n===Jh||n===$h||n===Kh||n===Qh||n===jh||n===ef||n===tf||n===nf||n===rf||n===sf||n===af||n===of||n===lf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$h)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ef)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===af)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===of)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cf||n===uf||n===hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===cf)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===df||n===hc||n===pf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ff)return s.COMPRESSED_RED_RGTC1_EXT;if(n===df)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var sE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_m=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ll(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:sE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xm=class extends ur{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new _m,g={},v=t.getContextAttributes(),M=null,y=null,b=[],w=[],x=new Me,S=null,I=null,A=new Gn;A.viewport=new kt;let V=new Gn;V.viewport=new kt;let O=[A,V],j=new Eh,N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let be=b[se];return be===void 0&&(be=new Ka,b[se]=be),be.getTargetRaySpace()},this.getControllerGrip=function(se){let be=b[se];return be===void 0&&(be=new Ka,b[se]=be),be.getGripSpace()},this.getHand=function(se){let be=b[se];return be===void 0&&(be=new Ka,b[se]=be),be.getHandSpace()};function te(se){let be=w.indexOf(se.inputSource);if(be===-1)return;let Ce=b[be];Ce!==void 0&&(Ce.update(se.inputSource,se.frame,c||a),Ce.dispatchEvent({type:se.type,data:se.inputSource}))}function H(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let se=0;se<b.length;se++){let be=w[se];be!==null&&(w[se]=null,b[se].disconnect(be))}N=null,K=null,m.reset();for(let se in g)delete g[se];if(e.setRenderTarget(M),f=null,h=null,d=null,i=null,y=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),I!==null){let se=I.camera;se.fov=I.fov,se.zoom=I.zoom,se.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ne=null,q=null;v.depth&&(q=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=v.stencil?Vr:Fr,ne=v.stencil?ia:Ki);let z={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(z),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new hn(h.textureWidth,h.textureHeight,{format:Qi,type:ci,depthTexture:new kr(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hn(f.framebufferWidth,f.framebufferHeight,{format:Qi,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(se){for(let be=0;be<se.removed.length;be++){let Ce=se.removed[be],ne=w.indexOf(Ce);ne>=0&&(w[ne]=null,b[ne].disconnect(Ce))}for(let be=0;be<se.added.length;be++){let Ce=se.added[be],ne=w.indexOf(Ce);if(ne===-1){for(let z=0;z<b.length;z++)if(z>=w.length){w.push(Ce),ne=z;break}else if(w[z]===null){w[z]=Ce,ne=z;break}if(ne===-1)break}let q=b[ne];q&&q.connect(Ce)}}function ee(se,be){be===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(be.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;let be=se.near,Ce=se.far;m.texture!==null&&(m.depthNear>0&&(be=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),j.near=V.near=A.near=be,j.far=V.far=A.far=Ce,(N!==j.near||K!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),N=j.near,K=j.far),j.layers.mask=se.layers.mask|6,A.layers.mask=j.layers.mask&-5,V.layers.mask=j.layers.mask&-3;let ne=se.parent,q=j.cameras;ee(j,ne);for(let z=0;z<q.length;z++)ee(q[z],ne);j.projectionMatrix.copy(A.projectionMatrix),j.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&se.isPerspectiveCamera&&(I={camera:se,fov:se.fov,zoom:se.zoom}),R(se,j,ne)};function R(se,be,Ce){Ce===null?se.matrix.copy(be.matrixWorld):(se.matrix.copy(Ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(be.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(be.projectionMatrix),se.projectionMatrixInverse.copy(be.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=eh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(se){return g[se]};let ce=null;function Ae(se,be){if(u=be.getViewerPose(c||a),p=be,u!==null){let Ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ne=!1;Ce.length!==j.cameras.length&&(j.cameras.length=0,ne=!0);for(let Y=0;Y<Ce.length;Y++){let fe=Ce[Y],ue=null;if(f!==null)ue=f.getViewport(fe);else{let Z=d.getViewSubImage(h,fe);ue=Z.viewport,Y===0&&(e.setRenderTargetTextures(y,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(y))}let L=O[Y];L===void 0&&(L=new Gn,L.layers.enable(Y),L.viewport=new kt,O[Y]=L),L.matrix.fromArray(fe.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(fe.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ue.x,ue.y,ue.width,ue.height),Y===0&&(j.matrix.copy(L.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ne===!0&&j.cameras.push(L)}let q=i.enabledFeatures;if(q&&q.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Y=d.getDepthInformation(Ce[0]);Y&&Y.isValid&&Y.texture&&m.init(Y,i.renderState)}if(q&&q.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Y=0;Y<Ce.length;Y++){let fe=Ce[Y].camera;if(fe){let ue=g[fe];ue||(ue=new Ll,g[fe]=ue);let L=d.getCameraImage(fe);ue.sourceTexture=L}}}}for(let Ce=0;Ce<b.length;Ce++){let ne=w[Ce],q=b[Ce];ne!==null&&q!==void 0&&q.update(ne,be,c||a)}ce&&ce(se,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),p=null}let Oe=new Ux;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(se){ce=se},this.dispose=function(){}}},oE=new St,Xx=new je;Xx.set(-1,0,0,0,1,0,0,0,1);function lE(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,em(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===wn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===wn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(oE.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cE(r,e,t,n){let i={},s={};function a(v,M){let y=M.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,M){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(v,b);let w=e.render.frame;s[v.id]!==w&&(c(v),s[v.id]=w)}function l(v){let M=r.createBuffer(),y=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,b),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function c(v){let M=i[v.id],y=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,x=y.length;w<x;w++){let S=y[w];if(Array.isArray(S))for(let I=0,A=S.length;I<A;I++)u(S[I],w,I,b);else u(S,w,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,M,y,b){if(h(v,M,y,b)===!0){let w=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let I=0;I<x.length;I++){let A=x[I],V=_(A,!0);d(A,v.__data,S),S+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,v.__data)}}function d(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function h(v,M,y,b){let w=v.value,x=M+"_"+y;if(Array.isArray(w)){b[x]===void 0&&(b[x]=[]);let S=b[x],I=!1;for(let A=0;A<w.length;A++)f(w[A],S,A)===!0&&(I=!0);return I}return f(w,b,x)}function f(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let b=M[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){let M=v.uniforms,y=0,b=16;for(let x=0,S=M.length;x<S;x++){let I=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,V=I.length;A<V;A++){let O=I[A],j=Array.isArray(O.value)?O.value:[O.value],N=Array.isArray(M[x])||Array.isArray(O.value),K=y;for(let H=0,J=j.length;H<J;H++){let ee=j[H],R=_(ee,N),ce=y%b,Ae=ce%R.boundary,Oe=ce+Ae;y+=Ae,Oe!==0&&b-Oe<R.storage&&(y+=b-Oe),H===0&&(K=y),y+=R.storage}let te=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new te((y-K)/Float32Array.BYTES_PER_ELEMENT),O.__offset=K}}let w=y%b;return w>0&&(y+=b-w),v.__size=y,v.__cache={},this}function _(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let M=v.target;M.removeEventListener("dispose",m),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}var uE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gr=null;function hE(){return gr===null&&(gr=new wl(uE,16,16,ys,En),gr.name="DFG_LUT",gr.minFilter=jn,gr.magFilter=jn,gr.wrapS=Fi,gr.wrapT=Fi,gr.generateMipmaps=!1,gr.needsUpdate=!0),gr}var yf=class{constructor(e={}){let{canvas:t=nx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ci}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=f,m=new Set([Fh,Oh,Uh]),g=new Set([ci,Ki,po,ia,Lh,Dh]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,w=null,x=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,V=!1,O=null,j=null,N=null,K=null;this._outputColorSpace=Qn;let te=0,H=0,J=null,ee=-1,R=null,ce=new kt,Ae=new kt,Oe=null,se=new tt(0),be=0,Ce=t.width,ne=t.height,q=1,z=null,G=null,Y=new kt(0,0,Ce,ne),fe=new kt(0,0,Ce,ne),ue=!1,L=new ps,Z=new rh,X=!1,U=!1,re=new St,F=new Q,D=new kt,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},B=!1;function ie(){return J===null?q:1}let k=n;function Ue(E,$){return t.getContext(E,$)}let He,ke,pe,Be,Ee,We,C,T,ae,Te,xe,Ie,De,oe,_e,Pe,W,me,ge,Ne,we,Le,Re;try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",ve,!1),k===null){let $="webgl2";if(k=Ue($,E),k===null)throw Ue($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(E){throw t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),rt("WebGLRenderer: "+E.message),E}function Fe(){He=new M1(k),He.init(),we=new rE(k,He),ke=new h1(k,He,e,we),pe=new nE(k,He),ke.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),j=k.createFramebuffer(),N=k.createFramebuffer(),K=k.createFramebuffer(),Be=new w1(k),Ee=new Vw,We=new iE(k,He,pe,Ee,ke,we,Be),C=new S1(A),T=new AM(k),Le=new c1(k,T),ae=new b1(k,T,Be,Le),Te=new A1(k,ae,T,Le,Be),me=new E1(k,ke,We),_e=new f1(Ee),xe=new Gw(A,C,He,ke,Le,_e),Ie=new lE(A,Ee),De=new Ww,oe=new $w(He),W=new l1(A,C,pe,Te,p,l),Pe=new tE(A,Te,ke),Re=new cE(k,Be,ke,pe),ge=new u1(k,He,Be),Ne=new T1(k,He,Be),Be.programs=xe.programs,A.capabilities=ke,A.extensions=He,A.properties=Ee,A.renderLists=De,A.shadowMap=Pe,A.state=pe,A.info=Be}_!==ci&&(I=new R1(_,t.width,t.height,o,i,s));let Se=new xm(A,k);this.xr=Se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(Ce,ne,!1))},this.getSize=function(E){return E.set(Ce,ne)},this.setSize=function(E,$,de=!0){if(Se.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=E,ne=$,t.width=Math.floor(E*q),t.height=Math.floor($*q),de===!0&&(t.style.width=E+"px",t.style.height=$+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,E,$)},this.getDrawingBufferSize=function(E){return E.set(Ce*q,ne*q).floor()},this.setDrawingBufferSize=function(E,$,de){Ce=E,ne=$,q=de,t.width=Math.floor(E*de),t.height=Math.floor($*de),this.setViewport(0,0,E,$)},this.setEffects=function(E){if(_===ci){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let $=0;$<E.length;$++)if(E[$].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ce)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,$,de,le){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,$,de,le),pe.viewport(ce.copy(Y).multiplyScalar(ie()).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,$,de,le){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,$,de,le),pe.scissor(Ae.copy(fe).multiplyScalar(ie()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(E){pe.setScissorTest(ue=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){G=E},this.getClearColor=function(E){return E.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(E=!0,$=!0,de=!0){let le=0;if(E){let he=!1;if(J!==null){let Ve=J.texture.format;he=m.has(Ve)}if(he){let Ve=J.texture.type,Je=g.has(Ve),Ge=W.getClearColor(),Ye=W.getClearAlpha(),Qe=Ge.r,at=Ge.g,mt=Ge.b;Je?(v[0]=Qe,v[1]=at,v[2]=mt,v[3]=Ye,k.clearBufferuiv(k.COLOR,0,v)):(M[0]=Qe,M[1]=at,M[2]=mt,M[3]=Ye,k.clearBufferiv(k.COLOR,0,M))}else le|=k.COLOR_BUFFER_BIT}$&&(le|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&k.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),W.dispose(),De.dispose(),oe.dispose(),We.dispose(),Ee.dispose(),C.dispose(),Te.dispose(),ae.dispose(),Le.dispose(),Re.dispose(),xe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Rt),Se.removeEventListener("sessionend",bt),an.stop()};function ye(E){E.preventDefault(),Kp("WebGLRenderer: Context Lost."),V=!0}function ze(){Kp("WebGLRenderer: Context Restored."),V=!1;let E=Be.autoReset,$=Pe.enabled,de=Pe.autoUpdate,le=Pe.needsUpdate,he=Pe.type;Fe(),Be.autoReset=E,Pe.enabled=$,Pe.autoUpdate=de,Pe.needsUpdate=le,Pe.type=he}function ve(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qe(E){let $=E.target;$.removeEventListener("dispose",qe),dt($)}function dt(E){st(E),Ee.remove(E)}function st(E){let $=Ee.get(E).programs;$!==void 0&&($.forEach(function(de){xe.releaseProgram(de)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,$,de,le,he,Ve){$===null&&($=P);let Je=he.isMesh&&he.matrixWorld.determinantAffine()<0,Ge=Ri(E,$,de,le,he);pe.setMaterial(le,Je);let Ye=de.index,Qe=1;if(le.wireframe===!0){if(Ye=ae.getWireframeAttribute(de),Ye===void 0)return;Qe=2}let at=de.drawRange,mt=de.attributes.position,$e=at.start*Qe,gt=(at.start+at.count)*Qe;Ve!==null&&($e=Math.max($e,Ve.start*Qe),gt=Math.min(gt,(Ve.start+Ve.count)*Qe)),Ye!==null?($e=Math.max($e,0),gt=Math.min(gt,Ye.count)):mt!=null&&($e=Math.max($e,0),gt=Math.min(gt,mt.count));let tn=gt-$e;if(tn<0||tn===1/0)return;Le.setup(he,le,Ge,de,Ye);let Dt,It=ge;if(Ye!==null&&(Dt=T.get(Ye),It=Ne,It.setIndex(Dt)),he.isMesh)le.wireframe===!0?(pe.setLineWidth(le.wireframeLinewidth*ie()),It.setMode(k.LINES)):It.setMode(k.TRIANGLES);else if(he.isLine){let Rn=le.linewidth;Rn===void 0&&(Rn=1),pe.setLineWidth(Rn*ie()),he.isLineSegments?It.setMode(k.LINES):he.isLineLoop?It.setMode(k.LINE_LOOP):It.setMode(k.LINE_STRIP)}else he.isPoints?It.setMode(k.POINTS):he.isSprite&&It.setMode(k.TRIANGLES);if(he.isBatchedMesh)if(He.get("WEBGL_multi_draw"))It.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let Rn=he._multiDrawStarts,Ke=he._multiDrawCounts,Hn=he._multiDrawCount,Mt=Ye?T.get(Ye).bytesPerElement:1,bs=Ee.get(le).currentProgram.getUniforms();for(let Pn=0;Pn<Hn;Pn++)bs.setValue(k,"_gl_DrawID",Pn),It.render(Rn[Pn]/Mt,Ke[Pn])}else if(he.isInstancedMesh)It.renderInstances($e,tn,he.count);else if(de.isInstancedBufferGeometry){let Rn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ke=Math.min(de.instanceCount,Rn);It.renderInstances($e,tn,Ke)}else It.render($e,tn)};function Ot(E,$,de,le){O!==null&&E.isNodeMaterial&&O.setObject(le,E),X===!0&&_e.setState(E,de,!1),E.transparent===!0&&E.side===ti&&E.forceSinglePass===!1?(E.side=wn,E.needsUpdate=!0,hi(E,$,le),E.side=xs,E.needsUpdate=!0,hi(E,$,le),E.side=ti):hi(E,$,le)}this.compile=function(E,$,de=null){de===null&&(de=E),O!==null&&O.renderStart(E,$,de),w=oe.get(de),w.init($),S.push(w),de.traverseVisible(function(he){he.isLight&&he.layers.test($.layers)&&(w.pushLight(he),he.castShadow&&w.pushShadow(he))}),E!==de&&E.traverseVisible(function(he){he.isLight&&he.layers.test($.layers)&&(w.pushLight(he),he.castShadow&&w.pushShadow(he))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),U=this.localClippingEnabled,X=_e.init(this.clippingPlanes,U),X===!0&&_e.setGlobalState(this.clippingPlanes,$),O!==null&&Pe.render(w.state.shadowsArray,de,$);let le=new Set;return E.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let Ve=he.material;if(Ve)if(Array.isArray(Ve))for(let Je=0;Je<Ve.length;Je++){let Ge=Ve[Je];Ot(Ge,de,$,he),le.add(Ge)}else Ot(Ve,de,$,he),le.add(Ve)}),w=S.pop(),O!==null&&O.renderEnd(),le},this.compileAsync=function(E,$,de=null){let le=this.compile(E,$,de);return new Promise(he=>{function Ve(){if(le.forEach(function(Je){let Ye=Ee.get(Je).currentProgram;(Ye===void 0||Ye.isReady())&&le.delete(Je)}),le.size===0){he(E);return}setTimeout(Ve,10)}He.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let jt=null;function Ft(E){jt&&jt(E)}function Rt(){an.stop()}function bt(){an.start()}let an=new Ux;an.setAnimationLoop(Ft),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(E){jt=E,Se.setAnimationLoop(E),E===null?an.stop():an.start()},Se.addEventListener("sessionstart",Rt),Se.addEventListener("sessionend",bt),this.render=function(E,$){if($!==void 0&&$.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;O!==null&&O.renderStart(E,$);let de=Se.enabled===!0&&Se.isPresenting===!0,le=I!==null&&(J===null||de)&&I.begin(A,J);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera($),$=Se.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,$,J),w=oe.get(E,S.length),w.init($),w.state.textureUnits=We.getTextureUnits(),S.push(w),re.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?Z.setFromArrayCamera($):L.setFromProjectionMatrix(re,Bi,$.reversedDepth),U=this.localClippingEnabled,X=_e.init(this.clippingPlanes,U),b=De.get(E,x.length),b.init(),x.push(b),this.info.render.frame++,Se.enabled===!0&&Se.isPresenting===!0){let Je=A.xr.getDepthSensingMesh();Je!==null&&Pt(Je,$,-1/0,A.sortObjects)}Pt(E,$,0,A.sortObjects),b.finish(),O!==null&&O.updateLights(w.state.lightsArray),A.sortObjects===!0&&b.sort(z,G),B=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,B&&W.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),X===!0&&_e.beginShadows();let he=w.state.shadowsArray;if(Pe.render(he,E,$),X===!0&&_e.endShadows(),(le&&I.hasRenderPass())===!1){let Je=b.opaque,Ge=b.transmissive;if(w.setupLights(),$.isArrayCamera){let Ye=$.cameras;if(Ge.length>0)for(let Qe=0,at=Ye.length;Qe<at;Qe++){let mt=Ye[Qe];ui(Je,Ge,E,mt)}B&&W.render(E);for(let Qe=0,at=Ye.length;Qe<at;Qe++){let mt=Ye[Qe];Cn(b,E,mt,mt.viewport)}}else Ge.length>0&&ui(Je,Ge,E,$),B&&W.render(E),Cn(b,E,$)}J!==null&&H===0&&(We.updateMultisampleRenderTarget(J),We.updateRenderTargetMipmap(J)),le&&I.end(A),E.isScene===!0&&E.onAfterRender(A,E,$),Le.resetDefaultState(),ee=-1,R=null,S.pop(),S.length>0?(w=S[S.length-1],We.setTextureUnits(w.state.textureUnits),X===!0&&_e.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,O!==null&&O.renderEnd()};function Pt(E,$,de,le){if(E.visible===!1)return;if(E.layers.test($.layers)){if(E.isGroup)de=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update($);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Je=$.isArrayCamera?Z:L;if(!E.frustumCulled||E.intersectsFrustum(Je)){le&&D.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);let Ge=Te.update(E),Ye=E.material;Ye.visible&&b.push(E,Ge,Ye,de,D.z,null,$)}}else if(E.isMesh||E.isLine||E.isPoints){let Je=$.isArrayCamera?Z:L;if(!E.frustumCulled||E.intersectsFrustum(Je)){let Ge=Te.update(E),Ye=E.material;if(le&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),D.copy(E.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),D.copy(Ge.boundingSphere.center)),D.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(Ye)){let Qe=Ge.groups;for(let at=0,mt=Qe.length;at<mt;at++){let $e=Qe[at],gt=Ye[$e.materialIndex];gt&&gt.visible&&b.push(E,Ge,gt,de,D.z,$e,$)}}else Ye.visible&&b.push(E,Ge,Ye,de,D.z,null,$)}}}let Ve=E.children;for(let Je=0,Ge=Ve.length;Je<Ge;Je++)Pt(Ve[Je],$,de,le)}function Cn(E,$,de,le){let{opaque:he,transmissive:Ve,transparent:Je}=E;w.setupLightsView(de),X===!0&&_e.setGlobalState(A.clippingPlanes,de),le&&pe.viewport(ce.copy(le)),he.length>0&&qt(he,$,de),Ve.length>0&&qt(Ve,$,de),Je.length>0&&qt(Je,$,de),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ui(E,$,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[le.id]===void 0){let $e=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[le.id]=new hn(1,1,{generateMipmaps:!0,type:$e?En:ci,minFilter:Gr,samples:Math.max(4,ke.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Ve=w.state.transmissionRenderTarget[le.id],Je=le.viewport||ce;Ve.setSize(Je.z*A.transmissionResolutionScale,Je.w*A.transmissionResolutionScale);let Ge=A.getRenderTarget(),Ye=A.getActiveCubeFace(),Qe=A.getActiveMipmapLevel();A.setRenderTarget(Ve),A.getClearColor(se),be=A.getClearAlpha(),be<1&&A.setClearColor(16777215,.5),A.clear(),B&&W.render(de);let at=A.toneMapping;A.toneMapping=zi;let mt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),w.setupLightsView(le),X===!0&&_e.setGlobalState(A.clippingPlanes,le),qt(E,de,le),We.updateMultisampleRenderTarget(Ve),We.updateRenderTargetMipmap(Ve),He.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let gt=0,tn=$.length;gt<tn;gt++){let Dt=$[gt],{object:It,geometry:Rn,material:Ke,group:Hn}=Dt;if(Ke.side===ti&&It.layers.test(le.layers)){let Mt=Ke.side;Ke.side=wn,Ke.needsUpdate=!0,en(It,de,le,Rn,Ke,Hn),Ke.side=Mt,Ke.needsUpdate=!0,$e=!0}}$e===!0&&(We.updateMultisampleRenderTarget(Ve),We.updateRenderTargetMipmap(Ve))}A.setRenderTarget(Ge,Ye,Qe),A.setClearColor(se,be),mt!==void 0&&(le.viewport=mt),A.toneMapping=at}function qt(E,$,de){let le=$.isScene===!0?$.overrideMaterial:null;for(let he=0,Ve=E.length;he<Ve;he++){let Je=E[he],{object:Ge,geometry:Ye,group:Qe}=Je,at=Je.material;at.allowOverride===!0&&le!==null&&(at=le),Ge.layers.test(de.layers)&&en(Ge,$,de,Ye,at,Qe)}}function en(E,$,de,le,he,Ve){O!==null&&he.isNodeMaterial&&O.setObject(E,he),E.onBeforeRender(A,$,de,le,he,Ve),E.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),he.onBeforeRender(A,$,de,le,E,Ve),he.transparent===!0&&he.side===ti&&he.forceSinglePass===!1?(he.side=wn,he.needsUpdate=!0,A.renderBufferDirect(de,$,le,he,E,Ve),he.side=xs,he.needsUpdate=!0,A.renderBufferDirect(de,$,le,he,E,Ve),he.side=ti):A.renderBufferDirect(de,$,le,he,E,Ve),E.onAfterRender(A,$,de,le,he,Ve)}function on(E){let $=0;for(let de of E)de.texture!==null&&$++;return $}function hi(E,$,de){$.isScene!==!0&&($=P);let le=Ee.get(E),he=w.state.lights,Ve=w.state.shadowsArray,Je=he.state.version,Ge=xe.getParameters(E,he.state,Ve,$,de,w.state.lightProbeGridArray),Ye=xe.getProgramCacheKey(Ge),Qe=le.programs;le.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?$.environment:null,le.fog=$.fog;let at=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;le.envMap=C.get(E.envMap||le.environment,at),le.envMapRotation=le.environment!==null&&E.envMap===null?$.environmentRotation:E.envMapRotation,Qe===void 0&&(E.addEventListener("dispose",qe),Qe=new Map,le.programs=Qe,le.programVariants=new Map);let mt=Qe.get(Ye);if(mt!==void 0){if(le.currentProgram===mt&&le.lightsStateVersion===Je)return Yt(E,Ge),mt}else Ge.uniforms=xe.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,de,Ge),E.onBeforeCompile(Ge,A),mt=xe.acquireProgram(Ge,Ye),Qe.set(Ye,mt),le.uniforms=Ge.uniforms;let $e=le.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&($e.clippingPlanes=_e.uniform),Yt(E,Ge),le.needsLights=Mc(E),le.lightsStateVersion=Je,le.needsLights&&($e.ambientLightColor.value=he.state.ambient,$e.lightProbe.value=he.state.probe,$e.sunLights.value=he.state.sun,$e.sunLightShadows.value=he.state.sunShadow,$e.directionalLights.value=he.state.directional,$e.directionalLightShadows.value=he.state.directionalShadow,$e.spotLights.value=he.state.spot,$e.spotLightShadows.value=he.state.spotShadow,$e.rectAreaLights.value=he.state.rectArea,$e.ltc_1.value=he.state.rectAreaLTC1,$e.ltc_2.value=he.state.rectAreaLTC2,$e.pointLights.value=he.state.point,$e.pointLightShadows.value=he.state.pointShadow,$e.hemisphereLights.value=he.state.hemi,$e.sunShadowMatrix.value=he.state.sunShadowMatrix,$e.sunShadowCascade.value=he.state.sunShadowCascade,$e.directionalShadowMatrix.value=he.state.directionalShadowMatrix,$e.spotLightMatrix.value=he.state.spotLightMatrix,$e.spotLightMap.value=he.state.spotLightMap,$e.pointShadowMatrix.value=he.state.pointShadowMatrix),le.numLightProbeGrids=on(w.state.lightProbeGridArray),le.currentProgram=mt,le.uniformsList=null,mt}function sa(E,$,de,le,he){let Ve=Ee.get(E),Je=Ve.currentProgram.id+","+le+","+he,Ge=Ve.programVariants.get(Je);return Ge===void 0?(Ge=hi(E,$,de),Ve.programVariants.set(Je,Ge)):(Ve.currentProgram=Ge,Ve.uniformsList=null,Ve.outputColorSpace=le,Ve.toneMapping=he),Ge}function ln(E){if(E.uniformsList===null){let $=E.currentProgram.getUniforms();E.uniformsList=go.seqWithValue($.seq,E.uniforms)}return E.uniformsList}function Yt(E,$){let de=Ee.get(E);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function Ri(E,$,de,le,he){$.isScene!==!0&&($=P),We.resetTextureUnits();let Ve=$.fog,Je=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?$.environment:null,Ge=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ft.workingColorSpace,Ye=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Qe=C.get(le.envMap||Je,Ye),at=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,mt=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),$e=!!de.morphAttributes.position,gt=!!de.morphAttributes.normal,tn=!!de.morphAttributes.color,Dt=zi;le.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Dt=A.toneMapping);let It=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Rn=It!==void 0?It.length:0,Ke=Ee.get(le),Hn=w.state.lights;if(X===!0&&(U===!0||E!==R)){let zt=E===R&&le.id===ee;_e.setState(le,E,zt)}let Mt=!1,bs=!1;le.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==Hn.state.version||he.isBatchedMesh&&Ke.batching===!1||!he.isBatchedMesh&&Ke.batching===!0||he.isBatchedMesh&&Ke.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&Ke.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&Ke.instancing===!1||!he.isInstancedMesh&&Ke.instancing===!0||he.isSkinnedMesh&&Ke.skinning===!1||!he.isSkinnedMesh&&Ke.skinning===!0||he.isInstancedMesh&&Ke.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Ke.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&Ke.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&Ke.instancingMorph===!1&&he.morphTexture!==null||Ke.envMap!==Qe||le.fog===!0&&Ke.fog!==Ve||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==_e.numPlanes||Ke.numIntersection!==_e.numIntersection)||Ke.vertexAlphas!==at||Ke.vertexTangents!==mt||Ke.morphTargets!==$e||Ke.morphNormals!==gt||Ke.morphColors!==tn||Ke.morphTargetsCount!==Rn||Ke.numLightProbeGrids!==on(w.state.lightProbeGridArray)?Mt=!0:(Ke.outputColorSpace!==Ge||Ke.toneMapping!==Dt)&&(bs=!0):(Mt=!0,Ke.__version=le.version);let Pn=Ke.currentProgram;(Mt===!0||bs===!0)&&(Pn=bs===!0?sa(le,$,he,Ge,Dt):hi(le,$,he),O&&le.isNodeMaterial&&O.onUpdateProgram(le,Pn,Ke));let bc=!1,qr=!1,Ts=!1,yt=Pn.getUniforms(),Sn=Ke.uniforms;if(pe.useProgram(Pn.program)&&(bc=!0,qr=!0,Ts=!0),le.id!==ee&&(ee=le.id,qr=!0),bc||R!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(k,"projectionMatrix",E.projectionMatrix),yt.setValue(k,"viewMatrix",E.matrixWorldInverse);let pn=yt.map.cameraPosition;pn!==void 0&&pn.setValue(k,F.setFromMatrixPosition(E.matrixWorld)),ke.logarithmicDepthBuffer&&yt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&yt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,qr=!0,Ts=!0)}if(Ke.needsLights&&(Hn.state.sunShadowMap.length>0&&yt.setValue(k,"sunShadowMap",Hn.state.sunShadowMap,We),Hn.state.directionalShadowMap.length>0&&yt.setValue(k,"directionalShadowMap",Hn.state.directionalShadowMap,We),Hn.state.spotShadowMap.length>0&&yt.setValue(k,"spotShadowMap",Hn.state.spotShadowMap,We),Hn.state.pointShadowMap.length>0&&yt.setValue(k,"pointShadowMap",Hn.state.pointShadowMap,We)),he.isSkinnedMesh){yt.setOptional(k,he,"bindMatrix"),yt.setOptional(k,he,"bindMatrixInverse");let zt=he.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),yt.setValue(k,"boneTexture",zt.boneTexture,We))}he.isBatchedMesh&&(yt.setOptional(k,he,"batchingTexture"),yt.setValue(k,"batchingTexture",he._matricesTexture,We),yt.setOptional(k,he,"batchingIdTexture"),yt.setValue(k,"batchingIdTexture",he._indirectTexture,We),yt.setOptional(k,he,"batchingColorTexture"),he._colorsTexture!==null&&yt.setValue(k,"batchingColorTexture",he._colorsTexture,We));let Hi=de.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&me.update(he,de,Pn),(qr||Ke.receiveShadow!==he.receiveShadow)&&(Ke.receiveShadow=he.receiveShadow,yt.setValue(k,"receiveShadow",he.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&$.environment!==null&&(Sn.envMapIntensity.value=$.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=hE()),qr){if(yt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&Mo(Sn,Ts),Ve&&le.fog===!0&&Ie.refreshFogUniforms(Sn,Ve),Ie.refreshMaterialUniforms(Sn,le,q,ne,w.state.transmissionRenderTarget[E.id]),Ke.needsLights&&Ke.numLightProbeGrids>0){let zt=y,pn=0;for(let xr of w.state.lightProbeGridArray)xr.texture!==null&&(zt.textures[pn]=xr.texture,zt.min[pn]=xr.boundingBox.min,zt.max[pn]=xr.boundingBox.max,zt.resolution[pn]=xr.resolution,pn++);for(let xr in zt)zt[xr].length=pn;Sn.probesSH.value=zt.textures,Sn.probesMin.value=zt.min,Sn.probesMax.value=zt.max,Sn.probesResolution.value=zt.resolution}go.upload(k,ln(Ke),Sn,We)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(go.upload(k,ln(Ke),Sn,We),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&yt.setValue(k,"center",he.center),yt.setValue(k,"modelViewMatrix",he.modelViewMatrix),yt.setValue(k,"normalMatrix",he.normalMatrix),yt.setValue(k,"modelMatrix",he.matrixWorld),le.uniformsGroups!==void 0){let zt=le.uniformsGroups;for(let pn=0,xr=zt.length;pn<xr;pn++){let wm=zt[pn];Re.update(wm,Pn),Re.bind(wm,Pn)}}return Pn}function Mo(E,$){E.ambientLightColor.needsUpdate=$,E.lightProbe.needsUpdate=$,E.sunLights.needsUpdate=$,E.sunLightShadows.needsUpdate=$,E.directionalLights.needsUpdate=$,E.directionalLightShadows.needsUpdate=$,E.pointLights.needsUpdate=$,E.pointLightShadows.needsUpdate=$,E.spotLights.needsUpdate=$,E.spotLightShadows.needsUpdate=$,E.rectAreaLights.needsUpdate=$,E.hemisphereLights.needsUpdate=$}function Mc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(E,$,de){let le=Ee.get(E);le.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Ee.get(E.texture).__webglTexture=$,Ee.get(E.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,$){let de=Ee.get(E);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(E,$=0,de=0){J=E,te=$,H=de;let le=null,he=!1,Ve=!1;if(E){let Ge=Ee.get(E);if(Ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(k.FRAMEBUFFER,Ge.__webglFramebuffer),ce.copy(E.viewport),Ae.copy(E.scissor),Oe=E.scissorTest,pe.viewport(ce),pe.scissor(Ae),pe.setScissorTest(Oe),ee=-1;return}else if(Ge.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(Ge.__hasExternalTextures)We.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let at=E.depthTexture;if(Ge.__boundDepthTexture!==at){if(at!==null&&Ee.has(at)&&(E.width!==at.image.width||E.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}let Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ve=!0);let Qe=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qe[$])?le=Qe[$][de]:le=Qe[$],he=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?le=Ee.get(E).__webglMultisampledFramebuffer:Array.isArray(Qe)?le=Qe[de]:le=Qe,ce.copy(E.viewport),Ae.copy(E.scissor),Oe=E.scissorTest}else ce.copy(Y).multiplyScalar(q).floor(),Ae.copy(fe).multiplyScalar(q).floor(),Oe=ue;if(de!==0&&(le=j),pe.bindFramebuffer(k.FRAMEBUFFER,le)&&pe.drawBuffers(E,le),pe.viewport(ce),pe.scissor(Ae),pe.setScissorTest(Oe),he){let Ge=Ee.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ge.__webglTexture,de)}else if(Ve){let Ge=$;for(let Ye=0;Ye<E.textures.length;Ye++){let Qe=Ee.get(E.textures[Ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ye,Qe.__webglTexture,de,Ge)}}else if(E!==null&&de!==0){let Ge=Ee.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ge.__webglTexture,de)}ee=-1};function Xr(E){let $=Ee.get(E);return($.__readFormat!==E.format||$.__readType!==E.type)&&($.__readFormat=E.format,$.__readType=E.type,$.__formatReadable=ke.textureFormatReadable(E.format),$.__typeReadable=ke.textureTypeReadable(E.type)),$}this.readRenderTargetPixels=function(E,$,de,le,he,Ve,Je,Ge=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(Ye=Ye[Je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye){pe.bindFramebuffer(k.FRAMEBUFFER,Ye);try{let Qe=E.textures[Ge],at=Qe.format,mt=Qe.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge);let $e=Xr(Qe);if($e.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=E.width-le&&de>=0&&de<=E.height-he&&k.readPixels($,de,le,he,we.convert(at),we.convert(mt),Ve)}finally{let Qe=J!==null?Ee.get(J).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(E,$,de,le,he,Ve,Je,Ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(Ye=Ye[Je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye)if($>=0&&$<=E.width-le&&de>=0&&de<=E.height-he){pe.bindFramebuffer(k.FRAMEBUFFER,Ye);let Qe=E.textures[Ge],at=Qe.format,mt=Qe.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge);let $e=Xr(Qe);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,gt),k.bufferData(k.PIXEL_PACK_BUFFER,Ve.byteLength,k.STREAM_READ),k.readPixels($,de,le,he,we.convert(at),we.convert(mt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let tn=J!==null?Ee.get(J).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,tn);let Dt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await rx(k,Dt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,gt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ve),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(gt),k.deleteSync(Dt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,$=null,de=0){let le=Math.pow(2,-de),he=Math.floor(E.image.width*le),Ve=Math.floor(E.image.height*le),Je=$!==null?$.x:0,Ge=$!==null?$.y:0;We.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,de,0,0,Je,Ge,he,Ve),pe.unbindTexture()},this.copyTextureToTexture=function(E,$,de=null,le=null,he=0,Ve=0){let Je,Ge,Ye,Qe,at,mt,$e,gt,tn,Dt=E.isCompressedTexture?E.mipmaps[Ve]:E.image;if(de!==null)Je=de.max.x-de.min.x,Ge=de.max.y-de.min.y,Ye=de.isBox3?de.max.z-de.min.z:1,Qe=de.min.x,at=de.min.y,mt=de.isBox3?de.min.z:0;else{let yt=Math.pow(2,-he);Je=Math.floor(Dt.width*yt),Ge=Math.floor(Dt.height*yt),E.isDataArrayTexture?Ye=Dt.depth:E.isData3DTexture?Ye=Math.floor(Dt.depth*yt):Ye=1,Qe=0,at=0,mt=0}le!==null?($e=le.x,gt=le.y,tn=le.z):($e=0,gt=0,tn=0);let It=we.convert($.format),Rn=we.convert($.type),Ke;$.isData3DTexture?(We.setTexture3D($,0),Ke=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(We.setTexture2DArray($,0),Ke=k.TEXTURE_2D_ARRAY):(We.setTexture2D($,0),Ke=k.TEXTURE_2D),pe.activeTexture(k.TEXTURE0),pe.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),pe.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),pe.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);let Hn=pe.getParameter(k.UNPACK_ROW_LENGTH),Mt=pe.getParameter(k.UNPACK_IMAGE_HEIGHT),bs=pe.getParameter(k.UNPACK_SKIP_PIXELS),Pn=pe.getParameter(k.UNPACK_SKIP_ROWS),bc=pe.getParameter(k.UNPACK_SKIP_IMAGES);pe.pixelStorei(k.UNPACK_ROW_LENGTH,Dt.width),pe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt.height),pe.pixelStorei(k.UNPACK_SKIP_PIXELS,Qe),pe.pixelStorei(k.UNPACK_SKIP_ROWS,at),pe.pixelStorei(k.UNPACK_SKIP_IMAGES,mt);let qr=E.isDataArrayTexture||E.isData3DTexture,Ts=$.isDataArrayTexture||$.isData3DTexture;if(E.isDepthTexture){let yt=Ee.get(E),Sn=Ee.get($),Hi=Ee.get(yt.__renderTarget),zt=Ee.get(Sn.__renderTarget);pe.bindFramebuffer(k.READ_FRAMEBUFFER,Hi.__webglFramebuffer),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let pn=0;pn<Ye;pn++)qr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.get(E).__webglTexture,he,mt+pn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.get($).__webglTexture,Ve,tn+pn)),k.blitFramebuffer(Qe,at,Qe+Je,at+Ge,$e,gt,$e+Je,gt+Ge,k.DEPTH_BUFFER_BIT,k.NEAREST);pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(he!==0||E.isRenderTargetTexture||Ee.has(E)){let yt=Ee.get(E),Sn=Ee.get($);pe.bindFramebuffer(k.READ_FRAMEBUFFER,N),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,K);for(let Hi=0;Hi<Ye;Hi++)qr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yt.__webglTexture,he,mt+Hi):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yt.__webglTexture,he),Ts?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Sn.__webglTexture,Ve,tn+Hi):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Sn.__webglTexture,Ve),he!==0?k.blitFramebuffer(Qe,at,Qe+Je,at+Ge,$e,gt,$e+Je,gt+Ge,k.COLOR_BUFFER_BIT,k.NEAREST):Ts?k.copyTexSubImage3D(Ke,Ve,$e,gt,tn+Hi,Qe,at,Je,Ge):k.copyTexSubImage2D(Ke,Ve,$e,gt,Qe,at,Je,Ge);pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ts?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(Ke,Ve,$e,gt,tn,Je,Ge,Ye,It,Rn,Dt.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(Ke,Ve,$e,gt,tn,Je,Ge,Ye,It,Dt.data):k.texSubImage3D(Ke,Ve,$e,gt,tn,Je,Ge,Ye,It,Rn,Dt):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ve,$e,gt,Je,Ge,It,Rn,Dt.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ve,$e,gt,Dt.width,Dt.height,It,Dt.data):k.texSubImage2D(k.TEXTURE_2D,Ve,$e,gt,Je,Ge,It,Rn,Dt);pe.pixelStorei(k.UNPACK_ROW_LENGTH,Hn),pe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt),pe.pixelStorei(k.UNPACK_SKIP_PIXELS,bs),pe.pixelStorei(k.UNPACK_SKIP_ROWS,Pn),pe.pixelStorei(k.UNPACK_SKIP_IMAGES,bc),Ve===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&k.generateMipmap(Ke),pe.unbindTexture()},this.initRenderTarget=function(E){Ee.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){te=0,H=0,J=null,pe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var gc=Qn,_c=class r extends Qs{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){let s=this,a=new Hl(s.manager);a.setPriority(s.priority),a.setCache(s.cache),a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){let t=this;function n(q,z){if(q.nodeType!==1)return;q.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let G=b(q),Y=!1,fe=null;switch(q.nodeName){case"svg":z=_(q,z);break;case"style":s(q);break;case"g":z=_(q,z);break;case"path":z=_(q,z),q.hasAttribute("d")&&(fe=i(q));break;case"rect":z=_(q,z),fe=l(q);break;case"polygon":z=_(q,z),fe=c(q);break;case"polyline":z=_(q,z),fe=u(q);break;case"circle":z=_(q,z),fe=d(q);break;case"ellipse":z=_(q,z),fe=h(q);break;case"line":z=_(q,z),fe=f(q);break;case"defs":Y=!0;break;case"use":z=_(q,z);let Z=(q.getAttributeNS("http://www.w3.org/1999/xlink","href")||q.getAttribute("href")||"").substring(1),X=q.viewportElement.getElementById(Z);X?n(X,z):console.warn("SVGLoader: 'use node' references non-existent node id: "+Z);break;default:}if(fe){z.fill!==void 0&&z.fill!=="none"&&!z.fill.startsWith("url")&&fe.color.setStyle(z.fill,gc),S(fe,be),K.push(fe);let L=Object.assign({},z);L.strokeWidth=z.strokeWidth*j(be),fe.userData={node:q,style:L,transform:be.clone(),gradients:H}}let ue=q.childNodes;for(let L=0;L<ue.length;L++){let Z=ue[L];Y&&Z.nodeName!=="style"&&Z.nodeName!=="defs"||n(Z,z)}G&&(J.pop(),J.length>0?be.copy(J[J.length-1]):be.identity())}function i(q){let z=new $i,G=new Me,Y=new Me,fe=new Me,ue=!1,L=q.getAttribute("d");if(L===""||L==="none")return null;let Z=L.match(/[a-df-z][^a-df-z]*/ig);for(let X=0,U=Z.length;X<U;X++){let re=Z[X],F=re.charAt(0),D=re.slice(1).trim();ue===!0&&(F!=="M"&&F!=="m"&&F!=="Z"&&F!=="z"&&z.moveTo(fe.x,fe.y),ue=!1);let P;switch(F){case"M":P=g(D);for(let B=0,ie=P.length;B<ie;B+=2)G.x=P[B+0],G.y=P[B+1],Y.x=G.x,Y.y=G.y,B===0?z.moveTo(G.x,G.y):z.lineTo(G.x,G.y),B===0&&fe.copy(G);break;case"H":P=g(D);for(let B=0,ie=P.length;B<ie;B++)G.x=P[B],Y.x=G.x,Y.y=G.y,z.lineTo(G.x,G.y);break;case"V":P=g(D);for(let B=0,ie=P.length;B<ie;B++)G.y=P[B],Y.x=G.x,Y.y=G.y,z.lineTo(G.x,G.y);break;case"L":P=g(D);for(let B=0,ie=P.length;B<ie;B+=2)G.x=P[B+0],G.y=P[B+1],Y.x=G.x,Y.y=G.y,z.lineTo(G.x,G.y);break;case"C":P=g(D);for(let B=0,ie=P.length;B<ie;B+=6)z.bezierCurveTo(P[B+0],P[B+1],P[B+2],P[B+3],P[B+4],P[B+5]),Y.x=P[B+2],Y.y=P[B+3],G.x=P[B+4],G.y=P[B+5];break;case"S":P=g(D);for(let B=0,ie=P.length;B<ie;B+=4)z.bezierCurveTo(m(G.x,Y.x),m(G.y,Y.y),P[B+0],P[B+1],P[B+2],P[B+3]),Y.x=P[B+0],Y.y=P[B+1],G.x=P[B+2],G.y=P[B+3];break;case"Q":P=g(D);for(let B=0,ie=P.length;B<ie;B+=4)z.quadraticCurveTo(P[B+0],P[B+1],P[B+2],P[B+3]),Y.x=P[B+0],Y.y=P[B+1],G.x=P[B+2],G.y=P[B+3];break;case"T":P=g(D);for(let B=0,ie=P.length;B<ie;B+=2){let k=m(G.x,Y.x),Ue=m(G.y,Y.y);z.quadraticCurveTo(k,Ue,P[B+0],P[B+1]),Y.x=k,Y.y=Ue,G.x=P[B+0],G.y=P[B+1]}break;case"A":P=g(D,[3,4],7);for(let B=0,ie=P.length;B<ie;B+=7){if(P[B+5]==G.x&&P[B+6]==G.y)continue;let k=G.clone();G.x=P[B+5],G.y=P[B+6],Y.x=G.x,Y.y=G.y,a(z,P[B],P[B+1],P[B+2],P[B+3],P[B+4],k,G)}break;case"m":P=g(D);for(let B=0,ie=P.length;B<ie;B+=2)G.x+=P[B+0],G.y+=P[B+1],Y.x=G.x,Y.y=G.y,B===0?z.moveTo(G.x,G.y):z.lineTo(G.x,G.y),B===0&&fe.copy(G);break;case"h":P=g(D);for(let B=0,ie=P.length;B<ie;B++)G.x+=P[B],Y.x=G.x,Y.y=G.y,z.lineTo(G.x,G.y);break;case"v":P=g(D);for(let B=0,ie=P.length;B<ie;B++)G.y+=P[B],Y.x=G.x,Y.y=G.y,z.lineTo(G.x,G.y);break;case"l":P=g(D);for(let B=0,ie=P.length;B<ie;B+=2)G.x+=P[B+0],G.y+=P[B+1],Y.x=G.x,Y.y=G.y,z.lineTo(G.x,G.y);break;case"c":P=g(D);for(let B=0,ie=P.length;B<ie;B+=6)z.bezierCurveTo(G.x+P[B+0],G.y+P[B+1],G.x+P[B+2],G.y+P[B+3],G.x+P[B+4],G.y+P[B+5]),Y.x=G.x+P[B+2],Y.y=G.y+P[B+3],G.x+=P[B+4],G.y+=P[B+5];break;case"s":P=g(D);for(let B=0,ie=P.length;B<ie;B+=4)z.bezierCurveTo(m(G.x,Y.x),m(G.y,Y.y),G.x+P[B+0],G.y+P[B+1],G.x+P[B+2],G.y+P[B+3]),Y.x=G.x+P[B+0],Y.y=G.y+P[B+1],G.x+=P[B+2],G.y+=P[B+3];break;case"q":P=g(D);for(let B=0,ie=P.length;B<ie;B+=4)z.quadraticCurveTo(G.x+P[B+0],G.y+P[B+1],G.x+P[B+2],G.y+P[B+3]),Y.x=G.x+P[B+0],Y.y=G.y+P[B+1],G.x+=P[B+2],G.y+=P[B+3];break;case"t":P=g(D);for(let B=0,ie=P.length;B<ie;B+=2){let k=m(G.x,Y.x),Ue=m(G.y,Y.y);z.quadraticCurveTo(k,Ue,G.x+P[B+0],G.y+P[B+1]),Y.x=k,Y.y=Ue,G.x=G.x+P[B+0],G.y=G.y+P[B+1]}break;case"a":P=g(D,[3,4],7);for(let B=0,ie=P.length;B<ie;B+=7){if(P[B+5]==0&&P[B+6]==0)continue;let k=G.clone();G.x+=P[B+5],G.y+=P[B+6],Y.x=G.x,Y.y=G.y,a(z,P[B],P[B+1],P[B+2],P[B+3],P[B+4],k,G)}break;case"Z":case"z":z.currentPath.autoClose=!0,z.currentPath.curves.length>0&&(G.copy(fe),z.currentPath.currentPoint.copy(G),ue=!0);break;default:console.warn(re)}}return z}function s(q){if(!(!q.sheet||!q.sheet.cssRules||!q.sheet.cssRules.length))for(let z=0;z<q.sheet.cssRules.length;z++){let G=q.sheet.cssRules[z];if(G.type!==1)continue;let Y=G.selectorText.split(/,/gm).filter(Boolean).map(ue=>ue.trim()),fe={};for(let ue=0;ue<G.style.length;ue++){let L=G.style[ue];fe[L]=G.style.getPropertyValue(L)}for(let ue=0;ue<Y.length;ue++)te[Y[ue]]=Object.assign(te[Y[ue]]||{},fe)}}function a(q,z,G,Y,fe,ue,L,Z){if(z==0||G==0){q.lineTo(Z.x,Z.y);return}Y=Y*Math.PI/180,z=Math.abs(z),G=Math.abs(G);let X=(L.x-Z.x)/2,U=(L.y-Z.y)/2,re=Math.cos(Y)*X+Math.sin(Y)*U,F=-Math.sin(Y)*X+Math.cos(Y)*U,D=z*z,P=G*G,B=re*re,ie=F*F,k=B/D+ie/P;if(k>1){let ae=Math.sqrt(k);z=ae*z,G=ae*G,D=z*z,P=G*G}let Ue=D*ie+P*B,He=(D*P-Ue)/Ue,ke=Math.sqrt(Math.max(0,He));fe===ue&&(ke=-ke);let pe=ke*z*F/G,Be=-ke*G*re/z,Ee=Math.cos(Y)*pe-Math.sin(Y)*Be+(L.x+Z.x)/2,We=Math.sin(Y)*pe+Math.cos(Y)*Be+(L.y+Z.y)/2,C=o(1,0,(re-pe)/z,(F-Be)/G),T=o((re-pe)/z,(F-Be)/G,(-re-pe)/z,(-F-Be)/G)%(Math.PI*2);q.currentPath.absellipse(Ee,We,z,G,C,C+T,ue===0,Y)}function o(q,z,G,Y){let fe=q*G+z*Y,ue=Math.sqrt(q*q+z*z)*Math.sqrt(G*G+Y*Y),L=Math.acos(Math.max(-1,Math.min(1,fe/ue)));return q*Y-z*G<0&&(L=-L),L}function l(q){let z=y(q.getAttribute("x")||0),G=y(q.getAttribute("y")||0),Y=y(q.getAttribute("rx")||q.getAttribute("ry")||0),fe=y(q.getAttribute("ry")||q.getAttribute("rx")||0),ue=y(q.getAttribute("width")),L=y(q.getAttribute("height")),Z=1-.551915024494,X=new $i;return X.moveTo(z+Y,G),X.lineTo(z+ue-Y,G),(Y!==0||fe!==0)&&X.bezierCurveTo(z+ue-Y*Z,G,z+ue,G+fe*Z,z+ue,G+fe),X.lineTo(z+ue,G+L-fe),(Y!==0||fe!==0)&&X.bezierCurveTo(z+ue,G+L-fe*Z,z+ue-Y*Z,G+L,z+ue-Y,G+L),X.lineTo(z+Y,G+L),(Y!==0||fe!==0)&&X.bezierCurveTo(z+Y*Z,G+L,z,G+L-fe*Z,z,G+L-fe),X.lineTo(z,G+fe),(Y!==0||fe!==0)&&X.bezierCurveTo(z,G+fe*Z,z+Y*Z,G,z+Y,G),X}function c(q){function z(ue,L,Z){let X=y(L),U=y(Z);fe===0?Y.moveTo(X,U):Y.lineTo(X,U),fe++}let G=/([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)(?:,|\s)([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)/g,Y=new $i,fe=0;return q.getAttribute("points").replace(G,z),Y.currentPath.autoClose=!0,Y}function u(q){function z(ue,L,Z){let X=y(L),U=y(Z);fe===0?Y.moveTo(X,U):Y.lineTo(X,U),fe++}let G=/([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)(?:,|\s)([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)/g,Y=new $i,fe=0;return q.getAttribute("points").replace(G,z),Y.currentPath.autoClose=!1,Y}function d(q){let z=y(q.getAttribute("cx")||0),G=y(q.getAttribute("cy")||0),Y=y(q.getAttribute("r")||0),fe=new mr;fe.absarc(z,G,Y,0,Math.PI*2);let ue=new $i;return ue.subPaths.push(fe),ue}function h(q){let z=y(q.getAttribute("cx")||0),G=y(q.getAttribute("cy")||0),Y=y(q.getAttribute("rx")||0),fe=y(q.getAttribute("ry")||0),ue=new mr;ue.absellipse(z,G,Y,fe,0,Math.PI*2);let L=new $i;return L.subPaths.push(ue),L}function f(q){let z=y(q.getAttribute("x1")||0),G=y(q.getAttribute("y1")||0),Y=y(q.getAttribute("x2")||0),fe=y(q.getAttribute("y2")||0),ue=new $i;return ue.moveTo(z,G),ue.lineTo(Y,fe),ue.currentPath.autoClose=!1,ue}function p(q){let z="http://www.w3.org/1999/xlink",G=q.querySelectorAll("linearGradient, radialGradient"),Y=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],fe={};for(let L of G){let Z=L.getAttribute("id");if(!Z)continue;let X={type:L.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},U=L.getAttributeNS(z,"href")||L.getAttribute("href")||"";U.startsWith("#")&&(X.href=U.substring(1));for(let F of Y)L.hasAttribute(F)&&(X.attrs[F]=L.getAttribute(F));let re=L.querySelectorAll("stop");if(re.length>0){X.stops=[];for(let F of re){let D=F.getAttribute("stop-color");!D&&F.style&&(D=F.style["stop-color"]),D||(D="#000");let P=F.getAttribute("stop-opacity");(P===null||P==="")&&F.style&&(P=F.style["stop-opacity"]),P=P===null||P===""||P===void 0?1:Math.max(0,Math.min(1,parseFloat(P)));let B=Math.max(0,Math.min(1,parseFloat(F.getAttribute("offset")||"0")));X.stops.push({offset:B,color:D,opacity:P})}}fe[Z]=X}function ue(L,Z){let X=fe[L];if(!X||Z.has(L))return X;if(Z.add(L),X.href&&fe[X.href]){let U=ue(X.href,Z);if(U){X.stops||(X.stops=U.stops);for(let re in U.attrs)re in X.attrs||(X.attrs[re]=U.attrs[re])}}return X}for(let L in fe)ue(L,new Set);for(let L in fe){let F=function(D){return typeof D!="string"?0:D.endsWith("%")?parseFloat(D)/100:y(D)},Z=fe[L],X=Z.attrs,U=X.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",re={type:Z.type,gradientUnits:U,spreadMethod:X.spreadMethod==="reflect"||X.spreadMethod==="repeat"?X.spreadMethod:"pad",gradientTransform:null,stops:(Z.stops||[]).slice().sort((D,P)=>D.offset-P.offset)};if(X.gradientTransform&&(re.gradientTransform=new je,x(X.gradientTransform,re.gradientTransform)),Z.type==="linearGradient")re.x1=X.x1!==void 0?F(X.x1):0,re.y1=X.y1!==void 0?F(X.y1):0,re.x2=X.x2!==void 0?F(X.x2):U==="objectBoundingBox"?1:0,re.y2=X.y2!==void 0?F(X.y2):0;else{let D=U==="objectBoundingBox"?.5:0,P=U==="objectBoundingBox"?.5:0;re.cx=X.cx!==void 0?F(X.cx):D,re.cy=X.cy!==void 0?F(X.cy):D,re.r=X.r!==void 0?F(X.r):P,re.fx=X.fx!==void 0?F(X.fx):re.cx,re.fy=X.fy!==void 0?F(X.fy):re.cy}H[L]=re}}function _(q,z){z=Object.assign({},z);let G={};if(q.hasAttribute("class")){let L=q.getAttribute("class").split(/\s/).filter(Boolean).map(Z=>Z.trim());for(let Z=0;Z<L.length;Z++)G=Object.assign(G,te["."+L[Z]])}q.hasAttribute("id")&&(G=Object.assign(G,te["#"+q.getAttribute("id")]));function Y(L,Z,X){X===void 0&&(X=function(re){return re}),q.hasAttribute(L)&&(z[Z]=X(q.getAttribute(L))),G[L]&&(z[Z]=X(G[L])),q.style&&q.style[L]!==""&&(z[Z]=X(q.style[L]))}function fe(L){return Math.max(0,Math.min(1,y(L)))}function ue(L){return Math.max(0,y(L))}return Y("fill","fill"),Y("fill-opacity","fillOpacity",fe),Y("fill-rule","fillRule"),Y("opacity","opacity",fe),Y("stroke","stroke"),Y("stroke-opacity","strokeOpacity",fe),Y("stroke-width","strokeWidth",ue),Y("stroke-linejoin","strokeLineJoin"),Y("stroke-linecap","strokeLineCap"),Y("stroke-miterlimit","strokeMiterLimit",ue),Y("visibility","visibility"),z}function m(q,z){return q-(z-q)}function g(q,z,G){if(typeof q!="string")throw new TypeError("Invalid input: "+typeof q);let Y={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},fe=0,ue=1,L=2,Z=3,X=fe,U=!0,re="",F="",D=[];function P(Ue,He,ke){let pe=new SyntaxError('Unexpected character "'+Ue+'" at index '+He+".");throw pe.partial=ke,pe}function B(){re!==""&&(F===""?D.push(Number(re)):D.push(Number(re)*Math.pow(10,Number(F)))),re="",F=""}let ie,k=q.length;for(let Ue=0;Ue<k;Ue++){if(ie=q[Ue],Array.isArray(z)&&z.includes(D.length%G)&&Y.FLAGS.test(ie)){X=ue,re=ie,B();continue}if(X===fe){if(Y.WHITESPACE.test(ie))continue;if(Y.DIGIT.test(ie)||Y.SIGN.test(ie)){X=ue,re=ie;continue}if(Y.POINT.test(ie)){X=L,re=ie;continue}Y.COMMA.test(ie)&&(U&&P(ie,Ue,D),U=!0)}if(X===ue){if(Y.DIGIT.test(ie)){re+=ie;continue}if(Y.POINT.test(ie)){re+=ie,X=L;continue}if(Y.EXP.test(ie)){X=Z;continue}Y.SIGN.test(ie)&&re.length===1&&Y.SIGN.test(re[0])&&P(ie,Ue,D)}if(X===L){if(Y.DIGIT.test(ie)){re+=ie;continue}if(Y.EXP.test(ie)){X=Z;continue}Y.POINT.test(ie)&&re[re.length-1]==="."&&P(ie,Ue,D)}if(X===Z){if(Y.DIGIT.test(ie)){F+=ie;continue}if(Y.SIGN.test(ie)){if(F===""){F+=ie;continue}F.length===1&&Y.SIGN.test(F)&&P(ie,Ue,D)}}Y.WHITESPACE.test(ie)?(B(),X=fe,U=!1):Y.COMMA.test(ie)?(B(),X=fe,U=!0):Y.SIGN.test(ie)?(B(),X=ue,re=ie):Y.POINT.test(ie)?(B(),X=L,re=ie):P(ie,Ue,D)}return B(),D}let v=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(q){let z="px";if(typeof q=="string"||q instanceof String)for(let Y=0,fe=v.length;Y<fe;Y++){let ue=v[Y];if(q.endsWith(ue)){z=ue,q=q.substring(0,q.length-ue.length);break}}let G;return z==="px"&&t.defaultUnit!=="px"?G=M.in[t.defaultUnit]/t.defaultDPI:(G=M[z][t.defaultUnit],G<0&&(G=M[z].in*t.defaultDPI)),G*parseFloat(q)}function b(q){if(!(q.hasAttribute("transform")||q.nodeName==="use"&&(q.hasAttribute("x")||q.hasAttribute("y"))))return null;let z=w(q);return J.length>0&&z.premultiply(J[J.length-1]),be.copy(z),J.push(z),z}function w(q){let z=new je;if(q.nodeName==="use"&&(q.hasAttribute("x")||q.hasAttribute("y"))){let G=y(q.getAttribute("x")||0),Y=y(q.getAttribute("y")||0);z.makeTranslation(G,Y)}return q.hasAttribute("transform")&&x(q.getAttribute("transform"),z),z}function x(q,z){let G=ee,Y=q.split(")");for(let fe=Y.length-1;fe>=0;fe--){let ue=Y[fe].trim();if(ue==="")continue;let L=ue.indexOf("("),Z=ue.length;if(L>0&&L<Z){let X=ue.slice(0,L),U=g(ue.slice(L+1));switch(G.identity(),X){case"translate":if(U.length>=1){let re=U[0],F=0;U.length>=2&&(F=U[1]),G.makeTranslation(re,F)}break;case"rotate":if(U.length>=1){let re=0,F=0,D=0;re=U[0]*Math.PI/180,U.length>=3&&(F=U[1],D=U[2]),R.makeTranslation(-F,-D),ce.makeRotation(re),Ae.multiplyMatrices(ce,R),R.makeTranslation(F,D),G.multiplyMatrices(R,Ae)}break;case"scale":if(U.length>=1){let re=U[0],F=re;U.length>=2&&(F=U[1]),G.makeScale(re,F)}break;case"skewX":U.length===1&&G.set(1,Math.tan(U[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":U.length===1&&G.set(1,0,0,Math.tan(U[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":U.length===6&&G.set(U[0],U[2],U[4],U[1],U[3],U[5],0,0,1);break}z.premultiply(G)}}return z}function S(q,z){function G(L){se.set(L.x,L.y,1).applyMatrix3(z),L.set(se.x,se.y)}function Y(L){let Z=L.xRadius,X=L.yRadius,U=Math.cos(L.aRotation),re=Math.sin(L.aRotation),F=new Q(Z*U,Z*re,0),D=new Q(-X*re,X*U,0),P=F.applyMatrix3(z),B=D.applyMatrix3(z),ie=ee.set(P.x,B.x,0,P.y,B.y,0,0,0,1),k=R.copy(ie).invert(),ke=ce.copy(k).transpose().multiply(k).elements,pe=N(ke[0],ke[1],ke[4]),Be=Math.sqrt(pe.rt1),Ee=Math.sqrt(pe.rt2);if(L.xRadius=1/Be,L.yRadius=1/Ee,L.aRotation=Math.atan2(pe.sn,pe.cs),!((L.aEndAngle-L.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let C=R.set(Be,0,0,0,Ee,0,0,0,1),T=ce.set(pe.cs,pe.sn,0,-pe.sn,pe.cs,0,0,0,1),ae=C.multiply(T).multiply(ie),Te=xe=>{let{x:Ie,y:De}=new Q(Math.cos(xe),Math.sin(xe),0).applyMatrix3(ae);return Math.atan2(De,Ie)};L.aStartAngle=Te(L.aStartAngle),L.aEndAngle=Te(L.aEndAngle),I(z)&&(L.aClockwise=!L.aClockwise)}}function fe(L){let Z=V(z),X=O(z);L.xRadius*=Z,L.yRadius*=X;let U=Z>Number.EPSILON?Math.atan2(z.elements[1],z.elements[0]):Math.atan2(-z.elements[3],z.elements[4]);L.aRotation+=U,I(z)&&(L.aStartAngle*=-1,L.aEndAngle*=-1,L.aClockwise=!L.aClockwise)}let ue=q.subPaths;for(let L=0,Z=ue.length;L<Z;L++){let U=ue[L].curves;for(let re=0;re<U.length;re++){let F=U[re];F.isLineCurve?(G(F.v1),G(F.v2)):F.isCubicBezierCurve?(G(F.v0),G(F.v1),G(F.v2),G(F.v3)):F.isQuadraticBezierCurve?(G(F.v0),G(F.v1),G(F.v2)):F.isEllipseCurve&&(Oe.set(F.aX,F.aY),G(Oe),F.aX=Oe.x,F.aY=Oe.y,A(z)?Y(F):fe(F))}}}function I(q){let z=q.elements;return z[0]*z[4]-z[1]*z[3]<0}function A(q){let z=q.elements,G=z[0]*z[3]+z[1]*z[4];if(G===0)return!1;let Y=V(q),fe=O(q);return Math.abs(G/(Y*fe))>Number.EPSILON}function V(q){let z=q.elements;return Math.sqrt(z[0]*z[0]+z[1]*z[1])}function O(q){let z=q.elements;return Math.sqrt(z[3]*z[3]+z[4]*z[4])}function j(q){let z=q.elements,G=z[0]*z[4]-z[1]*z[3];return Math.sqrt(Math.abs(G))}function N(q,z,G){let Y,fe,ue,L,Z,X=q+G,U=q-G,re=Math.sqrt(U*U+4*z*z);return X>0?(Y=.5*(X+re),Z=1/Y,fe=q*Z*G-z*Z*z):X<0?fe=.5*(X-re):(Y=.5*re,fe=-.5*re),U>0?ue=U+re:ue=U-re,Math.abs(ue)>2*Math.abs(z)?(Z=-2*z/ue,L=1/Math.sqrt(1+Z*Z),ue=Z*L):Math.abs(z)===0?(ue=1,L=0):(Z=-.5*ue/z,ue=1/Math.sqrt(1+Z*Z),L=Z*ue),U>0&&(Z=ue,ue=-L,L=Z),{rt1:Y,rt2:fe,cs:ue,sn:L}}let K=[],te={},H={},J=[],ee=new je,R=new je,ce=new je,Ae=new je,Oe=new Me,se=new Q,be=new je,Ce=new DOMParser().parseFromString(e,"image/svg+xml");return p(Ce),n(Ce.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:K,gradients:H,xml:Ce.documentElement}}static createFillMaterial(e){let t=e.userData.style;if(t.fill===void 0||t.fill==="none")return null;let n=e.color,i=null,s=qx.exec(t.fill);if(s){let o=e.userData.gradients&&e.userData.gradients[s[1]];i=dE(o,e)}let a=new Mi({opacity:t.fillOpacity*(t.opacity||1),transparent:!0,side:ti,depthWrite:!1});return i!==null?a.map=i:a.color=n,a}static createStrokeMaterial(e){let t=e.userData.style;return t.stroke===void 0||t.stroke==="none"?null:(qx.test(t.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new Mi({color:new tt().setStyle(t.stroke,gc),opacity:t.strokeOpacity*(t.opacity||1),transparent:!0,side:ti,depthWrite:!1}))}static createShapes(e){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),e.toShapes()}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){let s=[],a=[],o=[];if(r.pointsToStrokeWithBuffers(e,t,n,i,s,a,o)===0)return null;let l=new Kt;return l.setAttribute("position",new xt(s,3)),l.setAttribute("normal",new xt(a,3)),l.setAttribute("uv",new xt(o,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,a,o,l){let c=new Me,u=new Me,d=new Me,h=new Me,f=new Me,p=new Me,_=new Me,m=new Me,g=new Me,v=new Me,M=new Me,y=new Me,b=new Me,w=new Me,x=new Me,S=new Me,I=new Me;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=ue(e);let A=e.length;if(A<2)return 0;let V=e[0].equals(e[A-1]),O,j=e[0],N,K=t.strokeWidth/2,te=1/(A-1),H=0,J,ee,R,ce,Ae=!1,Oe=0,se=l*3,be=l*2;Ce(e[0],e[1],c).multiplyScalar(K),m.copy(e[0]).sub(c),g.copy(e[0]).add(c),v.copy(m),M.copy(g);for(let L=1;L<A;L++){O=e[L],L===A-1?V?N=e[1]:N=void 0:N=e[L+1];let Z=c;if(Ce(j,O,Z),d.copy(Z).multiplyScalar(K),y.copy(O).sub(d),b.copy(O).add(d),J=H+te,ee=!1,N!==void 0){Ce(O,N,u),d.copy(u).multiplyScalar(K),w.copy(O).sub(d),x.copy(O).add(d),R=!0,d.subVectors(N,j),Z.dot(d)<0&&(R=!1),L===1&&(Ae=R),d.subVectors(N,O),d.normalize();let X=Math.abs(Z.dot(d));if(X>Number.EPSILON){let U=K/X;d.multiplyScalar(-U),h.subVectors(O,j),f.copy(h).setLength(U).add(d),S.copy(f).negate();let re=f.length(),F=h.length();h.divideScalar(F),p.subVectors(N,O);let D=p.length();if(p.divideScalar(D),h.dot(S)<F&&p.dot(S)<D&&(ee=!0),I.copy(f).add(O),S.add(O),ee){let P=R?g:m,B=(I.x-P.x)*(S.y-P.y)-(I.y-P.y)*(S.x-P.x);(R&&B<0||!R&&B>0)&&S.copy(P)}switch(ce=!1,ee?R?(x.copy(S),b.copy(S)):(w.copy(S),y.copy(S)):z(),t.strokeLineJoin){case"bevel":G(R,ee,J);break;case"round":Y(R,ee),R?q(O,y,w,J,0):q(O,x,b,J,1);break;default:let P=K*t.strokeMiterLimit/re;if(P<1)if(t.strokeLineJoin!=="miter-clip"){G(R,ee,J);break}else Y(R,ee),R?(p.subVectors(I,y).multiplyScalar(P).add(y),_.subVectors(I,w).multiplyScalar(P).add(w),ne(y,J,0),ne(p,J,0),ne(O,J,.5),ne(O,J,.5),ne(p,J,0),ne(_,J,0),ne(O,J,.5),ne(_,J,0),ne(w,J,0)):(p.subVectors(I,b).multiplyScalar(P).add(b),_.subVectors(I,x).multiplyScalar(P).add(x),ne(b,J,1),ne(p,J,1),ne(O,J,.5),ne(O,J,.5),ne(p,J,1),ne(_,J,1),ne(O,J,.5),ne(_,J,1),ne(x,J,1));else ee?(R?(ne(g,H,1),ne(m,H,0),ne(I,J,0),ne(g,H,1),ne(I,J,0),ne(S,J,1)):(ne(g,H,1),ne(m,H,0),ne(I,J,1),ne(m,H,0),ne(S,J,0),ne(I,J,1)),R?w.copy(I):x.copy(I)):R?(ne(y,J,0),ne(I,J,0),ne(O,J,.5),ne(O,J,.5),ne(I,J,0),ne(w,J,0)):(ne(b,J,1),ne(I,J,1),ne(O,J,.5),ne(O,J,.5),ne(I,J,1),ne(x,J,1)),ce=!0;break}}else z()}else z();!V&&L===A-1&&fe(e[0],v,M,R,!0,H),H=J,j=O,m.copy(w),g.copy(x)}if(!V)fe(O,y,b,R,!1,J);else if(ee&&s){let L=I,Z=S;Ae!==R&&(L=S,Z=I),R?(ce||Ae)&&(Z.toArray(s,0),Z.toArray(s,9),ce&&L.toArray(s,3)):(ce||!Ae)&&(Z.toArray(s,3),Z.toArray(s,9),ce&&L.toArray(s,0))}if(s){let L=[new Me,new Me,new Me],Z=l*3;for(let X=Z;X<se;X+=9)L[0].set(s[X],s[X+1]),L[1].set(s[X+3],s[X+4]),L[2].set(s[X+6],s[X+7]),cr.area(L)<0&&(s[X+3]=L[0].x,s[X+4]=L[0].y)}return Oe;function Ce(L,Z,X){return X.subVectors(Z,L),X.set(-X.y,X.x).normalize()}function ne(L,Z,X){s&&(s[se]=L.x,s[se+1]=L.y,s[se+2]=0,a&&(a[se]=0,a[se+1]=0,a[se+2]=1),se+=3,o&&(o[be]=Z,o[be+1]=X,be+=2)),Oe+=3}function q(L,Z,X,U,re){c.copy(Z).sub(L).normalize(),u.copy(X).sub(L).normalize();let F=Math.PI,D=c.dot(u);Math.abs(D)<1&&(F=Math.abs(Math.acos(D))),F/=n,d.copy(Z);for(let P=0,B=n-1;P<B;P++)h.copy(d).rotateAround(L,F),ne(d,U,re),ne(h,U,re),ne(L,U,.5),d.copy(h);ne(d,U,re),ne(X,U,re),ne(L,U,.5)}function z(){ne(g,H,1),ne(m,H,0),ne(y,J,0),ne(g,H,1),ne(y,J,0),ne(b,J,1)}function G(L,Z,X){Z?L?(ne(g,H,1),ne(m,H,0),ne(y,J,0),ne(g,H,1),ne(y,J,0),ne(S,J,1),ne(y,X,0),ne(w,X,0),ne(S,X,.5)):(ne(g,H,1),ne(m,H,0),ne(b,J,1),ne(m,H,0),ne(S,J,0),ne(b,J,1),ne(b,X,1),ne(S,X,0),ne(x,X,1)):L?(ne(y,X,0),ne(w,X,0),ne(O,X,.5)):(ne(b,X,1),ne(x,X,0),ne(O,X,.5))}function Y(L,Z){Z&&(L?(ne(g,H,1),ne(m,H,0),ne(y,J,0),ne(g,H,1),ne(y,J,0),ne(S,J,1),ne(y,H,0),ne(O,J,.5),ne(S,J,1),ne(O,J,.5),ne(w,H,0),ne(S,J,1)):(ne(g,H,1),ne(m,H,0),ne(b,J,1),ne(m,H,0),ne(S,J,0),ne(b,J,1),ne(b,H,1),ne(S,J,0),ne(O,J,.5),ne(O,J,.5),ne(S,J,0),ne(x,H,1)))}function fe(L,Z,X,U,re,F){switch(t.strokeLineCap){case"round":re?q(L,X,Z,F,.5):q(L,Z,X,F,.5);break;case"square":if(re)c.subVectors(Z,L),u.set(c.y,-c.x),d.addVectors(c,u).add(L),h.subVectors(u,c).add(L),U?(d.toArray(s,3),h.toArray(s,0),h.toArray(s,9)):(d.toArray(s,3),o[7]===1?h.toArray(s,9):d.toArray(s,9),h.toArray(s,0));else{c.subVectors(X,L),u.set(c.y,-c.x),d.addVectors(c,u).add(L),h.subVectors(u,c).add(L);let D=s.length;U?(d.toArray(s,D-3),h.toArray(s,D-6),h.toArray(s,D-12)):(h.toArray(s,D-6),d.toArray(s,D-3),h.toArray(s,D-12))}break;default:break}}function ue(L){let Z=!1;for(let U=1,re=L.length-1;U<re;U++)if(L[U].distanceTo(L[U+1])<i){Z=!0;break}if(!Z)return L;let X=[];X.push(L[0]);for(let U=1,re=L.length-1;U<re;U++)L[U].distanceTo(L[U+1])>=i&&X.push(L[U]);return X.push(L[L.length-1]),X}}},qx=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function dE(r,e,t=256){if(!r||!Array.isArray(r.stops)||r.stops.length===0)return null;let n=e.userData.transform,i=r.gradientUnits==="objectBoundingBox",s=null;if(i&&(s=pE(e,n),s===null))return null;function a(d,h,f){f.set(d,h,1),r.gradientTransform&&f.applyMatrix3(r.gradientTransform),i&&f.set(s.minX+f.x*s.width,s.minY+f.y*s.height,1),n&&f.applyMatrix3(n)}let o=document.createElement("canvas"),l;if(r.type==="linearGradient"){o.width=t,o.height=1;let d=o.getContext("2d"),h=d.createLinearGradient(0,0,t,0);Yx(h,r.stops),d.fillStyle=h,d.fillRect(0,0,t,1);let f=new Q,p=new Q;a(r.x1,r.y1,f),a(r.x2,r.y2,p);let _=p.x-f.x,m=p.y-f.y,g=_*_+m*m||1e-20,v=_/g,M=m/g,y=-(v*f.x+M*f.y);l=new je().set(v,M,y,0,0,.5,0,0,1)}else{let d=r.cx,h=r.cy,f=r.fx,p=r.fy,_=r.r;if(r.gradientTransform){let S=new Q;S.set(d,h,1).applyMatrix3(r.gradientTransform),d=S.x,h=S.y,S.set(f,p,1).applyMatrix3(r.gradientTransform),f=S.x,p=S.y}if(i&&(d=s.minX+d*s.width,h=s.minY+h*s.height,f=s.minX+f*s.width,p=s.minY+p*s.height,_=_*Math.sqrt((s.width*s.width+s.height*s.height)/2)),_<=0)return null;o.width=t,o.height=t;let m=o.getContext("2d"),g=d-_,v=h-_,M=2*_,y=t/M;m.setTransform(y,0,0,y,-g*y,-v*y);let b=m.createRadialGradient(f,p,0,d,h,_);Yx(b,r.stops),m.fillStyle=b,m.fillRect(g,v,M,M);let w=n?n.clone().invert():new je;l=new je().set(1/M,0,-g/M,0,1/M,-v/M,0,0,1).multiply(w)}let c=new Pl(o);c.colorSpace=gc,c.flipY=!1,c.matrixAutoUpdate=!1,c.matrix=l;let u=r.spreadMethod==="reflect"?Ya:r.spreadMethod==="repeat"?qa:Fi;return c.wrapS=u,c.wrapT=u,c}function pE(r,e){let t=e?e.clone().invert():null,n=new Me,i=new co;for(let s of r.subPaths)for(let a of s.getPoints())n.copy(a),t&&n.applyMatrix3(t),i.expandByPoint(n);return i.isEmpty()?null:{minX:i.min.x,minY:i.min.y,width:i.max.x-i.min.x,height:i.max.y-i.min.y}}function Yx(r,e){let t=new tt;for(let n of e){let i=n.color;if(n.opacity<1){t.setStyle(n.color,gc);let s=/rgb\(([^)]+)\)/.exec(t.getStyle(gc));s&&(i=`rgba(${s[1]},${n.opacity})`)}r.addColorStop(Math.max(0,Math.min(1,n.offset)),i)}}var xo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mE=new js(-1,1,1,-1,0,1),ym=class extends Kt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},gE=new ym,vs=class{constructor(e){this._mesh=new Ut(gE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Mf=class extends Ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wr.clone(e.uniforms),this.material=new vn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xc=class extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},bf=class extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Tf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mf(xo),this.copyPass.material.blending=zr,this.timer=new Jl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xc!==void 0&&(a instanceof xc?n=!0:a instanceof bf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wf=class extends Ei{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new tt}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Zx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var yo=class r extends Ei{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(s,a,{type:En,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new hn(s,a,{type:En,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new hn(s,a,{type:En,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}let o=Zx;this.highPassUniforms=Wr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Me(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wr.clone(xo.uniforms),this.blendMaterial=new vn({uniforms:this.copyUniforms,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,premultipliedAlpha:!0,blending:ea,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new tt,this._oldClearAlpha=1,this._basic=new Mi,this._fsQuad=new vs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),s.push(c)}return new vn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new vn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};yo.BlurDirectionX=new Me(1,0);yo.BlurDirectionY=new Me(0,1);var yc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ef=class extends Ei{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wr.clone(yc.uniforms),this.material=new ao({name:yc.name,uniforms:this.uniforms,vertexShader:yc.vertexShader,fragmentShader:yc.fragmentShader}),this._fsQuad=new vs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vm=1448215,Vi=9414811,Ai=13219583;var vc=(r,e,t)=>Math.min(t,Math.max(e,r));var _E=r=>{let e=r>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)},xE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 362"><path d="M60 0H290Q350 0 350 54L275 141V76H77V141H233L172 218H62Q0 218 0 158V60Q0 0 60 0Z" fill="#8FA89B"/><path d="M350 58L353 62V160L191 358H163V281Z" fill="#C9B6FF"/></svg>';function Jx({reduced:r,mobile:e}){let t=document.getElementById("gl"),n={camZ:0,dolly:0,intro:1,grow:1,fov:55,bloom:.38,portal:1,vel:0},i;try{i=new yf({canvas:t,antialias:!e,powerPreference:"high-performance"})}catch{return t.style.display="none",null}i.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),i.setClearColor(vm,1),i.toneMapping=zi;let s=new Ml;s.fog=new Sl(vm,e?.026:.021);let a=new Gn(55,1,.1,400),o=new Ut(new ro(300,16,12),new Mi({color:vm,side:wn,fog:!1,depthWrite:!1}));o.renderOrder=-10,s.add(o),s.add(new Wl(14674403,1711900,.55));let l=new Zl(16777215,1.5);l.position.set(-6,12,6),s.add(l);let c=new Yl(Ai,260,60,2);s.add(c);let u=new _c().parse(xE);function d(F=70,D=95){let P=new li,B=new li;B.position.set(-178,181,0),B.scale.y=-1,P.add(B);let ie={};return u.paths.forEach((k,Ue)=>{let He=Ue===1,ke=He?new Ti({color:Ai,emissive:Ai,emissiveIntensity:1,roughness:.35,metalness:.1}):new Ti({color:Vi,emissive:Vi,emissiveIntensity:.16,roughness:.38,metalness:.3});_c.createShapes(k).forEach(Be=>{let Ee=new Gl(Be,{depth:He?D:F,bevelEnabled:!0,bevelThickness:5,bevelSize:4,bevelOffset:-4,bevelSegments:3,curveSegments:28});Ee.translate(0,0,-(He?D:F)/2);let We=new Ut(Ee,ke);B.add(We),ie[He?"leg":"body"]=We})}),P.userData=ie,P}let h=[],f=_E(42),p=e?150:300,_=780,m=new pr(1,1,1),g=new Al(m,new Ti({color:16777215,roughness:.55,metalness:.25}),p),v=new St,M=new ki,y=new Q,b=new Q,w=new tt;for(let F=0;F<p;F++){let D=f()<.5?-1:1,P=D*(11+f()*34),B=12-f()*_,ie=.8+f()*2.6,k=2+Math.pow(f(),1.6)*30;b.set(P,-9+k/2,B),y.set(ie,k,ie+f()*2),v.compose(b,M,y),g.setMatrixAt(F,v),h.push([P,B,ie,k,y.z]),w.setHex(f()<.08?Ai:Vi).multiplyScalar(.2+f()*.3),g.setColorAt(F,w)}s.add(g);let x=1;function S(F){for(let D=0;D<p;D++){let[P,B,ie,k,Ue]=h[D],He=vc(Math.abs(B)/_*.5+Math.abs(P)/60*.3,0,.8),ke=vc((F*1.8-He)/1,0,1),pe=1-Math.pow(1-ke,3),Be=Math.max(.001,k*pe);b.set(P,-9+Be/2,B),y.set(ie,Be,Ue),v.compose(b,M,y),g.setMatrixAt(D,v)}g.instanceMatrix.needsUpdate=!0,x=F}let I=new $l(900,150,Vi,Vi);I.position.set(0,-9,-380),I.material.transparent=!0,I.material.opacity=.13,I.material.depthWrite=!1,s.add(I);let A=e?700:1600,V=new Float32Array(A*3);for(let F=0;F<A;F++)V[F*3]=(f()-.5)*90,V[F*3+1]=(f()-.5)*46,V[F*3+2]=14-f()*_;let O=new Kt;O.setAttribute("position",new Si(V,3));let j=new Cl(O,new eo({color:Vi,size:.16,transparent:!0,opacity:.75,depthWrite:!1}));s.add(j);let N=d();s.add(N);let K=new li;s.add(K);let te=[];[5,8.5,12.5,17].forEach((F,D)=>{let P=new Ut(new pr(2.4,1,2.4),new Ti({color:Vi,roughness:.35,metalness:.4}));P.userData.h=F,P.position.x=D*3.6,K.add(P);let B=new Ut(new io(.95,1),new Ti({color:Ai,emissive:Ai,emissiveIntensity:1}));K.add(B),te.push({col:P,cap:B,h:F})});let H=new li;s.add(H);let J=new Ut(new io(2.6,2),new Ti({color:Vi,roughness:.3,metalness:.45,flatShading:!0}));H.add(J);let ee=[];for(let F=0;F<4;F++){let D=new Ut(new ro(.95,24,24),new Ti({color:Ai,emissive:Ai,emissiveIntensity:.9}));H.add(D),ee.push(D)}let R=new Kt().setFromPoints(new Array(8).fill(0).map(()=>new Q)),ce=new ja(R,new Js({color:Ai,transparent:!0,opacity:.55}));H.add(ce);let Ae=new Ut(new so(7.5,.04,8,160),new Mi({color:Vi,transparent:!0,opacity:.45}));Ae.rotation.x=1.25,H.add(Ae);let Oe=[],se=-168,be=20;for(let F=0;F<4;F++){let D=new li;D.position.z=se-F*be;let P=new Ti({color:Vi,emissive:Ai,emissiveIntensity:0,roughness:.4,metalness:.5}),B=22,ie=13,k=.5;[[0,ie/2,B,k],[0,-ie/2,B,k],[-B/2,0,k,ie],[B/2,0,k,ie]].forEach(([Ue,He,ke,pe])=>{let Be=new Ut(new pr(ke,pe,k),P);Be.position.set(Ue,He,0),D.add(Be)}),s.add(D),Oe.push({g:D,mat:P})}let Ce=d(90,120);s.add(Ce);let ne=new Ut(new Ks(1,60),new Mi({color:Ai,transparent:!0,opacity:0,blending:ea,depthWrite:!1,side:ti}));s.add(ne);let q=new li;s.add(q);for(let F=0;F<5;F++){let D=new Ut(new so(9-F*1.3,.18+F*.02,12,120),new Ti({color:F%2?Vi:Ai,emissive:F%2?Vi:Ai,emissiveIntensity:F%2?.5:1.4}));D.position.z=-F*3,q.add(D)}let z=1.6,G=30;function Y(){let F=z>1.15,D=F?Math.min(11,G*.24):0,P=F?0:5.2,B=F?1:.62;N.position.set(D*1,F?.3:7.2,-24),N.userData.sc=.031*B*(F?1:1.2),N.scale.setScalar(N.userData.sc*Math.max(.001,n.intro)),N.userData.base=N.position.clone(),N.traverse(ie=>{ie.material&&(ie.material.transparent=!F,ie.material.opacity=F?1:.42)}),K.position.set(F?4:-4.5,F?-3:-8,-62),K.scale.setScalar(F?1:.6),te.forEach(({col:ie,cap:k,h:Ue},He)=>{ie.scale.y=Ue,ie.position.y=Ue/2,k.position.set(He*3.6,Ue+1.6,0)}),H.position.set(F?9:0,F?5.5:9,-122),H.scale.setScalar(F?1:.7),Ce.position.set(F?11:0,F?1:6,-318),Ce.scale.setScalar(.085*(F?1:.6)),q.position.set(F?11:0,F?1.5:6,-716),q.scale.setScalar(F?1:.7)}let fe=null,ue=null;!e&&!/nobloom/.test(location.search)&&(fe=new Tf(i),fe.addPass(new wf(s,a)),ue=new yo(new Me(innerWidth,innerHeight),.38,.5,.9),fe.addPass(ue),fe.addPass(new Ef));function L(){let F=innerWidth,D=innerHeight;i.setSize(F,D,!1),fe&&fe.setSize(F,D),z=F/D,a.aspect=z,a.updateProjectionMatrix(),G=52*Math.tan(a.fov*Math.PI/360)*z,Y()}addEventListener("resize",L),L();let Z={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",F=>{Z.x=(F.clientX/innerWidth-.5)*2,Z.y=(F.clientY/innerHeight-.5)*2});let X=0,U=performance.now();function re(F){let D=Math.min(.05,(F-U)/1e3);U=F;let P=F/1e3;X=n.camZ,Z.sx+=(Z.x-Z.sx)*(1-Math.exp(-D*4)),Z.sy+=(Z.y-Z.sy)*(1-Math.exp(-D*4));let B=r?0:1;a.position.set(Z.sx*1.1+Math.sin(P*.27)*.35*B,-Z.sy*.7+Math.cos(P*.21)*.25*B,X+n.dolly),Math.abs(a.fov-n.fov)>.01&&(a.fov=n.fov,a.updateProjectionMatrix()),ue&&(ue.strength=n.bloom),n.grow!==x&&S(n.grow);let ie=vc((-X-262)/56,0,1),k=Math.sin(ie*Math.PI)*.1;a.rotation.set(k-Z.sy*.03,-Z.sx*.045,0),o.position.copy(a.position),c.position.set(a.position.x+3,a.position.y+4,a.position.z-6),r||(N.scale.setScalar(N.userData.sc*Math.max(.001,n.intro)),N.rotation.y=Math.sin(P*.35)*.5+Z.sx*.25+(1-n.intro)*Math.PI*3,N.rotation.x=Math.sin(P*.27)*.08-Z.sy*.12,N.position.y=N.userData.base.y+Math.sin(P*.7)*.35,H.rotation.y=P*.06,ee.forEach((pe,Be)=>{let Ee=P*(.35+Be*.07)+Be*1.57;pe.position.set(Math.cos(Ee)*(6+Be*.5),Math.sin(Ee*1.3)*2.5,Math.sin(Ee)*(6+Be*.5))}),J.rotation.set(P*.2,P*.3,0));let Ue=R.attributes.position;ee.forEach((pe,Be)=>{Ue.setXYZ(Be*2,0,0,0),Ue.setXYZ(Be*2+1,pe.position.x,pe.position.y,pe.position.z)}),Ue.needsUpdate=!0;let He=vc(1-Math.abs(X- -50)/46,0,1);te.forEach(({col:pe,cap:Be,h:Ee},We)=>{let C=vc(He*1.5-We*.12,0,1),T=Math.max(.05,Ee*C);pe.scale.y=T,pe.position.y=T/2,Be.position.y=T+1.6,Be.rotation.y=P*.8,Be.scale.setScalar(.2+C*.8)}),Oe.forEach((pe,Be)=>{let Ee=X<pe.g.position.z+6?1:0;pe.mat.emissiveIntensity+=((Ee?1.5:0)-pe.mat.emissiveIntensity)*(1-Math.exp(-D*6))});let ke=Ce.userData.leg;ke&&ke.position.set(ie*40,-ie*55,ie*10),ne.position.set(Ce.position.x+4+ie*9,Ce.position.y+22+ie*12,Ce.position.z),ne.rotation.z=-.55,ne.scale.x=2+ie*5,ne.material.opacity=.02+ie*.2,Ce.rotation.y=Math.sin(P*.3)*.35-.2+Z.sx*.2,q.children.forEach((pe,Be)=>{pe.position.z=-Be*3*(1+(1-n.portal)*2.4),pe.scale.setScalar(.35+.65*n.portal),pe.rotation.z=P*(.15+Be*.05)*(Be%2?-1:1),pe.material.emissiveIntensity=(Be%2?.5:1.4)*(.85+Math.sin(P*1.2+Be)*.15)}),fe?fe.render():i.render(s,a),requestAnimationFrame(re)}return requestAnimationFrame(re),{state:n}}et.registerPlugin(it,os,Ra);et.config({nullTargetWarn:!1});var Pf=document.documentElement;Pf.classList.add("js");var Xt=matchMedia("(prefers-reduced-motion: reduce)").matches,Qx=matchMedia("(max-width: 760px)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),yE=matchMedia("(pointer:fine)").matches,Et=(r,e=document)=>e.querySelector(r),An=(r,e=document)=>[...e.querySelectorAll(r)],vE=(r,e,t)=>Math.min(t,Math.max(e,r)),Ss=r=>r.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Cf=null;try{Cf=Jx({reduced:Xt,mobile:Qx})}catch(r){console.warn("3D world failed, content still works",r)}var Ci=Cf?Cf.state:{camZ:0,dolly:0,intro:1,grow:1,fov:55,bloom:.38,portal:1};Xt||(Ci.intro=0,Ci.grow=0,Ci.dolly=26,Ci.portal=0);var jx=[{k:"khaled",n:"Khaled Gomaa",role:"product \xB7 marketplaces",cv:`CTPO, 4Sale
Ex-CTO, elmenus`,sum:"CTPO at 4Sale. 16 years building marketplaces, ad tech, legal tech and e-commerce.",facts:`Cairo
German University in Cairo, computer science
English, Arabic`,tl:[["2024 \u2013","CTPO, 4Sale","Leading the shift from a classifieds site to a transaction-based business."],["2024 \u2013","Consultant and acting CTPO, Cartona","Egypt\u2019s B2B marketplace for retailers and suppliers. Product and technology lead."],["founder","Co-founder, DRP9 Tech","Parent of DRP9 (creator marketplace) and La7ma (butcher marketplace)."],["2021 \u2013 24","CTO, elmenus","Led engineering at Egypt\u2019s food discovery and delivery platform."],["2018 \u2013 20","CTO, CONNY (Berlin)","Built a low-code legal platform that changed German law; Disrupt Berlin 2019."],["2016 \u2013 18","Engineering Manager, AppLift","Managed Datalift360, an ad platform aggregating 200bn records a month."],["2007 \u2013 16","Co-founder: Mash, Naqeshny, Elves, Speakol","Mash (startup builder); Naqeshny (100k+ users); Elves (AI concierge)."]]},{k:"kareem",n:"Kareem Zaher",role:"engineering leadership",cv:`Ex-CTO, Octane
Imolty.ai, Uniek.ai`,sum:"Engineering leader and tech entrepreneur. 12+ years, four startups built.",facts:`Lisbon \xB7 Amsterdam
Loughborough University, British University in Egypt
English, Arabic, Dutch (elementary)`,tl:[["2026 \u2013","Co-founder, Imolty.ai and Uniek.ai","An AI product engine for startups, and an AI concierge for rental properties, live in Spain and Portugal."],["2025 \u2013","Engineering Advisor, UpHill","Led the team and built hands-on Europe\u2019s first national-scale medical triage agent (30k+ calls a day)."],["2024 \u2013 25","CTO, Octane","Chief technology officer."],["earlier","Technical consultant, Triple.blue","Led the team and built hands-on the AI agent for homeowners association meetings. Now part of Aareon."],["earlier","Director of Engineering Europe, BetterUp","Launched the GDPR-compliant EU cluster, led extraction from the monolith and introduced the internal developer platform."],["earlier","Engineering Manager, Trips, Booking.com","Led three teams building the connected trip: flights, taxis, car rental and attractions."],["earlier","Engineering Manager, Brickyard","Dutch mobility software: license-plate camera, scan-car and enforcement-app systems used by municipalities."]]},{k:"sawaf",n:"Mohamed El Sawaf",role:"brand \xB7 growth",cv:`Co-founder, DRP9
Co-founder, Rise Personal`,sum:"Co-founder. 13 years in marketing and business development, building people-centric brands.",facts:`Dubai \xB7 Egypt
Marketing, brand strategy, business development`,tl:[["2026 \u2013","Co-founder, DRP9","The creator marketplace for fashion and prints, built with Khaled Gomaa."],["2022 \u2013","Co-founder, Rise Personal","Personal-branding consultancy that helps people and companies find their brand voice and grow sustainably."],["2015 \u2013","Marketing Consultant, Bnsights","Dubai innovation-management, foresight and government-excellence consultancy with its own software."],["2012 \u2013 14","Sales Engineer, Mobica","Interior and exterior workspace solutions, Egypt."]]}],SE=Et("#fgrid");SE.innerHTML=jx.map((r,e)=>{let[t,n]=r.n.split(/ (.+)/);return`<button class="fcard rv" data-i="${e}" aria-haspopup="dialog"><div class="ph"><img src="img/${r.k}.webp" alt="${Ss(r.n)}" loading="lazy"></div><h3>${Ss(t)}<br>${Ss(n)}</h3><span class="role">${Ss(r.role)}</span><span class="cv">${Ss(r.cv).replace(`
`,"<br>")}</span><span class="more">Full profile <span class="slash" aria-hidden="true"></span></span></button>`}).join("");var Ms=!Xt&&it.isTouch===0?os.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.15,effects:!0}):null,So=Et("#nav"),bm=An(".rv").filter(r=>!r.closest(".hero")&&!r.matches("h2")),Tm=An(".hero .rv");Xt||(et.set(bm,{opacity:0,y:40}),et.set(Tm,{opacity:0,y:34}),et.set(So,{yPercent:-120}));var Sc=Et("#loader"),ME=Et("#ldn"),bE=Et("#ldbar"),Rf={v:0},ey=()=>{ME.textContent=Math.round(Rf.v),bE.style.transform=`scaleX(${Rf.v/100})`};Xt||et.to(Rf,{v:88,duration:1.5,ease:"power2.out",onUpdate:ey});var TE=Promise.all([document.fonts&&document.fonts.ready,new Promise(r=>document.readyState==="complete"?r():addEventListener("load",r,{once:!0}))]),wE=new Promise(r=>setTimeout(r,Xt?0:1500)),Af=et.timeline({paused:!0,defaults:{ease:"none"}}),Sm=null,vo=null;function $x(){let r=Et("#smooth-content").getBoundingClientRect().top,e=it.maxScroll(window),t=[];if(An("[data-z]").forEach(n=>{let[i,s]=n.dataset.z.split(",").map(Number),a=n.id==="how"&&vo&&vo.spacer?vo.spacer:n,o=a.getBoundingClientRect(),l=o.top-r,c=l+o.height,u=l,d=c-innerHeight;d<=u+1?t.push({s:Math.max(0,(u+d)/2),z:(i+s)/2}):t.push({s:u,z:i},{s:d,z:s})}),t.sort((n,i)=>n.s-i.s),!!t.length){t[0].s>0&&t.unshift({s:0,z:t[0].z}),t[t.length-1].s<e&&t.push({s:e,z:t[t.length-1].z}),Sm&&Sm.kill(),Af.clear(),Af.set(Ci,{camZ:t[0].z},0);for(let n=1;n<t.length;n++){let i=t[n].s-t[n-1].s;i>.5&&Af.to(Ci,{camZ:t[n].z,duration:i},t[n-1].s)}Sm=it.create({animation:Af,start:0,end:e,scrub:Xt?!0:1.1})}}function EE(){et.to("#prog",{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.2}});let r=et.to(So,{yPercent:-110,duration:.45,ease:"power3.inOut",paused:!0});it.create({start:0,end:"max",onUpdate:h=>{So.classList.toggle("solid",h.scroll()>40),h.scroll()>260&&h.direction===1?r.play():(h.direction===-1||h.scroll()<=260)&&r.reverse()}});let e=[["top","Start"],["who","Who we are"],["ecosystem","Ecosystem"],["how","How we build"],["idea","The idea"],["work","Work"],["partners","Partners"],["what","What we do"],["scale","Scale"],["people","Founders"],["brief","Start a project"],["faq","Questions"],["contact","Contact"]],t=Et("#dots");t.innerHTML=e.map(([h,f])=>`<a href="#${h}" data-id="${h}" aria-label="${f}"><span>${f}</span></a>`).join("");let n=h=>{An(".dots a").forEach(f=>f.classList.toggle("on",f.dataset.id===h)),An(".top ul a").forEach(f=>f.classList.toggle("on",f.getAttribute("href")==="#"+h))};e.forEach(([h])=>{let f=document.getElementById(h);f&&it.create({trigger:f,start:"top 55%",end:"bottom 55%",onToggle:p=>{p.isActive&&n(h)}})}),Xt||(An("h2").forEach(h=>Ra.create(h,{type:"lines",mask:"lines",autoSplit:!0,onSplit:f=>et.from(f.lines,{yPercent:118,duration:1.15,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:h,start:"top 88%",once:!0}})})),An(".eyebrow").forEach(h=>et.from(h,{opacity:0,x:-24,duration:.9,ease:"expo.out",scrollTrigger:{trigger:h,start:"top 92%",once:!0}})),it.batch(bm,{start:"top 90%",once:!0,onEnter:h=>et.to(h,{opacity:1,y:0,duration:1.1,ease:"expo.out",stagger:.09,overwrite:"auto"})})),An("[data-count]").forEach(h=>{let f=+h.dataset.count,p=h.dataset.suffix||"",_={v:0};if(Xt){h.textContent=f+p;return}h.textContent="0"+p,et.to(_,{v:f,duration:1.8,ease:"power3.out",onUpdate:()=>{h.textContent=Math.round(_.v)+p},scrollTrigger:{trigger:h,start:"top 92%",once:!0}})});let i=An("#letters .L"),s=h=>i.forEach((f,p)=>f.classList.toggle("on",p<=h)),a=et.timeline({defaults:{ease:"none"},scrollTrigger:{id:"how",trigger:"#how",start:"top top",end:()=>"+="+Math.round(innerHeight*(Qx?2.4:3)),pin:!0,scrub:.7,anticipatePin:1,invalidateOnRefresh:!0}});vo=a.scrollTrigger,a.fromTo("#rail i",{width:"0%"},{width:"100%",duration:4},0),i.forEach((h,f)=>{Xt||(a.fromTo(h,{opacity:.38,y:34,scale:.96},{opacity:1,y:0,scale:1,duration:.6,ease:"power2.out"},f),a.fromTo(Et(".glyph",h),{rotation:-7,scale:.84,transformOrigin:"50% 80%"},{rotation:0,scale:1,duration:.7,ease:"back.out(2.2)"},f)),a.add(()=>s(f),f+.001)}),s(0),Xt||(An(".shot").forEach(h=>{et.fromTo(h,{clipPath:"inset(10% 8% 10% 8% round 14px)"},{clipPath:"inset(0% 0% 0% 0% round 14px)",duration:1.3,ease:"expo.out",scrollTrigger:{trigger:h,start:"top 92%",once:!0}}),et.fromTo(Et("img",h),{scale:1.1,yPercent:-2},{scale:1,yPercent:0,ease:"none",scrollTrigger:{trigger:h,start:"top bottom",end:"bottom top",scrub:!0}})}),An(".frame img").forEach(h=>et.fromTo(h,{scale:1.16},{scale:1,ease:"none",scrollTrigger:{trigger:h,start:"top bottom",end:"center center",scrub:!0}})),An(".big").forEach(h=>et.fromTo(h,{letterSpacing:".06em",opacity:0},{letterSpacing:"-.04em",opacity:1,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:h,start:"top 90%",once:!0}})),An(".lt").forEach((h,f)=>et.from(h,{scale:.8,opacity:0,duration:.8,ease:"back.out(1.6)",delay:f%9*.04,scrollTrigger:{trigger:h,start:"top 94%",once:!0}})));let o=Et(".mq-track");if(o){let h=et.to(o,{xPercent:-50,duration:Xt?0:38,ease:"none",repeat:-1,paused:Xt});it.create({start:0,end:"max",onUpdate:f=>{let p=Math.min(8,Math.abs(f.getVelocity())/420);et.to(h,{timeScale:(1+p)*(f.direction||1),duration:.25,overwrite:!0})}}),it.addEventListener("scrollEnd",()=>et.to(h,{timeScale:1,duration:1.2,ease:"power2.out"}))}let l=Et(".big-cta");if(l&&!Xt){let h=Ra.create(l,{type:"chars"});et.from(h.chars,{yPercent:110,rotate:9,opacity:0,duration:1.2,ease:"expo.out",stagger:.045,scrollTrigger:{trigger:l,start:"top 85%",once:!0}}),h.chars.forEach(f=>{f.addEventListener("pointerenter",()=>et.fromTo(f,{y:0},{y:-26,duration:.35,ease:"power2.out",yoyo:!0,repeat:1,overwrite:"auto"}))})}if(Xt?Ci.portal=1:et.to(Ci,{portal:1,duration:2.6,ease:"expo.out",scrollTrigger:{trigger:"#contact",start:"top 85%",toggleActions:"play none none reverse"}}),!Xt&&Cf){let h=et.quickTo(Ci,"fov",{duration:.7,ease:"power3.out"}),f=et.quickTo(Ci,"bloom",{duration:.7,ease:"power3.out"});it.create({start:0,end:"max",onUpdate:p=>{let _=vE(Math.abs(p.getVelocity())/240,0,1);h(55+_*13),f(.38+_*.5)}}),it.addEventListener("scrollEnd",()=>{h(55),f(.38)})}let c=h=>{let f=document.getElementById(h);if(!f)return;let p=h==="top"?0:h==="how"&&vo?vo.start:Ms?Ms.offset(f,"top top"):f.getBoundingClientRect().top+scrollY;Ms?Ms.scrollTo(p,!0):window.scrollTo({top:p,behavior:Xt?"auto":"smooth"})};document.addEventListener("click",h=>{let f=h.target.closest('a[href^="#"]');!f||f.getAttribute("href")==="#"||(h.preventDefault(),c(f.getAttribute("href").slice(1)))});let u,d=()=>{clearTimeout(u),u=setTimeout($x,60)};if(it.addEventListener("refresh",d),$x(),window.ResizeObserver){let h=!0;new ResizeObserver(()=>{if(h){h=!1;return}clearTimeout(window.__rt),window.__rt=setTimeout(()=>it.refresh(),250)}).observe(Et("#smooth-content"))}addEventListener("load",()=>it.refresh())}var Mm=[];function AE(){if(Xt)return;Mm=Ra.create(".hero h1 .ln",{type:"chars"}).chars,et.set(Mm,{yPercent:118,rotate:7,transformOrigin:"0% 100%"})}function Kx(){Pf.classList.add("ready");let r=()=>{Sc.remove(),it.refresh()};if(Xt){Sc.remove();return}et.timeline({defaults:{ease:"expo.out"},onComplete:r}).to(".ld-in",{opacity:0,y:-24,duration:.5,ease:"power2.in"},0).to(Sc,{clipPath:"inset(0 0 100% 0)",duration:1.15,ease:"expo.inOut"},.35).to(Mm,{yPercent:0,rotate:0,duration:1.3,stagger:.035},.85).to(Tm,{opacity:1,y:0,duration:1.1,stagger:.1},1).to(So,{yPercent:0,duration:1.1},1.2).to(Ci,{intro:1,dolly:0,duration:2.8},.35).to(Ci,{grow:1,duration:3.2,ease:"power3.out"},.35).fromTo(Ci,{fov:88},{fov:55,duration:2.4,ease:"expo.out"},.35)}TE.then(()=>{try{AE(),EE()}catch(r){console.warn("setup failed, showing static content",r),et.set([...bm,...Tm],{opacity:1,y:0,clearProps:"all"}),et.set(So,{yPercent:0})}return wE}).then(()=>{if(Xt){Kx();return}et.to(Rf,{v:100,duration:.45,ease:"power1.inOut",onUpdate:ey,onComplete:Kx})}).catch(()=>{Pf.classList.add("ready"),Sc.remove()});setTimeout(()=>{document.getElementById("loader")&&(Pf.classList.add("ready"),et.set([".rv",So],{opacity:1,y:0,yPercent:0}),Sc.remove())},9e3);var ji=Et("#bio"),CE=Et("#fgrid");CE.addEventListener("click",r=>{let e=r.target.closest(".fcard");if(!e)return;let t=jx[+e.dataset.i];Et("#bioImg").src=`img/${t.k}.webp`,Et("#bioImg").alt=t.n,Et("#bioName").textContent=t.n,Et("#bioSum").textContent=t.sum,Et("#bioFacts").textContent=t.facts,Et("#bioTl").innerHTML=t.tl.map(n=>`<li><span class="yr">${Ss(n[0])}</span><div class="it"><b>${Ss(n[1])}</b><span>${Ss(n[2])}</span></div></li>`).join(""),Ms&&Ms.paused(!0),ji.showModal?ji.showModal():ji.setAttribute("open",""),ji.scrollTop=0,Xt||(et.fromTo(ji,{opacity:0,y:46,scale:.96},{opacity:1,y:0,scale:1,duration:.6,ease:"expo.out"}),et.from(".bio-in > div:first-child > *",{opacity:0,y:24,duration:.7,ease:"expo.out",stagger:.07,delay:.1}),et.from("#bioTl li",{opacity:0,x:26,duration:.7,ease:"expo.out",stagger:.06,delay:.2}))});function ty(){if(Xt){ji.close();return}et.to(ji,{opacity:0,y:24,scale:.98,duration:.25,ease:"power2.in",onComplete:()=>ji.close()})}Et("#bioClose").onclick=ty;ji.addEventListener("click",r=>{r.target===ji&&ty()});ji.addEventListener("close",()=>{Ms&&Ms.paused(!1)});An(".copy").forEach(r=>r.addEventListener("click",()=>{let e=document.getElementById(r.dataset.copy),t=e.textContent,n=()=>{r.textContent="Copied",setTimeout(()=>r.textContent="Copy",1600)},i=()=>{let s=document.createRange();s.selectNodeContents(e);let a=getSelection();a.removeAllRanges(),a.addRange(s),r.textContent="Selected"};try{navigator.clipboard.writeText(t).then(n,i)}catch{i()}}));(function(){let r=Et("#bf");if(!r)return;let e=Et("#bf-msg"),t=Et("#bf-wa"),n=Et("#bf-mail"),i=Et("#bf-call"),s="201099000280",a=l=>{let c=r.querySelector('input[name="'+l+'"]:checked');return c?c.value:""};function o(){let l=a("what"),c=a("stage"),u=a("when"),d=l&&c&&u,h=d?`Hello Sawaf, I need ${l}. I'm at the stage of ${c} and I'd like to start ${u}. Can we talk?`:"";e.textContent=d?h:"Pick an option in each group.",[t,n].forEach(f=>f.setAttribute("aria-disabled",d?"false":"true")),t.href="https://wa.me/"+s+(d?"?text="+encodeURIComponent(h):""),n.href="mailto:sales@drp9-tech.com"+(d?"?subject="+encodeURIComponent("Project enquiry")+"&body="+encodeURIComponent(h):"")}r.addEventListener("change",o),o(),i.href="https://wa.me/"+s+"?text="+encodeURIComponent(i.dataset.msg),An("[data-wa]:not(#bf-wa):not(#bf-call)").forEach(l=>{l.href="https://wa.me/"+s+"?text="+encodeURIComponent(l.dataset.msg||"Hello Sawaf, I would like to talk about a project with DRP9 Tech.")})})();if(yE&&!Xt){let r=Et("#ring"),e=Et("#cdot"),t=Et("#cursor"),n=Et("span",r),i=et.quickTo(r,"x",{duration:.45,ease:"power3.out"}),s=et.quickTo(r,"y",{duration:.45,ease:"power3.out"}),a=et.quickTo(e,"x",{duration:.08}),o=et.quickTo(e,"y",{duration:.08}),l=et.quickTo(t,"x",{duration:1.1,ease:"power3.out"}),c=et.quickTo(t,"y",{duration:1.1,ease:"power3.out"});addEventListener("pointermove",h=>{i(h.clientX),s(h.clientY),a(h.clientX),o(h.clientY),l(h.clientX),c(h.clientY),t.style.opacity=1});let u="a,button,label,summary,.fcard,.copy";document.addEventListener("pointerover",h=>{let f=h.target.closest(u),p=h.target.closest(".pcard,.frame a");et.to(r,{scale:f?1.7:1,duration:.35,ease:"power3.out",overwrite:"auto"}),r.classList.toggle("big",!!p),n.textContent=p?"View":"",p&&et.to(r,{scale:2.1,duration:.35,overwrite:"auto"})}),document.addEventListener("pointerdown",()=>et.to(r,{scale:.8,duration:.15})),document.addEventListener("pointerup",()=>et.to(r,{scale:1,duration:.3})),document.addEventListener("pointerleave",()=>et.to([r,e],{opacity:0,duration:.2})),An(".btn, .copy, .dots a").forEach(h=>{let f=et.quickTo(h,"x",{duration:.6,ease:"elastic.out(1,.55)"}),p=et.quickTo(h,"y",{duration:.6,ease:"elastic.out(1,.55)"});h.addEventListener("pointermove",_=>{let m=h.getBoundingClientRect();f((_.clientX-(m.left+m.width/2))*.32),p((_.clientY-(m.top+m.height/2))*.4)}),h.addEventListener("pointerleave",()=>{f(0),p(0)})}),An(".card, .fcard, .pcard, .frame").forEach(h=>{let f=h.matches(".pcard,.frame,.fcard,.eco-card"),p=h.matches(".frame")?6:5,_=et.quickTo(h,"y",{duration:.5,ease:"power3.out"}),m=f?et.quickTo(h,"rotationX",{duration:.6,ease:"power3.out"}):null,g=f?et.quickTo(h,"rotationY",{duration:.6,ease:"power3.out"}):null;f&&et.set(h,{transformPerspective:900}),h.addEventListener("pointermove",v=>{let M=h.getBoundingClientRect(),y=(v.clientX-M.left)/M.width,b=(v.clientY-M.top)/M.height;h.style.setProperty("--mx",y*100+"%"),h.style.setProperty("--my",b*100+"%"),f&&(g((y-.5)*p*2),m(-(b-.5)*p*2))}),h.addEventListener("pointerenter",()=>{h.matches(".frame,.c-item")||_(-8)}),h.addEventListener("pointerleave",()=>{_(0),f&&(m(0),g(0))})})}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollSmoother.js:
  (*!
   * ScrollSmoother 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
