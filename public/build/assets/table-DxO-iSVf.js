import{a as Xc}from"./echo-B1nH64_W.js";window.axios=Xc;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="169",qc=0,pa=1,Yc=2,Ul=1,Fl=2,gn=3,Dn=0,Te=1,_n=2,Ln=0,bi=1,ma=2,ga=3,_a=4,jc=5,Yn=100,$c=101,Kc=102,Zc=103,Jc=104,Qc=200,th=201,eh=202,nh=203,Yr=204,jr=205,ih=206,sh=207,rh=208,oh=209,ah=210,lh=211,ch=212,hh=213,uh=214,$r=0,Kr=1,Zr=2,Li=3,Jr=4,Qr=5,to=6,eo=7,Ol=0,dh=1,fh=2,In=0,ph=1,mh=2,gh=3,Bl=4,_h=5,vh=6,xh=7,zl=300,Ii=301,Di=302,no=303,io=304,nr=306,js=1e3,Kn=1001,so=1002,ze=1003,Mh=1004,ps=1005,Ye=1006,cr=1007,Zn=1008,yn=1009,Hl=1010,Vl=1011,ss=1012,Oo=1013,ei=1014,vn=1015,ls=1016,Bo=1017,zo=1018,Ni=1020,Gl=35902,kl=1021,Wl=1022,$e=1023,Xl=1024,ql=1025,Ai=1026,Ui=1027,Yl=1028,Ho=1029,jl=1030,Vo=1031,Go=1033,Hs=33776,Vs=33777,Gs=33778,ks=33779,ro=35840,oo=35841,ao=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37808,po=37809,mo=37810,go=37811,_o=37812,vo=37813,xo=37814,Mo=37815,yo=37816,So=37817,Eo=37818,wo=37819,To=37820,bo=37821,Ws=36492,Ao=36494,Ro=36495,$l=36283,Co=36284,Po=36285,Lo=36286,yh=3200,Sh=3201,Kl=0,Eh=1,Pn="",qe="srgb",Un="srgb-linear",ko="display-p3",ir="display-p3-linear",$s="linear",se="srgb",Ks="rec709",Zs="p3",oi=7680,va=519,wh=512,Th=513,bh=514,Zl=515,Ah=516,Rh=517,Ch=518,Ph=519,xa=35044,Ma="300 es",xn=2e3,Js=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ya=1234567;const Qi=Math.PI/180,rs=180/Math.PI;function zi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[s&255]+xe[s>>8&255]+xe[s>>16&255]+xe[s>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function Wo(s,t){return(s%t+t)%t}function Lh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ih(s,t,e){return s!==t?(e-s)/(t-s):0}function ts(s,t,e){return(1-e)*s+e*t}function Dh(s,t,e,n){return ts(s,t,1-Math.exp(-e*n))}function Nh(s,t=1){return t-Math.abs(Wo(s,t*2)-t)}function Uh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Fh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Oh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Bh(s,t){return s+Math.random()*(t-s)}function zh(s){return s*(.5-Math.random())}function Hh(s){s!==void 0&&(ya=s);let t=ya+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vh(s){return s*Qi}function Gh(s){return s*rs}function kh(s){return(s&s-1)===0&&s!==0}function Wh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*d,l*h,a*c);break;case"YZY":s.set(l*h,a*u,l*d,a*c);break;case"ZXZ":s.set(l*d,l*h,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ei(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yh={DEG2RAD:Qi,RAD2DEG:rs,generateUUID:zi,clamp:ye,euclideanModulo:Wo,mapLinear:Lh,inverseLerp:Ih,lerp:ts,damp:Dh,pingpong:Nh,smoothstep:Uh,smootherstep:Fh,randInt:Oh,randFloat:Bh,randFloatSpread:zh,seededRandom:Hh,degToRad:Vh,radToDeg:Gh,isPowerOfTwo:kh,ceilPowerOfTwo:Wh,floorPowerOfTwo:Xh,setQuaternionFromProperEuler:qh,normalize:Se,denormalize:Ei};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,r,o,a,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],v=i[1],M=i[4],w=i[7],P=i[2],b=i[5],A=i[8];return r[0]=o*_+a*v+l*P,r[3]=o*f+a*M+l*b,r[6]=o*p+a*w+l*A,r[1]=c*_+u*v+d*P,r[4]=c*f+u*M+d*b,r[7]=c*p+u*w+d*A,r[2]=h*_+m*v+g*P,r[5]=h*f+m*M+g*b,r[8]=h*p+m*w+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,m=c*r-o*l,g=e*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hr.makeScale(t,e)),this}rotate(t){return this.premultiply(hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new Ut;function Jl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jh(){const s=Qs("canvas");return s.style.display="block",s}const Sa={};function Xs(s){s in Sa||(Sa[s]=!0,console.warn(s))}function $h(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Kh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ea=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wa=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vi={[Un]:{transfer:$s,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[qe]:{transfer:se,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ir]:{transfer:$s,primaries:Zs,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(wa),fromReference:s=>s.applyMatrix3(Ea)},[ko]:{transfer:se,primaries:Zs,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(wa),fromReference:s=>s.applyMatrix3(Ea).convertLinearToSRGB()}},Jh=new Set([Un,ir]),$t={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Jh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Vi[t].toReference,i=Vi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Vi[s].primaries},getTransfer:function(s){return s===Pn?$s:Vi[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Vi[t].luminanceCoefficients)}};function Ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ai;class Qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=Qs("canvas")),ai.width=t.width,ai.height=t.height;const n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tu=0;class Ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(dr(i[o].image)):r.push(dr(i[o]))}else r=dr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function dr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;class be extends Bi{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Kn,i=Kn,r=Ye,o=Zn,a=$e,l=yn,c=be.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=zi(),this.name="",this.source=new Ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=zl;be.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,w=(m+1)/2,P=(p+1)/2,b=(u+h)/4,A=(d+_)/4,F=(g+f)/4;return M>w&&M>P?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=b/n,r=A/n):w>P?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=b/i,r=F/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=F/r),this.set(n,i,r,e),this}let v=Math.sqrt((f-g)*(f-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends Bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ql(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tc extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iu extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let He=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==h||c!==m||u!==g){let f=1-a;const p=l*h+c*m+u*g+d*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),b=Math.atan2(P,p*v);f=Math.sin(f*b)/P,a=Math.sin(a*b)/P}const w=a*v;if(l=l*f+h*w,c=c*f+m*w,u=u*f+g*w,d=d*f+_*w,f===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*m-c*h,t[e+1]=l*g+u*h+c*d-a*m,t[e+2]=c*g+u*m+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=i+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new H,Ta=new He;class cs{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(r,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),gs.subVectors(this.max,Gi),li.subVectors(t.a,Gi),ci.subVectors(t.b,Gi),hi.subVectors(t.c,Gi),En.subVectors(ci,li),wn.subVectors(hi,ci),Bn.subVectors(li,hi);let e=[0,-En.z,En.y,0,-wn.z,wn.y,0,-Bn.z,Bn.y,En.z,0,-En.x,wn.z,0,-wn.x,Bn.z,0,-Bn.x,-En.y,En.x,0,-wn.y,wn.x,0,-Bn.y,Bn.x,0];return!pr(e,li,ci,hi,gs)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,li,ci,hi,gs))?!1:(_s.crossVectors(En,wn),e=[_s.x,_s.y,_s.z],pr(e,li,ci,hi,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new H,new H,new H,new H,new H,new H,new H,new H],Ge=new H,ms=new cs,li=new H,ci=new H,hi=new H,En=new H,wn=new H,Bn=new H,Gi=new H,gs=new H,_s=new H,zn=new H;function pr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){zn.fromArray(s,r);const a=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const su=new cs,ki=new H,mr=new H;class Xo{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(mr)),this.expandByPoint(ki.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new H,gr=new H,vs=new H,Tn=new H,_r=new H,xs=new H,vr=new H;let ru=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gr.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(gr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vs),a=Tn.dot(this.direction),l=-Tn.dot(vs),c=Tn.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gr).addScaledVector(vs,h),m}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,r){_r.subVectors(e,t),xs.subVectors(n,t),vr.crossVectors(_r,xs);let o=this.direction.dot(vr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,t);const l=a*this.direction.dot(xs.crossVectors(Tn,xs));if(l<0)return null;const c=a*this.direction.dot(_r.cross(Tn));if(c<0||l+c>o)return null;const u=-a*Tn.dot(vr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class re{constructor(t,e,n,i,r,o,a,l,c,u,d,h,m,g,_,f){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,d,h,m,g,_,f)}set(t,e,n,i,r,o,a,l,c,u,d,h,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),o=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,m=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,m=l*d,g=c*u,_=c*d;e[0]=h+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,m=l*d,g=c*u,_=c*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,m=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=g*c-m,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=o*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ou,t,au)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),bn.crossVectors(n,De),bn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),bn.crossVectors(n,De)),bn.normalize(),Ms.crossVectors(De,bn),i[0]=bn.x,i[4]=Ms.x,i[8]=De.x,i[1]=bn.y,i[5]=Ms.y,i[9]=De.y,i[2]=bn.z,i[6]=Ms.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],v=n[3],M=n[7],w=n[11],P=n[15],b=i[0],A=i[4],F=i[8],j=i[12],x=i[1],E=i[5],V=i[9],I=i[13],L=i[2],D=i[6],R=i[10],G=i[14],N=i[3],q=i[7],et=i[11],J=i[15];return r[0]=o*b+a*x+l*L+c*N,r[4]=o*A+a*E+l*D+c*q,r[8]=o*F+a*V+l*R+c*et,r[12]=o*j+a*I+l*G+c*J,r[1]=u*b+d*x+h*L+m*N,r[5]=u*A+d*E+h*D+m*q,r[9]=u*F+d*V+h*R+m*et,r[13]=u*j+d*I+h*G+m*J,r[2]=g*b+_*x+f*L+p*N,r[6]=g*A+_*E+f*D+p*q,r[10]=g*F+_*V+f*R+p*et,r[14]=g*j+_*I+f*G+p*J,r[3]=v*b+M*x+w*L+P*N,r[7]=v*A+M*E+w*D+P*q,r[11]=v*F+M*V+w*R+P*et,r[15]=v*j+M*I+w*G+P*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*a*h+n*c*h+i*a*m-n*l*m)+_*(+e*l*m-e*c*h+r*o*h-i*o*m+i*c*u-r*l*u)+f*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*u-n*c*u)+p*(-i*a*u-e*l*d+e*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],v=d*f*c-_*h*c+_*l*m-a*f*m-d*l*p+a*h*p,M=g*h*c-u*f*c-g*l*m+o*f*m+u*l*p-o*h*p,w=u*_*c-g*d*c+g*a*m-o*_*m-u*a*p+o*d*p,P=g*d*l-u*_*l-g*a*h+o*_*h+u*a*f-o*d*f,b=e*v+n*M+i*w+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=v*A,t[1]=(_*h*r-d*f*r-_*i*m+n*f*m+d*i*p-n*h*p)*A,t[2]=(a*f*r-_*l*r+_*i*c-n*f*c-a*i*p+n*l*p)*A,t[3]=(d*l*r-a*h*r-d*i*c+n*h*c+a*i*m-n*l*m)*A,t[4]=M*A,t[5]=(u*f*r-g*h*r+g*i*m-e*f*m-u*i*p+e*h*p)*A,t[6]=(g*l*r-o*f*r-g*i*c+e*f*c+o*i*p-e*l*p)*A,t[7]=(o*h*r-u*l*r+u*i*c-e*h*c-o*i*m+e*l*m)*A,t[8]=w*A,t[9]=(g*d*r-u*_*r-g*n*m+e*_*m+u*n*p-e*d*p)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*m-e*a*m)*A,t[12]=P*A,t[13]=(u*_*i-g*d*i+g*n*h-e*_*h-u*n*f+e*d*f)*A,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*f-e*a*f)*A,t[15]=(o*d*i-u*a*i+u*n*l-e*d*l-o*n*h+e*a*h)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,m=r*u,g=r*d,_=o*u,f=o*d,p=a*d,v=l*c,M=l*u,w=l*d,P=n.x,b=n.y,A=n.z;return i[0]=(1-(_+p))*P,i[1]=(m+w)*P,i[2]=(g-M)*P,i[3]=0,i[4]=(m-w)*b,i[5]=(1-(h+p))*b,i[6]=(f+v)*b,i[7]=0,i[8]=(g+M)*A,i[9]=(f-v)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ui.set(i[0],i[1],i[2]).length();const o=ui.set(i[4],i[5],i[6]).length(),a=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ke.copy(this);const c=1/r,u=1/o,d=1/a;return ke.elements[0]*=c,ke.elements[1]*=c,ke.elements[2]*=c,ke.elements[4]*=u,ke.elements[5]*=u,ke.elements[6]*=u,ke.elements[8]*=d,ke.elements[9]*=d,ke.elements[10]*=d,e.setFromRotationMatrix(ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=xn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let m,g;if(a===xn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Js)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=xn){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(o-r),h=(e+t)*c,m=(n+i)*u;let g,_;if(a===xn)g=(o+r)*d,_=-2*d;else if(a===Js)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new H,ke=new re,ou=new H(0,0,0),au=new H(1,1,1),bn=new H,Ms=new H,De=new H,ba=new re,Aa=new He;class sn{constructor(t=0,e=0,n=0,i=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Aa.setFromEuler(this),this.setFromQuaternion(Aa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lu=0;const Ra=new H,di=new He,ln=new re,ys=new H,Wi=new H,cu=new H,hu=new He,Ca=new H(1,0,0),Pa=new H(0,1,0),La=new H(0,0,1),Ia={type:"added"},uu={type:"removed"},fi={type:"childadded",child:null},xr={type:"childremoved",child:null};class ve extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new H,e=new sn,n=new He,i=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Ut}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(Ca,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(La,t)}translateOnAxis(t,e){return Ra.copy(t).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ca,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(La,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ys.copy(t):ys.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Wi,ys,this.up):ln.lookAt(ys,Wi,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),di.setFromRotationMatrix(ln),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ia),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),xr.child=t,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ia),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new H(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new H,cn=new H,Mr=new H,hn=new H,pi=new H,mi=new H,Da=new H,yr=new H,Sr=new H,Er=new H,wr=new Jt,Tr=new Jt,br=new Jt;class je{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),We.subVectors(t,e),i.cross(We);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){We.subVectors(i,e),cn.subVectors(n,e),Mr.subVectors(t,e);const o=We.dot(We),a=We.dot(cn),l=We.dot(Mr),c=cn.dot(cn),u=cn.dot(Mr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return wr.setScalar(0),Tr.setScalar(0),br.setScalar(0),wr.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),br.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(wr,r.x),o.addScaledVector(Tr,r.y),o.addScaledVector(br,r.z),o}static isFrontFacing(t,e,n,i){return We.subVectors(n,e),cn.subVectors(t,e),We.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),We.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;pi.subVectors(i,n),mi.subVectors(r,n),yr.subVectors(t,n);const l=pi.dot(yr),c=mi.dot(yr);if(l<=0&&c<=0)return e.copy(n);Sr.subVectors(t,i);const u=pi.dot(Sr),d=mi.dot(Sr);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(pi,o);Er.subVectors(t,r);const m=pi.dot(Er),g=mi.dot(Er);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(mi,a);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Da.subVectors(r,i),a=(d-u)/(d-u+(m-g)),e.copy(i).addScaledVector(Da,a);const p=1/(f+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Ar(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Wo(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ar(o,r,t+1/3),this.g=Ar(o,r,t),this.b=Ar(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return $t.fromWorkingColorSpace(Me.copy(this),t),Math.round(ye(Me.r*255,0,255))*65536+Math.round(ye(Me.g*255,0,255))*256+Math.round(ye(Me.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,r=Me.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=qe){$t.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(Ss);const n=ts(An.h,Ss.h,e),i=ts(An.s,Ss.s,e),r=ts(An.l,Ss.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Ft;Ft.NAMES=nc;let du=0,hs=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=bi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=jr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==jr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class qo extends hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new H,Es=new Wt;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class ic extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nn extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fu=0;const Be=new re,Rr=new ve,gi=new H,Ne=new cs,Xi=new cs,ge=new H;class Fn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jl(t)?sc:ic)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Ne.min,Xi.min),Ne.expandByPoint(ge),ge.addVectors(Ne.max,Xi.max),Ne.expandByPoint(ge)):(Ne.expandByPoint(Xi.min),Ne.expandByPoint(Xi.max))}Ne.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ge.fromBufferAttribute(a,c),l&&(gi.fromBufferAttribute(t,c),ge.add(gi)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new H,l[F]=new H;const c=new H,u=new H,d=new H,h=new Wt,m=new Wt,g=new Wt,_=new H,f=new H;function p(F,j,x){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,j),d.fromBufferAttribute(n,x),h.fromBufferAttribute(r,F),m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,x),u.sub(c),d.sub(c),m.sub(h),g.sub(h);const E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(E),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(E),a[F].add(_),a[j].add(_),a[x].add(_),l[F].add(f),l[j].add(f),l[x].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let F=0,j=v.length;F<j;++F){const x=v[F],E=x.start,V=x.count;for(let I=E,L=E+V;I<L;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new H,w=new H,P=new H,b=new H;function A(F){P.fromBufferAttribute(i,F),b.copy(P);const j=a[F];M.copy(j),M.sub(P.multiplyScalar(P.dot(j))).normalize(),w.crossVectors(b,j);const E=w.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,E)}for(let F=0,j=v.length;F<j;++F){const x=v[F],E=x.start,V=x.count;for(let I=E,L=E+V;I<L;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),_=t.getX(h+1),f=t.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new en(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new re,Hn=new ru,ws=new Xo,Ua=new H,Ts=new H,bs=new H,As=new H,Cr=new H,Rs=new H,Fa=new H,Cs=new H;class te extends ve{constructor(t=new Fn,e=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Cr.fromBufferAttribute(d,t),o?Rs.addScaledVector(Cr,u):Rs.addScaledVector(Cr.sub(e),u))}e.add(Rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(ws.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(ws,Ua)===null||Hn.origin.distanceToSquared(Ua)>(t.far-t.near)**2))&&(Na.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(Na),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const f=h[g],p=o[f.materialIndex],v=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let w=v,P=M;w<P;w+=3){const b=a.getX(w),A=a.getX(w+1),F=a.getX(w+2);i=Ps(this,p,t,n,c,u,d,b,A,F),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=a.getX(f),M=a.getX(f+1),w=a.getX(f+2);i=Ps(this,o,t,n,c,u,d,v,M,w),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const f=h[g],p=o[f.materialIndex],v=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let w=v,P=M;w<P;w+=3){const b=w,A=w+1,F=w+2;i=Ps(this,p,t,n,c,u,d,b,A,F),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=f,M=f+1,w=f+2;i=Ps(this,o,t,n,c,u,d,v,M,w),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function pu(s,t,e,n,i,r,o,a){let l;if(t.side===Te?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Dn,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Cs);return c<e.near||c>e.far?null:{distance:c,point:Cs.clone(),object:s}}function Ps(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ts),s.getVertexPosition(l,bs),s.getVertexPosition(c,As);const u=pu(s,t,e,n,Ts,bs,As,Fa);if(u){const d=new H;je.getBarycoord(Fa,Ts,bs,As,d),i&&(u.uv=je.getInterpolatedAttribute(i,a,l,c,d,new Wt)),r&&(u.uv1=je.getInterpolatedAttribute(r,a,l,c,d,new Wt)),o&&(u.normal=je.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};je.getNormal(Ts,bs,As,h.normal),u.face=h,u.barycoord=d}return u}class si extends Fn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function g(_,f,p,v,M,w,P,b,A,F,j){const x=w/A,E=P/F,V=w/2,I=P/2,L=b/2,D=A+1,R=F+1;let G=0,N=0;const q=new H;for(let et=0;et<R;et++){const J=et*E-I;for(let tt=0;tt<D;tt++){const yt=tt*x-V;q[_]=yt*v,q[f]=J*M,q[p]=L,c.push(q.x,q.y,q.z),q[_]=0,q[f]=0,q[p]=b>0?1:-1,u.push(q.x,q.y,q.z),d.push(tt/A),d.push(1-et/F),G+=1}}for(let et=0;et<F;et++)for(let J=0;J<A;J++){const tt=h+J+D*et,yt=h+J+D*(et+1),$=h+(J+1)+D*(et+1),nt=h+(J+1)+D*et;l.push(tt,yt,nt),l.push(yt,$,nt),N+=6}a.addGroup(m,N,j),m+=N,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(s){const t={};for(let e=0;e<s.length;e++){const n=Fi(s[e]);for(const i in n)t[i]=n[i]}return t}function mu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function rc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const gu={clone:Fi,merge:Ee};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new H,Oa=new Wt,Ba=new Wt;class Ue extends oc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Oa,Ba),e.subVectors(Ba,Oa)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,vi=1;class xu extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ue(_i,vi,t,e);i.layers=this.layers,this.add(i);const r=new Ue(_i,vi,t,e);r.layers=this.layers,this.add(r);const o=new Ue(_i,vi,t,e);o.layers=this.layers,this.add(o);const a=new Ue(_i,vi,t,e);a.layers=this.layers,this.add(a);const l=new Ue(_i,vi,t,e);l.layers=this.layers,this.add(l);const c=new Ue(_i,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ac extends be{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mu extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ac(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new si(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Ln});r.uniforms.tEquirect.value=e;const o=new te(i,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Ye),new xu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Pr=new H,yu=new H,Su=new Ut;let Xn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Pr.subVectors(n,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Su.getNormalMatrix(t),i=this.coplanarPoint(Pr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Vn=new Xo,Ls=new H;class Yo{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],v=i[13],M=i[14],w=i[15];if(n[0].setComponents(l-r,h-c,f-m,w-p).normalize(),n[1].setComponents(l+r,h+c,f+m,w+p).normalize(),n[2].setComponents(l+o,h+u,f+g,w+v).normalize(),n[3].setComponents(l-o,h-u,f-g,w-v).normalize(),n[4].setComponents(l-a,h-d,f-_,w-M).normalize(),e===xn)n[5].setComponents(l+a,h+d,f+_,w+M).normalize();else if(e===Js)n[5].setComponents(a,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ls.x=i.normal.x>0?t.max.x:t.min.x,Ls.y=i.normal.y>0?t.max.y:t.min.y,Ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Eu(s){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Oi extends Fn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const v=p*h-o;for(let M=0;M<c;M++){const w=M*d-r;g.push(w,-v,0),_.push(0,0,1),f.push(M/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const M=v+c*p,w=v+c*(p+1),P=v+1+c*(p+1),b=v+1+c*p;m.push(M,w,b),m.push(w,P,b)}this.setIndex(m),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
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
#endif`,bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
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
#endif`,Lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
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
#endif`,Bu=`#ifdef USE_BUMPMAP
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$u=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ud=`#ifdef USE_GRADIENTMAP
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
}`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dd=`#if defined( USE_POINTS_UV )
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
#endif`,Nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qd=`#ifdef USE_NORMALMAP
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
#endif`,Yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uf=`#ifdef USE_SKINNING
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
#endif`,df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_f=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
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
}`,Lf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,If=`#define DISTANCE
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
}`,Df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Bf=`#include <common>
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
}`,zf=`uniform vec3 diffuse;
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
}`,Hf=`#define LAMBERT
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
}`,Vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Gf=`#define MATCAP
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
}`,kf=`#define MATCAP
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
}`,Wf=`#define NORMAL
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
}`,Xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qf=`#define PHONG
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
}`,Yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jf=`#define STANDARD
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
}`,$f=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Kf=`#define TOON
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
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Jf=`uniform float size;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,tp=`#include <common>
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
}`,ep=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,np=`uniform float rotation;
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
}`,ip=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:wu,alphahash_pars_fragment:Tu,alphamap_fragment:bu,alphamap_pars_fragment:Au,alphatest_fragment:Ru,alphatest_pars_fragment:Cu,aomap_fragment:Pu,aomap_pars_fragment:Lu,batching_pars_vertex:Iu,batching_vertex:Du,begin_vertex:Nu,beginnormal_vertex:Uu,bsdfs:Fu,iridescence_fragment:Ou,bumpmap_pars_fragment:Bu,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Gu,color_fragment:ku,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:qu,common:Yu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:$u,displacementmap_pars_vertex:Ku,displacementmap_vertex:Zu,emissivemap_fragment:Ju,emissivemap_pars_fragment:Qu,colorspace_fragment:td,colorspace_pars_fragment:ed,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:sd,envmap_pars_vertex:rd,envmap_physical_pars_fragment:gd,envmap_vertex:od,fog_vertex:ad,fog_pars_vertex:ld,fog_fragment:cd,fog_pars_fragment:hd,gradientmap_pars_fragment:ud,lightmap_pars_fragment:dd,lights_lambert_fragment:fd,lights_lambert_pars_fragment:pd,lights_pars_begin:md,lights_toon_fragment:_d,lights_toon_pars_fragment:vd,lights_phong_fragment:xd,lights_phong_pars_fragment:Md,lights_physical_fragment:yd,lights_physical_pars_fragment:Sd,lights_fragment_begin:Ed,lights_fragment_maps:wd,lights_fragment_end:Td,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Cd,map_fragment:Pd,map_pars_fragment:Ld,map_particle_fragment:Id,map_particle_pars_fragment:Dd,metalnessmap_fragment:Nd,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Fd,morphcolor_vertex:Od,morphnormal_vertex:Bd,morphtarget_pars_vertex:zd,morphtarget_vertex:Hd,normal_fragment_begin:Vd,normal_fragment_maps:Gd,normal_pars_fragment:kd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:Kd,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:Qd,project_vertex:tf,dithering_fragment:ef,dithering_pars_fragment:nf,roughnessmap_fragment:sf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:of,shadowmap_pars_vertex:af,shadowmap_vertex:lf,shadowmask_pars_fragment:cf,skinbase_vertex:hf,skinning_pars_vertex:uf,skinning_vertex:df,skinnormal_vertex:ff,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:_f,transmission_fragment:vf,transmission_pars_fragment:xf,uv_pars_fragment:Mf,uv_pars_vertex:yf,uv_vertex:Sf,worldpos_vertex:Ef,background_vert:wf,background_frag:Tf,backgroundCube_vert:bf,backgroundCube_frag:Af,cube_vert:Rf,cube_frag:Cf,depth_vert:Pf,depth_frag:Lf,distanceRGBA_vert:If,distanceRGBA_frag:Df,equirect_vert:Nf,equirect_frag:Uf,linedashed_vert:Ff,linedashed_frag:Of,meshbasic_vert:Bf,meshbasic_frag:zf,meshlambert_vert:Hf,meshlambert_frag:Vf,meshmatcap_vert:Gf,meshmatcap_frag:kf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:qf,meshphong_frag:Yf,meshphysical_vert:jf,meshphysical_frag:$f,meshtoon_vert:Kf,meshtoon_frag:Zf,points_vert:Jf,points_frag:Qf,shadow_vert:tp,shadow_frag:ep,sprite_vert:np,sprite_frag:ip},at={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},tn={basic:{uniforms:Ee([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ee([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ee([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ee([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ee([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ee([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ee([at.points,at.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ee([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ee([at.common,at.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ee([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ee([at.sprite,at.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ee([at.common,at.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ee([at.lights,at.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};tn.physical={uniforms:Ee([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Is={r:0,b:0,g:0},Gn=new sn,sp=new re;function rp(s,t,e,n,i,r,o){const a=new Ft(0);let l=r===!0?0:1,c,u,d=null,h=0,m=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const w=g(v);w===null?p(a,l):w&&w.isColor&&(p(w,1),M=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(v,M){const w=g(M);w&&(w.isCubeTexture||w.mapping===nr)?(u===void 0&&(u=new te(new si(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Fi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Gn.copy(M.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(Gn)),u.material.toneMapped=$t.getTransfer(w.colorSpace)!==se,(d!==w||h!==w.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,m=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new te(new Oi(2,2),new Nn({name:"BackgroundMaterial",uniforms:Fi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$t.getTransfer(w.colorSpace)!==se,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,m=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(Is,rc(s)),n.buffers.color.setClear(Is.r,Is.g,Is.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:f}}function op(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(x,E,V,I,L){let D=!1;const R=d(I,V,E);r!==R&&(r=R,c(r.object)),D=m(x,I,V,L),D&&g(x,I,V,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,w(x,E,V,I),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function u(x){return s.deleteVertexArray(x)}function d(x,E,V){const I=V.wireframe===!0;let L=n[x.id];L===void 0&&(L={},n[x.id]=L);let D=L[E.id];D===void 0&&(D={},L[E.id]=D);let R=D[I];return R===void 0&&(R=h(l()),D[I]=R),R}function h(x){const E=[],V=[],I=[];for(let L=0;L<e;L++)E[L]=0,V[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:I,object:x,attributes:{},index:null}}function m(x,E,V,I){const L=r.attributes,D=E.attributes;let R=0;const G=V.getAttributes();for(const N in G)if(G[N].location>=0){const et=L[N];let J=D[N];if(J===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),et===void 0||et.attribute!==J||J&&et.data!==J.data)return!0;R++}return r.attributesNum!==R||r.index!==I}function g(x,E,V,I){const L={},D=E.attributes;let R=0;const G=V.getAttributes();for(const N in G)if(G[N].location>=0){let et=D[N];et===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(et=x.instanceColor));const J={};J.attribute=et,et&&et.data&&(J.data=et.data),L[N]=J,R++}r.attributes=L,r.attributesNum=R,r.index=I}function _(){const x=r.newAttributes;for(let E=0,V=x.length;E<V;E++)x[E]=0}function f(x){p(x,0)}function p(x,E){const V=r.newAttributes,I=r.enabledAttributes,L=r.attributeDivisors;V[x]=1,I[x]===0&&(s.enableVertexAttribArray(x),I[x]=1),L[x]!==E&&(s.vertexAttribDivisor(x,E),L[x]=E)}function v(){const x=r.newAttributes,E=r.enabledAttributes;for(let V=0,I=E.length;V<I;V++)E[V]!==x[V]&&(s.disableVertexAttribArray(V),E[V]=0)}function M(x,E,V,I,L,D,R){R===!0?s.vertexAttribIPointer(x,E,V,L,D):s.vertexAttribPointer(x,E,V,I,L,D)}function w(x,E,V,I){_();const L=I.attributes,D=V.getAttributes(),R=E.defaultAttributeValues;for(const G in D){const N=D[G];if(N.location>=0){let q=L[G];if(q===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const et=q.normalized,J=q.itemSize,tt=t.get(q);if(tt===void 0)continue;const yt=tt.buffer,$=tt.type,nt=tt.bytesPerElement,ct=$===s.INT||$===s.UNSIGNED_INT||q.gpuType===Oo;if(q.isInterleavedBufferAttribute){const ot=q.data,Tt=ot.stride,At=q.offset;if(ot.isInstancedInterleavedBuffer){for(let zt=0;zt<N.locationSize;zt++)p(N.location+zt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let zt=0;zt<N.locationSize;zt++)f(N.location+zt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let zt=0;zt<N.locationSize;zt++)M(N.location+zt,J/N.locationSize,$,et,Tt*nt,(At+J/N.locationSize*zt)*nt,ct)}else{if(q.isInstancedBufferAttribute){for(let ot=0;ot<N.locationSize;ot++)p(N.location+ot,q.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ot=0;ot<N.locationSize;ot++)f(N.location+ot);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ot=0;ot<N.locationSize;ot++)M(N.location+ot,J/N.locationSize,$,et,J*nt,J/N.locationSize*ot*nt,ct)}}else if(R!==void 0){const et=R[G];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(N.location,et);break;case 3:s.vertexAttrib3fv(N.location,et);break;case 4:s.vertexAttrib4fv(N.location,et);break;default:s.vertexAttrib1fv(N.location,et)}}}}v()}function P(){F();for(const x in n){const E=n[x];for(const V in E){const I=E[V];for(const L in I)u(I[L].object),delete I[L];delete E[V]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const E=n[x.id];for(const V in E){const I=E[V];for(const L in I)u(I[L].object),delete I[L];delete E[V]}delete n[x.id]}function A(x){for(const E in n){const V=n[E];if(V[x.id]===void 0)continue;const I=V[x.id];for(const L in I)u(I[L].object),delete I[L];delete V[x.id]}}function F(){j(),o=!0,r!==i&&(r=i,c(r.object))}function j(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:j,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:v}}function ap(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,n,1)}function l(c,u,d,h){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==$e&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const F=A===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==yn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vn&&!F)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:P,maxSamples:b}}function cp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Xn,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!f)r?u(null):c();else{const v=r?0:n,M=v*4;let w=p.clippingState||null;l.value=w,w=u(g,h,M,m);for(let P=0;P!==M;++P)w[P]=e[P];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,g){const _=d!==null?d.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,w=m;M!==_;++M,w+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(f,w),f[w+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function hp(s){let t=new WeakMap;function e(o,a){return a===no?o.mapping=Ii:a===io&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===no||a===io)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mu(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class cc extends oc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,za=[.125,.215,.35,.446,.526,.582],jn=20,Lr=new cc,Ha=new Ft;let Ir=null,Dr=0,Nr=0,Ur=!1;const qn=(1+Math.sqrt(5))/2,xi=1/qn,Va=[new H(-qn,xi,0),new H(qn,xi,0),new H(-xi,0,qn),new H(xi,0,qn),new H(0,qn,-xi),new H(0,qn,xi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ir=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Dr,Nr),this._renderer.xr.enabled=Ur,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:ls,format:$e,colorSpace:Un,depthBuffer:!1},i=Ga(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ga(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=up(r)),this._blurMaterial=dp(r,t,e)}return i}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Lr)}_sceneToCubeUV(t,e,n,i){const a=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ha),u.toneMapping=In,u.autoClear=!1;const m=new qo({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new te(new si,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(Ha),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Ds(i,v*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ii||t.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ka());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Va[(i-r-1)%Va.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new te(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*jn-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):jn;f>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${jn}`);const p=[];let v=0;for(let A=0;A<jn;++A){const F=A/_,j=Math.exp(-F*F/2);p.push(j),A===0?v+=j:A<f&&(v+=2*j)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const w=this._sizeLods[i],P=3*w*(i>M-Ti?i-M+Ti:0),b=4*(this._cubeSize-w);Ds(e,P,b,3*w,2*w),l.setRenderTarget(e),l.render(d,Lr)}}function up(s){const t=[],e=[],n=[];let i=s;const r=s-Ti+1+za.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ti?l=za[o-s+Ti-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,f=2,p=1,v=new Float32Array(_*g*m),M=new Float32Array(f*g*m),w=new Float32Array(p*g*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,F=b>2?0:-1,j=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];v.set(j,_*g*b),M.set(h,f*g*b);const x=[b,b,b,b,b,b];w.set(x,p*g*b)}const P=new Fn;P.setAttribute("position",new en(v,_)),P.setAttribute("uv",new en(M,f)),P.setAttribute("faceIndex",new en(w,p)),t.push(P),i>Ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ga(s,t,e){const n=new ni(s,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dp(s,t,e){const n=new Float32Array(jn),i=new H(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ka(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Wa(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===no||l===io,u=l===Ii||l===Di;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Io(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&i(m)?(e===null&&(e=new Io(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mp(s,t,e,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],s.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let M=0,w=v.length;M<w;M+=3){const P=v[M+0],b=v[M+1],A=v[M+2];h.push(P,b,b,A,A,P)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,w=v.length/3-1;M<w;M+=3){const P=M+0,b=M+1,A=M+2;h.push(P,b,b,A,A,P)}}else return;const f=new(Jl(h)?sc:ic)(h,1);f.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,f)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function gp(s,t,e){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,m){s.drawElements(n,m,r,h*o),e.update(m,n,1)}function c(h,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,h*o,g),e.update(m,n,g))}function u(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,h,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function d(h,m,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h.length;p++)c(h[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=m[v];for(let v=0;v<_.length;v++)e.update(p,n,_[v])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function _p(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function vp(s,t,e){const n=new WeakMap,i=new Jt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let j=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",j)};h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let w=a.attributes.position.count*M,P=1;w>t.maxTextureSize&&(P=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const b=new Float32Array(w*P*4*d),A=new tc(b,w,P,d);A.type=vn,A.needsUpdate=!0;const F=M*4;for(let x=0;x<d;x++){const E=f[x],V=p[x],I=v[x],L=w*P*4*x;for(let D=0;D<E.count;D++){const R=D*F;m===!0&&(i.fromBufferAttribute(E,D),b[L+R+0]=i.x,b[L+R+1]=i.y,b[L+R+2]=i.z,b[L+R+3]=0),g===!0&&(i.fromBufferAttribute(V,D),b[L+R+4]=i.x,b[L+R+5]=i.y,b[L+R+6]=i.z,b[L+R+7]=0),_===!0&&(i.fromBufferAttribute(I,D),b[L+R+8]=i.x,b[L+R+9]=i.y,b[L+R+10]=i.z,b[L+R+11]=I.itemSize===4?i.w:1)}}h={count:d,texture:A,size:new Wt(w,P)},n.set(a,h),a.addEventListener("dispose",j)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function xp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class hc extends be{constructor(t,e,n,i,r,o,a,l,c,u=Ai){if(u!==Ai&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ai&&(n=ei),n===void 0&&u===Ui&&(n=Ni),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uc=new be,Xa=new hc(1,1),dc=new tc,fc=new iu,pc=new ac,qa=[],Ya=[],ja=new Float32Array(16),$a=new Float32Array(9),Ka=new Float32Array(4);function Hi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=qa[i];if(r===void 0&&(r=new Float32Array(i),qa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sr(s,t){let e=Ya[t];e===void 0&&(e=new Int32Array(t),Ya[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function wp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ka.set(n),s.uniformMatrix2fv(this.addr,!1,Ka),me(e,n)}}function Tp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;$a.set(n),s.uniformMatrix3fv(this.addr,!1,$a),me(e,n)}}function bp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ja.set(n),s.uniformMatrix4fv(this.addr,!1,ja),me(e,n)}}function Ap(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function Lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function Up(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xa.compareFunction=Zl,r=Xa):r=uc,e.setTexture2D(t||r,i)}function Fp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fc,i)}function Op(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pc,i)}function Bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dc,i)}function zp(s){switch(s){case 5126:return Mp;case 35664:return yp;case 35665:return Sp;case 35666:return Ep;case 35674:return wp;case 35675:return Tp;case 35676:return bp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Ip;case 36295:return Dp;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}function Hp(s,t){s.uniform1fv(this.addr,t)}function Vp(s,t){const e=Hi(t,this.size,2);s.uniform2fv(this.addr,e)}function Gp(s,t){const e=Hi(t,this.size,3);s.uniform3fv(this.addr,e)}function kp(s,t){const e=Hi(t,this.size,4);s.uniform4fv(this.addr,e)}function Wp(s,t){const e=Hi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xp(s,t){const e=Hi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qp(s,t){const e=Hi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Yp(s,t){s.uniform1iv(this.addr,t)}function jp(s,t){s.uniform2iv(this.addr,t)}function $p(s,t){s.uniform3iv(this.addr,t)}function Kp(s,t){s.uniform4iv(this.addr,t)}function Zp(s,t){s.uniform1uiv(this.addr,t)}function Jp(s,t){s.uniform2uiv(this.addr,t)}function Qp(s,t){s.uniform3uiv(this.addr,t)}function tm(s,t){s.uniform4uiv(this.addr,t)}function em(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uc,r[o])}function nm(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||fc,r[o])}function im(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pc,r[o])}function sm(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||dc,r[o])}function rm(s){switch(s){case 5126:return Hp;case 35664:return Vp;case 35665:return Gp;case 35666:return kp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return jp;case 35668:case 35672:return $p;case 35669:case 35673:return Kp;case 5125:return Zp;case 36294:return Jp;case 36295:return Qp;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}class om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zp(e.type)}}class am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rm(e.type)}}class lm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function Za(s,t){s.seq.push(t),s.map[t.id]=t}function cm(s,t,e){const n=s.name,i=n.length;for(Fr.lastIndex=0;;){const r=Fr.exec(n),o=Fr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Za(e,c===void 0?new om(a,s,t):new am(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new lm(a),Za(e,d)),e=d}}}class qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);cm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ja(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const hm=37297;let um=0;function dm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function fm(s){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(s);let n;switch(t===e?n="":t===Zs&&e===Ks?n="LinearDisplayP3ToLinearSRGB":t===Ks&&e===Zs&&(n="LinearSRGBToLinearDisplayP3"),s){case Un:case ir:return[n,"LinearTransferOETF"];case qe:case ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Qa(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+dm(s.getShaderSource(t),o)}else return i}function pm(s,t){const e=fm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mm(s,t){let e;switch(t){case ph:e="Linear";break;case mh:e="Reinhard";break;case gh:e="Cineon";break;case Bl:e="ACESFilmic";break;case vh:e="AgX";break;case xh:e="Neutral";break;case _h:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ns=new H;function gm(){$t.getLuminanceCoefficients(Ns);const s=Ns.x.toFixed(4),t=Ns.y.toFixed(4),e=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function vm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Zi(s){return s!==""}function tl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(s){return s.replace(Mm,Sm)}const ym=new Map;function Sm(s,t){let e=Nt[t];if(e===void 0){const n=ym.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}const Em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(s){return s.replace(Em,wm)}function wm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function il(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ul?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function bm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ii:case Di:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Am(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function Rm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case dh:t="ENVMAP_BLENDING_MIX";break;case fh:t="ENVMAP_BLENDING_ADD";break}return t}function Cm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Tm(e),c=bm(e),u=Am(e),d=Rm(e),h=Cm(e),m=_m(e),g=vm(r),_=i.createProgram();let f,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zi).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zi).join(`
`),p.length>0&&(p+=`
`)):(f=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),p=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Nt.tonemapping_pars_fragment:"",e.toneMapping!==In?mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,pm("linearToOutputTexel",e.outputColorSpace),gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),o=Do(o),o=tl(o,e),o=el(o,e),a=Do(a),a=tl(a,e),a=el(a,e),o=nl(o),a=nl(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+f+o,w=v+p+a,P=Ja(i,i.VERTEX_SHADER,M),b=Ja(i,i.FRAGMENT_SHADER,w);i.attachShader(_,P),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(E){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),I=i.getShaderInfoLog(P).trim(),L=i.getShaderInfoLog(b).trim();let D=!0,R=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,b);else{const G=Qa(i,P,"vertex"),N=Qa(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+G+`
`+N)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(I===""||L==="")&&(R=!1);R&&(E.diagnostics={runnable:D,programLog:V,vertexShader:{log:I,prefix:f},fragmentShader:{log:L,prefix:p}})}i.deleteShader(P),i.deleteShader(b),F=new qs(i,_),j=xm(i,_)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let j;this.getAttributes=function(){return j===void 0&&A(this),j};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,hm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=um++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=b,this}let Lm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dm(t),e.set(t,n)),n}}class Dm{constructor(t){this.id=Lm++,this.code=t,this.usedTimes=0}}function Nm(s,t,e,n,i,r,o){const a=new ec,l=new Im,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,E,V,I,L){const D=I.fog,R=L.geometry,G=x.isMeshStandardMaterial?I.environment:null,N=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),q=N&&N.mapping===nr?N.image.height:null,et=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,tt=J!==void 0?J.length:0;let yt=0;R.morphAttributes.position!==void 0&&(yt=1),R.morphAttributes.normal!==void 0&&(yt=2),R.morphAttributes.color!==void 0&&(yt=3);let $,nt,ct,ot;if(et){const Re=tn[et];$=Re.vertexShader,nt=Re.fragmentShader}else $=x.vertexShader,nt=x.fragmentShader,l.update(x),ct=l.getVertexShaderID(x),ot=l.getFragmentShaderID(x);const Tt=s.getRenderTarget(),At=L.isInstancedMesh===!0,zt=L.isBatchedMesh===!0,Zt=!!x.map,Ht=!!x.matcap,U=!!N,Pe=!!x.aoMap,Ot=!!x.lightMap,Gt=!!x.bumpMap,Ct=!!x.normalMap,ee=!!x.displacementMap,It=!!x.emissiveMap,C=!!x.metalnessMap,S=!!x.roughnessMap,k=x.anisotropy>0,Z=x.clearcoat>0,it=x.dispersion>0,K=x.iridescence>0,St=x.sheen>0,lt=x.transmission>0,mt=k&&!!x.anisotropyMap,kt=Z&&!!x.clearcoatMap,st=Z&&!!x.clearcoatNormalMap,_t=Z&&!!x.clearcoatRoughnessMap,Pt=K&&!!x.iridescenceMap,Lt=K&&!!x.iridescenceThicknessMap,vt=St&&!!x.sheenColorMap,Bt=St&&!!x.sheenRoughnessMap,Dt=!!x.specularMap,Qt=!!x.specularColorMap,O=!!x.specularIntensityMap,dt=lt&&!!x.transmissionMap,Y=lt&&!!x.thicknessMap,Q=!!x.gradientMap,ht=!!x.alphaMap,ft=x.alphaTest>0,Vt=!!x.alphaHash,ce=!!x.extensions;let Ae=In;x.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const Xt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:nt,defines:x.defines,customVertexShaderID:ct,customFragmentShaderID:ot,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:zt,batchingColor:zt&&L._colorsTexture!==null,instancing:At,instancingColor:At&&L.instanceColor!==null,instancingMorph:At&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Un,alphaToCoverage:!!x.alphaToCoverage,map:Zt,matcap:Ht,envMap:U,envMapMode:U&&N.mapping,envMapCubeUVHeight:q,aoMap:Pe,lightMap:Ot,bumpMap:Gt,normalMap:Ct,displacementMap:m&&ee,emissiveMap:It,normalMapObjectSpace:Ct&&x.normalMapType===Eh,normalMapTangentSpace:Ct&&x.normalMapType===Kl,metalnessMap:C,roughnessMap:S,anisotropy:k,anisotropyMap:mt,clearcoat:Z,clearcoatMap:kt,clearcoatNormalMap:st,clearcoatRoughnessMap:_t,dispersion:it,iridescence:K,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:St,sheenColorMap:vt,sheenRoughnessMap:Bt,specularMap:Dt,specularColorMap:Qt,specularIntensityMap:O,transmission:lt,transmissionMap:dt,thicknessMap:Y,gradientMap:Q,opaque:x.transparent===!1&&x.blending===bi&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Vt,combine:x.combine,mapUv:Zt&&f(x.map.channel),aoMapUv:Pe&&f(x.aoMap.channel),lightMapUv:Ot&&f(x.lightMap.channel),bumpMapUv:Gt&&f(x.bumpMap.channel),normalMapUv:Ct&&f(x.normalMap.channel),displacementMapUv:ee&&f(x.displacementMap.channel),emissiveMapUv:It&&f(x.emissiveMap.channel),metalnessMapUv:C&&f(x.metalnessMap.channel),roughnessMapUv:S&&f(x.roughnessMap.channel),anisotropyMapUv:mt&&f(x.anisotropyMap.channel),clearcoatMapUv:kt&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&f(x.sheenRoughnessMap.channel),specularMapUv:Dt&&f(x.specularMap.channel),specularColorMapUv:Qt&&f(x.specularColorMap.channel),specularIntensityMapUv:O&&f(x.specularIntensityMap.channel),transmissionMapUv:dt&&f(x.transmissionMap.channel),thicknessMapUv:Y&&f(x.thicknessMap.channel),alphaMapUv:ht&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ct||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(Zt||ht),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Zt&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===Te,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)E.push(V),E.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(M(E,x),w(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function M(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const E=_[x.type];let V;if(E){const I=tn[E];V=gu.clone(I.uniforms)}else V=x.uniforms;return V}function b(x,E){let V;for(let I=0,L=u.length;I<L;I++){const D=u[I];if(D.cacheKey===E){V=D,++V.usedTimes;break}}return V===void 0&&(V=new Pm(s,E,x,r),u.push(V)),V}function A(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function F(x){l.remove(x)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:P,acquireProgram:b,releaseProgram:A,releaseShaderCache:F,programs:u,dispose:j}}function Um(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Fm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function sl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,h,m,g,_,f){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:f},s[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=f),t++,p}function a(d,h,m,g,_,f){const p=o(d,h,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(d,h,m,g,_,f){const p=o(d,h,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,h){e.length>1&&e.sort(d||Fm),n.length>1&&n.sort(h||sl),i.length>1&&i.sort(h||sl)}function u(){for(let d=t,h=s.length;d<h;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Om(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new rl,s.set(n,[o])):i>=r.length?(o=new rl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Ft};break;case"SpotLight":e={position:new H,direction:new H,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function zm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hm=0;function Vm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gm(s){const t=new Bm,e=zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,r=new re,o=new re;function a(c){let u=0,d=0,h=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,v=0,M=0,w=0,P=0,b=0,A=0;c.sort(Vm);for(let j=0,x=c.length;j<x;j++){const E=c[j],V=E.color,I=E.intensity,L=E.distance,D=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=V.r*I,d+=V.g*I,h+=V.b*I;else if(E.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(E.sh.coefficients[R],I);A++}else if(E.isDirectionalLight){const R=t.get(E);if(R.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const G=E.shadow,N=e.get(E);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.directionalShadow[m]=N,n.directionalShadowMap[m]=D,n.directionalShadowMatrix[m]=E.shadow.matrix,v++}n.directional[m]=R,m++}else if(E.isSpotLight){const R=t.get(E);R.position.setFromMatrixPosition(E.matrixWorld),R.color.copy(V).multiplyScalar(I),R.distance=L,R.coneCos=Math.cos(E.angle),R.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),R.decay=E.decay,n.spot[_]=R;const G=E.shadow;if(E.map&&(n.spotLightMap[P]=E.map,P++,G.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[_]=G.matrix,E.castShadow){const N=e.get(E);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=D,w++}_++}else if(E.isRectAreaLight){const R=t.get(E);R.color.copy(V).multiplyScalar(I),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),n.rectArea[f]=R,f++}else if(E.isPointLight){const R=t.get(E);if(R.color.copy(E.color).multiplyScalar(E.intensity),R.distance=E.distance,R.decay=E.decay,E.castShadow){const G=E.shadow,N=e.get(E);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,N.shadowCameraNear=G.camera.near,N.shadowCameraFar=G.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=E.shadow.matrix,M++}n.point[g]=R,g++}else if(E.isHemisphereLight){const R=t.get(E);R.skyColor.copy(E.color).multiplyScalar(I),R.groundColor.copy(E.groundColor).multiplyScalar(I),n.hemi[p]=R,p++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==f||F.hemiLength!==p||F.numDirectionalShadows!==v||F.numPointShadows!==M||F.numSpotShadows!==w||F.numSpotMaps!==P||F.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=f,F.hemiLength=p,F.numDirectionalShadows=v,F.numPointShadows=M,F.numSpotShadows=w,F.numSpotMaps=P,F.numLightProbes=A,n.version=Hm++)}function l(c,u){let d=0,h=0,m=0,g=0,_=0;const f=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const M=c[p];if(M.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(f),d++}else if(M.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),h++}else if(M.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:n}}function ol(s){const t=new Gm(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function km(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ol(s),t.set(i,[a])):r>=o.length?(a=new ol(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Wm extends hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xm extends hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jm(s,t,e){let n=new Yo;const i=new Wt,r=new Wt,o=new Jt,a=new Wm({depthPacking:Sh}),l=new Xm,c={},u=e.maxTextureSize,d={[Dn]:Te,[Te]:Dn,[_n]:_n},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:qm,fragmentShader:Ym}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let p=this.type;this.render=function(b,A,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const j=s.getRenderTarget(),x=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Ln),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const I=p!==gn&&this.type===gn,L=p===gn&&this.type!==gn;for(let D=0,R=b.length;D<R;D++){const G=b[D],N=G.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const q=N.getFrameExtents();if(i.multiply(q),r.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/q.x),i.x=r.x*q.x,N.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/q.y),i.y=r.y*q.y,N.mapSize.y=r.y)),N.map===null||I===!0||L===!0){const J=this.type!==gn?{minFilter:ze,magFilter:ze}:{};N.map!==null&&N.map.dispose(),N.map=new ni(i.x,i.y,J),N.map.texture.name=G.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const et=N.getViewportCount();for(let J=0;J<et;J++){const tt=N.getViewport(J);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),V.viewport(o),N.updateMatrices(G,J),n=N.getFrustum(),w(A,F,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===gn&&v(N,F),N.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(j,x,E)};function v(b,A){const F=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ni(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,F,h,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,F,m,_,null)}function M(b,A,F,j){let x=null;const E=F.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)x=E;else if(x=F.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=x.uuid,I=A.uuid;let L=c[V];L===void 0&&(L={},c[V]=L);let D=L[I];D===void 0&&(D=x.clone(),L[I]=D,A.addEventListener("dispose",P)),x=D}if(x.visible=A.visible,x.wireframe=A.wireframe,j===gn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=s.properties.get(x);V.light=F}return x}function w(b,A,F,j,x){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===gn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld);const I=t.update(b),L=b.material;if(Array.isArray(L)){const D=I.groups;for(let R=0,G=D.length;R<G;R++){const N=D[R],q=L[N.materialIndex];if(q&&q.visible){const et=M(b,q,j,x);b.onBeforeShadow(s,b,A,F,I,et,N),s.renderBufferDirect(F,null,I,et,b,N),b.onAfterShadow(s,b,A,F,I,et,N)}}}else if(L.visible){const D=M(b,L,j,x);b.onBeforeShadow(s,b,A,F,I,D,null),s.renderBufferDirect(F,null,I,D,b,null),b.onAfterShadow(s,b,A,F,I,D,null)}}const V=b.children;for(let I=0,L=V.length;I<L;I++)w(V[I],A,F,j,x)}function P(b){b.target.removeEventListener("dispose",P);for(const F in c){const j=c[F],x=b.target.uuid;x in j&&(j[x].dispose(),delete j[x])}}}const $m={[$r]:Kr,[Zr]:to,[Jr]:eo,[Li]:Qr,[Kr]:$r,[to]:Zr,[eo]:Jr,[Qr]:Li};function Km(s){function t(){let O=!1;const dt=new Jt;let Y=null;const Q=new Jt(0,0,0,0);return{setMask:function(ht){Y!==ht&&!O&&(s.colorMask(ht,ht,ht,ht),Y=ht)},setLocked:function(ht){O=ht},setClear:function(ht,ft,Vt,ce,Ae){Ae===!0&&(ht*=ce,ft*=ce,Vt*=ce),dt.set(ht,ft,Vt,ce),Q.equals(dt)===!1&&(s.clearColor(ht,ft,Vt,ce),Q.copy(dt))},reset:function(){O=!1,Y=null,Q.set(-1,0,0,0)}}}function e(){let O=!1,dt=!1,Y=null,Q=null,ht=null;return{setReversed:function(ft){dt=ft},setTest:function(ft){ft?ct(s.DEPTH_TEST):ot(s.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!O&&(s.depthMask(ft),Y=ft)},setFunc:function(ft){if(dt&&(ft=$m[ft]),Q!==ft){switch(ft){case $r:s.depthFunc(s.NEVER);break;case Kr:s.depthFunc(s.ALWAYS);break;case Zr:s.depthFunc(s.LESS);break;case Li:s.depthFunc(s.LEQUAL);break;case Jr:s.depthFunc(s.EQUAL);break;case Qr:s.depthFunc(s.GEQUAL);break;case to:s.depthFunc(s.GREATER);break;case eo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ft}},setLocked:function(ft){O=ft},setClear:function(ft){ht!==ft&&(s.clearDepth(ft),ht=ft)},reset:function(){O=!1,Y=null,Q=null,ht=null}}}function n(){let O=!1,dt=null,Y=null,Q=null,ht=null,ft=null,Vt=null,ce=null,Ae=null;return{setTest:function(Xt){O||(Xt?ct(s.STENCIL_TEST):ot(s.STENCIL_TEST))},setMask:function(Xt){dt!==Xt&&!O&&(s.stencilMask(Xt),dt=Xt)},setFunc:function(Xt,Re,rn){(Y!==Xt||Q!==Re||ht!==rn)&&(s.stencilFunc(Xt,Re,rn),Y=Xt,Q=Re,ht=rn)},setOp:function(Xt,Re,rn){(ft!==Xt||Vt!==Re||ce!==rn)&&(s.stencilOp(Xt,Re,rn),ft=Xt,Vt=Re,ce=rn)},setLocked:function(Xt){O=Xt},setClear:function(Xt){Ae!==Xt&&(s.clearStencil(Xt),Ae=Xt)},reset:function(){O=!1,dt=null,Y=null,Q=null,ht=null,ft=null,Vt=null,ce=null,Ae=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,f=null,p=null,v=null,M=null,w=null,P=null,b=new Ft(0,0,0),A=0,F=!1,j=null,x=null,E=null,V=null,I=null;const L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,R=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(G)[1]),D=R>=1):G.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),D=R>=2);let N=null,q={};const et=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),tt=new Jt().fromArray(et),yt=new Jt().fromArray(J);function $(O,dt,Y,Q){const ht=new Uint8Array(4),ft=s.createTexture();s.bindTexture(O,ft),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Y;Vt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(dt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ft}const nt={};nt[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ct(s.DEPTH_TEST),r.setFunc(Li),Ot(!1),Gt(pa),ct(s.CULL_FACE),U(Ln);function ct(O){c[O]!==!0&&(s.enable(O),c[O]=!0)}function ot(O){c[O]!==!1&&(s.disable(O),c[O]=!1)}function Tt(O,dt){return u[O]!==dt?(s.bindFramebuffer(O,dt),u[O]=dt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function At(O,dt){let Y=h,Q=!1;if(O){Y=d.get(dt),Y===void 0&&(Y=[],d.set(dt,Y));const ht=O.textures;if(Y.length!==ht.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Vt=ht.length;ft<Vt;ft++)Y[ft]=s.COLOR_ATTACHMENT0+ft;Y.length=ht.length,Q=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Y)}function zt(O){return m!==O?(s.useProgram(O),m=O,!0):!1}const Zt={[Yn]:s.FUNC_ADD,[$c]:s.FUNC_SUBTRACT,[Kc]:s.FUNC_REVERSE_SUBTRACT};Zt[Zc]=s.MIN,Zt[Jc]=s.MAX;const Ht={[Qc]:s.ZERO,[th]:s.ONE,[eh]:s.SRC_COLOR,[Yr]:s.SRC_ALPHA,[ah]:s.SRC_ALPHA_SATURATE,[rh]:s.DST_COLOR,[ih]:s.DST_ALPHA,[nh]:s.ONE_MINUS_SRC_COLOR,[jr]:s.ONE_MINUS_SRC_ALPHA,[oh]:s.ONE_MINUS_DST_COLOR,[sh]:s.ONE_MINUS_DST_ALPHA,[lh]:s.CONSTANT_COLOR,[ch]:s.ONE_MINUS_CONSTANT_COLOR,[hh]:s.CONSTANT_ALPHA,[uh]:s.ONE_MINUS_CONSTANT_ALPHA};function U(O,dt,Y,Q,ht,ft,Vt,ce,Ae,Xt){if(O===Ln){g===!0&&(ot(s.BLEND),g=!1);return}if(g===!1&&(ct(s.BLEND),g=!0),O!==jc){if(O!==_||Xt!==F){if((f!==Yn||M!==Yn)&&(s.blendEquation(s.FUNC_ADD),f=Yn,M=Yn),Xt)switch(O){case bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ma:s.blendFunc(s.ONE,s.ONE);break;case ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _a:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ma:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _a:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,v=null,w=null,P=null,b.set(0,0,0),A=0,_=O,F=Xt}return}ht=ht||dt,ft=ft||Y,Vt=Vt||Q,(dt!==f||ht!==M)&&(s.blendEquationSeparate(Zt[dt],Zt[ht]),f=dt,M=ht),(Y!==p||Q!==v||ft!==w||Vt!==P)&&(s.blendFuncSeparate(Ht[Y],Ht[Q],Ht[ft],Ht[Vt]),p=Y,v=Q,w=ft,P=Vt),(ce.equals(b)===!1||Ae!==A)&&(s.blendColor(ce.r,ce.g,ce.b,Ae),b.copy(ce),A=Ae),_=O,F=!1}function Pe(O,dt){O.side===_n?ot(s.CULL_FACE):ct(s.CULL_FACE);let Y=O.side===Te;dt&&(Y=!Y),Ot(Y),O.blending===bi&&O.transparent===!1?U(Ln):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),i.setMask(O.colorWrite);const Q=O.stencilWrite;o.setTest(Q),Q&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(O){j!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),j=O)}function Gt(O){O!==qc?(ct(s.CULL_FACE),O!==x&&(O===pa?s.cullFace(s.BACK):O===Yc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ot(s.CULL_FACE),x=O}function Ct(O){O!==E&&(D&&s.lineWidth(O),E=O)}function ee(O,dt,Y){O?(ct(s.POLYGON_OFFSET_FILL),(V!==dt||I!==Y)&&(s.polygonOffset(dt,Y),V=dt,I=Y)):ot(s.POLYGON_OFFSET_FILL)}function It(O){O?ct(s.SCISSOR_TEST):ot(s.SCISSOR_TEST)}function C(O){O===void 0&&(O=s.TEXTURE0+L-1),N!==O&&(s.activeTexture(O),N=O)}function S(O,dt,Y){Y===void 0&&(N===null?Y=s.TEXTURE0+L-1:Y=N);let Q=q[Y];Q===void 0&&(Q={type:void 0,texture:void 0},q[Y]=Q),(Q.type!==O||Q.texture!==dt)&&(N!==Y&&(s.activeTexture(Y),N=Y),s.bindTexture(O,dt||nt[O]),Q.type=O,Q.texture=dt)}function k(){const O=q[N];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(O){tt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),tt.copy(O))}function vt(O){yt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),yt.copy(O))}function Bt(O,dt){let Y=l.get(dt);Y===void 0&&(Y=new WeakMap,l.set(dt,Y));let Q=Y.get(O);Q===void 0&&(Q=s.getUniformBlockIndex(dt,O.name),Y.set(O,Q))}function Dt(O,dt){const Q=l.get(dt).get(O);a.get(dt)!==Q&&(s.uniformBlockBinding(dt,Q,O.__bindingPointIndex),a.set(dt,Q))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},N=null,q={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,f=null,p=null,v=null,M=null,w=null,P=null,b=new Ft(0,0,0),A=0,F=!1,j=null,x=null,E=null,V=null,I=null,tt.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ct,disable:ot,bindFramebuffer:Tt,drawBuffers:At,useProgram:zt,setBlending:U,setMaterial:Pe,setFlipSided:Ot,setCullFace:Gt,setLineWidth:Ct,setPolygonOffset:ee,setScissorTest:It,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:it,texImage2D:_t,texImage3D:Pt,updateUBOMapping:Bt,uniformBlockBinding:Dt,texStorage2D:kt,texStorage3D:st,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Lt,viewport:vt,reset:Qt}}function al(s,t,e,n){const i=Zm(n);switch(e){case kl:return s*t;case Xl:return s*t;case ql:return s*t*2;case Yl:return s*t/i.components*i.byteLength;case Ho:return s*t/i.components*i.byteLength;case jl:return s*t*2/i.components*i.byteLength;case Vo:return s*t*2/i.components*i.byteLength;case Wl:return s*t*3/i.components*i.byteLength;case $e:return s*t*4/i.components*i.byteLength;case Go:return s*t*4/i.components*i.byteLength;case Hs:case Vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gs:case ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oo:case lo:return Math.max(s,16)*Math.max(t,8)/4;case ro:case ao:return Math.max(s,8)*Math.max(t,8)/2;case co:case ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case mo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case go:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case So:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ws:case Ao:case Ro:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $l:case Co:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Po:case Lo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zm(s){switch(s){case yn:case Hl:return{byteLength:1,components:1};case ss:case Vl:case ls:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case ei:case Oo:case vn:return{byteLength:4,components:1};case Gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Jm(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):Qs("canvas")}function _(C,S,k){let Z=1;const it=It(C);if((it.width>k||it.height>k)&&(Z=k/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(Z*it.width),St=Math.floor(Z*it.height);d===void 0&&(d=g(K,St));const lt=S?g(K,St):d;return lt.width=K,lt.height=St,lt.getContext("2d").drawImage(C,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+K+"x"+St+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function f(C){return C.generateMipmaps&&C.minFilter!==ze&&C.minFilter!==Ye}function p(C){s.generateMipmap(C)}function v(C,S,k,Z,it=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),S===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){const St=it?$s:$t.getTransfer(Z);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=St===se?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(C,S){let k;return C?S===null||S===ei||S===Ni?k=s.DEPTH24_STENCIL8:S===vn?k=s.DEPTH32F_STENCIL8:S===ss&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ei||S===Ni?k=s.DEPTH_COMPONENT24:S===vn?k=s.DEPTH_COMPONENT32F:S===ss&&(k=s.DEPTH_COMPONENT16),k}function w(C,S){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==Ye?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),A(S),S.isVideoTexture&&u.delete(S)}function b(C){const S=C.target;S.removeEventListener("dispose",b),j(S)}function A(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,Z=h.get(k);if(Z){const it=Z[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&F(C),Object.keys(Z).length===0&&h.delete(k)}n.remove(C)}function F(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const k=C.source,Z=h.get(k);delete Z[S.__cacheKey],o.memory.textures--}function j(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let it=0;it<S.__webglFramebuffer[Z].length;it++)s.deleteFramebuffer(S.__webglFramebuffer[Z][it]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let Z=0,it=k.length;Z<it;Z++){const K=n.get(k[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(C)}let x=0;function E(){x=0}function V(){const C=x;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),x+=1,C}function I(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function L(C,S){const k=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(k,C,S);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function D(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){yt(k,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function R(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){yt(k,C,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function G(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){$(k,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const N={[js]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[so]:s.MIRRORED_REPEAT},q={[ze]:s.NEAREST,[Mh]:s.NEAREST_MIPMAP_NEAREST,[ps]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[cr]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},et={[wh]:s.NEVER,[Ph]:s.ALWAYS,[Th]:s.LESS,[Zl]:s.LEQUAL,[bh]:s.EQUAL,[Ch]:s.GEQUAL,[Ah]:s.GREATER,[Rh]:s.NOTEQUAL};function J(C,S){if(S.type===vn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ye||S.magFilter===cr||S.magFilter===ps||S.magFilter===Zn||S.minFilter===Ye||S.minFilter===cr||S.minFilter===ps||S.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,N[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,N[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,N[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,q[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ze||S.minFilter!==ps&&S.minFilter!==Zn||S.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function tt(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const Z=S.source;let it=h.get(Z);it===void 0&&(it={},h.set(Z,it));const K=I(S);if(K!==C.__cacheKey){it[K]===void 0&&(it[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[K].usedTimes++;const St=it[C.__cacheKey];St!==void 0&&(it[C.__cacheKey].usedTimes--,St.usedTimes===0&&F(S)),C.__cacheKey=K,C.__webglTexture=it[K].texture}return k}function yt(C,S,k){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);const it=tt(C,S),K=S.source;e.bindTexture(Z,C.__webglTexture,s.TEXTURE0+k);const St=n.get(K);if(K.version!==St.__version||it===!0){e.activeTexture(s.TEXTURE0+k);const lt=$t.getPrimaries($t.workingColorSpace),mt=S.colorSpace===Pn?null:$t.getPrimaries(S.colorSpace),kt=S.colorSpace===Pn||lt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let st=_(S.image,!1,i.maxTextureSize);st=ee(S,st);const _t=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type);let Lt=v(S.internalFormat,_t,Pt,S.colorSpace,S.isVideoTexture);J(Z,S);let vt;const Bt=S.mipmaps,Dt=S.isVideoTexture!==!0,Qt=St.__version===void 0||it===!0,O=K.dataReady,dt=w(S,st);if(S.isDepthTexture)Lt=M(S.format===Ui,S.type),Qt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Lt,st.width,st.height,0,_t,Pt,null));else if(S.isDataTexture)if(Bt.length>0){Dt&&Qt&&e.texStorage2D(s.TEXTURE_2D,dt,Lt,Bt[0].width,Bt[0].height);for(let Y=0,Q=Bt.length;Y<Q;Y++)vt=Bt[Y],Dt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,Pt,vt.data):e.texImage2D(s.TEXTURE_2D,Y,Lt,vt.width,vt.height,0,_t,Pt,vt.data);S.generateMipmaps=!1}else Dt?(Qt&&e.texStorage2D(s.TEXTURE_2D,dt,Lt,st.width,st.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,_t,Pt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,st.width,st.height,0,_t,Pt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Dt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Lt,Bt[0].width,Bt[0].height,st.depth);for(let Y=0,Q=Bt.length;Y<Q;Y++)if(vt=Bt[Y],S.format!==$e)if(_t!==null)if(Dt){if(O)if(S.layerUpdates.size>0){const ht=al(vt.width,vt.height,S.format,S.type);for(const ft of S.layerUpdates){const Vt=vt.data.subarray(ft*ht/vt.data.BYTES_PER_ELEMENT,(ft+1)*ht/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ft,vt.width,vt.height,1,_t,Vt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,st.depth,_t,vt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Lt,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,st.depth,_t,Pt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Lt,vt.width,vt.height,st.depth,0,_t,Pt,vt.data)}else{Dt&&Qt&&e.texStorage2D(s.TEXTURE_2D,dt,Lt,Bt[0].width,Bt[0].height);for(let Y=0,Q=Bt.length;Y<Q;Y++)vt=Bt[Y],S.format!==$e?_t!==null?Dt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,Pt,vt.data):e.texImage2D(s.TEXTURE_2D,Y,Lt,vt.width,vt.height,0,_t,Pt,vt.data)}else if(S.isDataArrayTexture)if(Dt){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Lt,st.width,st.height,st.depth),O)if(S.layerUpdates.size>0){const Y=al(st.width,st.height,S.format,S.type);for(const Q of S.layerUpdates){const ht=st.data.subarray(Q*Y/st.data.BYTES_PER_ELEMENT,(Q+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,_t,Pt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Pt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,_t,Pt,st.data);else if(S.isData3DTexture)Dt?(Qt&&e.texStorage3D(s.TEXTURE_3D,dt,Lt,st.width,st.height,st.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Pt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,_t,Pt,st.data);else if(S.isFramebufferTexture){if(Qt)if(Dt)e.texStorage2D(s.TEXTURE_2D,dt,Lt,st.width,st.height);else{let Y=st.width,Q=st.height;for(let ht=0;ht<dt;ht++)e.texImage2D(s.TEXTURE_2D,ht,Lt,Y,Q,0,_t,Pt,null),Y>>=1,Q>>=1}}else if(Bt.length>0){if(Dt&&Qt){const Y=It(Bt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Lt,Y.width,Y.height)}for(let Y=0,Q=Bt.length;Y<Q;Y++)vt=Bt[Y],Dt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,_t,Pt,vt):e.texImage2D(s.TEXTURE_2D,Y,Lt,_t,Pt,vt);S.generateMipmaps=!1}else if(Dt){if(Qt){const Y=It(st);e.texStorage2D(s.TEXTURE_2D,dt,Lt,Y.width,Y.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Pt,st)}else e.texImage2D(s.TEXTURE_2D,0,Lt,_t,Pt,st);f(S)&&p(Z),St.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,k){if(S.image.length!==6)return;const Z=tt(C,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const K=n.get(it);if(it.version!==K.__version||Z===!0){e.activeTexture(s.TEXTURE0+k);const St=$t.getPrimaries($t.workingColorSpace),lt=S.colorSpace===Pn?null:$t.getPrimaries(S.colorSpace),mt=S.colorSpace===Pn||St===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const kt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!kt&&!st?_t[Q]=_(S.image[Q],!0,i.maxCubemapSize):_t[Q]=st?S.image[Q].image:S.image[Q],_t[Q]=ee(S,_t[Q]);const Pt=_t[0],Lt=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),Bt=v(S.internalFormat,Lt,vt,S.colorSpace),Dt=S.isVideoTexture!==!0,Qt=K.__version===void 0||Z===!0,O=it.dataReady;let dt=w(S,Pt);J(s.TEXTURE_CUBE_MAP,S);let Y;if(kt){Dt&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Bt,Pt.width,Pt.height);for(let Q=0;Q<6;Q++){Y=_t[Q].mipmaps;for(let ht=0;ht<Y.length;ht++){const ft=Y[ht];S.format!==$e?Lt!==null?Dt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,Bt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,0,0,ft.width,ft.height,Lt,vt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,Bt,ft.width,ft.height,0,Lt,vt,ft.data)}}}else{if(Y=S.mipmaps,Dt&&Qt){Y.length>0&&dt++;const Q=It(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Bt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Dt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Lt,vt,_t[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Bt,_t[Q].width,_t[Q].height,0,Lt,vt,_t[Q].data);for(let ht=0;ht<Y.length;ht++){const Vt=Y[ht].image[Q].image;Dt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,0,0,Vt.width,Vt.height,Lt,vt,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,Bt,Vt.width,Vt.height,0,Lt,vt,Vt.data)}}else{Dt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,vt,_t[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Bt,Lt,vt,_t[Q]);for(let ht=0;ht<Y.length;ht++){const ft=Y[ht];Dt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,0,0,Lt,vt,ft.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,Bt,Lt,vt,ft.image[Q])}}}f(S)&&p(s.TEXTURE_CUBE_MAP),K.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function nt(C,S,k,Z,it,K){const St=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),mt=v(k.internalFormat,St,lt,k.colorSpace);if(!n.get(S).__hasExternalTextures){const st=Math.max(1,S.width>>K),_t=Math.max(1,S.height>>K);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,K,mt,st,_t,S.depth,0,St,lt,null):e.texImage2D(it,K,mt,st,_t,0,St,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Gt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,it,n.get(k).__webglTexture,0,Ot(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,it,n.get(k).__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(C,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const Z=S.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,K=M(S.stencilBuffer,it),St=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Ot(S);Gt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,K,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,C)}else{const Z=S.textures;for(let it=0;it<Z.length;it++){const K=Z[it],St=r.convert(K.format,K.colorSpace),lt=r.convert(K.type),mt=v(K.internalFormat,St,lt,K.colorSpace),kt=Ot(S);k&&Gt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,mt,S.width,S.height):Gt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,mt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,it=Ot(S);if(S.depthTexture.format===Ai)Gt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Ui)Gt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Tt(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ot(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),ct(S.__webglDepthbuffer[Z],C,!1);else{const it=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ct(S.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(C,S,k){const Z=n.get(C);S!==void 0&&nt(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Tt(C)}function zt(C){const S=C.texture,k=n.get(C),Z=n.get(S);C.addEventListener("dispose",b);const it=C.textures,K=C.isWebGLCubeRenderTarget===!0,St=it.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let mt=0;mt<S.mipmaps.length;mt++)k.__webglFramebuffer[lt][mt]=s.createFramebuffer()}else k.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)k.__webglFramebuffer[lt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(St)for(let lt=0,mt=it.length;lt<mt;lt++){const kt=n.get(it[lt]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Gt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<it.length;lt++){const mt=it[lt];k.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const kt=r.convert(mt.format,mt.colorSpace),st=r.convert(mt.type),_t=v(mt.internalFormat,kt,st,mt.colorSpace,C.isXRRenderTarget===!0),Pt=Ot(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),J(s.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)nt(k.__webglFramebuffer[lt][mt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else nt(k.__webglFramebuffer[lt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);f(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let lt=0,mt=it.length;lt<mt;lt++){const kt=it[lt],st=n.get(kt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),J(s.TEXTURE_2D,kt),nt(k.__webglFramebuffer,C,kt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),f(kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),J(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)nt(k.__webglFramebuffer[mt],C,S,s.COLOR_ATTACHMENT0,lt,mt);else nt(k.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,lt,0);f(S)&&p(lt),e.unbindTexture()}C.depthBuffer&&Tt(C)}function Zt(C){const S=C.textures;for(let k=0,Z=S.length;k<Z;k++){const it=S[k];if(f(it)){const K=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=n.get(it).__webglTexture;e.bindTexture(K,St),p(K),e.unbindTexture()}}}const Ht=[],U=[];function Pe(C){if(C.samples>0){if(Gt(C)===!1){const S=C.textures,k=C.width,Z=C.height;let it=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(C),lt=S.length>1;if(lt)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const kt=n.get(S[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,k,Z,0,0,k,Z,it,s.NEAREST),l===!0&&(Ht.length=0,U.length=0,Ht.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(K),U.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const kt=n.get(S[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ot(C){return Math.min(i.maxSamples,C.samples)}function Gt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ee(C,S){const k=C.colorSpace,Z=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Un&&k!==Pn&&($t.getTransfer(k)===se?(Z!==$e||it!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=L,this.setTexture2DArray=D,this.setTexture3D=R,this.setTextureCube=G,this.rebindTextures=At,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Gt}function Qm(s,t){function e(n,i=Pn){let r;const o=$t.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===Bo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return s.BYTE;if(n===Vl)return s.SHORT;if(n===ss)return s.UNSIGNED_SHORT;if(n===Oo)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===ls)return s.HALF_FLOAT;if(n===kl)return s.ALPHA;if(n===Wl)return s.RGB;if(n===$e)return s.RGBA;if(n===Xl)return s.LUMINANCE;if(n===ql)return s.LUMINANCE_ALPHA;if(n===Ai)return s.DEPTH_COMPONENT;if(n===Ui)return s.DEPTH_STENCIL;if(n===Yl)return s.RED;if(n===Ho)return s.RED_INTEGER;if(n===jl)return s.RG;if(n===Vo)return s.RG_INTEGER;if(n===Go)return s.RGBA_INTEGER;if(n===Hs||n===Vs||n===Gs||n===ks)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===oo||n===ao||n===lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===co||n===ho)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===yo||n===So||n===Eo||n===wo||n===To||n===bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===po)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===go)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===Ao||n===Ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ws)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Co||n===Po||n===Lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class tg extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ji extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
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

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new be,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends Bi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const _=new sg,f=e.getContextAttributes();let p=null,v=null;const M=[],w=[],P=new Wt;let b=null;const A=new Ue;A.layers.enable(1),A.viewport=new Jt;const F=new Ue;F.layers.enable(2),F.viewport=new Jt;const j=[A,F],x=new tg;x.layers.enable(1),x.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=M[$];return nt===void 0&&(nt=new Or,M[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=M[$];return nt===void 0&&(nt=new Or,M[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=M[$];return nt===void 0&&(nt=new Or,M[$]=nt),nt.getHandSpace()};function I($){const nt=w.indexOf($.inputSource);if(nt===-1)return;const ct=M[nt];ct!==void 0&&(ct.update($.inputSource,$.frame,c||o),ct.dispatchEvent({type:$.type,data:$.inputSource}))}function L(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",D);for(let $=0;$<M.length;$++){const nt=w[$];nt!==null&&(w[$]=null,M[$].disconnect(nt))}E=null,V=null,_.reset(),t.setRenderTarget(p),m=null,h=null,d=null,i=null,v=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",L),i.addEventListener("inputsourceschange",D),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const nt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new ni(m.framebufferWidth,m.framebufferHeight,{format:$e,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let nt=null,ct=null,ot=null;f.depth&&(ot=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=f.stencil?Ui:Ai,ct=f.stencil?Ni:ei);const Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(Tt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new ni(h.textureWidth,h.textureHeight,{format:$e,type:yn,depthTexture:new hc(h.textureWidth,h.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D($){for(let nt=0;nt<$.removed.length;nt++){const ct=$.removed[nt],ot=w.indexOf(ct);ot>=0&&(w[ot]=null,M[ot].disconnect(ct))}for(let nt=0;nt<$.added.length;nt++){const ct=$.added[nt];let ot=w.indexOf(ct);if(ot===-1){for(let At=0;At<M.length;At++)if(At>=w.length){w.push(ct),ot=At;break}else if(w[At]===null){w[At]=ct,ot=At;break}if(ot===-1)break}const Tt=M[ot];Tt&&Tt.connect(ct)}}const R=new H,G=new H;function N($,nt,ct){R.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(ct.matrixWorld);const ot=R.distanceTo(G),Tt=nt.projectionMatrix.elements,At=ct.projectionMatrix.elements,zt=Tt[14]/(Tt[10]-1),Zt=Tt[14]/(Tt[10]+1),Ht=(Tt[9]+1)/Tt[5],U=(Tt[9]-1)/Tt[5],Pe=(Tt[8]-1)/Tt[0],Ot=(At[8]+1)/At[0],Gt=zt*Pe,Ct=zt*Ot,ee=ot/(-Pe+Ot),It=ee*-Pe;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const C=zt+ee,S=Zt+ee,k=Gt-It,Z=Ct+(ot-It),it=Ht*Zt/S*C,K=U*Zt/S*C;$.projectionMatrix.makePerspective(k,Z,it,K,C,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function q($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let nt=$.near,ct=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),x.near=F.near=A.near=nt,x.far=F.far=A.far=ct,(E!==x.near||V!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,V=x.far);const ot=$.parent,Tt=x.cameras;q(x,ot);for(let At=0;At<Tt.length;At++)q(Tt[At],ot);Tt.length===2?N(x,A,F):x.projectionMatrix.copy(A.projectionMatrix),et($,x,ot)};function et($,nt,ct){ct===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(ct.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let J=null;function tt($,nt){if(u=nt.getViewerPose(c||o),g=nt,u!==null){const ct=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let ot=!1;ct.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let At=0;At<ct.length;At++){const zt=ct[At];let Zt=null;if(m!==null)Zt=m.getViewport(zt);else{const U=d.getViewSubImage(h,zt);Zt=U.viewport,At===0&&(t.setRenderTargetTextures(v,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(v))}let Ht=j[At];Ht===void 0&&(Ht=new Ue,Ht.layers.enable(At),Ht.viewport=new Jt,j[At]=Ht),Ht.matrix.fromArray(zt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(zt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),At===0&&(x.matrix.copy(Ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(Ht)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const At=d.getDepthInformation(ct[0]);At&&At.isValid&&At.texture&&_.init(t,At,i.renderState)}}for(let ct=0;ct<M.length;ct++){const ot=w[ct],Tt=M[ct];ot!==null&&Tt!==void 0&&Tt.update(ot,nt,c||o)}J&&J($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const yt=new lc;yt.setAnimationLoop(tt),this.setAnimationLoop=function($){J=$},this.dispose=function(){}}}const kn=new sn,og=new re;function ag(s,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,rc(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,v,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,w)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,v,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Te&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Te&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,w=v.envMapRotation;M&&(f.envMap.value=M,kn.copy(w),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),f.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(kn)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,v,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*v,f.scale.value=M*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,v){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Te&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const v=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lg(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=i[v.id];w===void 0&&(g(v),w=u(v),i[v.id]=w,v.addEventListener("dispose",f));const P=M.program;n.updateUBOMapping(v,P);const b=t.render.frame;r[v.id]!==b&&(h(v),r[v.id]=b)}function u(v){const M=d();v.__bindingPointIndex=M;const w=s.createBuffer(),P=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const M=i[v.id],w=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let b=0,A=w.length;b<A;b++){const F=Array.isArray(w[b])?w[b]:[w[b]];for(let j=0,x=F.length;j<x;j++){const E=F[j];if(m(E,b,j,P)===!0){const V=E.__offset,I=Array.isArray(E.value)?E.value:[E.value];let L=0;for(let D=0;D<I.length;D++){const R=I[D],G=_(R);typeof R=="number"||typeof R=="boolean"?(E.__data[0]=R,s.bufferSubData(s.UNIFORM_BUFFER,V+L,E.__data)):R.isMatrix3?(E.__data[0]=R.elements[0],E.__data[1]=R.elements[1],E.__data[2]=R.elements[2],E.__data[3]=0,E.__data[4]=R.elements[3],E.__data[5]=R.elements[4],E.__data[6]=R.elements[5],E.__data[7]=0,E.__data[8]=R.elements[6],E.__data[9]=R.elements[7],E.__data[10]=R.elements[8],E.__data[11]=0):(R.toArray(E.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,M,w,P){const b=v.value,A=M+"_"+w;if(P[A]===void 0)return typeof b=="number"||typeof b=="boolean"?P[A]=b:P[A]=b.clone(),!0;{const F=P[A];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return P[A]=b,!0}else if(F.equals(b)===!1)return F.copy(b),!0}return!1}function g(v){const M=v.uniforms;let w=0;const P=16;for(let A=0,F=M.length;A<F;A++){const j=Array.isArray(M[A])?M[A]:[M[A]];for(let x=0,E=j.length;x<E;x++){const V=j[x],I=Array.isArray(V.value)?V.value:[V.value];for(let L=0,D=I.length;L<D;L++){const R=I[L],G=_(R),N=w%P,q=N%G.boundary,et=N+q;w+=q,et!==0&&P-et<G.storage&&(w+=P-et),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=G.storage}}}const b=w%P;return b>0&&(w+=P-b),v.__size=w,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function f(v){const M=v.target;M.removeEventListener("dispose",f);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class cg{constructor(t={}){const{canvas:e=jh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=In,this.toneMappingExposure=1;const M=this;let w=!1,P=0,b=0,A=null,F=-1,j=null;const x=new Jt,E=new Jt;let V=null;const I=new Ft(0);let L=0,D=e.width,R=e.height,G=1,N=null,q=null;const et=new Jt(0,0,D,R),J=new Jt(0,0,D,R);let tt=!1;const yt=new Yo;let $=!1,nt=!1;const ct=new re,ot=new re,Tt=new H,At=new Jt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Ht(){return A===null?G:1}let U=n;function Pe(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),U===null){const B="webgl2";if(U=Pe(B,T),U===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ot,Gt,Ct,ee,It,C,S,k,Z,it,K,St,lt,mt,kt,st,_t,Pt,Lt,vt,Bt,Dt,Qt,O;function dt(){Ot=new pp(U),Ot.init(),Dt=new Qm(U,Ot),Gt=new lp(U,Ot,t,Dt),Ct=new Km(U),Gt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),ee=new _p(U),It=new Um,C=new Jm(U,Ot,Ct,It,Gt,Dt,ee),S=new hp(M),k=new fp(M),Z=new Eu(U),Qt=new op(U,Z),it=new mp(U,Z,ee,Qt),K=new xp(U,it,Z,ee),Lt=new vp(U,Gt,C),st=new cp(It),St=new Nm(M,S,k,Ot,Gt,Qt,st),lt=new ag(M,It),mt=new Om,kt=new km(Ot),Pt=new rp(M,S,k,Ct,K,h,l),_t=new jm(M,K,Gt),O=new lg(U,ee,Gt,Ct),vt=new ap(U,Ot,ee),Bt=new gp(U,Ot,ee),ee.programs=St.programs,M.capabilities=Gt,M.extensions=Ot,M.properties=It,M.renderLists=mt,M.shadowMap=_t,M.state=Ct,M.info=ee}dt();const Y=new rg(M,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(D,R,!1))},this.getSize=function(T){return T.set(D,R)},this.setSize=function(T,B,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,R=B,e.width=Math.floor(T*G),e.height=Math.floor(B*G),W===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(D*G,R*G).floor()},this.setDrawingBufferSize=function(T,B,W){D=T,R=B,G=W,e.width=Math.floor(T*W),e.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,B,W,X){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,B,W,X),Ct.viewport(x.copy(et).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,B,W,X){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,B,W,X),Ct.scissor(E.copy(J).multiplyScalar(G).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){Ct.setScissorTest(tt=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,B=!0,W=!0){let X=0;if(T){let z=!1;if(A!==null){const rt=A.texture.format;z=rt===Go||rt===Vo||rt===Ho}if(z){const rt=A.texture.type,ut=rt===yn||rt===ei||rt===ss||rt===Ni||rt===Bo||rt===zo,xt=Pt.getClearColor(),Mt=Pt.getClearAlpha(),bt=xt.r,Rt=xt.g,Et=xt.b;ut?(m[0]=bt,m[1]=Rt,m[2]=Et,m[3]=Mt,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=bt,g[1]=Rt,g[2]=Et,g[3]=Mt,U.clearBufferiv(U.COLOR,0,g))}else X|=U.COLOR_BUFFER_BIT}B&&(X|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),mt.dispose(),kt.dispose(),It.dispose(),S.dispose(),k.dispose(),K.dispose(),Qt.dispose(),O.dispose(),St.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",oa),Y.removeEventListener("sessionend",aa),On.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=ee.autoReset,B=_t.enabled,W=_t.autoUpdate,X=_t.needsUpdate,z=_t.type;dt(),ee.autoReset=T,_t.enabled=B,_t.autoUpdate=W,_t.needsUpdate=X,_t.type=z}function ft(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vt(T){const B=T.target;B.removeEventListener("dispose",Vt),ce(B)}function ce(T){Ae(T),It.remove(T)}function Ae(T){const B=It.get(T).programs;B!==void 0&&(B.forEach(function(W){St.releaseProgram(W)}),T.isShaderMaterial&&St.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,X,z,rt){B===null&&(B=zt);const ut=z.isMesh&&z.matrixWorld.determinant()<0,xt=Vc(T,B,W,X,z);Ct.setMaterial(X,ut);let Mt=W.index,bt=1;if(X.wireframe===!0){if(Mt=it.getWireframeAttribute(W),Mt===void 0)return;bt=2}const Rt=W.drawRange,Et=W.attributes.position;let Kt=Rt.start*bt,ne=(Rt.start+Rt.count)*bt;rt!==null&&(Kt=Math.max(Kt,rt.start*bt),ne=Math.min(ne,(rt.start+rt.count)*bt)),Mt!==null?(Kt=Math.max(Kt,0),ne=Math.min(ne,Mt.count)):Et!=null&&(Kt=Math.max(Kt,0),ne=Math.min(ne,Et.count));const ae=ne-Kt;if(ae<0||ae===1/0)return;Qt.setup(z,X,xt,W,Mt);let Le,Yt=vt;if(Mt!==null&&(Le=Z.get(Mt),Yt=Bt,Yt.setIndex(Le)),z.isMesh)X.wireframe===!0?(Ct.setLineWidth(X.wireframeLinewidth*Ht()),Yt.setMode(U.LINES)):Yt.setMode(U.TRIANGLES);else if(z.isLine){let wt=X.linewidth;wt===void 0&&(wt=1),Ct.setLineWidth(wt*Ht()),z.isLineSegments?Yt.setMode(U.LINES):z.isLineLoop?Yt.setMode(U.LINE_LOOP):Yt.setMode(U.LINE_STRIP)}else z.isPoints?Yt.setMode(U.POINTS):z.isSprite&&Yt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Yt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Yt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const wt=z._multiDrawStarts,_e=z._multiDrawCounts,jt=z._multiDrawCount,Ve=Mt?Z.get(Mt).bytesPerElement:1,ri=It.get(X).currentProgram.getUniforms();for(let Ie=0;Ie<jt;Ie++)ri.setValue(U,"_gl_DrawID",Ie),Yt.render(wt[Ie]/Ve,_e[Ie])}else if(z.isInstancedMesh)Yt.renderInstances(Kt,ae,z.count);else if(W.isInstancedBufferGeometry){const wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,wt);Yt.renderInstances(Kt,ae,_e)}else Yt.render(Kt,ae)};function Xt(T,B,W){T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=Te,T.needsUpdate=!0,fs(T,B,W),T.side=Dn,T.needsUpdate=!0,fs(T,B,W),T.side=_n):fs(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),f=kt.get(W),f.init(B),v.push(f),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let ut=0;ut<rt.length;ut++){const xt=rt[ut];Xt(xt,W,z),X.add(xt)}else Xt(rt,W,z),X.add(rt)}),v.pop(),f=null,X},this.compileAsync=function(T,B,W=null){const X=this.compile(T,B,W);return new Promise(z=>{function rt(){if(X.forEach(function(ut){It.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){z(T);return}setTimeout(rt,10)}Ot.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Re=null;function rn(T){Re&&Re(T)}function oa(){On.stop()}function aa(){On.start()}const On=new lc;On.setAnimationLoop(rn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(T){Re=T,Y.setAnimationLoop(T),T===null?On.stop():On.start()},Y.addEventListener("sessionstart",oa),Y.addEventListener("sessionend",aa),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,A),f=kt.get(T,v.length),f.init(B),v.push(f),ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),yt.setFromProjectionMatrix(ot),nt=this.localClippingEnabled,$=st.init(this.clippingPlanes,nt),_=mt.get(T,p.length),_.init(),p.push(_),Y.enabled===!0&&Y.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&rr(rt,B,-1/0,M.sortObjects)}rr(T,B,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(N,q),Zt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Zt&&Pt.addToRenderList(_,T),this.info.render.frame++,$===!0&&st.beginShadows();const W=f.state.shadowsArray;_t.render(W,T,B),$===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,z=_.transmissive;if(f.setupLights(),B.isArrayCamera){const rt=B.cameras;if(z.length>0)for(let ut=0,xt=rt.length;ut<xt;ut++){const Mt=rt[ut];ca(X,z,T,Mt)}Zt&&Pt.render(T);for(let ut=0,xt=rt.length;ut<xt;ut++){const Mt=rt[ut];la(_,T,Mt,Mt.viewport)}}else z.length>0&&ca(X,z,T,B),Zt&&Pt.render(T),la(_,T,B);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(M,T,B),Qt.resetDefaultState(),F=-1,j=null,v.pop(),v.length>0?(f=v[v.length-1],$===!0&&st.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function rr(T,B,W,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||yt.intersectsSprite(T)){X&&At.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ot);const ut=K.update(T),xt=T.material;xt.visible&&_.push(T,ut,xt,W,At.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||yt.intersectsObject(T))){const ut=K.update(T),xt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),At.copy(T.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),At.copy(ut.boundingSphere.center)),At.applyMatrix4(T.matrixWorld).applyMatrix4(ot)),Array.isArray(xt)){const Mt=ut.groups;for(let bt=0,Rt=Mt.length;bt<Rt;bt++){const Et=Mt[bt],Kt=xt[Et.materialIndex];Kt&&Kt.visible&&_.push(T,ut,Kt,W,At.z,Et)}}else xt.visible&&_.push(T,ut,xt,W,At.z,null)}}const rt=T.children;for(let ut=0,xt=rt.length;ut<xt;ut++)rr(rt[ut],B,W,X)}function la(T,B,W,X){const z=T.opaque,rt=T.transmissive,ut=T.transparent;f.setupLightsView(W),$===!0&&st.setGlobalState(M.clippingPlanes,W),X&&Ct.viewport(x.copy(X)),z.length>0&&ds(z,B,W),rt.length>0&&ds(rt,B,W),ut.length>0&&ds(ut,B,W),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ca(T,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new ni(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?ls:yn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const rt=f.state.transmissionRenderTarget[X.id],ut=X.viewport||x;rt.setSize(ut.z,ut.w);const xt=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(I),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear(),Zt&&Pt.render(W);const Mt=M.toneMapping;M.toneMapping=In;const bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),$===!0&&st.setGlobalState(M.clippingPlanes,X),ds(T,W,X),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Et=0,Kt=B.length;Et<Kt;Et++){const ne=B[Et],ae=ne.object,Le=ne.geometry,Yt=ne.material,wt=ne.group;if(Yt.side===_n&&ae.layers.test(X.layers)){const _e=Yt.side;Yt.side=Te,Yt.needsUpdate=!0,ha(ae,W,X,Le,Yt,wt),Yt.side=_e,Yt.needsUpdate=!0,Rt=!0}}Rt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}M.setRenderTarget(xt),M.setClearColor(I,L),bt!==void 0&&(X.viewport=bt),M.toneMapping=Mt}function ds(T,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,rt=T.length;z<rt;z++){const ut=T[z],xt=ut.object,Mt=ut.geometry,bt=X===null?ut.material:X,Rt=ut.group;xt.layers.test(W.layers)&&ha(xt,B,W,Mt,bt,Rt)}}function ha(T,B,W,X,z,rt){T.onBeforeRender(M,B,W,X,z,rt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(M,B,W,X,T,rt),z.transparent===!0&&z.side===_n&&z.forceSinglePass===!1?(z.side=Te,z.needsUpdate=!0,M.renderBufferDirect(W,B,X,z,T,rt),z.side=Dn,z.needsUpdate=!0,M.renderBufferDirect(W,B,X,z,T,rt),z.side=_n):M.renderBufferDirect(W,B,X,z,T,rt),T.onAfterRender(M,B,W,X,z,rt)}function fs(T,B,W){B.isScene!==!0&&(B=zt);const X=It.get(T),z=f.state.lights,rt=f.state.shadowsArray,ut=z.state.version,xt=St.getParameters(T,z.state,rt,B,W),Mt=St.getProgramCacheKey(xt);let bt=X.programs;X.environment=T.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(T.isMeshStandardMaterial?k:S).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,bt===void 0&&(T.addEventListener("dispose",Vt),bt=new Map,X.programs=bt);let Rt=bt.get(Mt);if(Rt!==void 0){if(X.currentProgram===Rt&&X.lightsStateVersion===ut)return da(T,xt),Rt}else xt.uniforms=St.getUniforms(T),T.onBeforeCompile(xt,M),Rt=St.acquireProgram(xt,Mt),bt.set(Mt,Rt),X.uniforms=xt.uniforms;const Et=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Et.clippingPlanes=st.uniform),da(T,xt),X.needsLights=kc(T),X.lightsStateVersion=ut,X.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.directionalShadowMap.value=z.state.directionalShadowMap,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotShadowMap.value=z.state.spotShadowMap,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMap.value=z.state.pointShadowMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Rt,X.uniformsList=null,Rt}function ua(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=qs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function da(T,B){const W=It.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Vc(T,B,W,X,z){B.isScene!==!0&&(B=zt),C.resetTextureUnits();const rt=B.fog,ut=X.isMeshStandardMaterial?B.environment:null,xt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Un,Mt=(X.isMeshStandardMaterial?k:S).get(X.envMap||ut),bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Rt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Et=!!W.morphAttributes.position,Kt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color;let ae=In;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ae=M.toneMapping);const Le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=Le!==void 0?Le.length:0,wt=It.get(X),_e=f.state.lights;if($===!0&&(nt===!0||T!==j)){const Oe=T===j&&X.id===F;st.setState(X,T,Oe)}let jt=!1;X.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==_e.state.version||wt.outputColorSpace!==xt||z.isBatchedMesh&&wt.batching===!1||!z.isBatchedMesh&&wt.batching===!0||z.isBatchedMesh&&wt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&wt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&wt.instancing===!1||!z.isInstancedMesh&&wt.instancing===!0||z.isSkinnedMesh&&wt.skinning===!1||!z.isSkinnedMesh&&wt.skinning===!0||z.isInstancedMesh&&wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&wt.instancingMorph===!1&&z.morphTexture!==null||wt.envMap!==Mt||X.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==st.numPlanes||wt.numIntersection!==st.numIntersection)||wt.vertexAlphas!==bt||wt.vertexTangents!==Rt||wt.morphTargets!==Et||wt.morphNormals!==Kt||wt.morphColors!==ne||wt.toneMapping!==ae||wt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,wt.__version=X.version);let Ve=wt.currentProgram;jt===!0&&(Ve=fs(X,B,z));let ri=!1,Ie=!1,or=!1;const le=Ve.getUniforms(),Sn=wt.uniforms;if(Ct.useProgram(Ve.program)&&(ri=!0,Ie=!0,or=!0),X.id!==F&&(F=X.id,Ie=!0),ri||j!==T){Gt.reverseDepthBuffer?(ct.copy(T.projectionMatrix),Kh(ct),Zh(ct),le.setValue(U,"projectionMatrix",ct)):le.setValue(U,"projectionMatrix",T.projectionMatrix),le.setValue(U,"viewMatrix",T.matrixWorldInverse);const Oe=le.map.cameraPosition;Oe!==void 0&&Oe.setValue(U,Tt.setFromMatrixPosition(T.matrixWorld)),Gt.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,Ie=!0,or=!0)}if(z.isSkinnedMesh){le.setOptional(U,z,"bindMatrix"),le.setOptional(U,z,"bindMatrixInverse");const Oe=z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),le.setValue(U,"boneTexture",Oe.boneTexture,C))}z.isBatchedMesh&&(le.setOptional(U,z,"batchingTexture"),le.setValue(U,"batchingTexture",z._matricesTexture,C),le.setOptional(U,z,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",z._indirectTexture,C),le.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",z._colorsTexture,C));const ar=W.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&Lt.update(z,W,Ve),(Ie||wt.receiveShadow!==z.receiveShadow)&&(wt.receiveShadow=z.receiveShadow,le.setValue(U,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Sn.envMap.value=Mt,Sn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Sn.envMapIntensity.value=B.environmentIntensity),Ie&&(le.setValue(U,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&Gc(Sn,or),rt&&X.fog===!0&&lt.refreshFogUniforms(Sn,rt),lt.refreshMaterialUniforms(Sn,X,G,R,f.state.transmissionRenderTarget[T.id]),qs.upload(U,ua(wt),Sn,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qs.upload(U,ua(wt),Sn,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(U,"center",z.center),le.setValue(U,"modelViewMatrix",z.modelViewMatrix),le.setValue(U,"normalMatrix",z.normalMatrix),le.setValue(U,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Oe=X.uniformsGroups;for(let lr=0,Wc=Oe.length;lr<Wc;lr++){const fa=Oe[lr];O.update(fa,Ve),O.bind(fa,Ve)}}return Ve}function Gc(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function kc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,B,W){It.get(T.texture).__webglTexture=B,It.get(T.depthTexture).__webglTexture=W;const X=It.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const W=It.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,W=0){A=T,P=B,b=W;let X=!0,z=null,rt=!1,ut=!1;if(T){const Mt=It.get(T);if(Mt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Mt.__hasExternalTextures)C.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Et=T.depthTexture;if(Mt.__boundDepthTexture!==Et){if(Et!==null&&It.has(Et)&&(T.width!==Et.image.width||T.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const bt=T.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ut=!0);const Rt=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Rt[B])?z=Rt[B][W]:z=Rt[B],rt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?z=It.get(T).__webglMultisampledFramebuffer:Array.isArray(Rt)?z=Rt[W]:z=Rt,x.copy(T.viewport),E.copy(T.scissor),V=T.scissorTest}else x.copy(et).multiplyScalar(G).floor(),E.copy(J).multiplyScalar(G).floor(),V=tt;if(Ct.bindFramebuffer(U.FRAMEBUFFER,z)&&X&&Ct.drawBuffers(T,z),Ct.viewport(x),Ct.scissor(E),Ct.setScissorTest(V),rt){const Mt=It.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,W)}else if(ut){const Mt=It.get(T.texture),bt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,bt)}F=-1},this.readRenderTargetPixels=function(T,B,W,X,z,rt,ut){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Ct.bindFramebuffer(U.FRAMEBUFFER,xt);try{const Mt=T.texture,bt=Mt.format,Rt=Mt.type;if(!Gt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&W>=0&&W<=T.height-z&&U.readPixels(B,W,X,z,Dt.convert(bt),Dt.convert(Rt),rt)}finally{const Mt=A!==null?It.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(T,B,W,X,z,rt,ut){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const Mt=T.texture,bt=Mt.format,Rt=Mt.type;if(!Gt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-X&&W>=0&&W<=T.height-z){Ct.bindFramebuffer(U.FRAMEBUFFER,xt);const Et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.bufferData(U.PIXEL_PACK_BUFFER,rt.byteLength,U.STREAM_READ),U.readPixels(B,W,X,z,Dt.convert(bt),Dt.convert(Rt),0);const Kt=A!==null?It.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,Kt);const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $h(U,ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,rt),U.deleteBuffer(Et),U.deleteSync(ne),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,W=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(T.image.width*X),rt=Math.floor(T.image.height*X),ut=B!==null?B.x:0,xt=B!==null?B.y:0;C.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ut,xt,z,rt),Ct.unbindTexture()},this.copyTextureToTexture=function(T,B,W=null,X=null,z=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let rt,ut,xt,Mt,bt,Rt;W!==null?(rt=W.max.x-W.min.x,ut=W.max.y-W.min.y,xt=W.min.x,Mt=W.min.y):(rt=T.image.width,ut=T.image.height,xt=0,Mt=0),X!==null?(bt=X.x,Rt=X.y):(bt=0,Rt=0);const Et=Dt.convert(B.format),Kt=Dt.convert(B.type);C.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ne=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Le=U.getParameter(U.UNPACK_SKIP_PIXELS),Yt=U.getParameter(U.UNPACK_SKIP_ROWS),wt=U.getParameter(U.UNPACK_SKIP_IMAGES),_e=T.isCompressedTexture?T.mipmaps[z]:T.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mt),T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,bt,Rt,rt,ut,Et,Kt,_e.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,bt,Rt,_e.width,_e.height,Et,_e.data):U.texSubImage2D(U.TEXTURE_2D,z,bt,Rt,rt,ut,Et,Kt,_e),U.pixelStorei(U.UNPACK_ROW_LENGTH,ne),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,wt),z===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,B,W=null,X=null,z=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0);let rt,ut,xt,Mt,bt,Rt,Et,Kt,ne;const ae=T.isCompressedTexture?T.mipmaps[z]:T.image;W!==null?(rt=W.max.x-W.min.x,ut=W.max.y-W.min.y,xt=W.max.z-W.min.z,Mt=W.min.x,bt=W.min.y,Rt=W.min.z):(rt=ae.width,ut=ae.height,xt=ae.depth,Mt=0,bt=0,Rt=0),X!==null?(Et=X.x,Kt=X.y,ne=X.z):(Et=0,Kt=0,ne=0);const Le=Dt.convert(B.format),Yt=Dt.convert(B.type);let wt;if(B.isData3DTexture)C.setTexture3D(B,0),wt=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)C.setTexture2DArray(B,0),wt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const _e=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ve=U.getParameter(U.UNPACK_SKIP_PIXELS),ri=U.getParameter(U.UNPACK_SKIP_ROWS),Ie=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Rt),T.isDataTexture||T.isData3DTexture?U.texSubImage3D(wt,z,Et,Kt,ne,rt,ut,xt,Le,Yt,ae.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,z,Et,Kt,ne,rt,ut,xt,Le,ae.data):U.texSubImage3D(wt,z,Et,Kt,ne,rt,ut,xt,Le,Yt,ae),U.pixelStorei(U.UNPACK_ROW_LENGTH,_e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,ri),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie),z===0&&B.generateMipmaps&&U.generateMipmap(wt),Ct.unbindTexture()},this.initRenderTarget=function(T){It.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){P=0,b=0,A=null,Ct.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ko?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===ir?"display-p3":"srgb"}}class mc extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hg extends be{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ci extends hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ug extends Ci{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $o extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dg extends $o{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Br=new re,ll=new H,cl=new H;class gc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),Br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hl=new re,qi=new H,zr=new H;class fg extends gc{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qi.setFromMatrixPosition(t.matrixWorld),n.position.copy(qi),zr.copy(n.position),zr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zr),n.updateMatrixWorld(),i.makeTranslation(-qi.x,-qi.y,-qi.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class pg extends $o{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mg extends gc{constructor(){super(new cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gg extends $o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new mg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);const Mn=["d4","d6","d8","d10","d12","d20"],_c={d4:4,d6:6,d8:8,d10:10,d12:12,d20:20},es=.9,ns=(1+Math.sqrt(5))/2;function vc(){const s=[];for(const t of[-1,1])for(const e of[-1,1])for(const n of[-1,1])s.push([t,e,n]);return s}function _g(){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]}function vg(){const t=Math.cos(Math.PI/5),e=.105*(1+t)/(1-t),n=[[0,e,0],[0,-e,0]];for(let i=0;i<5;i++){const r=i*2*Math.PI/5,o=r+Math.PI/5;n.push([Math.cos(r),.105,Math.sin(r)]),n.push([Math.cos(o),-.105,Math.sin(o)])}return n}function xg(){const s=vc(),t=1/ns,e=ns;for(const n of[-1,1])for(const i of[-1,1])s.push([0,n*t,i*e]),s.push([n*t,i*e,0]),s.push([n*e,0,i*t]);return s}function Mg(){const s=[];for(const t of[-1,1])for(const e of[-1,1])s.push([0,t,e*ns]),s.push([t,e*ns,0]),s.push([t*ns,0,e]);return s}const yg={d4:{verts:[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]],radius:1.25},d6:{verts:vc(),radius:1.08},d8:{verts:_g(),radius:1.12},d10:{verts:vg(),radius:1.08},d12:{verts:xg(),radius:1.12},d20:{verts:Mg(),radius:1.16}};function Sg(s){const t=[],n=s.length,i=new H,r=new H;for(let o=0;o<n;o++)for(let a=o+1;a<n;a++)for(let l=a+1;l<n;l++){const c=i.subVectors(s[a],s[o]).cross(r.subVectors(s[l],s[o])).clone();if(c.lengthSq()<1e-10)continue;c.normalize();let u=c.dot(s[o]);if(u<0&&(c.negate(),u=-u),u<1e-6||s.some(f=>c.dot(f)>u+1e-5)||t.some(f=>f.n.dot(c)>1-1e-6))continue;const d=[];s.forEach((f,p)=>{Math.abs(c.dot(f)-u)<1e-5&&d.push(p)});const h=new H;d.forEach(f=>h.add(s[f])),h.divideScalar(d.length);const m=s[d[0]].clone().sub(h).normalize(),g=new H().crossVectors(c,m),_=f=>{const p=s[f].clone().sub(h);return Math.atan2(p.dot(g),p.dot(m))};d.sort((f,p)=>_(f)-_(p)),t.push({idx:d,n:c,c:h})}return t}function Eg(s){const t=s.faces,e=t.length;if(s.type==="d4"){t.forEach(r=>{r.value=[0,1,2,3].find(o=>!r.idx.includes(o))+1});return}const n=t.map((r,o)=>o).sort((r,o)=>t[o].n.y-t[r].n.y||Math.atan2(t[r].n.z,t[r].n.x)-Math.atan2(t[o].n.z,t[o].n.x));let i=1;for(const r of n){if(t[r].value)continue;t[r].value=i;const o=t.findIndex(a=>a.n.dot(t[r].n)<-.999);o>=0&&!t[o].value&&(t[o].value=e+1-i),i++}}function wg(s,t){const e=t.idx.map(a=>s.V[a].clone().sub(t.c)),n=e.map(a=>a.length()),i=Math.max(...n);let r;s.type==="d6"?r=e[0].clone().add(e[1]).normalize():r=e[n.findIndex(a=>a>i-1e-4)].clone().normalize();const o=new H().crossVectors(r,t.n);t.uv=e.map(a=>[.5+a.dot(o)/(2*i),.5+a.dot(r)/(2*i)])}function Tg(s){const t=Math.ceil(Math.sqrt(s));return{cols:t,rows:Math.ceil(s/t)}}function xc(s,t){return s.type==="d4"?t:s.faces[t].value-1}function bg(s){const t=[],e=[],n=[],i=new Fn,{cols:r,rows:o}=s.atlas;return s.faces.forEach((a,l)=>{const c=xc(s,l),u=c%r,d=Math.floor(c/r);for(let h=1;h<a.idx.length-1;h++)for(const m of[0,h,h+1]){const g=s.V[a.idx[m]];t.push(g.x,g.y,g.z),e.push(a.n.x,a.n.y,a.n.z);const _=.5+(a.uv[m][0]-.5)*es,f=.5+(a.uv[m][1]-.5)*es;n.push((u+_)/r,1-(d+1-f)/o)}}),i.setAttribute("position",new nn(t,3)),i.setAttribute("normal",new nn(e,3)),i.setAttribute("uv",new nn(n,2)),i.computeBoundingSphere(),i}function Ag(s){const t=yg[s],e=t.verts.map(r=>new H(r[0],r[1],r[2])),n=Math.max(...e.map(r=>r.length()));e.forEach(r=>r.multiplyScalar(t.radius/n));const i={type:s,V:e,faces:Sg(e)};return i.faces.length!==_c[s]&&console.warn("Facce inattese",s,i.faces.length),Eg(i),i.faces.forEach(r=>wg(i,r)),i.atlas=Tg(i.faces.length),i.geometry=bg(i),i}const os=Object.fromEntries(Mn.map(s=>[s,Ag(s)]));function Rg(s,t,e){if(t===e)return new He;const n=s.V,i=s.faces[t],r=s.faces[e],o=n[i.idx[0]].clone().sub(i.c).normalize(),l=new re().makeBasis(o,new H().crossVectors(i.n,o),i.n).clone().transpose(),c=new H;for(const u of r.idx){const d=n[u].clone().sub(r.c).normalize(),m=new re().makeBasis(d,new H().crossVectors(r.n,d),r.n).multiply(l);if(n.every(_=>(c.copy(_).applyMatrix4(m),n.some(f=>f.distanceToSquared(c)<1e-6))))return new He().setFromRotationMatrix(m)}return null}const Cg=new H;function Ko(s,t){const e=s.type==="d4"?-1:1;let n=0,i=-1/0;return s.faces.forEach((r,o)=>{const a=Cg.copy(r.n).applyQuaternion(t).y*e;a>i&&(i=a,n=o)}),n}class Pg extends mc{constructor(){super();const t=new si;t.deleteAttribute("uv");const e=new Ci({side:Te}),n=new Ci,i=new pg(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new te(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new te(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new te(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new te(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new te(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new te(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new te(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new te(t,Mi(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const m=new te(t,Mi(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new te(t,Mi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new te(t,Mi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const f=new te(t,Mi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new te(t,Mi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Mi(s){const t=new qo;return t.color.setScalar(s),t}class Ke{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new y);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new y);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Ke);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],m=n[7],g=n[8],_=i[0],f=i[1],p=i[2],v=i[3],M=i[4],w=i[5],P=i[6],b=i[7],A=i[8];return r[0]=o*_+a*v+l*P,r[1]=o*f+a*M+l*b,r[2]=o*p+a*w+l*A,r[3]=c*_+u*v+d*P,r[4]=c*f+u*M+d*b,r[5]=c*p+u*w+d*A,r[6]=h*_+m*v+g*P,r[7]=h*f+m*M+g*b,r[8]=h*p+m*w+g*A,e}scale(t,e){e===void 0&&(e=new Ke);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new y);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){u=d;do h=d-u,r[h+i*o]+=r[h+i*a];while(--u);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const m=r[o+i*a]/r[o+i*o];u=d;do h=d-u,r[h+i*a]=h<=o?0:r[h+i*a]-r[h+i*o]*m;while(--u)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Ke);const e=3,n=6,i=Lg;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const u=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=u;do d=u-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const h=i[r+n*o]/i[r+n*r];c=u;do d=u-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,u=e*a,d=e*l,h=n*a,m=n*l,g=i*l,_=r*o,f=r*a,p=r*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-p,v[3*0+2]=d+f,v[3*1+0]=u+p,v[3*1+1]=1-(c+g),v[3*1+2]=m-_,v[3*2+0]=d-f,v[3*2+1]=m+_,v[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new Ke);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Lg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new y);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new y(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new y(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ke([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new y);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new y);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new y),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new y),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new y),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Ig,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Dg;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(ul),ul.almostEquals(t,e)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const Ig=new y,Dg=new y,ul=new y;class Fe{constructor(t){t===void 0&&(t={}),this.lowerBound=new y,this.upperBound=new y,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,dl),c=dl),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Fe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=fl,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){const m=n[h];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=fl,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){const m=n[h];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(g<0||m>g)}}const dl=new y,fl=[new y,new y,new y,new y,new y,new y,new y,new y];class pl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Mc{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class de{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new y),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Ng,i=Ug;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new de);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+i*c-r*l,e.y=i*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-i*a,e.w=o*u-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new de);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new de),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new y);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*i,d=c*i+l*n-o*r,h=c*r+o*i-a*n,m=-o*n-a*i-l*r;return e.x=u*c+m*-o+d*-l-h*-a,e.y=d*c+m*-a+h*-o-u*-l,e.z=h*c+m*-l+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,h=a*a,m=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*m),i=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new de(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new de);const i=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,d=t.w,h,m,g,_,f;return m=i*l+r*c+o*u+a*d,m<0&&(m=-m,l=-l,c=-c,u=-u,d=-d),1-m>1e-6?(h=Math.acos(m),g=Math.sin(h),_=Math.sin((1-e)*h)/g,f=Math.sin(e*h)/g):(_=1-e,f=e),n.x=_*i+f*l,n.y=_*r+f*c,n.z=_*o+f*u,n.w=_*a+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new de);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(r*d+o*u-a*c),i.y+=h*(o*d+a*l-r*u),i.z+=h*(a*d+r*c-o*l),i.w+=h*(-r*l-o*c-a*u),i}}const Ng=new y,Ug=new y,Fg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class gt{constructor(t){t===void 0&&(t={}),this.id=gt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}gt.idCounter=0;gt.types=Fg;class qt{constructor(t){t===void 0&&(t={}),this.position=new y,this.quaternion=new de,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return qt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return qt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),n.vsub(t,i),e.conjugate(ml),ml.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new y),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new y),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const ml=new de;class Pi extends gt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:gt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new y;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Pi.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new y,o=new y;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){const u=new y;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const _=u.dot(o);_>h&&(h=_,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],f=new y;f.copy(_),r.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(o,t,e,m,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){const c=new y,u=new y,d=new y,h=new y,m=new y,g=new y;let _=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let p=0;p!==f.uniqueAxes.length;p++){n.vmult(f.uniqueAxes[p],c);const v=f.testSepAxis(c,t,e,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const p=a?a.length:f.faces.length;for(let v=0;v<p;v++){const M=a?a[v]:v;c.copy(f.faceNormals[M]),n.vmult(c,c);const w=f.testSepAxis(c,t,e,n,i,r);if(w===!1)return!1;w<_&&(_=w,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],u);const v=f.testSepAxis(u,t,e,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(u))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const M=l?l[v]:v;u.copy(t.faceNormals[M]),r.vmult(u,u);const w=f.testSepAxis(u,t,e,n,i,r);if(w===!1)return!1;w<_&&(_=w,o.copy(u))}}for(let p=0;p!==f.uniqueEdges.length;p++){n.vmult(f.uniqueEdges[p],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],m),h.cross(m,g),!g.almostZero()){g.normalize();const M=f.testSepAxis(g,t,e,n,i,r);if(M===!1)return!1;M<_&&(_=M,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;Pi.project(a,t,n,i,Hr),Pi.project(e,t,r,o,Vr);const l=Hr[0],c=Hr[1],u=Vr[0],d=Vr[1];if(l<d||u<c)return!1;const h=l-d,m=u-c;return h<m?h:m}calculateLocalInertia(t,e){const n=new y,i=new y;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const l=new y,c=new y,u=new y,d=new y,h=new y,m=new y,g=new y,_=new y,f=this,p=[],v=i,M=p;let w=-1,P=Number.MAX_VALUE;for(let x=0;x<f.faces.length;x++){l.copy(f.faceNormals[x]),n.vmult(l,l);const E=l.dot(t);E<P&&(P=E,w=x)}if(w<0)return;const b=f.faces[w];b.connectedFaces=[];for(let x=0;x<f.faces.length;x++)for(let E=0;E<f.faces[x].length;E++)b.indexOf(f.faces[x][E])!==-1&&x!==w&&b.connectedFaces.indexOf(x)===-1&&b.connectedFaces.push(x);const A=b.length;for(let x=0;x<A;x++){const E=f.vertices[b[x]],V=f.vertices[b[(x+1)%A]];E.vsub(V,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[w]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),m.copy(E),n.vmult(m,m),e.vadd(m,m);const I=b.connectedFaces[x];g.copy(this.faceNormals[I]);const L=this.getPlaneConstantOfFace(I);_.copy(g),n.vmult(_,_);const D=L-_.dot(e);for(this.clipFaceAgainstPlane(v,M,_,D);v.length;)v.shift();for(;M.length;)v.push(M.shift())}g.copy(this.faceNormals[w]);const F=this.getPlaneConstantOfFace(w);_.copy(g),n.vmult(_,_);const j=F-_.dot(e);for(let x=0;x<v.length;x++){let E=_.dot(v[x])+j;if(E<=r&&(console.log(`clamped: depth=${E} to minDist=${r}`),E=r),E<=o){const V=v[x];if(E<=1e-6){const I={point:V,normal:_,depth:E};a.push(I)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+i,r<0)if(o<0){const d=new y;d.copy(c),e.push(d)}else{const d=new y;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new y;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,l,c,u,d,h=new y;for(let m=0;m<r.length;m++){h.copy(r[m]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new y);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new y;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=e[n[a][0]],u=new y;t.vsub(c,u);const d=l.dot(u),h=new y;o.vsub(c,h);const m=l.dot(h);if(d<0&&m>0||d>0&&m<0)return!1}return r?1:-1}static project(t,e,n,i,r){const o=t.vertices.length,a=Bg;let l=0,c=0;const u=zg,d=t.vertices;u.setZero(),qt.vectorToLocalFrame(n,i,e,a),qt.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let m=1;m<o;m++){const g=d[m].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const m=c;c=l,l=m}r[0]=l,r[1]=c}}const Hr=[],Vr=[],Og=new y,Bg=new y,zg=new y;class Zo extends gt{constructor(t){super({type:gt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=y,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Pi({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new y),Zo.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Cn.set(r[o][0],r[o][1],r[o][2]),e.vmult(Cn,Cn),t.vadd(Cn,Cn),n(Cn.x,Cn.y,Cn.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;Ze[0].set(r.x,r.y,r.z),Ze[1].set(-r.x,r.y,r.z),Ze[2].set(-r.x,-r.y,r.z),Ze[3].set(-r.x,-r.y,-r.z),Ze[4].set(r.x,-r.y,-r.z),Ze[5].set(r.x,r.y,-r.z),Ze[6].set(-r.x,r.y,-r.z),Ze[7].set(r.x,-r.y,r.z);const o=Ze[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Ze[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const Cn=new y,Ze=[new y,new y,new y,new y,new y,new y,new y,new y],Jo={DYNAMIC:1,STATIC:2,KINEMATIC:4},Qo={AWAKE:0,SLEEPY:1,SLEEPING:2};class pt extends Mc{constructor(t){t===void 0&&(t={}),super(),this.id=pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new y,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new y,this.force=new y;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?pt.STATIC:pt.DYNAMIC,typeof t.type==typeof pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new de,this.initQuaternion=new de,this.previousQuaternion=new de,this.interpolatedQuaternion=new de,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new y,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new Ke,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new Ke,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new y(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new y(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Fe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===pt.SLEEPING&&this.dispatchEvent(pt.wakeupEvent)}sleep(){this.sleepState=pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===pt.AWAKE&&n<i?(this.sleepState=pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(pt.sleepyEvent)):e===pt.SLEEPY&&n>i?this.wakeUp():e===pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pt.SLEEPING||this.type===pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new y),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new y),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new y,r=new de;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Hg,o=Vg,a=this.quaternion,l=this.aabb,c=Gg;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=kg,i=Wg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new y),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=qg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new y),this.type!==pt.DYNAMIC)return;const n=Yg,i=jg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===pt.DYNAMIC&&(this.sleepState===pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new y),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=e,i=$g;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=Kg;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new y),this.type!==pt.DYNAMIC)return;const n=Zg,i=Jg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Qg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Zo.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new y;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pt.DYNAMIC||this.type===pt.KINEMATIC)||this.sleepState===pt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,m=u*t;i.x+=a.x*m*h.x,i.y+=a.y*m*h.y,i.z+=a.z*m*h.z;const g=d.elements,_=this.angularFactor,f=l.x*_.x,p=l.y*_.y,v=l.z*_.z;r.x+=t*(g[0]*f+g[1]*p+g[2]*v),r.y+=t*(g[3]*f+g[4]*p+g[5]*v),r.z+=t*(g[6]*f+g[7]*p+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pt.idCounter=0;pt.COLLIDE_EVENT_NAME="collide";pt.DYNAMIC=Jo.DYNAMIC;pt.STATIC=Jo.STATIC;pt.KINEMATIC=Jo.KINEMATIC;pt.AWAKE=Qo.AWAKE;pt.SLEEPY=Qo.SLEEPY;pt.SLEEPING=Qo.SLEEPING;pt.wakeupEvent={type:"wakeup"};pt.sleepyEvent={type:"sleepy"};pt.sleepEvent={type:"sleep"};const Hg=new y,Vg=new de,Gg=new Fe,kg=new Ke,Wg=new Ke,Xg=new Ke,qg=new y,Yg=new y,jg=new y,$g=new y,Kg=new y,Zg=new y,Jg=new y,Qg=new y;class t_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&pt.STATIC||t.sleepState===pt.SLEEPING)&&(e.type&pt.STATIC||e.sleepState===pt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=e_;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=n_,i=i_,r=s_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new y;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const e_=new y;new y;new de;new y;const n_={keys:[]},i_=[],s_=[];new y;new y;new y;class r_ extends t_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class tr{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let yc,Sc,Ec,wc,Tc,bc,Ac;const ta={CLOSEST:1,ANY:2,ALL:4};yc=gt.types.SPHERE;Sc=gt.types.PLANE;Ec=gt.types.BOX;wc=gt.types.CYLINDER;Tc=gt.types.CONVEXPOLYHEDRON;bc=gt.types.HEIGHTFIELD;Ac=gt.types.TRIMESH;class ue{get[yc](){return this._intersectSphere}get[Sc](){return this._intersectPlane}get[Ec](){return this._intersectBox}get[wc](){return this._intersectConvex}get[Tc](){return this._intersectConvex}get[bc](){return this._intersectHeightfield}get[Ac](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new y),e===void 0&&(e=new y),this.from=t.clone(),this.to=e.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ue.ANY,this.result=new tr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ue.ANY,this.result=e.result||new tr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(gl),Gr.length=0,t.broadphase.aabbQuery(t,gl,Gr),this.intersectBodies(Gr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=o_,r=a_;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(y_(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new y(0,0,1);e.vmult(c,c);const u=new y;o.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new y,_=new y,f=new y;o.vsub(n,g);const p=-c.dot(g)/m;l.scale(p,_),o.vadd(_,f),this.reportIntersection(c,f,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=l_;o.from.copy(this.from),o.to.copy(this.to),qt.pointToLocalFrame(n,e,o.from,o.from),qt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=c_;let l,c,u,d;l=c=0,u=d=t.data.length-1;const h=new Fe;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let m=l;m<u;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(m,g,!1),qt.pointToWorldFrame(n,e,t.pillarOffset,Us),this._intersectConvex(t.pillarConvex,e,Us,i,r,_l),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),qt.pointToWorldFrame(n,e,t.pillarOffset,Us),this._intersectConvex(t.pillarConvex,e,Us,i,r,_l)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,m=h_,g=u_;if(!(h<0))if(h===0)o.lerp(a,h,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,r,i,-1);else{const _=(-u-Math.sqrt(h))/(2*c),f=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,r,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=d_,l=vl,c=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,m=this.direction,g=this.from,_=this.to,f=g.distanceTo(_),p=c?c.length:u.length,v=this.result;for(let M=0;!v.shouldStop&&M<p;M++){const w=c?c[M]:M,P=u[w],b=h[w],A=e,F=n;l.copy(d[P[0]]),A.vmult(l,l),l.vadd(F,l),l.vsub(g,l),A.vmult(b,a);const j=m.dot(a);if(Math.abs(j)<this.precision)continue;const x=a.dot(l)/j;if(!(x<0)){m.scale(x,Ce),Ce.vadd(g,Ce),Xe.copy(d[P[0]]),A.vmult(Xe,Xe),F.vadd(Xe,Xe);for(let E=1;!v.shouldStop&&E<P.length-1;E++){Je.copy(d[P[E]]),Qe.copy(d[P[E+1]]),A.vmult(Je,Je),A.vmult(Qe,Qe),F.vadd(Je,Je),F.vadd(Qe,Qe);const V=Ce.distanceTo(g);!(ue.pointInTriangle(Ce,Xe,Je,Qe)||ue.pointInTriangle(Ce,Je,Xe,Qe))||V>f||this.reportIntersection(a,Ce,r,i,w)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=f_,l=x_,c=M_,u=vl,d=p_,h=m_,m=g_,g=v_,_=__,f=t.indices;t.vertices;const p=this.from,v=this.to,M=this.direction;c.position.copy(n),c.quaternion.copy(e),qt.vectorToLocalFrame(n,e,M,d),qt.pointToLocalFrame(n,e,p,h),qt.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,m.vsub(h,d),d.normalize();const w=h.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let P=0,b=l.length;!this.result.shouldStop&&P!==b;P++){const A=l[P];t.getNormal(A,a),t.getVertex(f[A*3],Xe),Xe.vsub(h,u);const F=d.dot(a),j=a.dot(u)/F;if(j<0)continue;d.scale(j,Ce),Ce.vadd(h,Ce),t.getVertex(f[A*3+1],Je),t.getVertex(f[A*3+2],Qe);const x=Ce.distanceSquared(h);!(ue.pointInTriangle(Ce,Je,Xe,Qe)||ue.pointInTriangle(Ce,Xe,Je,Qe))||x>w||(qt.vectorToWorldFrame(e,a,_),qt.pointToWorldFrame(n,e,Ce,g),this.reportIntersection(_,g,r,i,A))}l.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case ue.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ue.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case ue.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,$n),n.vsub(e,Yi),t.vsub(e,kr);const r=$n.dot($n),o=$n.dot(Yi),a=$n.dot(kr),l=Yi.dot(Yi),c=Yi.dot(kr);let u,d;return(u=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&u+d<r*l-o*o}}ue.CLOSEST=ta.CLOSEST;ue.ANY=ta.ANY;ue.ALL=ta.ALL;const gl=new Fe,Gr=[],Yi=new y,kr=new y,o_=new y,a_=new de,Ce=new y,Xe=new y,Je=new y,Qe=new y;new y;new tr;const _l={faceList:[0]},Us=new y,l_=new ue,c_=[],h_=new y,u_=new y,d_=new y;new y;new y;const vl=new y,f_=new y,p_=new y,m_=new y,g_=new y,__=new y,v_=new y;new Fe;const x_=[],M_=new qt,$n=new y,Fs=new y;function y_(s,t,e){e.vsub(s,$n);const n=$n.dot(t);return t.scale(n,Fs),Fs.vadd(s,Fs),e.distanceTo(Fs)}class S_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class xl{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class us{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=us.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new xl,this.jacobianElementB=new xl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return r.scale(c,Ml),a.scale(u,yl),n.invInertiaWorldSolve.vmult(o,Sl),i.invInertiaWorldSolve.vmult(l,El),t.multiplyVectors(Ml,Sl)+e.multiplyVectors(yl,El)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Os),c+=Os.dot(t.rotational),l.vmult(e.rotational,Os),c+=Os.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=E_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}us.idCounter=0;const Ml=new y,yl=new y,Sl=new y,El=new y,Os=new y,E_=new y;class w_ extends us{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=T_,c=b_,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=r.velocity,m=r.angularVelocity;r.force,r.torque;const g=A_,_=this.jacobianElementA,f=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),f.spatial.copy(p),f.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=p.dot(g),M=this.restitution+1,w=M*h.dot(p)-M*u.dot(p)+m.dot(c)-d.dot(l),P=this.computeGiMf();return-v*e-w*n-t*P}getImpactVelocityAlongNormal(){const t=R_,e=C_,n=P_,i=L_,r=I_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const T_=new y,b_=new y,A_=new y,R_=new y,C_=new y,P_=new y,L_=new y,I_=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class wl extends us{constructor(t,e,n){super(t,e,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=D_,o=N_,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const D_=new y,N_=new y;class Jn{constructor(t,e,n){n=S_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Jn.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Jn.idCounter=0;class Qn{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Qn.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Qn.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new ue;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Tl extends gt{constructor(){super({type:gt.types.PLANE}),this.worldNormal=new y,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new y),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){un.set(0,0,1),e.vmult(un,un);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),un.x===1?i.x=t.x:un.x===-1&&(n.x=t.x),un.y===1?i.y=t.y:un.y===-1&&(n.y=t.y),un.z===1?i.z=t.z:un.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const un=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Fe;new y;new Fe;new y;new y;new y;new y;new y;new y;new y;new Fe;new y;new qt;new Fe;class U_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class F_ extends U_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let d,h,m,g,_,f;if(a!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();const p=B_,v=z_,M=O_;p.length=a,v.length=a,M.length=a;for(let w=0;w!==a;w++){const P=o[w];M[w]=0,v[w]=P.computeB(u),p[w]=1/P.computeC()}if(a!==0){for(let b=0;b!==c;b++){const A=l[b],F=A.vlambda,j=A.wlambda;F.set(0,0,0),j.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==a;b++){const A=o[b];d=v[b],h=p[b],f=M[b],_=A.computeGWlambda(),m=h*(d-_-A.eps*f),f+m<A.minForce?m=A.minForce-f:f+m>A.maxForce&&(m=A.maxForce-f),M[b]+=m,g+=m>0?m:-m,A.addToWlambda(m)}if(g*g<r)break}for(let b=0;b!==c;b++){const A=l[b],F=A.velocity,j=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),F.vadd(A.vlambda,F),A.wlambda.vmul(A.angularFactor,A.wlambda),j.vadd(A.wlambda,j)}let w=o.length;const P=1/u;for(;w--;)o[w].multiplier=M[w]*P}return n}}const O_=[],B_=[],z_=[];pt.STATIC;class H_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class V_ extends H_{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const ie={sphereSphere:gt.types.SPHERE,spherePlane:gt.types.SPHERE|gt.types.PLANE,boxBox:gt.types.BOX|gt.types.BOX,sphereBox:gt.types.SPHERE|gt.types.BOX,planeBox:gt.types.PLANE|gt.types.BOX,convexConvex:gt.types.CONVEXPOLYHEDRON,sphereConvex:gt.types.SPHERE|gt.types.CONVEXPOLYHEDRON,planeConvex:gt.types.PLANE|gt.types.CONVEXPOLYHEDRON,boxConvex:gt.types.BOX|gt.types.CONVEXPOLYHEDRON,sphereHeightfield:gt.types.SPHERE|gt.types.HEIGHTFIELD,boxHeightfield:gt.types.BOX|gt.types.HEIGHTFIELD,convexHeightfield:gt.types.CONVEXPOLYHEDRON|gt.types.HEIGHTFIELD,sphereParticle:gt.types.PARTICLE|gt.types.SPHERE,planeParticle:gt.types.PLANE|gt.types.PARTICLE,boxParticle:gt.types.BOX|gt.types.PARTICLE,convexParticle:gt.types.PARTICLE|gt.types.CONVEXPOLYHEDRON,cylinderCylinder:gt.types.CYLINDER,sphereCylinder:gt.types.SPHERE|gt.types.CYLINDER,planeCylinder:gt.types.PLANE|gt.types.CYLINDER,boxCylinder:gt.types.BOX|gt.types.CYLINDER,convexCylinder:gt.types.CONVEXPOLYHEDRON|gt.types.CYLINDER,heightfieldCylinder:gt.types.HEIGHTFIELD|gt.types.CYLINDER,particleCylinder:gt.types.PARTICLE|gt.types.CYLINDER,sphereTrimesh:gt.types.SPHERE|gt.types.TRIMESH,planeTrimesh:gt.types.PLANE|gt.types.TRIMESH};class G_{get[ie.sphereSphere](){return this.sphereSphere}get[ie.spherePlane](){return this.spherePlane}get[ie.boxBox](){return this.boxBox}get[ie.sphereBox](){return this.sphereBox}get[ie.planeBox](){return this.planeBox}get[ie.convexConvex](){return this.convexConvex}get[ie.sphereConvex](){return this.sphereConvex}get[ie.planeConvex](){return this.planeConvex}get[ie.boxConvex](){return this.boxConvex}get[ie.sphereHeightfield](){return this.sphereHeightfield}get[ie.boxHeightfield](){return this.boxHeightfield}get[ie.convexHeightfield](){return this.convexHeightfield}get[ie.sphereParticle](){return this.sphereParticle}get[ie.planeParticle](){return this.planeParticle}get[ie.boxParticle](){return this.boxParticle}get[ie.convexParticle](){return this.convexParticle}get[ie.cylinderCylinder](){return this.convexConvex}get[ie.sphereCylinder](){return this.sphereConvex}get[ie.planeCylinder](){return this.planeConvex}get[ie.boxCylinder](){return this.boxConvex}get[ie.convexCylinder](){return this.convexConvex}get[ie.heightfieldCylinder](){return this.heightfieldCylinder}get[ie.particleCylinder](){return this.particleCylinder}get[ie.sphereTrimesh](){return this.sphereTrimesh}get[ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new V_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new w_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,_=g.length?g.pop():new wl(n,i,h*m),f=g.length?g.pop():new wl(n,i,h*m);return _.bi=f.bi=n,_.bj=f.bj=i,_.minForce=f.minForce=-h*m,_.maxForce=f.maxForce=h*m,_.ri.copy(t.ri),_.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(_.t,f.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=f.enabled=t.enabled,e.push(_,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Wn.setZero(),yi.setZero(),Si.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Wn.vadd(e.ni,Wn),yi.vadd(e.ri,yi),Si.vadd(e.rj,Si)):(Wn.vsub(e.ni,Wn),yi.vadd(e.rj,yi),Si.vadd(e.ri,Si));const o=1/t;yi.scale(o,n.ri),Si.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Wn.normalize(),Wn.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=X_,c=q_,u=k_,d=W_;for(let h=0,m=t.length;h!==m;h++){const g=t[h],_=e[h];let f=null;g.material&&_.material&&(f=n.getContactMaterial(g.material,_.material)||null);const p=g.type&pt.KINEMATIC&&_.type&pt.STATIC||g.type&pt.STATIC&&_.type&pt.KINEMATIC||g.type&pt.KINEMATIC&&_.type&pt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const M=g.shapes[v];for(let w=0;w<_.shapes.length;w++){_.quaternion.mult(_.shapeOrientations[w],c),_.quaternion.vmult(_.shapeOffsets[w],d),d.vadd(_.position,d);const P=_.shapes[w];if(!(M.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&M.collisionFilterGroup)||u.distanceTo(d)>M.boundingSphereRadius+P.boundingSphereRadius)continue;let b=null;M.material&&P.material&&(b=n.getContactMaterial(M.material,P.material)||null),this.currentContactMaterial=b||f||n.defaultContactMaterial;const A=M.type|P.type,F=this[A];if(F){let j=!1;M.type<P.type?j=F.call(this,M,P,u,d,l,c,g,_,M,P,p):j=F.call(this,P,M,d,u,c,l,_,g,M,P,p),j&&p&&(n.shapeOverlapKeeper.set(M.id,P.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,u,d){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Bs),h.ni.scale(h.ni.dot(Bs),bl),Bs.vsub(bl,h.rj),-Bs.dot(h.ni)<=t.radius){if(d)return!0;const m=h.ri,g=h.rj;m.vadd(n,m),m.vsub(a.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}sphereBox(t,e,n,i,r,o,a,l,c,u,d){const h=this.v3pool,m=v0;n.vsub(i,zs),e.getSideNormals(m,o);const g=t.radius;let _=!1;const f=M0,p=y0,v=S0;let M=null,w=0,P=0,b=0,A=null;for(let R=0,G=m.length;R!==G&&_===!1;R++){const N=m0;N.copy(m[R]);const q=N.length();N.normalize();const et=zs.dot(N);if(et<q+g&&et>0){const J=g0,tt=_0;J.copy(m[(R+1)%3]),tt.copy(m[(R+2)%3]);const yt=J.length(),$=tt.length();J.normalize(),tt.normalize();const nt=zs.dot(J),ct=zs.dot(tt);if(nt<yt&&nt>-yt&&ct<$&&ct>-$){const ot=Math.abs(et-q-g);if((A===null||ot<A)&&(A=ot,P=nt,b=ct,M=q,f.copy(N),p.copy(J),v.copy(tt),w++,d))return!0}}}if(w){_=!0;const R=this.createContactEquation(a,l,t,e,c,u);f.scale(-g,R.ri),R.ni.copy(f),R.ni.negate(R.ni),f.scale(M,f),p.scale(P,p),f.vadd(p,f),v.scale(b,v),f.vadd(v,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(a.position,R.ri),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}let F=h.get();const j=x0;for(let R=0;R!==2&&!_;R++)for(let G=0;G!==2&&!_;G++)for(let N=0;N!==2&&!_;N++)if(F.set(0,0,0),R?F.vadd(m[0],F):F.vsub(m[0],F),G?F.vadd(m[1],F):F.vsub(m[1],F),N?F.vadd(m[2],F):F.vsub(m[2],F),i.vadd(F,j),j.vsub(n,j),j.lengthSquared()<g*g){if(d)return!0;_=!0;const q=this.createContactEquation(a,l,t,e,c,u);q.ri.copy(j),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(F),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}h.release(F),F=null;const x=h.get(),E=h.get(),V=h.get(),I=h.get(),L=h.get(),D=m.length;for(let R=0;R!==D&&!_;R++)for(let G=0;G!==D&&!_;G++)if(R%3!==G%3){m[G].cross(m[R],x),x.normalize(),m[R].vadd(m[G],E),V.copy(n),V.vsub(E,V),V.vsub(i,V);const N=V.dot(x);x.scale(N,I);let q=0;for(;q===R%3||q===G%3;)q++;L.copy(n),L.vsub(I,L),L.vsub(E,L),L.vsub(i,L);const et=Math.abs(N),J=L.length();if(et<m[q].length()&&J<g){if(d)return!0;_=!0;const tt=this.createContactEquation(a,l,t,e,c,u);E.vadd(I,tt.rj),tt.rj.copy(tt.rj),L.negate(tt.ni),tt.ni.normalize(),tt.ri.copy(tt.rj),tt.ri.vadd(i,tt.ri),tt.ri.vsub(n,tt.ri),tt.ri.normalize(),tt.ri.scale(g,tt.ri),tt.ri.vadd(n,tt.ri),tt.ri.vsub(a.position,tt.ri),tt.rj.vadd(i,tt.rj),tt.rj.vsub(l.position,tt.rj),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult)}}h.release(x,E,V,I,L)}planeBox(t,e,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}convexConvex(t,e,n,i,r,o,a,l,c,u,d,h,m){const g=O0;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,g,h,m)){const _=[],f=B0;t.clipAgainstHull(n,r,e,i,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(d)return!0;const M=this.createContactEquation(a,l,t,e,c,u),w=M.ri,P=M.rj;g.negate(M.ni),_[v].normal.negate(f),f.scale(_[v].depth,f),_[v].point.vadd(f,w),P.copy(_[v].point),w.vsub(n,w),P.vsub(i,P),w.vadd(n,w),w.vsub(a.position,w),P.vadd(i,P),P.vsub(l.position,P),this.result.push(M),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,r,o,a,l,c,u,d){const h=this.v3pool;n.vsub(i,E0);const m=e.faceNormals,g=e.faces,_=e.vertices,f=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const M=_[v],w=A0;o.vmult(M,w),i.vadd(w,w);const P=b0;if(w.vsub(n,P),P.lengthSquared()<f*f){if(d)return!0;p=!0;const b=this.createContactEquation(a,l,t,e,c,u);b.ri.copy(P),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(f,b.ri),w.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,M=g.length;v!==M&&p===!1;v++){const w=m[v],P=g[v],b=R0;o.vmult(w,b);const A=C0;o.vmult(_[P[0]],A),A.vadd(i,A);const F=P0;b.scale(-f,F),n.vadd(F,F);const j=L0;F.vsub(A,j);const x=j.dot(b),E=I0;if(n.vsub(A,E),x<0&&E.dot(b)>0){const V=[];for(let I=0,L=P.length;I!==L;I++){const D=h.get();o.vmult(_[P[I]],D),i.vadd(D,D),V.push(D)}if(p0(V,b,n)){if(d)return!0;p=!0;const I=this.createContactEquation(a,l,t,e,c,u);b.scale(-f,I.ri),b.negate(I.ni);const L=h.get();b.scale(-x,L);const D=h.get();b.scale(-f,D),n.vsub(i,I.rj),I.rj.vadd(D,I.rj),I.rj.vadd(L,I.rj),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),h.release(L),h.release(D),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let R=0,G=V.length;R!==G;R++)h.release(V[R]);return}else for(let I=0;I!==P.length;I++){const L=h.get(),D=h.get();o.vmult(_[P[(I+1)%P.length]],L),o.vmult(_[P[(I+2)%P.length]],D),i.vadd(L,L),i.vadd(D,D);const R=w0;D.vsub(L,R);const G=T0;R.unit(G);const N=h.get(),q=h.get();n.vsub(L,q);const et=q.dot(G);G.scale(et,N),N.vadd(L,N);const J=h.get();if(N.vsub(n,J),et>0&&et*et<R.lengthSquared()&&J.lengthSquared()<f*f){if(d)return!0;const tt=this.createContactEquation(a,l,t,e,c,u);N.vsub(i,tt.rj),N.vsub(n,tt.ni),tt.ni.normalize(),tt.ni.scale(f,tt.ri),tt.rj.vadd(i,tt.rj),tt.rj.vsub(l.position,tt.rj),tt.ri.vadd(n,tt.ri),tt.ri.vsub(a.position,tt.ri),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);for(let yt=0,$=V.length;yt!==$;yt++)h.release(V[yt]);h.release(L),h.release(D),h.release(N),h.release(J),h.release(q);return}h.release(L),h.release(D),h.release(N),h.release(J),h.release(q)}for(let I=0,L=V.length;I!==L;I++)h.release(V[I])}}}planeConvex(t,e,n,i,r,o,a,l,c,u,d){const h=D0,m=N0;m.set(0,0,1),r.vmult(m,m);let g=0;const _=U0;for(let f=0;f!==e.vertices.length;f++)if(h.copy(e.vertices[f]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,_),m.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,u),M=F0;m.scale(m.dot(_),M),h.vsub(M,M),M.vsub(n,v.ri),v.ni.copy(m),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,l,c,u,d){const h=e.data,m=t.radius,g=e.elementSize,_=K0,f=$0;qt.pointToLocalFrame(i,o,n,f);let p=Math.floor((f.x-m)/g)-1,v=Math.ceil((f.x+m)/g)+1,M=Math.floor((f.y-m)/g)-1,w=Math.ceil((f.y+m)/g)+1;if(v<0||w<0||p>h.length||M>h[0].length)return;p<0&&(p=0),v<0&&(v=0),M<0&&(M=0),w<0&&(w=0),p>=h.length&&(p=h.length-1),v>=h.length&&(v=h.length-1),w>=h[0].length&&(w=h[0].length-1),M>=h[0].length&&(M=h[0].length-1);const P=[];e.getRectMinMax(p,M,v,w,P);const b=P[0],A=P[1];if(f.z-m>A||f.z+m<b)return;const F=this.result;for(let j=p;j<v;j++)for(let x=M;x<w;x++){const E=F.length;let V=!1;if(e.getConvexTrianglePillar(j,x,!1),qt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,d)),d&&V||(e.getConvexTrianglePillar(j,x,!0),qt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,d)),d&&V))return!0;if(F.length-E>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,l,c,u,d){const h=e.data,m=e.elementSize,g=t.boundingSphereRadius,_=Y0,f=j0,p=q0;qt.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-g)/m)-1,M=Math.ceil((p.x+g)/m)+1,w=Math.floor((p.y-g)/m)-1,P=Math.ceil((p.y+g)/m)+1;if(M<0||P<0||v>h.length||w>h[0].length)return;v<0&&(v=0),M<0&&(M=0),w<0&&(w=0),P<0&&(P=0),v>=h.length&&(v=h.length-1),M>=h.length&&(M=h.length-1),P>=h[0].length&&(P=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const b=[];e.getRectMinMax(v,w,M,P,b);const A=b[0],F=b[1];if(!(p.z-g>F||p.z+g<A))for(let j=v;j<M;j++)for(let x=w;x<P;x++){let E=!1;if(e.getConvexTrianglePillar(j,x,!1),qt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(E=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,d,f,null)),d&&E||(e.getConvexTrianglePillar(j,x,!0),qt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(E=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,d,f,null)),d&&E))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,u,d){const h=G0;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,u,d){const h=z0;h.set(0,0,1),a.quaternion.vmult(h,h);const m=H0;if(i.vsub(a.position,m),h.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const f=V0;h.scale(h.dot(i),f),i.vsub(f,f),_.rj.copy(f),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexParticle(t,e,n,i,r,o,a,l,c,u,d){let h=-1;const m=W0,g=X0;let _=null;const f=k0;if(f.copy(i),f.vsub(n,f),r.conjugate(Al),Al.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,v=t.faces.length;p!==v;p++){const M=[t.worldVertices[t.faces[p][0]]],w=t.worldFaceNormals[p];i.vsub(M[0],Rl);const P=-w.dot(Rl);if(_===null||Math.abs(P)<Math.abs(_)){if(d)return!0;_=P,h=p,m.copy(w)}}if(h!==-1){const p=this.createContactEquation(l,a,e,t,c,u);m.scale(_,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),m.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,M=p.rj;v.vadd(i,v),v.vsub(l.position,v),M.vadd(n,M),M.vsub(a.position,M),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,u,d){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,u,d)}particleCylinder(t,e,n,i,r,o,a,l,c,u,d){return this.convexParticle(e,t,i,n,o,r,l,a,c,u,d)}sphereTrimesh(t,e,n,i,r,o,a,l,c,u,d){const h=t0,m=e0,g=n0,_=i0,f=s0,p=r0,v=c0,M=Q_,w=Z_,P=h0;qt.pointToLocalFrame(i,o,n,f);const b=t.radius;v.lowerBound.set(f.x-b,f.y-b,f.z-b),v.upperBound.set(f.x+b,f.y+b,f.z+b),e.getTrianglesInAABB(v,P);const A=J_,F=t.radius*t.radius;for(let I=0;I<P.length;I++)for(let L=0;L<3;L++)if(e.getVertex(e.indices[P[I]*3+L],A),A.vsub(f,w),w.lengthSquared()<=F){if(M.copy(A),qt.pointToWorldFrame(i,o,M,A),A.vsub(n,w),d)return!0;let D=this.createContactEquation(a,l,t,e,c,u);D.ni.copy(w),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(A),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let I=0;I<P.length;I++)for(let L=0;L<3;L++){e.getVertex(e.indices[P[I]*3+L],h),e.getVertex(e.indices[P[I]*3+(L+1)%3],m),m.vsub(h,g),f.vsub(m,p);const D=p.dot(g);f.vsub(h,p);let R=p.dot(g);if(R>0&&D<0&&(f.vsub(h,p),_.copy(g),_.normalize(),R=p.dot(_),_.scale(R,p),p.vadd(h,p),p.distanceTo(f)<t.radius)){if(d)return!0;const N=this.createContactEquation(a,l,t,e,c,u);p.vsub(f,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),qt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,N.rj),qt.vectorToWorldFrame(o,N.ni,N.ni),qt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}const j=o0,x=a0,E=l0,V=K_;for(let I=0,L=P.length;I!==L;I++){e.getTriangleVertices(P[I],j,x,E),e.getNormal(P[I],V),f.vsub(j,p);let D=p.dot(V);if(V.scale(D,p),f.vsub(p,p),D=p.distanceTo(f),ue.pointInTriangle(p,j,x,E)&&D<t.radius){if(d)return!0;let R=this.createContactEquation(a,l,t,e,c,u);p.vsub(f,R.ni),R.ni.normalize(),R.ni.scale(t.radius,R.ri),R.ri.vadd(n,R.ri),R.ri.vsub(a.position,R.ri),qt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,R.rj),qt.vectorToWorldFrame(o,R.ni,R.ni),qt.vectorToWorldFrame(o,R.ri,R.ri),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,u,d){const h=new y,m=Y_;m.set(0,0,1),r.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new y;_.copy(h),qt.pointToWorldFrame(i,o,_,h);const f=j_;if(h.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,u);v.ni.copy(m);const M=$_;m.scale(f.dot(m),M),h.vsub(M,M),v.ri.copy(M),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Wn=new y,yi=new y,Si=new y,k_=new y,W_=new y,X_=new de,q_=new de,Y_=new y,j_=new y,$_=new y,K_=new y,Z_=new y;new y;const J_=new y,Q_=new y,t0=new y,e0=new y,n0=new y,i0=new y,s0=new y,r0=new y,o0=new y,a0=new y,l0=new y,c0=new Fe,h0=[],Bs=new y,bl=new y,u0=new y,d0=new y,f0=new y;function p0(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=u0;s[(r+1)%i].vsub(o,a);const l=d0;a.cross(t,l);const c=f0;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const zs=new y,m0=new y,g0=new y,_0=new y,v0=[new y,new y,new y,new y,new y,new y],x0=new y,M0=new y,y0=new y,S0=new y,E0=new y,w0=new y,T0=new y,b0=new y,A0=new y,R0=new y,C0=new y,P0=new y,L0=new y,I0=new y;new y;new y;const D0=new y,N0=new y,U0=new y,F0=new y,O0=new y,B0=new y,z0=new y,H0=new y,V0=new y,G0=new y,Al=new de,k0=new y;new y;const W0=new y,Rl=new y,X0=new y,q0=new y,Y0=new y,j0=[0],$0=new y,K0=new y;class Cl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||Pl(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||Pl(e,u)}}}function Pl(s,t){s.push((t&4294901760)>>16,t&65535)}const Wr=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class Z0{constructor(){this.data={keys:[]}}get(t,e){const n=Wr(t,e);return this.data[n]}set(t,e,n){const i=Wr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Wr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class J0 extends Mc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new r_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new F_,this.constraints=[],this.narrowphase=new G_(this),this.collisionMatrix=new pl,this.collisionMatrixPrevious=new pl,this.bodyOverlapKeeper=new Cl,this.shapeOverlapKeeper=new Cl,this.contactmaterials=[],this.contactMaterialTable=new Z0,this.defaultMaterial=new Qn("default"),this.defaultContactMaterial=new Jn(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof tr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ue.ALL,n.from=t,n.to=e,n.callback=i,Xr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ue.ANY,n.from=t,n.to=e,n.result=i,Xr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ue.CLOSEST,n.from=t,n.to=e,n.result=i,Xr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=fe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=fe.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(fe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=iv,i=sv,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=pt.DYNAMIC;let h=-1/0;const m=this.constraints,g=nv;l.length();const _=l.x,f=l.y,p=l.z;let v=0;for(c&&(h=fe.now()),v=0;v!==r;v++){const I=o[v];if(I.type===d){const L=I.force,D=I.mass;L.x+=D*_,L.y+=D*f,L.z+=D*p}}for(let I=0,L=this.subsystems.length;I!==L;I++)this.subsystems[I].update();c&&(h=fe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=fe.now()-h);let M=m.length;for(v=0;v!==M;v++){const I=m[v];if(!I.collideConnected)for(let L=n.length-1;L>=0;L-=1)(I.bodyA===n[L]&&I.bodyB===i[L]||I.bodyB===n[L]&&I.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),c&&(h=fe.now());const w=ev,P=e.length;for(v=0;v!==P;v++)w.push(e[v]);e.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,w,this.frictionEquations,g),c&&(u.narrowphase=fe.now()-h),c&&(h=fe.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const A=e.length;for(let I=0;I!==A;I++){const L=e[I],D=L.bi,R=L.bj,G=L.si,N=L.sj;let q;if(D.material&&R.material?q=this.getContactMaterial(D.material,R.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,D.material&&R.material&&(D.material.friction>=0&&R.material.friction>=0&&D.material.friction*R.material.friction,D.material.restitution>=0&&R.material.restitution>=0&&(L.restitution=D.material.restitution*R.material.restitution)),a.addEquation(L),D.allowSleep&&D.type===pt.DYNAMIC&&D.sleepState===pt.SLEEPING&&R.sleepState===pt.AWAKE&&R.type!==pt.STATIC){const et=R.velocity.lengthSquared()+R.angularVelocity.lengthSquared(),J=R.sleepSpeedLimit**2;et>=J*2&&(D.wakeUpAfterNarrowphase=!0)}if(R.allowSleep&&R.type===pt.DYNAMIC&&R.sleepState===pt.SLEEPING&&D.sleepState===pt.AWAKE&&D.type!==pt.STATIC){const et=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),J=D.sleepSpeedLimit**2;et>=J*2&&(R.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,R,!0),this.collisionMatrixPrevious.get(D,R)||(ji.body=R,ji.contact=L,D.dispatchEvent(ji),ji.body=D,R.dispatchEvent(ji)),this.bodyOverlapKeeper.set(D.id,R.id),this.shapeOverlapKeeper.set(G.id,N.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=fe.now()-h,h=fe.now()),v=0;v!==r;v++){const I=o[v];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(M=m.length,v=0;v!==M;v++){const I=m[v];I.update();for(let L=0,D=I.equations.length;L!==D;L++){const R=I.equations[L];a.addEquation(R)}}a.solve(t,this),c&&(u.solve=fe.now()-h),a.removeAllEquations();const F=Math.pow;for(v=0;v!==r;v++){const I=o[v];if(I.type&d){const L=F(1-I.linearDamping,t),D=I.velocity;D.scale(L,D);const R=I.angularVelocity;if(R){const G=F(1-I.angularDamping,t);R.scale(G,R)}}}this.dispatchEvent(tv),c&&(h=fe.now());const x=this.stepnumber%(this.quatNormalizeSkip+1)===0,E=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,x,E);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=fe.now()-h),this.stepnumber+=1,this.dispatchEvent(Q0);let V=!0;if(this.allowSleep)for(V=!1,v=0;v!==r;v++){const I=o[v];I.sleepTick(this.time),I.sleepState!==pt.SLEEPING&&(V=!0)}this.hasActiveBodies=V}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(dn,fn),t){for(let r=0,o=dn.length;r<o;r+=2)$i.bodyA=this.getBodyById(dn[r]),$i.bodyB=this.getBodyById(dn[r+1]),this.dispatchEvent($i);$i.bodyA=$i.bodyB=null}if(e){for(let r=0,o=fn.length;r<o;r+=2)Ki.bodyA=this.getBodyById(fn[r]),Ki.bodyB=this.getBodyById(fn[r+1]),this.dispatchEvent(Ki);Ki.bodyA=Ki.bodyB=null}dn.length=fn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(dn,fn),n){for(let r=0,o=dn.length;r<o;r+=2){const a=this.getShapeById(dn[r]),l=this.getShapeById(dn[r+1]);pn.shapeA=a,pn.shapeB=l,a&&(pn.bodyA=a.body),l&&(pn.bodyB=l.body),this.dispatchEvent(pn)}pn.bodyA=pn.bodyB=pn.shapeA=pn.shapeB=null}if(i){for(let r=0,o=fn.length;r<o;r+=2){const a=this.getShapeById(fn[r]),l=this.getShapeById(fn[r+1]);mn.shapeA=a,mn.shapeB=l,a&&(mn.bodyA=a.body),l&&(mn.bodyB=l.body),this.dispatchEvent(mn)}mn.bodyA=mn.bodyB=mn.shapeA=mn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Fe;const Xr=new ue,fe=globalThis.performance||{};if(!fe.now){let s=Date.now();fe.timing&&fe.timing.navigationStart&&(s=fe.timing.navigationStart),fe.now=()=>Date.now()-s}new y;const Q0={type:"postStep"},tv={type:"preStep"},ji={type:pt.COLLIDE_EVENT_NAME,body:null,contact:null},ev=[],nv=[],iv=[],sv=[],dn=[],fn=[],$i={type:"beginContact",bodyA:null,bodyB:null},Ki={type:"endContact",bodyA:null,bodyB:null},pn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},mn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Rc=1/60,Ll=60*7,ti={W:18,D:12.5};function rv(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Cc(s,t,e=ti.W,n=ti.D){const i=rv(t),r=new J0({gravity:new y(0,-55,0),allowSleep:!0});r.solver.iterations=10;const o=new Qn("feltro"),a=new Qn("legno"),l=new Qn("dado");r.addContactMaterial(new Jn(o,l,{friction:.32,restitution:.32})),r.addContactMaterial(new Jn(a,l,{friction:.08,restitution:.55})),r.addContactMaterial(new Jn(l,l,{friction:.12,restitution:.38}));const c=new pt({mass:0,shape:new Tl,material:o});c.quaternion.setFromEuler(-Math.PI/2,0,0),c.kind="floor",r.addBody(c);for(const[v,M,w]of[[-e/2,0,Math.PI/2],[e/2,0,-Math.PI/2],[0,-n/2,0],[0,n/2,Math.PI]]){const P=new pt({mass:0,shape:new Tl,material:a});P.position.set(v,0,M),P.quaternion.setFromEuler(0,w,0),P.kind="wall",r.addBody(P)}const u=i()<.5?-1:1,d=Math.min(2.3,(n-2.6)/3);let h=0;const m=[],g=s.map((v,M)=>{const w=os[v],P=new Pi({vertices:w.V.map(G=>new y(G.x,G.y,G.z)),faces:w.faces.map(G=>G.idx.slice())}),b=new pt({mass:1,shape:P,material:l,linearDamping:.1,angularDamping:.12,sleepSpeedLimit:.25,sleepTimeLimit:.35}),A=Math.floor(M/12),F=M%12,j=F%3,x=Math.floor(F/3),E=(s.length<=3?(i()-.5)*n*.4:(x-1.5)*d)+(i()-.5)*.4;b.position.set(u*(e/2-1.4-j*2.3),2.2+A*2.4+i()*.6,E);const V=i(),I=i(),L=i(),D=Math.sqrt(1-V),R=Math.sqrt(V);return b.quaternion.set(D*Math.sin(2*Math.PI*I),D*Math.cos(2*Math.PI*I),R*Math.sin(2*Math.PI*L),R*Math.cos(2*Math.PI*L)),b.velocity.set(-u*(13+i()*9),1+i()*3,(i()-.5)*9-E*.5),b.angularVelocity.set((i()-.5)*40,(i()-.5)*40,(i()-.5)*40),b.kind="die",b.addEventListener("collide",G=>{const N=G.body;if(N.kind==="die"&&N.id<b.id)return;const q=Math.abs(G.contact.getImpactVelocityAlongNormal());q>1.2&&m.push({step:h,v:q,kind:N.kind})}),r.addBody(b),b}),_=g.map(()=>new Float32Array(Ll*7)),f=g.map(()=>0);let p=0;for(h=0;h<Ll;h++){r.step(Rc);const v=h*7;if(g.forEach((M,w)=>{const P=_[w];P[v]=M.position.x,P[v+1]=M.position.y,P[v+2]=M.position.z,P[v+3]=M.quaternion.x,P[v+4]=M.quaternion.y,P[v+5]=M.quaternion.z,P[v+6]=M.quaternion.w,!(M.sleepState===2||h<30)&&(M.velocity.lengthSquared()<.16&&M.angularVelocity.lengthSquared()<.3?++f[w]>=18&&M.sleep():f[w]=0)}),p=h+1,h>20&&g.every(M=>M.sleepState===2))break}return{frames:_,steps:p,sounds:m,asleep:g.every(v=>v.sleepState===2)}}function Pc(s,t,e){const n=new He;return s.map((i,r)=>{const o=os[i],a=e.frames[r],l=(e.steps-1)*7;n.set(a[l+3],a[l+4],a[l+5],a[l+6]);const c=Ko(o,n),u=o.faces.findIndex(d=>d.value===t[r]);return Rg(o,u,c)||new He})}let we=null,No=null,Lc=!0;function Ic(){try{if(!we){we=new(window.AudioContext||window.webkitAudioContext),No=we.createBuffer(1,Math.floor(we.sampleRate*.3),we.sampleRate);const s=No.getChannelData(0);for(let t=0;t<s.length;t++)s[t]=Math.random()*2-1}we.state==="suspended"&&we.resume()}catch{we=null}}function ov(s){Lc=s,s&&Ic()}function av(s,t){if(!Lc||!we||we.state!=="running")return;const e=we.currentTime,n=we.createBufferSource();n.buffer=No;const i=we.createBiquadFilter();i.type="bandpass";const r=we.createGain();let o=600,a=1.2,l=.5,c=.11;t==="die"?(o=2800+Math.random()*1800,a=5,l=.45,c=.06):t==="wall"?(o=1100+Math.random()*300,a=3,l=.6,c=.09):(o=520+Math.random()*260,l=.7),i.frequency.value=o,i.Q.value=a;const u=Math.max(2e-4,Math.min(1,s/20)*l);r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(u,e+.004),r.gain.exponentialRampToValueAtTime(1e-4,e+c),n.connect(i).connect(r).connect(we.destination),n.start(e,Math.random()*.12,c+.02)}const lv='"Alegreya Sans", "Segoe UI", system-ui, sans-serif',cv={d8:.36,d10:.34,d12:.36,d20:.3},hv={1:[[0,0]],2:[[-1,1],[1,-1]],3:[[-1,1],[0,0],[1,-1]],4:[[-1,1],[1,1],[-1,-1],[1,-1]],5:[[-1,1],[1,1],[0,0],[-1,-1],[1,-1]],6:[[-1,1],[1,1],[-1,0],[1,0],[-1,-1],[1,-1]]};function uv(s){const t=new Ft(s),n=.2126*t.r+.7152*t.g+.0722*t.b>.28,i=new Ft(1,1,1),r=new Ft(0,0,0);return{base:t.getStyle(),hi:t.clone().lerp(i,.16).getStyle(),lo:t.clone().lerp(r,.2).getStyle(),edge:t.clone().lerp(r,.5).getStyle(),ink:n?"#1e1a14":"#f7f1e3",inkShadow:n?"rgba(255,255,255,.4)":"rgba(0,0,0,.55)"}}function Il(s,t,e,n,i,r,o,a){s.save(),s.translate(e,n),s.rotate(r),s.font=`800 ${i}px ${lv}`,s.textAlign="center",s.textBaseline="middle";const l=i*.05;s.fillStyle=o.inkShadow,s.fillText(t,0,l+Math.max(1,i*.035)),s.fillStyle=o.ink,s.fillText(t,0,l),a&&s.fillRect(-i*.22,i*.46,i*.44,i*.07),s.restore()}function dv(s,t,e,n,i,r){const{cols:o}=t.atlas,a=n%o*i,l=Math.floor(n/o)*i,c=(g,_)=>[a+(.5+(g-.5)*es)*i,l+(1-(.5+(_-.5)*es))*i];s.fillStyle=r.base,s.fillRect(a,l,i,i),s.beginPath(),e.uv.forEach(([g,_],f)=>{const[p,v]=c(g,_);f?s.lineTo(p,v):s.moveTo(p,v)}),s.closePath();const[u,d]=c(.5,.5),h=s.createRadialGradient(u,d-i*.1,i*.03,u,d,i*.55);h.addColorStop(0,r.hi),h.addColorStop(1,r.lo),s.fillStyle=h,s.fill(),s.lineJoin="round",s.lineWidth=i*.06,s.strokeStyle=r.edge,s.stroke();const m=i*es;if(t.type==="d6"){const g=m*.068,_=m*.2;for(const[f,p]of hv[e.value]){const v=u+f*_,M=d-p*_;s.beginPath(),s.arc(v,M+1.2,g,0,Math.PI*2),s.fillStyle=r.inkShadow,s.fill(),s.beginPath(),s.arc(v,M,g,0,Math.PI*2),s.fillStyle=r.ink,s.fill()}}else if(t.type==="d4")e.idx.forEach((g,_)=>{const[f,p]=e.uv[_],[v,M]=c(.5+(f-.5)*.56,.5+(p-.5)*.56);Il(s,String(g+1),v,M,m*.22,Math.atan2(f-.5,p-.5),r,!1)});else{const g=String(e.value);Il(s,g,u,d+(t.type==="d10"?m*.06:0),m*cv[t.type],0,r,g==="6"||g==="9")}}function fv(s,t,e={}){const n=new cg({canvas:s,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Fl,n.toneMapping=Bl,n.toneMappingExposure=1;const i=Math.min(8,n.capabilities.getMaxAnisotropy()),r=new mc;r.background=new Ft("#0c0f11");const o=new Io(n);r.environment=o.fromScene(new Pg,.04).texture,r.environmentIntensity=.4;const a=new Ue(36,1,.1,300);r.add(new dg(13622527,1708556,.5));const l=new gg(16773336,2.6);l.position.set(-8,22,10),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.bias=-4e-4,l.shadow.normalBias=.03,r.add(l,l.target);function c(L,D,R,G){const N=document.createElement("canvas");N.width=L,N.height=D,R(N.getContext("2d"),L,D);const q=new hg(N);return q.colorSpace=qe,q.anisotropy=i,G&&(q.wrapS=q.wrapT=js),q}const u=new Ci({roughness:1,metalness:0,map:c(1024,768,(L,D,R)=>{L.fillStyle="#1f4b55",L.fillRect(0,0,D,R);for(let N=0;N<26e3;N++)L.fillStyle=Math.random()<.5?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.07)",L.fillRect(Math.random()*D,Math.random()*R,1+Math.random()*2,1+Math.random()*2);const G=L.createRadialGradient(D/2,R/2,R*.2,D/2,R/2,D*.62);G.addColorStop(0,"rgba(0,0,0,0)"),G.addColorStop(1,"rgba(0,0,0,0.45)"),L.fillStyle=G,L.fillRect(0,0,D,R)})}),d=new Ci({roughness:.55,metalness:0,map:c(1024,128,(L,D,R)=>{L.fillStyle="#5b3920",L.fillRect(0,0,D,R);for(let G=0;G<90;G++){const N=Math.random()*R,q=2+Math.random()*5,et=Math.random()*6;L.strokeStyle=Math.random()<.5?"rgba(30,15,5,0.35)":"rgba(150,100,60,0.18)",L.lineWidth=.6+Math.random()*1.6,L.beginPath();for(let J=0;J<=D;J+=16){const tt=N+Math.sin(J/140+et)*q;J?L.lineTo(J,tt):L.moveTo(J,tt)}L.stroke()}})}),h=new Ci({color:1511950,roughness:.85});(function(){const D=new Ji,{W:R,D:G}=ti,N=.7,q=.9,et=new te(new Oi(R,G),u);et.rotation.x=-Math.PI/2,et.receiveShadow=!0,D.add(et);for(const[$,nt,ct,ot]of[[R+2*N,N,0,-(G/2+N/2)],[R+2*N,N,0,G/2+N/2],[N,G,-(R/2+N/2),0],[N,G,R/2+N/2,0]]){const Tt=new te(new si($,q,nt),d);Tt.position.set(ct,q/2,ot),Tt.castShadow=!0,Tt.receiveShadow=!0,D.add(Tt)}const J=new te(new Oi(240,240),h);J.rotation.x=-Math.PI/2,J.position.y=-.02,J.receiveShadow=!0,D.add(J),r.add(D);const tt=Math.max(R,G)/2+3,yt=l.shadow.camera;yt.left=-tt,yt.right=tt,yt.top=tt,yt.bottom=-tt,yt.near=1,yt.far=70,yt.updateProjectionMatrix()})();function m(){const D=Yh.degToRad(a.fov/2),R=Math.atan(Math.tan(D)*a.aspect),G=ti.W/2+.9,N=ti.D/2+.9,q=Math.max(N/Math.tan(D),G/Math.tan(R))*1.05+1.5;a.position.set(0,Math.cos(.42)*q,Math.sin(.42)*q),a.lookAt(0,0,.35),a.updateProjectionMatrix()}function g(){const L=t.clientWidth,D=t.clientHeight;!L||!D||(n.setSize(L,D,!1),a.aspect=L/D,m())}new ResizeObserver(g).observe(t);const _=new Map;function f(L,D){const R=L.type+"|"+D;if(_.has(R))return _.get(R);const G=160,{cols:N,rows:q}=L.atlas,et=uv(D),J=c(N*G,q*G,yt=>{L.faces.forEach(($,nt)=>dv(yt,L,$,xc(L,nt),G,et))}),tt=new ug({map:J,roughness:.32,metalness:0,clearcoat:.85,clearcoatRoughness:.16});return _.set(R,tt),tt}let p=[],v=[],M=0;const w=new He,P=new He;function b(){v.forEach(L=>r.remove(L)),v=[]}function A(L,D){const R=L.steps-1,G=Math.min(Math.floor(D),R),N=Math.min(G+1,R),q=Math.min(1,D-G);for(const et of L.dice){const J=et.frames,tt=G*7,yt=N*7;et.mesh.position.set(J[tt]+(J[yt]-J[tt])*q,J[tt+1]+(J[yt+1]-J[tt+1])*q,J[tt+2]+(J[yt+2]-J[tt+2])*q),w.set(J[tt+3],J[tt+4],J[tt+5],J[tt+6]),P.set(J[yt+3],J[yt+4],J[yt+5],J[yt+6]),et.mesh.quaternion.slerpQuaternions(w,P,q).multiply(et.qR)}}function F({color:L,list:D,values:R,seed:G,onDone:N}){const q=performance.now(),et=Cc(D,G),J=Pc(D,R,et);M=performance.now()-q,p.length||b();const yt={dice:D.map(($,nt)=>{const ct=os[$],ot=new te(ct.geometry,f(ct,L));return ot.castShadow=!0,ot.receiveShadow=!0,r.add(ot),v.push(ot),{mesh:ot,proto:ct,frames:et.frames[nt],qR:J[nt]}}),steps:et.steps,sounds:et.sounds,si:0,start:performance.now(),onDone:N};p.push(yt),A(yt,0)}function j(L){const D=[];for(const R of p){let G=(L-R.start)/1e3/Rc;const N=G>=R.steps-1;N&&(G=R.steps-1),A(R,G);let q=0;for(;R.si<R.sounds.length&&R.sounds[R.si].step<=G;){const et=R.sounds[R.si++];q++<5&&av(et.v,et.kind)}N&&D.push(R)}if(D.length){p=p.filter(R=>!D.includes(R));for(const R of D)R.onDone&&R.onDone(R.dice.map(G=>G.proto.faces[Ko(G.proto,G.mesh.quaternion)].value))}}let x=performance.now(),E=0,V=0;function I(L){requestAnimationFrame(I);const D=L-x;x=L,E++,V+=D,V>=500&&(e.onStats&&e.onStats(E*1e3/V,V/E,v.length,M,n.info.render.calls),E=0,V=0),j(L),n.render(r,a)}return g(),requestAnimationFrame(I),{play:F,clear:b}}function pv(s=100,t=Math.random){const e={runs:s,dice:0,mismatches:0,notAsleep:0,outside:0,maxSimMs:0,avgSimMs:0,maxSteps:0,avgSteps:0},n=new He;for(let i=0;i<s;i++){const r=1+Math.floor(t()*(i%10===9?30:8)),o=Array.from({length:r},()=>Mn[Math.floor(t()*6)]),a=o.map(h=>1+Math.floor(t()*_c[h])),l=performance.now(),c=Cc(o,1+Math.floor(t()*2e9)),u=Pc(o,a,c),d=performance.now()-l;e.maxSimMs=Math.max(e.maxSimMs,d),e.avgSimMs+=d/s,e.maxSteps=Math.max(e.maxSteps,c.steps),e.avgSteps+=c.steps/s,c.asleep||e.notAsleep++,o.forEach((h,m)=>{const g=c.frames[m],_=(c.steps-1)*7;n.set(g[_+3],g[_+4],g[_+5],g[_+6]).multiply(u[m]);const f=os[h].faces[Ko(os[h],n)].value;e.dice++,f!==a[m]&&e.mismatches++,(Math.abs(g[_])>ti.W/2||Math.abs(g[_+2])>ti.D/2)&&e.outside++})}return e}const oe=s=>document.querySelector(s),ea=document.body.dataset.debug==="1",mv={d4:'<polygon points="12,3 21,20 3,20"/>',d6:'<rect x="4.5" y="4.5" width="15" height="15" rx="1.5"/>',d8:'<polygon points="12,2 21,12 12,22 3,12"/><line x1="3" y1="12" x2="21" y2="12"/>',d10:'<polygon points="12,2 21,11 12,22 3,11"/><polyline points="3,11 12,14 21,11"/><line x1="12" y1="14" x2="12" y2="22"/>',d12:'<polygon points="12,2.5 21.5,9.4 17.9,20.5 6.1,20.5 2.5,9.4"/><polygon points="12,7 16.3,10.1 14.7,15.2 9.3,15.2 7.7,10.1"/>',d20:'<polygon points="12,2 20.7,7 20.7,17 12,22 3.3,17 3.3,7"/><polygon points="12,6.5 17,15 7,15"/>'},Dl=40;let Dc=null;try{Dc=fv(oe("#c"),oe("#stage"),{onStats(s,t,e,n,i){ea&&(oe("#hud").innerHTML=`<b>${s.toFixed(0)}</b> fps · ${t.toFixed(1)} ms/frame · ${e} dadi · fisica ${n.toFixed(0)} ms · ${i} draw call`)}})}catch(s){const t=oe("#loading");throw t.textContent="Questo browser non riesce ad avviare WebGL, che serve per il tavolo 3D.",t.classList.add("err"),s}ea&&(oe("#hud").hidden=!1);const wi={d4:0,d6:0,d8:0,d10:0,d12:0,d20:1};function Ys(){const s=[];for(const t of Mn)for(let e=0;e<wi[t];e++)s.push(t);return s}function na(s){const t={};return s.forEach(e=>{t[e]=(t[e]||0)+1}),Mn.filter(e=>t[e]).map(e=>t[e]+e).join(" + ")}function as(){const s=oe("#pool"),t=Ys().length;s.innerHTML="";for(const e of Mn){const n=document.createElement("div");n.className="die-tile",n.innerHTML=`<div class="head"><svg viewBox="0 0 24 24" aria-hidden="true">${mv[e]}</svg><span class="name">${e}</span></div>
      <div class="stepper"><button class="step" type="button" aria-label="Togli un ${e}" ${wi[e]?"":"disabled"}>−</button>
      <span class="count" aria-live="polite">${wi[e]}</span>
      <button class="step" type="button" aria-label="Aggiungi un ${e}" ${t>=Dl?"disabled":""}>+</button></div>`;const[i,r]=n.querySelectorAll("button");i.addEventListener("click",()=>{wi[e]=Math.max(0,wi[e]-1),as()}),r.addEventListener("click",()=>{Ys().length<Dl&&wi[e]++,as()}),s.appendChild(n)}oe("#formula").textContent=t?na(Ys()):"Aggiungi almeno un dado.",oe("#rollBtn").disabled=!t||is}function ii(s){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Nc(s){const t=oe("#log"),e=t.querySelector(".empty");e&&e.remove();const n=document.createElement("li"),i=new Date(s.created_at).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit",second:"2-digit"});for(n.innerHTML=`<span class="dot" style="background:${ii(s.player.color)}"></span>
    <div class="meta"><strong>${ii(s.player.nickname)}</strong><span>${na(s.dice)} · ${i}</span></div>
    <span class="sum">…</span>
    <div class="vals"><span class="pending">in rotolamento</span></div>`,t.prepend(n);t.children.length>30;)t.lastChild.remove();return n}function Uc(s,t,e){s.querySelector(".sum").textContent=t.total;const n=e===null?"":`<span class="check ${e?"":"bad"}">${e?"✓ facce = server":"✗ faccia diversa dal server"}</span>`;s.querySelector(".vals").innerHTML=t.dice.map((i,r)=>`<span class="chip"><i>${i}</i> ${t.values[r]}</span>`).join("")+n}function gv(s){const t=oe("#toast"),e=s.dice.length>8?na(s.dice):s.dice.map((n,i)=>`${n}: ${s.values[i]}`).join(" · ");t.innerHTML=`<div class="who"><span class="dot" style="background:${ii(s.player.color)}"></span>${ii(s.player.nickname)}</div>
    <div class="detail">${e}</div><div class="total">${s.total}</div>`,t.hidden=!1}function qr(s){const t=oe("#toast");t.innerHTML=`<div class="detail">${ii(s)}</div>`,t.hidden=!1}const Uo=new Set;function Fc(s){if(Uo.has(s.id))return;Uo.add(s.id);const t=Nc(s);oe("#toast").hidden=!0,Dc.play({color:s.player.color,list:s.dice,values:s.values,seed:s.seed,onDone(e){Uc(t,s,e.every((n,i)=>n===s.values[i])),gv(s),s.player.id===ia&&(is=!1,as())}})}for(const s of JSON.parse(oe("#history").textContent))Uo.add(s.id),Uc(Nc(s),s,null);const ia=Number(document.body.dataset.playerId),er=new Map(JSON.parse(oe("#presence").textContent).map(s=>[s.id,s]));function sa(){oe("#playersCount").textContent=`(${er.size})`,oe("#players").innerHTML=[...er.values()].map(s=>`<li><span class="dot" style="background:${ii(s.color)}"></span><span class="nm">${ii(s.nickname)}</span>${s.id===ia?"<small>tu</small>":""}</li>`).join("")}sa();const ra=window.Echo.channel("table."+document.body.dataset.room);ra.listen("DiceRolled",Fc);ra.listen("ParticipantJoined",s=>{er.set(s.id,s),sa()});ra.listen("ParticipantLeft",s=>{s.id!==ia&&(er.delete(s.id),sa())});const Oc=()=>window.axios.post(document.body.dataset.heartbeatUrl).catch(s=>{s.response&&s.response.status===410&&location.reload()});setInterval(Oc,2e4);addEventListener("pageshow",s=>{s.persisted&&Oc()});addEventListener("pagehide",()=>{const s=new FormData;s.append("_token",document.querySelector('meta[name="csrf-token"]').content),navigator.sendBeacon(document.body.dataset.leaveUrl,s)});let is=!1;async function Bc(s){if(!(!s.length||is)){is=!0,oe("#rollBtn").disabled=!0,Ic();try{const{data:t}=await window.axios.post(document.body.dataset.rollsUrl,{dice:s},{headers:{"X-Socket-ID":window.Echo.socketId()}});Fc(t)}catch(t){const e=t.response&&t.response.status;e===403||e===410?location.reload():qr(e===422?"Lancio non valido.":e===429?"Troppi lanci, aspetta un momento.":"Non riesco a lanciare, riprova."),is=!1,as()}}}const zc=()=>Bc(Ys());oe("#rollBtn").addEventListener("click",zc);document.addEventListener("keydown",s=>{if(s.code!=="Space"||s.repeat)return;const t=(s.target.tagName||"").toLowerCase();t==="input"||t==="button"||t==="textarea"||(s.preventDefault(),zc())});const Nl=oe("#stressBtn");Nl&&Nl.addEventListener("click",()=>{const s=Array.from({length:30},()=>Mn[Math.floor(Math.random()*Mn.length)]);s.sort((t,e)=>Mn.indexOf(t)-Mn.indexOf(e)),Bc(s)});oe("#soundBtn").addEventListener("click",s=>{const t=s.currentTarget.getAttribute("aria-pressed")!=="true";ov(t),s.currentTarget.setAttribute("aria-pressed",String(t)),s.currentTarget.textContent="Suono: "+(t?"sì":"no")});const Hc=document.body.dataset.roomUrl;oe("#roomUrl").textContent=Hc.replace(/^https?:\/\//,"");oe("#copyRoom").addEventListener("click",s=>{const t=s.currentTarget,e=()=>{t.textContent="Copiato",setTimeout(()=>{t.textContent="Copia"},1600)},n=()=>{const i=document.createRange();i.selectNodeContents(oe("#roomUrl"));const r=getSelection();r.removeAllRanges(),r.addRange(i)};try{navigator.clipboard.writeText(Hc).then(e,n)}catch{n()}});ea&&(window.__tavolo={selfTest:pv});async function _v(){try{await Promise.race([document.fonts.load('800 40px "Alegreya Sans"'),new Promise(s=>setTimeout(s,2e3))])}catch{}oe("#loading").hidden=!0,as()}_v();
