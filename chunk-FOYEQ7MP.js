import{a as Et}from"./chunk-ATN6DCQW.js";import{$a as ut,G as lt,Ga as ct,Ia as vt,J as ri,Pa as Vt,Qa as It,b as oi,c as hi,cb as G,db as Mt,fb as Wt,gb as Ot,hb as zt,ib as Bt,jb as Ft,kb as Nt,lb as gt,m as ht,n as rt,rb as Xt}from"./chunk-AR4EYG3N.js";import{f as ot}from"./chunk-SFCUYGNE.js";var vi=ot(oi(),1),Vi=ot(hi(),1),Ii=ot(ri(),1);var xt=function(){var e=function(M,o,l,c){for(l=l||{},c=M.length;c--;l[M[c]]=o);return l},t=[1,10,12,14,16,18,19,21,23],i=[2,6],s=[1,3],n=[1,5],h=[1,6],g=[1,7],f=[1,5,10,12,14,16,18,19,21,23,34,35,36],y=[1,25],L=[1,26],_=[1,28],C=[1,29],P=[1,30],E=[1,31],k=[1,32],v=[1,33],d=[1,34],w=[1,35],r=[1,36],R=[1,37],B=[1,43],Ct=[1,42],Rt=[1,47],U=[1,50],b=[1,10,12,14,16,18,19,21,23,34,35,36],J=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],T=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],Tt=[1,64],tt={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:function(o,l,c,u,m,a,F){var x=a.length-1;switch(m){case 5:u.setOrientation(a[x]);break;case 9:u.setDiagramTitle(a[x].text.trim());break;case 12:u.setLineData({text:"",type:"text"},a[x]);break;case 13:u.setLineData(a[x-1],a[x]);break;case 14:u.setBarData({text:"",type:"text"},a[x]);break;case 15:u.setBarData(a[x-1],a[x]);break;case 16:this.$=a[x].trim(),u.setAccTitle(this.$);break;case 17:case 18:this.$=a[x].trim(),u.setAccDescription(this.$);break;case 19:this.$=a[x-1];break;case 20:this.$=[Number(a[x-2]),...a[x]];break;case 21:this.$=[Number(a[x])];break;case 22:u.setXAxisTitle(a[x]);break;case 23:u.setXAxisTitle(a[x-1]);break;case 24:u.setXAxisTitle({type:"text",text:""});break;case 25:u.setXAxisBand(a[x]);break;case 26:u.setXAxisRangeData(Number(a[x-2]),Number(a[x]));break;case 27:this.$=a[x-1];break;case 28:this.$=[a[x-2],...a[x]];break;case 29:this.$=[a[x]];break;case 30:u.setYAxisTitle(a[x]);break;case 31:u.setYAxisTitle(a[x-1]);break;case 32:u.setYAxisTitle({type:"text",text:""});break;case 33:u.setYAxisRangeData(Number(a[x-2]),Number(a[x]));break;case 37:this.$={text:a[x],type:"text"};break;case 38:this.$={text:a[x],type:"text"};break;case 39:this.$={text:a[x],type:"markdown"};break;case 40:this.$=a[x];break;case 41:this.$=a[x-1]+""+a[x];break}},table:[e(t,i,{3:1,4:2,7:4,5:s,34:n,35:h,36:g}),{1:[3]},e(t,i,{4:2,7:4,3:8,5:s,34:n,35:h,36:g}),e(t,i,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:n,35:h,36:g}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},e(f,[2,34]),e(f,[2,35]),e(f,[2,36]),{1:[2,1]},e(t,i,{4:2,7:4,3:21,5:s,34:n,35:h,36:g}),{1:[2,3]},e(f,[2,5]),e(t,[2,7],{4:22,34:n,35:h,36:g}),{11:23,37:24,38:y,39:L,40:27,41:_,42:C,43:P,44:E,45:k,46:v,47:d,48:w,49:r,50:R},{11:39,13:38,24:B,27:Ct,29:40,30:41,37:24,38:y,39:L,40:27,41:_,42:C,43:P,44:E,45:k,46:v,47:d,48:w,49:r,50:R},{11:45,15:44,27:Rt,33:46,37:24,38:y,39:L,40:27,41:_,42:C,43:P,44:E,45:k,46:v,47:d,48:w,49:r,50:R},{11:49,17:48,24:U,37:24,38:y,39:L,40:27,41:_,42:C,43:P,44:E,45:k,46:v,47:d,48:w,49:r,50:R},{11:52,17:51,24:U,37:24,38:y,39:L,40:27,41:_,42:C,43:P,44:E,45:k,46:v,47:d,48:w,49:r,50:R},{20:[1,53]},{22:[1,54]},e(b,[2,18]),{1:[2,2]},e(b,[2,8]),e(b,[2,9]),e(J,[2,37],{40:55,41:_,42:C,43:P,44:E,45:k,46:v,47:d,48:w,49:r,50:R}),e(J,[2,38]),e(J,[2,39]),e(T,[2,40]),e(T,[2,42]),e(T,[2,43]),e(T,[2,44]),e(T,[2,45]),e(T,[2,46]),e(T,[2,47]),e(T,[2,48]),e(T,[2,49]),e(T,[2,50]),e(T,[2,51]),e(b,[2,10]),e(b,[2,22],{30:41,29:56,24:B,27:Ct}),e(b,[2,24]),e(b,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:y,39:L,40:27,41:_,42:C,43:P,44:E,45:k,46:v,47:d,48:w,49:r,50:R},e(b,[2,11]),e(b,[2,30],{33:60,27:Rt}),e(b,[2,32]),{31:[1,61]},e(b,[2,12]),{17:62,24:U},{25:63,27:Tt},e(b,[2,14]),{17:65,24:U},e(b,[2,16]),e(b,[2,17]),e(T,[2,41]),e(b,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},e(b,[2,31]),{27:[1,69]},e(b,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},e(b,[2,15]),e(b,[2,26]),e(b,[2,27]),{11:59,32:72,37:24,38:y,39:L,40:27,41:_,42:C,43:P,44:E,45:k,46:v,47:d,48:w,49:r,50:R},e(b,[2,33]),e(b,[2,19]),{25:73,27:Tt},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:function(o,l){if(l.recoverable)this.trace(o);else{var c=new Error(o);throw c.hash=l,c}},parse:function(o){var l=this,c=[0],u=[],m=[null],a=[],F=this.table,x="",$=0,Dt=0,ei=2,Lt=1,si=a.slice.call(arguments,1),A=Object.create(this.lexer),W={yy:{}};for(var et in this.yy)Object.prototype.hasOwnProperty.call(this.yy,et)&&(W.yy[et]=this.yy[et]);A.setInput(o,W.yy),W.yy.lexer=A,W.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var st=A.yylloc;a.push(st);var ni=A.options&&A.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ai(){var I;return I=u.pop()||A.lex()||Lt,typeof I!="number"&&(I instanceof Array&&(u=I,I=u.pop()),I=l.symbols_[I]||I),I}for(var S,O,D,nt,z={},q,V,Pt,j;;){if(O=c[c.length-1],this.defaultActions[O]?D=this.defaultActions[O]:((S===null||typeof S>"u")&&(S=ai()),D=F[O]&&F[O][S]),typeof D>"u"||!D.length||!D[0]){var at="";j=[];for(q in F[O])this.terminals_[q]&&q>ei&&j.push("'"+this.terminals_[q]+"'");A.showPosition?at="Parse error on line "+($+1)+`:
`+A.showPosition()+`
Expecting `+j.join(", ")+", got '"+(this.terminals_[S]||S)+"'":at="Parse error on line "+($+1)+": Unexpected "+(S==Lt?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(at,{text:A.match,token:this.terminals_[S]||S,line:A.yylineno,loc:st,expected:j})}if(D[0]instanceof Array&&D.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+S);switch(D[0]){case 1:c.push(S),m.push(A.yytext),a.push(A.yylloc),c.push(D[1]),S=null,Dt=A.yyleng,x=A.yytext,$=A.yylineno,st=A.yylloc;break;case 2:if(V=this.productions_[D[1]][1],z.$=m[m.length-V],z._$={first_line:a[a.length-(V||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(V||1)].first_column,last_column:a[a.length-1].last_column},ni&&(z._$.range=[a[a.length-(V||1)].range[0],a[a.length-1].range[1]]),nt=this.performAction.apply(z,[x,Dt,$,W.yy,D[1],m,a].concat(si)),typeof nt<"u")return nt;V&&(c=c.slice(0,-1*V*2),m=m.slice(0,-1*V),a=a.slice(0,-1*V)),c.push(this.productions_[D[1]][0]),m.push(z.$),a.push(z._$),Pt=F[c[c.length-2]][c[c.length-1]],c.push(Pt);break;case 3:return!0}}return!0}},ii=function(){var M={EOF:1,parseError:function(l,c){if(this.yy.parser)this.yy.parser.parseError(l,c);else throw new Error(l)},setInput:function(o,l){return this.yy=l||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var l=o.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var l=o.length,c=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===u.length?this.yylloc.first_column:0)+u[u.length-c.length].length-c[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),l=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+l+"^"},test_match:function(o,l){var c,u,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),u=o[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],c=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var a in m)this[a]=m[a];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,l,c,u;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),a=0;a<m.length;a++)if(c=this._input.match(this.rules[m[a]]),c&&(!l||c[0].length>l[0].length)){if(l=c,u=a,this.options.backtrack_lexer){if(o=this.test_match(c,m[a]),o!==!1)return o;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(o=this.test_match(l,m[u]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return l||this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},pushState:function(l){this.begin(l)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(l,c,u,m){switch(u){case 0:break;case 1:break;case 2:return this.popState(),34;case 3:return this.popState(),34;case 4:return 34;case 5:break;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 25:this.popState();break;case 26:this.pushState("string");break;case 27:this.popState();break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 43:break;case 44:return 35;case 45:return 36}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};return M}();tt.lexer=ii;function it(){this.yy={}}return it.prototype=tt,tt.Parser=it,new it}();xt.parser=xt;var li=xt;function Yt(e){return e.type==="bar"}function qt(e){return e.type==="band"}function N(e){return e.type==="linear"}var Q=class{constructor(t){this.parentGroup=t}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce((h,g)=>Math.max(g.length,h),0)*i,height:i};let s={width:0,height:0},n=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(let h of t){let g=Et(n,1,h),f=g?g.width:h.length*i,y=g?g.height:i;s.width=Math.max(s.width,f),s.height=Math.max(s.height,y)}return n.remove(),s}},Ht=.7,Ut=.2,K=class{constructor(t,i,s,n){this.axisConfig=t,this.title=i,this.textDimensionCalculator=s,this.axisThemeConfig=n,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}setRange(t){this.range=t,this.axisPosition==="left"||this.axisPosition==="right"?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){let t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){Ht*this.getTickDistance()>this.outerPadding*2&&(this.outerPadding=Math.floor(Ht*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){let s=this.getLabelDimension(),n=Ut*t.width;this.outerPadding=Math.min(s.width/2,n);let h=s.height+this.axisConfig.labelPadding*2;this.labelTextHeight=s.height,h<=i&&(i-=h,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){let s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),n=s.height+this.axisConfig.titlePadding*2;this.titleTextHeight=s.height,n<=i&&(i-=n,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){let s=this.getLabelDimension(),n=Ut*t.height;this.outerPadding=Math.min(s.height/2,n);let h=s.width+this.axisConfig.labelPadding*2;h<=i&&(i-=h,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){let s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),n=s.height+this.axisConfig.titlePadding*2;this.titleTextHeight=s.height,n<=i&&(i-=n,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return this.axisPosition==="left"||this.axisPosition==="right"?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(i),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){let i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${i},${this.getScaleValue(s)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(s)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){let i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){let i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${this.getScaleValue(s)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(s)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if(this.axisPosition==="left")return this.getDrawableElementsForLeftAxis();if(this.axisPosition==="right")throw Error("Drawing of right axis is not implemented");return this.axisPosition==="bottom"?this.getDrawableElementsForBottomAxis():this.axisPosition==="top"?this.getDrawableElementsForTopAxis():[]}},pt=class extends K{constructor(t,i,s,n,h){super(t,n,h,i),this.categories=s,this.scale=ht().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=ht().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),ct.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)||this.getRange()[0]}},dt=class extends K{constructor(t,i,s,n,h){super(t,n,h,i),this.domain=s,this.scale=rt().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){let t=[...this.domain];this.axisPosition==="left"&&t.reverse(),this.scale=rt().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}};function $t(e,t,i,s){let n=new Q(s);return qt(e)?new pt(t,i,e.categories,e.title,n):new dt(t,i,[e.min,e.max],e.title,n)}var ft=class{constructor(t,i,s,n){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=s,this.chartThemeConfig=n,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){let i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),s=Math.max(i.width,t.width),n=i.height+2*this.chartConfig.titlePadding;return i.width<=s&&i.height<=n&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=s,this.boundingRect.height=n,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){let t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}};function ci(e,t,i,s){let n=new Q(s);return new ft(n,e,t,i)}var yt=class{constructor(t,i,s,n,h){this.plotData=t,this.xAxis=i,this.yAxis=s,this.orientation=n,this.plotIndex=h}getDrawableElement(){let t=this.plotData.data.map(s=>[this.xAxis.getScaleValue(s[0]),this.yAxis.getScaleValue(s[1])]),i;return this.orientation==="horizontal"?i=lt().y(s=>s[0]).x(s=>s[1])(t):i=lt().x(s=>s[0]).y(s=>s[1])(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}},mt=class{constructor(t,i,s,n,h,g){this.barData=t,this.boundingRect=i,this.xAxis=s,this.yAxis=n,this.orientation=h,this.plotIndex=g}getDrawableElement(){let t=this.barData.data.map(h=>[this.xAxis.getScaleValue(h[0]),this.yAxis.getScaleValue(h[1])]),s=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-.05),n=s/2;return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(h=>({x:this.boundingRect.x,y:h[0]-n,height:s,width:h[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(h=>({x:h[0]-n,y:h[1],width:s,height:this.boundingRect.y+this.boundingRect.height-h[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}},bt=class{constructor(t,i,s){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0}}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");let t=[];for(let[i,s]of this.chartData.plots.entries())switch(s.type){case"line":{let n=new yt(s,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break;case"bar":{let n=new mt(s,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break}return t}};function ui(e,t,i){return new bt(e,t,i)}var At=class{constructor(t,i,s,n){this.chartConfig=t,this.chartData=i,this.componentStore={title:ci(t,i,s,n),plot:ui(t,i,s),xAxis:$t(i.xAxis,t.xAxis,{titleColor:s.xAxisTitleColor,labelColor:s.xAxisLabelColor,tickColor:s.xAxisTickColor,axisLineColor:s.xAxisLineColor},n),yAxis:$t(i.yAxis,t.yAxis,{titleColor:s.yAxisTitleColor,labelColor:s.yAxisLabelColor,tickColor:s.yAxisTickColor,axisLineColor:s.yAxisLineColor},n)}}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,s=0,n=0,h=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),g=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),f=this.componentStore.plot.calculateSpace({width:h,height:g});t-=f.width,i-=f.height,f=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),n=f.height,i-=f.height,this.componentStore.xAxis.setAxisPosition("bottom"),f=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=f.height,this.componentStore.yAxis.setAxisPosition("left"),f=this.componentStore.yAxis.calculateSpace({width:t,height:i}),s=f.width,t-=f.width,t>0&&(h+=t,t=0),i>0&&(g+=i,i=0),this.componentStore.plot.calculateSpace({width:h,height:g}),this.componentStore.plot.setBoundingBoxXY({x:s,y:n}),this.componentStore.xAxis.setRange([s,s+h]),this.componentStore.xAxis.setBoundingBoxXY({x:s,y:n+g}),this.componentStore.yAxis.setRange([n,n+g]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:n}),this.chartData.plots.some(y=>Yt(y))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,s=0,n=0,h=0,g=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),f=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),y=this.componentStore.plot.calculateSpace({width:g,height:f});t-=y.width,i-=y.height,y=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),s=y.height,i-=y.height,this.componentStore.xAxis.setAxisPosition("left"),y=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=y.width,n=y.width,this.componentStore.yAxis.setAxisPosition("top"),y=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=y.height,h=s+y.height,t>0&&(g+=t,t=0),i>0&&(f+=i,i=0),this.componentStore.plot.calculateSpace({width:g,height:f}),this.componentStore.plot.setBoundingBoxXY({x:n,y:h}),this.componentStore.yAxis.setRange([n,n+g]),this.componentStore.yAxis.setBoundingBoxXY({x:n,y:s}),this.componentStore.xAxis.setRange([h,h+f]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:h}),this.chartData.plots.some(L=>Yt(L))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){this.chartConfig.chartOrientation==="horizontal"?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();let t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(let i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}},wt=class{static build(t,i,s,n){return new At(t,i,s,n).getDrawableElement()}},X=0,jt,Y=Qt(),H=Gt(),p=Kt(),St=H.plotColorPalette.split(",").map(e=>e.trim()),Z=!1,_t=!1;function Gt(){let e=Vt(),t=G();return ut(e.xyChart,t.themeVariables.xyChart)}function Qt(){let e=G();return ut(It.xyChart,e.xyChart)}function Kt(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}function kt(e){let t=G();return vt(e.trim(),t)}function gi(e){jt=e}function xi(e){e==="horizontal"?Y.chartOrientation="horizontal":Y.chartOrientation="vertical"}function pi(e){p.xAxis.title=kt(e.text)}function Zt(e,t){p.xAxis={type:"linear",title:p.xAxis.title,min:e,max:t},Z=!0}function di(e){p.xAxis={type:"band",title:p.xAxis.title,categories:e.map(t=>kt(t.text))},Z=!0}function fi(e){p.yAxis.title=kt(e.text)}function yi(e,t){p.yAxis={type:"linear",title:p.yAxis.title,min:e,max:t},_t=!0}function mi(e){let t=Math.min(...e),i=Math.max(...e),s=N(p.yAxis)?p.yAxis.min:1/0,n=N(p.yAxis)?p.yAxis.max:-1/0;p.yAxis={type:"linear",title:p.yAxis.title,min:Math.min(s,t),max:Math.max(n,i)}}function Jt(e){let t=[];if(e.length===0)return t;if(!Z){let i=N(p.xAxis)?p.xAxis.min:1/0,s=N(p.xAxis)?p.xAxis.max:-1/0;Zt(Math.min(i,1),Math.max(s,e.length))}if(_t||mi(e),qt(p.xAxis)&&(t=p.xAxis.categories.map((i,s)=>[i,e[s]])),N(p.xAxis)){let i=p.xAxis.min,s=p.xAxis.max,n=(s-i+1)/e.length,h=[];for(let g=i;g<=s;g+=n)h.push(`${g}`);t=h.map((g,f)=>[g,e[f]])}return t}function ti(e){return St[e===0?0:e%St.length]}function bi(e,t){let i=Jt(t);p.plots.push({type:"line",strokeFill:ti(X),strokeWidth:2,data:i}),X++}function Ai(e,t){let i=Jt(t);p.plots.push({type:"bar",fill:ti(X),data:i}),X++}function wi(){if(p.plots.length===0)throw Error("No Plot to render, please provide a plot with some data");return p.title=gt(),wt.build(Y,p,H,jt)}function Si(){return H}function _i(){return Y}var ki=function(){Wt(),X=0,Y=Qt(),p=Kt(),H=Gt(),St=H.plotColorPalette.split(",").map(e=>e.trim()),Z=!1,_t=!1},Ci={getDrawableElem:wi,clear:ki,setAccTitle:Ot,getAccTitle:zt,setDiagramTitle:Nt,getDiagramTitle:gt,getAccDescription:Ft,setAccDescription:Bt,setOrientation:xi,setXAxisTitle:pi,setXAxisRangeData:Zt,setXAxisBand:di,setYAxisTitle:fi,setYAxisRangeData:yi,setLineData:bi,setBarData:Ai,setTmpSVGG:gi,getChartThemeConfig:Si,getChartConfig:_i},Ri=(e,t,i,s)=>{let n=s.db,h=n.getChartThemeConfig(),g=n.getChartConfig();function f(d){return d==="top"?"text-before-edge":"middle"}function y(d){return d==="left"?"start":d==="right"?"end":"middle"}function L(d){return`translate(${d.x}, ${d.y}) rotate(${d.rotation||0})`}ct.debug(`Rendering xychart chart
`+e);let _=Xt(t),C=_.append("g").attr("class","main"),P=C.append("rect").attr("width",g.width).attr("height",g.height).attr("class","background");Mt(_,g.height,g.width,!0),_.attr("viewBox",`0 0 ${g.width} ${g.height}`),P.attr("fill",h.backgroundColor),n.setTmpSVGG(_.append("g").attr("class","mermaid-tmp-group"));let E=n.getDrawableElem(),k={};function v(d){let w=C,r="";for(let[R]of d.entries()){let B=C;R>0&&k[r]&&(B=k[r]),r+=d[R],w=k[r],w||(w=k[r]=B.append("g").attr("class",d[R]))}return w}for(let d of E){if(d.data.length===0)continue;let w=v(d.groupTexts);switch(d.type){case"rect":w.selectAll("rect").data(d.data).enter().append("rect").attr("x",r=>r.x).attr("y",r=>r.y).attr("width",r=>r.width).attr("height",r=>r.height).attr("fill",r=>r.fill).attr("stroke",r=>r.strokeFill).attr("stroke-width",r=>r.strokeWidth);break;case"text":w.selectAll("text").data(d.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",r=>r.fill).attr("font-size",r=>r.fontSize).attr("dominant-baseline",r=>f(r.verticalPos)).attr("text-anchor",r=>y(r.horizontalPos)).attr("transform",r=>L(r)).text(r=>r.text);break;case"path":w.selectAll("path").data(d.data).enter().append("path").attr("d",r=>r.path).attr("fill",r=>r.fill?r.fill:"none").attr("stroke",r=>r.strokeFill).attr("stroke-width",r=>r.strokeWidth);break}}},Ti={draw:Ri},Mi={parser:li,db:Ci,renderer:Ti};export{Mi as diagram};
