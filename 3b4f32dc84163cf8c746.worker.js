/*! For license information please see 3b4f32dc84163cf8c746.worker.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{graphNew:()=>Q});const r=.5*Math.PI,o=(t,e)=>Math.round(t/e)*e,n=(t,e,r)=>{if("top-to-bottom"===r)return Math.atan2(t.y-e.y,t.x-e.x);if("left-to-right"===r)return Math.atan2(t.x-e.x,t.y-e.y);throw new Error("Unsupported orientation: ".concat(r))},i=t=>t.x-.5*t.width,s=t=>t.x+.5*t.width,a=t=>t.y-.5*t.height,c=t=>t.y+.5*t.height,p=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top-to-bottom";const r={},n="left-to-right"===e?"x":"y",i="left-to-right"===e?"y":"x";for(const c of t){const t=o(c[n],10);r[t]=r[t]||[],r[t].push(c)}const s=Object.keys(r).map((t=>parseFloat(t)));s.sort(((t,e)=>t-e));const a=s.map((t=>r[t]));for(let o=0;o<a.length;o+=1){a[o].sort(((t,e)=>u(t[i],e[i],t.id,e.id)));for(const t of a[o])t.row=o}return a},u=function(t,e){const r="string"===typeof t?t.localeCompare(e):t-e;for(var o=arguments.length,n=new Array(o>2?o-2:0),i=2;i<o;i++)n[i-2]=arguments[i];return 0!==r||0===n.length?r:u(...n)},h=(t,e,r,o,n,i)=>{const s=n-r,a=i-o,c=(h=1,(p=((t-r)*s+(e-o)*a)/(s*s+a*a||1))<(u=0)?u:p>h?h:p);var p,u,h;return{x:r+s*c,y:o+a*c,ax:r,ay:o,bx:n,by:i}};function f(){return new d}var d=function(){function t(){this.index={},this.array=[]}return t.prototype.size=function(){return this.array.length},t.prototype.empty=function(){return 0===this.array.length},t.prototype.itemAt=function(t){return this.array[t]},t.prototype.contains=function(t){return void 0!==this.index[t.id()]},t.prototype.find=function(t){var e=this.index[t.id()];return void 0===e?void 0:this.array[e]},t.prototype.setDefault=function(t,e){var r=this.index[t.id()];if(void 0===r){var o=new l(t,e());return this.index[t.id()]=this.array.length,this.array.push(o),o}return this.array[r]},t.prototype.insert=function(t,e){var r=new l(t,e),o=this.index[t.id()];return void 0===o?(this.index[t.id()]=this.array.length,this.array.push(r)):this.array[o]=r,r},t.prototype.erase=function(t){var e=this.index[t.id()];if(void 0!==e){this.index[t.id()]=void 0;var r=this.array[e],o=this.array.pop();return r!==o&&(this.array[e]=o,this.index[o.first.id()]=e),r}},t.prototype.copy=function(){for(var e=new t,r=0;r<this.array.length;r++){var o=this.array[r].copy();e.array[r]=o,e.index[o.first.id()]=r}return e},t}(),l=function(){function t(t,e){this.first=t,this.second=e}return t.prototype.copy=function(){return new t(this.first,this.second)},t}(),y=function(){function t(t){void 0===t&&(t=""),this._value=0,this._context=null,this._id=m++,this._name=t}return t.prototype.id=function(){return this._id},t.prototype.name=function(){return this._name},t.prototype.setName=function(t){this._name=t},t.prototype.context=function(){return this._context},t.prototype.setContext=function(t){this._context=t},t.prototype.value=function(){return this._value},t.prototype.setValue=function(t){this._value=t},t.prototype.plus=function(t){return new v(this,t)},t.prototype.minus=function(t){return new v(this,"number"===typeof t?-t:[-1,t])},t.prototype.multiply=function(t){return new v([t,this])},t.prototype.divide=function(t){return new v([1/t,this])},t.prototype.toJSON=function(){return{name:this._name,value:this._value}},t.prototype.toString=function(){return this._context+"["+this._name+":"+this._value+"]"},t}(),m=0,v=function(){function t(){var t=g(arguments);this._terms=t.terms,this._constant=t.constant}return t.prototype.terms=function(){return this._terms},t.prototype.constant=function(){return this._constant},t.prototype.value=function(){for(var t=this._constant,e=0,r=this._terms.size();e<r;e++){var o=this._terms.itemAt(e);t+=o.first.value()*o.second}return t},t.prototype.plus=function(e){return new t(this,e)},t.prototype.minus=function(e){return new t(this,"number"===typeof e?-e:[-1,e])},t.prototype.multiply=function(e){return new t([e,this])},t.prototype.divide=function(e){return new t([1/e,this])},t.prototype.isConstant=function(){return 0==this._terms.size()},t.prototype.toString=function(){var t=this._terms.array.map((function(t){return t.second+"*"+t.first.toString()})).join(" + ");return this.isConstant()||0===this._constant||(t+=" + "),t+=this._constant},t}();function g(t){for(var e=0,r=function(){return 0},o=f(),n=0,i=t.length;n<i;++n){var s=t[n];if("number"===typeof s)e+=s;else if(s instanceof y)o.setDefault(s,r).second+=1;else if(s instanceof v){e+=s.constant();for(var a=0,c=(d=s.terms()).size();a<c;a++){var p=d.itemAt(a);o.setDefault(p.first,r).second+=p.second}}else{if(!(s instanceof Array))throw new Error("invalid Expression argument: "+s);if(2!==s.length)throw new Error("array must have length 2");var u=s[0],h=s[1];if("number"!==typeof u)throw new Error("array item 0 must be a number");if(h instanceof y)o.setDefault(h,r).second+=u;else{if(!(h instanceof v))throw new Error("array item 1 must be a variable or expression");e+=h.constant()*u;var d;for(a=0,c=(d=h.terms()).size();a<c;a++){p=d.itemAt(a);o.setDefault(p.first,r).second+=p.second*u}}}}return{terms:o,constant:e}}var _,b=function(){function t(){}return t.create=function(t,e,r,o){void 0===o&&(o=1);var n=0;return n+=1e6*Math.max(0,Math.min(1e3,t*o)),n+=1e3*Math.max(0,Math.min(1e3,e*o)),n+=Math.max(0,Math.min(1e3,r*o))},t.clip=function(e){return Math.max(0,Math.min(t.required,e))},t.required=t.create(1e3,1e3,1e3),t.strong=t.create(1,0,0),t.medium=t.create(0,1,0),t.weak=t.create(0,0,1),t}();!function(t){t[t.Le=0]="Le",t[t.Ge=1]="Ge",t[t.Eq=2]="Eq"}(_||(_={}));var w,x=function(){function t(t,e,r,o){void 0===o&&(o=b.required),this._id=M++,this._operator=e,this._strength=b.clip(o),this._expression=void 0===r&&t instanceof v?t:t.minus(r)}return t.prototype.id=function(){return this._id},t.prototype.expression=function(){return this._expression},t.prototype.op=function(){return this._operator},t.prototype.strength=function(){return this._strength},t.prototype.toString=function(){return this._expression.toString()+" "+["<=",">=","="][this._operator]+" 0 ("+this._strength.toString()+")"},t}(),M=0,S=function(){function t(){this._cnMap=f(),this._rowMap=f(),this._varMap=f(),this._editMap=f(),this._infeasibleRows=[],this._objective=new z,this._artificial=null,this._idTick=0}return t.prototype.createConstraint=function(t,e,r,o){void 0===o&&(o=b.required);var n=new x(t,e,r,o);return this.addConstraint(n),n},t.prototype.addConstraint=function(t){if(void 0!==this._cnMap.find(t))throw new Error("duplicate constraint");var e=this._createRow(t),r=e.row,o=e.tag,n=this._chooseSubject(r,o);if(n.type()===w.Invalid&&r.allDummies()){if(!E(r.constant()))throw new Error("unsatisfiable constraint");n=o.marker}if(n.type()===w.Invalid){if(!this._addWithArtificialVariable(r))throw new Error("unsatisfiable constraint")}else r.solveFor(n),this._substitute(n,r),this._rowMap.insert(n,r);this._cnMap.insert(t,o),this._optimize(this._objective)},t.prototype.removeConstraint=function(t){var e=this._cnMap.erase(t);if(void 0===e)throw new Error("unknown constraint");this._removeConstraintEffects(t,e.second);var r=e.second.marker,o=this._rowMap.erase(r);if(void 0===o){var n=this._getMarkerLeavingSymbol(r);if(n.type()===w.Invalid)throw new Error("failed to find leaving row");(o=this._rowMap.erase(n)).second.solveForEx(n,r),this._substitute(r,o.second)}this._optimize(this._objective)},t.prototype.hasConstraint=function(t){return this._cnMap.contains(t)},t.prototype.addEditVariable=function(t,e){if(void 0!==this._editMap.find(t))throw new Error("duplicate edit variable");if((e=b.clip(e))===b.required)throw new Error("bad required strength");var r=new v(t),o=new x(r,_.Eq,void 0,e);this.addConstraint(o);var n={tag:this._cnMap.find(o).second,constraint:o,constant:0};this._editMap.insert(t,n)},t.prototype.removeEditVariable=function(t){var e=this._editMap.erase(t);if(void 0===e)throw new Error("unknown edit variable");this.removeConstraint(e.second.constraint)},t.prototype.hasEditVariable=function(t){return this._editMap.contains(t)},t.prototype.suggestValue=function(t,e){var r=this._editMap.find(t);if(void 0===r)throw new Error("unknown edit variable");var o=this._rowMap,n=r.second,i=e-n.constant;n.constant=e;var s=n.tag.marker,a=o.find(s);if(void 0!==a)return a.second.add(-i)<0&&this._infeasibleRows.push(s),void this._dualOptimize();var c=n.tag.other;if(void 0!==(a=o.find(c)))return a.second.add(i)<0&&this._infeasibleRows.push(c),void this._dualOptimize();for(var p=0,u=o.size();p<u;++p){var h=o.itemAt(p),f=h.second,d=f.coefficientFor(s);0!==d&&f.add(i*d)<0&&h.first.type()!==w.External&&this._infeasibleRows.push(h.first)}this._dualOptimize()},t.prototype.updateVariables=function(){for(var t=this._varMap,e=this._rowMap,r=0,o=t.size();r<o;++r){var n=t.itemAt(r),i=e.find(n.second);void 0!==i?n.first.setValue(i.second.constant()):n.first.setValue(0)}},t.prototype._getVarSymbol=function(t){var e=this;return this._varMap.setDefault(t,(function(){return e._makeSymbol(w.External)})).second},t.prototype._createRow=function(t){for(var e=t.expression(),r=new z(e.constant()),o=e.terms(),n=0,i=o.size();n<i;++n){var s=o.itemAt(n);if(!E(s.second)){var a=this._getVarSymbol(s.first),c=this._rowMap.find(a);void 0!==c?r.insertRow(c.second,s.second):r.insertSymbol(a,s.second)}}var p=this._objective,u=t.strength(),h={marker:k,other:k};switch(t.op()){case _.Le:case _.Ge:var f=t.op()===_.Le?1:-1,d=this._makeSymbol(w.Slack);if(h.marker=d,r.insertSymbol(d,f),u<b.required){var l=this._makeSymbol(w.Error);h.other=l,r.insertSymbol(l,-f),p.insertSymbol(l,u)}break;case _.Eq:if(u<b.required){var y=this._makeSymbol(w.Error),m=this._makeSymbol(w.Error);h.marker=y,h.other=m,r.insertSymbol(y,-1),r.insertSymbol(m,1),p.insertSymbol(y,u),p.insertSymbol(m,u)}else{var v=this._makeSymbol(w.Dummy);h.marker=v,r.insertSymbol(v)}}return r.constant()<0&&r.reverseSign(),{row:r,tag:h}},t.prototype._chooseSubject=function(t,e){for(var r=t.cells(),o=0,n=r.size();o<n;++o){var i=r.itemAt(o);if(i.first.type()===w.External)return i.first}var s=e.marker.type();return(s===w.Slack||s===w.Error)&&t.coefficientFor(e.marker)<0?e.marker:((s=e.other.type())===w.Slack||s===w.Error)&&t.coefficientFor(e.other)<0?e.other:k},t.prototype._addWithArtificialVariable=function(t){var e=this._makeSymbol(w.Slack);this._rowMap.insert(e,t.copy()),this._artificial=t.copy(),this._optimize(this._artificial);var r=E(this._artificial.constant());this._artificial=null;var o=this._rowMap.erase(e);if(void 0!==o){var n=o.second;if(n.isConstant())return r;var i=this._anyPivotableSymbol(n);if(i.type()===w.Invalid)return!1;n.solveForEx(e,i),this._substitute(i,n),this._rowMap.insert(i,n)}for(var s=this._rowMap,a=0,c=s.size();a<c;++a)s.itemAt(a).second.removeSymbol(e);return this._objective.removeSymbol(e),r},t.prototype._substitute=function(t,e){for(var r=this._rowMap,o=0,n=r.size();o<n;++o){var i=r.itemAt(o);i.second.substitute(t,e),i.second.constant()<0&&i.first.type()!==w.External&&this._infeasibleRows.push(i.first)}this._objective.substitute(t,e),this._artificial&&this._artificial.substitute(t,e)},t.prototype._optimize=function(t){for(;;){var e=this._getEnteringSymbol(t);if(e.type()===w.Invalid)return;var r=this._getLeavingSymbol(e);if(r.type()===w.Invalid)throw new Error("the objective is unbounded");var o=this._rowMap.erase(r).second;o.solveForEx(r,e),this._substitute(e,o),this._rowMap.insert(e,o)}},t.prototype._dualOptimize=function(){for(var t=this._rowMap,e=this._infeasibleRows;0!==e.length;){var r=e.pop(),o=t.find(r);if(void 0!==o&&o.second.constant()<0){var n=this._getDualEnteringSymbol(o.second);if(n.type()===w.Invalid)throw new Error("dual optimize failed");var i=o.second;t.erase(r),i.solveForEx(r,n),this._substitute(n,i),t.insert(n,i)}}},t.prototype._getEnteringSymbol=function(t){for(var e=t.cells(),r=0,o=e.size();r<o;++r){var n=e.itemAt(r),i=n.first;if(n.second<0&&i.type()!==w.Dummy)return i}return k},t.prototype._getDualEnteringSymbol=function(t){for(var e=Number.MAX_VALUE,r=k,o=t.cells(),n=0,i=o.size();n<i;++n){var s=o.itemAt(n),a=s.first,c=s.second;if(c>0&&a.type()!==w.Dummy){var p=this._objective.coefficientFor(a)/c;p<e&&(e=p,r=a)}}return r},t.prototype._getLeavingSymbol=function(t){for(var e=Number.MAX_VALUE,r=k,o=this._rowMap,n=0,i=o.size();n<i;++n){var s=o.itemAt(n),a=s.first;if(a.type()!==w.External){var c=s.second,p=c.coefficientFor(t);if(p<0){var u=-c.constant()/p;u<e&&(e=u,r=a)}}}return r},t.prototype._getMarkerLeavingSymbol=function(t){for(var e=Number.MAX_VALUE,r=e,o=e,n=k,i=n,s=n,a=n,c=this._rowMap,p=0,u=c.size();p<u;++p){var h=c.itemAt(p),f=h.second,d=f.coefficientFor(t);if(0!==d){var l=h.first;if(l.type()===w.External)a=l;else if(d<0){(y=-f.constant()/d)<r&&(r=y,i=l)}else{var y;(y=f.constant()/d)<o&&(o=y,s=l)}}}return i!==n?i:s!==n?s:a},t.prototype._removeConstraintEffects=function(t,e){e.marker.type()===w.Error&&this._removeMarkerEffects(e.marker,t.strength()),e.other.type()===w.Error&&this._removeMarkerEffects(e.other,t.strength())},t.prototype._removeMarkerEffects=function(t,e){var r=this._rowMap.find(t);void 0!==r?this._objective.insertRow(r.second,-e):this._objective.insertSymbol(t,-e)},t.prototype._anyPivotableSymbol=function(t){for(var e=t.cells(),r=0,o=e.size();r<o;++r){var n=e.itemAt(r),i=n.first.type();if(i===w.Slack||i===w.Error)return n.first}return k},t.prototype._makeSymbol=function(t){return new N(t,this._idTick++)},t}();function E(t){return t<0?-t<1e-8:t<1e-8}!function(t){t[t.Invalid=0]="Invalid",t[t.External=1]="External",t[t.Slack=2]="Slack",t[t.Error=3]="Error",t[t.Dummy=4]="Dummy"}(w||(w={}));var N=function(){function t(t,e){this._id=e,this._type=t}return t.prototype.id=function(){return this._id},t.prototype.type=function(){return this._type},t}(),k=new N(w.Invalid,-1),z=function(){function t(t){void 0===t&&(t=0),this._cellMap=f(),this._constant=t}return t.prototype.cells=function(){return this._cellMap},t.prototype.constant=function(){return this._constant},t.prototype.isConstant=function(){return this._cellMap.empty()},t.prototype.allDummies=function(){for(var t=this._cellMap,e=0,r=t.size();e<r;++e){if(t.itemAt(e).first.type()!==w.Dummy)return!1}return!0},t.prototype.copy=function(){var e=new t(this._constant);return e._cellMap=this._cellMap.copy(),e},t.prototype.add=function(t){return this._constant+=t},t.prototype.insertSymbol=function(t,e){void 0===e&&(e=1),E(this._cellMap.setDefault(t,(function(){return 0})).second+=e)&&this._cellMap.erase(t)},t.prototype.insertRow=function(t,e){void 0===e&&(e=1),this._constant+=t._constant*e;for(var r=t._cellMap,o=0,n=r.size();o<n;++o){var i=r.itemAt(o);this.insertSymbol(i.first,i.second*e)}},t.prototype.removeSymbol=function(t){this._cellMap.erase(t)},t.prototype.reverseSign=function(){this._constant=-this._constant;for(var t=this._cellMap,e=0,r=t.size();e<r;++e){var o=t.itemAt(e);o.second=-o.second}},t.prototype.solveFor=function(t){var e=this._cellMap,r=-1/e.erase(t).second;this._constant*=r;for(var o=0,n=e.size();o<n;++o)e.itemAt(o).second*=r},t.prototype.solveForEx=function(t,e){this.insertSymbol(t,-1),this.solveFor(e)},t.prototype.coefficientFor=function(t){var e=this._cellMap.find(t);return void 0!==e?e.second:0},t.prototype.substitute=function(t,e){var r=this._cellMap.erase(t);void 0!==r&&this.insertRow(e,r.second)},t}();const A=(t,e,r)=>{for(let o=0;o<e;o+=1)for(const e of t)e.base.solve(e,r)},P=(t,e)=>{const r=new S,o={},n=(t,e)=>"".concat(t.id,"_").concat(e),i=(t,e)=>{const r=n(t,e);if(!o[r]){const n=o[r]=new y;n.property=e,n.obj=t}};for(const p of t){const t=p.property||p.base.property;i(p.a,t),i(p.b,t)}let s=0;for(const p of t){const t=p.property||p.base.property;try{r.addConstraint(p.base.strict(p,e,o[n(p.a,t)],o[n(p.b,t)]))}catch(c){s+=1}}s>0&&console.warn("Skipped ".concat(s," unsolvable constraints")),r.updateVariables();const a=Object.values(o);for(const p of a)p.obj[p.property]=p.value()},j={strict:(t,e,r,o)=>new x(r.minus(o),_.Ge,t.separation,b.required)},C={strict:(t,e,r,o)=>new x(r.minus(o),_.Ge,e.layerSpace,b.required)},F={solve:(t,e)=>{const{a:r,b:o,strength:n}=t,i=n*(r[e.coordPrimary]-o[e.coordPrimary]);r[e.coordPrimary]-=i,o[e.coordPrimary]+=i},strict:(t,e,r,o)=>new x(r.minus(o),_.Eq,0,b.create(1,0,0,t.strength))},O={solve:(t,e)=>{const{edgeA:r,edgeB:o,separationA:n,separationB:i,strength:s}=t,a=s*((r.sourceNode[e.coordPrimary]-o.sourceNode[e.coordPrimary]-n)/n),c=s*((r.targetNode[e.coordPrimary]-o.targetNode[e.coordPrimary]-i)/i);r.sourceNode[e.coordPrimary]-=a,o.sourceNode[e.coordPrimary]+=a,r.targetNode[e.coordPrimary]-=c,o.targetNode[e.coordPrimary]+=c}},R={strict:(t,e,r,o)=>new x(o.minus(r),_.Ge,t.separation,b.required)},D=(t,e)=>t.map((t=>({base:j,property:e.coordSecondary,a:t.targetNode,b:t.sourceNode,separation:e.spaceY}))),q=(t,e,r)=>{const o=[];if(!e)return o;const n=e.map((e=>t.filter((t=>t.nearestLayer===e))));for(let i=0;i<n.length-1;i+=1){const t=n[i],e=n[i+1],s={id:"layer-".concat(i),x:0,y:0};for(const n of t)o.push({base:C,a:s,b:n,property:r.coordSecondary});for(const n of e)o.push({base:C,a:n,b:s,property:r.coordSecondary})}return o},V=(t,e)=>{const{spaceX:r,coordPrimary:o}=e,n=[];for(let i=0;i<t.length;i+=1){const e=t[i],{sourceNode:s,targetNode:a}=e,c=s.sources.length+s.targets.length+a.sources.length+a.targets.length;for(let p=i+1;p<t.length;p+=1){const i=t[p],{sourceNode:u,targetNode:h}=i;if(s.row>=h.row||a.row<=u.row)continue;const f=u.sources.length+u.targets.length+h.sources.length+h.targets.length;n.push({base:O,property:o,edgeA:e,edgeB:i,separationA:.5*s.width+r+.5*u.width,separationB:.5*a.width+r+.5*h.width,strength:1/Math.max(1,(c+f)/4)})}}return n},X=(t,e)=>t.map((t=>{let{sourceNode:r,targetNode:o}=t;return{base:F,property:e.coordPrimary,a:r,b:o,strength:.6/Math.max(1,r.targets.length+o.sources.length-2)}})),I=(t,e)=>{const{spaceX:r,coordPrimary:n,spreadX:i,orientation:s}=e,a=[];for(let c=0;c<t.length;c+=1){const e=t[c];e.sort(((t,e)=>u(t[n],e[n],t.id,e.id)));for(let t=0;t<e.length-1;t+=1){const c=e[t],p=e[t+1],u=Math.max(1,c.targets.length+c.sources.length-2),h=Math.max(1,p.targets.length+p.sources.length-2),f=Math.min(10,u*h*i),d=o(f*r,r);let l=.5*c.width+d+.5*p.width;"left-to-right"===s&&(l=c.height+p.height),a.push({base:R,property:n,a:c,b:p,separation:l})}}return a},L=function(t,e,r,n,i){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.25,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:.25;const c=G(t,i),p=Math.round(n*a);let u=0;for(let h=0;h<e.length-1;h+=1){const t=c[h]||0,a=o(t*s*n,p);if("left-to-right"===i){u+=a+.5*Math.max(...e[h].map((t=>t.width)))+.5*Math.max(...e[h+1].map((t=>t.width)))}else u+=a;for(const o of e[h+1])o[r]+=u}},G=(t,e)=>{const o={};for(const i of t){const t=Math.abs(n(i.targetNode,i.sourceNode,e)-r)/r,s=i.sourceNode.row,a=i.targetNode.row-1;o[s]=o[s]||[0,0],o[s][0]+=t,o[s][1]+=1,a!==s&&(o[a]=o[a]||[0,0],o[a][0]+=t,o[a][1]+=1)}for(const r in o)o[r]=o[r][0]/(o[r][1]||1);return Object.values(o)},T={layout:{spaceX:14,spaceY:110,layerSpaceY:100,spreadX:2.2,padding:100,iterations:25},routing:{spaceX:26,spaceY:28,minPassageGap:40,stemUnit:8,stemMinSource:5,stemMinTarget:5,stemMax:10,stemSpaceSource:6,stemSpaceTarget:10}},Y=function(t,e,r,o){let f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:T;U(t,e),B(t,r),(t=>{let{nodes:e,edges:r,layers:o,spaceX:n,spaceY:i,spreadX:s,layerSpaceY:a,iterations:c,orientation:u}=t,h="x",f="y";"left-to-right"===u&&(h="y",f="x");for(const p of e)p[h]=0,p[f]=0;const d={orientation:u,spaceX:n,spaceY:i,spreadX:s,layerSpace:.5*(n+a),coordPrimary:h,coordSecondary:f},l=D(r,d),y=q(e,o,d);P([...l,...y],d);const m=p(e,u),v=V(r,d),g=X(r,d);for(let p=0;p<c;p+=1)A(v,1,d),A(g,50,d);const _=I(m,d);P([..._,...g],d),L(r,m,f,i,u)})({nodes:t,edges:e,layers:r,orientation:o,...f.layout}),(t=>{let{nodes:e,edges:r,spaceX:o,spaceY:f,minPassageGap:d,stemUnit:l,stemMinSource:y,stemMinTarget:m,stemMax:v,stemSpaceSource:g,stemSpaceTarget:_,orientation:b}=t;const w=p(e,b);for(const i of e)i.targets.sort(((t,e)=>u(n(e.sourceNode,e.targetNode,b),n(t.sourceNode,t.targetNode,b))));for(const n of r){const t=n.sourceNode,e=n.targetNode;n.points=[];const r=Math.min((t.width-g)/t.targets.length,g)*(t.targets.indexOf(n)-.5*(t.targets.length-1));let c={x:t.x+r,y:t.y};for(let p=t.row+1;p<e.row;p+=1){const t=w[p][0];let e={x:i(t)-o,y:t.y},u=1/0;const l=[{...t,x:Number.MIN_SAFE_INTEGER},...w[p],{...t,x:Number.MAX_SAFE_INTEGER}];for(let r=0;r<l.length-1;r+=1){const t=l[r],n=l[r+1],p=i(n)-s(t);if(p<d)continue;const y=Math.min(o,.5*p);let m,v,g,_;"top-to-bottom"===b&&(m=s(t)+y,v=a(t)-f,g=i(n)-y,_=a(n)-f);const w=h(c.x,c.y,m,v,g,_),S=(x=c.x,M=w.x,Math.abs(x-M));if(S>u)break;S<u&&(u=S,e=w)}const y=t.height+f;n.points.push({x:e.x+r,y:e.y}),n.points.push({x:e.x+r,y:e.y+y}),c={x:e.x,y:e.y+y}}}var x,M;for(const i of e)i.targets.sort(((t,e)=>u(n(e.sourceNode,e.points[0]||e.targetNode,b),n(t.sourceNode,t.points[0]||t.targetNode,b)))),i.sources.sort(((t,e)=>u(n(t.points[t.points.length-1]||t.sourceNode,t.targetNode,b),n(e.points[e.points.length-1]||e.sourceNode,e.targetNode,b))));for(const n of r){const t=n.sourceNode,e=n.targetNode,r=Math.min((t.width-g)/t.targets.length,g),o=Math.min((e.width-_)/e.sources.length,_),p=t.targets.indexOf(n)-.5*(t.targets.length-1),u=e.sources.indexOf(n)-.5*(e.sources.length-1),h=r*p,f=o*u,d=l*t.targets.length*(1-Math.abs(p)/t.targets.length),w=l*e.sources.length*(1-Math.abs(u)/e.sources.length);let x,M;if("top-to-bottom"===b)x=[{x:t.x+h,y:c(t)},{x:t.x+h,y:c(t)+y},{x:t.x+h,y:c(t)+y+Math.min(d,v)}],M=[{x:e.x+f,y:a(e)-m-Math.min(w,v)},{x:e.x+f,y:a(e)-m},{x:e.x+f,y:a(e)}];else{if("left-to-right"!==b)throw new Error("Unsupported orientation: ".concat(b));x=[{x:s(t),y:t.y+h},{y:t.y+h,x:s(t)+y},{y:t.y+h,x:s(t)+y+Math.min(d,v)}],M=[{y:e.y+f,x:i(e)-m-Math.min(w,v)},{y:e.y+f,x:i(e)-m},{y:e.y+f,x:i(e)}]}const S=[...x,...n.points,...M];n.points=S}})({nodes:t,edges:e,layers:r,orientation:o,...f.routing});const d=K(t,f.layout.padding);return t.forEach((t=>((t,e)=>(t.x=t.x-e.x,t.y=t.y-e.y,t.order=t.x+9999*t.y,t))(t,d.min))),e.forEach((t=>((t,e)=>(t.points.forEach((t=>{t.x=t.x-e.x,t.y=t.y-e.y})),t))(t,d.min))),{nodes:t,edges:e,layers:r,size:d}},U=(t,e)=>{const r={};for(const o of t)r[o.id]=o,o.targets=[],o.sources=[];for(const o of e)o.sourceNode=r[o.source],o.targetNode=r[o.target],o.sourceNode.targets.push(o),o.targetNode.sources.push(o)},B=(t,e)=>{if(e&&e.length>0){const r={};for(const t of e)r[t]=!0;const o=t=>Boolean(t&&t.layer in r),n=e[e.length-1];for(const e of t){const t=H(e,W,J,o);e.nearestLayer=t?t.layer:n}}},W=t=>t.targets.map((t=>t.targetNode)),J=(t,e)=>t.rank-e.rank,H=(t,e,r,o,n)=>{if(o(t))return t;(n=n||{})[t.id]=!0;return e(t).filter((t=>!n[t.id])).sort(r).map((t=>H(t,e,r,o,n))).filter(o).sort(r)[0]},K=(t,e)=>{const r={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}};for(const o of t){const t=o.x,e=o.y;t<r.min.x&&(r.min.x=t),t>r.max.x&&(r.max.x=t),e<r.min.y&&(r.min.y=e),e>r.max.y&&(r.max.y=e)}return r.width=r.max.x-r.min.x+2*e,r.height=r.max.y-r.min.y+2*e,r.min.x-=e,r.min.y-=e,r},Q=t=>{let{nodes:e,edges:r,layers:o,orient:n=!1}=t;for(const a of e){a.iconSize=a.iconSize||24,a.icon=a.icon||"node";const t={x:20,y:10},e=7*(a&&a.fullName&&a.fullName.length||a&&a.name&&a.name.length),r=6,o=a.iconSize+e+r;a.width=a.width||o+2*t.x,a.height=a.height||a.iconSize+2*t.y,a.textOffset=a.textOffset||(o-e)/2,a.iconOffset=a.iconOffset||-o/2}let i="top-to-bottom";n&&(i="left-to-right");const s=Y(e,r,o,i);return{...s,size:{...s.size,marginx:100,marginy:100}}};addEventListener("message",(function(t){var r,o=t.data,n=o.type,i=o.method,s=o.id,a=o.params;"RPC"===n&&i&&((r=e[i])?Promise.resolve().then((function(){return r.apply(e,a)})):Promise.reject("No such method")).then((function(t){postMessage({type:"RPC",id:s,result:t})})).catch((function(t){var e={message:t};t.stack&&(e.message=t.message,e.stack=t.stack,e.name=t.name),postMessage({type:"RPC",id:s,error:e})}))})),postMessage({type:"RPC",method:"ready"})})();