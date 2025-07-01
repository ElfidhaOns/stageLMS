var Ir=Object.defineProperty,Pr=Object.defineProperties;var Fr=Object.getOwnPropertyDescriptors;var Xt=Object.getOwnPropertySymbols;var Nr=Object.prototype.hasOwnProperty,zr=Object.prototype.propertyIsEnumerable;var Yt=(k,f,n)=>f in k?Ir(k,f,{enumerable:!0,configurable:!0,writable:!0,value:n}):k[f]=n,Oe=(k,f)=>{for(var n in f||(f={}))Nr.call(f,n)&&Yt(k,n,f[n]);if(Xt)for(var n of Xt(f))zr.call(f,n)&&Yt(k,n,f[n]);return k},We=(k,f)=>Pr(k,Fr(f));import{bl as ie,bi as kt,r as he,af as Dr,aF as Br,e5 as pn,a as hn,j as V,bn as jr,b9 as Hr,A as qr,g as Ur,i as Wr,aq as Vr,c as ft,h as ye,_ as mt,I as bt,d4 as Gr,b1 as Kr,c8 as Xr,c7 as Yr,b4 as Jr,V as Zr}from"./main-216.js";import{a as rt}from"./bf-472-183.js";import{D as Qr,B as ei}from"./bf-522-70.js";import{i as ti}from"./bf-869-79.js";import{C as Jt}from"./bf-998-322.js";import{L as ni}from"./bf-919-277.js";import{S as ri,G as Zt}from"./bf-133-250.js";import{P as Qt}from"./bf-937-80.js";import"./bf-417-113.js";import"./bf-442-278.js";import"./bf-322-86.js";import"./bf-262-88.js";var ii={exports:{}};(function(k,f){ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(n,c,A){var e=n("../lib/oop");n("../lib/lang");var l=n("./text_highlight_rules").TextHighlightRules,h=c.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",d=c.supportFunction="rgb|rgba|url|attr|counter|counters",p=c.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",i=c.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",r=c.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",g=c.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",m=c.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",_=c.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",$=function(){var b=this.createKeywordMapper({"support.function":d,"support.constant":p,"support.type":h,"support.constant.color":i,"support.constant.fonts":r},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:g},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+g+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:g},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:m},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:_},{include:"url"},{token:b,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{token:"paren.lparen",regex:"\\{"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};e.inherits($,l),c.CssHighlightRules=$}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(n,c,A){var e=n("../range").Range,l=function(){};(function(){this.checkOutdent=function(h,d){return/^\s+$/.test(h)?/^\s*\}/.test(d):!1},this.autoOutdent=function(h,d){var p=h.getLine(d),i=p.match(/^(\s*\})/);if(!i)return 0;var r=i[1].length,g=h.findMatchingBracket({row:d,column:r});if(!g||g.row==d)return 0;var m=this.$getIndent(h.getLine(g.row));h.replace(new e(d,0,d,r-1),m)},this.$getIndent=function(h){return h.match(/^\s*/)[0]}}).call(l.prototype),c.MatchingBraceOutdent=l}),ace.define("ace/mode/css_completions",["require","exports","module"],function(n,c,A){var e={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},l=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var h=document.createElement("c").style;for(var d in h)if(typeof h[d]=="string"){var p=d.replace(/[A-Z]/g,function(i){return"-"+i.toLowerCase()});e.hasOwnProperty(p)||(e[p]=1)}}this.completionsDefined=!0},this.getCompletions=function(h,d,p,i){if(this.completionsDefined||this.defineCompletions(),h==="ruleset"||d.$mode.$id=="ace/mode/scss"){var r=d.getLine(p.row).substr(0,p.column),g=/\([^)]*$/.test(r);return g&&(r=r.substr(r.lastIndexOf("(")+1)),/:[^;]+$/.test(r)?this.getPropertyValueCompletions(h,d,p,i):this.getPropertyCompletions(h,d,p,i,g)}return[]},this.getPropertyCompletions=function(h,d,p,i,r){r=r||!1;var g=Object.keys(e);return g.map(function(m){return{caption:m,snippet:m+": $0"+(r?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(h,d,p,i){var r=d.getLine(p.row).substr(0,p.column),g=(/([\w\-]+):[^:]*$/.exec(r)||{})[1];if(!g)return[];var m=[];return g in e&&typeof e[g]=="object"&&(m=Object.keys(e[g])),m.map(function(_){return{caption:_,snippet:_,meta:"property value",score:1e6}})}}).call(l.prototype),c.CssCompletions=l}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(n,c,A){var e=n("../../lib/oop");n("../behaviour").Behaviour;var l=n("./cstyle").CstyleBehaviour,h=n("../../token_iterator").TokenIterator,d=function(){this.inherit(l),this.add("colon","insertion",function(p,i,r,g,m){if(m===":"&&r.selection.isEmpty()){var _=r.getCursorPosition(),$=new h(g,_.row,_.column),b=$.getCurrentToken();if(b&&b.value.match(/\s+/)&&(b=$.stepBackward()),b&&b.type==="support.type"){var y=g.doc.getLine(_.row),E=y.substring(_.column,_.column+1);if(E===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(y.substring(_.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(p,i,r,g,m){var _=g.doc.getTextRange(m);if(!m.isMultiLine()&&_===":"){var $=r.getCursorPosition(),b=new h(g,$.row,$.column),y=b.getCurrentToken();if(y&&y.value.match(/\s+/)&&(y=b.stepBackward()),y&&y.type==="support.type"){var E=g.doc.getLine(m.start.row),P=E.substring(m.end.column,m.end.column+1);if(P===";")return m.end.column++,m}}}),this.add("semicolon","insertion",function(p,i,r,g,m){if(m===";"&&r.selection.isEmpty()){var _=r.getCursorPosition(),$=g.doc.getLine(_.row),b=$.substring(_.column,_.column+1);if(b===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(p,i,r,g,m){if(m==="!"&&r.selection.isEmpty()){var _=r.getCursorPosition(),$=g.doc.getLine(_.row);if(/^\s*(;|}|$)/.test($.substring(_.column)))return{text:"!important",selection:[10,10]}}})};e.inherits(d,l),c.CssBehaviour=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,c,A){var e=n("../../lib/oop"),l=n("../../range").Range,h=n("./fold_mode").FoldMode,d=c.FoldMode=function(p){p&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+p.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+p.end)))};e.inherits(d,h),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(p,i,r){var g=p.getLine(r);if(this.singleLineBlockCommentRe.test(g)&&!this.startRegionRe.test(g)&&!this.tripleStarBlockCommentRe.test(g))return"";var m=this._getFoldWidgetBase(p,i,r);return!m&&this.startRegionRe.test(g)?"start":m},this.getFoldWidgetRange=function(p,i,r,g){var m=p.getLine(r);if(this.startRegionRe.test(m))return this.getCommentRegionBlock(p,m,r);var b=m.match(this.foldingStartMarker);if(b){var _=b.index;if(b[1])return this.openingBracketBlock(p,b[1],r,_);var $=p.getCommentFoldRange(r,_+b[0].length,1);return $&&!$.isMultiLine()&&(g?$=this.getSectionRange(p,r):i!="all"&&($=null)),$}if(i!=="markbegin"){var b=m.match(this.foldingStopMarker);if(b){var _=b.index+b[0].length;return b[1]?this.closingBracketBlock(p,b[1],r,_):p.getCommentFoldRange(r,_,-1)}}},this.getSectionRange=function(p,i){var r=p.getLine(i),g=r.search(/\S/),m=i,_=r.length;i+=1;for(var $=i,b=p.getLength();++i<b;){r=p.getLine(i);var y=r.search(/\S/);if(y!==-1){if(g>y)break;var E=this.getFoldWidgetRange(p,"all",i);if(E){if(E.start.row<=m)break;if(E.isMultiLine())i=E.end.row;else if(g==y)break}$=i}}return new l(m,_,$,p.getLine($).length)},this.getCommentRegionBlock=function(p,i,r){for(var g=i.search(/\s*$/),m=p.getLength(),_=r,$=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,b=1;++r<m;){i=p.getLine(r);var y=$.exec(i);if(y&&(y[1]?b--:b++,!b))break}var E=r;if(E>_)return new l(_,g,E,i.length)}}.call(d.prototype)}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(n,c,A){var e=n("../lib/oop"),l=n("./text").Mode,h=n("./css_highlight_rules").CssHighlightRules,d=n("./matching_brace_outdent").MatchingBraceOutdent,p=n("../worker/worker_client").WorkerClient,i=n("./css_completions").CssCompletions,r=n("./behaviour/css").CssBehaviour,g=n("./folding/cstyle").FoldMode,m=function(){this.HighlightRules=h,this.$outdent=new d,this.$behaviour=new r,this.$completer=new i,this.foldingRules=new g};e.inherits(m,l),function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(_,$,b){var y=this.$getIndent($),E=this.getTokenizer().getLineTokens($,_).tokens;if(E.length&&E[E.length-1].type=="comment")return y;var P=$.match(/^.*\{\s*$/);return P&&(y+=b),y},this.checkOutdent=function(_,$,b){return this.$outdent.checkOutdent($,b)},this.autoOutdent=function(_,$,b){this.$outdent.autoOutdent($,b)},this.getCompletions=function(_,$,b,y){return this.$completer.getCompletions(_,$,b,y)},this.createWorker=function(_){var $=new p(["ace"],"ace/mode/css_worker","Worker");return $.attachToDocument(_.getDocument()),$.on("annotate",function(b){_.setAnnotations(b.data)}),$.on("terminate",function(){_.clearAnnotations()}),$},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}.call(m.prototype),c.Mode=m}),function(){ace.require(["ace/mode/css"],function(n){k&&(k.exports=n)})}()})(ii);var oi={exports:{}};(function(k,f){ace.define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,c,A){var e=n("../lib/oop"),l=n("./text_highlight_rules").TextHighlightRules,h=function(){this.$rules={start:[{token:["comment.doc.tag","comment.doc.text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text.doc","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.\-\'\" ]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},h.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()};e.inherits(h,l),h.getTagRule=function(d){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},h.getStartRule=function(d){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:d}},h.getEndRule=function(d){return{token:"comment.doc",regex:"\\*\\/",next:d}},c.JsDocCommentHighlightRules=h}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(n,c,A){function e(){var g=i.replace("\\d","\\d\\-"),m={onMatch:function($,b,y){var E=$.charAt(1)=="/"?2:1;return E==1?(b!=this.nextState?y.unshift(this.next,this.nextState,0):y.unshift(this.next),y[2]++):E==2&&b==this.nextState&&(y[1]--,(!y[1]||y[1]<0)&&(y.shift(),y.shift())),[{type:"meta.tag.punctuation."+(E==1?"":"end-")+"tag-open.xml",value:$.slice(0,E)},{type:"meta.tag.tag-name.xml",value:$.substr(E)}]},regex:"</?(?:"+g+"|(?=>))",next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(m);var _={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[_,m,{include:"reference"},{defaultToken:"string.xml"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function($,b,y){return b==y[0]&&y.shift(),$.length==2&&(y[0]==this.nextState&&y[1]--,(!y[1]||y[1]<0)&&y.splice(0,2)),this.next=y[0]||"start",[{type:this.token,value:$}]},nextState:"jsx"},_,l("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:g},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},m],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function l(g){return[{token:"comment",regex:/\/\*/,next:[d.getTagRule(),{token:"comment",regex:"\\*\\/",next:g||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[d.getTagRule(),{token:"comment",regex:"$|^",next:g||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}var h=n("../lib/oop"),d=n("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,p=n("./text_highlight_rules").TextHighlightRules,i="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",r=function(g){var m={"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},_=this.createKeywordMapper(m,"identifier"),$="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",b="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)",y="(function)(\\s*)(\\*?)",E={token:["identifier","text","paren.lparen"],regex:"(\\b(?!"+Object.values(m).join("|")+"\\b)"+i+")(\\s*)(\\()"};this.$rules={no_regex:[d.getStartRule("doc-start"),l("no_regex"),E,{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+i+")(\\s*)(=)(\\s*)"+y+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))("+i+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+i+")(\\s*)(:)(\\s*)"+y+"(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)"+y+"(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+$+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|debug|time|trace|timeEnd|assert)\b/},{token:_,regex:i},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:"keyword.operator",regex:/=/},{token:["storage.type","text","storage.type","text","paren.lparen"],regex:y+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:"prototype"},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:i},{regex:"",token:"empty",next:"no_regex"}],start:[d.getStartRule("doc-start"),l("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[l("function_arguments"),{token:"variable.parameter",regex:i},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:b},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:b},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!g||!g.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(P,R,C){if(this.next=P=="{"?this.nextState:"",P=="{"&&C.length)C.unshift("start",R);else if(P=="}"&&C.length&&(C.shift(),this.next=C.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return P=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:b},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+i+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=[^\\(]+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!g||g.jsx!=0)&&e.call(this)),this.embedRules(d,"doc-",[d.getEndRule("no_regex")]),this.normalizeRules()};h.inherits(r,p),c.JavaScriptHighlightRules=r}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(n,c,A){var e=n("../range").Range,l=function(){};(function(){this.checkOutdent=function(h,d){return/^\s+$/.test(h)?/^\s*\}/.test(d):!1},this.autoOutdent=function(h,d){var p=h.getLine(d),i=p.match(/^(\s*\})/);if(!i)return 0;var r=i[1].length,g=h.findMatchingBracket({row:d,column:r});if(!g||g.row==d)return 0;var m=this.$getIndent(h.getLine(g.row));h.replace(new e(d,0,d,r-1),m)},this.$getIndent=function(h){return h.match(/^\s*/)[0]}}).call(l.prototype),c.MatchingBraceOutdent=l}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator"],function(n,c,A){function e(i,r){return i&&i.type.lastIndexOf(r+".xml")>-1}var l=n("../../lib/oop"),h=n("../behaviour").Behaviour,d=n("../../token_iterator").TokenIterator,p=function(){this.add("string_dquotes","insertion",function(i,r,g,m,_){if(_=='"'||_=="'"){var $=_,b=m.doc.getTextRange(g.getSelectionRange());if(b!==""&&b!=="'"&&b!='"'&&g.getWrapBehavioursEnabled())return{text:$+b+$,selection:!1};var y=g.getCursorPosition(),E=m.doc.getLine(y.row),P=E.substring(y.column,y.column+1),R=new d(m,y.row,y.column),C=R.getCurrentToken();if(P==$&&(e(C,"attribute-value")||e(C,"string")))return{text:"",selection:[1,1]};if(C||(C=R.stepBackward()),!C)return;for(;e(C,"tag-whitespace")||e(C,"whitespace");)C=R.stepBackward();var t=!P||P.match(/\s/);if(e(C,"attribute-equals")&&(t||P==">")||e(C,"decl-attribute-equals")&&(t||P=="?"))return{text:$+$,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(i,r,g,m,_){var $=m.doc.getTextRange(_);if(!_.isMultiLine()&&($=='"'||$=="'")){var b=m.doc.getLine(_.start.row),y=b.substring(_.start.column+1,_.start.column+2);if(y==$)return _.end.column++,_}}),this.add("autoclosing","insertion",function(i,r,g,m,_){if(_==">"){var $=g.getSelectionRange().start,b=new d(m,$.row,$.column),y=b.getCurrentToken()||b.stepBackward();if(!y||!(e(y,"tag-name")||e(y,"tag-whitespace")||e(y,"attribute-name")||e(y,"attribute-equals")||e(y,"attribute-value"))||e(y,"reference.attribute-value"))return;if(e(y,"attribute-value")){var E=b.getCurrentTokenColumn()+y.value.length;if($.column<E)return;if($.column==E){var P=b.stepForward();if(P&&e(P,"attribute-value"))return;b.stepBackward()}}if(/^\s*>/.test(m.getLine($.row).slice($.column)))return;for(;!e(y,"tag-name");)if(y=b.stepBackward(),y.value=="<"){y=b.stepForward();break}var R=b.getCurrentTokenRow(),C=b.getCurrentTokenColumn();if(e(b.stepBackward(),"end-tag-open"))return;var t=y.value;return R==$.row&&(t=t.substring(0,$.column-C)),this.voidElements&&this.voidElements.hasOwnProperty(t.toLowerCase())?void 0:{text:"></"+t+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(i,r,g,m,_){if(_==`
`){var $=g.getCursorPosition(),b=m.getLine($.row),y=new d(m,$.row,$.column),E=y.getCurrentToken();if(e(E,"")&&E.type.indexOf("tag-close")!==-1){if(E.value=="/>")return;for(;E&&E.type.indexOf("tag-name")===-1;)E=y.stepBackward();if(!E)return;var P=E.value,R=y.getCurrentTokenRow();if(E=y.stepBackward(),!E||E.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[P]||!this.voidElements){var C=m.getTokenAt($.row,$.column+1),b=m.getLine(R),t=this.$getIndent(b),o=t+m.getTabString();return C&&C.value==="</"?{text:`
`+o+`
`+t,selection:[1,o.length,1,o.length]}:{text:`
`+o}}}}})};l.inherits(p,h),c.XmlBehaviour=p}),ace.define("ace/mode/behaviour/javascript",["require","exports","module","ace/lib/oop","ace/token_iterator","ace/mode/behaviour/cstyle","ace/mode/behaviour/xml"],function(n,c,A){var e=n("../../lib/oop"),l=n("../../token_iterator").TokenIterator,h=n("../behaviour/cstyle").CstyleBehaviour,d=n("../behaviour/xml").XmlBehaviour,p=function(){var i=new d({closeCurlyBraces:!0}).getBehaviours();this.addBehaviours(i),this.inherit(h),this.add("autoclosing-fragment","insertion",function(r,g,m,_,$){if($==">"){var b=m.getSelectionRange().start,y=new l(_,b.row,b.column),E=y.getCurrentToken()||y.stepBackward();if(!E)return;if(E.value=="<")return{text:"></>",selection:[1,1]}}})};e.inherits(p,h),c.JavaScriptBehaviour=p}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,c,A){function e(r,g){return r&&r.type&&r.type.lastIndexOf(g+".xml")>-1}var l=n("../../lib/oop"),h=n("../../range").Range,d=n("./fold_mode").FoldMode,p=c.FoldMode=function(r,g){d.call(this),this.voidElements=r||{},this.optionalEndTags=l.mixin({},this.voidElements),g&&l.mixin(this.optionalEndTags,g)};l.inherits(p,d);var i=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};(function(){this.getFoldWidget=function(r,g,m){var _=this._getFirstTagInLine(r,m);return _?_.closing||!_.tagName&&_.selfClosing?g==="markbeginend"?"end":"":!_.tagName||_.selfClosing||this.voidElements.hasOwnProperty(_.tagName.toLowerCase())||this._findEndTagInLine(r,m,_.tagName,_.end.column)?"":"start":this.getCommentFoldWidget(r,m)},this.getCommentFoldWidget=function(r,g){return/comment/.test(r.getState(g))&&/<!-/.test(r.getLine(g))?"start":""},this._getFirstTagInLine=function(r,g){for(var m=r.getTokens(g),_=new i,$=0;$<m.length;$++){var b=m[$];if(e(b,"tag-open")){if(_.end.column=_.start.column+b.value.length,_.closing=e(b,"end-tag-open"),b=m[++$],!b)return null;if(_.tagName=b.value,b.value===""){if(b=m[++$],!b)return null;_.tagName=b.value}for(_.end.column+=b.value.length,$++;$<m.length;$++)if(b=m[$],_.end.column+=b.value.length,e(b,"tag-close")){_.selfClosing=b.value=="/>";break}return _}if(e(b,"tag-close"))return _.selfClosing=b.value=="/>",_;_.start.column+=b.value.length}return null},this._findEndTagInLine=function(r,g,m,_){for(var $=r.getTokens(g),b=0,y=0;y<$.length;y++){var E=$[y];if(b+=E.value.length,!(b<_-1)&&e(E,"end-tag-open")&&(E=$[y+1],e(E,"tag-name")&&E.value===""&&(E=$[y+2]),E&&E.value==m))return!0}return!1},this.getFoldWidgetRange=function(r,g,m){var _=this._getFirstTagInLine(r,m);if(!_)return this.getCommentFoldWidget(r,m)&&r.getCommentFoldRange(m,r.getLine(m).length);var $=r.getMatchingTags({row:m,column:0});if($)return new h($.openTag.end.row,$.openTag.end.column,$.closeTag.start.row,$.closeTag.start.column)}}).call(p.prototype)}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,c,A){var e=n("../../lib/oop"),l=n("../../range").Range,h=n("./fold_mode").FoldMode,d=c.FoldMode=function(p){p&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+p.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+p.end)))};e.inherits(d,h),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(p,i,r){var g=p.getLine(r);if(this.singleLineBlockCommentRe.test(g)&&!this.startRegionRe.test(g)&&!this.tripleStarBlockCommentRe.test(g))return"";var m=this._getFoldWidgetBase(p,i,r);return!m&&this.startRegionRe.test(g)?"start":m},this.getFoldWidgetRange=function(p,i,r,g){var m=p.getLine(r);if(this.startRegionRe.test(m))return this.getCommentRegionBlock(p,m,r);var b=m.match(this.foldingStartMarker);if(b){var _=b.index;if(b[1])return this.openingBracketBlock(p,b[1],r,_);var $=p.getCommentFoldRange(r,_+b[0].length,1);return $&&!$.isMultiLine()&&(g?$=this.getSectionRange(p,r):i!="all"&&($=null)),$}if(i!=="markbegin"){var b=m.match(this.foldingStopMarker);if(b){var _=b.index+b[0].length;return b[1]?this.closingBracketBlock(p,b[1],r,_):p.getCommentFoldRange(r,_,-1)}}},this.getSectionRange=function(p,i){var r=p.getLine(i),g=r.search(/\S/),m=i,_=r.length;i+=1;for(var $=i,b=p.getLength();++i<b;){r=p.getLine(i);var y=r.search(/\S/);if(y!==-1){if(g>y)break;var E=this.getFoldWidgetRange(p,"all",i);if(E){if(E.start.row<=m)break;if(E.isMultiLine())i=E.end.row;else if(g==y)break}$=i}}return new l(m,_,$,p.getLine($).length)},this.getCommentRegionBlock=function(p,i,r){for(var g=i.search(/\s*$/),m=p.getLength(),_=r,$=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,b=1;++r<m;){i=p.getLine(r);var y=$.exec(i);if(y&&(y[1]?b--:b++,!b))break}var E=r;if(E>_)return new l(_,g,E,i.length)}}.call(d.prototype)}),ace.define("ace/mode/folding/javascript",["require","exports","module","ace/lib/oop","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(n,c,A){var e=n("../../lib/oop"),l=n("./xml").FoldMode,h=n("./cstyle").FoldMode,d=c.FoldMode=function(p){p&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+p.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+p.end))),this.xmlFoldMode=new l};e.inherits(d,h),function(){this.getFoldWidgetRangeBase=this.getFoldWidgetRange,this.getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(p,i,r){var g=this.getFoldWidgetBase(p,i,r);return g||this.xmlFoldMode.getFoldWidget(p,i,r)},this.getFoldWidgetRange=function(p,i,r,g){var m=this.getFoldWidgetRangeBase(p,i,r,g);return m||this.xmlFoldMode.getFoldWidgetRange(p,i,r)}}.call(d.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/javascript","ace/mode/folding/javascript"],function(n,c,A){var e=n("../lib/oop"),l=n("./text").Mode,h=n("./javascript_highlight_rules").JavaScriptHighlightRules,d=n("./matching_brace_outdent").MatchingBraceOutdent,p=n("../worker/worker_client").WorkerClient,i=n("./behaviour/javascript").JavaScriptBehaviour,r=n("./folding/javascript").FoldMode,g=function(){this.HighlightRules=h,this.$outdent=new d,this.$behaviour=new i,this.foldingRules=new r};e.inherits(g,l),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(m,_,$){var b=this.$getIndent(_),y=this.getTokenizer().getLineTokens(_,m),E=y.tokens,P=y.state;if(E.length&&E[E.length-1].type=="comment")return b;if(m=="start"||m=="no_regex"){var R=_.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);R&&(b+=$)}else if(m=="doc-start"&&(P=="start"||P=="no_regex"))return"";return b},this.checkOutdent=function(m,_,$){return this.$outdent.checkOutdent(_,$)},this.autoOutdent=function(m,_,$){this.$outdent.autoOutdent(_,$)},this.createWorker=function(m){var _=new p(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return _.attachToDocument(m.getDocument()),_.on("annotate",function($){m.setAnnotations($.data)}),_.on("terminate",function(){m.clearAnnotations()}),_},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(g.prototype),c.Mode=g}),function(){ace.require(["ace/mode/javascript"],function(n){k&&(k.exports=n)})}()})(oi);var si={exports:{}};(function(k,f){ace.define("ace/snippets/css.snippets",["require","exports","module"],function(n,c,A){A.exports=`snippet .
	\${1} {
		\${2}
	}
snippet !
	 !important
snippet bdi:m+
	-moz-border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:m
	-moz-border-image: \${1};
snippet bdrz:m
	-moz-border-radius: \${1};
snippet bxsh:m+
	-moz-box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh:m
	-moz-box-shadow: \${1};
snippet bdi:w+
	-webkit-border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:w
	-webkit-border-image: \${1};
snippet bdrz:w
	-webkit-border-radius: \${1};
snippet bxsh:w+
	-webkit-box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh:w
	-webkit-box-shadow: \${1};
snippet @f
	@font-face {
		font-family: \${1};
		src: url(\${2});
	}
snippet @i
	@import url(\${1});
snippet @m
	@media \${1:print} {
		\${2}
	}
snippet bg+
	background: #\${1:FFF} url(\${2}) \${3:0} \${4:0} \${5:no-repeat};
snippet bga
	background-attachment: \${1};
snippet bga:f
	background-attachment: fixed;
snippet bga:s
	background-attachment: scroll;
snippet bgbk
	background-break: \${1};
snippet bgbk:bb
	background-break: bounding-box;
snippet bgbk:c
	background-break: continuous;
snippet bgbk:eb
	background-break: each-box;
snippet bgcp
	background-clip: \${1};
snippet bgcp:bb
	background-clip: border-box;
snippet bgcp:cb
	background-clip: content-box;
snippet bgcp:nc
	background-clip: no-clip;
snippet bgcp:pb
	background-clip: padding-box;
snippet bgc
	background-color: #\${1:FFF};
snippet bgc:t
	background-color: transparent;
snippet bgi
	background-image: url(\${1});
snippet bgi:n
	background-image: none;
snippet bgo
	background-origin: \${1};
snippet bgo:bb
	background-origin: border-box;
snippet bgo:cb
	background-origin: content-box;
snippet bgo:pb
	background-origin: padding-box;
snippet bgpx
	background-position-x: \${1};
snippet bgpy
	background-position-y: \${1};
snippet bgp
	background-position: \${1:0} \${2:0};
snippet bgr
	background-repeat: \${1};
snippet bgr:n
	background-repeat: no-repeat;
snippet bgr:x
	background-repeat: repeat-x;
snippet bgr:y
	background-repeat: repeat-y;
snippet bgr:r
	background-repeat: repeat;
snippet bgz
	background-size: \${1};
snippet bgz:a
	background-size: auto;
snippet bgz:ct
	background-size: contain;
snippet bgz:cv
	background-size: cover;
snippet bg
	background: \${1};
snippet bg:ie
	filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='\${1}',sizingMethod='\${2:crop}');
snippet bg:n
	background: none;
snippet bd+
	border: \${1:1px} \${2:solid} #\${3:000};
snippet bdb+
	border-bottom: \${1:1px} \${2:solid} #\${3:000};
snippet bdbc
	border-bottom-color: #\${1:000};
snippet bdbi
	border-bottom-image: url(\${1});
snippet bdbi:n
	border-bottom-image: none;
snippet bdbli
	border-bottom-left-image: url(\${1});
snippet bdbli:c
	border-bottom-left-image: continue;
snippet bdbli:n
	border-bottom-left-image: none;
snippet bdblrz
	border-bottom-left-radius: \${1};
snippet bdbri
	border-bottom-right-image: url(\${1});
snippet bdbri:c
	border-bottom-right-image: continue;
snippet bdbri:n
	border-bottom-right-image: none;
snippet bdbrrz
	border-bottom-right-radius: \${1};
snippet bdbs
	border-bottom-style: \${1};
snippet bdbs:n
	border-bottom-style: none;
snippet bdbw
	border-bottom-width: \${1};
snippet bdb
	border-bottom: \${1};
snippet bdb:n
	border-bottom: none;
snippet bdbk
	border-break: \${1};
snippet bdbk:c
	border-break: close;
snippet bdcl
	border-collapse: \${1};
snippet bdcl:c
	border-collapse: collapse;
snippet bdcl:s
	border-collapse: separate;
snippet bdc
	border-color: #\${1:000};
snippet bdci
	border-corner-image: url(\${1});
snippet bdci:c
	border-corner-image: continue;
snippet bdci:n
	border-corner-image: none;
snippet bdf
	border-fit: \${1};
snippet bdf:c
	border-fit: clip;
snippet bdf:of
	border-fit: overwrite;
snippet bdf:ow
	border-fit: overwrite;
snippet bdf:r
	border-fit: repeat;
snippet bdf:sc
	border-fit: scale;
snippet bdf:sp
	border-fit: space;
snippet bdf:st
	border-fit: stretch;
snippet bdi
	border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:n
	border-image: none;
snippet bdl+
	border-left: \${1:1px} \${2:solid} #\${3:000};
snippet bdlc
	border-left-color: #\${1:000};
snippet bdli
	border-left-image: url(\${1});
snippet bdli:n
	border-left-image: none;
snippet bdls
	border-left-style: \${1};
snippet bdls:n
	border-left-style: none;
snippet bdlw
	border-left-width: \${1};
snippet bdl
	border-left: \${1};
snippet bdl:n
	border-left: none;
snippet bdlt
	border-length: \${1};
snippet bdlt:a
	border-length: auto;
snippet bdrz
	border-radius: \${1};
snippet bdr+
	border-right: \${1:1px} \${2:solid} #\${3:000};
snippet bdrc
	border-right-color: #\${1:000};
snippet bdri
	border-right-image: url(\${1});
snippet bdri:n
	border-right-image: none;
snippet bdrs
	border-right-style: \${1};
snippet bdrs:n
	border-right-style: none;
snippet bdrw
	border-right-width: \${1};
snippet bdr
	border-right: \${1};
snippet bdr:n
	border-right: none;
snippet bdsp
	border-spacing: \${1};
snippet bds
	border-style: \${1};
snippet bds:ds
	border-style: dashed;
snippet bds:dtds
	border-style: dot-dash;
snippet bds:dtdtds
	border-style: dot-dot-dash;
snippet bds:dt
	border-style: dotted;
snippet bds:db
	border-style: double;
snippet bds:g
	border-style: groove;
snippet bds:h
	border-style: hidden;
snippet bds:i
	border-style: inset;
snippet bds:n
	border-style: none;
snippet bds:o
	border-style: outset;
snippet bds:r
	border-style: ridge;
snippet bds:s
	border-style: solid;
snippet bds:w
	border-style: wave;
snippet bdt+
	border-top: \${1:1px} \${2:solid} #\${3:000};
snippet bdtc
	border-top-color: #\${1:000};
snippet bdti
	border-top-image: url(\${1});
snippet bdti:n
	border-top-image: none;
snippet bdtli
	border-top-left-image: url(\${1});
snippet bdtli:c
	border-corner-image: continue;
snippet bdtli:n
	border-corner-image: none;
snippet bdtlrz
	border-top-left-radius: \${1};
snippet bdtri
	border-top-right-image: url(\${1});
snippet bdtri:c
	border-top-right-image: continue;
snippet bdtri:n
	border-top-right-image: none;
snippet bdtrrz
	border-top-right-radius: \${1};
snippet bdts
	border-top-style: \${1};
snippet bdts:n
	border-top-style: none;
snippet bdtw
	border-top-width: \${1};
snippet bdt
	border-top: \${1};
snippet bdt:n
	border-top: none;
snippet bdw
	border-width: \${1};
snippet bd
	border: \${1};
snippet bd:n
	border: none;
snippet b
	bottom: \${1};
snippet b:a
	bottom: auto;
snippet bxsh+
	box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh
	box-shadow: \${1};
snippet bxsh:n
	box-shadow: none;
snippet bxz
	box-sizing: \${1};
snippet bxz:bb
	box-sizing: border-box;
snippet bxz:cb
	box-sizing: content-box;
snippet cps
	caption-side: \${1};
snippet cps:b
	caption-side: bottom;
snippet cps:t
	caption-side: top;
snippet cl
	clear: \${1};
snippet cl:b
	clear: both;
snippet cl:l
	clear: left;
snippet cl:n
	clear: none;
snippet cl:r
	clear: right;
snippet cp
	clip: \${1};
snippet cp:a
	clip: auto;
snippet cp:r
	clip: rect(\${1:0} \${2:0} \${3:0} \${4:0});
snippet c
	color: #\${1:000};
snippet ct
	content: \${1};
snippet ct:a
	content: attr(\${1});
snippet ct:cq
	content: close-quote;
snippet ct:c
	content: counter(\${1});
snippet ct:cs
	content: counters(\${1});
snippet ct:ncq
	content: no-close-quote;
snippet ct:noq
	content: no-open-quote;
snippet ct:n
	content: normal;
snippet ct:oq
	content: open-quote;
snippet coi
	counter-increment: \${1};
snippet cor
	counter-reset: \${1};
snippet cur
	cursor: \${1};
snippet cur:a
	cursor: auto;
snippet cur:c
	cursor: crosshair;
snippet cur:d
	cursor: default;
snippet cur:ha
	cursor: hand;
snippet cur:he
	cursor: help;
snippet cur:m
	cursor: move;
snippet cur:p
	cursor: pointer;
snippet cur:t
	cursor: text;
snippet d
	display: \${1};
snippet d:mib
	display: -moz-inline-box;
snippet d:mis
	display: -moz-inline-stack;
snippet d:b
	display: block;
snippet d:cp
	display: compact;
snippet d:ib
	display: inline-block;
snippet d:itb
	display: inline-table;
snippet d:i
	display: inline;
snippet d:li
	display: list-item;
snippet d:n
	display: none;
snippet d:ri
	display: run-in;
snippet d:tbcp
	display: table-caption;
snippet d:tbc
	display: table-cell;
snippet d:tbclg
	display: table-column-group;
snippet d:tbcl
	display: table-column;
snippet d:tbfg
	display: table-footer-group;
snippet d:tbhg
	display: table-header-group;
snippet d:tbrg
	display: table-row-group;
snippet d:tbr
	display: table-row;
snippet d:tb
	display: table;
snippet ec
	empty-cells: \${1};
snippet ec:h
	empty-cells: hide;
snippet ec:s
	empty-cells: show;
snippet exp
	expression()
snippet fl
	float: \${1};
snippet fl:l
	float: left;
snippet fl:n
	float: none;
snippet fl:r
	float: right;
snippet f+
	font: \${1:1em} \${2:Arial},\${3:sans-serif};
snippet fef
	font-effect: \${1};
snippet fef:eb
	font-effect: emboss;
snippet fef:eg
	font-effect: engrave;
snippet fef:n
	font-effect: none;
snippet fef:o
	font-effect: outline;
snippet femp
	font-emphasize-position: \${1};
snippet femp:a
	font-emphasize-position: after;
snippet femp:b
	font-emphasize-position: before;
snippet fems
	font-emphasize-style: \${1};
snippet fems:ac
	font-emphasize-style: accent;
snippet fems:c
	font-emphasize-style: circle;
snippet fems:ds
	font-emphasize-style: disc;
snippet fems:dt
	font-emphasize-style: dot;
snippet fems:n
	font-emphasize-style: none;
snippet fem
	font-emphasize: \${1};
snippet ff
	font-family: \${1};
snippet ff:c
	font-family: \${1:'Monotype Corsiva','Comic Sans MS'},cursive;
snippet ff:f
	font-family: \${1:Capitals,Impact},fantasy;
snippet ff:m
	font-family: \${1:Monaco,'Courier New'},monospace;
snippet ff:ss
	font-family: \${1:Helvetica,Arial},sans-serif;
snippet ff:s
	font-family: \${1:Georgia,'Times New Roman'},serif;
snippet fza
	font-size-adjust: \${1};
snippet fza:n
	font-size-adjust: none;
snippet fz
	font-size: \${1};
snippet fsm
	font-smooth: \${1};
snippet fsm:aw
	font-smooth: always;
snippet fsm:a
	font-smooth: auto;
snippet fsm:n
	font-smooth: never;
snippet fst
	font-stretch: \${1};
snippet fst:c
	font-stretch: condensed;
snippet fst:e
	font-stretch: expanded;
snippet fst:ec
	font-stretch: extra-condensed;
snippet fst:ee
	font-stretch: extra-expanded;
snippet fst:n
	font-stretch: normal;
snippet fst:sc
	font-stretch: semi-condensed;
snippet fst:se
	font-stretch: semi-expanded;
snippet fst:uc
	font-stretch: ultra-condensed;
snippet fst:ue
	font-stretch: ultra-expanded;
snippet fs
	font-style: \${1};
snippet fs:i
	font-style: italic;
snippet fs:n
	font-style: normal;
snippet fs:o
	font-style: oblique;
snippet fv
	font-variant: \${1};
snippet fv:n
	font-variant: normal;
snippet fv:sc
	font-variant: small-caps;
snippet fw
	font-weight: \${1};
snippet fw:b
	font-weight: bold;
snippet fw:br
	font-weight: bolder;
snippet fw:lr
	font-weight: lighter;
snippet fw:n
	font-weight: normal;
snippet f
	font: \${1};
snippet h
	height: \${1};
snippet h:a
	height: auto;
snippet l
	left: \${1};
snippet l:a
	left: auto;
snippet lts
	letter-spacing: \${1};
snippet lh
	line-height: \${1};
snippet lisi
	list-style-image: url(\${1});
snippet lisi:n
	list-style-image: none;
snippet lisp
	list-style-position: \${1};
snippet lisp:i
	list-style-position: inside;
snippet lisp:o
	list-style-position: outside;
snippet list
	list-style-type: \${1};
snippet list:c
	list-style-type: circle;
snippet list:dclz
	list-style-type: decimal-leading-zero;
snippet list:dc
	list-style-type: decimal;
snippet list:d
	list-style-type: disc;
snippet list:lr
	list-style-type: lower-roman;
snippet list:n
	list-style-type: none;
snippet list:s
	list-style-type: square;
snippet list:ur
	list-style-type: upper-roman;
snippet lis
	list-style: \${1};
snippet lis:n
	list-style: none;
snippet mb
	margin-bottom: \${1};
snippet mb:a
	margin-bottom: auto;
snippet ml
	margin-left: \${1};
snippet ml:a
	margin-left: auto;
snippet mr
	margin-right: \${1};
snippet mr:a
	margin-right: auto;
snippet mt
	margin-top: \${1};
snippet mt:a
	margin-top: auto;
snippet m
	margin: \${1};
snippet m:4
	margin: \${1:0} \${2:0} \${3:0} \${4:0};
snippet m:3
	margin: \${1:0} \${2:0} \${3:0};
snippet m:2
	margin: \${1:0} \${2:0};
snippet m:0
	margin: 0;
snippet m:a
	margin: auto;
snippet mah
	max-height: \${1};
snippet mah:n
	max-height: none;
snippet maw
	max-width: \${1};
snippet maw:n
	max-width: none;
snippet mih
	min-height: \${1};
snippet miw
	min-width: \${1};
snippet op
	opacity: \${1};
snippet op:ie
	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=\${1:100});
snippet op:ms
	-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=\${1:100})';
snippet orp
	orphans: \${1};
snippet o+
	outline: \${1:1px} \${2:solid} #\${3:000};
snippet oc
	outline-color: \${1:#000};
snippet oc:i
	outline-color: invert;
snippet oo
	outline-offset: \${1};
snippet os
	outline-style: \${1};
snippet ow
	outline-width: \${1};
snippet o
	outline: \${1};
snippet o:n
	outline: none;
snippet ovs
	overflow-style: \${1};
snippet ovs:a
	overflow-style: auto;
snippet ovs:mq
	overflow-style: marquee;
snippet ovs:mv
	overflow-style: move;
snippet ovs:p
	overflow-style: panner;
snippet ovs:s
	overflow-style: scrollbar;
snippet ovx
	overflow-x: \${1};
snippet ovx:a
	overflow-x: auto;
snippet ovx:h
	overflow-x: hidden;
snippet ovx:s
	overflow-x: scroll;
snippet ovx:v
	overflow-x: visible;
snippet ovy
	overflow-y: \${1};
snippet ovy:a
	overflow-y: auto;
snippet ovy:h
	overflow-y: hidden;
snippet ovy:s
	overflow-y: scroll;
snippet ovy:v
	overflow-y: visible;
snippet ov
	overflow: \${1};
snippet ov:a
	overflow: auto;
snippet ov:h
	overflow: hidden;
snippet ov:s
	overflow: scroll;
snippet ov:v
	overflow: visible;
snippet pb
	padding-bottom: \${1};
snippet pl
	padding-left: \${1};
snippet pr
	padding-right: \${1};
snippet pt
	padding-top: \${1};
snippet p
	padding: \${1};
snippet p:4
	padding: \${1:0} \${2:0} \${3:0} \${4:0};
snippet p:3
	padding: \${1:0} \${2:0} \${3:0};
snippet p:2
	padding: \${1:0} \${2:0};
snippet p:0
	padding: 0;
snippet pgba
	page-break-after: \${1};
snippet pgba:aw
	page-break-after: always;
snippet pgba:a
	page-break-after: auto;
snippet pgba:l
	page-break-after: left;
snippet pgba:r
	page-break-after: right;
snippet pgbb
	page-break-before: \${1};
snippet pgbb:aw
	page-break-before: always;
snippet pgbb:a
	page-break-before: auto;
snippet pgbb:l
	page-break-before: left;
snippet pgbb:r
	page-break-before: right;
snippet pgbi
	page-break-inside: \${1};
snippet pgbi:a
	page-break-inside: auto;
snippet pgbi:av
	page-break-inside: avoid;
snippet pos
	position: \${1};
snippet pos:a
	position: absolute;
snippet pos:f
	position: fixed;
snippet pos:r
	position: relative;
snippet pos:s
	position: static;
snippet q
	quotes: \${1};
snippet q:en
	quotes: '\\201C' '\\201D' '\\2018' '\\2019';
snippet q:n
	quotes: none;
snippet q:ru
	quotes: '\\00AB' '\\00BB' '\\201E' '\\201C';
snippet rz
	resize: \${1};
snippet rz:b
	resize: both;
snippet rz:h
	resize: horizontal;
snippet rz:n
	resize: none;
snippet rz:v
	resize: vertical;
snippet r
	right: \${1};
snippet r:a
	right: auto;
snippet tbl
	table-layout: \${1};
snippet tbl:a
	table-layout: auto;
snippet tbl:f
	table-layout: fixed;
snippet tal
	text-align-last: \${1};
snippet tal:a
	text-align-last: auto;
snippet tal:c
	text-align-last: center;
snippet tal:l
	text-align-last: left;
snippet tal:r
	text-align-last: right;
snippet ta
	text-align: \${1};
snippet ta:c
	text-align: center;
snippet ta:l
	text-align: left;
snippet ta:r
	text-align: right;
snippet td
	text-decoration: \${1};
snippet td:l
	text-decoration: line-through;
snippet td:n
	text-decoration: none;
snippet td:o
	text-decoration: overline;
snippet td:u
	text-decoration: underline;
snippet te
	text-emphasis: \${1};
snippet te:ac
	text-emphasis: accent;
snippet te:a
	text-emphasis: after;
snippet te:b
	text-emphasis: before;
snippet te:c
	text-emphasis: circle;
snippet te:ds
	text-emphasis: disc;
snippet te:dt
	text-emphasis: dot;
snippet te:n
	text-emphasis: none;
snippet th
	text-height: \${1};
snippet th:a
	text-height: auto;
snippet th:f
	text-height: font-size;
snippet th:m
	text-height: max-size;
snippet th:t
	text-height: text-size;
snippet ti
	text-indent: \${1};
snippet ti:-
	text-indent: -9999px;
snippet tj
	text-justify: \${1};
snippet tj:a
	text-justify: auto;
snippet tj:d
	text-justify: distribute;
snippet tj:ic
	text-justify: inter-cluster;
snippet tj:ii
	text-justify: inter-ideograph;
snippet tj:iw
	text-justify: inter-word;
snippet tj:k
	text-justify: kashida;
snippet tj:t
	text-justify: tibetan;
snippet to+
	text-outline: \${1:0} \${2:0} #\${3:000};
snippet to
	text-outline: \${1};
snippet to:n
	text-outline: none;
snippet tr
	text-replace: \${1};
snippet tr:n
	text-replace: none;
snippet tsh+
	text-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet tsh
	text-shadow: \${1};
snippet tsh:n
	text-shadow: none;
snippet tt
	text-transform: \${1};
snippet tt:c
	text-transform: capitalize;
snippet tt:l
	text-transform: lowercase;
snippet tt:n
	text-transform: none;
snippet tt:u
	text-transform: uppercase;
snippet tw
	text-wrap: \${1};
snippet tw:no
	text-wrap: none;
snippet tw:n
	text-wrap: normal;
snippet tw:s
	text-wrap: suppress;
snippet tw:u
	text-wrap: unrestricted;
snippet t
	top: \${1};
snippet t:a
	top: auto;
snippet va
	vertical-align: \${1};
snippet va:bl
	vertical-align: baseline;
snippet va:b
	vertical-align: bottom;
snippet va:m
	vertical-align: middle;
snippet va:sub
	vertical-align: sub;
snippet va:sup
	vertical-align: super;
snippet va:tb
	vertical-align: text-bottom;
snippet va:tt
	vertical-align: text-top;
snippet va:t
	vertical-align: top;
snippet v
	visibility: \${1};
snippet v:c
	visibility: collapse;
snippet v:h
	visibility: hidden;
snippet v:v
	visibility: visible;
snippet whsc
	white-space-collapse: \${1};
snippet whsc:ba
	white-space-collapse: break-all;
snippet whsc:bs
	white-space-collapse: break-strict;
snippet whsc:k
	white-space-collapse: keep-all;
snippet whsc:l
	white-space-collapse: loose;
snippet whsc:n
	white-space-collapse: normal;
snippet whs
	white-space: \${1};
snippet whs:n
	white-space: normal;
snippet whs:nw
	white-space: nowrap;
snippet whs:pl
	white-space: pre-line;
snippet whs:pw
	white-space: pre-wrap;
snippet whs:p
	white-space: pre;
snippet wid
	widows: \${1};
snippet w
	width: \${1};
snippet w:a
	width: auto;
snippet wob
	word-break: \${1};
snippet wob:ba
	word-break: break-all;
snippet wob:bs
	word-break: break-strict;
snippet wob:k
	word-break: keep-all;
snippet wob:l
	word-break: loose;
snippet wob:n
	word-break: normal;
snippet wos
	word-spacing: \${1};
snippet wow
	word-wrap: \${1};
snippet wow:no
	word-wrap: none;
snippet wow:n
	word-wrap: normal;
snippet wow:s
	word-wrap: suppress;
snippet wow:u
	word-wrap: unrestricted;
snippet z
	z-index: \${1};
snippet z:a
	z-index: auto;
snippet zoo
	zoom: 1;
`}),ace.define("ace/snippets/css",["require","exports","module","ace/snippets/css.snippets"],function(n,c,A){c.snippetText=n("./css.snippets"),c.scope="css"}),function(){ace.require(["ace/snippets/css"],function(n){k&&(k.exports=n)})}()})(si);var ai={exports:{}};(function(k,f){ace.define("ace/snippets/javascript.snippets",["require","exports","module"],function(n,c,A){A.exports=`# Prototype
snippet proto
	\${1:class_name}.prototype.\${2:method_name} = function(\${3:first_argument}) {
		\${4:// body...}
	};
# Function
snippet fun
	function \${1?:function_name}(\${2:argument}) {
		\${3:// body...}
	}
# Anonymous Function
regex /((=)\\s*|(:)\\s*|(\\()|\\b)/f/(\\))?/
snippet f
	function\${M1?: \${1:functionName}}($2) {
		\${0:$TM_SELECTED_TEXT}
	}\${M2?;}\${M3?,}\${M4?)}
# Immediate function
trigger \\(?f\\(
endTrigger \\)?
snippet f(
	(function(\${1}) {
		\${0:\${TM_SELECTED_TEXT:/* code */}}
	}(\${1}));
# if
snippet if
	if (\${1:true}) {
		\${0}
	}
# if ... else
snippet ife
	if (\${1:true}) {
		\${2}
	} else {
		\${0}
	}
# tertiary conditional
snippet ter
	\${1:/* condition */} ? \${2:a} : \${3:b}
# switch
snippet switch
	switch (\${1:expression}) {
		case '\${3:case}':
			\${4:// code}
			break;
		\${5}
		default:
			\${2:// code}
	}
# case
snippet case
	case '\${1:case}':
		\${2:// code}
		break;
	\${3}

# while (...) {...}
snippet wh
	while (\${1:/* condition */}) {
		\${0:/* code */}
	}
# try
snippet try
	try {
		\${0:/* code */}
	} catch (e) {}
# do...while
snippet do
	do {
		\${2:/* code */}
	} while (\${1:/* condition */});
# Object Method
snippet :f
regex /([,{[])|^\\s*/:f/
	\${1:method_name}: function(\${2:attribute}) {
		\${0}
	}\${3:,}
# setTimeout function
snippet setTimeout
regex /\\b/st|timeout|setTimeo?u?t?/
	setTimeout(function() {\${3:$TM_SELECTED_TEXT}}, \${1:10});
# Get Elements
snippet gett
	getElementsBy\${1:TagName}('\${2}')\${3}
# Get Element
snippet get
	getElementBy\${1:Id}('\${2}')\${3}
# console.log (Firebug)
snippet cl
	console.log(\${1});
# return
snippet ret
	return \${1:result}
# for (property in object ) { ... }
snippet fori
	for (var \${1:prop} in \${2:Things}) {
		\${0:$2[$1]}
	}
# hasOwnProperty
snippet has
	hasOwnProperty(\${1})
# docstring
snippet /**
	/**
	 * \${1:description}
	 *
	 */
snippet @par
regex /^\\s*\\*\\s*/@(para?m?)?/
	@param {\${1:type}} \${2:name} \${3:description}
snippet @ret
	@return {\${1:type}} \${2:description}
# JSON.parse
snippet jsonp
	JSON.parse(\${1:jstr});
# JSON.stringify
snippet jsons
	JSON.stringify(\${1:object});
# self-defining function
snippet sdf
	var \${1:function_name} = function(\${2:argument}) {
		\${3:// initial code ...}

		$1 = function($2) {
			\${4:// main code}
		};
	}
# singleton
snippet sing
	function \${1:Singleton} (\${2:argument}) {
		// the cached instance
		var instance;

		// rewrite the constructor
		$1 = function $1($2) {
			return instance;
		};
		
		// carry over the prototype properties
		$1.prototype = this;

		// the instance
		instance = new $1();

		// reset the constructor pointer
		instance.constructor = $1;

		\${3:// code ...}

		return instance;
	}
# class
snippet class
regex /^\\s*/clas{0,2}/
	var \${1:class} = function(\${20}) {
		$40$0
	};
	
	(function() {
		\${60:this.prop = ""}
	}).call(\${1:class}.prototype);
	
	exports.\${1:class} = \${1:class};
# 
snippet for-
	for (var \${1:i} = \${2:Things}.length; \${1:i}--; ) {
		\${0:\${2:Things}[\${1:i}];}
	}
# for (...) {...}
snippet for
	for (var \${1:i} = 0; $1 < \${2:Things}.length; $1++) {
		\${3:$2[$1]}$0
	}
# for (...) {...} (Improved Native For-Loop)
snippet forr
	for (var \${1:i} = \${2:Things}.length - 1; $1 >= 0; $1--) {
		\${3:$2[$1]}$0
	}


#modules
snippet def
	define(function(require, exports, module) {
	"use strict";
	var \${1/.*\\///} = require("\${1}");
	
	$TM_SELECTED_TEXT
	});
snippet req
guard ^\\s*
	var \${1/.*\\///} = require("\${1}");
	$0
snippet requ
guard ^\\s*
	var \${1/.*\\/(.)/\\u$1/} = require("\${1}").\${1/.*\\/(.)/\\u$1/};
	$0
`}),ace.define("ace/snippets/javascript",["require","exports","module","ace/snippets/javascript.snippets"],function(n,c,A){c.snippetText=n("./javascript.snippets"),c.scope="javascript"}),function(){ace.require(["ace/snippets/javascript"],function(n){k&&(k.exports=n)})}()})(ai);var li={exports:{}};(function(k,f){ace.define("ace/theme/tomorrow-css",["require","exports","module"],function(n,c,A){A.exports=`.ace-tomorrow .ace_gutter {
  background: #f6f6f6;
  color: #4D4D4C
}

.ace-tomorrow .ace_print-margin {
  width: 1px;
  background: #f6f6f6
}

.ace-tomorrow {
  background-color: #FFFFFF;
  color: #4D4D4C
}

.ace-tomorrow .ace_cursor {
  color: #AEAFAD
}

.ace-tomorrow .ace_marker-layer .ace_selection {
  background: #D6D6D6
}

.ace-tomorrow.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
}

.ace-tomorrow .ace_marker-layer .ace_step {
  background: rgb(255, 255, 0)
}

.ace-tomorrow .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #D1D1D1
}

.ace-tomorrow .ace_marker-layer .ace_active-line {
  background: #EFEFEF
}

.ace-tomorrow .ace_gutter-active-line {
  background-color : #dcdcdc
}

.ace-tomorrow .ace_marker-layer .ace_selected-word {
  border: 1px solid #D6D6D6
}

.ace-tomorrow .ace_invisible {
  color: #D1D1D1
}

.ace-tomorrow .ace_keyword,
.ace-tomorrow .ace_meta,
.ace-tomorrow .ace_storage,
.ace-tomorrow .ace_storage.ace_type,
.ace-tomorrow .ace_support.ace_type {
  color: #8959A8
}

.ace-tomorrow .ace_keyword.ace_operator {
  color: #3E999F
}

.ace-tomorrow .ace_constant.ace_character,
.ace-tomorrow .ace_constant.ace_language,
.ace-tomorrow .ace_constant.ace_numeric,
.ace-tomorrow .ace_keyword.ace_other.ace_unit,
.ace-tomorrow .ace_support.ace_constant,
.ace-tomorrow .ace_variable.ace_parameter {
  color: #F5871F
}

.ace-tomorrow .ace_constant.ace_other {
  color: #666969
}

.ace-tomorrow .ace_invalid {
  color: #FFFFFF;
  background-color: #C82829
}

.ace-tomorrow .ace_invalid.ace_deprecated {
  color: #FFFFFF;
  background-color: #8959A8
}

.ace-tomorrow .ace_fold {
  background-color: #4271AE;
  border-color: #4D4D4C
}

.ace-tomorrow .ace_entity.ace_name.ace_function,
.ace-tomorrow .ace_support.ace_function,
.ace-tomorrow .ace_variable {
  color: #4271AE
}

.ace-tomorrow .ace_support.ace_class,
.ace-tomorrow .ace_support.ace_type {
  color: #C99E00
}

.ace-tomorrow .ace_heading,
.ace-tomorrow .ace_markup.ace_heading,
.ace-tomorrow .ace_string {
  color: #718C00
}

.ace-tomorrow .ace_entity.ace_name.ace_tag,
.ace-tomorrow .ace_entity.ace_other.ace_attribute-name,
.ace-tomorrow .ace_meta.ace_tag,
.ace-tomorrow .ace_string.ace_regexp,
.ace-tomorrow .ace_variable {
  color: #C82829
}

.ace-tomorrow .ace_comment {
  color: #8E908C
}

.ace-tomorrow .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y
}

.ace-tomorrow .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
} 
`}),ace.define("ace/theme/tomorrow",["require","exports","module","ace/theme/tomorrow-css","ace/lib/dom"],function(n,c,A){c.isDark=!1,c.cssClass="ace-tomorrow",c.cssText=n("./tomorrow-css");var e=n("../lib/dom");e.importCssString(c.cssText,c.cssClass,!1)}),function(){ace.require(["ace/theme/tomorrow"],function(n){k&&(k.exports=n)})}()})(li);var ci={exports:{}};(function(k,f){ace.define("ace/theme/twilight-css",["require","exports","module"],function(n,c,A){A.exports=`.ace-twilight .ace_gutter {
  background: #232323;
  color: #E2E2E2
}

.ace-twilight .ace_print-margin {
  width: 1px;
  background: #232323
}

.ace-twilight {
  background-color: #141414;
  color: #F8F8F8
}

.ace-twilight .ace_cursor {
  color: #A7A7A7
}

.ace-twilight .ace_marker-layer .ace_selection {
  background: rgba(221, 240, 255, 0.20)
}

.ace-twilight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #141414;
}

.ace-twilight .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-twilight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25)
}

.ace-twilight .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.031)
}

.ace-twilight .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.031)
}

.ace-twilight .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(221, 240, 255, 0.20)
}

.ace-twilight .ace_invisible {
  color: rgba(255, 255, 255, 0.25)
}

.ace-twilight .ace_keyword,
.ace-twilight .ace_meta {
  color: #CDA869
}

.ace-twilight .ace_constant,
.ace-twilight .ace_constant.ace_character,
.ace-twilight .ace_constant.ace_character.ace_escape,
.ace-twilight .ace_constant.ace_other,
.ace-twilight .ace_heading,
.ace-twilight .ace_markup.ace_heading,
.ace-twilight .ace_support.ace_constant {
  color: #CF6A4C
}

.ace-twilight .ace_invalid.ace_illegal {
  color: #F8F8F8;
  background-color: rgba(86, 45, 86, 0.75)
}

.ace-twilight .ace_invalid.ace_deprecated {
  text-decoration: underline;
  font-style: italic;
  color: #D2A8A1
}

.ace-twilight .ace_support {
  color: #9B859D
}

.ace-twilight .ace_fold {
  background-color: #AC885B;
  border-color: #F8F8F8
}

.ace-twilight .ace_support.ace_function {
  color: #DAD085
}

.ace-twilight .ace_list,
.ace-twilight .ace_markup.ace_list,
.ace-twilight .ace_storage {
  color: #F9EE98
}

.ace-twilight .ace_entity.ace_name.ace_function,
.ace-twilight .ace_meta.ace_tag {
  color: #AC885B
}

.ace-twilight .ace_string {
  color: #8F9D6A
}

.ace-twilight .ace_string.ace_regexp {
  color: #E9C062
}

.ace-twilight .ace_comment {
  font-style: italic;
  color: #5F5A60
}

.ace-twilight .ace_variable {
  color: #7587A6
}

.ace-twilight .ace_xml-pe {
  color: #494949
}

.ace-twilight .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y
}

.ace-twilight .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/twilight",["require","exports","module","ace/theme/twilight-css","ace/lib/dom"],function(n,c,A){c.isDark=!0,c.cssClass="ace-twilight",c.cssText=n("./twilight-css");var e=n("../lib/dom");e.importCssString(c.cssText,c.cssClass,!1)}),function(){ace.require(["ace/theme/twilight"],function(n){k&&(k.exports=n)})}()})(ci);var pi={exports:{}};(function(k,f){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(n,c,A){function e(t){var o=new Date().toLocaleString("en-us",t);return o.length==1?"0"+o:o}var l=n("./lib/dom"),h=n("./lib/oop"),d=n("./lib/event_emitter").EventEmitter,p=n("./lib/lang"),i=n("./range").Range,r=n("./range_list").RangeList,g=n("./keyboard/hash_handler").HashHandler,m=n("./tokenizer").Tokenizer,_=n("./clipboard"),$={CURRENT_WORD:function(t){return t.session.getTextRange(t.session.getWordRange())},SELECTION:function(t,o,s){var a=t.session.getTextRange();return s?a.replace(/\n\r?([ \t]*\S)/g,`
`+s+"$1"):a},CURRENT_LINE:function(t){return t.session.getLine(t.getCursorPosition().row)},PREV_LINE:function(t){return t.session.getLine(t.getCursorPosition().row-1)},LINE_INDEX:function(t){return t.getCursorPosition().row},LINE_NUMBER:function(t){return t.getCursorPosition().row+1},SOFT_TABS:function(t){return t.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(t){return t.session.getTabSize()},CLIPBOARD:function(t){return _.getText&&_.getText()},FILENAME:function(t){return/[^/\\]*$/.exec(this.FILEPATH(t))[0]},FILENAME_BASE:function(t){return/[^/\\]*$/.exec(this.FILEPATH(t))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(t){return this.FILEPATH(t).replace(/[^/\\]*$/,"")},FILEPATH:function(t){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(t){var o=t.session.$mode||{};return o.blockComment&&o.blockComment.start||""},BLOCK_COMMENT_END:function(t){var o=t.session.$mode||{};return o.blockComment&&o.blockComment.end||""},LINE_COMMENT:function(t){var o=t.session.$mode||{};return o.lineCommentStart||""},CURRENT_YEAR:e.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:e.bind(null,{year:"2-digit"}),CURRENT_MONTH:e.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:e.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:e.bind(null,{month:"short"}),CURRENT_DATE:e.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:e.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:e.bind(null,{weekday:"short"}),CURRENT_HOUR:e.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:e.bind(null,{minute:"2-digit"}),CURRENT_SECOND:e.bind(null,{second:"2-digit"})};$.SELECTED_TEXT=$.SELECTION;var b=function(){function t(){this.snippetMap={},this.snippetNameMap={},this.variables=$}return t.prototype.getTokenizer=function(){return t.$tokenizer||this.createTokenizer()},t.prototype.createTokenizer=function(){function o(u){return u=u.substr(1),/^\d+$/.test(u)?[{tabstopId:parseInt(u,10)}]:[{text:u}]}function s(u){return"(?:[^\\\\"+u+"]|\\\\.)"}var a={regex:"/("+s("/")+"+)/",onMatch:function(u,v,x){var T=x[0];return T.fmtString=!0,T.guard=u.slice(1,-1),T.flag="",""},next:"formatString"};return t.$tokenizer=new m({start:[{regex:/\\./,onMatch:function(u,v,x){var T=u[1];return(T=="}"&&x.length||"`$\\".indexOf(T)!=-1)&&(u=T),[u]}},{regex:/}/,onMatch:function(u,v,x){return[x.length?x.shift():u]}},{regex:/\$(?:\d+|\w+)/,onMatch:o},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(u,v,x){var T=o(u.substr(1));return x.unshift(T[0]),T},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+s("\\|")+"*\\|",onMatch:function(u,v,x){var T=u.slice(1,-1).replace(/\\[,|\\]|,/g,function(S){return S.length==2?S[1]:"\0"}).split("\0").map(function(S){return{value:S}});return x[0].choices=T,[T[0]]},next:"start"},a,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(u,v,x){return x.length&&x[0].expectElse?(x[0].expectElse=!1,x[0].ifEnd={elseEnd:x[0]},[x[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(u,v,x){var T=u[1];return T=="}"&&x.length||"`$\\".indexOf(T)!=-1?u=T:T=="n"?u=`
`:T=="t"?u="	":"ulULE".indexOf(T)!=-1&&(u={changeCase:T,local:T>"a"}),[u]}},{regex:"/\\w*}",onMatch:function(u,v,x){var T=x.shift();return T&&(T.flag=u.slice(1,-1)),this.next=T&&T.tabstopId?"start":"",[T||u]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(u,v,x){return[{text:u.slice(1)}]}},{regex:/\${\w+/,onMatch:function(u,v,x){var T={text:u.slice(2)};return x.unshift(T),[T]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(u,v,x){var T=x.shift();return this.next=T&&T.tabstopId?"start":"",[T||u]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(u,v,x){var T=x[0];return T.formatFunction=u.slice(2,-1),[x.shift()]},next:"formatString"},a,{regex:/:[\?\-+]?/,onMatch:function(u,v,x){u[1]=="+"&&(x[0].ifEnd=x[0]),u[1]=="?"&&(x[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),t.$tokenizer},t.prototype.tokenizeTmSnippet=function(o,s){return this.getTokenizer().getLineTokens(o,s).tokens.map(function(a){return a.value||a})},t.prototype.getVariableValue=function(o,s,a){if(/^\d+$/.test(s))return(this.variables.__||{})[s]||"";if(/^[A-Z]\d+$/.test(s))return(this.variables[s[0]+"__"]||{})[s.substr(1)]||"";if(s=s.replace(/^TM_/,""),!this.variables.hasOwnProperty(s))return"";var u=this.variables[s];return typeof u=="function"&&(u=this.variables[s](o,s,a)),u==null?"":u},t.prototype.tmStrFormat=function(o,s,a){if(!s.fmt)return o;var u=s.flag||"",v=s.guard;v=new RegExp(v,u.replace(/[^gim]/g,""));var x=typeof s.fmt=="string"?this.tokenizeTmSnippet(s.fmt,"formatString"):s.fmt,T=this,S=o.replace(v,function(){var M=T.variables.__;T.variables.__=[].slice.call(arguments);for(var L=T.resolveVariables(x,a),N="E",I=0;I<L.length;I++){var z=L[I];if(typeof z=="object")if(L[I]="",z.changeCase&&z.local){var j=L[I+1];j&&typeof j=="string"&&(z.changeCase=="u"?L[I]=j[0].toUpperCase():L[I]=j[0].toLowerCase(),L[I+1]=j.substr(1))}else z.changeCase&&(N=z.changeCase);else N=="U"?L[I]=z.toUpperCase():N=="L"&&(L[I]=z.toLowerCase())}return T.variables.__=M,L.join("")});return S},t.prototype.tmFormatFunction=function(o,s,a){return s.formatFunction=="upcase"?o.toUpperCase():s.formatFunction=="downcase"?o.toLowerCase():o},t.prototype.resolveVariables=function(o,s){function a(N){var I=o.indexOf(N,T+1);I!=-1&&(T=I)}for(var u=[],v="",x=!0,T=0;T<o.length;T++){var S=o[T];if(typeof S=="string"){u.push(S),S==`
`?(x=!0,v=""):x&&(v=/^\t*/.exec(S)[0],x=/\S/.test(S));continue}if(S){if(x=!1,S.fmtString){var M=o.indexOf(S,T+1);M==-1&&(M=o.length),S.fmt=o.slice(T+1,M),T=M}if(S.text){var L=this.getVariableValue(s,S.text,v)+"";S.fmtString&&(L=this.tmStrFormat(L,S,s)),S.formatFunction&&(L=this.tmFormatFunction(L,S,s)),L&&!S.ifEnd?(u.push(L),a(S)):!L&&S.ifEnd&&a(S.ifEnd)}else S.elseEnd?a(S.elseEnd):(S.tabstopId!=null||S.changeCase!=null)&&u.push(S)}}return u},t.prototype.getDisplayTextForSnippet=function(o,s){var a=y.call(this,o,s);return a.text},t.prototype.insertSnippetForSelection=function(o,s,a){a===void 0&&(a={});var u=y.call(this,o,s,a),v=o.getSelectionRange(),x=o.session.replace(v,u.text),T=new E(o),S=o.inVirtualSelectionMode&&o.selection.index;T.addTabstops(u.tabstops,v.start,x,S)},t.prototype.insertSnippet=function(o,s,a){a===void 0&&(a={});var u=this;if(o.inVirtualSelectionMode)return u.insertSnippetForSelection(o,s,a);o.forEachSelection(function(){u.insertSnippetForSelection(o,s,a)},null,{keepOrder:!0}),o.tabstopManager&&o.tabstopManager.tabNext()},t.prototype.$getScope=function(o){var s=o.session.$mode.$id||"";if(s=s.split("/").pop(),s==="html"||s==="php"){s==="php"&&!o.session.$mode.inlinePhp&&(s="html");var a=o.getCursorPosition(),u=o.session.getState(a.row);typeof u=="object"&&(u=u[0]),u.substring&&(u.substring(0,3)=="js-"?s="javascript":u.substring(0,4)=="css-"?s="css":u.substring(0,4)=="php-"&&(s="php"))}return s},t.prototype.getActiveScopes=function(o){var s=this.$getScope(o),a=[s],u=this.snippetMap;return u[s]&&u[s].includeScopes&&a.push.apply(a,u[s].includeScopes),a.push("_"),a},t.prototype.expandWithTab=function(o,s){var a=this,u=o.forEachSelection(function(){return a.expandSnippetForSelection(o,s)},null,{keepOrder:!0});return u&&o.tabstopManager&&o.tabstopManager.tabNext(),u},t.prototype.expandSnippetForSelection=function(o,s){var a=o.getCursorPosition(),u=o.session.getLine(a.row),v=u.substring(0,a.column),x=u.substr(a.column),T=this.snippetMap,S;return this.getActiveScopes(o).some(function(M){var L=T[M];return L&&(S=this.findMatchingSnippet(L,v,x)),!!S},this),S?(s&&s.dryRun||(o.session.doc.removeInLine(a.row,a.column-S.replaceBefore.length,a.column+S.replaceAfter.length),this.variables.M__=S.matchBefore,this.variables.T__=S.matchAfter,this.insertSnippetForSelection(o,S.content),this.variables.M__=this.variables.T__=null),!0):!1},t.prototype.findMatchingSnippet=function(o,s,a){for(var u=o.length;u--;){var v=o[u];if(!(v.startRe&&!v.startRe.test(s))&&!(v.endRe&&!v.endRe.test(a))&&!(!v.startRe&&!v.endRe))return v.matchBefore=v.startRe?v.startRe.exec(s):[""],v.matchAfter=v.endRe?v.endRe.exec(a):[""],v.replaceBefore=v.triggerRe?v.triggerRe.exec(s)[0]:"",v.replaceAfter=v.endTriggerRe?v.endTriggerRe.exec(a)[0]:"",v}},t.prototype.register=function(o,s){function a(M){return M&&!/^\^?\(.*\)\$?$|^\\b$/.test(M)&&(M="(?:"+M+")"),M||""}function u(M,L,N){return M=a(M),L=a(L),N?(M=L+M,M&&M[M.length-1]!="$"&&(M+="$")):(M+=L,M&&M[0]!="^"&&(M="^"+M)),new RegExp(M)}function v(M){M.scope||(M.scope=s||"_"),s=M.scope,x[s]||(x[s]=[],T[s]={});var L=T[s];if(M.name){var N=L[M.name];N&&S.unregister(N),L[M.name]=M}x[s].push(M),M.prefix&&(M.tabTrigger=M.prefix),!M.content&&M.body&&(M.content=Array.isArray(M.body)?M.body.join(`
`):M.body),M.tabTrigger&&!M.trigger&&(!M.guard&&/^\w/.test(M.tabTrigger)&&(M.guard="\\b"),M.trigger=p.escapeRegExp(M.tabTrigger)),!(!M.trigger&&!M.guard&&!M.endTrigger&&!M.endGuard)&&(M.startRe=u(M.trigger,M.guard,!0),M.triggerRe=new RegExp(M.trigger),M.endRe=u(M.endTrigger,M.endGuard,!0),M.endTriggerRe=new RegExp(M.endTrigger))}var x=this.snippetMap,T=this.snippetNameMap,S=this;o||(o=[]),Array.isArray(o)?o.forEach(v):Object.keys(o).forEach(function(M){v(o[M])}),this._signal("registerSnippets",{scope:s})},t.prototype.unregister=function(o,s){function a(x){var T=v[x.scope||s];if(T&&T[x.name]){delete T[x.name];var S=u[x.scope||s],M=S&&S.indexOf(x);M>=0&&S.splice(M,1)}}var u=this.snippetMap,v=this.snippetNameMap;o.content?a(o):Array.isArray(o)&&o.forEach(a)},t.prototype.parseSnippetFile=function(o){o=o.replace(/\r/g,"");for(var s=[],a={},u=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,v;v=u.exec(o);){if(v[1])try{a=JSON.parse(v[1]),s.push(a)}catch(M){}if(v[4])a.content=v[4].replace(/^\t/gm,""),s.push(a),a={};else{var x=v[2],T=v[3];if(x=="regex"){var S=/\/((?:[^\/\\]|\\.)*)|$/g;a.guard=S.exec(T)[1],a.trigger=S.exec(T)[1],a.endTrigger=S.exec(T)[1],a.endGuard=S.exec(T)[1]}else x=="snippet"?(a.tabTrigger=T.match(/^\S*/)[0],a.name||(a.name=T)):x&&(a[x]=T)}}return s},t.prototype.getSnippetByName=function(o,s){var a=this.snippetNameMap,u;return this.getActiveScopes(s).some(function(v){var x=a[v];return x&&(u=x[o]),!!u},this),u},t}();h.implement(b.prototype,d);var y=function(t,o,s){function a(D){for(var Y=[],X=0;X<D.length;X++){var W=D[X];if(typeof W=="object"){if(L[W.tabstopId])continue;var ue=D.lastIndexOf(W,X-1);W=Y[ue]||{tabstopId:W.tabstopId}}Y[X]=W}return Y}s===void 0&&(s={});var u=t.getCursorPosition(),v=t.session.getLine(u.row),x=t.session.getTabString(),T=v.match(/^\s*/)[0];u.column<T.length&&(T=T.slice(0,u.column)),o=o.replace(/\r/g,"");var S=this.tokenizeTmSnippet(o);S=this.resolveVariables(S,t),S=S.map(function(D){return D==`
`&&!s.excludeExtraIndent?D+T:typeof D=="string"?D.replace(/\t/g,x):D});var M=[];S.forEach(function(D,Y){if(typeof D=="object"){var X=D.tabstopId,W=M[X];if(W||(W=M[X]=[],W.index=X,W.value="",W.parents={}),W.indexOf(D)===-1){D.choices&&!W.choices&&(W.choices=D.choices),W.push(D);var ue=S.indexOf(D,Y+1);if(ue!==-1){var de=S.slice(Y+1,ue),Ce=de.some(function(Fe){return typeof Fe=="object"});Ce&&!W.value?W.value=de:de.length&&(!W.value||typeof W.value!="string")&&(W.value=de.join(""))}}}}),M.forEach(function(D){D.length=0});for(var L={},N=0;N<S.length;N++){var I=S[N];if(typeof I=="object"){var z=I.tabstopId,j=M[z],U=S.indexOf(I,N+1);if(L[z]){L[z]===I&&(delete L[z],Object.keys(L).forEach(function(D){j.parents[D]=!0}));continue}L[z]=I;var Z=j.value;typeof Z!="string"?Z=a(Z):I.fmt&&(Z=this.tmStrFormat(Z,I,t)),S.splice.apply(S,[N+1,Math.max(0,U-N)].concat(Z,I)),j.indexOf(I)===-1&&j.push(I)}}var re=0,Q=0,K="";return S.forEach(function(D){if(typeof D=="string"){var Y=D.split(`
`);Y.length>1?(Q=Y[Y.length-1].length,re+=Y.length-1):Q+=D.length,K+=D}else D&&(D.start?D.end={row:re,column:Q}:D.start={row:re,column:Q})}),{text:K,tabstops:M,tokens:S}},E=function(){function t(o){if(this.index=0,this.ranges=[],this.tabstops=[],o.tabstopManager)return o.tabstopManager;o.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=p.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(o)}return t.prototype.attach=function(o){this.$openTabstops=null,this.selectedTabstop=null,this.editor=o,this.session=o.session,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},t.prototype.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges.length=0,this.tabstops.length=0,this.selectedTabstop=null,this.editor.off("change",this.$onChange),this.editor.off("changeSelection",this.$onChangeSelection),this.editor.off("changeSession",this.$onChangeSession),this.editor.commands.off("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.session=null,this.editor=null},t.prototype.onChange=function(o){for(var s=o.action[0]=="r",a=this.selectedTabstop||{},u=a.parents||{},v=this.tabstops.slice(),x=0;x<v.length;x++){var T=v[x],S=T==a||u[T.index];if(T.rangeList.$bias=S?0:1,o.action=="remove"&&T!==a){var M=T.parents&&T.parents[a.index],L=T.rangeList.pointIndex(o.start,M);L=L<0?-L-1:L+1;var N=T.rangeList.pointIndex(o.end,M);N=N<0?-N-1:N-1;for(var I=T.rangeList.ranges.slice(L,N),z=0;z<I.length;z++)this.removeRange(I[z])}T.rangeList.$onChange(o)}var j=this.session;!this.$inChange&&s&&j.getLength()==1&&!j.getValue()&&this.detach()},t.prototype.updateLinkedFields=function(){var o=this.selectedTabstop;if(!(!o||!o.hasLinkedRanges||!o.firstNonLinked)){this.$inChange=!0;for(var s=this.session,a=s.getTextRange(o.firstNonLinked),u=0;u<o.length;u++){var v=o[u];if(v.linked){var x=v.original,T=c.snippetManager.tmStrFormat(a,x,this.editor);s.replace(v,T)}}this.$inChange=!1}},t.prototype.onAfterExec=function(o){o.command&&!o.command.readOnly&&this.updateLinkedFields()},t.prototype.onChangeSelection=function(){if(this.editor){for(var o=this.editor.selection.lead,s=this.editor.selection.anchor,a=this.editor.selection.isEmpty(),u=0;u<this.ranges.length;u++)if(!this.ranges[u].linked){var v=this.ranges[u].contains(o.row,o.column),x=a||this.ranges[u].contains(s.row,s.column);if(v&&x)return}this.detach()}},t.prototype.onChangeSession=function(){this.detach()},t.prototype.tabNext=function(o){var s=this.tabstops.length,a=this.index+(o||1);a=Math.min(Math.max(a,1),s),a==s&&(a=0),this.selectTabstop(a),this.updateTabstopMarkers(),a===0&&this.detach()},t.prototype.selectTabstop=function(o){this.$openTabstops=null;var s=this.tabstops[this.index];if(s&&this.addTabstopMarkers(s),this.index=o,s=this.tabstops[this.index],!(!s||!s.length)){this.selectedTabstop=s;var a=s.firstNonLinked||s;if(s.choices&&(a.cursor=a.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(a);else{var u=this.editor.multiSelect;u.toSingleRange(a);for(var v=0;v<s.length;v++)s.hasLinkedRanges&&s[v].linked||u.addRange(s[v].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},t.prototype.addTabstops=function(o,s,a){var u=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!o[0]){var v=i.fromPoints(a,a);R(v.start,s),R(v.end,s),o[0]=[v],o[0].index=0}var x=this.index,T=[x+1,0],S=this.ranges,M=this.snippetId=(this.snippetId||0)+1;o.forEach(function(L,N){var I=this.$openTabstops[N]||L;I.snippetId=M;for(var z=0;z<L.length;z++){var j=L[z],U=i.fromPoints(j.start,j.end||j.start);P(U.start,s),P(U.end,s),U.original=j,U.tabstop=I,S.push(U),I!=L?I.unshift(U):I[z]=U,j.fmtString||I.firstNonLinked&&u?(U.linked=!0,I.hasLinkedRanges=!0):I.firstNonLinked||(I.firstNonLinked=U)}I.firstNonLinked||(I.hasLinkedRanges=!1),I===L&&(T.push(I),this.$openTabstops[N]=I),this.addTabstopMarkers(I),I.rangeList=I.rangeList||new r,I.rangeList.$bias=0,I.rangeList.addList(I)},this),T.length>2&&(this.tabstops.length&&T.push(T.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,T))},t.prototype.addTabstopMarkers=function(o){var s=this.session;o.forEach(function(a){a.markerId||(a.markerId=s.addMarker(a,"ace_snippet-marker","text"))})},t.prototype.removeTabstopMarkers=function(o){var s=this.session;o.forEach(function(a){s.removeMarker(a.markerId),a.markerId=null})},t.prototype.updateTabstopMarkers=function(){if(this.selectedTabstop){var o=this.selectedTabstop.snippetId;this.selectedTabstop.index===0&&o--,this.tabstops.forEach(function(s){s.snippetId===o?this.addTabstopMarkers(s):this.removeTabstopMarkers(s)},this)}},t.prototype.removeRange=function(o){var s=o.tabstop.indexOf(o);s!=-1&&o.tabstop.splice(s,1),s=this.ranges.indexOf(o),s!=-1&&this.ranges.splice(s,1),s=o.tabstop.rangeList.ranges.indexOf(o),s!=-1&&o.tabstop.splice(s,1),this.session.removeMarker(o.markerId),o.tabstop.length||(s=this.tabstops.indexOf(o.tabstop),s!=-1&&this.tabstops.splice(s,1),this.tabstops.length||this.detach())},t}();E.prototype.keyboardHandler=new g,E.prototype.keyboardHandler.bindKeys({Tab:function(t){c.snippetManager&&c.snippetManager.expandWithTab(t)||(t.tabstopManager.tabNext(1),t.renderer.scrollCursorIntoView())},"Shift-Tab":function(t){t.tabstopManager.tabNext(-1),t.renderer.scrollCursorIntoView()},Esc:function(t){t.tabstopManager.detach()}});var P=function(t,o){t.row==0&&(t.column+=o.column),t.row+=o.row},R=function(t,o){t.row==o.row&&(t.column-=o.column),t.row-=o.row};l.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),c.snippetManager=new b;var C=n("./editor").Editor;(function(){this.insertSnippet=function(t,o){return c.snippetManager.insertSnippet(this,t,o)},this.expandSnippet=function(t){return c.snippetManager.expandWithTab(this,t)}}).call(C.prototype)}),ace.define("ace/ext/emmet",["require","exports","module","ace/keyboard/hash_handler","ace/editor","ace/snippets","ace/range","ace/config","resources","resources","tabStops","resources","utils","actions"],function(n,c,A){var e=n("../keyboard/hash_handler").HashHandler,l=n("../editor").Editor,h=n("../snippets").snippetManager,d=n("../range").Range,p=n("../config"),i,r,g=function(){function y(){}return y.prototype.setupContext=function(E){this.ace=E,this.indentation=E.session.getTabString(),i||(i=window.emmet);var P=i.resources||i.require("resources");P.setVariable("indentation",this.indentation),this.$syntax=null,this.$syntax=this.getSyntax()},y.prototype.getSelectionRange=function(){var E=this.ace.getSelectionRange(),P=this.ace.session.doc;return{start:P.positionToIndex(E.start),end:P.positionToIndex(E.end)}},y.prototype.createSelection=function(E,P){var R=this.ace.session.doc;this.ace.selection.setRange({start:R.indexToPosition(E),end:R.indexToPosition(P)})},y.prototype.getCurrentLineRange=function(){var E=this.ace,P=E.getCursorPosition().row,R=E.session.getLine(P).length,C=E.session.doc.positionToIndex({row:P,column:0});return{start:C,end:C+R}},y.prototype.getCaretPos=function(){var E=this.ace.getCursorPosition();return this.ace.session.doc.positionToIndex(E)},y.prototype.setCaretPos=function(E){var P=this.ace.session.doc.indexToPosition(E);this.ace.selection.moveToPosition(P)},y.prototype.getCurrentLine=function(){var E=this.ace.getCursorPosition().row;return this.ace.session.getLine(E)},y.prototype.replaceContent=function(E,P,R,C){R==null&&(R=P==null?this.getContent().length:P),P==null&&(P=0);var t=this.ace,o=t.session.doc,s=d.fromPoints(o.indexToPosition(P),o.indexToPosition(R));t.session.remove(s),s.end=s.start,E=this.$updateTabstops(E),h.insertSnippet(t,E)},y.prototype.getContent=function(){return this.ace.getValue()},y.prototype.getSyntax=function(){if(this.$syntax)return this.$syntax;var E=this.ace.session.$modeId.split("/").pop();if(E=="html"||E=="php"){var P=this.ace.getCursorPosition(),R=this.ace.session.getState(P.row);typeof R!="string"&&(R=R[0]),R&&(R=R.split("-"),R.length>1?E=R[0]:E=="php"&&(E="html"))}return E},y.prototype.getProfileName=function(){var E=i.resources||i.require("resources");switch(this.getSyntax()){case"css":return"css";case"xml":case"xsl":return"xml";case"html":var P=E.getVariable("profile");return P||(P=this.ace.session.getLines(0,2).join("").search(/<!DOCTYPE[^>]+XHTML/i)!=-1?"xhtml":"html"),P;default:var R=this.ace.session.$mode;return R.emmetConfig&&R.emmetConfig.profile||"xhtml"}},y.prototype.prompt=function(E){return prompt(E)},y.prototype.getSelection=function(){return this.ace.session.getTextRange()},y.prototype.getFilePath=function(){return""},y.prototype.$updateTabstops=function(E){var P=1e3,R=0,C=null,t=i.tabStops||i.require("tabStops"),o=i.resources||i.require("resources"),s=o.getVocabulary("user"),a={tabstop:function(v){var x=parseInt(v.group,10),T=x===0;T?x=++R:x+=P;var S=v.placeholder;S&&(S=t.processText(S,a));var M="${"+x+(S?":"+S:"")+"}";return T&&(C=[v.start,M]),M},escape:function(v){return v=="$"?"\\$":v=="\\"?"\\\\":v}};if(E=t.processText(E,a),s.variables.insert_final_tabstop&&!/\$\{0\}$/.test(E))E+="${0}";else if(C){var u=i.utils?i.utils.common:i.require("utils");E=u.replaceSubstring(E,"${0}",C[0],C[1])}return E},y}(),m={expand_abbreviation:{mac:"ctrl+alt+e",win:"alt+e"},match_pair_outward:{mac:"ctrl+d",win:"ctrl+,"},match_pair_inward:{mac:"ctrl+j",win:"ctrl+shift+0"},matching_pair:{mac:"ctrl+alt+j",win:"alt+j"},next_edit_point:"alt+right",prev_edit_point:"alt+left",toggle_comment:{mac:"command+/",win:"ctrl+/"},split_join_tag:{mac:"shift+command+'",win:"shift+ctrl+`"},remove_tag:{mac:"command+'",win:"shift+ctrl+;"},evaluate_math_expression:{mac:"shift+command+y",win:"shift+ctrl+y"},increment_number_by_1:"ctrl+up",decrement_number_by_1:"ctrl+down",increment_number_by_01:"alt+up",decrement_number_by_01:"alt+down",increment_number_by_10:{mac:"alt+command+up",win:"shift+alt+up"},decrement_number_by_10:{mac:"alt+command+down",win:"shift+alt+down"},select_next_item:{mac:"shift+command+.",win:"shift+ctrl+."},select_previous_item:{mac:"shift+command+,",win:"shift+ctrl+,"},reflect_css_value:{mac:"shift+command+r",win:"shift+ctrl+r"},encode_decode_data_url:{mac:"shift+ctrl+d",win:"ctrl+'"},expand_abbreviation_with_tab:"Tab",wrap_with_abbreviation:{mac:"shift+ctrl+a",win:"shift+ctrl+a"}},_=new g;c.commands=new e,c.runEmmetCommand=function y(E){if(this.action=="expand_abbreviation_with_tab"){if(!E.selection.isEmpty())return!1;var P=E.selection.lead,R=E.session.getTokenAt(P.row,P.column);if(R&&/\btag\b/.test(R.type))return!1}try{_.setupContext(E);var C=i.actions||i.require("actions");if(this.action=="wrap_with_abbreviation")return setTimeout(function(){C.run("wrap_with_abbreviation",_)},0);var t=C.run(this.action,_)}catch(s){if(!i){var o=c.load(y.bind(this,E));return this.action=="expand_abbreviation_with_tab"?!1:o}E._signal("changeStatus",typeof s=="string"?s:s.message),p.warn(s),t=!1}return t};for(var $ in m)c.commands.addCommand({name:"emmet:"+$,action:$,bindKey:m[$],exec:c.runEmmetCommand,multiSelectAction:"forEach"});c.updateCommands=function(y,E){E?y.keyBinding.addKeyboardHandler(c.commands):y.keyBinding.removeKeyboardHandler(c.commands)},c.isSupportedMode=function(y){if(!y)return!1;if(y.emmetConfig)return!0;var E=y.$id||y;return/css|less|scss|sass|stylus|html|php|twig|ejs|handlebars/.test(E)},c.isAvailable=function(y,E){if(/(evaluate_math_expression|expand_abbreviation)$/.test(E))return!0;var P=y.session.$mode,R=c.isSupportedMode(P);if(R&&P.$modes)try{_.setupContext(y),/js|php/.test(_.getSyntax())&&(R=!1)}catch(C){}return R};var b=function(y,E){var P=E;if(P){var R=c.isSupportedMode(P.session.$mode);y.enableEmmet===!1&&(R=!1),R&&c.load(),c.updateCommands(P,R)}};c.load=function(y){return typeof r!="string"?(p.warn("script for emmet-core is not loaded"),!1):(p.loadModule(r,function(){r=null,y&&y()}),!0)},c.AceEmmetEditor=g,p.defineOptions(l.prototype,"editor",{enableEmmet:{set:function(y){this[y?"on":"removeListener"]("changeMode",b),b({enableEmmet:!!y},this)},value:!0}}),c.setCore=function(y){typeof y=="string"?r=y:i=y}}),function(){ace.require(["ace/ext/emmet"],function(n){k&&(k.exports=n)})}()})(pi);var hi={exports:{}};(function(k,f){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(n,c,A){function e(t){var o=new Date().toLocaleString("en-us",t);return o.length==1?"0"+o:o}var l=n("./lib/dom"),h=n("./lib/oop"),d=n("./lib/event_emitter").EventEmitter,p=n("./lib/lang"),i=n("./range").Range,r=n("./range_list").RangeList,g=n("./keyboard/hash_handler").HashHandler,m=n("./tokenizer").Tokenizer,_=n("./clipboard"),$={CURRENT_WORD:function(t){return t.session.getTextRange(t.session.getWordRange())},SELECTION:function(t,o,s){var a=t.session.getTextRange();return s?a.replace(/\n\r?([ \t]*\S)/g,`
`+s+"$1"):a},CURRENT_LINE:function(t){return t.session.getLine(t.getCursorPosition().row)},PREV_LINE:function(t){return t.session.getLine(t.getCursorPosition().row-1)},LINE_INDEX:function(t){return t.getCursorPosition().row},LINE_NUMBER:function(t){return t.getCursorPosition().row+1},SOFT_TABS:function(t){return t.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(t){return t.session.getTabSize()},CLIPBOARD:function(t){return _.getText&&_.getText()},FILENAME:function(t){return/[^/\\]*$/.exec(this.FILEPATH(t))[0]},FILENAME_BASE:function(t){return/[^/\\]*$/.exec(this.FILEPATH(t))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(t){return this.FILEPATH(t).replace(/[^/\\]*$/,"")},FILEPATH:function(t){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(t){var o=t.session.$mode||{};return o.blockComment&&o.blockComment.start||""},BLOCK_COMMENT_END:function(t){var o=t.session.$mode||{};return o.blockComment&&o.blockComment.end||""},LINE_COMMENT:function(t){var o=t.session.$mode||{};return o.lineCommentStart||""},CURRENT_YEAR:e.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:e.bind(null,{year:"2-digit"}),CURRENT_MONTH:e.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:e.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:e.bind(null,{month:"short"}),CURRENT_DATE:e.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:e.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:e.bind(null,{weekday:"short"}),CURRENT_HOUR:e.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:e.bind(null,{minute:"2-digit"}),CURRENT_SECOND:e.bind(null,{second:"2-digit"})};$.SELECTED_TEXT=$.SELECTION;var b=function(){function t(){this.snippetMap={},this.snippetNameMap={},this.variables=$}return t.prototype.getTokenizer=function(){return t.$tokenizer||this.createTokenizer()},t.prototype.createTokenizer=function(){function o(u){return u=u.substr(1),/^\d+$/.test(u)?[{tabstopId:parseInt(u,10)}]:[{text:u}]}function s(u){return"(?:[^\\\\"+u+"]|\\\\.)"}var a={regex:"/("+s("/")+"+)/",onMatch:function(u,v,x){var T=x[0];return T.fmtString=!0,T.guard=u.slice(1,-1),T.flag="",""},next:"formatString"};return t.$tokenizer=new m({start:[{regex:/\\./,onMatch:function(u,v,x){var T=u[1];return(T=="}"&&x.length||"`$\\".indexOf(T)!=-1)&&(u=T),[u]}},{regex:/}/,onMatch:function(u,v,x){return[x.length?x.shift():u]}},{regex:/\$(?:\d+|\w+)/,onMatch:o},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(u,v,x){var T=o(u.substr(1));return x.unshift(T[0]),T},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+s("\\|")+"*\\|",onMatch:function(u,v,x){var T=u.slice(1,-1).replace(/\\[,|\\]|,/g,function(S){return S.length==2?S[1]:"\0"}).split("\0").map(function(S){return{value:S}});return x[0].choices=T,[T[0]]},next:"start"},a,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(u,v,x){return x.length&&x[0].expectElse?(x[0].expectElse=!1,x[0].ifEnd={elseEnd:x[0]},[x[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(u,v,x){var T=u[1];return T=="}"&&x.length||"`$\\".indexOf(T)!=-1?u=T:T=="n"?u=`
`:T=="t"?u="	":"ulULE".indexOf(T)!=-1&&(u={changeCase:T,local:T>"a"}),[u]}},{regex:"/\\w*}",onMatch:function(u,v,x){var T=x.shift();return T&&(T.flag=u.slice(1,-1)),this.next=T&&T.tabstopId?"start":"",[T||u]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(u,v,x){return[{text:u.slice(1)}]}},{regex:/\${\w+/,onMatch:function(u,v,x){var T={text:u.slice(2)};return x.unshift(T),[T]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(u,v,x){var T=x.shift();return this.next=T&&T.tabstopId?"start":"",[T||u]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(u,v,x){var T=x[0];return T.formatFunction=u.slice(2,-1),[x.shift()]},next:"formatString"},a,{regex:/:[\?\-+]?/,onMatch:function(u,v,x){u[1]=="+"&&(x[0].ifEnd=x[0]),u[1]=="?"&&(x[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),t.$tokenizer},t.prototype.tokenizeTmSnippet=function(o,s){return this.getTokenizer().getLineTokens(o,s).tokens.map(function(a){return a.value||a})},t.prototype.getVariableValue=function(o,s,a){if(/^\d+$/.test(s))return(this.variables.__||{})[s]||"";if(/^[A-Z]\d+$/.test(s))return(this.variables[s[0]+"__"]||{})[s.substr(1)]||"";if(s=s.replace(/^TM_/,""),!this.variables.hasOwnProperty(s))return"";var u=this.variables[s];return typeof u=="function"&&(u=this.variables[s](o,s,a)),u==null?"":u},t.prototype.tmStrFormat=function(o,s,a){if(!s.fmt)return o;var u=s.flag||"",v=s.guard;v=new RegExp(v,u.replace(/[^gim]/g,""));var x=typeof s.fmt=="string"?this.tokenizeTmSnippet(s.fmt,"formatString"):s.fmt,T=this,S=o.replace(v,function(){var M=T.variables.__;T.variables.__=[].slice.call(arguments);for(var L=T.resolveVariables(x,a),N="E",I=0;I<L.length;I++){var z=L[I];if(typeof z=="object")if(L[I]="",z.changeCase&&z.local){var j=L[I+1];j&&typeof j=="string"&&(z.changeCase=="u"?L[I]=j[0].toUpperCase():L[I]=j[0].toLowerCase(),L[I+1]=j.substr(1))}else z.changeCase&&(N=z.changeCase);else N=="U"?L[I]=z.toUpperCase():N=="L"&&(L[I]=z.toLowerCase())}return T.variables.__=M,L.join("")});return S},t.prototype.tmFormatFunction=function(o,s,a){return s.formatFunction=="upcase"?o.toUpperCase():s.formatFunction=="downcase"?o.toLowerCase():o},t.prototype.resolveVariables=function(o,s){function a(N){var I=o.indexOf(N,T+1);I!=-1&&(T=I)}for(var u=[],v="",x=!0,T=0;T<o.length;T++){var S=o[T];if(typeof S=="string"){u.push(S),S==`
`?(x=!0,v=""):x&&(v=/^\t*/.exec(S)[0],x=/\S/.test(S));continue}if(S){if(x=!1,S.fmtString){var M=o.indexOf(S,T+1);M==-1&&(M=o.length),S.fmt=o.slice(T+1,M),T=M}if(S.text){var L=this.getVariableValue(s,S.text,v)+"";S.fmtString&&(L=this.tmStrFormat(L,S,s)),S.formatFunction&&(L=this.tmFormatFunction(L,S,s)),L&&!S.ifEnd?(u.push(L),a(S)):!L&&S.ifEnd&&a(S.ifEnd)}else S.elseEnd?a(S.elseEnd):(S.tabstopId!=null||S.changeCase!=null)&&u.push(S)}}return u},t.prototype.getDisplayTextForSnippet=function(o,s){var a=y.call(this,o,s);return a.text},t.prototype.insertSnippetForSelection=function(o,s,a){a===void 0&&(a={});var u=y.call(this,o,s,a),v=o.getSelectionRange(),x=o.session.replace(v,u.text),T=new E(o),S=o.inVirtualSelectionMode&&o.selection.index;T.addTabstops(u.tabstops,v.start,x,S)},t.prototype.insertSnippet=function(o,s,a){a===void 0&&(a={});var u=this;if(o.inVirtualSelectionMode)return u.insertSnippetForSelection(o,s,a);o.forEachSelection(function(){u.insertSnippetForSelection(o,s,a)},null,{keepOrder:!0}),o.tabstopManager&&o.tabstopManager.tabNext()},t.prototype.$getScope=function(o){var s=o.session.$mode.$id||"";if(s=s.split("/").pop(),s==="html"||s==="php"){s==="php"&&!o.session.$mode.inlinePhp&&(s="html");var a=o.getCursorPosition(),u=o.session.getState(a.row);typeof u=="object"&&(u=u[0]),u.substring&&(u.substring(0,3)=="js-"?s="javascript":u.substring(0,4)=="css-"?s="css":u.substring(0,4)=="php-"&&(s="php"))}return s},t.prototype.getActiveScopes=function(o){var s=this.$getScope(o),a=[s],u=this.snippetMap;return u[s]&&u[s].includeScopes&&a.push.apply(a,u[s].includeScopes),a.push("_"),a},t.prototype.expandWithTab=function(o,s){var a=this,u=o.forEachSelection(function(){return a.expandSnippetForSelection(o,s)},null,{keepOrder:!0});return u&&o.tabstopManager&&o.tabstopManager.tabNext(),u},t.prototype.expandSnippetForSelection=function(o,s){var a=o.getCursorPosition(),u=o.session.getLine(a.row),v=u.substring(0,a.column),x=u.substr(a.column),T=this.snippetMap,S;return this.getActiveScopes(o).some(function(M){var L=T[M];return L&&(S=this.findMatchingSnippet(L,v,x)),!!S},this),S?(s&&s.dryRun||(o.session.doc.removeInLine(a.row,a.column-S.replaceBefore.length,a.column+S.replaceAfter.length),this.variables.M__=S.matchBefore,this.variables.T__=S.matchAfter,this.insertSnippetForSelection(o,S.content),this.variables.M__=this.variables.T__=null),!0):!1},t.prototype.findMatchingSnippet=function(o,s,a){for(var u=o.length;u--;){var v=o[u];if(!(v.startRe&&!v.startRe.test(s))&&!(v.endRe&&!v.endRe.test(a))&&!(!v.startRe&&!v.endRe))return v.matchBefore=v.startRe?v.startRe.exec(s):[""],v.matchAfter=v.endRe?v.endRe.exec(a):[""],v.replaceBefore=v.triggerRe?v.triggerRe.exec(s)[0]:"",v.replaceAfter=v.endTriggerRe?v.endTriggerRe.exec(a)[0]:"",v}},t.prototype.register=function(o,s){function a(M){return M&&!/^\^?\(.*\)\$?$|^\\b$/.test(M)&&(M="(?:"+M+")"),M||""}function u(M,L,N){return M=a(M),L=a(L),N?(M=L+M,M&&M[M.length-1]!="$"&&(M+="$")):(M+=L,M&&M[0]!="^"&&(M="^"+M)),new RegExp(M)}function v(M){M.scope||(M.scope=s||"_"),s=M.scope,x[s]||(x[s]=[],T[s]={});var L=T[s];if(M.name){var N=L[M.name];N&&S.unregister(N),L[M.name]=M}x[s].push(M),M.prefix&&(M.tabTrigger=M.prefix),!M.content&&M.body&&(M.content=Array.isArray(M.body)?M.body.join(`
`):M.body),M.tabTrigger&&!M.trigger&&(!M.guard&&/^\w/.test(M.tabTrigger)&&(M.guard="\\b"),M.trigger=p.escapeRegExp(M.tabTrigger)),!(!M.trigger&&!M.guard&&!M.endTrigger&&!M.endGuard)&&(M.startRe=u(M.trigger,M.guard,!0),M.triggerRe=new RegExp(M.trigger),M.endRe=u(M.endTrigger,M.endGuard,!0),M.endTriggerRe=new RegExp(M.endTrigger))}var x=this.snippetMap,T=this.snippetNameMap,S=this;o||(o=[]),Array.isArray(o)?o.forEach(v):Object.keys(o).forEach(function(M){v(o[M])}),this._signal("registerSnippets",{scope:s})},t.prototype.unregister=function(o,s){function a(x){var T=v[x.scope||s];if(T&&T[x.name]){delete T[x.name];var S=u[x.scope||s],M=S&&S.indexOf(x);M>=0&&S.splice(M,1)}}var u=this.snippetMap,v=this.snippetNameMap;o.content?a(o):Array.isArray(o)&&o.forEach(a)},t.prototype.parseSnippetFile=function(o){o=o.replace(/\r/g,"");for(var s=[],a={},u=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,v;v=u.exec(o);){if(v[1])try{a=JSON.parse(v[1]),s.push(a)}catch(M){}if(v[4])a.content=v[4].replace(/^\t/gm,""),s.push(a),a={};else{var x=v[2],T=v[3];if(x=="regex"){var S=/\/((?:[^\/\\]|\\.)*)|$/g;a.guard=S.exec(T)[1],a.trigger=S.exec(T)[1],a.endTrigger=S.exec(T)[1],a.endGuard=S.exec(T)[1]}else x=="snippet"?(a.tabTrigger=T.match(/^\S*/)[0],a.name||(a.name=T)):x&&(a[x]=T)}}return s},t.prototype.getSnippetByName=function(o,s){var a=this.snippetNameMap,u;return this.getActiveScopes(s).some(function(v){var x=a[v];return x&&(u=x[o]),!!u},this),u},t}();h.implement(b.prototype,d);var y=function(t,o,s){function a(D){for(var Y=[],X=0;X<D.length;X++){var W=D[X];if(typeof W=="object"){if(L[W.tabstopId])continue;var ue=D.lastIndexOf(W,X-1);W=Y[ue]||{tabstopId:W.tabstopId}}Y[X]=W}return Y}s===void 0&&(s={});var u=t.getCursorPosition(),v=t.session.getLine(u.row),x=t.session.getTabString(),T=v.match(/^\s*/)[0];u.column<T.length&&(T=T.slice(0,u.column)),o=o.replace(/\r/g,"");var S=this.tokenizeTmSnippet(o);S=this.resolveVariables(S,t),S=S.map(function(D){return D==`
`&&!s.excludeExtraIndent?D+T:typeof D=="string"?D.replace(/\t/g,x):D});var M=[];S.forEach(function(D,Y){if(typeof D=="object"){var X=D.tabstopId,W=M[X];if(W||(W=M[X]=[],W.index=X,W.value="",W.parents={}),W.indexOf(D)===-1){D.choices&&!W.choices&&(W.choices=D.choices),W.push(D);var ue=S.indexOf(D,Y+1);if(ue!==-1){var de=S.slice(Y+1,ue),Ce=de.some(function(Fe){return typeof Fe=="object"});Ce&&!W.value?W.value=de:de.length&&(!W.value||typeof W.value!="string")&&(W.value=de.join(""))}}}}),M.forEach(function(D){D.length=0});for(var L={},N=0;N<S.length;N++){var I=S[N];if(typeof I=="object"){var z=I.tabstopId,j=M[z],U=S.indexOf(I,N+1);if(L[z]){L[z]===I&&(delete L[z],Object.keys(L).forEach(function(D){j.parents[D]=!0}));continue}L[z]=I;var Z=j.value;typeof Z!="string"?Z=a(Z):I.fmt&&(Z=this.tmStrFormat(Z,I,t)),S.splice.apply(S,[N+1,Math.max(0,U-N)].concat(Z,I)),j.indexOf(I)===-1&&j.push(I)}}var re=0,Q=0,K="";return S.forEach(function(D){if(typeof D=="string"){var Y=D.split(`
`);Y.length>1?(Q=Y[Y.length-1].length,re+=Y.length-1):Q+=D.length,K+=D}else D&&(D.start?D.end={row:re,column:Q}:D.start={row:re,column:Q})}),{text:K,tabstops:M,tokens:S}},E=function(){function t(o){if(this.index=0,this.ranges=[],this.tabstops=[],o.tabstopManager)return o.tabstopManager;o.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=p.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(o)}return t.prototype.attach=function(o){this.$openTabstops=null,this.selectedTabstop=null,this.editor=o,this.session=o.session,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},t.prototype.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges.length=0,this.tabstops.length=0,this.selectedTabstop=null,this.editor.off("change",this.$onChange),this.editor.off("changeSelection",this.$onChangeSelection),this.editor.off("changeSession",this.$onChangeSession),this.editor.commands.off("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.session=null,this.editor=null},t.prototype.onChange=function(o){for(var s=o.action[0]=="r",a=this.selectedTabstop||{},u=a.parents||{},v=this.tabstops.slice(),x=0;x<v.length;x++){var T=v[x],S=T==a||u[T.index];if(T.rangeList.$bias=S?0:1,o.action=="remove"&&T!==a){var M=T.parents&&T.parents[a.index],L=T.rangeList.pointIndex(o.start,M);L=L<0?-L-1:L+1;var N=T.rangeList.pointIndex(o.end,M);N=N<0?-N-1:N-1;for(var I=T.rangeList.ranges.slice(L,N),z=0;z<I.length;z++)this.removeRange(I[z])}T.rangeList.$onChange(o)}var j=this.session;!this.$inChange&&s&&j.getLength()==1&&!j.getValue()&&this.detach()},t.prototype.updateLinkedFields=function(){var o=this.selectedTabstop;if(!(!o||!o.hasLinkedRanges||!o.firstNonLinked)){this.$inChange=!0;for(var s=this.session,a=s.getTextRange(o.firstNonLinked),u=0;u<o.length;u++){var v=o[u];if(v.linked){var x=v.original,T=c.snippetManager.tmStrFormat(a,x,this.editor);s.replace(v,T)}}this.$inChange=!1}},t.prototype.onAfterExec=function(o){o.command&&!o.command.readOnly&&this.updateLinkedFields()},t.prototype.onChangeSelection=function(){if(this.editor){for(var o=this.editor.selection.lead,s=this.editor.selection.anchor,a=this.editor.selection.isEmpty(),u=0;u<this.ranges.length;u++)if(!this.ranges[u].linked){var v=this.ranges[u].contains(o.row,o.column),x=a||this.ranges[u].contains(s.row,s.column);if(v&&x)return}this.detach()}},t.prototype.onChangeSession=function(){this.detach()},t.prototype.tabNext=function(o){var s=this.tabstops.length,a=this.index+(o||1);a=Math.min(Math.max(a,1),s),a==s&&(a=0),this.selectTabstop(a),this.updateTabstopMarkers(),a===0&&this.detach()},t.prototype.selectTabstop=function(o){this.$openTabstops=null;var s=this.tabstops[this.index];if(s&&this.addTabstopMarkers(s),this.index=o,s=this.tabstops[this.index],!(!s||!s.length)){this.selectedTabstop=s;var a=s.firstNonLinked||s;if(s.choices&&(a.cursor=a.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(a);else{var u=this.editor.multiSelect;u.toSingleRange(a);for(var v=0;v<s.length;v++)s.hasLinkedRanges&&s[v].linked||u.addRange(s[v].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},t.prototype.addTabstops=function(o,s,a){var u=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!o[0]){var v=i.fromPoints(a,a);R(v.start,s),R(v.end,s),o[0]=[v],o[0].index=0}var x=this.index,T=[x+1,0],S=this.ranges,M=this.snippetId=(this.snippetId||0)+1;o.forEach(function(L,N){var I=this.$openTabstops[N]||L;I.snippetId=M;for(var z=0;z<L.length;z++){var j=L[z],U=i.fromPoints(j.start,j.end||j.start);P(U.start,s),P(U.end,s),U.original=j,U.tabstop=I,S.push(U),I!=L?I.unshift(U):I[z]=U,j.fmtString||I.firstNonLinked&&u?(U.linked=!0,I.hasLinkedRanges=!0):I.firstNonLinked||(I.firstNonLinked=U)}I.firstNonLinked||(I.hasLinkedRanges=!1),I===L&&(T.push(I),this.$openTabstops[N]=I),this.addTabstopMarkers(I),I.rangeList=I.rangeList||new r,I.rangeList.$bias=0,I.rangeList.addList(I)},this),T.length>2&&(this.tabstops.length&&T.push(T.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,T))},t.prototype.addTabstopMarkers=function(o){var s=this.session;o.forEach(function(a){a.markerId||(a.markerId=s.addMarker(a,"ace_snippet-marker","text"))})},t.prototype.removeTabstopMarkers=function(o){var s=this.session;o.forEach(function(a){s.removeMarker(a.markerId),a.markerId=null})},t.prototype.updateTabstopMarkers=function(){if(this.selectedTabstop){var o=this.selectedTabstop.snippetId;this.selectedTabstop.index===0&&o--,this.tabstops.forEach(function(s){s.snippetId===o?this.addTabstopMarkers(s):this.removeTabstopMarkers(s)},this)}},t.prototype.removeRange=function(o){var s=o.tabstop.indexOf(o);s!=-1&&o.tabstop.splice(s,1),s=this.ranges.indexOf(o),s!=-1&&this.ranges.splice(s,1),s=o.tabstop.rangeList.ranges.indexOf(o),s!=-1&&o.tabstop.splice(s,1),this.session.removeMarker(o.markerId),o.tabstop.length||(s=this.tabstops.indexOf(o.tabstop),s!=-1&&this.tabstops.splice(s,1),this.tabstops.length||this.detach())},t}();E.prototype.keyboardHandler=new g,E.prototype.keyboardHandler.bindKeys({Tab:function(t){c.snippetManager&&c.snippetManager.expandWithTab(t)||(t.tabstopManager.tabNext(1),t.renderer.scrollCursorIntoView())},"Shift-Tab":function(t){t.tabstopManager.tabNext(-1),t.renderer.scrollCursorIntoView()},Esc:function(t){t.tabstopManager.detach()}});var P=function(t,o){t.row==0&&(t.column+=o.column),t.row+=o.row},R=function(t,o){t.row==o.row&&(t.column-=o.column),t.row-=o.row};l.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),c.snippetManager=new b;var C=n("./editor").Editor;(function(){this.insertSnippet=function(t,o){return c.snippetManager.insertSnippet(this,t,o)},this.expandSnippet=function(t){return c.snippetManager.expandWithTab(this,t)}}).call(C.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/config","ace/lib/useragent"],function(n,c,A){var e=n("../virtual_renderer").VirtualRenderer,l=n("../editor").Editor,h=n("../range").Range,d=n("../lib/event"),p=n("../lib/lang"),i=n("../lib/dom"),r=n("../config").nls,g=n("./../lib/useragent"),m=function(P){return"suggest-aria-id:".concat(P)},_=g.isSafari?"menu":"listbox",$=g.isSafari?"menuitem":"option",b=g.isSafari?"aria-current":"aria-selected",y=function(P){var R=new e(P);R.$maxLines=4;var C=new l(R);return C.setHighlightActiveLine(!1),C.setShowPrintMargin(!1),C.renderer.setShowGutter(!1),C.renderer.setHighlightGutterLine(!1),C.$mouseHandler.$focusTimeout=0,C.$highlightTagPending=!0,C},E=function(){function P(R){var C=i.createElement("div"),t=y(C);R&&R.appendChild(C),C.style.display="none",t.renderer.content.style.cursor="default",t.renderer.setStyle("ace_autocomplete"),t.renderer.$textLayer.element.setAttribute("role",_),t.renderer.$textLayer.element.setAttribute("aria-roledescription",r("autocomplete.popup.aria-roledescription","Autocomplete suggestions")),t.renderer.$textLayer.element.setAttribute("aria-label",r("autocomplete.popup.aria-label","Autocomplete suggestions")),t.renderer.textarea.setAttribute("aria-hidden","true"),t.setOption("displayIndentGuides",!1),t.setOption("dragDelay",150);var o=function(){};t.focus=o,t.$isFocused=!0,t.renderer.$cursorLayer.restartTimer=o,t.renderer.$cursorLayer.element.style.opacity="0",t.renderer.$maxLines=8,t.renderer.$keepTextAreaAtCursor=!1,t.setHighlightActiveLine(!1),t.session.highlight(""),t.session.$searchHighlight.clazz="ace_highlight-marker",t.on("mousedown",function(S){var M=S.getDocumentPosition();t.selection.moveToPosition(M),u.start.row=u.end.row=M.row,S.stop()});var s,a=new h(-1,0,-1,1/0),u=new h(-1,0,-1,1/0);u.id=t.session.addMarker(u,"ace_active-line","fullLine"),t.setSelectOnHover=function(S){S?a.id&&(t.session.removeMarker(a.id),a.id=null):a.id=t.session.addMarker(a,"ace_line-hover","fullLine")},t.setSelectOnHover(!1),t.on("mousemove",function(S){if(!s){s=S;return}if(!(s.x==S.x&&s.y==S.y)){s=S,s.scrollTop=t.renderer.scrollTop,t.isMouseOver=!0;var M=s.getDocumentPosition().row;a.start.row!=M&&(a.id||t.setRow(M),x(M))}}),t.renderer.on("beforeRender",function(){if(s&&a.start.row!=-1){s.$pos=null;var S=s.getDocumentPosition().row;a.id||t.setRow(S),x(S,!0)}}),t.renderer.on("afterRender",function(){for(var S=t.renderer.$textLayer,M=S.config.firstRow,L=S.config.lastRow;M<=L;M++){var N=S.element.childNodes[M-S.config.firstRow];N.setAttribute("role",$),N.setAttribute("aria-roledescription",r("autocomplete.popup.item.aria-roledescription","item")),N.setAttribute("aria-setsize",t.data.length),N.setAttribute("aria-describedby","doc-tooltip"),N.setAttribute("aria-posinset",M+1);var I=t.getData(M);if(I){var z="".concat(I.caption||I.value).concat(I.meta?", ".concat(I.meta):"");N.setAttribute("aria-label",z)}var j=N.querySelectorAll(".ace_completion-highlight");j.forEach(function(U){U.setAttribute("role","mark")})}}),t.renderer.on("afterRender",function(){var S=t.getRow(),M=t.renderer.$textLayer,L=M.element.childNodes[S-M.config.firstRow],N=document.activeElement;if(L!==t.selectedNode&&t.selectedNode&&(i.removeCssClass(t.selectedNode,"ace_selected"),t.selectedNode.removeAttribute(b),t.selectedNode.removeAttribute("id")),N.removeAttribute("aria-activedescendant"),t.selectedNode=L,L){var I=m(S);i.addCssClass(L,"ace_selected"),L.id=I,M.element.setAttribute("aria-activedescendant",I),N.setAttribute("aria-activedescendant",I),L.setAttribute(b,"true")}});var v=function(){x(-1)},x=function(S,M){S!==a.start.row&&(a.start.row=a.end.row=S,M||t.session._emit("changeBackMarker"),t._emit("changeHoverMarker"))};t.getHoveredRow=function(){return a.start.row},d.addListener(t.container,"mouseout",function(){t.isMouseOver=!1,v()}),t.on("hide",v),t.on("changeSelection",v),t.session.doc.getLength=function(){return t.data.length},t.session.doc.getLine=function(S){var M=t.data[S];return typeof M=="string"?M:M&&M.value||""};var T=t.session.bgTokenizer;return T.$tokenizeRow=function(S){function M(D,Y){D&&N.push({type:(L.className||"")+(Y||""),value:D})}var L=t.data[S],N=[];if(!L)return N;typeof L=="string"&&(L={value:L});for(var I=L.caption||L.value||L.name,z=I.toLowerCase(),j=(t.filterText||"").toLowerCase(),U=0,Z=0,re=0;re<=j.length;re++)if(re!=Z&&(L.matchMask&1<<re||re==j.length)){var Q=j.slice(Z,re);Z=re;var K=z.indexOf(Q,U);if(K==-1)continue;M(I.slice(U,K),""),U=K+Q.length,M(I.slice(K,U),"completion-highlight")}return M(I.slice(U,I.length),""),N.push({type:"completion-spacer",value:" "}),L.meta&&N.push({type:"completion-meta",value:L.meta}),L.message&&N.push({type:"completion-message",value:L.message}),N},T.$updateOnChange=o,T.start=o,t.session.$computeWidth=function(){return this.screenWidth=0},t.isOpen=!1,t.isTopdown=!1,t.autoSelect=!0,t.filterText="",t.isMouseOver=!1,t.data=[],t.setData=function(S,M){t.filterText=M||"",t.setValue(p.stringRepeat(`
`,S.length),-1),t.data=S||[],t.setRow(0)},t.getData=function(S){return t.data[S]},t.getRow=function(){return u.start.row},t.setRow=function(S){S=Math.max(this.autoSelect?0:-1,Math.min(this.data.length-1,S)),u.start.row!=S&&(t.selection.clearSelection(),u.start.row=u.end.row=S||0,t.session._emit("changeBackMarker"),t.moveCursorTo(S||0,0),t.isOpen&&t._signal("select"))},t.on("changeSelection",function(){t.isOpen&&t.setRow(t.selection.lead.row),t.renderer.scrollCursorIntoView()}),t.hide=function(){this.container.style.display="none",t.anchorPos=null,t.anchor=null,t.isOpen&&(t.isOpen=!1,this._signal("hide"))},t.tryShow=function(S,M,L,N){if(!N&&t.isOpen&&t.anchorPos&&t.anchor&&t.anchorPos.top===S.top&&t.anchorPos.left===S.left&&t.anchor===L)return!0;var I=this.container,z=this.renderer.scrollBar.width||10,j=window.innerHeight-z,U=window.innerWidth-z,Z=this.renderer,re=Z.$maxLines*M*1.4,Q={top:0,bottom:0,left:0},K=j-S.top-3*this.$borderSize-M,D=S.top-3*this.$borderSize;L||(D<=K||K>=re?L="bottom":L="top"),L==="top"?(Q.bottom=S.top-this.$borderSize,Q.top=Q.bottom-re):L==="bottom"&&(Q.top=S.top+M+this.$borderSize,Q.bottom=Q.top+re);var Y=Q.top>=0&&Q.bottom<=j;if(!N&&!Y)return!1;Y?Z.$maxPixelHeight=null:L==="top"?Z.$maxPixelHeight=D:Z.$maxPixelHeight=K,L==="top"?(I.style.top="",I.style.bottom=j+z-Q.bottom+"px",t.isTopdown=!1):(I.style.top=Q.top+"px",I.style.bottom="",t.isTopdown=!0),I.style.display="";var X=S.left;return X+I.offsetWidth>U&&(X=U-I.offsetWidth),I.style.left=X+"px",I.style.right="",t.isOpen||(t.isOpen=!0,this._signal("show"),s=null),t.anchorPos=S,t.anchor=L,!0},t.show=function(S,M,L){this.tryShow(S,M,L?"bottom":void 0,!0)},t.goTo=function(S){var M=this.getRow(),L=this.session.getLength()-1;switch(S){case"up":M=M<=0?L:M-1;break;case"down":M=M>=L?-1:M+1;break;case"start":M=0;break;case"end":M=L}this.setRow(M)},t.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},t.$imageSize=0,t.$borderSize=1,t}return P}();i.importCssString(`
.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #CAD6FA;
    z-index: 1;
}
.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #3a674e;
}
.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid #abbffe;
    margin-top: -1px;
    background: rgba(233,233,253,0.4);
    position: absolute;
    z-index: 2;
}
.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid rgba(109, 150, 13, 0.8);
    background: rgba(58, 103, 78, 0.62);
}
.ace_completion-meta {
    opacity: 0.5;
    margin-left: 0.9em;
}
.ace_completion-message {
    margin-left: 0.9em;
    color: blue;
}
.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #2d69c7;
}
.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #93ca12;
}
.ace_editor.ace_autocomplete {
    width: 300px;
    z-index: 200000;
    border: 1px lightgray solid;
    position: fixed;
    box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    line-height: 1.4;
    background: #fefefe;
    color: #111;
}
.ace_dark.ace_editor.ace_autocomplete {
    border: 1px #484747 solid;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);
    line-height: 1.4;
    background: #25282c;
    color: #c1c1c1;
}
.ace_autocomplete .ace_text-layer  {
    width: calc(100% - 8px);
}
.ace_autocomplete .ace_line {
    display: flex;
    align-items: center;
}
.ace_autocomplete .ace_line > * {
    min-width: 0;
    flex: 0 0 auto;
}
.ace_autocomplete .ace_line .ace_ {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ace_autocomplete .ace_completion-spacer {
    flex: 1;
}
.ace_autocomplete.ace_loading:after  {
    content: "";
    position: absolute;
    top: 0px;
    height: 2px;
    width: 8%;
    background: blue;
    z-index: 100;
    animation: ace_progress 3s infinite linear;
    animation-delay: 300ms;
    transform: translateX(-100%) scaleX(1);
}
@keyframes ace_progress {
    0% { transform: translateX(-100%) scaleX(1) }
    50% { transform: translateX(625%) scaleX(2) } 
    100% { transform: translateX(1500%) scaleX(3) } 
}
@media (prefers-reduced-motion) {
    .ace_autocomplete.ace_loading:after {
        transform: translateX(625%) scaleX(2);
        animation: none;
     }
}
`,"autocompletion.css",!1),c.AcePopup=E,c.$singleLineEditor=y,c.getAriaId=m}),ace.define("ace/autocomplete/inline_screenreader",["require","exports","module"],function(n,c,A){var e=function(){function l(h){this.editor=h,this.screenReaderDiv=document.createElement("div"),this.screenReaderDiv.classList.add("ace_screenreader-only"),this.editor.container.appendChild(this.screenReaderDiv)}return l.prototype.setScreenReaderContent=function(h){for(!this.popup&&this.editor.completer&&this.editor.completer.popup&&(this.popup=this.editor.completer.popup,this.popup.renderer.on("afterRender",function(){var p=this.popup.getRow(),i=this.popup.renderer.$textLayer,r=i.element.childNodes[p-i.config.firstRow];if(r){for(var g="doc-tooltip ",m=0;m<this._lines.length;m++)g+="ace-inline-screenreader-line-".concat(m," ");r.setAttribute("aria-describedby",g)}}.bind(this)));this.screenReaderDiv.firstChild;)this.screenReaderDiv.removeChild(this.screenReaderDiv.firstChild);this._lines=h.split(/\r\n|\r|\n/);var d=this.createCodeBlock();this.screenReaderDiv.appendChild(d)},l.prototype.destroy=function(){this.screenReaderDiv.remove()},l.prototype.createCodeBlock=function(){var h=document.createElement("pre");h.setAttribute("id","ace-inline-screenreader");for(var d=0;d<this._lines.length;d++){var p=document.createElement("code");p.setAttribute("id","ace-inline-screenreader-line-".concat(d));var i=document.createTextNode(this._lines[d]);p.appendChild(i),h.appendChild(p)}return h},l}();c.AceInlineScreenReader=e}),ace.define("ace/autocomplete/inline",["require","exports","module","ace/snippets","ace/autocomplete/inline_screenreader"],function(n,c,A){var e=n("../snippets").snippetManager,l=n("./inline_screenreader").AceInlineScreenReader,h=function(){function d(){this.editor=null}return d.prototype.show=function(p,i,r){if(r=r||"",p&&this.editor&&this.editor!==p&&(this.hide(),this.editor=null,this.inlineScreenReader=null),!p||!i)return!1;this.inlineScreenReader||(this.inlineScreenReader=new l(p));var g=i.snippet?e.getDisplayTextForSnippet(p,i.snippet):i.value;return i.hideInlinePreview||!g||!g.startsWith(r)?!1:(this.editor=p,this.inlineScreenReader.setScreenReaderContent(g),g=g.slice(r.length),g===""?p.removeGhostText():p.setGhostText(g),!0)},d.prototype.isOpen=function(){return this.editor?!!this.editor.renderer.$ghostText:!1},d.prototype.hide=function(){return this.editor?(this.editor.removeGhostText(),!0):!1},d.prototype.destroy=function(){this.hide(),this.editor=null,this.inlineScreenReader&&(this.inlineScreenReader.destroy(),this.inlineScreenReader=null)},d}();c.AceInline=h}),ace.define("ace/autocomplete/util",["require","exports","module"],function(n,c,A){c.parForEach=function(l,h,d){var p=0,i=l.length;i===0&&d();for(var r=0;r<i;r++)h(l[r],function(g,m){p++,p===i&&d(g,m)})};var e=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;c.retrievePrecedingIdentifier=function(l,h,d){d=d||e;for(var p=[],i=h-1;i>=0&&d.test(l[i]);i--)p.push(l[i]);return p.reverse().join("")},c.retrieveFollowingIdentifier=function(l,h,d){d=d||e;for(var p=[],i=h;i<l.length&&d.test(l[i]);i++)p.push(l[i]);return p},c.getCompletionPrefix=function(l){var h=l.getCursorPosition(),d=l.session.getLine(h.row),p;return l.completers.forEach(function(i){i.identifierRegexps&&i.identifierRegexps.forEach(function(r){!p&&r&&(p=this.retrievePrecedingIdentifier(d,h.column,r))}.bind(this))}.bind(this)),p||this.retrievePrecedingIdentifier(d,h.column)},c.triggerAutocomplete=function(l,d){var d=d==null?l.session.getPrecedingCharacter():d;return l.completers.some(function(p){if(p.triggerCharacters&&Array.isArray(p.triggerCharacters))return p.triggerCharacters.includes(d)})}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/inline","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config","ace/lib/event","ace/lib/scroll"],function(n,c,A){var e=n("./keyboard/hash_handler").HashHandler,l=n("./autocomplete/popup").AcePopup,h=n("./autocomplete/inline").AceInline,d=n("./autocomplete/popup").getAriaId,p=n("./autocomplete/util"),i=n("./lib/lang"),r=n("./lib/dom"),g=n("./snippets").snippetManager,m=n("./config"),_=n("./lib/event"),$=n("./lib/scroll").preventParentScroll,b=function(R,C){C.completer&&C.completer.destroy()},y=function(){function R(){this.autoInsert=!1,this.autoSelect=!0,this.autoShown=!1,this.exactMatch=!1,this.inlineEnabled=!1,this.keyboardHandler=new e,this.keyboardHandler.bindKeys(this.commands),this.parentNode=null,this.setSelectOnHover=!1,this.hasSeen=new Set,this.showLoadingState=!1,this.stickySelectionDelay=500,this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.onLayoutChange=this.onLayoutChange.bind(this),this.changeTimer=i.delayedCall(function(){this.updateCompletions(!0)}.bind(this)),this.tooltipTimer=i.delayedCall(this.updateDocTooltip.bind(this),50),this.popupTimer=i.delayedCall(this.$updatePopupPosition.bind(this),50),this.stickySelectionTimer=i.delayedCall(function(){this.stickySelection=!0}.bind(this),this.stickySelectionDelay),this.$firstOpenTimer=i.delayedCall(function(){var C=this.completionProvider&&this.completionProvider.initialPosition;this.autoShown||this.popup&&this.popup.isOpen||!C||this.editor.completers.length===0||(this.completions=new P(R.completionsForLoading),this.openPopup(this.editor,C.prefix,!1),this.popup.renderer.setStyle("ace_loading",!0))}.bind(this),this.stickySelectionDelay)}return Object.defineProperty(R,"completionsForLoading",{get:function(){return[{caption:m.nls("autocomplete.loading","Loading..."),value:""}]},enumerable:!1,configurable:!0}),R.prototype.$init=function(){return this.popup=new l(this.parentNode||document.body||document.documentElement),this.popup.on("click",function(C){this.insertMatch(),C.stop()}.bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.$onPopupShow.bind(this)),this.popup.on("hide",this.$onHidePopup.bind(this)),this.popup.on("select",this.$onPopupChange.bind(this)),_.addListener(this.popup.container,"mouseout",this.mouseOutListener.bind(this)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup.renderer.on("afterRender",this.$onPopupRender.bind(this)),this.popup},R.prototype.$initInline=function(){if(!(!this.inlineEnabled||this.inlineRenderer))return this.inlineRenderer=new h,this.inlineRenderer},R.prototype.getPopup=function(){return this.popup||this.$init()},R.prototype.$onHidePopup=function(){this.inlineRenderer&&this.inlineRenderer.hide(),this.hideDocTooltip(),this.stickySelectionTimer.cancel(),this.popupTimer.cancel(),this.stickySelection=!1},R.prototype.$seen=function(C){!this.hasSeen.has(C)&&C&&C.completer&&C.completer.onSeen&&typeof C.completer.onSeen=="function"&&(C.completer.onSeen(this.editor,C),this.hasSeen.add(C))},R.prototype.$onPopupChange=function(C){if(this.inlineRenderer&&this.inlineEnabled){var t=C?null:this.popup.getData(this.popup.getRow());if(this.$updateGhostText(t),this.popup.isMouseOver&&this.setSelectOnHover){this.tooltipTimer.call(null,null);return}this.popupTimer.schedule(),this.tooltipTimer.schedule()}else this.popupTimer.call(null,null),this.tooltipTimer.call(null,null)},R.prototype.$updateGhostText=function(C){var t=this.base.row,o=this.base.column,s=this.editor.getCursorPosition().column,a=this.editor.session.getLine(t).slice(o,s);this.inlineRenderer.show(this.editor,C,a)?this.$seen(C):this.inlineRenderer.hide()},R.prototype.$onPopupRender=function(){var C=this.inlineRenderer&&this.inlineEnabled;if(this.completions&&this.completions.filtered&&this.completions.filtered.length>0)for(var t=this.popup.getFirstVisibleRow();t<=this.popup.getLastVisibleRow();t++){var o=this.popup.getData(t);o&&(!C||o.hideInlinePreview)&&this.$seen(o)}},R.prototype.$onPopupShow=function(C){this.$onPopupChange(C),this.stickySelection=!1,this.stickySelectionDelay>=0&&this.stickySelectionTimer.schedule(this.stickySelectionDelay)},R.prototype.observeLayoutChanges=function(){if(!(this.$elements||!this.editor)){window.addEventListener("resize",this.onLayoutChange,{passive:!0}),window.addEventListener("wheel",this.mousewheelListener);for(var C=this.editor.container.parentNode,t=[];C;)t.push(C),C.addEventListener("scroll",this.onLayoutChange,{passive:!0}),C=C.parentNode;this.$elements=t}},R.prototype.unObserveLayoutChanges=function(){var C=this;window.removeEventListener("resize",this.onLayoutChange,{passive:!0}),window.removeEventListener("wheel",this.mousewheelListener),this.$elements&&this.$elements.forEach(function(t){t.removeEventListener("scroll",C.onLayoutChange,{passive:!0})}),this.$elements=null},R.prototype.onLayoutChange=function(){if(!this.popup.isOpen)return this.unObserveLayoutChanges();this.$updatePopupPosition(),this.updateDocTooltip()},R.prototype.$updatePopupPosition=function(){var C=this.editor,t=C.renderer,o=t.layerConfig.lineHeight,s=t.$cursorLayer.getPixelPosition(this.base,!0);s.left-=this.popup.getTextLeftOffset();var a=C.container.getBoundingClientRect();s.top+=a.top-t.layerConfig.offset,s.left+=a.left-C.renderer.scrollLeft,s.left+=t.gutterWidth;var u={top:s.top,left:s.left};t.$ghostText&&t.$ghostTextWidget&&this.base.row===t.$ghostText.position.row&&(u.top+=t.$ghostTextWidget.el.offsetHeight);var v=C.container.getBoundingClientRect().bottom-o,x=v<u.top?{top:v,left:u.left}:u;this.popup.tryShow(x,o,"bottom")||this.popup.tryShow(s,o,"top")||this.popup.show(s,o)},R.prototype.openPopup=function(C,t,o){this.$firstOpenTimer.cancel(),this.popup||this.$init(),this.inlineEnabled&&!this.inlineRenderer&&this.$initInline(),this.popup.autoSelect=this.autoSelect,this.popup.setSelectOnHover(this.setSelectOnHover);var s=this.popup.getRow(),a=this.popup.data[s];this.popup.setData(this.completions.filtered,this.completions.filterText),this.editor.textInput.setAriaOptions&&this.editor.textInput.setAriaOptions({activeDescendant:d(this.popup.getRow()),inline:this.inlineEnabled}),C.keyBinding.addKeyboardHandler(this.keyboardHandler);var u;this.stickySelection&&(u=this.popup.data.indexOf(a)),(!u||u===-1)&&(u=0),this.popup.setRow(this.autoSelect?u:-1),u===s&&a!==this.completions.filtered[u]&&this.$onPopupChange();var v=this.inlineRenderer&&this.inlineEnabled;if(u===s&&v){var x=this.popup.getData(this.popup.getRow());this.$updateGhostText(x)}o||(this.popup.setTheme(C.getTheme()),this.popup.setFontSize(C.getFontSize()),this.$updatePopupPosition(),this.tooltipNode&&this.updateDocTooltip()),this.changeTimer.cancel(),this.observeLayoutChanges()},R.prototype.detach=function(){this.editor&&(this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener)),this.$firstOpenTimer.cancel(),this.changeTimer.cancel(),this.hideDocTooltip(),this.completionProvider&&this.completionProvider.detach(),this.popup&&this.popup.isOpen&&this.popup.hide(),this.popup&&this.popup.renderer&&this.popup.renderer.off("afterRender",this.$onPopupRender),this.base&&this.base.detach(),this.activated=!1,this.completionProvider=this.completions=this.base=null,this.unObserveLayoutChanges()},R.prototype.changeListener=function(C){var t=this.editor.selection.lead;(t.row!=this.base.row||t.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},R.prototype.blurListener=function(C){var t=document.activeElement,o=this.editor.textInput.getElement(),s=C.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(C.relatedTarget),a=this.popup&&this.popup.container;t!=o&&t.parentNode!=a&&!s&&t!=this.tooltipNode&&C.relatedTarget!=o&&this.detach()},R.prototype.mousedownListener=function(C){this.detach()},R.prototype.mousewheelListener=function(C){this.popup&&!this.popup.isMouseOver&&this.detach()},R.prototype.mouseOutListener=function(C){this.popup.isOpen&&this.$updatePopupPosition()},R.prototype.goTo=function(C){this.popup.goTo(C)},R.prototype.insertMatch=function(C,t){if(C||(C=this.popup.getData(this.popup.getRow())),!C)return!1;if(C.value==="")return this.detach();var o=this.completions,s=this.getCompletionProvider().insertMatch(this.editor,C,o.filterText,t);return this.completions==o&&this.detach(),s},R.prototype.showPopup=function(C,t){this.editor&&this.detach(),this.activated=!0,this.editor=C,C.completer!=this&&(C.completer&&C.completer.detach(),C.completer=this),C.on("changeSelection",this.changeListener),C.on("blur",this.blurListener),C.on("mousedown",this.mousedownListener),C.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,t)},R.prototype.getCompletionProvider=function(C){return this.completionProvider||(this.completionProvider=new E(C)),this.completionProvider},R.prototype.gatherCompletions=function(C,t){return this.getCompletionProvider().gatherCompletions(C,t)},R.prototype.updateCompletions=function(C,t){if(C&&this.base&&this.completions){var s=this.editor.getCursorPosition(),a=this.editor.session.getTextRange({start:this.base,end:s});if(a==this.completions.filterText)return;if(this.completions.setFilter(a),!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==a&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,a,C);return}if(t&&t.matches){var s=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(s.row,s.column),this.base.$insertRight=!0,this.completions=new P(t.matches),this.getCompletionProvider().completions=this.completions,this.openPopup(this.editor,"",C)}var o=this.editor.getSession(),s=this.editor.getCursorPosition(),a=p.getCompletionPrefix(this.editor);this.base=o.doc.createAnchor(s.row,s.column-a.length),this.base.$insertRight=!0;var u={exactMatch:this.exactMatch,ignoreCaption:this.ignoreCaption};this.getCompletionProvider({prefix:a,pos:s}).provideCompletions(this.editor,u,function(v,x,T){var S=x.filtered,M=p.getCompletionPrefix(this.editor);if(this.$firstOpenTimer.cancel(),T){if(!S.length){var L=!this.autoShown&&this.emptyMessage;if(typeof L=="function"&&(L=this.emptyMessage(M)),L){var N=[{caption:L,value:""}];this.completions=new P(N),this.openPopup(this.editor,M,C),this.popup.renderer.setStyle("ace_loading",!1),this.popup.renderer.setStyle("ace_empty-message",!0);return}return this.detach()}if(S.length==1&&S[0].value==M&&!S[0].snippet)return this.detach();if(this.autoInsert&&!this.autoShown&&S.length==1)return this.insertMatch(S[0])}this.completions=!T&&this.showLoadingState?new P(R.completionsForLoading.concat(S),x.filterText):x,this.openPopup(this.editor,M,C),this.popup.renderer.setStyle("ace_empty-message",!1),this.popup.renderer.setStyle("ace_loading",!T)}.bind(this)),this.showLoadingState&&!this.autoShown&&(!this.popup||!this.popup.isOpen)&&this.$firstOpenTimer.delay(this.stickySelectionDelay/2)},R.prototype.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},R.prototype.updateDocTooltip=function(){var C=this.popup,t=this.completions&&this.completions.filtered,o=t&&(t[C.getHoveredRow()]||t[C.getRow()]),s=null;if(!o||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();for(var a=this.editor.completers.length,u=0;u<a;u++){var v=this.editor.completers[u];if(v.getDocTooltip&&o.completerId===v.id){s=v.getDocTooltip(o);break}}if(!s&&typeof o!="string"&&(s=o),typeof s=="string"&&(s={docText:s}),!s||!s.docHTML&&!s.docText)return this.hideDocTooltip();this.showDocTooltip(s)},R.prototype.showDocTooltip=function(C){this.tooltipNode||(this.tooltipNode=r.createElement("div"),this.tooltipNode.style.margin="0",this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.style.overscrollBehavior="contain",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this),this.tooltipNode.id="doc-tooltip",this.tooltipNode.setAttribute("role","tooltip"),this.tooltipNode.addEventListener("wheel",$));var t=this.editor.renderer.theme;this.tooltipNode.className="ace_tooltip ace_doc-tooltip "+(t.isDark?"ace_dark ":"")+(t.cssClass||"");var o=this.tooltipNode;C.docHTML?o.innerHTML=C.docHTML:C.docText&&(o.textContent=C.docText),o.parentNode||this.popup.container.appendChild(this.tooltipNode);var s=this.popup,a=s.container.getBoundingClientRect(),u=400,v=300,x=s.renderer.scrollBar.width||10,T=a.left,S=window.innerWidth-a.right-x,M=s.isTopdown?a.top:window.innerHeight-x-a.bottom,L=[Math.min(S/u,1),Math.min(T/u,1),Math.min(M/v*.9)],N=Math.max.apply(Math,L),I=o.style;I.display="block",N==L[0]?(I.left=a.right+1+"px",I.right="",I.maxWidth=u*N+"px",I.top=a.top+"px",I.bottom="",I.maxHeight=Math.min(window.innerHeight-x-a.top,v)+"px"):N==L[1]?(I.right=window.innerWidth-a.left+"px",I.left="",I.maxWidth=u*N+"px",I.top=a.top+"px",I.bottom="",I.maxHeight=Math.min(window.innerHeight-x-a.top,v)+"px"):N==L[2]&&(I.left=window.innerWidth-a.left+"px",I.maxWidth=Math.min(u,window.innerWidth)+"px",s.isTopdown?(I.top=a.bottom+"px",I.left=a.left+"px",I.right="",I.bottom="",I.maxHeight=Math.min(window.innerHeight-x-a.bottom,v)+"px"):(I.top=s.container.offsetTop-o.offsetHeight+"px",I.left=a.left+"px",I.right="",I.bottom="",I.maxHeight=Math.min(s.container.offsetTop,v)+"px"))},R.prototype.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),!!this.tooltipNode){var C=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==C&&this.editor.focus(),this.tooltipNode=null,C.parentNode&&C.parentNode.removeChild(C)}},R.prototype.onTooltipClick=function(C){for(var t=C.target;t&&t!=this.tooltipNode;){if(t.nodeName=="A"&&t.href){t.rel="noreferrer",t.target="_blank";break}t=t.parentNode}},R.prototype.destroy=function(){if(this.detach(),this.popup){this.popup.destroy();var C=this.popup.container;C&&C.parentNode&&C.parentNode.removeChild(C)}this.editor&&this.editor.completer==this&&(this.editor.off("destroy",b),this.editor.completer=null),this.inlineRenderer=this.popup=this.editor=null},R.for=function(C){return C.completer instanceof R||(C.completer&&(C.completer.destroy(),C.completer=null),m.get("sharedPopups")?(R.$sharedInstance||(R.$sharedInstance=new R),C.completer=R.$sharedInstance):(C.completer=new R,C.once("destroy",b))),C.completer},R}();y.prototype.commands={Up:function(R){R.completer.goTo("up")},Down:function(R){R.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(R){R.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(R){R.completer.goTo("end")},Esc:function(R){R.completer.detach()},Return:function(R){return R.completer.insertMatch()},"Shift-Return":function(R){R.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(R){var C=R.completer.insertMatch();if(C||R.tabstopManager)return C;R.completer.goTo("down")},Backspace:function(R){R.execCommand("backspace");var C=p.getCompletionPrefix(R);!C&&R.completer&&R.completer.detach()},PageUp:function(R){R.completer.popup.gotoPageUp()},PageDown:function(R){R.completer.popup.gotoPageDown()}},y.startCommand={name:"startAutocomplete",exec:function(R,C){var t=y.for(R);t.autoInsert=!1,t.autoSelect=!0,t.autoShown=!1,t.showPopup(R,C),t.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var E=function(){function R(C){this.initialPosition=C,this.active=!0}return R.prototype.insertByIndex=function(C,t,o){return!this.completions||!this.completions.filtered?!1:this.insertMatch(C,this.completions.filtered[t],o)},R.prototype.insertMatch=function(C,t,o){if(!t)return!1;if(C.startOperation({command:{name:"insertMatch"}}),t.completer&&t.completer.insertMatch)t.completer.insertMatch(C,t);else{if(!this.completions)return!1;var s=this.completions.filterText.length,a=0;if(t.range&&t.range.start.row===t.range.end.row&&(s-=this.initialPosition.prefix.length,s+=this.initialPosition.pos.column-t.range.start.column,a+=t.range.end.column-this.initialPosition.pos.column),s||a){var u;C.selection.getAllRanges?u=C.selection.getAllRanges():u=[C.getSelectionRange()];for(var v=0,x;x=u[v];v++)x.start.column-=s,x.end.column+=a,C.session.remove(x)}t.snippet?g.insertSnippet(C,t.snippet):this.$insertString(C,t),t.completer&&t.completer.onInsert&&typeof t.completer.onInsert=="function"&&t.completer.onInsert(C,t),t.command&&t.command==="startAutocomplete"&&C.execCommand(t.command)}return C.endOperation(),!0},R.prototype.$insertString=function(C,t){var o=t.value||t;C.execCommand("insertstring",o)},R.prototype.gatherCompletions=function(C,t){var o=C.getSession(),s=C.getCursorPosition(),a=p.getCompletionPrefix(C),u=[];this.completers=C.completers;var v=C.completers.length;return C.completers.forEach(function(x,T){x.getCompletions(C,o,s,a,function(S,M){x.hideInlinePreview&&(M=M.map(function(L){return Object.assign(L,{hideInlinePreview:x.hideInlinePreview})})),!S&&M&&(u=u.concat(M)),t(null,{prefix:p.getCompletionPrefix(C),matches:u,finished:--v===0})})}),!0},R.prototype.provideCompletions=function(C,t,o){var s=function(x){var T=x.prefix,S=x.matches;this.completions=new P(S),t.exactMatch&&(this.completions.exactMatch=!0),t.ignoreCaption&&(this.completions.ignoreCaption=!0),this.completions.setFilter(T),(x.finished||this.completions.filtered.length)&&o(null,this.completions,x.finished)}.bind(this),a=!0,u=null;if(this.gatherCompletions(C,function(x,T){if(this.active){x&&(o(x,[],!0),this.detach());var S=T.prefix;if(S.indexOf(T.prefix)===0){if(a){u=T;return}s(T)}}}.bind(this)),a=!1,u){var v=u;u=null,s(v)}},R.prototype.detach=function(){this.active=!1,this.completers&&this.completers.forEach(function(C){typeof C.cancel=="function"&&C.cancel()})},R}(),P=function(){function R(C,t){this.all=C,this.filtered=C,this.filterText=t||"",this.exactMatch=!1,this.ignoreCaption=!1}return R.prototype.setFilter=function(C){if(C.length>this.filterText&&C.lastIndexOf(this.filterText,0)===0)var t=this.filtered;else var t=this.all;this.filterText=C,t=this.filterCompletions(t,this.filterText),t=t.sort(function(s,a){return a.exactMatch-s.exactMatch||a.$score-s.$score||(s.caption||s.value).localeCompare(a.caption||a.value)});var o=null;t=t.filter(function(s){var a=s.snippet||s.caption||s.value;return a===o?!1:(o=a,!0)}),this.filtered=t},R.prototype.filterCompletions=function(C,t){var o=[],s=t.toUpperCase(),a=t.toLowerCase();e:for(var u=0,v;v=C[u];u++){if(v.skipFilter){v.$score=v.score,o.push(v);continue}var x=!this.ignoreCaption&&v.caption||v.value||v.snippet;if(x){var T=-1,S=0,M=0,L,N;if(this.exactMatch){if(t!==x.substr(0,t.length))continue e}else{var I=x.toLowerCase().indexOf(a);if(I>-1)M=I;else for(var z=0;z<t.length;z++){var j=x.indexOf(a[z],T+1),U=x.indexOf(s[z],T+1);if(L=j>=0&&(U<0||j<U)?j:U,L<0)continue e;N=L-T-1,N>0&&(T===-1&&(M+=10),M+=N,S|=1<<z),T=L}}v.matchMask=S,v.exactMatch=M?0:1,v.$score=(v.score||0)-M,o.push(v)}}return o},R}();c.Autocomplete=y,c.CompletionProvider=E,c.FilteredList=P}),ace.define("ace/marker_group",["require","exports","module"],function(n,c,A){var e=function(){function l(h,d){d&&(this.markerType=d.markerType),this.markers=[],this.session=h,h.addDynamicMarker(this)}return l.prototype.getMarkerAtPosition=function(h){return this.markers.find(function(d){return d.range.contains(h.row,h.column)})},l.prototype.markersComparator=function(h,d){return h.range.start.row-d.range.start.row},l.prototype.setMarkers=function(h){this.markers=h.sort(this.markersComparator).slice(0,this.MAX_MARKERS),this.session._signal("changeBackMarker")},l.prototype.update=function(h,d,p,i){if(!(!this.markers||!this.markers.length))for(var r=i.firstRow,g=i.lastRow,m,_=0,$=0,b=0;b<this.markers.length;b++){var y=this.markers[b];if(!(y.range.end.row<r)&&!(y.range.start.row>g)&&(y.range.start.row===$?_++:($=y.range.start.row,_=0),!(_>200))){var E=y.range.clipRows(r,g);if(!(E.start.row===E.end.row&&E.start.column===E.end.column)){var P=E.toScreenRange(p);if(P.isEmpty()){m=p.getNextFoldLine(E.end.row,m),m&&m.end.row>E.end.row&&(r=m.end.row);continue}this.markerType==="fullLine"?d.drawFullLineMarker(h,P,y.className,i):P.isMultiLine()?this.markerType==="line"?d.drawMultiLineMarker(h,P,y.className,i):d.drawTextMarker(h,P,y.className,i):d.drawSingleLineMarker(h,P,y.className+" ace_br15",i)}}}},l}();e.prototype.MAX_MARKERS=1e4,c.MarkerGroup=e}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(n,c,A){function e(p,i){var r=p.getTextRange(h.fromPoints({row:0,column:0},i));return r.split(d).length-1}function l(p,i){var r=e(p,i),g=p.getValue().split(d),m=Object.create(null),_=g[r];return g.forEach(function($,b){if(!(!$||$===_)){var y=Math.abs(r-b),E=g.length-y;m[$]?m[$]=Math.max(E,m[$]):m[$]=E}}),m}var h=n("../range").Range,d=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;c.getCompletions=function(p,i,r,g,m){var _=l(i,r),$=Object.keys(_);m(null,$.map(function(b){return{caption:b,value:b,score:_[b],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/marker_group","ace/autocomplete/text_completer","ace/editor","ace/config"],function(n,c,A){var e=n("../snippets").snippetManager,l=n("../autocomplete").Autocomplete,h=n("../config"),d=n("../lib/lang"),p=n("../autocomplete/util"),i=n("../marker_group").MarkerGroup,r=n("../autocomplete/text_completer"),g={getCompletions:function(a,u,v,x,T){if(u.$mode.completer)return u.$mode.completer.getCompletions(a,u,v,x,T);var S=a.session.getState(v.row),M=u.$mode.getCompletions(S,u,v,x);M=M.map(function(L){return L.completerId=g.id,L}),T(null,M)},id:"keywordCompleter"},m=function(a){var u={};return a.replace(/\${(\d+)(:(.*?))?}/g,function(v,x,T,S){return u[x]=S||""}).replace(/\$(\d+?)/g,function(v,x){return u[x]})},_={getCompletions:function(a,u,v,x,T){var S=[],M=u.getTokenAt(v.row,v.column);M&&M.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?S.push("html-tag"):S=e.getActiveScopes(a);var L=e.snippetMap,N=[];S.forEach(function(I){for(var z=L[I]||[],j=z.length;j--;){var U=z[j],Z=U.name||U.tabTrigger;Z&&N.push({caption:Z,snippet:U.content,meta:U.tabTrigger&&!U.name?U.tabTrigger+"⇥ ":"snippet",completerId:_.id})}},this),T(null,N)},getDocTooltip:function(a){a.snippet&&!a.docHTML&&(a.docHTML=["<b>",d.escapeHTML(a.caption),"</b>","<hr></hr>",d.escapeHTML(m(a.snippet))].join(""))},id:"snippetCompleter"},$=[_,r,g];c.setCompleters=function(a){$.length=0,a&&$.push.apply($,a)},c.addCompleter=function(a){$.push(a)},c.textCompleter=r,c.keyWordCompleter=g,c.snippetCompleter=_;var b={name:"expandSnippet",exec:function(a){return e.expandWithTab(a)},bindKey:"Tab"},y=function(a,u){E(u.session.$mode)},E=function(a){typeof a=="string"&&(a=h.$modes[a]),a&&(e.files||(e.files={}),P(a.$id,a.snippetFileId),a.modes&&a.modes.forEach(E))},P=function(a,u){!u||!a||e.files[a]||(e.files[a]={},h.loadModule(u,function(v){v&&(e.files[a]=v,!v.snippets&&v.snippetText&&(v.snippets=e.parseSnippetFile(v.snippetText)),e.register(v.snippets||[],v.scope),v.includeScopes&&(e.snippetMap[v.scope].includeScopes=v.includeScopes,v.includeScopes.forEach(function(x){E("ace/mode/"+x)})))}))},R=function(a){var u=a.editor,v=u.completer&&u.completer.activated;if(a.command.name==="backspace")v&&!p.getCompletionPrefix(u)&&u.completer.detach();else if(a.command.name==="insertstring"&&!v){C=a;var x=a.editor.$liveAutocompletionDelay;x?t.delay(x):o(a)}},C,t=d.delayedCall(function(){o(C)},0),o=function(a){var u=a.editor,v=p.getCompletionPrefix(u),x=a.args,T=p.triggerAutocomplete(u,x);if(v&&v.length>=u.$liveAutocompletionThreshold||T){var S=l.for(u);S.autoShown=!0,S.showPopup(u)}},s=n("../editor").Editor;n("../config").defineOptions(s.prototype,"editor",{enableBasicAutocompletion:{set:function(a){a?(l.for(this),this.completers||(this.completers=Array.isArray(a)?a:$),this.commands.addCommand(l.startCommand)):this.commands.removeCommand(l.startCommand)},value:!1},enableLiveAutocompletion:{set:function(a){a?(this.completers||(this.completers=Array.isArray(a)?a:$),this.commands.on("afterExec",R)):this.commands.off("afterExec",R)},value:!1},liveAutocompletionDelay:{initialValue:0},liveAutocompletionThreshold:{initialValue:0},enableSnippets:{set:function(a){a?(this.commands.addCommand(b),this.on("changeMode",y),y(null,this)):(this.commands.removeCommand(b),this.off("changeMode",y))},value:!1}}),c.MarkerGroup=i}),function(){ace.require(["ace/ext/language_tools"],function(n){k&&(k.exports=n)})}()})(hi);var ui={exports:{}};(function(k,f){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(n,c,A){A.exports=`

/* ------------------------------------------------------------------------------------------
 * Editor Search Form
 * --------------------------------------------------------------------------------------- */
.ace_search {
    background-color: #ddd;
    color: #666;
    border: 1px solid #cbcbcb;
    border-top: 0 none;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px 0 4px;
    position: absolute;
    top: 0;
    z-index: 99;
    white-space: normal;
}
.ace_search.left {
    border-left: 0 none;
    border-radius: 0px 0px 5px 0px;
    left: 0;
}
.ace_search.right {
    border-radius: 0px 0px 0px 5px;
    border-right: 0 none;
    right: 0;
}

.ace_search_form, .ace_replace_form {
    margin: 0 20px 4px 0;
    overflow: hidden;
    line-height: 1.9;
}
.ace_replace_form {
    margin-right: 0;
}
.ace_search_form.ace_nomatch {
    outline: 1px solid red;
}

.ace_search_field {
    border-radius: 3px 0 0 3px;
    background-color: white;
    color: black;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
    outline: 0;
    padding: 0;
    font-size: inherit;
    margin: 0;
    line-height: inherit;
    padding: 0 6px;
    min-width: 17em;
    vertical-align: top;
    min-height: 1.8em;
    box-sizing: content-box;
}
.ace_searchbtn {
    border: 1px solid #cbcbcb;
    line-height: inherit;
    display: inline-block;
    padding: 0 6px;
    background: #fff;
    border-right: 0 none;
    border-left: 1px solid #dcdcdc;
    cursor: pointer;
    margin: 0;
    position: relative;
    color: #666;
}
.ace_searchbtn:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #cbcbcb;
}
.ace_searchbtn:disabled {
    background: none;
    cursor: default;
}
.ace_searchbtn:hover {
    background-color: #eef1f6;
}
.ace_searchbtn.prev, .ace_searchbtn.next {
     padding: 0px 0.7em
}
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {
     content: "";
     border: solid 2px #888;
     width: 0.5em;
     height: 0.5em;
     border-width:  2px 0 0 2px;
     display:inline-block;
     transform: rotate(-45deg);
}
.ace_searchbtn.next:after {
     border-width: 0 2px 2px 0 ;
}
.ace_searchbtn_close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;
    border-radius: 50%;
    border: 0 none;
    color: #656565;
    cursor: pointer;
    font: 16px/16px Arial;
    padding: 0;
    height: 14px;
    width: 14px;
    top: 9px;
    right: 7px;
    position: absolute;
}
.ace_searchbtn_close:hover {
    background-color: #656565;
    background-position: 50% 100%;
    color: white;
}

.ace_button {
    margin-left: 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    border: 1px solid rgba(100,100,100,0.23);
    padding: 1px;
    box-sizing:    border-box!important;
    color: black;
}

.ace_button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_button:active {
    background-color: #ddd;
}

.ace_button.checked {
    border-color: #3399ff;
    opacity:1;
}

.ace_search_options{
    margin-bottom: 3px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    clear: both;
}

.ace_search_counter {
    float: left;
    font-family: arial;
    padding: 0 8px;
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(n,c,A){var e=n("../lib/dom"),l=n("../lib/lang"),h=n("../lib/event"),d=n("./searchbox-css"),p=n("../keyboard/hash_handler").HashHandler,i=n("../lib/keys"),r=n("../config").nls,g=999;e.importCssString(d,"ace_searchbox",!1);var m=function(){function b(y,E,P){this.activeInput,this.element=e.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:r("search-box.find.placeholder","Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},r("search-box.find-all.text","All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:r("search-box.replace.placeholder","Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},r("search-box.replace-next.text","Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},r("search-box.replace-all.text","All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:r("search-box.toggle-replace.title","Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:r("search-box.toggle-regexp.title","RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:r("search-box.toggle-case.title","CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:r("search-box.toggle-whole-word.title","Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:r("search-box.toggle-in-selection.title","Search In Selection")},"S"]]]),this.setSession=this.setSession.bind(this),this.$onEditorInput=this.onEditorInput.bind(this),this.$init(),this.setEditor(y),e.importCssString(d,"ace_searchbox",y.container),h.addListener(this.element,"touchstart",function(R){R.stopPropagation()},y)}return b.prototype.setEditor=function(y){y.searchBox=this,y.renderer.scroller.appendChild(this.element),this.editor=y},b.prototype.setSession=function(y){this.searchRange=null,this.$syncOptions(!0)},b.prototype.onEditorInput=function(){this.find(!1,!1,!0)},b.prototype.$initElements=function(y){this.searchBox=y.querySelector(".ace_search_form"),this.replaceBox=y.querySelector(".ace_replace_form"),this.searchOption=y.querySelector("[action=searchInSelection]"),this.replaceOption=y.querySelector("[action=toggleReplace]"),this.regExpOption=y.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=y.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=y.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=y.querySelector(".ace_search_counter")},b.prototype.$init=function(){var y=this.element;this.$initElements(y);var E=this;h.addListener(y,"mousedown",function(P){setTimeout(function(){E.activeInput.focus()},0),h.stopPropagation(P)}),h.addListener(y,"click",function(P){var R=P.target||P.srcElement,C=R.getAttribute("action");C&&E[C]?E[C]():E.$searchBarKb.commands[C]&&E.$searchBarKb.commands[C].exec(E),h.stopPropagation(P)}),h.addCommandKeyListener(y,function(P,R,C){var t=i.keyCodeToString(C),o=E.$searchBarKb.findKeyCommand(R,t);o&&o.exec&&(o.exec(E),h.stopEvent(P))}),this.$onChange=l.delayedCall(function(){E.find(!1,!1)}),h.addListener(this.searchInput,"input",function(){E.$onChange.schedule(20)}),h.addListener(this.searchInput,"focus",function(){E.activeInput=E.searchInput,E.searchInput.value&&E.highlight()}),h.addListener(this.replaceInput,"focus",function(){E.activeInput=E.replaceInput,E.searchInput.value&&E.highlight()})},b.prototype.setSearchRange=function(y){this.searchRange=y,y?this.searchRangeMarker=this.editor.session.addMarker(y,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},b.prototype.$syncOptions=function(y){e.setCssClass(this.replaceOption,"checked",this.searchRange),e.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",e.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),e.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),e.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var E=this.editor.getReadOnly();this.replaceOption.style.display=E?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!E?"":"none",this.find(!1,!1,y)},b.prototype.highlight=function(y){this.editor.session.highlight(y||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},b.prototype.find=function(y,E,P){var R=this.editor.find(this.searchInput.value,{skipCurrent:y,backwards:E,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:P,range:this.searchRange}),C=!R&&this.searchInput.value;e.setCssClass(this.searchBox,"ace_nomatch",C),this.editor._emit("findSearchBox",{match:!C}),this.highlight(),this.updateCounter()},b.prototype.updateCounter=function(){var y=this.editor,E=y.$search.$options.re,P=E.unicode,R=0,C=0;if(E){var t=this.searchRange?y.session.getTextRange(this.searchRange):y.getValue();y.$search.$isMultilineSearch(y.getLastSearchOptions())&&(t=t.replace(/\r\n|\r|\n/g,`
`),y.session.doc.$autoNewLine=`
`);var o=y.session.doc.positionToIndex(y.selection.anchor);this.searchRange&&(o-=y.session.doc.positionToIndex(this.searchRange.start));for(var s=E.lastIndex=0,a;(a=E.exec(t))&&(R++,s=a.index,s<=o&&C++,!(R>g||!a[0]&&(E.lastIndex=s+=l.skipEmptyMatch(t,s,P),s>=t.length))););}this.searchCounter.textContent=r("search-box.search-counter","$0 of $1",[C,R>g?g+"+":R])},b.prototype.findNext=function(){this.find(!0,!1)},b.prototype.findPrev=function(){this.find(!0,!0)},b.prototype.findAll=function(){var y=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),E=!y&&this.searchInput.value;e.setCssClass(this.searchBox,"ace_nomatch",E),this.editor._emit("findSearchBox",{match:!E}),this.highlight(),this.hide()},b.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},b.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},b.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},b.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.editor.off("input",this.$onEditorInput),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},b.prototype.show=function(y,E){this.active=!0,this.editor.on("changeSession",this.setSession),this.editor.on("input",this.$onEditorInput),this.element.style.display="",this.replaceOption.checked=E,this.editor.$search.$options.regExp&&(y=l.escapeRegExp(y)),y&&(this.searchInput.value=y),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},b.prototype.isFocused=function(){var y=document.activeElement;return y==this.searchInput||y==this.replaceInput},b}(),_=new p;_.bindKeys({"Ctrl-f|Command-f":function(b){var y=b.isReplace=!b.isReplace;b.replaceBox.style.display=y?"":"none",b.replaceOption.checked=!1,b.$syncOptions(),b.searchInput.focus()},"Ctrl-H|Command-Option-F":function(b){b.editor.getReadOnly()||(b.replaceOption.checked=!0,b.$syncOptions(),b.replaceInput.focus())},"Ctrl-G|Command-G":function(b){b.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(b){b.findPrev()},esc:function(b){setTimeout(function(){b.hide()})},Return:function(b){b.activeInput==b.replaceInput&&b.replace(),b.findNext()},"Shift-Return":function(b){b.activeInput==b.replaceInput&&b.replace(),b.findPrev()},"Alt-Return":function(b){b.activeInput==b.replaceInput&&b.replaceAll(),b.findAll()},Tab:function(b){(b.activeInput==b.replaceInput?b.searchInput:b.replaceInput).focus()}}),_.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(b){b.regExpOption.checked=!b.regExpOption.checked,b.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(b){b.caseSensitiveOption.checked=!b.caseSensitiveOption.checked,b.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(b){b.wholeWordOption.checked=!b.wholeWordOption.checked,b.$syncOptions()}},{name:"toggleReplace",exec:function(b){b.replaceOption.checked=!b.replaceOption.checked,b.$syncOptions()}},{name:"searchInSelection",exec:function(b){b.searchOption.checked=!b.searchRange,b.setSearchRange(b.searchOption.checked&&b.editor.getSelectionRange()),b.$syncOptions()}}]);var $=new p([{bindKey:"Esc",name:"closeSearchBar",exec:function(b){b.searchBox.hide()}}]);m.prototype.$searchBarKb=_,m.prototype.$closeSearchBarKb=$,c.SearchBox=m,c.Search=function(b,y){var E=b.searchBox||new m(b);E.show(b.session.getTextRange(),y)}}),function(){ace.require(["ace/ext/searchbox"],function(n){k&&(k.exports=n)})}()})(ui);var De={},$t={},it={exports:{}};it.exports;(function(k,f){var n=200,c="__lodash_hash_undefined__",A=1,e=2,l=9007199254740991,h="[object Arguments]",d="[object Array]",p="[object AsyncFunction]",i="[object Boolean]",r="[object Date]",g="[object Error]",m="[object Function]",_="[object GeneratorFunction]",$="[object Map]",b="[object Number]",y="[object Null]",E="[object Object]",P="[object Promise]",R="[object Proxy]",C="[object RegExp]",t="[object Set]",o="[object String]",s="[object Symbol]",a="[object Undefined]",u="[object WeakMap]",v="[object ArrayBuffer]",x="[object DataView]",T="[object Float32Array]",S="[object Float64Array]",M="[object Int8Array]",L="[object Int16Array]",N="[object Int32Array]",I="[object Uint8Array]",z="[object Uint8ClampedArray]",j="[object Uint16Array]",U="[object Uint32Array]",Z=/[\\^$.*+?()[\]{}|]/g,re=/^\[object .+?Constructor\]$/,Q=/^(?:0|[1-9]\d*)$/,K={};K[T]=K[S]=K[M]=K[L]=K[N]=K[I]=K[z]=K[j]=K[U]=!0,K[h]=K[d]=K[v]=K[i]=K[x]=K[r]=K[g]=K[m]=K[$]=K[b]=K[E]=K[C]=K[t]=K[o]=K[u]=!1;var D=typeof ie=="object"&&ie&&ie.Object===Object&&ie,Y=typeof self=="object"&&self&&self.Object===Object&&self,X=D||Y||Function("return this")(),W=f&&!f.nodeType&&f,ue=W&&!0&&k&&!k.nodeType&&k,de=ue&&ue.exports===W,Ce=de&&D.process,Fe=function(){try{return Ce&&Ce.binding&&Ce.binding("util")}catch(w){}}(),Mt=Fe&&Fe.isTypedArray;function $n(w,O){for(var F=-1,B=w==null?0:w.length,ee=0,G=[];++F<B;){var ne=w[F];O(ne,F,w)&&(G[ee++]=ne)}return G}function Sn(w,O){for(var F=-1,B=O.length,ee=w.length;++F<B;)w[ee+F]=O[F];return w}function Cn(w,O){for(var F=-1,B=w==null?0:w.length;++F<B;)if(O(w[F],F,w))return!0;return!1}function Tn(w,O){for(var F=-1,B=Array(w);++F<w;)B[F]=O(F);return B}function En(w){return function(O){return w(O)}}function An(w,O){return w.has(O)}function Mn(w,O){return w==null?void 0:w[O]}function Rn(w){var O=-1,F=Array(w.size);return w.forEach(function(B,ee){F[++O]=[ee,B]}),F}function On(w,O){return function(F){return w(O(F))}}function Ln(w){var O=-1,F=Array(w.size);return w.forEach(function(B){F[++O]=B}),F}var In=Array.prototype,Pn=Function.prototype,Ke=Object.prototype,lt=X["__core-js_shared__"],Rt=Pn.toString,ve=Ke.hasOwnProperty,Ot=function(){var w=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||"");return w?"Symbol(src)_1."+w:""}(),Lt=Ke.toString,Fn=RegExp("^"+Rt.call(ve).replace(Z,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),It=de?X.Buffer:void 0,Xe=X.Symbol,Pt=X.Uint8Array,Ft=Ke.propertyIsEnumerable,Nn=In.splice,Te=Xe?Xe.toStringTag:void 0,Nt=Object.getOwnPropertySymbols,zn=It?It.isBuffer:void 0,Dn=On(Object.keys,Object),ct=Ne(X,"DataView"),je=Ne(X,"Map"),pt=Ne(X,"Promise"),ht=Ne(X,"Set"),ut=Ne(X,"WeakMap"),He=Ne(Object,"create"),Bn=Me(ct),jn=Me(je),Hn=Me(pt),qn=Me(ht),Un=Me(ut),zt=Xe?Xe.prototype:void 0,dt=zt?zt.valueOf:void 0;function Ee(w){var O=-1,F=w==null?0:w.length;for(this.clear();++O<F;){var B=w[O];this.set(B[0],B[1])}}function Wn(){this.__data__=He?He(null):{},this.size=0}function Vn(w){var O=this.has(w)&&delete this.__data__[w];return this.size-=O?1:0,O}function Gn(w){var O=this.__data__;if(He){var F=O[w];return F===c?void 0:F}return ve.call(O,w)?O[w]:void 0}function Kn(w){var O=this.__data__;return He?O[w]!==void 0:ve.call(O,w)}function Xn(w,O){var F=this.__data__;return this.size+=this.has(w)?0:1,F[w]=He&&O===void 0?c:O,this}Ee.prototype.clear=Wn,Ee.prototype.delete=Vn,Ee.prototype.get=Gn,Ee.prototype.has=Kn,Ee.prototype.set=Xn;function xe(w){var O=-1,F=w==null?0:w.length;for(this.clear();++O<F;){var B=w[O];this.set(B[0],B[1])}}function Yn(){this.__data__=[],this.size=0}function Jn(w){var O=this.__data__,F=Je(O,w);if(F<0)return!1;var B=O.length-1;return F==B?O.pop():Nn.call(O,F,1),--this.size,!0}function Zn(w){var O=this.__data__,F=Je(O,w);return F<0?void 0:O[F][1]}function Qn(w){return Je(this.__data__,w)>-1}function er(w,O){var F=this.__data__,B=Je(F,w);return B<0?(++this.size,F.push([w,O])):F[B][1]=O,this}xe.prototype.clear=Yn,xe.prototype.delete=Jn,xe.prototype.get=Zn,xe.prototype.has=Qn,xe.prototype.set=er;function Ae(w){var O=-1,F=w==null?0:w.length;for(this.clear();++O<F;){var B=w[O];this.set(B[0],B[1])}}function tr(){this.size=0,this.__data__={hash:new Ee,map:new(je||xe),string:new Ee}}function nr(w){var O=Ze(this,w).delete(w);return this.size-=O?1:0,O}function rr(w){return Ze(this,w).get(w)}function ir(w){return Ze(this,w).has(w)}function or(w,O){var F=Ze(this,w),B=F.size;return F.set(w,O),this.size+=F.size==B?0:1,this}Ae.prototype.clear=tr,Ae.prototype.delete=nr,Ae.prototype.get=rr,Ae.prototype.has=ir,Ae.prototype.set=or;function Ye(w){var O=-1,F=w==null?0:w.length;for(this.__data__=new Ae;++O<F;)this.add(w[O])}function sr(w){return this.__data__.set(w,c),this}function ar(w){return this.__data__.has(w)}Ye.prototype.add=Ye.prototype.push=sr,Ye.prototype.has=ar;function ke(w){var O=this.__data__=new xe(w);this.size=O.size}function lr(){this.__data__=new xe,this.size=0}function cr(w){var O=this.__data__,F=O.delete(w);return this.size=O.size,F}function pr(w){return this.__data__.get(w)}function hr(w){return this.__data__.has(w)}function ur(w,O){var F=this.__data__;if(F instanceof xe){var B=F.__data__;if(!je||B.length<n-1)return B.push([w,O]),this.size=++F.size,this;F=this.__data__=new Ae(B)}return F.set(w,O),this.size=F.size,this}ke.prototype.clear=lr,ke.prototype.delete=cr,ke.prototype.get=pr,ke.prototype.has=hr,ke.prototype.set=ur;function dr(w,O){var F=Qe(w),B=!F&&Er(w),ee=!F&&!B&&gt(w),G=!F&&!B&&!ee&&Gt(w),ne=F||B||ee||G,oe=ne?Tn(w.length,String):[],se=oe.length;for(var te in w)(O||ve.call(w,te))&&!(ne&&(te=="length"||ee&&(te=="offset"||te=="parent")||G&&(te=="buffer"||te=="byteLength"||te=="byteOffset")||kr(te,se)))&&oe.push(te);return oe}function Je(w,O){for(var F=w.length;F--;)if(qt(w[F][0],O))return F;return-1}function gr(w,O,F){var B=O(w);return Qe(w)?B:Sn(B,F(w))}function qe(w){return w==null?w===void 0?a:y:Te&&Te in Object(w)?wr(w):Tr(w)}function Dt(w){return Ue(w)&&qe(w)==h}function Bt(w,O,F,B,ee){return w===O?!0:w==null||O==null||!Ue(w)&&!Ue(O)?w!==w&&O!==O:fr(w,O,F,B,Bt,ee)}function fr(w,O,F,B,ee,G){var ne=Qe(w),oe=Qe(O),se=ne?d:$e(w),te=oe?d:$e(O);se=se==h?E:se,te=te==h?E:te;var pe=se==E,me=te==E,ae=se==te;if(ae&&gt(w)){if(!gt(O))return!1;ne=!0,pe=!1}if(ae&&!pe)return G||(G=new ke),ne||Gt(w)?jt(w,O,F,B,ee,G):yr(w,O,se,F,B,ee,G);if(!(F&A)){var ge=pe&&ve.call(w,"__wrapped__"),fe=me&&ve.call(O,"__wrapped__");if(ge||fe){var Se=ge?w.value():w,we=fe?O.value():O;return G||(G=new ke),ee(Se,we,F,B,G)}}return ae?(G||(G=new ke),xr(w,O,F,B,ee,G)):!1}function mr(w){if(!Vt(w)||Sr(w))return!1;var O=Ut(w)?Fn:re;return O.test(Me(w))}function br(w){return Ue(w)&&Wt(w.length)&&!!K[qe(w)]}function vr(w){if(!Cr(w))return Dn(w);var O=[];for(var F in Object(w))ve.call(w,F)&&F!="constructor"&&O.push(F);return O}function jt(w,O,F,B,ee,G){var ne=F&A,oe=w.length,se=O.length;if(oe!=se&&!(ne&&se>oe))return!1;var te=G.get(w);if(te&&G.get(O))return te==O;var pe=-1,me=!0,ae=F&e?new Ye:void 0;for(G.set(w,O),G.set(O,w);++pe<oe;){var ge=w[pe],fe=O[pe];if(B)var Se=ne?B(fe,ge,pe,O,w,G):B(ge,fe,pe,w,O,G);if(Se!==void 0){if(Se)continue;me=!1;break}if(ae){if(!Cn(O,function(we,Re){if(!An(ae,Re)&&(ge===we||ee(ge,we,F,B,G)))return ae.push(Re)})){me=!1;break}}else if(!(ge===fe||ee(ge,fe,F,B,G))){me=!1;break}}return G.delete(w),G.delete(O),me}function yr(w,O,F,B,ee,G,ne){switch(F){case x:if(w.byteLength!=O.byteLength||w.byteOffset!=O.byteOffset)return!1;w=w.buffer,O=O.buffer;case v:return!(w.byteLength!=O.byteLength||!G(new Pt(w),new Pt(O)));case i:case r:case b:return qt(+w,+O);case g:return w.name==O.name&&w.message==O.message;case C:case o:return w==O+"";case $:var oe=Rn;case t:var se=B&A;if(oe||(oe=Ln),w.size!=O.size&&!se)return!1;var te=ne.get(w);if(te)return te==O;B|=e,ne.set(w,O);var pe=jt(oe(w),oe(O),B,ee,G,ne);return ne.delete(w),pe;case s:if(dt)return dt.call(w)==dt.call(O)}return!1}function xr(w,O,F,B,ee,G){var ne=F&A,oe=Ht(w),se=oe.length,te=Ht(O),pe=te.length;if(se!=pe&&!ne)return!1;for(var me=se;me--;){var ae=oe[me];if(!(ne?ae in O:ve.call(O,ae)))return!1}var ge=G.get(w);if(ge&&G.get(O))return ge==O;var fe=!0;G.set(w,O),G.set(O,w);for(var Se=ne;++me<se;){ae=oe[me];var we=w[ae],Re=O[ae];if(B)var Kt=ne?B(Re,we,ae,O,w,G):B(we,Re,ae,w,O,G);if(!(Kt===void 0?we===Re||ee(we,Re,F,B,G):Kt)){fe=!1;break}Se||(Se=ae=="constructor")}if(fe&&!Se){var et=w.constructor,tt=O.constructor;et!=tt&&"constructor"in w&&"constructor"in O&&!(typeof et=="function"&&et instanceof et&&typeof tt=="function"&&tt instanceof tt)&&(fe=!1)}return G.delete(w),G.delete(O),fe}function Ht(w){return gr(w,Rr,_r)}function Ze(w,O){var F=w.__data__;return $r(O)?F[typeof O=="string"?"string":"hash"]:F.map}function Ne(w,O){var F=Mn(w,O);return mr(F)?F:void 0}function wr(w){var O=ve.call(w,Te),F=w[Te];try{w[Te]=void 0;var B=!0}catch(G){}var ee=Lt.call(w);return B&&(O?w[Te]=F:delete w[Te]),ee}var _r=Nt?function(w){return w==null?[]:(w=Object(w),$n(Nt(w),function(O){return Ft.call(w,O)}))}:Or,$e=qe;(ct&&$e(new ct(new ArrayBuffer(1)))!=x||je&&$e(new je)!=$||pt&&$e(pt.resolve())!=P||ht&&$e(new ht)!=t||ut&&$e(new ut)!=u)&&($e=function(w){var O=qe(w),F=O==E?w.constructor:void 0,B=F?Me(F):"";if(B)switch(B){case Bn:return x;case jn:return $;case Hn:return P;case qn:return t;case Un:return u}return O});function kr(w,O){return O=O==null?l:O,!!O&&(typeof w=="number"||Q.test(w))&&w>-1&&w%1==0&&w<O}function $r(w){var O=typeof w;return O=="string"||O=="number"||O=="symbol"||O=="boolean"?w!=="__proto__":w===null}function Sr(w){return!!Ot&&Ot in w}function Cr(w){var O=w&&w.constructor,F=typeof O=="function"&&O.prototype||Ke;return w===F}function Tr(w){return Lt.call(w)}function Me(w){if(w!=null){try{return Rt.call(w)}catch(O){}try{return w+""}catch(O){}}return""}function qt(w,O){return w===O||w!==w&&O!==O}var Er=Dt(function(){return arguments}())?Dt:function(w){return Ue(w)&&ve.call(w,"callee")&&!Ft.call(w,"callee")},Qe=Array.isArray;function Ar(w){return w!=null&&Wt(w.length)&&!Ut(w)}var gt=zn||Lr;function Mr(w,O){return Bt(w,O)}function Ut(w){if(!Vt(w))return!1;var O=qe(w);return O==m||O==_||O==p||O==R}function Wt(w){return typeof w=="number"&&w>-1&&w%1==0&&w<=l}function Vt(w){var O=typeof w;return w!=null&&(O=="object"||O=="function")}function Ue(w){return w!=null&&typeof w=="object"}var Gt=Mt?En(Mt):br;function Rr(w){return Ar(w)?dr(w):vr(w)}function Or(){return[]}function Lr(){return!1}k.exports=Mr})(it,it.exports);var un=it.exports,be={};Object.defineProperty(be,"__esModule",{value:!0});be.getAceInstance=be.debounce=be.editorEvents=be.editorOptions=void 0;var di=["minLines","maxLines","readOnly","highlightActiveLine","tabSize","enableBasicAutocompletion","enableLiveAutocompletion","enableSnippets"];be.editorOptions=di;var gi=["onChange","onFocus","onInput","onBlur","onCopy","onPaste","onSelectionChange","onCursorChange","onScroll","handleOptions","updateRef"];be.editorEvents=gi;var fi=function(){var k;return typeof window=="undefined"?(ie.window={},k=rt,delete ie.window):window.ace?(k=window.ace,k.acequire=window.ace.require||window.ace.acequire):k=rt,k};be.getAceInstance=fi;var mi=function(k,f){var n=null;return function(){var c=this,A=arguments;clearTimeout(n),n=setTimeout(function(){k.apply(c,A)},f)}};be.debounce=mi;var bi=ie&&ie.__extends||function(){var k=function(f,n){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,A){c.__proto__=A}||function(c,A){for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&(c[e]=A[e])},k(f,n)};return function(f,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");k(f,n);function c(){this.constructor=f}f.prototype=n===null?Object.create(n):(c.prototype=n.prototype,new c)}}(),wt=ie&&ie.__assign||function(){return wt=Object.assign||function(k){for(var f,n=1,c=arguments.length;n<c;n++){f=arguments[n];for(var A in f)Object.prototype.hasOwnProperty.call(f,A)&&(k[A]=f[A])}return k},wt.apply(this,arguments)};Object.defineProperty($t,"__esModule",{value:!0});var vi=rt,H=kt,en=he,nt=un,ze=be,tn=(0,ze.getAceInstance)(),yi=function(k){bi(f,k);function f(n){var c=k.call(this,n)||this;return ze.editorEvents.forEach(function(A){c[A]=c[A].bind(c)}),c.debounce=ze.debounce,c}return f.prototype.isInShadow=function(n){for(var c=n&&n.parentNode;c;){if(c.toString()==="[object ShadowRoot]")return!0;c=c.parentNode}return!1},f.prototype.componentDidMount=function(){var n=this,c=this.props,A=c.className,e=c.onBeforeLoad,l=c.onValidate,h=c.mode,d=c.focus,p=c.theme,i=c.fontSize,r=c.value,g=c.defaultValue,m=c.showGutter,_=c.wrapEnabled,$=c.showPrintMargin,b=c.scrollMargin,y=b===void 0?[0,0,0,0]:b,E=c.keyboardHandler,P=c.onLoad,R=c.commands,C=c.annotations,t=c.markers,o=c.placeholder;this.editor=tn.edit(this.refEditor),e&&e(tn);for(var s=Object.keys(this.props.editorProps),a=0;a<s.length;a++)this.editor[s[a]]=this.props.editorProps[s[a]];this.props.debounceChangePeriod&&(this.onChange=this.debounce(this.onChange,this.props.debounceChangePeriod)),this.editor.renderer.setScrollMargin(y[0],y[1],y[2],y[3]),this.isInShadow(this.refEditor)&&this.editor.renderer.attachToShadowRoot(),this.editor.getSession().setMode(typeof h=="string"?"ace/mode/".concat(h):h),p&&p!==""&&this.editor.setTheme("ace/theme/".concat(p)),this.editor.setFontSize(typeof i=="number"?"".concat(i,"px"):i),this.editor.getSession().setValue(g||r||""),this.props.navigateToFileEnd&&this.editor.navigateFileEnd(),this.editor.renderer.setShowGutter(m),this.editor.getSession().setUseWrapMode(_),this.editor.setShowPrintMargin($),this.editor.on("focus",this.onFocus),this.editor.on("blur",this.onBlur),this.editor.on("copy",this.onCopy),this.editor.on("paste",this.onPaste),this.editor.on("change",this.onChange),this.editor.on("input",this.onInput),o&&this.updatePlaceholder(),this.editor.getSession().selection.on("changeSelection",this.onSelectionChange),this.editor.getSession().selection.on("changeCursor",this.onCursorChange),l&&this.editor.getSession().on("changeAnnotation",function(){var v=n.editor.getSession().getAnnotations();n.props.onValidate(v)}),this.editor.session.on("changeScrollTop",this.onScroll),this.editor.getSession().setAnnotations(C||[]),t&&t.length>0&&this.handleMarkers(t);var u=this.editor.$options;ze.editorOptions.forEach(function(v){u.hasOwnProperty(v)?n.editor.setOption(v,n.props[v]):n.props[v]}),this.handleOptions(this.props),Array.isArray(R)&&R.forEach(function(v){typeof v.exec=="string"?n.editor.commands.bindKey(v.bindKey,v.exec):n.editor.commands.addCommand(v)}),E&&this.editor.setKeyboardHandler("ace/keyboard/"+E),A&&(this.refEditor.className+=" "+A),P&&P(this.editor),this.editor.resize(),d&&this.editor.focus()},f.prototype.componentDidUpdate=function(n){for(var c=n,A=this.props,e=0;e<ze.editorOptions.length;e++){var l=ze.editorOptions[e];A[l]!==c[l]&&this.editor.setOption(l,A[l])}if(A.className!==c.className){var h=this.refEditor.className,d=h.trim().split(" "),p=c.className.trim().split(" ");p.forEach(function(g){var m=d.indexOf(g);d.splice(m,1)}),this.refEditor.className=" "+A.className+" "+d.join(" ")}var i=this.editor&&A.value!=null&&this.editor.getValue()!==A.value;if(i){this.silent=!0;var r=this.editor.session.selection.toJSON();this.editor.setValue(A.value,A.cursorStart),this.editor.session.selection.fromJSON(r),this.silent=!1}A.placeholder!==c.placeholder&&this.updatePlaceholder(),A.mode!==c.mode&&this.editor.getSession().setMode(typeof A.mode=="string"?"ace/mode/".concat(A.mode):A.mode),A.theme!==c.theme&&this.editor.setTheme("ace/theme/"+A.theme),A.keyboardHandler!==c.keyboardHandler&&(A.keyboardHandler?this.editor.setKeyboardHandler("ace/keyboard/"+A.keyboardHandler):this.editor.setKeyboardHandler(null)),A.fontSize!==c.fontSize&&this.editor.setFontSize(typeof A.fontSize=="number"?"".concat(A.fontSize,"px"):A.fontSize),A.wrapEnabled!==c.wrapEnabled&&this.editor.getSession().setUseWrapMode(A.wrapEnabled),A.showPrintMargin!==c.showPrintMargin&&this.editor.setShowPrintMargin(A.showPrintMargin),A.showGutter!==c.showGutter&&this.editor.renderer.setShowGutter(A.showGutter),nt(A.setOptions,c.setOptions)||this.handleOptions(A),(i||!nt(A.annotations,c.annotations))&&this.editor.getSession().setAnnotations(A.annotations||[]),!nt(A.markers,c.markers)&&Array.isArray(A.markers)&&this.handleMarkers(A.markers),nt(A.scrollMargin,c.scrollMargin)||this.handleScrollMargins(A.scrollMargin),(n.height!==this.props.height||n.width!==this.props.width)&&this.editor.resize(),this.props.focus&&!n.focus&&this.editor.focus()},f.prototype.handleScrollMargins=function(n){n===void 0&&(n=[0,0,0,0]),this.editor.renderer.setScrollMargin(n[0],n[1],n[2],n[3])},f.prototype.componentWillUnmount=function(){this.editor&&(this.editor.destroy(),this.editor=null)},f.prototype.onChange=function(n){if(this.props.onChange&&!this.silent){var c=this.editor.getValue();this.props.onChange(c,n)}},f.prototype.onSelectionChange=function(n){if(this.props.onSelectionChange){var c=this.editor.getSelection();this.props.onSelectionChange(c,n)}},f.prototype.onCursorChange=function(n){if(this.props.onCursorChange){var c=this.editor.getSelection();this.props.onCursorChange(c,n)}},f.prototype.onInput=function(n){this.props.onInput&&this.props.onInput(n),this.props.placeholder&&this.updatePlaceholder()},f.prototype.onFocus=function(n){this.props.onFocus&&this.props.onFocus(n,this.editor)},f.prototype.onBlur=function(n){this.props.onBlur&&this.props.onBlur(n,this.editor)},f.prototype.onCopy=function(n){var c=n.text;this.props.onCopy&&this.props.onCopy(c)},f.prototype.onPaste=function(n){var c=n.text;this.props.onPaste&&this.props.onPaste(c)},f.prototype.onScroll=function(){this.props.onScroll&&this.props.onScroll(this.editor)},f.prototype.handleOptions=function(n){for(var c=Object.keys(n.setOptions),A=0;A<c.length;A++)this.editor.setOption(c[A],n.setOptions[c[A]])},f.prototype.handleMarkers=function(n){var c=this,A=this.editor.getSession().getMarkers(!0);for(var e in A)A.hasOwnProperty(e)&&this.editor.getSession().removeMarker(A[e].id);A=this.editor.getSession().getMarkers(!1);for(var e in A)A.hasOwnProperty(e)&&A[e].clazz!=="ace_active-line"&&A[e].clazz!=="ace_selected-word"&&this.editor.getSession().removeMarker(A[e].id);n.forEach(function(l){var h=l.startRow,d=l.startCol,p=l.endRow,i=l.endCol,r=l.className,g=l.type,m=l.inFront,_=m===void 0?!1:m,$=new vi.Range(h,d,p,i);c.editor.getSession().addMarker($,r,g,_)})},f.prototype.updatePlaceholder=function(){var n=this.editor,c=this.props.placeholder,A=!n.session.getValue().length,e=n.renderer.placeholderNode;!A&&e?(n.renderer.scroller.removeChild(n.renderer.placeholderNode),n.renderer.placeholderNode=null):A&&!e?(e=n.renderer.placeholderNode=document.createElement("div"),e.textContent=c||"",e.className="ace_comment ace_placeholder",e.style.padding="0 9px",e.style.position="absolute",e.style.zIndex="3",n.renderer.scroller.appendChild(e)):A&&e&&(e.textContent=c)},f.prototype.updateRef=function(n){this.refEditor=n},f.prototype.render=function(){var n=this.props,c=n.name,A=n.width,e=n.height,l=n.style,h=wt({width:A,height:e},l);return en.createElement("div",{ref:this.updateRef,id:c,style:h})},f.propTypes={mode:H.oneOfType([H.string,H.object]),focus:H.bool,theme:H.string,name:H.string,className:H.string,height:H.string,width:H.string,fontSize:H.oneOfType([H.number,H.string]),showGutter:H.bool,onChange:H.func,onCopy:H.func,onPaste:H.func,onFocus:H.func,onInput:H.func,onBlur:H.func,onScroll:H.func,value:H.string,defaultValue:H.string,onLoad:H.func,onSelectionChange:H.func,onCursorChange:H.func,onBeforeLoad:H.func,onValidate:H.func,minLines:H.number,maxLines:H.number,readOnly:H.bool,highlightActiveLine:H.bool,tabSize:H.number,showPrintMargin:H.bool,cursorStart:H.number,debounceChangePeriod:H.number,editorProps:H.object,setOptions:H.object,style:H.object,scrollMargin:H.array,annotations:H.array,markers:H.array,keyboardHandler:H.string,wrapEnabled:H.bool,enableSnippets:H.bool,enableBasicAutocompletion:H.oneOfType([H.bool,H.array]),enableLiveAutocompletion:H.oneOfType([H.bool,H.array]),navigateToFileEnd:H.bool,commands:H.array,placeholder:H.string},f.defaultProps={name:"ace-editor",focus:!1,mode:"",theme:"",height:"500px",width:"500px",fontSize:12,enableSnippets:!1,showGutter:!0,onChange:null,onPaste:null,onLoad:null,onScroll:null,minLines:null,maxLines:null,readOnly:!1,highlightActiveLine:!0,showPrintMargin:!0,tabSize:4,cursorStart:1,editorProps:{},style:{},scrollMargin:[0,0,0,0],setOptions:{},wrapEnabled:!1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,placeholder:null,navigateToFileEnd:!0},f}(en.Component);$t.default=yi;var St={},ot={},dn={exports:{}};(function(k,f){ace.define("ace/split",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/editor","ace/virtual_renderer","ace/edit_session"],function(n,c,A){var e=n("./lib/oop");n("./lib/lang");var l=n("./lib/event_emitter").EventEmitter,h=n("./editor").Editor,d=n("./virtual_renderer").VirtualRenderer,p=n("./edit_session").EditSession,i;i=function(r,g,m){this.BELOW=1,this.BESIDE=0,this.$container=r,this.$theme=g,this.$splits=0,this.$editorCSS="",this.$editors=[],this.$orientation=this.BESIDE,this.setSplits(m||1),this.$cEditor=this.$editors[0],this.on("focus",function(_){this.$cEditor=_}.bind(this))},function(){e.implement(this,l),this.$createEditor=function(){var r=document.createElement("div");r.className=this.$editorCSS,r.style.cssText="position: absolute; top:0px; bottom:0px",this.$container.appendChild(r);var g=new h(new d(r,this.$theme));return g.on("focus",function(){this._emit("focus",g)}.bind(this)),this.$editors.push(g),g.setFontSize(this.$fontSize),g},this.setSplits=function(r){var g;if(r<1)throw"The number of splits have to be > 0!";if(r!=this.$splits){if(r>this.$splits){for(;this.$splits<this.$editors.length&&this.$splits<r;)g=this.$editors[this.$splits],this.$container.appendChild(g.container),g.setFontSize(this.$fontSize),this.$splits++;for(;this.$splits<r;)this.$createEditor(),this.$splits++}else for(;this.$splits>r;)g=this.$editors[this.$splits-1],this.$container.removeChild(g.container),this.$splits--;this.resize()}},this.getSplits=function(){return this.$splits},this.getEditor=function(r){return this.$editors[r]},this.getCurrentEditor=function(){return this.$cEditor},this.focus=function(){this.$cEditor.focus()},this.blur=function(){this.$cEditor.blur()},this.setTheme=function(r){this.$editors.forEach(function(g){g.setTheme(r)})},this.setKeyboardHandler=function(r){this.$editors.forEach(function(g){g.setKeyboardHandler(r)})},this.forEach=function(r,g){this.$editors.forEach(r,g)},this.$fontSize="",this.setFontSize=function(r){this.$fontSize=r,this.forEach(function(g){g.setFontSize(r)})},this.$cloneSession=function(r){var g=new p(r.getDocument(),r.getMode()),m=r.getUndoManager();return g.setUndoManager(m),g.setTabSize(r.getTabSize()),g.setUseSoftTabs(r.getUseSoftTabs()),g.setOverwrite(r.getOverwrite()),g.setBreakpoints(r.getBreakpoints()),g.setUseWrapMode(r.getUseWrapMode()),g.setUseWorker(r.getUseWorker()),g.setWrapLimitRange(r.$wrapLimitRange.min,r.$wrapLimitRange.max),g.$foldData=r.$cloneFoldData(),g},this.setSession=function(r,g){var m;g==null?m=this.$cEditor:m=this.$editors[g];var _=this.$editors.some(function($){return $.session===r});return _&&(r=this.$cloneSession(r)),m.setSession(r),r},this.getOrientation=function(){return this.$orientation},this.setOrientation=function(r){this.$orientation!=r&&(this.$orientation=r,this.resize())},this.resize=function(){var r=this.$container.clientWidth,g=this.$container.clientHeight,m;if(this.$orientation==this.BESIDE)for(var _=r/this.$splits,$=0;$<this.$splits;$++)m=this.$editors[$],m.container.style.width=_+"px",m.container.style.top="0px",m.container.style.left=$*_+"px",m.container.style.height=g+"px",m.resize();else for(var b=g/this.$splits,$=0;$<this.$splits;$++)m=this.$editors[$],m.container.style.width=r+"px",m.container.style.top=$*b+"px",m.container.style.left="0px",m.container.style.height=b+"px",m.resize()}}.call(i.prototype),c.Split=i}),ace.define("ace/ext/split",["require","exports","module","ace/split"],function(n,c,A){A.exports=n("../split")}),function(){ace.require(["ace/ext/split"],function(n){k&&(k.exports=n)})}()})(dn);var xi=dn.exports,wi="Expected a function",gn="__lodash_hash_undefined__",fn=1/0,_i="[object Function]",ki="[object GeneratorFunction]",$i="[object Symbol]",Si=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ci=/^\w*$/,Ti=/^\./,Ei=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ai=/[\\^$.*+?()[\]{}|]/g,Mi=/\\(\\)?/g,Ri=/^\[object .+?Constructor\]$/,Oi=typeof ie=="object"&&ie&&ie.Object===Object&&ie,Li=typeof self=="object"&&self&&self.Object===Object&&self,Ct=Oi||Li||Function("return this")();function Ii(k,f){return k==null?void 0:k[f]}function Pi(k){var f=!1;if(k!=null&&typeof k.toString!="function")try{f=!!(k+"")}catch(n){}return f}var Fi=Array.prototype,Ni=Function.prototype,mn=Object.prototype,vt=Ct["__core-js_shared__"],nn=function(){var k=/[^.]+$/.exec(vt&&vt.keys&&vt.keys.IE_PROTO||"");return k?"Symbol(src)_1."+k:""}(),bn=Ni.toString,Tt=mn.hasOwnProperty,vn=mn.toString,zi=RegExp("^"+bn.call(Tt).replace(Ai,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rn=Ct.Symbol,Di=Fi.splice,Bi=yn(Ct,"Map"),Ge=yn(Object,"create"),on=rn?rn.prototype:void 0,sn=on?on.toString:void 0;function Ie(k){var f=-1,n=k?k.length:0;for(this.clear();++f<n;){var c=k[f];this.set(c[0],c[1])}}function ji(){this.__data__=Ge?Ge(null):{}}function Hi(k){return this.has(k)&&delete this.__data__[k]}function qi(k){var f=this.__data__;if(Ge){var n=f[k];return n===gn?void 0:n}return Tt.call(f,k)?f[k]:void 0}function Ui(k){var f=this.__data__;return Ge?f[k]!==void 0:Tt.call(f,k)}function Wi(k,f){var n=this.__data__;return n[k]=Ge&&f===void 0?gn:f,this}Ie.prototype.clear=ji;Ie.prototype.delete=Hi;Ie.prototype.get=qi;Ie.prototype.has=Ui;Ie.prototype.set=Wi;function Be(k){var f=-1,n=k?k.length:0;for(this.clear();++f<n;){var c=k[f];this.set(c[0],c[1])}}function Vi(){this.__data__=[]}function Gi(k){var f=this.__data__,n=st(f,k);if(n<0)return!1;var c=f.length-1;return n==c?f.pop():Di.call(f,n,1),!0}function Ki(k){var f=this.__data__,n=st(f,k);return n<0?void 0:f[n][1]}function Xi(k){return st(this.__data__,k)>-1}function Yi(k,f){var n=this.__data__,c=st(n,k);return c<0?n.push([k,f]):n[c][1]=f,this}Be.prototype.clear=Vi;Be.prototype.delete=Gi;Be.prototype.get=Ki;Be.prototype.has=Xi;Be.prototype.set=Yi;function Pe(k){var f=-1,n=k?k.length:0;for(this.clear();++f<n;){var c=k[f];this.set(c[0],c[1])}}function Ji(){this.__data__={hash:new Ie,map:new(Bi||Be),string:new Ie}}function Zi(k){return at(this,k).delete(k)}function Qi(k){return at(this,k).get(k)}function eo(k){return at(this,k).has(k)}function to(k,f){return at(this,k).set(k,f),this}Pe.prototype.clear=Ji;Pe.prototype.delete=Zi;Pe.prototype.get=Qi;Pe.prototype.has=eo;Pe.prototype.set=to;function st(k,f){for(var n=k.length;n--;)if(uo(k[n][0],f))return n;return-1}function no(k,f){f=so(f,k)?[f]:oo(f);for(var n=0,c=f.length;k!=null&&n<c;)k=k[po(f[n++])];return n&&n==c?k:void 0}function ro(k){if(!wn(k)||lo(k))return!1;var f=go(k)||Pi(k)?zi:Ri;return f.test(ho(k))}function io(k){if(typeof k=="string")return k;if(At(k))return sn?sn.call(k):"";var f=k+"";return f=="0"&&1/k==-fn?"-0":f}function oo(k){return xn(k)?k:co(k)}function at(k,f){var n=k.__data__;return ao(f)?n[typeof f=="string"?"string":"hash"]:n.map}function yn(k,f){var n=Ii(k,f);return ro(n)?n:void 0}function so(k,f){if(xn(k))return!1;var n=typeof k;return n=="number"||n=="symbol"||n=="boolean"||k==null||At(k)?!0:Ci.test(k)||!Si.test(k)||f!=null&&k in Object(f)}function ao(k){var f=typeof k;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?k!=="__proto__":k===null}function lo(k){return!!nn&&nn in k}var co=Et(function(k){k=mo(k);var f=[];return Ti.test(k)&&f.push(""),k.replace(Ei,function(n,c,A,e){f.push(A?e.replace(Mi,"$1"):c||n)}),f});function po(k){if(typeof k=="string"||At(k))return k;var f=k+"";return f=="0"&&1/k==-fn?"-0":f}function ho(k){if(k!=null){try{return bn.call(k)}catch(f){}try{return k+""}catch(f){}}return""}function Et(k,f){if(typeof k!="function"||f&&typeof f!="function")throw new TypeError(wi);var n=function(){var c=arguments,A=f?f.apply(this,c):c[0],e=n.cache;if(e.has(A))return e.get(A);var l=k.apply(this,c);return n.cache=e.set(A,l),l};return n.cache=new(Et.Cache||Pe),n}Et.Cache=Pe;function uo(k,f){return k===f||k!==k&&f!==f}var xn=Array.isArray;function go(k){var f=wn(k)?vn.call(k):"";return f==_i||f==ki}function wn(k){var f=typeof k;return!!k&&(f=="object"||f=="function")}function fo(k){return!!k&&typeof k=="object"}function At(k){return typeof k=="symbol"||fo(k)&&vn.call(k)==$i}function mo(k){return k==null?"":io(k)}function bo(k,f,n){var c=k==null?void 0:no(k,f);return c===void 0?n:c}var vo=bo,yo=ie&&ie.__extends||function(){var k=function(f,n){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,A){c.__proto__=A}||function(c,A){for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&(c[e]=A[e])},k(f,n)};return function(f,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");k(f,n);function c(){this.constructor=f}f.prototype=n===null?Object.create(n):(c.prototype=n.prototype,new c)}}(),_t=ie&&ie.__assign||function(){return _t=Object.assign||function(k){for(var f,n=1,c=arguments.length;n<c;n++){f=arguments[n];for(var A in f)Object.prototype.hasOwnProperty.call(f,A)&&(k[A]=f[A])}return k},_t.apply(this,arguments)};Object.defineProperty(ot,"__esModule",{value:!0});var Le=be,yt=(0,Le.getAceInstance)(),xo=rt,wo=xi,q=kt,an=he,xt=un,_e=vo,_o=function(k){yo(f,k);function f(n){var c=k.call(this,n)||this;return Le.editorEvents.forEach(function(A){c[A]=c[A].bind(c)}),c.debounce=Le.debounce,c}return f.prototype.isInShadow=function(n){for(var c=n&&n.parentNode;c;){if(c.toString()==="[object ShadowRoot]")return!0;c=c.parentNode}return!1},f.prototype.componentDidMount=function(){var n=this,c=this.props,A=c.className,e=c.onBeforeLoad,l=c.mode,h=c.focus,d=c.theme,p=c.fontSize,i=c.value,r=c.defaultValue,g=c.cursorStart,m=c.showGutter,_=c.wrapEnabled,$=c.showPrintMargin,b=c.scrollMargin,y=b===void 0?[0,0,0,0]:b,E=c.keyboardHandler,P=c.onLoad,R=c.commands,C=c.annotations,t=c.markers,o=c.splits;this.editor=yt.edit(this.refEditor),this.isInShadow(this.refEditor)&&this.editor.renderer.attachToShadowRoot(),this.editor.setTheme("ace/theme/".concat(d)),e&&e(yt);var s=Object.keys(this.props.editorProps),a=new wo.Split(this.editor.container,"ace/theme/".concat(d),o);this.editor.env.split=a,this.splitEditor=a.getEditor(0),this.split=a,this.editor.setShowPrintMargin(!1),this.editor.renderer.setShowGutter(!1);var u=this.splitEditor.$options;this.props.debounceChangePeriod&&(this.onChange=this.debounce(this.onChange,this.props.debounceChangePeriod)),a.forEach(function(x,T){for(var S=0;S<s.length;S++)x[s[S]]=n.props.editorProps[s[S]];var M=_e(r,T),L=_e(i,T,"");x.session.setUndoManager(new yt.UndoManager),x.setTheme("ace/theme/".concat(d)),x.renderer.setScrollMargin(y[0],y[1],y[2],y[3]),x.getSession().setMode("ace/mode/".concat(l)),x.setFontSize(p),x.renderer.setShowGutter(m),x.getSession().setUseWrapMode(_),x.setShowPrintMargin($),x.on("focus",n.onFocus),x.on("blur",n.onBlur),x.on("input",n.onInput),x.on("copy",n.onCopy),x.on("paste",n.onPaste),x.on("change",n.onChange),x.getSession().selection.on("changeSelection",n.onSelectionChange),x.getSession().selection.on("changeCursor",n.onCursorChange),x.session.on("changeScrollTop",n.onScroll),x.setValue(M===void 0?L:M,g);var N=_e(C,T,[]),I=_e(t,T,[]);x.getSession().setAnnotations(N),I&&I.length>0&&n.handleMarkers(I,x);for(var S=0;S<Le.editorOptions.length;S++){var z=Le.editorOptions[S];u.hasOwnProperty(z)?x.setOption(z,n.props[z]):n.props[z]}n.handleOptions(n.props,x),Array.isArray(R)&&R.forEach(function(j){typeof j.exec=="string"?x.commands.bindKey(j.bindKey,j.exec):x.commands.addCommand(j)}),E&&x.setKeyboardHandler("ace/keyboard/"+E)}),A&&(this.refEditor.className+=" "+A),h&&this.splitEditor.focus();var v=this.editor.env.split;v.setOrientation(this.props.orientation==="below"?v.BELOW:v.BESIDE),v.resize(!0),P&&P(v)},f.prototype.componentDidUpdate=function(n){var c=this,A=n,e=this.props,l=this.editor.env.split;if(e.splits!==A.splits&&l.setSplits(e.splits),e.orientation!==A.orientation&&l.setOrientation(e.orientation==="below"?l.BELOW:l.BESIDE),l.forEach(function(i,r){e.mode!==A.mode&&i.getSession().setMode("ace/mode/"+e.mode),e.keyboardHandler!==A.keyboardHandler&&(e.keyboardHandler?i.setKeyboardHandler("ace/keyboard/"+e.keyboardHandler):i.setKeyboardHandler(null)),e.fontSize!==A.fontSize&&i.setFontSize(e.fontSize),e.wrapEnabled!==A.wrapEnabled&&i.getSession().setUseWrapMode(e.wrapEnabled),e.showPrintMargin!==A.showPrintMargin&&i.setShowPrintMargin(e.showPrintMargin),e.showGutter!==A.showGutter&&i.renderer.setShowGutter(e.showGutter);for(var g=0;g<Le.editorOptions.length;g++){var m=Le.editorOptions[g];e[m]!==A[m]&&i.setOption(m,e[m])}xt(e.setOptions,A.setOptions)||c.handleOptions(e,i);var _=_e(e.value,r,"");if(i.getValue()!==_){c.silent=!0;var $=i.session.selection.toJSON();i.setValue(_,e.cursorStart),i.session.selection.fromJSON($),c.silent=!1}var b=_e(e.annotations,r,[]),y=_e(A.annotations,r,[]);xt(b,y)||i.getSession().setAnnotations(b);var E=_e(e.markers,r,[]),P=_e(A.markers,r,[]);!xt(E,P)&&Array.isArray(E)&&c.handleMarkers(E,i)}),e.className!==A.className){var h=this.refEditor.className,d=h.trim().split(" "),p=A.className.trim().split(" ");p.forEach(function(i){var r=d.indexOf(i);d.splice(r,1)}),this.refEditor.className=" "+e.className+" "+d.join(" ")}e.theme!==A.theme&&l.setTheme("ace/theme/"+e.theme),e.focus&&!A.focus&&this.splitEditor.focus(),(e.height!==this.props.height||e.width!==this.props.width)&&this.editor.resize()},f.prototype.componentWillUnmount=function(){this.editor.destroy(),this.editor=null},f.prototype.onChange=function(n){if(this.props.onChange&&!this.silent){var c=[];this.editor.env.split.forEach(function(A){c.push(A.getValue())}),this.props.onChange(c,n)}},f.prototype.onSelectionChange=function(n){if(this.props.onSelectionChange){var c=[];this.editor.env.split.forEach(function(A){c.push(A.getSelection())}),this.props.onSelectionChange(c,n)}},f.prototype.onCursorChange=function(n){if(this.props.onCursorChange){var c=[];this.editor.env.split.forEach(function(A){c.push(A.getSelection())}),this.props.onCursorChange(c,n)}},f.prototype.onFocus=function(n){this.props.onFocus&&this.props.onFocus(n)},f.prototype.onInput=function(n){this.props.onInput&&this.props.onInput(n)},f.prototype.onBlur=function(n){this.props.onBlur&&this.props.onBlur(n)},f.prototype.onCopy=function(n){this.props.onCopy&&this.props.onCopy(n)},f.prototype.onPaste=function(n){this.props.onPaste&&this.props.onPaste(n)},f.prototype.onScroll=function(){this.props.onScroll&&this.props.onScroll(this.editor)},f.prototype.handleOptions=function(n,c){for(var A=Object.keys(n.setOptions),e=0;e<A.length;e++)c.setOption(A[e],n.setOptions[A[e]])},f.prototype.handleMarkers=function(n,c){var A=c.getSession().getMarkers(!0);for(var e in A)A.hasOwnProperty(e)&&c.getSession().removeMarker(A[e].id);A=c.getSession().getMarkers(!1);for(var e in A)A.hasOwnProperty(e)&&c.getSession().removeMarker(A[e].id);n.forEach(function(l){var h=l.startRow,d=l.startCol,p=l.endRow,i=l.endCol,r=l.className,g=l.type,m=l.inFront,_=m===void 0?!1:m,$=new xo.Range(h,d,p,i);c.getSession().addMarker($,r,g,_)})},f.prototype.updateRef=function(n){this.refEditor=n},f.prototype.render=function(){var n=this.props,c=n.name,A=n.width,e=n.height,l=n.style,h=_t({width:A,height:e},l);return an.createElement("div",{ref:this.updateRef,id:c,style:h})},f.propTypes={className:q.string,debounceChangePeriod:q.number,defaultValue:q.arrayOf(q.string),focus:q.bool,fontSize:q.oneOfType([q.number,q.string]),height:q.string,mode:q.string,name:q.string,onBlur:q.func,onChange:q.func,onCopy:q.func,onFocus:q.func,onInput:q.func,onLoad:q.func,onPaste:q.func,onScroll:q.func,orientation:q.string,showGutter:q.bool,splits:q.number,theme:q.string,value:q.arrayOf(q.string),width:q.string,onSelectionChange:q.func,onCursorChange:q.func,onBeforeLoad:q.func,minLines:q.number,maxLines:q.number,readOnly:q.bool,highlightActiveLine:q.bool,tabSize:q.number,showPrintMargin:q.bool,cursorStart:q.number,editorProps:q.object,setOptions:q.object,style:q.object,scrollMargin:q.array,annotations:q.array,markers:q.array,keyboardHandler:q.string,wrapEnabled:q.bool,enableBasicAutocompletion:q.oneOfType([q.bool,q.array]),enableLiveAutocompletion:q.oneOfType([q.bool,q.array]),commands:q.array},f.defaultProps={name:"ace-editor",focus:!1,orientation:"beside",splits:2,mode:"",theme:"",height:"500px",width:"500px",value:[],fontSize:12,showGutter:!0,onChange:null,onPaste:null,onLoad:null,onScroll:null,minLines:null,maxLines:null,readOnly:!1,highlightActiveLine:!0,showPrintMargin:!0,tabSize:4,cursorStart:1,editorProps:{},style:{},scrollMargin:[0,0,0,0],setOptions:{},wrapEnabled:!1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1},f}(an.Component);ot.default=_o;var _n={exports:{}};(function(k){var f=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},n=-1,c=1,A=0;f.Diff=function(e,l){return[e,l]},f.prototype.diff_main=function(e,l,h,d){typeof d=="undefined"&&(this.Diff_Timeout<=0?d=Number.MAX_VALUE:d=new Date().getTime()+this.Diff_Timeout*1e3);var p=d;if(e==null||l==null)throw new Error("Null input. (diff_main)");if(e==l)return e?[new f.Diff(A,e)]:[];typeof h=="undefined"&&(h=!0);var i=h,r=this.diff_commonPrefix(e,l),g=e.substring(0,r);e=e.substring(r),l=l.substring(r),r=this.diff_commonSuffix(e,l);var m=e.substring(e.length-r);e=e.substring(0,e.length-r),l=l.substring(0,l.length-r);var _=this.diff_compute_(e,l,i,p);return g&&_.unshift(new f.Diff(A,g)),m&&_.push(new f.Diff(A,m)),this.diff_cleanupMerge(_),_},f.prototype.diff_compute_=function(e,l,h,d){var p;if(!e)return[new f.Diff(c,l)];if(!l)return[new f.Diff(n,e)];var i=e.length>l.length?e:l,r=e.length>l.length?l:e,g=i.indexOf(r);if(g!=-1)return p=[new f.Diff(c,i.substring(0,g)),new f.Diff(A,r),new f.Diff(c,i.substring(g+r.length))],e.length>l.length&&(p[0][0]=p[2][0]=n),p;if(r.length==1)return[new f.Diff(n,e),new f.Diff(c,l)];var m=this.diff_halfMatch_(e,l);if(m){var _=m[0],$=m[1],b=m[2],y=m[3],E=m[4],P=this.diff_main(_,b,h,d),R=this.diff_main($,y,h,d);return P.concat([new f.Diff(A,E)],R)}return h&&e.length>100&&l.length>100?this.diff_lineMode_(e,l,d):this.diff_bisect_(e,l,d)},f.prototype.diff_lineMode_=function(e,l,h){var d=this.diff_linesToChars_(e,l);e=d.chars1,l=d.chars2;var p=d.lineArray,i=this.diff_main(e,l,!1,h);this.diff_charsToLines_(i,p),this.diff_cleanupSemantic(i),i.push(new f.Diff(A,""));for(var r=0,g=0,m=0,_="",$="";r<i.length;){switch(i[r][0]){case c:m++,$+=i[r][1];break;case n:g++,_+=i[r][1];break;case A:if(g>=1&&m>=1){i.splice(r-g-m,g+m),r=r-g-m;for(var b=this.diff_main(_,$,!1,h),y=b.length-1;y>=0;y--)i.splice(r,0,b[y]);r=r+b.length}m=0,g=0,_="",$="";break}r++}return i.pop(),i},f.prototype.diff_bisect_=function(e,l,h){for(var d=e.length,p=l.length,i=Math.ceil((d+p)/2),r=i,g=2*i,m=new Array(g),_=new Array(g),$=0;$<g;$++)m[$]=-1,_[$]=-1;m[r+1]=0,_[r+1]=0;for(var b=d-p,y=b%2!=0,E=0,P=0,R=0,C=0,t=0;t<i&&!(new Date().getTime()>h);t++){for(var o=-t+E;o<=t-P;o+=2){var s=r+o,a;o==-t||o!=t&&m[s-1]<m[s+1]?a=m[s+1]:a=m[s-1]+1;for(var u=a-o;a<d&&u<p&&e.charAt(a)==l.charAt(u);)a++,u++;if(m[s]=a,a>d)P+=2;else if(u>p)E+=2;else if(y){var v=r+b-o;if(v>=0&&v<g&&_[v]!=-1){var x=d-_[v];if(a>=x)return this.diff_bisectSplit_(e,l,a,u,h)}}}for(var T=-t+R;T<=t-C;T+=2){var v=r+T,x;T==-t||T!=t&&_[v-1]<_[v+1]?x=_[v+1]:x=_[v-1]+1;for(var S=x-T;x<d&&S<p&&e.charAt(d-x-1)==l.charAt(p-S-1);)x++,S++;if(_[v]=x,x>d)C+=2;else if(S>p)R+=2;else if(!y){var s=r+b-T;if(s>=0&&s<g&&m[s]!=-1){var a=m[s],u=r+a-s;if(x=d-x,a>=x)return this.diff_bisectSplit_(e,l,a,u,h)}}}}return[new f.Diff(n,e),new f.Diff(c,l)]},f.prototype.diff_bisectSplit_=function(e,l,h,d,p){var i=e.substring(0,h),r=l.substring(0,d),g=e.substring(h),m=l.substring(d),_=this.diff_main(i,r,!1,p),$=this.diff_main(g,m,!1,p);return _.concat($)},f.prototype.diff_linesToChars_=function(e,l){var h=[],d={};h[0]="";function p(m){for(var _="",$=0,b=-1,y=h.length;b<m.length-1;){b=m.indexOf(`
`,$),b==-1&&(b=m.length-1);var E=m.substring($,b+1);(d.hasOwnProperty?d.hasOwnProperty(E):d[E]!==void 0)?_+=String.fromCharCode(d[E]):(y==i&&(E=m.substring($),b=m.length),_+=String.fromCharCode(y),d[E]=y,h[y++]=E),$=b+1}return _}var i=4e4,r=p(e);i=65535;var g=p(l);return{chars1:r,chars2:g,lineArray:h}},f.prototype.diff_charsToLines_=function(e,l){for(var h=0;h<e.length;h++){for(var d=e[h][1],p=[],i=0;i<d.length;i++)p[i]=l[d.charCodeAt(i)];e[h][1]=p.join("")}},f.prototype.diff_commonPrefix=function(e,l){if(!e||!l||e.charAt(0)!=l.charAt(0))return 0;for(var h=0,d=Math.min(e.length,l.length),p=d,i=0;h<p;)e.substring(i,p)==l.substring(i,p)?(h=p,i=h):d=p,p=Math.floor((d-h)/2+h);return p},f.prototype.diff_commonSuffix=function(e,l){if(!e||!l||e.charAt(e.length-1)!=l.charAt(l.length-1))return 0;for(var h=0,d=Math.min(e.length,l.length),p=d,i=0;h<p;)e.substring(e.length-p,e.length-i)==l.substring(l.length-p,l.length-i)?(h=p,i=h):d=p,p=Math.floor((d-h)/2+h);return p},f.prototype.diff_commonOverlap_=function(e,l){var h=e.length,d=l.length;if(h==0||d==0)return 0;h>d?e=e.substring(h-d):h<d&&(l=l.substring(0,h));var p=Math.min(h,d);if(e==l)return p;for(var i=0,r=1;;){var g=e.substring(p-r),m=l.indexOf(g);if(m==-1)return i;r+=m,(m==0||e.substring(p-r)==l.substring(0,r))&&(i=r,r++)}},f.prototype.diff_halfMatch_=function(e,l){if(this.Diff_Timeout<=0)return null;var h=e.length>l.length?e:l,d=e.length>l.length?l:e;if(h.length<4||d.length*2<h.length)return null;var p=this;function i(P,R,C){for(var t=P.substring(C,C+Math.floor(P.length/4)),o=-1,s="",a,u,v,x;(o=R.indexOf(t,o+1))!=-1;){var T=p.diff_commonPrefix(P.substring(C),R.substring(o)),S=p.diff_commonSuffix(P.substring(0,C),R.substring(0,o));s.length<S+T&&(s=R.substring(o-S,o)+R.substring(o,o+T),a=P.substring(0,C-S),u=P.substring(C+T),v=R.substring(0,o-S),x=R.substring(o+T))}return s.length*2>=P.length?[a,u,v,x,s]:null}var r=i(h,d,Math.ceil(h.length/4)),g=i(h,d,Math.ceil(h.length/2)),m;if(!r&&!g)return null;g?r?m=r[4].length>g[4].length?r:g:m=g:m=r;var _,$,b,y;e.length>l.length?(_=m[0],$=m[1],b=m[2],y=m[3]):(b=m[0],y=m[1],_=m[2],$=m[3]);var E=m[4];return[_,$,b,y,E]},f.prototype.diff_cleanupSemantic=function(e){for(var l=!1,h=[],d=0,p=null,i=0,r=0,g=0,m=0,_=0;i<e.length;)e[i][0]==A?(h[d++]=i,r=m,g=_,m=0,_=0,p=e[i][1]):(e[i][0]==c?m+=e[i][1].length:_+=e[i][1].length,p&&p.length<=Math.max(r,g)&&p.length<=Math.max(m,_)&&(e.splice(h[d-1],0,new f.Diff(n,p)),e[h[d-1]+1][0]=c,d--,d--,i=d>0?h[d-1]:-1,r=0,g=0,m=0,_=0,p=null,l=!0)),i++;for(l&&this.diff_cleanupMerge(e),this.diff_cleanupSemanticLossless(e),i=1;i<e.length;){if(e[i-1][0]==n&&e[i][0]==c){var $=e[i-1][1],b=e[i][1],y=this.diff_commonOverlap_($,b),E=this.diff_commonOverlap_(b,$);y>=E?(y>=$.length/2||y>=b.length/2)&&(e.splice(i,0,new f.Diff(A,b.substring(0,y))),e[i-1][1]=$.substring(0,$.length-y),e[i+1][1]=b.substring(y),i++):(E>=$.length/2||E>=b.length/2)&&(e.splice(i,0,new f.Diff(A,$.substring(0,E))),e[i-1][0]=c,e[i-1][1]=b.substring(0,b.length-E),e[i+1][0]=n,e[i+1][1]=$.substring(E),i++),i++}i++}},f.prototype.diff_cleanupSemanticLossless=function(e){function l(E,P){if(!E||!P)return 6;var R=E.charAt(E.length-1),C=P.charAt(0),t=R.match(f.nonAlphaNumericRegex_),o=C.match(f.nonAlphaNumericRegex_),s=t&&R.match(f.whitespaceRegex_),a=o&&C.match(f.whitespaceRegex_),u=s&&R.match(f.linebreakRegex_),v=a&&C.match(f.linebreakRegex_),x=u&&E.match(f.blanklineEndRegex_),T=v&&P.match(f.blanklineStartRegex_);return x||T?5:u||v?4:t&&!s&&a?3:s||a?2:t||o?1:0}for(var h=1;h<e.length-1;){if(e[h-1][0]==A&&e[h+1][0]==A){var d=e[h-1][1],p=e[h][1],i=e[h+1][1],r=this.diff_commonSuffix(d,p);if(r){var g=p.substring(p.length-r);d=d.substring(0,d.length-r),p=g+p.substring(0,p.length-r),i=g+i}for(var m=d,_=p,$=i,b=l(d,p)+l(p,i);p.charAt(0)===i.charAt(0);){d+=p.charAt(0),p=p.substring(1)+i.charAt(0),i=i.substring(1);var y=l(d,p)+l(p,i);y>=b&&(b=y,m=d,_=p,$=i)}e[h-1][1]!=m&&(m?e[h-1][1]=m:(e.splice(h-1,1),h--),e[h][1]=_,$?e[h+1][1]=$:(e.splice(h+1,1),h--))}h++}},f.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,f.whitespaceRegex_=/\s/,f.linebreakRegex_=/[\r\n]/,f.blanklineEndRegex_=/\n\r?\n$/,f.blanklineStartRegex_=/^\r?\n\r?\n/,f.prototype.diff_cleanupEfficiency=function(e){for(var l=!1,h=[],d=0,p=null,i=0,r=!1,g=!1,m=!1,_=!1;i<e.length;)e[i][0]==A?(e[i][1].length<this.Diff_EditCost&&(m||_)?(h[d++]=i,r=m,g=_,p=e[i][1]):(d=0,p=null),m=_=!1):(e[i][0]==n?_=!0:m=!0,p&&(r&&g&&m&&_||p.length<this.Diff_EditCost/2&&r+g+m+_==3)&&(e.splice(h[d-1],0,new f.Diff(n,p)),e[h[d-1]+1][0]=c,d--,p=null,r&&g?(m=_=!0,d=0):(d--,i=d>0?h[d-1]:-1,m=_=!1),l=!0)),i++;l&&this.diff_cleanupMerge(e)},f.prototype.diff_cleanupMerge=function(e){e.push(new f.Diff(A,""));for(var l=0,h=0,d=0,p="",i="",r;l<e.length;)switch(e[l][0]){case c:d++,i+=e[l][1],l++;break;case n:h++,p+=e[l][1],l++;break;case A:h+d>1?(h!==0&&d!==0&&(r=this.diff_commonPrefix(i,p),r!==0&&(l-h-d>0&&e[l-h-d-1][0]==A?e[l-h-d-1][1]+=i.substring(0,r):(e.splice(0,0,new f.Diff(A,i.substring(0,r))),l++),i=i.substring(r),p=p.substring(r)),r=this.diff_commonSuffix(i,p),r!==0&&(e[l][1]=i.substring(i.length-r)+e[l][1],i=i.substring(0,i.length-r),p=p.substring(0,p.length-r))),l-=h+d,e.splice(l,h+d),p.length&&(e.splice(l,0,new f.Diff(n,p)),l++),i.length&&(e.splice(l,0,new f.Diff(c,i)),l++),l++):l!==0&&e[l-1][0]==A?(e[l-1][1]+=e[l][1],e.splice(l,1)):l++,d=0,h=0,p="",i="";break}e[e.length-1][1]===""&&e.pop();var g=!1;for(l=1;l<e.length-1;)e[l-1][0]==A&&e[l+1][0]==A&&(e[l][1].substring(e[l][1].length-e[l-1][1].length)==e[l-1][1]?(e[l][1]=e[l-1][1]+e[l][1].substring(0,e[l][1].length-e[l-1][1].length),e[l+1][1]=e[l-1][1]+e[l+1][1],e.splice(l-1,1),g=!0):e[l][1].substring(0,e[l+1][1].length)==e[l+1][1]&&(e[l-1][1]+=e[l+1][1],e[l][1]=e[l][1].substring(e[l+1][1].length)+e[l+1][1],e.splice(l+1,1),g=!0)),l++;g&&this.diff_cleanupMerge(e)},f.prototype.diff_xIndex=function(e,l){var h=0,d=0,p=0,i=0,r;for(r=0;r<e.length&&(e[r][0]!==c&&(h+=e[r][1].length),e[r][0]!==n&&(d+=e[r][1].length),!(h>l));r++)p=h,i=d;return e.length!=r&&e[r][0]===n?i:i+(l-p)},f.prototype.diff_prettyHtml=function(e){for(var l=[],h=/&/g,d=/</g,p=/>/g,i=/\n/g,r=0;r<e.length;r++){var g=e[r][0],m=e[r][1],_=m.replace(h,"&amp;").replace(d,"&lt;").replace(p,"&gt;").replace(i,"&para;<br>");switch(g){case c:l[r]='<ins style="background:#e6ffe6;">'+_+"</ins>";break;case n:l[r]='<del style="background:#ffe6e6;">'+_+"</del>";break;case A:l[r]="<span>"+_+"</span>";break}}return l.join("")},f.prototype.diff_text1=function(e){for(var l=[],h=0;h<e.length;h++)e[h][0]!==c&&(l[h]=e[h][1]);return l.join("")},f.prototype.diff_text2=function(e){for(var l=[],h=0;h<e.length;h++)e[h][0]!==n&&(l[h]=e[h][1]);return l.join("")},f.prototype.diff_levenshtein=function(e){for(var l=0,h=0,d=0,p=0;p<e.length;p++){var i=e[p][0],r=e[p][1];switch(i){case c:h+=r.length;break;case n:d+=r.length;break;case A:l+=Math.max(h,d),h=0,d=0;break}}return l+=Math.max(h,d),l},f.prototype.diff_toDelta=function(e){for(var l=[],h=0;h<e.length;h++)switch(e[h][0]){case c:l[h]="+"+encodeURI(e[h][1]);break;case n:l[h]="-"+e[h][1].length;break;case A:l[h]="="+e[h][1].length;break}return l.join("	").replace(/%20/g," ")},f.prototype.diff_fromDelta=function(e,l){for(var h=[],d=0,p=0,i=l.split(/\t/g),r=0;r<i.length;r++){var g=i[r].substring(1);switch(i[r].charAt(0)){case"+":try{h[d++]=new f.Diff(c,decodeURI(g))}catch($){throw new Error("Illegal escape in diff_fromDelta: "+g)}break;case"-":case"=":var m=parseInt(g,10);if(isNaN(m)||m<0)throw new Error("Invalid number in diff_fromDelta: "+g);var _=e.substring(p,p+=m);i[r].charAt(0)=="="?h[d++]=new f.Diff(A,_):h[d++]=new f.Diff(n,_);break;default:if(i[r])throw new Error("Invalid diff operation in diff_fromDelta: "+i[r])}}if(p!=e.length)throw new Error("Delta length ("+p+") does not equal source text length ("+e.length+").");return h},f.prototype.match_main=function(e,l,h){if(e==null||l==null||h==null)throw new Error("Null input. (match_main)");return h=Math.max(0,Math.min(h,e.length)),e==l?0:e.length?e.substring(h,h+l.length)==l?h:this.match_bitap_(e,l,h):-1},f.prototype.match_bitap_=function(e,l,h){if(l.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var d=this.match_alphabet_(l),p=this;function i(a,u){var v=a/l.length,x=Math.abs(h-u);return p.Match_Distance?v+x/p.Match_Distance:x?1:v}var r=this.Match_Threshold,g=e.indexOf(l,h);g!=-1&&(r=Math.min(i(0,g),r),g=e.lastIndexOf(l,h+l.length),g!=-1&&(r=Math.min(i(0,g),r)));var m=1<<l.length-1;g=-1;for(var _,$,b=l.length+e.length,y,E=0;E<l.length;E++){for(_=0,$=b;_<$;)i(E,h+$)<=r?_=$:b=$,$=Math.floor((b-_)/2+_);b=$;var P=Math.max(1,h-$+1),R=Math.min(h+$,e.length)+l.length,C=Array(R+2);C[R+1]=(1<<E)-1;for(var t=R;t>=P;t--){var o=d[e.charAt(t-1)];if(E===0?C[t]=(C[t+1]<<1|1)&o:C[t]=(C[t+1]<<1|1)&o|((y[t+1]|y[t])<<1|1)|y[t+1],C[t]&m){var s=i(E,t-1);if(s<=r)if(r=s,g=t-1,g>h)P=Math.max(1,2*h-g);else break}}if(i(E+1,h)>r)break;y=C}return g},f.prototype.match_alphabet_=function(e){for(var l={},h=0;h<e.length;h++)l[e.charAt(h)]=0;for(var h=0;h<e.length;h++)l[e.charAt(h)]|=1<<e.length-h-1;return l},f.prototype.patch_addContext_=function(e,l){if(l.length!=0){if(e.start2===null)throw Error("patch not initialized");for(var h=l.substring(e.start2,e.start2+e.length1),d=0;l.indexOf(h)!=l.lastIndexOf(h)&&h.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)d+=this.Patch_Margin,h=l.substring(e.start2-d,e.start2+e.length1+d);d+=this.Patch_Margin;var p=l.substring(e.start2-d,e.start2);p&&e.diffs.unshift(new f.Diff(A,p));var i=l.substring(e.start2+e.length1,e.start2+e.length1+d);i&&e.diffs.push(new f.Diff(A,i)),e.start1-=p.length,e.start2-=p.length,e.length1+=p.length+i.length,e.length2+=p.length+i.length}},f.prototype.patch_make=function(e,l,h){var d,p;if(typeof e=="string"&&typeof l=="string"&&typeof h=="undefined")d=e,p=this.diff_main(d,l,!0),p.length>2&&(this.diff_cleanupSemantic(p),this.diff_cleanupEfficiency(p));else if(e&&typeof e=="object"&&typeof l=="undefined"&&typeof h=="undefined")p=e,d=this.diff_text1(p);else if(typeof e=="string"&&l&&typeof l=="object"&&typeof h=="undefined")d=e,p=l;else if(typeof e=="string"&&typeof l=="string"&&h&&typeof h=="object")d=e,p=h;else throw new Error("Unknown call format to patch_make.");if(p.length===0)return[];for(var i=[],r=new f.patch_obj,g=0,m=0,_=0,$=d,b=d,y=0;y<p.length;y++){var E=p[y][0],P=p[y][1];switch(!g&&E!==A&&(r.start1=m,r.start2=_),E){case c:r.diffs[g++]=p[y],r.length2+=P.length,b=b.substring(0,_)+P+b.substring(_);break;case n:r.length1+=P.length,r.diffs[g++]=p[y],b=b.substring(0,_)+b.substring(_+P.length);break;case A:P.length<=2*this.Patch_Margin&&g&&p.length!=y+1?(r.diffs[g++]=p[y],r.length1+=P.length,r.length2+=P.length):P.length>=2*this.Patch_Margin&&g&&(this.patch_addContext_(r,$),i.push(r),r=new f.patch_obj,g=0,$=b,m=_);break}E!==c&&(m+=P.length),E!==n&&(_+=P.length)}return g&&(this.patch_addContext_(r,$),i.push(r)),i},f.prototype.patch_deepCopy=function(e){for(var l=[],h=0;h<e.length;h++){var d=e[h],p=new f.patch_obj;p.diffs=[];for(var i=0;i<d.diffs.length;i++)p.diffs[i]=new f.Diff(d.diffs[i][0],d.diffs[i][1]);p.start1=d.start1,p.start2=d.start2,p.length1=d.length1,p.length2=d.length2,l[h]=p}return l},f.prototype.patch_apply=function(e,l){if(e.length==0)return[l,[]];e=this.patch_deepCopy(e);var h=this.patch_addPadding(e);l=h+l+h,this.patch_splitMax(e);for(var d=0,p=[],i=0;i<e.length;i++){var r=e[i].start2+d,g=this.diff_text1(e[i].diffs),m,_=-1;if(g.length>this.Match_MaxBits?(m=this.match_main(l,g.substring(0,this.Match_MaxBits),r),m!=-1&&(_=this.match_main(l,g.substring(g.length-this.Match_MaxBits),r+g.length-this.Match_MaxBits),(_==-1||m>=_)&&(m=-1))):m=this.match_main(l,g,r),m==-1)p[i]=!1,d-=e[i].length2-e[i].length1;else{p[i]=!0,d=m-r;var $;if(_==-1?$=l.substring(m,m+g.length):$=l.substring(m,_+this.Match_MaxBits),g==$)l=l.substring(0,m)+this.diff_text2(e[i].diffs)+l.substring(m+g.length);else{var b=this.diff_main(g,$,!1);if(g.length>this.Match_MaxBits&&this.diff_levenshtein(b)/g.length>this.Patch_DeleteThreshold)p[i]=!1;else{this.diff_cleanupSemanticLossless(b);for(var y=0,E,P=0;P<e[i].diffs.length;P++){var R=e[i].diffs[P];R[0]!==A&&(E=this.diff_xIndex(b,y)),R[0]===c?l=l.substring(0,m+E)+R[1]+l.substring(m+E):R[0]===n&&(l=l.substring(0,m+E)+l.substring(m+this.diff_xIndex(b,y+R[1].length))),R[0]!==n&&(y+=R[1].length)}}}}}return l=l.substring(h.length,l.length-h.length),[l,p]},f.prototype.patch_addPadding=function(e){for(var l=this.Patch_Margin,h="",d=1;d<=l;d++)h+=String.fromCharCode(d);for(var d=0;d<e.length;d++)e[d].start1+=l,e[d].start2+=l;var p=e[0],i=p.diffs;if(i.length==0||i[0][0]!=A)i.unshift(new f.Diff(A,h)),p.start1-=l,p.start2-=l,p.length1+=l,p.length2+=l;else if(l>i[0][1].length){var r=l-i[0][1].length;i[0][1]=h.substring(i[0][1].length)+i[0][1],p.start1-=r,p.start2-=r,p.length1+=r,p.length2+=r}if(p=e[e.length-1],i=p.diffs,i.length==0||i[i.length-1][0]!=A)i.push(new f.Diff(A,h)),p.length1+=l,p.length2+=l;else if(l>i[i.length-1][1].length){var r=l-i[i.length-1][1].length;i[i.length-1][1]+=h.substring(0,r),p.length1+=r,p.length2+=r}return h},f.prototype.patch_splitMax=function(e){for(var l=this.Match_MaxBits,h=0;h<e.length;h++)if(!(e[h].length1<=l)){var d=e[h];e.splice(h--,1);for(var p=d.start1,i=d.start2,r="";d.diffs.length!==0;){var g=new f.patch_obj,m=!0;for(g.start1=p-r.length,g.start2=i-r.length,r!==""&&(g.length1=g.length2=r.length,g.diffs.push(new f.Diff(A,r)));d.diffs.length!==0&&g.length1<l-this.Patch_Margin;){var _=d.diffs[0][0],$=d.diffs[0][1];_===c?(g.length2+=$.length,i+=$.length,g.diffs.push(d.diffs.shift()),m=!1):_===n&&g.diffs.length==1&&g.diffs[0][0]==A&&$.length>2*l?(g.length1+=$.length,p+=$.length,m=!1,g.diffs.push(new f.Diff(_,$)),d.diffs.shift()):($=$.substring(0,l-g.length1-this.Patch_Margin),g.length1+=$.length,p+=$.length,_===A?(g.length2+=$.length,i+=$.length):m=!1,g.diffs.push(new f.Diff(_,$)),$==d.diffs[0][1]?d.diffs.shift():d.diffs[0][1]=d.diffs[0][1].substring($.length))}r=this.diff_text2(g.diffs),r=r.substring(r.length-this.Patch_Margin);var b=this.diff_text1(d.diffs).substring(0,this.Patch_Margin);b!==""&&(g.length1+=b.length,g.length2+=b.length,g.diffs.length!==0&&g.diffs[g.diffs.length-1][0]===A?g.diffs[g.diffs.length-1][1]+=b:g.diffs.push(new f.Diff(A,b))),m||e.splice(++h,0,g)}}},f.prototype.patch_toText=function(e){for(var l=[],h=0;h<e.length;h++)l[h]=e[h];return l.join("")},f.prototype.patch_fromText=function(e){var l=[];if(!e)return l;for(var h=e.split(`
`),d=0,p=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;d<h.length;){var i=h[d].match(p);if(!i)throw new Error("Invalid patch string: "+h[d]);var r=new f.patch_obj;for(l.push(r),r.start1=parseInt(i[1],10),i[2]===""?(r.start1--,r.length1=1):i[2]=="0"?r.length1=0:(r.start1--,r.length1=parseInt(i[2],10)),r.start2=parseInt(i[3],10),i[4]===""?(r.start2--,r.length2=1):i[4]=="0"?r.length2=0:(r.start2--,r.length2=parseInt(i[4],10)),d++;d<h.length;){var g=h[d].charAt(0);try{var m=decodeURI(h[d].substring(1))}catch(_){throw new Error("Illegal escape in patch_fromText: "+m)}if(g=="-")r.diffs.push(new f.Diff(n,m));else if(g=="+")r.diffs.push(new f.Diff(c,m));else if(g==" ")r.diffs.push(new f.Diff(A,m));else{if(g=="@")break;if(g!=="")throw new Error('Invalid patch mode "'+g+'" in: '+m)}d++}}return l},f.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},f.patch_obj.prototype.toString=function(){var e,l;this.length1===0?e=this.start1+",0":this.length1==1?e=this.start1+1:e=this.start1+1+","+this.length1,this.length2===0?l=this.start2+",0":this.length2==1?l=this.start2+1:l=this.start2+1+","+this.length2;for(var h=["@@ -"+e+" +"+l+` @@
`],d,p=0;p<this.diffs.length;p++){switch(this.diffs[p][0]){case c:d="+";break;case n:d="-";break;case A:d=" ";break}h[p+1]=d+encodeURI(this.diffs[p][1])+`
`}return h.join("").replace(/%20/g," ")},k.exports=f,k.exports.diff_match_patch=f,k.exports.DIFF_DELETE=n,k.exports.DIFF_INSERT=c,k.exports.DIFF_EQUAL=A})(_n);var ko=_n.exports,$o=ie&&ie.__extends||function(){var k=function(f,n){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,A){c.__proto__=A}||function(c,A){for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&(c[e]=A[e])},k(f,n)};return function(f,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");k(f,n);function c(){this.constructor=f}f.prototype=n===null?Object.create(n):(c.prototype=n.prototype,new c)}}();Object.defineProperty(St,"__esModule",{value:!0});var J=kt,ln=he,So=ot,Co=ko,To=function(k){$o(f,k);function f(n){var c=k.call(this,n)||this;return c.state={value:c.props.value},c.onChange=c.onChange.bind(c),c.diff=c.diff.bind(c),c}return f.prototype.componentDidUpdate=function(){var n=this.props.value;n!==this.state.value&&this.setState({value:n})},f.prototype.onChange=function(n){this.setState({value:n}),this.props.onChange&&this.props.onChange(n)},f.prototype.diff=function(){var n=new Co,c=this.state.value[0],A=this.state.value[1];if(c.length===0&&A.length===0)return[];var e=n.diff_main(c,A);n.diff_cleanupSemantic(e);var l=this.generateDiffedLines(e),h=this.setCodeMarkers(l);return h},f.prototype.generateDiffedLines=function(n){var c={DIFF_EQUAL:0,DIFF_DELETE:-1,DIFF_INSERT:1},A={left:[],right:[]},e={left:1,right:1};return n.forEach(function(l){var h=l[0],d=l[1],p=d.split(`
`).length-1;if(d.length!==0){var i=d[0],r=d[d.length-1],g=0;switch(h){case c.DIFF_EQUAL:e.left+=p,e.right+=p;break;case c.DIFF_DELETE:i===`
`&&(e.left++,p--),g=p,g===0&&A.right.push({startLine:e.right,endLine:e.right}),r===`
`&&(g-=1),A.left.push({startLine:e.left,endLine:e.left+g}),e.left+=p;break;case c.DIFF_INSERT:i===`
`&&(e.right++,p--),g=p,g===0&&A.left.push({startLine:e.left,endLine:e.left}),r===`
`&&(g-=1),A.right.push({startLine:e.right,endLine:e.right+g}),e.right+=p;break;default:throw new Error("Diff type was not defined.")}}}),A},f.prototype.setCodeMarkers=function(n){n===void 0&&(n={left:[],right:[]});for(var c=[],A={left:[],right:[]},e=0;e<n.left.length;e++){var l={startRow:n.left[e].startLine-1,endRow:n.left[e].endLine,type:"text",className:"codeMarker"};A.left.push(l)}for(var e=0;e<n.right.length;e++){var l={startRow:n.right[e].startLine-1,endRow:n.right[e].endLine,type:"text",className:"codeMarker"};A.right.push(l)}return c[0]=A.left,c[1]=A.right,c},f.prototype.render=function(){var n=this.diff();return ln.createElement(So.default,{name:this.props.name,className:this.props.className,focus:this.props.focus,orientation:this.props.orientation,splits:this.props.splits,mode:this.props.mode,theme:this.props.theme,height:this.props.height,width:this.props.width,fontSize:this.props.fontSize,showGutter:this.props.showGutter,onChange:this.onChange,onPaste:this.props.onPaste,onLoad:this.props.onLoad,onScroll:this.props.onScroll,minLines:this.props.minLines,maxLines:this.props.maxLines,readOnly:this.props.readOnly,highlightActiveLine:this.props.highlightActiveLine,showPrintMargin:this.props.showPrintMargin,tabSize:this.props.tabSize,cursorStart:this.props.cursorStart,editorProps:this.props.editorProps,style:this.props.style,scrollMargin:this.props.scrollMargin,setOptions:this.props.setOptions,wrapEnabled:this.props.wrapEnabled,enableBasicAutocompletion:this.props.enableBasicAutocompletion,enableLiveAutocompletion:this.props.enableLiveAutocompletion,value:this.state.value,markers:n})},f.propTypes={cursorStart:J.number,editorProps:J.object,enableBasicAutocompletion:J.bool,enableLiveAutocompletion:J.bool,focus:J.bool,fontSize:J.number,height:J.string,highlightActiveLine:J.bool,maxLines:J.number,minLines:J.number,mode:J.string,name:J.string,className:J.string,onLoad:J.func,onPaste:J.func,onScroll:J.func,onChange:J.func,orientation:J.string,readOnly:J.bool,scrollMargin:J.array,setOptions:J.object,showGutter:J.bool,showPrintMargin:J.bool,splits:J.number,style:J.object,tabSize:J.number,theme:J.string,value:J.array,width:J.string,wrapEnabled:J.bool},f.defaultProps={cursorStart:1,editorProps:{},enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,focus:!1,fontSize:12,height:"500px",highlightActiveLine:!0,maxLines:null,minLines:null,mode:"",name:"ace-editor",onLoad:null,onScroll:null,onPaste:null,onChange:null,orientation:"beside",readOnly:!1,scrollMargin:[0,0,0,0],setOptions:{},showGutter:!0,showPrintMargin:!0,splits:2,style:{},tabSize:4,theme:"github",value:["",""],width:"500px",wrapEnabled:!0},f}(ln.Component);St.default=To;Object.defineProperty(De,"__esModule",{value:!0});De.diff=De.split=void 0;var Eo=$t,Ao=St;De.diff=Ao.default;var Mo=ot;De.split=Mo.default;var cn=De.default=Eo.default;const Ro=Dr(Br),Oo=k=>k.lbl||k.adminLbl||k.txt,kn=()=>Object.entries(Ro).map(([k,f])=>({lbl:Oo(f)||k,val:`${k}`})),Lo=()=>ti.map(({name:k,label:f})=>({lbl:f,val:`bfVars["${k}"]`})),Io=k=>`/* On Field ${pn(k)}*/
document.querySelector(\`#form-\${bfContentId}\`).querySelector(\`#fieldKey-\${bfSlNo}\`).addEventListener('${k}', event => {
  /* Write your code here*/
})`,le=k=>({lbl:`On ${pn(k)}`,val:Io(k)}),Po=[{type:"group-opts",name:"Global Variables/Property",childs:[{lbl:"Form ID",val:"bf_globals[bfContentId].formId"},...Lo(),{lbl:"Dummy Data",val:"window.bf_dummy_data = { /* Overwrite Dummy Data */};"}]},{type:"group-opts",name:"Field Keys",childs:[...kn()]},{type:"group-opts",name:"Form Events",childs:[{lbl:"On Form Submit Success",val:"/* On Form Submit Success */\ndocument.querySelector(`#form-${bfContentId}`).addEventListener('bf-form-submit-success', ({detail:{formId, entryId, formData}}) => {\n	/* Write your code here... */\n})"},{lbl:"On Form Submit Error",val:"/* On Form Submit Error */\ndocument.querySelector(`#form-${bfContentId}`).addEventListener('bf-form-submit-error', ({detail:{formId, errors}}) => {\n	/* Write your code here... */\n})"},{lbl:"On Form Reset",val:"/* On Form Reset */\ndocument.querySelector(`#form-${bfContentId}`).addEventListener('bf-form-reset', ({detail:{formId}}) => {\n	/* Write your code here... */\n})"},{lbl:"On Form Validation Error",val:"/* On Form Validation Error */\ndocument.querySelector(`#form-${bfContentId}`).addEventListener('bf-form-validation-error', ({detail:{formId, fieldId, error}}) => {\n	/* Write your code here... */\n})"}]},{type:"group-title",name:"Field Events"},{type:"group-accordion",name:"Text Field",childs:[le("change"),le("input"),le("blur"),le("focus")]},{type:"group-accordion",name:"Textarea Field",childs:[le("change"),le("input"),le("blur"),le("focus")]},{type:"group-accordion",name:"Email Field",childs:[le("change"),le("input"),le("blur"),le("focus")]},{type:"group-accordion",name:"Checkbox",childs:[le("change")]},{type:"group-accordion",name:"Select",childs:[le("change")]},{type:"group-accordion",name:"Button",childs:[le("click")]},{type:"group-opts",name:"Filter Functions",childs:[{lbl:"Filter Logic status",val:`function bf_modify_workflow_logic_status(logicStatus, logics, fieldValues, rowIndex, condIndx, props) {
	/* write your code here */ 
	return logicStatus
}`},{lbl:"Filter Razorpay Notes",val:`function bf_modify_razorpay_notes(notes) {
	 /* write your code here */ 
	return notes
}`}]}],Fo=[{type:"group-opts",name:"Field Keys",childs:[...kn()]}],No=k=>{let f=0;return k.reduce((n,c)=>(c.type?(n.push(c),f=0):(f||(n.push({type:"no-group",childs:[]}),f=1),n[n.length-1].childs.push(c)),n),[])};function zo({options:k,action:f}){var p;const{css:n}=hn(),c=No(k),[A,e]=he.useState(c);he.useEffect(()=>{e(c)},[k]);const l=i=>{const r=i.target.value.toLowerCase().trim();if(!r)return e(c);const m=qr(c).reduce((_,$)=>($.type!=="group-title"&&(_.push($),$.childs&&(_[_.length-1].childs=$.childs.filter(b=>b.lbl.toLowerCase().includes(r)),_[_.length-1].childs.length===0&&_.pop())),_),[]);e(m)},h=()=>{d.current.value="",e(c)},d=he.useRef(null);return V.jsxs("div",{className:n(ce.main),children:[V.jsxs("div",{className:n(ce.fields_search),children:[V.jsx("input",{ref:d,title:"Search Field","aria-label":"Search Field",autoComplete:"off","data-testid":"tlbr-srch-inp",placeholder:"Search...",id:"search-icon",type:"search",name:"searchIcn",onChange:l,className:n(ce.search_field)}),((p=d==null?void 0:d.current)==null?void 0:p.value)&&V.jsx("span",{title:"clear",className:n(ce.clear_icn),role:"button",tabIndex:"-1",onClick:h,onKeyDown:h,children:" "}),V.jsx("span",{title:"search",className:n(ce.search_icn),children:V.jsx(jr,{size:"20"})})]}),V.jsx(Hr,{style:{height:"92%"},autoHide:!0,children:V.jsx("div",{className:n(ce.groupList),children:A.map(i=>V.jsxs(he.Fragment,{children:[i.type==="group-accordion"&&V.jsx(ni,{title:i.name,children:V.jsx("ul",{className:n(ce.ul),children:"childs"in i&&i.childs.map(r=>V.jsx("li",{className:n(ce.li),children:V.jsx("button",{type:"button",className:`${n(ce.button)} btnHover`,title:r.lbl,onClick:()=>f(r.val),children:r.lbl})},`childs-${r.val}`))})},`group-accordion-${i.name}`),i.type==="group-opts"&&V.jsxs("ul",{className:n(ce.ul),children:[i.type.match(/group-opts|group-title/)&&V.jsx("h4",{className:n(ce.title),children:i.name}),"childs"in i&&i.childs.map(r=>V.jsx("li",{className:n(ce.li),children:V.jsx("button",{type:"button",className:`${n(ce.button)} btnHover`,title:r.lbl,onClick:()=>f(r.val),children:r.lbl})},`group-child-${r.val}`))]}),i.type==="group-title"&&V.jsx("h4",{className:n(ce.title),children:i.name})]},`group-acc-${i.name}`))})})]})}const ce={main:{h:300,w:200,py:3,ow:"hidden"},title:{m:0,pt:7,pb:5,pn:"sticky",tp:0,bd:"#fff",zx:9},fields_search:{pn:"relative",tn:"width .2s"},search_field:{mx:2,w:"98%",oe:"none",b:"none !important",brs:"9px !important",pl:"27px !important",pr:"5px !important",bd:"var(--white-0-97) !important",":focus":{oe:"none",bs:"0px 0px 0px 1.5px var(--b-50) !important",pr:"0px !important","& ~ .shortcut":{dy:"none"},"& ~ span svg":{cr:"var(--b-50)"}},"::placeholder":{fs:12},"::-webkit-search-cancel-button":{appearance:"none"}},search_icn:{pn:"absolute",tp:"50%",mx:6,lt:0,tm:"translateY(-50%)",cr:"var(--white-0-50)",curp:1,"& svg":{dy:"block"}},clear_icn:{pn:"absolute",tp:"50%",mx:6,rt:0,tm:"translateY(-50%)",cr:"var(--white-0-50)",curp:1,w:14,h:14,bd:"var(--white-0-83)",brs:20,backgroundPosition:"54% 50% !important",bi:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='Black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")`},groupList:{mt:10},ul:{mt:0,mb:10},li:{mb:0,mt:5,ml:5},button:{fw:"normal",brs:5,dy:"block",w:"100%",ta:"left",b:0,bd:"none",p:3,curp:1,"&:hover":{bd:"var(--white-0-95)",cr:"var(--black-0)"},fs:11}};function Qo(){const{css:k}=hn(),{formType:f,formID:n}=Ur(),[c,A]=he.useState("JavaScript"),[e,l]=he.useState(localStorage.getItem("bf-editor-theme")||"tomorrow"),[h,d]=he.useState(localStorage.getItem("bf-enable-editor")||"on"),p=he.useRef({}),[i,r]=Wr(Kr),g=Vr(Xr),[m,_]=he.useState(Do),$=["JavaScript","CSS"],b=[{label:"Light Theme",value:"tomorrow"},{label:"Dark Theme",value:"twilight"}],y=a=>{a&&!(a in p.current)&&(p.current[c]=a)},E=a=>{r(u=>We(Oe({},u),{[c]:a}))},P=a=>{const u=p.current[c],{editor:v}=u;v.session.insert(v.getCursorPosition(),a);const x=v.getValue();r(T=>We(Oe({},T),{[c]:x})),u.editor.renderer.scrollBarV.scrollTop!==u.editor.renderer.scrollBarV.maxScrollTop&&u.editor.gotoLine(u.editor.session.getLength()+1)},R=a=>{localStorage.setItem("bf-editor-theme",a),l(a)},C=a=>{const{checked:u}=a.target;u?(d("on"),localStorage.setItem("bf-enable-editor","on")):(d("off"),localStorage.setItem("bf-enable-editor","off"))},t=a=>{if(!bt){g(Oe({show:!0},Yr.customCode));return}if(f==="new"){Jr("#update-btn").click();return}const v=ft({form_id:n,customCodes:i},"bitforms_add_custom_code").then(x=>x);Zr.promise(v,{loading:mt("Updating..."),success:x=>{var T;return((T=x==null?void 0:x.data)==null?void 0:T.message)||(x==null?void 0:x.data)},error:mt("Error occurred, Please try again.")}),a.preventDefault()},o=()=>{if(c==="JavaScript")return Po;if(c==="CSS")return Fo},s={mode:c.toLowerCase(),theme:e,name:c,value:i[c]||"",onChange:a=>{E(a)},height:"330px",width:"100%",placeholder:'Write your code here...(Note: Do not use single line"//" comment)',setOptions:m,ref:y};return he.useEffect(()=>{f==="edit"&&!(i.JavaScript||i.CSS)?ft({form_id:n},"bitforms_get_custom_code").then(u=>{var v,x;return r({JavaScript:(v=u==null?void 0:u.data)==null?void 0:v.JavaScript,CSS:(x=u==null?void 0:u.data)==null?void 0:x.CSS,isFetched:!0}),u}):f==="new"&&ft({form_id:n,customCodes:i},"bitforms_add_custom_code").then(u=>u)},[]),V.jsxs("div",{children:[V.jsxs("div",{className:k({flx:"between"}),children:[V.jsx("div",{className:k(ye.w10,{flx:"center",my:2,ml:27}),children:V.jsx(ri,{width:300,options:$.map(a=>({label:a})),onChange:a=>A(a),defaultActive:"JavaScript",actionValue:c,wideTab:!0})}),V.jsx("div",{className:k(ye.flxc),children:V.jsxs(Qr,{place:"bottom-end",children:[V.jsx("button",{"data-testid":"titl-mor-opt-btn","data-close":!0,type:"button",className:k(Ve.btn),unselectable:"on",draggable:"false",style:{cursor:"pointer"},title:mt("Snippets"),children:V.jsx(ei,{size:"16"})}),V.jsx(zo,{options:o(),action:P})]})})]}),V.jsx(Zt,{open:c==="JavaScript",children:V.jsxs("div",{className:"pos-rel",children:[!bt&&V.jsx(Qt,{style:{left:0,width:"100%"}}),h==="on"?V.jsx(cn,We(Oe({},s),{onLoad:a=>{var u;(u=a==null?void 0:a.session)!=null&&u.$worker&&a.session.$worker.send("changeOptions",[{asi:!0}])}})):V.jsx("textarea",{className:k(Ve.editor,{h:330}),onChange:a=>E(a.target.value),value:i[c]||"",rows:"18"})]})}),V.jsx(Zt,{open:c==="CSS",children:V.jsxs("div",{className:"pos-rel",children:[!bt&&V.jsx(Qt,{style:{left:0,width:"100%"}}),h==="on"?V.jsx(cn,Oe({},s)):V.jsx("textarea",{className:k(Ve.editor,{h:330}),onChange:a=>E(a.target.value),value:i[c]||"",rows:"18"})]})}),V.jsxs("div",{className:k(ye.flxb,ye.mt1,ye.mb1,{jc:"between"}),children:[V.jsxs("div",{className:k(ye.flxc,ye.w10,Ve.editorBtn),children:[V.jsx(Jt,{className:k(ye.mr2),title:"Editor Mode",checked:h==="on",onChange:C}),h==="on"&&V.jsxs(V.Fragment,{children:[V.jsx(Gr,{onChange:R,value:e,options:b,size:"sm",className:k({w:150})}),V.jsx(Jt,{className:k(ye.ml4),title:"Word Wrap",checked:m.wrap,onChange:()=>_(a=>We(Oe({},a),{wrap:!a.wrap}))})]})]}),V.jsx("button",{onClick:t,type:"button",className:k(ye.btn,Ve.saveBtn),children:"Save"})]})]})}const Ve={editor:{w:"99%"},btn:{b:0,brs:5,curp:1,flx:"center-between"},theme:{dy:"flex",jc:"flex-end"},editorBtn:{fs:12,pr:5},saveBtn:{bc:"var(--b-50)",brs:8,fs:13,fw:800,px:15,py:8,cr:"var(--white-100)",":hover":{bd:"var(--b-36)"}}},Do={autoScrollEditorIntoView:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2,animatedScroll:!0,showFoldWidgets:!0,displayIndentGuides:!0,enableEmmet:!0,enableMultiselect:!0,highlightSelectedWord:!0,fontSize:15,useSoftTabs:!0,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0};export{Qo as default};
